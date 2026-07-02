"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[AdminError]", error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-6 px-6 text-center">
      <h1 className="text-2xl font-extrabold text-slate-800">
        Admin panel error
      </h1>
      <p className="text-slate-500 max-w-sm">
        The admin dashboard encountered an error. Please try again.
      </p>
      <Button onClick={reset} variant="primary" size="lg">
        Reload
      </Button>
    </div>
  );
}
