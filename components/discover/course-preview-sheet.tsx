import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PlayCircle, Clock, Layers, Star, Zap, CheckCircle, ShieldCheck, Target, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { Course } from "@/db/types";
import { CourseIcon } from "@/components/course-icon";
import { Progress } from "@/components/ui/progress";

type CoursePreviewSheetProps = {
  course: Course | null;
  isCompleted: boolean;
  progressData?: any;
  onClose: () => void;
};

export const CoursePreviewSheet = ({ course, isCompleted, progressData, onClose }: CoursePreviewSheetProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  if (!course) return null;

  const skills = course.skills_learned && course.skills_learned.length > 0 ? course.skills_learned : (course.outcomes && course.outcomes.length > 0 ? course.outcomes : []);
  const prerequisites = course.prerequisites && course.prerequisites.length > 0 ? course.prerequisites : [];

  return (
    <Sheet open={!!course} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="right" className="w-full sm:max-w-md md:max-w-lg p-0 overflow-y-auto bg-slate-50">
        <div className="w-full h-48 sm:h-64 bg-gradient-to-b from-sky-100 to-slate-50 relative flex items-center justify-center p-8 border-b-2 border-slate-100">
          <CourseIcon 
            title={course.title}
            category={course.category}
            className="w-full h-full bg-transparent drop-shadow-xl"
            iconClassName="w-24 h-24 sm:w-32 sm:h-32 text-sky-400"
          />
        </div>

        <div className="p-6">
          <SheetHeader className="text-left mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${isCompleted ? 'bg-emerald-100 text-emerald-600 border border-emerald-200' : 'bg-sky-100 text-sky-600 border border-sky-200'}`}>
                {isCompleted ? 'COMPLETED' : course.category || 'PROGRAMMING'}
              </span>
            </div>
            <SheetTitle className="text-2xl font-extrabold text-slate-800">{course.title}</SheetTitle>
            <SheetDescription className="text-base text-slate-500 mt-2">
              {course.description || `Dive into ${course.title} with interactive exercises and bite-sized lessons designed for deep comprehension.`}
            </SheetDescription>
            
            {progressData && progressData.started && !isCompleted && (
              <div className="mt-4 bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between text-sm font-bold text-slate-600 mb-2">
                  <span>Current: {progressData.activeLesson?.title || 'Learning...'}</span>
                  <span className="text-sky-500">{progressData.percentage}%</span>
                </div>
                <Progress value={progressData.percentage} className="h-2" />
              </div>
            )}
          </SheetHeader>

          {/* Key Stats */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="bg-white border-2 border-slate-100 rounded-xl p-3 flex items-center gap-3 shadow-sm">
              <div className="bg-orange-100 p-2 rounded-lg text-orange-500">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Duration</p>
                <p className="text-sm font-bold text-slate-700">{course.estimated_time || (course.estimated_hours ? `~${course.estimated_hours} hours` : 'Self-paced')}</p>
              </div>
            </div>
            <div className="bg-white border-2 border-slate-100 rounded-xl p-3 flex items-center gap-3 shadow-sm">
              <div className="bg-sky-100 p-2 rounded-lg text-sky-500">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Lessons</p>
                <p className="text-sm font-bold text-slate-700">{course.lesson_count || '—'}</p>
              </div>
            </div>
            <div className="bg-white border-2 border-slate-100 rounded-xl p-3 flex items-center gap-3 shadow-sm">
              <div className="bg-yellow-100 p-2 rounded-lg text-yellow-500">
                <Star className="w-5 h-5 fill-yellow-500" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Reward</p>
                <p className="text-sm font-bold text-slate-700">{course.xp_reward || '—'} XP</p>
              </div>
            </div>
            <div className="bg-white border-2 border-slate-100 rounded-xl p-3 flex items-center gap-3 shadow-sm">
              <div className="bg-rose-100 p-2 rounded-lg text-rose-500">
                <Zap className="w-5 h-5 fill-rose-500" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Difficulty</p>
                <p className="text-sm font-bold text-slate-700">{course.difficulty}</p>
              </div>
            </div>
          </div>

          {/* What you'll learn */}
          {skills.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-sky-500" /> What you'll learn
              </h3>
              <ul className="grid grid-cols-1 gap-2">
                {skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-8">
             <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-sky-500" /> Prerequisites
            </h3>
              {prerequisites.length > 0 ? (
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-sm text-slate-600">
                  {prerequisites.join(", ")}
                </div>
              ) : (
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-sm text-slate-500 italic">
                  No prior experience needed
                </div>
              )}
          </div>

          {/* Action */}
          <div className="pt-4 pb-8 sticky bottom-0 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent">
            <Button 
              size="lg" 
              className="w-full text-lg h-14 relative" 
              variant={isCompleted ? "secondary" : "primary"}
              disabled={isPending}
              onClick={() => {
                startTransition(() => {
                  router.push(`/learn/${course.id}`);
                });
              }}
            >
              {isPending ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                isCompleted ? "Review Course" : progressData?.started ? "Continue Learning" : "Start Learning"
              )}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
