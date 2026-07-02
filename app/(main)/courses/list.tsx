"use client";

import { useTransition } from "react";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { upsertUserProgress } from "@/actions/user-progress";
import type { Course } from "@/db/types";

import { Card } from "./card";

type ListProps = {
  courses: Course[];
  activeCourseId?: number | null;
};

export const List = ({ courses, activeCourseId }: ListProps) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;

    if (id === activeCourseId) return router.push("/learn");

    startTransition(() => {
      upsertUserProgress(id).catch(() => toast.error("Something went wrong."));
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.image_src}
          onClick={onClick}
          disabled={pending}
          isActive={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};
