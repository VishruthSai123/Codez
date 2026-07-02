"use server";

import { revalidatePath } from "next/cache";

import { getCourseProgress, getUserProgress } from "@/db/queries";
import { createClient } from "@/lib/supabase/server";

/**
 * Check if a course is fully completed and, if so, record completion + certificate.
 * 
 * Extracted from upsertChallengeProgress to follow single-responsibility principle.
 * Called after every challenge completion to check if the entire course is now done.
 */
export const checkAndRecordCourseCompletion = async (
  courseId: number,
  revalidate: boolean = true
) => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;
  const userId = user.id;

  // Check if this course still has uncompleted lessons
  const courseProgress = await getCourseProgress(courseId);
  
  // If there's still an active (uncompleted) lesson, course is not done
  if (courseProgress?.activeLessonId) return null;

  // Check if already recorded
  const { data: existingCompletion } = await supabase
    .from("course_completions")
    .select("id")
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .single();

  if (existingCompletion) return existingCompletion;

  // Calculate actual stats
  const userProgress = await getUserProgress();
  const totalPoints = userProgress?.points || 0;

  // Record course completion
  const { data: completion, error: completionError } = await supabase
    .from("course_completions")
    .insert({
      user_id: userId,
      course_id: courseId,
      xp_earned: totalPoints,
      accuracy_percentage: 100, // TODO: Calculate from actual attempts vs. correct
      final_score: 1000,
    })
    .select("id")
    .single();

  if (completionError) {
    console.error("[CourseCompletion] Failed to record:", completionError.message);
    return null;
  }

  // Issue certificate
  const { error: certError } = await supabase
    .from("certificates")
    .insert({
      user_id: userId,
      course_id: courseId,
    });

  if (certError) {
    console.error("[CourseCompletion] Failed to issue certificate:", certError.message);
  }

  if (revalidate) {
    revalidatePath("/learn");
    revalidatePath("/profile");
    revalidatePath("/discover");
    revalidatePath(`/learn/${courseId}`);
  }

  return completion;
};
