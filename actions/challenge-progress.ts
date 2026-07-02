"use server";

import { revalidatePath } from "next/cache";

import { MAX_HEARTS } from "@/constants";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import { createClient } from "@/lib/supabase/server";
import { updateStreak } from "./user-streak";
import { checkAndRecordCourseCompletion } from "./course-completion";
import { checkAndUnlockAchievements } from "./achievements";

export const upsertChallengeProgress = async (
  challengeId: number,
  revalidate: boolean = true
) => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized.");
  const userId = user.id;

  const currentUserProgress = await getUserProgress();
  const userSubscription = await getUserSubscription();

  if (!currentUserProgress) throw new Error("User progress not found.");

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

  if (
    currentUserProgress.hearts === 0 &&
    !isPractice &&
    !userSubscription?.isActive
  )
    return { error: "hearts" };

  if (isPractice) {
    const { error: updateProgressError } = await supabase
      .from("challenge_progress")
      .update({ completed: true })
      .eq("id", existingChallengeProgress.id);

    if (updateProgressError) throw new Error(updateProgressError.message);

    const { error: updateUserError } = await supabase
      .from("user_progress")
      .update({
        hearts: Math.min(currentUserProgress.hearts + 1, MAX_HEARTS),
        points: currentUserProgress.points + 10,
      })
      .eq("user_id", userId);

    if (updateUserError) throw new Error(updateUserError.message);

    const unlockedAchievements = await checkAndUnlockAchievements(userId);

    if (revalidate) {
      revalidatePath("/learn");
      revalidatePath("/profile");
      revalidatePath("/lesson");
      revalidatePath("/quests");
      revalidatePath("/leaderboard");
      revalidatePath(`/lesson/${lessonId}`);
    }
    return { success: true, unlockedAchievements };
  }

  const { error: insertError } = await supabase
    .from("challenge_progress")
    .insert({
      challenge_id: challengeId,
      user_id: userId,
      completed: true,
    });

  if (insertError) throw new Error(insertError.message);

  const { error: updateError } = await supabase
    .from("user_progress")
    .update({
      points: currentUserProgress.points + 10,
    })
    .eq("user_id", userId);

  if (updateError) throw new Error(updateError.message);

  await updateStreak();

  // Check if course is completed (extracted to dedicated action)
  if (currentUserProgress.active_course_id) {
    await checkAndRecordCourseCompletion(
      currentUserProgress.active_course_id,
      revalidate
    );
  }

  // Check and unlock any new achievements
  const unlockedAchievements = await checkAndUnlockAchievements(userId);

  if (revalidate) {
    revalidatePath("/learn");
    revalidatePath("/profile");
    revalidatePath("/lesson");
    revalidatePath("/quests");
    revalidatePath("/leaderboard");
    revalidatePath(`/lesson/${lessonId}`);
  }

  return { success: true, unlockedAchievements };
};

