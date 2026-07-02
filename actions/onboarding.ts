"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";

export const completeOnboarding = async (data: {
  experience_level: string;
  daily_goal: number;
  learning_style: string;
  interests: string[];
}) => {
  try {
    const supabase = await createClient();
    const { data: authData } = await supabase.auth.getUser();

    if (!authData.user) {
      return { error: "Unauthorized" };
    }

    const { data: existingUserProgress } = await supabase
      .from("user_progress")
      .select("user_id")
      .eq("user_id", authData.user.id)
      .single();

    if (existingUserProgress) {
      const { error } = await supabase
        .from("user_progress")
        .update({
          experience_level: data.experience_level,
          daily_goal: data.daily_goal,
          learning_style: data.learning_style,
          interests: data.interests,
        })
        .eq("user_id", authData.user.id);

      if (error) {
        return { error: "Failed to update onboarding data" };
      }
    } else {
      const { error } = await supabase
        .from("user_progress")
        .insert({
          user_id: authData.user.id,
          user_name: authData.user.user_metadata?.name || authData.user.email || "User",
          user_image_src: authData.user.user_metadata?.avatar_url || "/mascot.svg",
          experience_level: data.experience_level,
          daily_goal: data.daily_goal,
          learning_style: data.learning_style,
          interests: data.interests,
        });

      if (error) {
        return { error: "Failed to create onboarding data" };
      }
    }

    revalidatePath("/learn");
    return { success: true };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
