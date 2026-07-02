"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OnboardingError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[OnboardingError]", error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-6 px-6 text-center">
      <h1 className="text-2xl font-extrabold text-slate-800">
        Setup interrupted
      </h1>
      <p className="text-slate-500 max-w-sm">
        Something went wrong during onboarding. Please try again.
      </p>
      <div className="flex items-center gap-x-3">
        <Button onClick={reset} variant="primary" size="lg">
          Try Again
        </Button>
        <Link href="/">
          <Button variant="primaryOutline" size="lg">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
