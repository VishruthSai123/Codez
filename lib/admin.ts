import { createClient } from "@/lib/supabase/server";

export const getIsAdmin = async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const adminIds = (process.env.ADMIN_USER_IDS || "").split(", "); // stored in .env file as string separated by comma(,) and space( )

  if (!user) return false;

  return adminIds.indexOf(user.id) !== -1;
};
