"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { updateInterests } from "@/actions/user-settings";
import { Cpu, Code, Layout, Brain, Target } from "lucide-react";
import { useRouter } from "next/navigation";

const allInterests = [
  { id: "python", label: "Python", icon: <Cpu className="w-5 h-5" /> },
  { id: "javascript", label: "JavaScript", icon: <Code className="w-5 h-5" /> },
  { id: "typescript", label: "TypeScript", icon: <Code className="w-5 h-5" /> },
  { id: "java", label: "Java", icon: <Cpu className="w-5 h-5" /> },
  { id: "kotlin", label: "Kotlin", icon: <Cpu className="w-5 h-5" /> },
  { id: "react", label: "React", icon: <Layout className="w-5 h-5" /> },
  { id: "nextjs", label: "Next.js", icon: <Layout className="w-5 h-5" /> },
  { id: "nodejs", label: "Node.js", icon: <Cpu className="w-5 h-5" /> },
  { id: "ai", label: "AI & Machine Learning", icon: <Brain className="w-5 h-5" /> },
  { id: "web_dev", label: "Web Development", icon: <Layout className="w-5 h-5" /> },
  { id: "android", label: "Android Development", icon: <Cpu className="w-5 h-5" /> },
  { id: "unsure", label: "I'm not sure yet", icon: <Target className="w-5 h-5" /> },
];

type PreferencesFormProps = {
  initialInterests: string[];
};

export const PreferencesForm = ({ initialInterests }: PreferencesFormProps) => {
  const router = useRouter();
  const [interests, setInterests] = useState<string[]>(initialInterests);
  const [pending, startTransition] = useTransition();

  const handleSelect = (id: string) => {
    setInterests(prev => {
      if (id === "unsure") return ["unsure"];
      let nextArr = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      return nextArr.filter(x => x !== "unsure");
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => {
      updateInterests(interests.length > 0 ? interests : ["unsure"])
        .then(() => {
          toast.success("Preferences updated");
          router.push("/settings");
        })
        .catch((err) => {
          toast.error(err.message || "Something went wrong.");
        });
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-8 rounded-xl border-2 p-6 shadow-sm bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {allInterests.map((option) => {
          const isSelected = interests.includes(option.id);
          
          return (
            <button
              type="button"
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={pending}
              className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all duration-200 ${
                isSelected 
                  ? "border-sky-400 bg-sky-50 text-sky-600" 
                  : "border-slate-200 hover:border-sky-300 hover:bg-slate-50 text-slate-700"
              }`}
            >
              <div className={`mb-3 p-2 rounded-full ${isSelected ? "bg-sky-100" : "bg-slate-100"}`}>
                {option.icon}
              </div>
              <span className="font-semibold text-sm text-center">{option.label}</span>
            </button>
          )
        })}
      </div>
      
      <Button 
        type="submit" 
        size="lg"
        disabled={pending || interests.length === 0} 
        variant="secondary" 
        className="w-full"
      >
        Save Preferences
      </Button>
    </form>
  );
};
