"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LessonError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[LessonError]", error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-6 px-6 text-center">
      <Image src="/mascot.svg" alt="Error" width={80} height={80} className="opacity-50" />
      <h1 className="text-2xl font-extrabold text-slate-800">
        Lesson failed to load
      </h1>
      <p className="text-slate-500 max-w-sm">
        Something went wrong while loading this lesson. Your progress is safe — try again or go back.
      </p>
      <div className="flex items-center gap-x-3">
        <Button onClick={reset} variant="primary" size="lg">
          Try Again
        </Button>
        <Link href="/learn">
          <Button variant="primaryOutline" size="lg">
            Back to Courses
          </Button>
        </Link>
      </div>
    </div>
  );
}
