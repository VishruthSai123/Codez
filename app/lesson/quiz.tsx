"use client";

import { useState, useTransition, useRef, useEffect, useMemo, useCallback } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

import { upsertChallengeProgress } from "@/actions/challenge-progress";
import { reduceHearts } from "@/actions/user-progress";
import { useAudio, useMount } from "react-use";
import { useHeartsModal } from "@/store/use-hearts-modal";
import { usePracticeModal } from "@/store/use-practice-modal";
import { AchievementModal } from "@/components/modals/achievement-modal";
import type { Challenge, ChallengeOption, UserSubscription } from "@/db/types";

import { Header } from "./header";
import { Footer } from "./footer";
import { Challenge as ChallengeComponent } from "./challenge";
import { ResultCard } from "./result-card";
import { QuestionBubble } from "./question-bubble";
import { CodeEditorCard, CodeEditorRef } from "./components/code-editor-card";
import { PracticeQuestionCard } from "./components/practice-question-card";
import { IntroCard } from "./components/intro-card";
import { MAX_HEARTS } from "@/constants";

type QuizProps = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  courseId: number;
  initialLessonChallenges: (Challenge & {
    completed: boolean;
    challenge_options: ChallengeOption[];
  })[];
  userSubscription:
    | (UserSubscription & {
        isActive: boolean;
      })
    | null;
};

