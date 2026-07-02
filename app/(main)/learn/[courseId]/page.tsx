import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import {
  getCourseCompletion,
  getCourseProgress,
  getLessonPercentage,
  getStreak,
  getUnits,
  getUserProgress,
  getUserSubscription,
} from "@/db/queries";
import { CheckCircle, Trophy, Calendar } from "lucide-react";

import { Header } from "./header";
import { Unit } from "./unit";

type LearnCoursePageProps = {
  params: {
    courseId: string;
  };
};

const LearnCoursePage = async ({ params }: LearnCoursePageProps) => {
  const resolvedParams = await params;
  const courseId = parseInt(resolvedParams.courseId, 10);
  
  const userProgressData = getUserProgress();
  const courseProgressData = getCourseProgress(courseId);
  const lessonPercentageData = getLessonPercentage(courseId);
  const unitsData = getUnits(courseId);
  const userSubscriptionData = getUserSubscription();
  const streakData = getStreak();
  // We need to fetch the specific course being viewed
  const supabase = await import("@/lib/supabase/server").then(m => m.createClient());
  const courseReq = supabase.from("courses").select("*").eq("id", courseId).single();
  const [
    userProgress,
    units,
    courseProgress,
    lessonPercentage,
    userSubscription,
    streak,
    courseRes,
    courseCompletion
  ] = await Promise.all([
    userProgressData,
    unitsData,
    courseProgressData,
    lessonPercentageData,
    userSubscriptionData,
    streakData,
    courseReq,
    getCourseCompletion(courseId)
  ]);

  const course = courseRes.data;

  if (!userProgress || !course)
    redirect("/learn");

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.courses || course}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
          streak={streak?.streak_count || 0}
        />

        {!isPro && <Promo />}
        <Quests points={userProgress.points} />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={course.title} />

        {courseCompletion && (
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 mb-8 mt-4 flex flex-col md:flex-row items-center justify-between shadow-sm">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="bg-emerald-500 p-3 rounded-full flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-emerald-900">Course Completed!</h2>
                <div className="flex items-center gap-4 text-emerald-700 text-sm mt-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(courseCompletion.completed_at).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Trophy className="w-4 h-4" />
                    <span>+{courseCompletion.xp_earned} XP Earned</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <span className="bg-emerald-200 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                100% Mastery
              </span>
              <p className="text-emerald-600 text-sm mt-2 max-w-[200px]">
                You can review any lesson to refresh your memory!
              </p>
            </div>
          </div>
        )}

        {units.map((unit, index) => {
          const isFirstInSection = index === 0 || units[index - 1].section_tier !== unit.section_tier;
          
          return (
            <div key={unit.id} className="mb-10">
              {isFirstInSection && (
                <div className="mb-6 mt-8 flex items-center gap-4">
                  <div className="h-px bg-slate-200 flex-1"></div>
                  <h2 className="text-xl font-extrabold text-slate-400 uppercase tracking-widest">{unit.section_tier || 'Beginner'} Phase</h2>
                  <div className="h-px bg-slate-200 flex-1"></div>
                </div>
              )}
              <Unit
                id={unit.id}
                order={unit.order}
                description={unit.description}
                title={unit.title}
                lessons={unit.lessons}
                activeLesson={courseProgress?.activeLesson}
                activeLessonPercentage={lessonPercentage}
              />
            </div>
          );
        })}
      </FeedWrapper>
    </div>
  );
};

export default LearnCoursePage;
