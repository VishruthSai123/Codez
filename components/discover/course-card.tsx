import { CheckCircle, Clock, Layers, Star, Zap, Play } from "lucide-react";
import type { Course } from "@/db/types";
import { CourseIcon } from "@/components/course-icon";
import { Progress } from "@/components/ui/progress";

type CourseCardProps = {
  course: Course;
  isCompleted: boolean;
  progressData?: any;
  onClick: () => void;
  className?: string;
};

export const CourseCard = ({ course, isCompleted, progressData, onClick, className }: CourseCardProps) => {
  return (
    <div 
      onClick={onClick}
      className={className || "snap-start flex-shrink-0 w-[85vw] sm:w-[300px] max-w-[320px] group cursor-pointer flex flex-col h-full"}
    >
      <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-slate-200 group-hover:border-sky-400 bg-white flex items-center justify-center p-6 shadow-sm group-hover:shadow-md transition-all duration-300">
        <CourseIcon 
          title={course.title} 
          category={course.category} 
          className="w-full h-full bg-transparent group-hover:scale-110 transition-transform duration-500"
          iconClassName="w-16 h-16 text-slate-300 group-hover:text-sky-400 transition-colors"
        />
        
        {/* Badges */}
        {isCompleted ? (
          <div className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm border-2 border-emerald-600">
            <CheckCircle className="w-3 h-3" /> COMPLETED
          </div>
        ) : course.is_new ? (
          <div className="absolute top-3 left-3 bg-rose-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm border-2 border-rose-600">
            NEW
          </div>
        ) : null}

        <button className="absolute top-3 right-3 p-1.5 bg-white/50 backdrop-blur-sm rounded-full text-slate-400 hover:text-yellow-500 transition-colors border-2 border-transparent hover:border-yellow-200">
          <Star className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-4 px-1 flex flex-col flex-1">
        <h3 className="font-bold text-slate-800 text-lg group-hover:text-sky-500 transition-colors line-clamp-1">{course.title}</h3>
        <p className="text-slate-500 text-sm mt-1 line-clamp-2 min-h-[40px] leading-relaxed">
          {course.description || `Learn ${course.title} and master the skills you need for your career.`}
        </p>
        
        {progressData && progressData.started && !isCompleted && (
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span className="truncate pr-2">
                {progressData.activeUnit?.title || 'Learning'}
              </span>
              <span className="text-sky-500">{progressData.percentage}%</span>
            </div>
            <Progress value={progressData.percentage} className="h-2" />
          </div>
        )}

        {/* This mt-auto pushes the bottom tags to align across cards of varying text length */}
        <div className="flex flex-wrap items-center gap-2 mt-auto pt-4 text-slate-500 text-xs font-bold uppercase tracking-wider">
          <span className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-md text-slate-600">
            <Zap className="w-3.5 h-3.5 text-sky-500 fill-sky-500" /> {course.difficulty}
          </span>
          {course.estimated_time && (
            <span className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-md text-slate-600">
              <Clock className="w-3.5 h-3.5 text-orange-500" /> {course.estimated_time}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
