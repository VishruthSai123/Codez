"use server";

import { revalidatePath } from "next/cache";

import { getStreak } from "@/db/queries";
import { createClient } from "@/lib/supabase/server";

export const updateStreak = async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const currentStreak = await getStreak();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (!currentStreak) {
    // First time activity
    const { error } = await supabase.from("user_streaks").insert({
      user_id: userId,
      streak_count: 1,
      last_activity: new Date().toISOString(),
    });

    if (error) throw new Error(error.message);
  } else {
    const lastActivity = new Date(currentStreak.last_activity!);
    lastActivity.setHours(0, 0, 0, 0);

    const diffDays = Math.floor(
      (today.getTime() - lastActivity.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffDays === 1) {
      // Consecutive day
      const { error } = await supabase
        .from("user_streaks")
        .update({
          streak_count: currentStreak.streak_count + 1,
          last_activity: new Date().toISOString(),
        })
        .eq("user_id", userId);

      if (error) throw new Error(error.message);
    } else if (diffDays > 1) {
      // Streak broken
      const { error } = await supabase
        .from("user_streaks")
        .update({
          streak_count: 1,
          last_activity: new Date().toISOString(),
        })
        .eq("user_id", userId);

      if (error) throw new Error(error.message);
    }
    // If diffDays === 0, they already did an activity today, so do nothing.
  }

  revalidatePath("/learn");
  revalidatePath("/lesson");
  revalidatePath("/quests");
  revalidatePath("/leaderboard");
  revalidatePath("/shop");
};
