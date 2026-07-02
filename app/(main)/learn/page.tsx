import { redirect } from "next/navigation";
import Link from "next/link";
import { PlayCircle, Trophy, Flame, Star, Compass, CheckCircle, Rocket } from "lucide-react";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { 
  getCourseCompletions, 
  getCourses, 
  getStreak, 
  getUserProgress, 
  getUserSubscription,
  getCourseProgress
} from "@/db/queries";

const DashboardPage = async () => {
  const [
    userProgress, 
    userSubscription, 
    streak, 
    completions,
    allCourses,
  ] = await Promise.all([
    getUserProgress(),
    getUserSubscription(),
    getStreak(),
    getCourseCompletions(),
    getCourses(),
  ]);

  if (!userProgress) redirect("/onboarding");

  const isPro = !!userSubscription?.isActive;
  const activeCourse = userProgress.courses; // may be null
  const greeting = (() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  })();

  // Only fetch course progress if there IS an active course
  const courseProgress = activeCourse ? await getCourseProgress() : null;

  const activeCourseCompletion = activeCourse 
    ? completions.find(c => c.course_id === activeCourse.id) 
    : null;
  const isCompleted = !!activeCourseCompletion;

  const currentLevel = Math.floor(userProgress.points / 100) + 1;
  const pointsToNextLevel = 100 - (userProgress.points % 100);
  const nextLevelProgress = (userProgress.points % 100);

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6 max-w-[1200px] mx-auto">
      <StickyWrapper>
        {!isPro && <Promo />}
        <Quests points={userProgress.points} />
      </StickyWrapper>

      <FeedWrapper>
        <div className="pt-6 pb-12 w-full flex flex-col gap-8">
          
          {/* Header Section */}
          <div className="flex flex-col gap-2 px-2">
            <h1 className="text-3xl font-extrabold text-slate-800">
              {greeting}, {userProgress.user_name || "Developer"}!
            </h1>
            <p className="text-slate-500 text-lg">
              Ready to crush your learning goals today?
            </p>
          </div>

          {/* Quick Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-2">
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm">
              <Flame className="w-8 h-8 text-orange-500" />
              <div className="text-center">
                <p className="font-bold text-slate-800 text-xl">{streak?.streak_count || 0} Day Streak</p>
                <p className="text-slate-500 text-sm">Keep it up!</p>
              </div>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm">
              <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
              <div className="text-center">
                <p className="font-bold text-slate-800 text-xl">{userProgress.points} XP</p>
                <p className="text-slate-500 text-sm">Total Experience</p>
              </div>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm md:col-span-1 col-span-2">
              <Trophy className="w-8 h-8 text-sky-500" />
              <div className="text-center w-full">
                <p className="font-bold text-slate-800 text-xl">Level {currentLevel}</p>
                <div className="w-full bg-slate-200 rounded-full h-2 mt-2 max-w-[120px] mx-auto">
                  <div className="bg-sky-500 h-2 rounded-full" style={{ width: `${nextLevelProgress}%` }} />
                </div>
                <p className="text-slate-500 text-xs mt-1">{pointsToNextLevel} XP to Level {currentLevel + 1}</p>
              </div>
            </div>
          </div>

          {/* Primary Action Card — Jump Back In / Start First Course */}
          <div className="px-2 mt-4">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Jump Back In</h2>
            
            {activeCourse ? (
              /* User has an active course */
              <div className={`rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center shadow-sm cursor-pointer transition-colors group border-2 ${isCompleted ? 'bg-emerald-500 hover:bg-emerald-400 border-emerald-600' : 'bg-sky-500 hover:bg-sky-400 border-sky-600'}`}>
                <div className="flex flex-col items-center text-center w-full">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${isCompleted ? 'bg-emerald-700 text-emerald-100' : 'bg-sky-700 text-sky-100'}`}>
                      {isCompleted ? 'Completed' : 'In Progress'}
                    </span>
                    {!isCompleted && courseProgress?.activeUnit && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-white/20 text-white backdrop-blur-sm">
                        {courseProgress.activeUnit.section_tier || 'Beginner'} • Unit {courseProgress.activeUnit.order} • Lesson {courseProgress.activeLesson?.order}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{activeCourse.title}</h3>
                  <p className={`mb-6 max-w-sm ${isCompleted ? 'text-emerald-100' : 'text-sky-100'}`}>
                    {isCompleted 
                      ? 'You have finished this course! Review lessons to refresh your memory.' 
                      : (courseProgress?.activeLesson ? `Pick up exactly where you left off on: ${courseProgress.activeLesson.title}` : 'Pick up exactly where you left off and keep building your skills.')}
                  </p>
                  <Link 
                    href={`/learn/${activeCourse.id}`}
                    className="bg-white text-slate-800 font-bold px-8 py-3 rounded-xl inline-flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm"
                  >
                    <PlayCircle className={`w-5 h-5 ${isCompleted ? 'text-emerald-500' : 'text-sky-500'}`} /> 
                    {isCompleted ? 'Review Course' : 'Resume Learning'}
                  </Link>
                </div>
              </div>
            ) : (
              /* User has NO active course — show empty state */
              <div className="rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center shadow-sm border-2 border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-sky-50">
                <div className="bg-sky-100 p-4 rounded-full mb-4">
                  <Rocket className="w-10 h-10 text-sky-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Start Your Coding Journey</h3>
                <p className="text-slate-500 text-center mb-6 max-w-sm">
                  Browse our course catalog and pick a language to master. Your first lesson is just a click away!
                </p>
                <Link 
                  href="/discover"
                  className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-3 rounded-xl inline-flex items-center gap-2 transition-colors shadow-sm"
                >
                  <Compass className="w-5 h-5" /> 
                  Explore Courses
                </Link>
              </div>
            )}
          </div>

          {/* Secondary Actions / Discovery Callout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 mt-4">
            <Link href="/discover" className="bg-indigo-50 border-2 border-indigo-100 rounded-2xl p-6 flex items-center justify-between hover:bg-indigo-100 transition group">
              <div>
                <h3 className="text-lg font-bold text-indigo-900 mb-1">Explore Catalog</h3>
                <p className="text-indigo-600 text-sm">Find your next skill</p>
              </div>
              <div className="bg-indigo-200 p-3 rounded-full group-hover:scale-110 transition">
                <Compass className="w-6 h-6 text-indigo-700" />
              </div>
            </Link>

            {completions.length > 0 && (
              <div className="bg-emerald-50 border-2 border-emerald-100 rounded-2xl p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-emerald-900 mb-1">Achievements</h3>
                  <p className="text-emerald-600 text-sm">{completions.length} Course{completions.length > 1 ? 's' : ''} Completed</p>
                </div>
                <div className="bg-emerald-200 p-3 rounded-full">
                  <CheckCircle className="w-6 h-6 text-emerald-700" />
                </div>
              </div>
            )}
          </div>

        </div>
      </FeedWrapper>
    </div>
  );
};

export default DashboardPage;
