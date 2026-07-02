import Image from "next/image";
import Link from "next/link";
import { UserProgress } from "@/components/user-progress";
import {
  getUserProgress,
  getUserSubscription,
  getStreak,
} from "@/db/queries";

export const TopHeader = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();
  const streakData = getStreak();

  const [userProgress, userSubscription, streak] = await Promise.all([
    userProgressData,
    userSubscriptionData,
    streakData,
  ]);

  const isPro = !!userSubscription?.isActive;

  return (
    <header className="h-[70px] w-full bg-white border-b-2 border-slate-100 flex items-center justify-between px-4 lg:px-8">
      {/* Left side: Logo & Wordmark */}
      <Link href="/learn" className="flex items-center gap-x-3">
        <Image src="/mascot.svg" alt="Codez Logo" height={40} width={40} />
        <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
          Codez
        </h1>
      </Link>

      {/* Right side: Status Indicators */}
      {userProgress && userProgress.courses && (
        <div className="flex-1 flex justify-end">
          <UserProgress
            activeCourse={userProgress.courses}
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={isPro}
            streak={streak?.streak_count || 0}
          />
        </div>
      )}
    </header>
  );
};
