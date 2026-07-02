import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { Button } from "@/components/ui/button";

import {
  getUserProgress,
  getUserSubscription,
  getStreak,
  getCourseCompletions,
  getAchievements,
  getUserAchievements,
  getCourses,
  getCompletedLessonsCount,
  getCertificates,
} from "@/db/queries";

import { Items } from "../shop/items";
import { SettingsForm } from "../settings/settings-form";
import { LogoutButton } from "@/components/logout-button";

type Props = {
  searchParams: Promise<{
    tab?: string;
  }>;
};

export default async function ProfilePage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const tab = resolvedParams.tab || "overview";
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();
  const streakData = getStreak();
  const courseCompletionsData = getCourseCompletions();
  const achievementsData = getAchievements();
  const userAchievementsData = getUserAchievements();
  const coursesData = getCourses();
  const completedLessonsCountData = getCompletedLessonsCount();
  const certificatesData = getCertificates();

  const [
    userProgress,
    userSubscription,
    streak,
    courseCompletions,
    achievements,
    userAchievements,
    courses,
    completedLessonsCount,
    certificates,
  ] = await Promise.all([
    userProgressData,
    userSubscriptionData,
    streakData,
    courseCompletionsData,
    achievementsData,
    userAchievementsData,
    coursesData,
    completedLessonsCountData,
    certificatesData,
  ]);

  if (!userProgress) {
    redirect("/onboarding");
  }

  const isPro = !!userSubscription?.isActive;
  
  // Combine course completions with course details and certificates
  const completedCoursesWithDetails = courseCompletions.map(completion => {
    const course = courses.find(c => c.id === completion.course_id);
    const certificate = certificates.find(cert => cert.course_id === completion.course_id);
    return {
      ...completion,
      course,
      certificate,
    };
  }).filter(c => c.course); // Remove if course somehow got deleted

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6 max-w-[1200px] mx-auto">
      <StickyWrapper>
        {!isPro && <Promo />}
        <Quests points={userProgress.points} />
      </StickyWrapper>

      <FeedWrapper>
          <div className="w-full flex flex-col pt-6 pb-24">
          
          {/* Tabs Navigation */}
          <div className="flex items-center gap-2 mb-8 border-b-2 border-slate-100 pb-4 overflow-x-auto">
            <Link 
              href="/profile?tab=overview" 
              className={`font-bold px-4 py-2 rounded-xl transition whitespace-nowrap ${tab === 'overview' ? 'bg-sky-100 text-sky-500' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              Overview
            </Link>
            <Link 
              href="/profile?tab=shop" 
              className={`font-bold px-4 py-2 rounded-xl transition whitespace-nowrap ${tab === 'shop' ? 'bg-sky-100 text-sky-500' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              Shop
            </Link>
            <Link 
              href="/profile?tab=settings" 
              className={`font-bold px-4 py-2 rounded-xl transition whitespace-nowrap ${tab === 'settings' ? 'bg-sky-100 text-sky-500' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              Settings
            </Link>
          </div>

          {tab === "overview" && (
            <div className="flex flex-col gap-y-4">
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 p-8 bg-white rounded-3xl border-2 border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-sky-400 to-sky-500 opacity-20"></div>
                
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-md relative z-10 bg-slate-100 flex items-center justify-center overflow-hidden">
                   {userProgress.user_image_src ? (
                     <Avatar className="w-full h-full">
                       <AvatarImage src={userProgress.user_image_src} className="object-cover" />
                     </Avatar>
                   ) : (
                     <Image src="/mascot.svg" alt="User Avatar" width={60} height={60} />
                   )}
                </div>
                
                <div className="flex flex-col items-center sm:items-start relative z-10">
                  <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                    {userProgress.user_name || "Developer"}
                  </h1>
                  <p className="text-slate-500 font-medium mt-1">
                    {userProgress.experience_level 
                      ? userProgress.experience_level.charAt(0).toUpperCase() + userProgress.experience_level.slice(1) + " Developer"
                      : "Learning to code"}
                  </p>
                </div>
              </div>

              {/* Statistics Grid */}
              <h2 className="text-2xl font-bold text-slate-800 mb-4 px-2">Learning Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 flex flex-col items-center shadow-sm">
                  <Image src="/points.svg" alt="XP" width={32} height={32} className="mb-2" />
                  <span className="text-2xl font-bold text-slate-800">{userProgress.points}</span>
                  <span className="text-sm font-medium text-slate-500 uppercase">Total XP</span>
                </div>
                <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 flex flex-col items-center shadow-sm">
                  <Image src="/heart.svg" alt="Hearts" width={32} height={32} className="mb-2" />
                  <span className="text-2xl font-bold text-slate-800">{userProgress.hearts}</span>
                  <span className="text-sm font-medium text-slate-500 uppercase">Hearts</span>
                </div>
                <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 flex flex-col items-center shadow-sm">
                  <Image src="/streak.svg" alt="Streak" width={32} height={32} className="mb-2" />
                  <span className="text-2xl font-bold text-slate-800">{streak?.streak_count || 0}</span>
                  <span className="text-sm font-medium text-slate-500 uppercase">Day Streak</span>
                </div>
                <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 flex flex-col items-center shadow-sm">
                  <Image src="/learn.svg" alt="Courses" width={32} height={32} className="mb-2" />
                  <span className="text-2xl font-bold text-slate-800">{courseCompletions.length}</span>
                  <span className="text-sm font-medium text-slate-500 uppercase">Courses Done</span>
                </div>
              </div>

              {/* Achievements Section */}
              <h2 className="text-2xl font-bold text-slate-800 mb-4 px-2">Achievements</h2>
              <div className="bg-white p-6 md:p-8 rounded-3xl border-2 border-slate-100 mb-12 shadow-sm">
                {achievements.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {achievements.map((achievement) => {
                      const isUnlocked = userAchievements.some(ua => ua.achievement_id === achievement.id);
                      
                      // Calculate progress
                      let currentProgress = 0;
                      let targetProgress = achievement.requirement_value;
                      
                      switch (achievement.requirement_type) {
                        case "XP":
                          currentProgress = userProgress.points;
                          break;
                        case "STREAK":
                          currentProgress = streak?.streak_count || 0;
                          break;
                        case "LESSONS_COMPLETED":
                          currentProgress = completedLessonsCount;
                          break;
                        case "COURSE_COMPLETED":
                          currentProgress = completedCoursesWithDetails.length;
                          break;
                        default:
                          break;
                      }

                      const progressPercentage = Math.min(Math.round((currentProgress / targetProgress) * 100), 100);

                      return (
                        <div 
                          key={achievement.id}
                          className={`flex flex-col items-center text-center p-5 rounded-2xl border-2 transition-all duration-300 ${
                            isUnlocked 
                              ? "bg-slate-50 border-slate-200" 
                              : "bg-white border-slate-100 opacity-75"
                          }`}
                        >
                          <div className={`w-16 h-16 relative mb-4 flex items-center justify-center rounded-xl p-2 bg-slate-100 ${!isUnlocked && "grayscale opacity-50"}`}>
                            <Image 
                              src={achievement.icon_src || "/mascot.svg"}
                              alt={achievement.title}
                              fill
                              className="object-contain p-1"
                            />
                          </div>
                          <h3 className="font-bold text-slate-800">{achievement.title}</h3>
                          <p className="text-xs text-slate-500 mt-1 max-w-[200px] h-8 flex items-center justify-center">{achievement.description}</p>
                          
                          {isUnlocked ? (
                            <span className="mt-4 text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                              Unlocked
                            </span>
                          ) : (
                            <div className="w-full mt-4">
                              <div className="flex justify-between text-xs text-slate-400 font-bold mb-1">
                                <span>Progress</span>
                                <span>{currentProgress} / {targetProgress}</span>
                              </div>
                              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-sky-500 transition-all duration-500" 
                                  style={{ width: `${progressPercentage}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-slate-500">No achievements available yet.</p>
                  </div>
                )}
              </div>

               {/* Completed Courses Section */}
              <h2 className="text-2xl font-bold text-slate-800 mb-4 px-2">Completed Courses</h2>
              {completedCoursesWithDetails.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {completedCoursesWithDetails.map((completion) => (
                    <div 
                      key={completion.id} 
                      className="flex items-center gap-4 bg-white p-4 rounded-2xl border-2 border-slate-100 shadow-sm"
                    >
                      <div className="w-16 h-16 relative bg-sky-100 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                         <Image src={completion.course!.image_src} alt="Course icon" width={40} height={40} />
                      </div>
                      <div className="flex flex-col flex-1">
                        <h3 className="font-bold text-slate-800">{completion.course!.title}</h3>
                        <p className="text-sm text-slate-500 mt-1">
                          Completed on {new Date(completion.completed_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-600 rounded-xl font-bold">
                          <Image src="/points.svg" alt="XP" width={20} height={20} />
                          <span>+{completion.xp_earned} XP</span>
                        </div>
                        {completion.certificate && (
                          <Link href={`/certificates/${completion.certificate.verification_id}`}>
                            <Button variant="secondary" className="font-bold border-2 border-slate-200 shadow-sm">
                              View Certificate
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-slate-50 border-2 border-slate-100 rounded-3xl p-10 flex flex-col items-center justify-center text-center">
                  <Image src="/mascot_sad.svg" alt="Sad Mascot" width={100} height={100} className="mb-4 opacity-50 grayscale" />
                  <h3 className="text-xl font-bold text-slate-700 mb-2">No courses completed yet</h3>
                  <p className="text-slate-500 max-w-sm">Keep learning and progressing! Your completed courses will appear here along with the XP you earned.</p>
                </div>
              )}
            </div>
          )}

          {tab === "shop" && (
            <div className="flex w-full flex-col items-center pt-8">
              <Image src="/shop.svg" alt="Shop" height={90} width={90} />
              <h1 className="my-6 text-center text-3xl font-extrabold text-slate-800">Shop</h1>
              <p className="mb-10 text-center text-lg text-slate-500">Spend your points on cool stuff.</p>
              
              <div className="w-full">
                <Items
                  hearts={userProgress.hearts}
                  points={userProgress.points}
                  hasActiveSubscription={isPro}
                />
              </div>
            </div>
          )}

          {tab === "settings" && (
            <div className="flex w-full flex-col items-center pt-8">
              <Image src="/leaderboard.svg" alt="Settings" height={90} width={90} />
              <h1 className="my-6 text-center text-3xl font-extrabold text-slate-800">Settings</h1>
              <p className="mb-10 text-center text-lg text-slate-500">Manage your profile and account settings.</p>
              
              <div className="flex w-full max-w-[600px] flex-col gap-y-6">
                <SettingsForm initialName={userProgress.user_name} />
                
                <Link 
                  href="/settings/preferences"
                  className="flex items-center justify-between p-6 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors bg-white shadow-sm"
                >
                  <div>
                    <h3 className="font-bold text-lg text-slate-700">Learning Preferences</h3>
                    <p className="text-slate-500 text-sm mt-1">Update what you want to learn and your daily goals.</p>
                  </div>
                  <div className="text-sky-500 font-bold bg-sky-100 px-4 py-2 rounded-xl">
                    Edit
                  </div>
                </Link>

                <div className="mt-4 pt-6 border-t-2 border-slate-100">
                  <LogoutButton />
                </div>
              </div>
            </div>
          )}
        </div>
      </FeedWrapper>
    </div>
  );
}
