import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Codez",
  description:
    "Interactive platform for learning to code with hands-on lessons, quizzes, and progress tracking.",
  keywords: [
    "codez",
    "learn-to-code",
    "javascript",
    "python",
    "html",
    "css",
    "coding-platform",
    "nextjs",
    "react",
    "supabase",
    "interactive-learning",
    "programming",
    "typescript",
  ] as Array<string>,
  authors: {
    name: "Vishruth Sai",
    url: "https://github.com/VishruthSai123",
  },
} as const;

export const links = {
  sourceCode: "https://github.com/VishruthSai123/Codez",
  email: "vishruthsai@example.com",
} as const;
