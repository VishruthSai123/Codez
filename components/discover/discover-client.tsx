"use client";

import { useState, useMemo } from "react";
import { DiscoverHeader } from "./discover-header";
import { FeaturedBanner } from "./featured-banner";
import { CategoryChips } from "./category-chips";
import { CourseCard } from "./course-card";
import { CoursePreviewSheet } from "./course-preview-sheet";
import type { Course, CourseCompletion } from "@/db/types";

type DiscoverClientProps = {
  courses: Course[];
  completions: CourseCompletion[];
  userName?: string;
  userImage?: string;
  userInterests: string[];
  allCourseProgress: Record<number, any>;
};

export const DiscoverClient = ({
  courses,
  completions,
  userName,
  userInterests,
  allCourseProgress
}: DiscoverClientProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  
  // Extract categories dynamically from both category and tags arrays
  const categories = useMemo(() => {
    const allTags = new Set<string>();
    courses.forEach(c => {
      if (c.category) allTags.add(c.category);
      if (c.tags) c.tags.forEach(t => allTags.add(t));
    });
    return Array.from(allTags).sort();
  }, [courses]);
  
  // Filter courses based on category or tag
  const filteredCourses = useMemo(() => {
    if (!selectedCategory) return courses;
    return courses.filter(c => 
      c.category === selectedCategory || 
      (c.tags && c.tags.includes(selectedCategory))
    );
  }, [courses, selectedCategory]);

  // Derived sections (only shown when no specific category selected)
  const isDefaultView = !selectedCategory;
  
  const continueLearningCourses = isDefaultView ? courses.filter(c => allCourseProgress[c.id]?.started && !allCourseProgress[c.id]?.completed) : [];
  const completedSectionCourses = isDefaultView ? courses.filter(c => allCourseProgress[c.id]?.completed) : [];

  const recommendedCourses = isDefaultView ? courses.filter(c => 
    userInterests.some(i => c.category?.toLowerCase().includes(i.toLowerCase()) || c.title?.toLowerCase().includes(i.toLowerCase()) || (c.tags && c.tags.some(t => t.toLowerCase().includes(i.toLowerCase()))))
  ).filter(c => !allCourseProgress[c.id]?.completed) : [];

  const popularCourses = isDefaultView ? [...courses].sort((a, b) => (b.popularity_score || 0) - (a.popularity_score || 0)).filter(c => !allCourseProgress[c.id]?.completed) : [];
  const beginnerCourses = isDefaultView ? courses.filter(c => c.difficulty === "Beginner" || (c.tags && c.tags.includes("Beginner"))) : [];
  const intermediateCourses = isDefaultView ? courses.filter(c => c.difficulty === "Intermediate" || (c.tags && c.tags.includes("Intermediate"))) : [];
  const advancedCourses = isDefaultView ? courses.filter(c => c.difficulty === "Advanced" || (c.tags && c.tags.includes("Advanced"))) : [];
  const newlyAddedCourses = isDefaultView ? courses.filter(c => c.is_new) : [];
  const webDevCourses = isDefaultView ? courses.filter(c => c.category === "Web Development" || (c.tags && c.tags.includes("Web Development"))) : [];
  const backendCourses = isDefaultView ? courses.filter(c => c.category === "Backend" || (c.tags && c.tags.includes("Backend"))) : [];
  const aiCourses = isDefaultView ? courses.filter(c => c.category === "AI" || (c.tags && c.tags.includes("AI"))) : [];

  const featuredCourse = continueLearningCourses.length === 0 ? (courses.find(c => c.title.includes("Python") || c.title.includes("JavaScript")) || courses[0]) : null;

  const renderSection = (title: string, items: Course[]) => {
    if (!items.length) return null;
    return (
      <div className="mb-12 w-full">
        <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 mb-5">{title}</h2>
        <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar">
          {items.map(course => (
            <CourseCard 
              key={course.id} 
              course={course} 
              isCompleted={completions.some(c => c.course_id === course.id)} 
              progressData={allCourseProgress[course.id]}
              onClick={() => setSelectedCourse(course)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col pt-6 pb-28 lg:pb-8 overflow-hidden">
      <div className="w-full">
        <DiscoverHeader userName={userName} />


        <div className="mb-10">
          <CategoryChips 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onSelect={setSelectedCategory} 
          />
        </div>
      </div>

      <div className="w-full">
        {isDefaultView && (
          <>
            {featuredCourse && (
              <div className="mb-12">
                <FeaturedBanner 
                  course={featuredCourse} 
                  onClick={() => setSelectedCourse(featuredCourse)} 
                />
              </div>
            )}
            
            {renderSection("Continue Learning", continueLearningCourses)}
            {renderSection("Recommended For You", recommendedCourses)}
            {renderSection("Popular & Trending", popularCourses)}
            {renderSection("Beginner Courses", beginnerCourses)}
            {renderSection("Intermediate Courses", intermediateCourses)}
            {renderSection("Advanced Courses", advancedCourses)}
            {renderSection("Web Development", webDevCourses)}
            {renderSection("Backend & Systems", backendCourses)}
            {renderSection("Artificial Intelligence", aiCourses)}
            {renderSection("Newly Added", newlyAddedCourses)}
            {renderSection("Completed Courses", completedSectionCourses)}
          </>
        )}

        {!isDefaultView && (
          <div className="w-full">
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 mb-6">
              {`${selectedCategory} Courses`}
            </h2>
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses.map(course => (
                  <CourseCard 
                    key={course.id} 
                    course={course} 
                    isCompleted={completions.some(c => c.course_id === course.id)} 
                    progressData={allCourseProgress[course.id]}
                    onClick={() => setSelectedCourse(course)}
                    className="w-full group cursor-pointer flex flex-col h-full"
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <img src="/mascot_sad.svg" alt="No results" className="w-32 h-32 mb-6 grayscale opacity-50" />
                <h3 className="text-xl font-bold text-slate-700 mb-2">No courses found</h3>
                <p className="text-slate-500 max-w-sm">We couldn't find any courses in this category.</p>
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="mt-6 text-sky-500 font-bold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <CoursePreviewSheet 
        course={selectedCourse} 
        isCompleted={selectedCourse ? completions.some(c => c.course_id === selectedCourse.id) : false}
        progressData={selectedCourse ? allCourseProgress[selectedCourse.id] : null}
        onClose={() => setSelectedCourse(null)} 
      />
    </div>
  );
};
