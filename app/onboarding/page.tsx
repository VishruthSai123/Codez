import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { Wizard } from "./wizard";

export default async function OnboardingPage() {
  const supabase = await createClient();
  const { data: authData } = await supabase.auth.getUser();

  if (!authData.user) {
    redirect("/");
  }

  // Check if they already completed onboarding
  const { data: userProgress } = await supabase
    .from("user_progress")
    .select("experience_level")
    .eq("user_id", authData.user.id)
    .single();

  if (userProgress?.experience_level) {
    // If they already have an experience level, they've onboarded.
    redirect("/learn");
  }

  return <Wizard />;
}
