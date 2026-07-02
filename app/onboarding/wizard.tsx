"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Code, BookOpen, Clock, Target, Play, GraduationCap, Layout, Cpu, Brain, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { completeOnboarding } from "@/actions/onboarding";
import { toast } from "sonner";

const questions = [
  {
    id: "interests",
    title: "What do you want to learn?",
    subtitle: "Select all that apply",
    isMulti: true, // indicates we can select multiple
    options: [
      { id: "python", label: "Python", icon: <Cpu className="w-6 h-6" /> },
      { id: "javascript", label: "JavaScript", icon: <Code className="w-6 h-6" /> },
      { id: "typescript", label: "TypeScript", icon: <Code className="w-6 h-6" /> },
      { id: "java", label: "Java", icon: <Cpu className="w-6 h-6" /> },
      { id: "kotlin", label: "Kotlin", icon: <Cpu className="w-6 h-6" /> },
      { id: "react", label: "React", icon: <Layout className="w-6 h-6" /> },
      { id: "nextjs", label: "Next.js", icon: <Layout className="w-6 h-6" /> },
      { id: "nodejs", label: "Node.js", icon: <Cpu className="w-6 h-6" /> },
      { id: "ai", label: "AI & Machine Learning", icon: <Brain className="w-6 h-6" /> },
      { id: "web_dev", label: "Web Development", icon: <Layout className="w-6 h-6" /> },
      { id: "android", label: "Android Development", icon: <Cpu className="w-6 h-6" /> },
      { id: "unsure", label: "I'm not sure yet", icon: <Target className="w-6 h-6" /> },
    ],
  },
  {
    id: "experience_level",
    title: "What is your coding experience?",
    subtitle: "We'll tailor the lessons to your level",
    options: [
      { id: "beginner", label: "Never coded before", icon: <GraduationCap className="w-6 h-6" /> },
      { id: "intermediate", label: "I know some basics", icon: <BookOpen className="w-6 h-6" /> },
      { id: "advanced", label: "I am an experienced dev", icon: <Rocket className="w-6 h-6" /> },
    ],
  },
  {
    id: "daily_goal",
    title: "What is your daily goal?",
    subtitle: "Consistency is key to learning",
    options: [
      { id: "5", label: "5 mins / day", icon: <Clock className="w-6 h-6" /> },
      { id: "10", label: "10 mins / day", icon: <Clock className="w-6 h-6" /> },
      { id: "20", label: "20 mins / day", icon: <Clock className="w-6 h-6" /> },
      { id: "45", label: "45 mins / day", icon: <Clock className="w-6 h-6" /> },
    ],
  },
  {
    id: "learning_style",
    title: "How do you learn best?",
    subtitle: "We will adapt the lesson structure",
    options: [
      { id: "visual", label: "Visual & Diagrams", icon: <Target className="w-6 h-6" /> },
      { id: "practice", label: "Practice First", icon: <Play className="w-6 h-6" /> },
      { id: "reading", label: "Detailed Reading", icon: <BookOpen className="w-6 h-6" /> },
      { id: "mixed", label: "A mix of everything", icon: <Code className="w-6 h-6" /> },
    ],
  },
];

export const Wizard = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [pending, startTransition] = useTransition();
  const [answers, setAnswers] = useState<{
    interests: string[];
    experience_level: string;
    daily_goal: number;
    learning_style: string;
  }>({
    interests: [],
    experience_level: "",
    daily_goal: 0,
    learning_style: "",
  });

  const handleSelect = (optionId: string | number) => {
    const currentQuestion = questions[step];
    
    if (currentQuestion.isMulti) {
      setAnswers((prev) => {
        const arr = prev[currentQuestion.id as "interests"];
        const opt = optionId as string;
        // If "unsure" is clicked, clear others. If others clicked, remove unsure.
        if (opt === "unsure") {
          return { ...prev, [currentQuestion.id]: ["unsure"] };
        }
        let nextArr = arr.includes(opt) ? arr.filter((x) => x !== opt) : [...arr, opt];
        nextArr = nextArr.filter(x => x !== "unsure");
        return { ...prev, [currentQuestion.id]: nextArr };
      });
      return; // Don't auto-advance for multi-select
    }

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));

    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      // Finish
      startTransition(() => {
        completeOnboarding({
          interests: answers.interests.length > 0 ? answers.interests : ["unsure"], // ensure not empty
          experience_level: answers.experience_level,
          daily_goal: Number(answers.daily_goal),
          learning_style: answers.learning_style || (optionId as string),
        }).then((res) => {
          if (res.error) {
            toast.error(res.error);
          } else {
            router.push("/learn");
          }
        });
      });
    }
  };

  const handleNextStep = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  const currentQuestion = questions[step];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[60vh]">
      <div className="w-full mb-8">
        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-green-500"
            initial={{ width: 0 }}
            animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-lg"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              {currentQuestion.title}
            </h1>
            <p className="text-slate-500 text-lg">
              {currentQuestion.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options.map((option) => {
              const isSelected = currentQuestion.isMulti 
                ? (answers[currentQuestion.id as "interests"] as string[]).includes(option.id)
                : answers[currentQuestion.id as keyof typeof answers] === option.id;
              
              return (
                <button
                  key={option.id}
                  onClick={() => handleSelect(option.id)}
                  disabled={pending}
                  className={`flex flex-col items-center justify-center p-6 border-2 rounded-xl transition-all duration-200 ${
                    isSelected 
                      ? "border-sky-400 bg-sky-50 text-sky-600" 
                      : "border-slate-200 hover:border-sky-300 hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  <div className={`mb-4 p-3 rounded-full ${isSelected ? "bg-sky-100" : "bg-slate-100"}`}>
                    {option.icon}
                  </div>
                  <span className="font-semibold text-lg">{option.label}</span>
                </button>
              )
            })}
          </div>

          {currentQuestion.isMulti && (
            <div className="mt-8 flex justify-center">
              <Button 
                size="lg"
                onClick={handleNextStep}
                disabled={answers.interests.length === 0}
                className="w-full md:w-auto min-w-[200px]"
              >
                Continue
              </Button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
