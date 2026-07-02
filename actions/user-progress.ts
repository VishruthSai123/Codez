"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { MAX_HEARTS, POINTS_TO_REFILL } from "@/constants";
import {
  getCourseById,
  getUserProgress,
  getUserSubscription,
} from "@/db/queries";
import { createClient } from "@/lib/supabase/server";

export const upsertUserProgress = async (courseId: number) => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized.");

  const userId = user.id;

  const course = await getCourseById(courseId);

  if (!course) throw new Error("Course not found.");

  // We no longer throw if the course is empty — the user should be able
  // to enroll in a course even if content hasn't been added yet.
  // The course roadmap page handles empty units gracefully.

  const existingUserProgress = await getUserProgress();

  if (existingUserProgress) {
    const { error } = await supabase
      .from("user_progress")
      .update({
        active_course_id: courseId,
        user_name: user.user_metadata?.name || "User",
        user_image_src: user.user_metadata?.avatar_url || "/mascot.svg",
      })
      .eq("user_id", userId);

    if (error) throw new Error(error.message);

    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
  }

  const { error } = await supabase.from("user_progress").insert({
    user_id: userId,
    active_course_id: courseId,
    user_name: user.user_metadata?.name || "User",
    user_image_src: user.user_metadata?.avatar_url || "/mascot.svg",
  });

  if (error) throw new Error(error.message);

  revalidatePath("/courses");
  revalidatePath("/learn");
  redirect("/learn");
};

export const reduceHearts = async (challengeId: number) => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized.");
  const userId = user.id;

  const currentUserProgress = await getUserProgress();
  const userSubscription = await getUserSubscription();

  const { data: challenge, error: challengeError } = await supabase
    .from("challenges")
    .select("*")
    .eq("id", challengeId)
    .single();

  if (challengeError || !challenge) throw new Error("Challenge not found.");

  const lessonId = challenge.lesson_id;

  const { data: existingChallengeProgress } = await supabase
    .from("challenge_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("challenge_id", challengeId)
    .single();

  const isPractice = !!existingChallengeProgress;

  if (isPractice) return { error: "practice" };

  if (!currentUserProgress) throw new Error("User progress not found.");

  if (userSubscription?.isActive) return { error: "subscription" };

  if (currentUserProgress.hearts === 0) return { error: "hearts" };

  const { error } = await supabase
    .from("user_progress")
    .update({
      hearts: Math.max(currentUserProgress.hearts - 1, 0),
    })
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  revalidatePath("/shop");
  revalidatePath("/learn");
  revalidatePath("/quests");
  revalidatePath("/leaderboard");
  revalidatePath(`/lesson/${lessonId}`);
};

export const refillHearts = async () => {
  const currentUserProgress = await getUserProgress();

  if (!currentUserProgress) return { error: "User progress not found." };
  if (currentUserProgress.hearts === MAX_HEARTS)
    return { error: "Hearts are already full." };
  if (currentUserProgress.points < POINTS_TO_REFILL)
    return { error: "Not enough points." };

  const supabase = await createClient();

  const { error } = await supabase
    .from("user_progress")
    .update({
      hearts: MAX_HEARTS,
      points: currentUserProgress.points - POINTS_TO_REFILL,
    })
    .eq("user_id", currentUserProgress.user_id);

  if (error) {
    console.error("Supabase update error in refillHearts:", error);
    return { error: error.message };
  }

  revalidatePath("/shop");
  revalidatePath("/learn");
  revalidatePath("/quests");
  revalidatePath("/leaderboard");
  return { success: true };
};
