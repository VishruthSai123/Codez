"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/learn",
    icon: "/learn.svg",
  },
  {
    label: "Discover",
    href: "/discover",
    icon: "/quests.svg",
  },
  {
    label: "Leaderboard",
    href: "/leaderboard",
    icon: "/leaderboard.svg",
  },
  {
    label: "Quests",
    href: "/quests",
    icon: "/quests.svg", // Reusing this icon for quests
  },
  {
    label: "Profile",
    href: "/profile",
    icon: "/mascot.svg",
  },
];

export const BottomNavigation = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Always show near top or when scrolling up
    if (latest <= 50 || latest < previous) {
      setHidden(false);
    } 
    // Hide when scrolling down
    else if (latest > previous && latest > 150) {
      setHidden(true);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="fixed bottom-0 left-0 w-full z-50 lg:hidden"
    >
      <div className="bg-white/80 backdrop-blur-md border-t-2 border-slate-100 px-2 pb-4 pt-2">
        <div className="flex items-center justify-around h-[70px]">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center w-full h-full gap-y-1 rounded-xl transition-all duration-300",
                  isActive ? "bg-sky-100/50" : "hover:bg-slate-50"
                )}
              >
                <div className={cn("relative w-8 h-8 transition-transform duration-300", isActive && "scale-110")}>
                  <Image
                    src={item.icon}
                    alt={item.label}
                    fill
                    className={cn(
                      "object-contain",
                      !isActive && "opacity-60 grayscale"
                    )}
                  />
                </div>
                <span 
                  className={cn(
                    "text-[10px] font-bold tracking-wide",
                    isActive ? "text-sky-500" : "text-slate-500"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};
