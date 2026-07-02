import { BookOpen, Lightbulb, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

type PracticeQuestionCardProps = {
  title: string;
  explanation?: string;
  hints?: string[];
  attempts?: number;
  showHint?: boolean;
  setShowHint?: (val: boolean) => void;
  showSolution?: boolean;
  setShowSolution?: (val: boolean) => void;
  solutionCode?: string;
};

export const PracticeQuestionCard = ({
  title,
  explanation,
  hints = [],
  attempts = 0,
  showHint = false,
  setShowHint,
  showSolution = false,
  setShowSolution,
  solutionCode,
}: PracticeQuestionCardProps) => {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-sm relative border-2 border-slate-200 bg-white p-5 lg:p-8 shrink-0">
      {/* Explanation Banner */}
      {explanation && (
        <div className="mb-4 text-base lg:text-lg text-slate-600 leading-relaxed">
          {explanation}
        </div>
      )}

      {/* Main Task / Title */}
      <div className="flex items-start gap-x-3">
        <div className="bg-sky-100 p-2 rounded-xl mt-1 shrink-0">
          <BookOpen className="w-5 h-5 text-sky-600" />
        </div>
        <h2 className="text-xl lg:text-2xl font-bold text-slate-800 leading-snug">
          {title}
        </h2>
      </div>

      {/* Hints & Solution Section */}
      {(hints.length > 0 || (attempts >= 3 && solutionCode)) && (
        <div className="mt-6 flex flex-col gap-y-3 border-t-2 border-slate-100 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            {hints.length > 0 && !showHint && setShowHint && (
              <Button
                onClick={() => setShowHint(true)}
                variant="primaryOutline"
                size="sm"
                className="text-amber-600 border-amber-300 hover:bg-amber-50 rounded-xl"
              >
                <Lightbulb className="w-4 h-4 mr-2" /> Show Hint
              </Button>
            )}
            
            {attempts >= 3 && solutionCode && !showSolution && setShowSolution && (
              <Button
                onClick={() => setShowSolution(true)}
                variant="primaryOutline"
                size="sm"
                className="text-purple-600 border-purple-300 hover:bg-purple-50 rounded-xl"
              >
                <Eye className="w-4 h-4 mr-2" /> Show Solution
              </Button>
            )}
          </div>

          {showHint && hints.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-amber-800 flex items-start gap-x-3">
              <Lightbulb className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
              <p className="text-sm lg:text-base leading-relaxed whitespace-pre-wrap">
                {hints[Math.min(attempts, hints.length - 1)]}
              </p>
            </div>
          )}

          {showSolution && solutionCode && (
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 flex flex-col gap-y-2">
              <div className="flex items-center gap-x-2 text-purple-700 font-bold">
                <Eye className="w-4 h-4" /> Solution
              </div>
              <pre className="text-sm bg-white p-3 rounded-xl border border-purple-100 font-mono text-purple-900 whitespace-pre-wrap">
                {solutionCode}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
