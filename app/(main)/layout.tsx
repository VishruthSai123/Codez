import type { PropsWithChildren } from "react";

import { TopHeader } from "@/components/top-header";
import { ScrollNavWrapper } from "@/components/scroll-nav-wrapper";
import { BottomNavigation } from "@/components/bottom-navigation";
import { Sidebar } from "@/components/sidebar";
import { redirect } from "next/navigation";
import { getUserProgress } from "@/db/queries";

const MainLayout = async ({ children }: PropsWithChildren) => {
  const userProgress = await getUserProgress();

  // If no user progress row exists at all, the user needs onboarding
  if (!userProgress) {
    redirect("/onboarding");
  }
  return (
    <>
      <ScrollNavWrapper>
        <TopHeader />
      </ScrollNavWrapper>
      <Sidebar className="hidden lg:flex" />
      <main className="h-full pt-[70px] pb-[130px] lg:pl-[256px] lg:pb-0">
        <div className="mx-auto h-full max-w-[1056px] pt-6">{children}</div>
      </main>
      <BottomNavigation />
    </>
  );
};

export default MainLayout;
