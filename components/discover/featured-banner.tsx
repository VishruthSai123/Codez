import { ArrowRight, Flame, Layers } from "lucide-react";
import type { Course } from "@/db/types";
import { CourseIcon } from "@/components/course-icon";

type FeaturedBannerProps = {
  course: Course;
  onClick: () => void;
};

export const FeaturedBanner = ({ course, onClick }: FeaturedBannerProps) => {
  return (
    <div 
      onClick={onClick}
      className="relative w-full rounded-[2rem] bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 p-8 text-white overflow-hidden shadow-lg cursor-pointer group transition-transform hover:-translate-y-1"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-400 opacity-20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-indigo-500/20 to-transparent pointer-events-none flex items-center justify-end pr-12 opacity-30 md:opacity-100 transition-opacity">
        <CourseIcon 
          title={course.title} 
          category={course.category} 
          className="w-32 h-32 bg-transparent drop-shadow-2xl opacity-50"
          iconClassName="w-32 h-32 text-white"
        />
      </div>

      <div className="relative z-10 flex flex-col items-start gap-4 w-full">
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" /> Featured Path
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Become an <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-emerald-300">{course.title}</span> Expert
          </h2>
          
          <div className="flex flex-wrap items-center gap-3 text-indigo-100 text-sm font-medium mt-2">
            <span className="flex items-center gap-1 bg-black/20 px-2.5 py-1 rounded-md"><Layers className="w-4 h-4 opacity-70"/> {course.lesson_count || 12} Lessons</span>
            <span>•</span>
            <span>{course.xp_reward || 1000} XP</span>
            <span>•</span>
            <span>{course.difficulty}</span>
          </div>

          <button className="mt-4 bg-white text-indigo-700 hover:bg-indigo-50 font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow-md group-hover:shadow-lg">
            Start Learning <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
      </div>
    </div>
  );
};
