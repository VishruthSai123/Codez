import { FlameIcon, InfinityIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { Course } from "@/db/types";

type UserProgressProps = {
  activeCourse: Course;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
  streak: number;
};

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
  streak,
}: UserProgressProps) => {
  return (
    <div className="flex items-center gap-x-2 sm:gap-x-4">
      {/* Active Course - Hidden on mobile, visible on tablet+ */}
      <Link href="/courses" className="hidden sm:block">
        <Button variant="ghost">
          <Image
            src={activeCourse.image_src}
            alt={activeCourse.title}
            width={28}
            height={28}
          />
        </Button>
      </Link>

      <Link href="/profile?tab=shop">
        <Button variant="ghost" className="text-orange-500 font-bold px-2 sm:px-4">
          <Image
            src="/points.svg"
            height={24}
            width={24}
            alt="Points"
            className="mr-1.5"
          />
          {points}
        </Button>
      </Link>

      <Link href="/learn">
        <Button variant="ghost" className="text-orange-500 font-bold px-2 sm:px-4">
          <FlameIcon
            className={`h-5 w-5 mr-1.5 ${streak > 0 ? "fill-orange-500 text-orange-500" : "fill-neutral-200 text-neutral-200"}`}
          />
          {streak}
        </Button>
      </Link>

      <Link href="/profile?tab=shop">
        <Button variant="ghost" className="text-rose-500 font-bold px-2 sm:px-4">
          <Image
            src="/heart.svg"
            height={22}
            width={22}
            alt="Hearts"
            className="mr-1.5"
          />
          {hasActiveSubscription ? (
            <InfinityIcon className="stroke-3 h-4 w-4" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};
