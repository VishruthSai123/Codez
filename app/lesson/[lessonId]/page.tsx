import { redirect } from "next/navigation";

import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries";
import { createClient } from "@/lib/supabase/server";

import { Quiz } from "../quiz";

type LessonIdPageProps = {
  params: Promise<{
    lessonId: string;
  }>;
};

const LessonIdPage = async ({ params }: LessonIdPageProps) => {
  const { lessonId } = await params;

  const lessonData = getLesson(Number(lessonId));
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [lesson, userProgress, userSubscription] = await Promise.all([
    lessonData,
    userProgressData,
    userSubscriptionData,
  ]);

  if (!lesson || !userProgress) return redirect("/learn");

  // Resolve the courseId for this lesson so quiz routes back to the correct roadmap
  let courseId = userProgress.active_course_id;
  const supabase = await createClient();
  const { data: unitData } = await supabase
    .from("lessons")
    .select("unit_id, units(course_id)")
    .eq("id", Number(lessonId))
    .single();
  
  if (unitData?.units && typeof unitData.units === "object" && "course_id" in unitData.units) {
    courseId = (unitData.units as any).course_id;
  }

  const initialPercentage =
    (lesson.challenges.filter((challenge: any) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialLessonId={lesson.id}
      courseId={courseId || 0}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={userSubscription}
    />
  );
};

export default LessonIdPage;

