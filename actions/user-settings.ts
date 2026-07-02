"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export const updateUser = async (userName: string) => {
  if (!userName || userName.trim().length < 3) {
    throw new Error("Name must be at least 3 characters long.");
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const { error } = await supabase
    .from("user_progress")
    .update({ user_name: userName.trim() })
    .eq("user_id", userId);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/learn");
  revalidatePath("/leaderboard");
  revalidatePath("/settings");
  revalidatePath("/quests");
  revalidatePath("/shop");
};

export const updateInterests = async (interests: string[]) => {
  if (!interests || interests.length === 0) {
    throw new Error("Please select at least one interest.");
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const { error } = await supabase
    .from("user_progress")
    .update({ interests })
    .eq("user_id", userId);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/learn");
  revalidatePath("/settings");
};
