"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to an error reporting service in production
    console.error("[GlobalError]", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex h-screen w-full items-center justify-center bg-white">
        <div className="mx-auto flex max-w-md flex-col items-center gap-y-6 px-6 text-center">
          <Image src="/mascot_sad.svg" alt="Error" width={80} height={80} className="opacity-60" />
          <h1 className="text-2xl font-extrabold text-slate-800">
            Something went wrong
          </h1>
          <p className="text-slate-500">
            An unexpected error occurred. Please try again.
          </p>
          <Button onClick={reset} variant="primary" size="lg">
            Try Again
          </Button>
        </div>
      </body>
    </html>
  );
}
