"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export const LogoutButton = () => {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      toast.error(error.message);
      return;
    }
    
    router.push("/login");
    router.refresh();
  };

  return (
    <Button 
      variant="ghost" 
      onClick={handleLogout}
      className="w-full justify-start gap-x-2 text-rose-500 hover:text-rose-600 hover:bg-rose-50"
    >
      <LogOut className="h-5 w-5" />
      Sign Out
    </Button>
  );
};
