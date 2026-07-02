import { cache } from "react";

import { createClient } from "@/lib/supabase/server";

import type {
  Course,
  UserProgressWithCourse,
  UnitWithLessons,
  CourseWithUnitsAndLessons,
  UserSubscription,
} from "./types";

const DAY_IN_MS = 86_400_000;

export const getCourses = cache(async () => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("courses")
    .select("*");

  if (error) throw new Error(error.message);

  return data as Course[];
});

export const getUserProgress = cache(async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;

  if (!userId) return null;

  const { data, error } = await supabase
    .from("user_progress")
    .select("*, courses(*)")
    .eq("user_id", userId)
    .single();

  if (error || !data) return null;

  return data as UserProgressWithCourse;
});

export const getUnits = cache(async (courseId?: number) => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;
  const userProgress = await getUserProgress();

  const targetCourseId = courseId || userProgress?.active_course_id;

  if (!userId || !targetCourseId) return [];

  const { data, error } = await supabase
    .from("units")
    .select("*, lessons(*, challenges(*, challenge_progress(*)))")
    .eq("course_id", targetCourseId)
    .order("order", { ascending: true });

  if (error || !data) return [];

  // Filter challenge_progress to only include the current user's progress,
  // and order lessons/challenges by their order field in application code
  const filteredData = (data as UnitWithLessons[]).map((unit) => ({
    ...unit,
    lessons: unit.lessons
      .sort((a, b) => a.order - b.order)
      .map((lesson) => ({
        ...lesson,
        challenges: lesson.challenges
          .sort((a, b) => a.order - b.order)
          .map((challenge) => ({
            ...challenge,
            challenge_progress: challenge.challenge_progress.filter(
              (progress) => progress.user_id === userId
            ),
          })),
      })),
  }));

  const normalizedData = filteredData.map((unit) => {
    const lessonsWithCompletedStatus = unit.lessons.map((lesson) => {
      if (lesson.challenges.length === 0)
        return { ...lesson, completed: false };

      const allCompletedChallenges = lesson.challenges.every((challenge) => {
        return (
          challenge.challenge_progress &&
          challenge.challenge_progress.length > 0 &&
          challenge.challenge_progress.every((progress) => progress.completed)
        );
      });

      return { ...lesson, completed: allCompletedChallenges };
    });

    return { ...unit, lessons: lessonsWithCompletedStatus };
  });

  return normalizedData;
});

export const getCourseById = cache(async (courseId: number) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("courses")
    .select("*, units(*, lessons(*))")
    .eq("id", courseId)
    .single();

  if (error || !data) return null;

  // Sort units and lessons by order in application code
  const sorted = {
    ...data,
    units: (data.units || [])
      .sort((a: { order: number }, b: { order: number }) => a.order - b.order)
      .map((unit: { lessons?: { order: number }[] }) => ({
        ...unit,
        lessons: (unit.lessons || []).sort((a: { order: number }, b: { order: number }) => a.order - b.order),
      })),
  };

  return sorted as CourseWithUnitsAndLessons;
});

export const getCourseProgress = cache(async (courseId?: number) => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;
  const userProgress = await getUserProgress();

  const targetCourseId = courseId || userProgress?.active_course_id;

  if (!userId || !targetCourseId) return null;

  const { data: unitsInActiveCourse, error } = await supabase
    .from("units")
    .select("*, lessons(*, challenges(*, challenge_progress(*)))")
    .eq("course_id", targetCourseId)
    .order("order", { ascending: true });

  if (error || !unitsInActiveCourse) return { activeLesson: undefined, activeLessonId: undefined, activeUnit: undefined };

  // Sort lessons and challenges, filter challenge_progress by user
  const processed = unitsInActiveCourse.map((unit: any) => ({
    ...unit,
    lessons: (unit.lessons || [])
      .sort((a: { order: number }, b: { order: number }) => a.order - b.order)
      .map((lesson: { challenges?: any[] }) => ({
        ...lesson,
        challenges: (lesson.challenges || []).map((challenge: { challenge_progress?: any[] }) => ({
          ...challenge,
          challenge_progress: (challenge.challenge_progress || []).filter(
            (progress: { user_id: string }) => progress.user_id === userId
          ),
        })),
      })),
  }));

  const firstUncompletedLesson = processed
    .flatMap((unit: { lessons: any[] }) => unit.lessons)
    .find((lesson: { challenges: any[] }) => {
      return lesson.challenges.some((challenge: { challenge_progress?: any[] }) => {
        return (
          !challenge.challenge_progress ||
          challenge.challenge_progress.length === 0 ||
          challenge.challenge_progress.some(
            (progress: { completed: boolean }) => !progress.completed
          )
        );
      });
    });

  const activeUnit = processed.find((unit: { lessons: any[] }) => 
    unit.lessons.some((lesson: { id: number }) => lesson.id === firstUncompletedLesson?.id)
  );

  return {
    activeLesson: firstUncompletedLesson || undefined,
    activeLessonId: firstUncompletedLesson?.id,
    activeUnit: activeUnit || undefined,
  };
});

