"use server";

import { createClient } from "@/lib/supabase/server";

export type Achievement = {
  id: number;
  title: string;
  description: string;
  icon_src: string;
  requirement_type: string;
  requirement_value: number;
};

/**
 * Checks all defined achievements against the user's current progress.
 * Unlocks any new achievements and awards XP to user_progress.
 * Returns the list of newly unlocked achievements.
 */
export const checkAndUnlockAchievements = async (userId: string) => {
  try {
    const supabase = await createClient();

    // 1. Fetch user stats using the RPC function
    const { data: statsData, error: statsError } = await supabase
      .rpc("get_user_stats", { user_uuid: userId });

    if (statsError || !statsData || statsData.length === 0) {
      console.error("[checkAndUnlockAchievements] Error fetching stats:", statsError);
      return [];
    }

    const { xp_points, streak_days, completed_lessons_count, completed_courses_count } = statsData[0];

    // 2. Fetch all defined achievements
    const { data: achievements, error: achievementsError } = await supabase
      .from("achievements")
      .select("*");

    if (achievementsError || !achievements) {
      console.error("[checkAndUnlockAchievements] Error fetching achievements:", achievementsError);
      return [];
    }

    // 3. Fetch already unlocked achievements for the user
    const { data: userAchievements, error: userAchievementsError } = await supabase
      .from("user_achievements")
      .select("achievement_id")
      .eq("user_id", userId);

    if (userAchievementsError) {
      console.error("[checkAndUnlockAchievements] Error fetching user achievements:", userAchievementsError);
      return [];
    }

    const unlockedIds = new Set(userAchievements?.map((ua) => ua.achievement_id) || []);
    const newlyUnlocked: Achievement[] = [];

    // 4. Evaluate each achievement
    for (const achievement of achievements as Achievement[]) {
      if (unlockedIds.has(achievement.id)) continue;

      let qualified = false;

      switch (achievement.requirement_type) {
        case "XP":
          qualified = xp_points >= achievement.requirement_value;
          break;
        case "STREAK":
          qualified = streak_days >= achievement.requirement_value;
          break;
        case "LESSONS_COMPLETED":
          qualified = completed_lessons_count >= achievement.requirement_value;
          break;
        case "COURSE_COMPLETED":
          qualified = completed_courses_count >= achievement.requirement_value;
          break;
        default:
          break;
      }

      if (qualified) {
        // Unlock achievement
        const { error: unlockError } = await supabase
          .from("user_achievements")
          .insert({
            user_id: userId,
            achievement_id: achievement.id,
          });

        if (!unlockError) {
          newlyUnlocked.push(achievement);

          // Award bonus XP based on achievement difficulty
          let xpAward = 50;
          if (achievement.requirement_value >= 1000 || achievement.requirement_value >= 10) {
            xpAward = 250;
          } else if (achievement.requirement_value >= 500 || achievement.requirement_value >= 7) {
            xpAward = 100;
          }

          // Update user progress points
          await supabase
            .from("user_progress")
            .update({
              points: xp_points + xpAward,
            })
            .eq("user_id", userId);
        } else {
          console.error(`[checkAndUnlockAchievements] Failed to unlock ${achievement.title}:`, unlockError.message);
        }
      }
    }

    return newlyUnlocked;
  } catch (error) {
    console.error("[checkAndUnlockAchievements] Unexpected error:", error);
    return [];
  }
};
