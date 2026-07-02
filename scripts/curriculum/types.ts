export type ChallengeType = "SELECT" | "ASSIST" | "CODE" | "CONCEPT";

export type ContentMetadata = {
  variant: string;
  icon?: string;
  paragraphs?: string[];
  keyPoints?: string[];
  codeBlocks?: Array<{ code: string; language: string; explanation?: string }>;
  language?: string;
  initialCode?: string;
  expectedOutput?: string;
  hints?: string[];
  solutionCode?: string;
};

export type Option = {
  text: string;
  correct: boolean;
};

export type Challenge = {
  type: ChallengeType;
  question: string;
  lesson_step: string;
  order: number;
  content_metadata?: ContentMetadata;
  options?: Option[];
};

export type Lesson = {
  id: number;
  title: string;
  unit_id: number;
  order: number;
  description: string;
  xp_reward: number;
  challenges: Challenge[];
};

export type Unit = {
  id: number;
  title: string;
  description: string;
  course_id: number;
  order: number;
  section_tier: string;
};
