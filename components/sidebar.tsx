import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { LogoutButton } from "./logout-button";
import { SidebarItem } from "./sidebar-item";

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div
      className={cn(
        "left-0 top-[70px] flex h-[calc(100vh-70px)] flex-col border-r-2 px-4 lg:fixed lg:w-[256px]",
        className
      )}
    >
      <div className="flex flex-1 flex-col gap-y-2 mt-4">
        <SidebarItem label="Home" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem label="Discover" href="/discover" iconSrc="/quests.svg" />
        <SidebarItem label="Leaderboard" href="/leaderboard" iconSrc="/leaderboard.svg" />
        <SidebarItem label="Quests" href="/quests" iconSrc="/quests.svg" />
        <SidebarItem label="Profile" href="/profile" iconSrc="/mascot.svg" />
      </div>

      <div className="p-4">
        <LogoutButton />
      </div>
    </div>
  );
};