export const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonId,
  courseId,
  initialLessonChallenges,
  userSubscription,
}: QuizProps) => {
  const { open: openHeartsModal } = useHeartsModal();
  const { open: openPracticeModal } = usePracticeModal();

  useMount(() => {
    if (initialPercentage === 100) openPracticeModal();
  });

  const { width, height } = useWindowSize();
  const router = useRouter();

  const [finishAudio] = useAudio({ src: "/finish.mp3", autoPlay: true });
  const [correctAudio, _c, correctControls] = useAudio({ src: "/correct.wav" });
  const [incorrectAudio, _i, incorrectControls] = useAudio({ src: "/incorrect.wav" });

  const [pending, startTransition] = useTransition();

  const [lessonId] = useState(initialLessonId);
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(() => {
    return initialPercentage === 100 ? 0 : initialPercentage;
  });
  const [challenges, setChallenges] = useState(initialLessonChallenges);

  // Track the highest index the user has reached (the "frontier")
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex((challenge) => !challenge.completed);
    return uncompletedIndex === -1 ? challenges.length : uncompletedIndex;
  });

  // Track which challenges have already been awarded XP (to prevent double-awards)
  const [awardedChallengeIds] = useState<Set<number>>(() => {
    const set = new Set<number>();
    challenges.forEach((c) => {
      if (c.completed) set.add(c.id);
    });
    return set;
  });

  // Track whether the completion screen has been shown (prevent double animation)
  const [completionShown, setCompletionShown] = useState(false);

  const [selectedOption, setSelectedOption] = useState<number>();
  const [status, setStatus] = useState<"correct" | "wrong" | "none" | "validating" | "idle">("none");
  const [mistakes, setMistakes] = useState(0);
  const [startTime] = useState(Date.now());
  const editorRef = useRef<CodeEditorRef>(null);

  // Queue of unlocked achievements to show to the user
  const [unlockedQueue, setUnlockedQueue] = useState<any[]>([]);
  const [activeAchievement, setActiveAchievement] = useState<any | null>(null);

  const onAchievementModalClose = useCallback(() => {
    setActiveAchievement(null);
    setUnlockedQueue((prev) => {
      const nextQueue = prev.slice(1);
      if (nextQueue.length > 0) {
        // Set next one active
        setActiveAchievement(nextQueue[0]);
      }
      return nextQueue;
    });
  }, [activeAchievement]);

  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [editorAttempts, setEditorAttempts] = useState(0);

  // When activeIndex >= challenges.length, challenge is undefined → completion screen renders
  const challenge = challenges[activeIndex];

  // Determine if we are reviewing a completed step (navigated backwards)
  const isReviewing = challenge ? awardedChallengeIds.has(challenge.id) : false;

  // Randomize option order using a proper PRNG seeded by challenge.id
  const options = useMemo(() => {
    const raw = challenge?.challenge_options ?? [];
    if (raw.length <= 1) return raw;

    function mulberry32(seed: number) {
      return function () {
        seed |= 0;
        seed = (seed + 0x6d2b79f5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }

    const rng = mulberry32(challenge!.id * 31 + 7);
    const shuffled = [...raw];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [challenge]);

  const isOptionBased = challenge?.type === "SELECT" || challenge?.type === "ASSIST";
  const isCodeBased = challenge?.type === "CODE";
  const isReadingBased = challenge?.type === "CONCEPT" || challenge?.type === "PROJECT";

  // Reset per-challenge state on challenge change
  useEffect(() => {
    setShowHint(false);
    setShowSolution(false);
    setEditorAttempts(0);
    setSelectedOption(undefined);
    setStatus("none");
  }, [activeIndex]);

  // ─── NAVIGATION: Previous ───────────────────────────────────────────
  const canGoPrevious = activeIndex > 0;

  const onPrevious = useCallback(() => {
    if (!canGoPrevious) return;
    setActiveIndex((current) => current - 1);
  }, [canGoPrevious]);

  // ─── NAVIGATION: Try Again ──────────────────────────────────────────
  // Available for interactive (non-reading) steps
  const canTryAgain = challenge
    ? (isOptionBased || isCodeBased) && (status === "correct" || status === "wrong")
    : false;

  const onTryAgain = useCallback(() => {
    setSelectedOption(undefined);
    setStatus("none");
    setShowHint(false);
    setShowSolution(false);
    setEditorAttempts(0);
    // For code challenges, resetting the key forces CodeEditorCard to remount with initialCode
    // We trigger this by incrementing a reset counter
    setResetCounter((c) => c + 1);
  }, []);

  // A counter to force code editor remounts on "Try Again"
  const [resetCounter, setResetCounter] = useState(0);

  // ─── NAVIGATION: Next ──────────────────────────────────────────────
  const onNext = () => {
    setActiveIndex((current) => current + 1);
  };

  const onSelect = (id: number) => {
    if (status !== "none" && status !== "wrong" && status !== "idle") return;
    setSelectedOption(id);
    setStatus("none");
  };

  const handleValidationSuccess = () => {
    // If this challenge was already awarded, skip DB call — just advance
    if (awardedChallengeIds.has(challenge.id)) {
      setStatus("correct");
      return;
    }

    const isLast = challenges.filter((c) => !c.completed).length <= 1;

    startTransition(() => {
      upsertChallengeProgress(challenge.id, !isLast)
        .then((response) => {
          if (response?.error === "hearts") {
            setStatus("none");
            openHeartsModal();
            return;
          }

          // Mark as completed and awarded
          setChallenges((prev) =>
            prev.map((c) => c.id === challenge.id ? { ...c, completed: true } : c)
          );
          awardedChallengeIds.add(challenge.id);

          correctControls.play();
          setStatus("correct");
          setPercentage((prev) => prev + 100 / challenges.length);

          if (initialPercentage === 100) {
            setHearts((prev) => Math.min(prev + 1, MAX_HEARTS));
          }

          // Check if any achievements were unlocked
          if ((response as any)?.unlockedAchievements && (response as any).unlockedAchievements.length > 0) {
            setUnlockedQueue((prev) => {
              const newQueue = [...prev, ...(response as any).unlockedAchievements];
              if (!activeAchievement) {
                setActiveAchievement(newQueue[0]);
              }
              return newQueue;
            });
          }
        })
        .catch(() => {
          setStatus("none");
          toast.error("Network error. Please try again.");
        });
    });
  };

  const handleValidationFailure = () => {
    // If reviewing, don't deduct hearts
    if (isReviewing) {
      setStatus("wrong");
      incorrectControls.play();
      return;
    }

    startTransition(() => {
      reduceHearts(challenge.id)
        .then((response) => {
          if (response?.error === "hearts") {
            setStatus("none");
            openHeartsModal();
            return;
          }

          setMistakes((prev) => prev + 1);
          incorrectControls.play();
          setStatus("wrong");

          if (!response?.error) setHearts((prev) => Math.max(prev - 1, 0));

          // Also check for achievements on practice attempts if any
          if ((response as any)?.unlockedAchievements && (response as any).unlockedAchievements.length > 0) {
            setUnlockedQueue((prev) => {
              const newQueue = [...prev, ...(response as any).unlockedAchievements];
              if (!activeAchievement) {
                setActiveAchievement(newQueue[0]);
              }
              return newQueue;
            });
          }
        })
        .catch(() => {
          setStatus("none");
          toast.error("Network error. Please try again.");
        });
    });
  };

  const onContinue = async () => {
    if (status === "validating") return;

    if (status === "wrong") {
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    if (status === "correct") {
      onNext();
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    // For reading-based steps that are already completed (reviewing), just advance
    if (isReadingBased && isReviewing) {
      setStatus("correct");
      return;
    }

    setStatus("validating");

    if (isCodeBased) {
      const isValid = await editorRef.current?.validate();
      if (isValid) {
        handleValidationSuccess();
      } else {
        handleValidationFailure();
        setEditorAttempts(prev => prev + 1);
      }
      return;
    }

    if (isReadingBased) {
      handleValidationSuccess();
      return;
    }

    if (isOptionBased) {
      if (!selectedOption) {
        setStatus("none");
        return;
      }
      const correctOption = options.find((option) => option.correct);
      if (!correctOption) return;

      if (correctOption.id === selectedOption) {
        handleValidationSuccess();
      } else {
        handleValidationFailure();
      }
    }
  };

  // ─── COMPLETION SCREEN ──────────────────────────────────────────────
  if (!challenge) {
    const timeTaken = Math.round((Date.now() - startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    const totalInteractions = challenges.length + mistakes;
    const accuracy = totalInteractions === 0 ? 100 : Math.round((challenges.length / totalInteractions) * 100);

    return (
      <>
        {finishAudio}
        {!completionShown && (
          <Confetti
            recycle={false}
            numberOfPieces={500}
            tweenDuration={10_000}
            width={width}
            height={height}
            onConfettiComplete={() => setCompletionShown(true)}
          />
        )}
        <div className="mx-auto flex h-full max-w-lg flex-col items-center justify-center gap-y-4 text-center lg:gap-y-8">
          <Image
            src="/finish.svg"
            alt="Finish"
            className="hidden lg:block"
            height={100}
            width={100}
          />
          <Image
            src="/finish.svg"
            alt="Finish"
            className="block lg:hidden"
            height={50}
            width={50}
          />
          <h1 className="text-xl font-bold text-neutral-700 lg:text-3xl">
            Great job! <br /> You&apos;ve completed the lesson.
          </h1>

          <div className="flex w-full items-center justify-center gap-x-4">
            <ResultCard variant="points" value={challenges.length * 10} />
            <ResultCard
              variant="hearts"
              value={userSubscription?.isActive ? Infinity : hearts}
            />
          </div>

          <div className="flex w-full items-center justify-center gap-x-4 mt-4">
            <div className="flex flex-col items-center p-4 border-2 rounded-xl w-full">
              <span className="text-xs uppercase text-muted-foreground font-bold">Accuracy</span>
              <span className="text-xl font-bold text-neutral-700 mt-2">
                {accuracy}%
              </span>
            </div>
            <div className="flex flex-col items-center p-4 border-2 rounded-xl w-full">
              <span className="text-xs uppercase text-muted-foreground font-bold">Time Taken</span>
              <span className="text-xl font-bold text-neutral-700 mt-2">{formattedTime}</span>
            </div>
          </div>
        </div>
        <Footer
          lessonId={lessonId}
          status="completed"
          onCheck={() => {
            startTransition(() => {
              import("@/actions/complete-lesson").then(({ completeLesson }) => {
                completeLesson(lessonId, courseId).then(() => {
                  router.push(`/learn/${courseId}`);
                });
              });
            });
          }}
          canGoPrevious={true}
          onPrevious={() => setActiveIndex(challenges.length - 1)}
        />
      </>
    );
  }

  const title = challenge.type === "ASSIST" ? "Select the correct meaning" : challenge.question;

  // Step label for the footer (e.g. "3 / 9")
  const stepLabel = `${activeIndex + 1} / ${challenges.length}`;

  return (
    <>
      {correctAudio}
      {incorrectAudio}
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />

      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <div className={`w-full flex flex-col h-full py-4 md:py-8 px-4 lg:px-0 gap-y-4 md:gap-y-6 overflow-y-auto ${isCodeBased ? "max-w-5xl" : "lg:w-[800px]"}`}>
          
          {/* Main header block (Hidden in code challenges to save vertical space) */}
          {!isCodeBased && (
            <div className="flex flex-col gap-y-2 shrink-0">
              <span className="text-sm font-bold uppercase tracking-wider text-slate-400 text-center lg:text-start">
                {isReadingBased ? "📖 Learn" : "✅ Quiz"}
              </span>
              {!isReadingBased && (
                <h1 className="text-center text-lg font-bold text-neutral-700 lg:text-start lg:text-3xl">
                  {title}
                </h1>
              )}
            </div>
          )}

          <div className="flex-1 min-h-0 flex flex-col gap-y-6">
            {challenge.type === "ASSIST" && (
              <QuestionBubble question={challenge.question} />
            )}

            {isOptionBased && (
              <ChallengeComponent
                options={options}
                onSelect={onSelect}
                status={(status === "validating" || status === "idle") ? "none" : status}
                selectedOption={selectedOption}
                disabled={pending || status === "validating"}
                type={challenge.type}
              />
            )}

            {isReadingBased && (
              <div className="flex justify-center w-full pb-8">
                <IntroCard 
                  title={challenge.question} 
                  content={challenge.content_metadata} 
                />
              </div>
            )}

            {isCodeBased && (
              <>
                <PracticeQuestionCard
                  title={challenge.question}
                  explanation={(challenge.content_metadata as any)?.explanation}
                  hints={(challenge.content_metadata as any)?.hints}
                  attempts={editorAttempts}
                  showHint={showHint}
                  setShowHint={setShowHint}
                  showSolution={showSolution}
                  setShowSolution={setShowSolution}
                  solutionCode={(challenge.content_metadata as any)?.solutionCode}
                />
                
                <div className="flex-1 min-h-[400px] flex flex-col w-full pb-4">
                  <CodeEditorCard 
                    key={`${challenge.id}-${resetCounter}`}
                    ref={editorRef}
                    content={challenge.content_metadata}
                    onAttempt={() => setEditorAttempts(prev => prev + 1)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer
        disabled={pending || status === "validating" || (isOptionBased && !selectedOption)}
        status={(status === "validating" || status === "idle") ? "none" : status}
        onCheck={onContinue}
        onPrevious={onPrevious}
        onTryAgain={onTryAgain}
        canGoPrevious={canGoPrevious}
        canTryAgain={canTryAgain}
        stepLabel={stepLabel}
      />

      <AchievementModal 
        isOpen={!!activeAchievement}
        onClose={onAchievementModalClose}
        achievement={activeAchievement}
      />
    </>
  );
};
