"use client";

import { motion } from "framer-motion";
import { Info, CheckCircle, Flame, Star, Lightbulb, BookOpen, Code, Repeat, ArrowRight } from "lucide-react";

type IntroCardProps = {
  title: string;
  content: any;
  // content shape:
  // {
  //   icon?: "flame" | "star" | "lightbulb" | "book" | "code" | "check",
  //   variant?: "intro" | "example" | "recap",
  //   paragraphs?: string[],
  //   codeBlocks?: { code: string, language: string, output?: string, explanation?: string }[],
  //   keyPoints?: string[],
  //   commonMistakes?: string[],
  // }
};

const iconMap: Record<string, any> = {
  flame: Flame,
  star: Star,
  lightbulb: Lightbulb,
  book: BookOpen,
  code: Code,
  check: CheckCircle,
  repeat: Repeat,
  info: Info,
};

const variantStyles: Record<string, { bg: string; border: string; iconBg: string; iconColor: string; label: string }> = {
  intro: {
    bg: "bg-white",
    border: "border-sky-200",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-500",
    label: "📖 Introduction",
  },
  example: {
    bg: "bg-white",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
    label: "💡 Examples",
  },
  recap: {
    bg: "bg-white",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500",
    label: "✅ Recap",
  },
};

/**
 * Renders a paragraph that may contain inline code (`code`) or code blocks (```).
 */
const RichParagraph = ({ text }: { text: string }) => {
  // Check if this paragraph contains a code block
  if (text.includes("```")) {
    const parts = text.split(/(```[\s\S]*?```)/);
    return (
      <div className="space-y-3">
        {parts.map((part, i) => {
          if (part.startsWith("```")) {
            const codeContent = part.replace(/```\w*\n?/, "").replace(/```$/, "").trim();
            return (
              <pre
                key={i}
                className="bg-slate-900 text-green-400 px-4 py-3 rounded-xl text-sm font-mono overflow-x-auto leading-relaxed"
              >
                {codeContent}
              </pre>
            );
          }
          if (!part.trim()) return null;
          return <p key={i} className="leading-relaxed">{renderInlineCode(part)}</p>;
        })}
      </div>
    );
  }

  // Check for line breaks in text that look like code examples
  if (text.includes("\n") && (text.includes("print") || text.includes("=") || text.includes("if ") || text.includes("for ") || text.includes("def "))) {
    return (
      <pre className="bg-slate-900 text-green-400 px-4 py-3 rounded-xl text-sm font-mono overflow-x-auto leading-relaxed">
        {text}
      </pre>
    );
  }

  return <p className="leading-relaxed">{renderInlineCode(text)}</p>;
};

/**
 * Renders inline `code` within a paragraph.
 */
function renderInlineCode(text: string) {
  const parts = text.split(/(`[^`]+`)/);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={i} className="bg-slate-100 text-sky-700 px-1.5 py-0.5 rounded text-sm font-mono font-semibold">
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export const IntroCard = ({ title, content }: IntroCardProps) => {
  const variant = content?.variant || "intro";
  const styles = variantStyles[variant] || variantStyles.intro;
  const iconName = content?.icon || (variant === "recap" ? "check" : variant === "example" ? "lightbulb" : "info");
  const Icon = iconMap[iconName] || Info;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex flex-col p-6 md:p-8 ${styles.bg} border-2 ${styles.border} rounded-2xl shadow-sm w-full max-w-2xl mx-auto`}
    >
      {/* Variant label */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {styles.label}
        </span>
      </div>

      {/* Icon + Title */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`${styles.iconBg} p-3 rounded-full shrink-0`}>
          <Icon className={`w-7 h-7 ${styles.iconColor}`} />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-800">{title}</h2>
      </div>

      {/* Paragraphs */}
      {content?.paragraphs && (
        <div className="space-y-4 text-slate-600 text-base md:text-lg">
          {content.paragraphs.map((p: string, i: number) => (
            <RichParagraph key={i} text={p} />
          ))}
        </div>
      )}

      {/* Code Blocks with Explanations */}
      {content?.codeBlocks && content.codeBlocks.length > 0 && (
        <div className="mt-6 space-y-4">
          {content.codeBlocks.map((block: any, i: number) => (
            <div key={i} className="rounded-xl overflow-hidden border border-slate-200">
              {block.explanation && (
                <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
                  <p className="text-sm text-slate-600 font-medium">{block.explanation}</p>
                </div>
              )}
              <pre className="bg-slate-900 text-green-400 px-4 py-3 text-sm font-mono overflow-x-auto leading-relaxed">
                {block.code}
              </pre>
              {block.output && (
                <div className="bg-slate-800 px-4 py-2 border-t border-slate-700">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Output: </span>
                  <span className="text-sm text-emerald-400 font-mono">{block.output}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Key Points (for recap) */}
      {content?.keyPoints && content.keyPoints.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Key Takeaways</h3>
          <ul className="space-y-2">
            {content.keyPoints.map((point: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-slate-700">
                <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span>{renderInlineCode(point)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Common Mistakes (for recap) */}
      {content?.commonMistakes && content.commonMistakes.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Common Mistakes</h3>
          <ul className="space-y-2">
            {content.commonMistakes.map((mistake: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-red-700 bg-red-50 px-3 py-2 rounded-lg border border-red-200">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="text-sm">{mistake}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

// Need AlertTriangle for common mistakes
import { AlertTriangle } from "lucide-react";
