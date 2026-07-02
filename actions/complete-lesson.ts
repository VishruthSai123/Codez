"use server";

import { revalidatePath } from "next/cache";

/**
 * This action is called from the UI purely to trigger Next.js cache revalidation
 * across the app after a lesson is completed and the celebration animation finishes.
 * The actual database mutations for progress happen in `upsertChallengeProgress`.
 */
export const completeLesson = async (lessonId: number, courseId?: number) => {
  revalidatePath("/learn");
  revalidatePath("/lesson");
  revalidatePath("/quests");
  revalidatePath("/leaderboard");
  revalidatePath("/discover");
  revalidatePath(`/lesson/${lessonId}`);
  if (courseId) {
    revalidatePath(`/learn/${courseId}`);
  }
};