export const getLesson = cache(async (id?: number) => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;

  if (!userId) return null;

  const courseProgress = await getCourseProgress(); // This gets progress for active course
  const lessonId = id || courseProgress?.activeLessonId;

  if (!lessonId) return null;

  const { data, error } = await supabase
    .from("lessons")
    .select("*, challenges(*, challenge_options(*), challenge_progress(*))")
    .eq("id", lessonId)
    .single();

  if (error || !data || !data.challenges) return null;

  const UNIVERSAL_FLOW_ORDER = [
    "motivation",
    "explanation",
    "comprehension",
    "fill_blank",
    "predict_output",
    "guided_practice",
    "independent_practice",
    "knowledge_check",
    "recap"
  ];

  // Filter challenge_progress by user and sort challenges by global flow order, then fallback to original order
  const normalizedChallenges = data.challenges
    .sort((a: { lesson_step?: string, order: number }, b: { lesson_step?: string, order: number }) => {
      const indexA = a.lesson_step ? UNIVERSAL_FLOW_ORDER.indexOf(a.lesson_step) : -1;
      const indexB = b.lesson_step ? UNIVERSAL_FLOW_ORDER.indexOf(b.lesson_step) : -1;
      
      // If both have valid steps, sort by the engine flow
      if (indexA !== -1 && indexB !== -1) {
        if (indexA !== indexB) return indexA - indexB;
      }
      
      // Fallback to integer order if steps are the same or missing
      return a.order - b.order;
    })
    .map((challenge: { challenge_progress?: any[], [key: string]: any }) => {
      const userProgress = (challenge.challenge_progress || []).filter(
        (progress: { user_id: string }) => progress.user_id === userId
      );

      const completed =
        userProgress.length > 0 &&
        userProgress.every((progress: { completed: boolean }) => progress.completed);

      return {
        ...challenge,
        challenge_progress: userProgress,
        completed,
      };
    });

  return { ...data, challenges: normalizedChallenges };
});

export const getLessonPercentage = cache(async (courseId?: number) => {
  const courseProgress = await getCourseProgress(courseId);

  if (!courseProgress?.activeLessonId) return 0;

  const lesson = await getLesson(courseProgress?.activeLessonId);

  if (!lesson) return 0;

  const completedChallenges = lesson.challenges.filter(
    (challenge: { completed: boolean }) => challenge.completed
  );

  const percentage = Math.round(
    (completedChallenges.length / lesson.challenges.length) * 100
  );

  return percentage;
});

export const getUserSubscription = cache(async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;

  if (!userId) return null;

  const { data, error } = await supabase
    .from("user_subscription")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error || !data) return null;

  const typedData = data as UserSubscription;

  const isActive =
    typedData.stripe_price_id &&
    new Date(typedData.stripe_current_period_end).getTime() + DAY_IN_MS >
      Date.now();

  return {
    ...typedData,
    isActive: !!isActive,
  };
});

export const getTopTenUsers = cache(async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;

  if (!userId) return [];

  const { data, error } = await supabase
    .from("user_progress")
    .select("user_id, user_name, user_image_src, points")
    .order("points", { ascending: false })
    .limit(10);

  if (error || !data) return [];

  return data;
});

