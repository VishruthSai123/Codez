import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Quests } from "@/components/quests";
import { Promo } from "@/components/promo";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import { PreferencesForm } from "./preferences-form";

const PreferencesPage = async () => {
  const [userProgress, userSubscription] = await Promise.all([
    getUserProgress(),
    getUserSubscription(),
  ]);

  if (!userProgress || !userProgress.courses) redirect("/courses");

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6 max-w-[1200px] mx-auto">
      <StickyWrapper>
        {!isPro && <Promo />}
        <Quests points={userProgress.points} />
      </StickyWrapper>

      <FeedWrapper>
        <div className="flex w-full flex-col items-center">
          <div className="w-full flex items-center justify-between max-w-[600px] mb-6">
            <Link 
              href="/settings"
              className="p-2 border-2 rounded-xl hover:bg-slate-50 transition"
            >
              <ArrowLeft className="w-5 h-5 text-slate-500" />
            </Link>
            <h1 className="text-2xl font-bold text-neutral-800">Learning Preferences</h1>
            <div className="w-9" /> {/* Spacer */}
          </div>

          <p className="mb-6 text-center text-lg text-muted-foreground">
            Update your interests to personalize your Discovery Hub.
          </p>

          <div className="flex w-full max-w-[600px] flex-col gap-y-6">
            <PreferencesForm 
              initialInterests={userProgress.interests || []} 
            />
          </div>
        </div>
      </FeedWrapper>
    </div>
  );
};

export default PreferencesPage;
