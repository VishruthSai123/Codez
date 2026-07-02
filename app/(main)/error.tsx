"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MainError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[MainLayoutError]", error);
  }, [error]);

  return (
    <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-y-6 px-6 text-center">
      <Image src="/mascot.svg" alt="Error" width={80} height={80} className="opacity-50" />
      <h1 className="text-2xl font-extrabold text-slate-800">
        Oops! Something went wrong
      </h1>
      <p className="text-slate-500 max-w-sm">
        We hit an unexpected error loading this page. You can try again or head back to the dashboard.
      </p>
      <div className="flex items-center gap-x-3">
        <Button onClick={reset} variant="primary" size="lg">
          Try Again
        </Button>
        <Link href="/learn">
          <Button variant="primaryOutline" size="lg">
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
