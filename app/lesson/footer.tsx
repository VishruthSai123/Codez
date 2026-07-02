import { CheckCircle, XCircle, ChevronLeft, RotateCcw, ChevronRight } from "lucide-react";
import { useKey, useMedia } from "react-use";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FooterProps = {
  onCheck: () => void;
  status: "correct" | "wrong" | "none" | "completed";
  disabled?: boolean;
  lessonId?: number;
  // New navigation props
  onPrevious?: () => void;
  onTryAgain?: () => void;
  canGoPrevious?: boolean;
  canTryAgain?: boolean;
  stepLabel?: string; // e.g. "3 / 9"
};

export const Footer = ({
  onCheck,
  status,
  disabled,
  lessonId,
  onPrevious,
  onTryAgain,
  canGoPrevious = false,
  canTryAgain = false,
  stepLabel,
}: FooterProps) => {
  // Only trigger onCheck with Enter when focus is NOT inside a code editor, textarea, or input
  useKey("Enter", (e) => {
    const active = document.activeElement;
    if (!active) return onCheck();

    // Check if focus is inside Monaco editor (uses textarea internally)
    const tag = active.tagName.toLowerCase();
    if (tag === "textarea" || tag === "input") return;

    // Check if focus is inside a Monaco editor container or any contenteditable
    if (
      active.closest(".monaco-editor") ||
      active.getAttribute("contenteditable") === "true" ||
      active.closest("[contenteditable='true']")
    ) return;

    onCheck();
  }, {}, [onCheck]);
  const isMobile = useMedia("(max-width: 1024px)");

  return (
    <footer
      className={cn(
        "border-t-2 shrink-0",
        status === "correct" && "border-transparent bg-green-100",
        status === "wrong" && "border-transparent bg-rose-100",
        status !== "correct" && status !== "wrong" && "bg-white"
      )}
    >
      <div className="mx-auto flex h-full max-w-[1140px] items-center justify-between px-4 py-3 lg:px-10 lg:py-4 gap-x-2">
        {/* Left side: Previous button + feedback message */}
        <div className="flex items-center gap-x-2 min-w-0 flex-1">
          {/* Previous button */}
          {status !== "completed" && (
            <Button
              onClick={onPrevious}
              disabled={!canGoPrevious}
              variant="ghost"
              size={isMobile ? "sm" : "default"}
              className={cn(
                "shrink-0 rounded-xl gap-1",
                !canGoPrevious && "opacity-30"
              )}
              aria-label="Previous step"
            >
              <ChevronLeft className="w-4 h-4" />
              {!isMobile && "Previous"}
            </Button>
          )}

          {/* Feedback messages */}
          {status === "correct" && (
            <div className="flex items-center text-sm font-bold text-green-500 lg:text-xl min-w-0">
              <CheckCircle className="mr-2 h-5 w-5 lg:h-8 lg:w-8 shrink-0" />
              <span className="truncate">Nicely done!</span>
            </div>
          )}

          {status === "wrong" && (
            <div className="flex items-center text-sm font-bold text-rose-500 lg:text-xl min-w-0">
              <XCircle className="mr-2 h-5 w-5 lg:h-8 lg:w-8 shrink-0" />
              <span className="truncate">Try again.</span>
            </div>
          )}
        </div>

        {/* Center: Step indicator */}
        {stepLabel && status !== "completed" && (
          <div className="hidden sm:flex items-center">
            <span className="text-xs font-bold text-slate-400 tracking-wider uppercase whitespace-nowrap">
              {stepLabel}
            </span>
          </div>
        )}

        {/* Right side: Try Again + Check/Next */}
        <div className="flex items-center gap-x-2 shrink-0">
          {/* Try Again button — only visible for interactive steps with wrong/correct states */}
          {status !== "completed" && canTryAgain && (status === "wrong" || status === "correct") && (
            <Button
              onClick={onTryAgain}
              variant="ghost"
              size={isMobile ? "sm" : "default"}
              className="rounded-xl gap-1 text-slate-500 hover:text-slate-700"
              aria-label="Try this step again"
            >
              <RotateCcw className="w-4 h-4" />
              {!isMobile && "Retry"}
            </Button>
          )}

          {/* Practice again — only on completed screen */}
          {status === "completed" && (
            <Button
              variant="default"
              size={isMobile ? "sm" : "lg"}
              onClick={() => (window.location.href = `/lesson/${lessonId}`)}
              className="rounded-xl"
            >
              Practice again
            </Button>
          )}

          {/* Main action button: Check / Next / Retry / Continue */}
          <Button
            disabled={disabled}
            aria-disabled={disabled}
            onClick={onCheck}
            size={isMobile ? "sm" : "lg"}
            variant={status === "wrong" ? "danger" : "secondary"}
            className="rounded-xl gap-1 min-w-[80px] lg:min-w-[120px]"
          >
            {status === "none" && "Check"}
            {status === "correct" && (
              <>
                Next
                <ChevronRight className="w-4 h-4" />
              </>
            )}
            {status === "wrong" && "Retry"}
            {status === "completed" && "Continue"}
          </Button>
        </div>
      </div>
    </footer>
  );
};