export const getStreak = cache(async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;

  if (!userId) return null;

  const { data, error } = await supabase
    .from("user_streaks")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error || !data) return null;

  return data as import("./types").UserStreak;
});

export const getCourseCompletions = cache(async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;

  if (!userId) return [];

  const { data, error } = await supabase
    .from("course_completions")
    .select("*")
    .eq("user_id", userId);

  if (error || !data) return [];

  return data as import("./types").CourseCompletion[];
});

export const getCourseCompletion = cache(async (courseId: number) => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;

  if (!userId) return null;

  const { data, error } = await supabase
    .from("course_completions")
    .select("*")
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .single();

  if (error || !data) return null;

  return data as import("./types").CourseCompletion;
});

export const getAchievements = cache(async () => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("achievements")
    .select("*")
    .order("id", { ascending: true });

  if (error || !data) return [];
  return data as import("./types").Achievement[];
});

export const getUserAchievements = cache(async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;

  if (!userId) return [];

  const { data, error } = await supabase
    .from("user_achievements")
    .select("*")
    .eq("user_id", userId);

  if (error || !data) return [];
  return data as import("./types").UserAchievement[];
});

export const getAllCourseProgress = cache(async () => {
  const supabase = await import("@/lib/supabase/server").then(m => m.createClient());
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;

  if (!userId) return {};

  const { data: allData, error } = await supabase
    .from("courses")
    .select("id, units(id, order, section_tier, lessons(id, order, title, challenges(id, challenge_progress(*))))");

  if (error || !allData) return {};

  const progressMap: Record<number, {
    percentage: number;
    activeLesson: any;
    activeUnit: any;
    completed: boolean;
    started: boolean;
  }> = {};

  for (const course of allData) {
    const units = course.units || [];
    let totalChallenges = 0;
    let completedChallenges = 0;
    
    let firstUncompletedLesson = null;
    let activeUnit = null;

    const sortedUnits = units.sort((a: { order: number }, b: { order: number }) => a.order - b.order);
    
    for (const unit of sortedUnits) {
      const sortedLessons = (unit.lessons || []).sort((a: { order: number }, b: { order: number }) => a.order - b.order);
      for (const lesson of sortedLessons) {
        let lessonCompleted = true;
        const challenges = lesson.challenges || [];
        
        if (challenges.length === 0) lessonCompleted = false;

        for (const challenge of challenges) {
          totalChallenges++;
          const progress = (challenge.challenge_progress || []).filter((p: { user_id: string }) => p.user_id === userId);
          if (progress.length > 0 && progress.every((p: { completed: boolean }) => p.completed)) {
            completedChallenges++;
          } else {
            lessonCompleted = false;
          }
        }

        if (!lessonCompleted && !firstUncompletedLesson && challenges.length > 0) {
          firstUncompletedLesson = lesson;
          activeUnit = unit;
        }
      }
    }

    const percentage = totalChallenges === 0 ? 0 : Math.round((completedChallenges / totalChallenges) * 100);

    progressMap[course.id] = {
      percentage,
      activeLesson: firstUncompletedLesson,
      activeUnit: activeUnit,
      completed: totalChallenges > 0 && completedChallenges === totalChallenges,
      started: completedChallenges > 0
    };
  }

  return progressMap;
});

export const getCompletedLessonsCount = cache(async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;

  if (!userId) return 0;

  const { data, error } = await supabase
    .rpc("get_user_stats", { user_uuid: userId });

  if (error || !data || data.length === 0) return 0;

  return data[0].completed_lessons_count as number;
});

export const getCertificateByVerificationId = async (verificationId: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("certificates")
    .select("*, courses(*), user_progress(*)")
    .eq("verification_id", verificationId)
    .single();

  if (error || !data) return null;

  return data as any;
};

export const getCertificates = cache(async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;

  if (!userId) return [];

  const { data, error } = await supabase
    .from("certificates")
    .select("*")
    .eq("user_id", userId);

  if (error || !data) return [];

  return data as import("./types").Certificate[];
});



