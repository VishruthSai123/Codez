import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { getCourses, getUserProgress, getUserSubscription, getStreak, getCourseCompletions, getAllCourseProgress } from "@/db/queries";
import { DiscoverClient } from "@/components/discover/discover-client";
import type { Course } from "@/db/types";

const DiscoverPage = async () => {
  const [courses, userProgress, userSubscription, streak, completions, allCourseProgress] = await Promise.all([
    getCourses(),
    getUserProgress(),
    getUserSubscription(),
    getStreak(),
    getCourseCompletions(),
    getAllCourseProgress()
  ]);

  if (!userProgress) {
    redirect("/onboarding");
  }

  const isPro = !!userSubscription?.isActive;
  
  // Categorization Logic
  const interests = userProgress.interests || [];
  
  const activeCourse = courses.find((c: Course) => c.id === userProgress.active_course_id);
  
  const recommendedCourses = courses.filter((c: Course) => 
    interests.some((i: string) => c.category?.toLowerCase().includes(i.toLowerCase()) || c.title?.toLowerCase().includes(i.toLowerCase()))
  );

  const popularCourses = [...courses].sort((a: Course, b: Course) => (b.popularity_score || 0) - (a.popularity_score || 0));
  const beginnerCourses = courses.filter((c: Course) => c.difficulty === "Beginner");
  
  // Group by category dynamically
  const categories = Array.from(new Set(courses.map((c: Course) => c.category).filter(Boolean)));

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6 max-w-[1200px] mx-auto">
      <StickyWrapper>
        {!isPro && <Promo />}
        <Quests points={userProgress.points} />
      </StickyWrapper>
      
      <FeedWrapper>
        <DiscoverClient 
          courses={courses}
          completions={completions}
          userName={userProgress.user_name}
          userInterests={userProgress.interests || []}
          allCourseProgress={allCourseProgress}
        />
      </FeedWrapper>
    </div>
  );
};

export default DiscoverPage;
