// Database types matching the Supabase schema
// These replace the Drizzle ORM schema for type safety

export type Course = {
  id: number;
  title: string;
  image_src: string;
  category?: string;
  difficulty?: string;
  estimated_time?: string;
  popularity_score?: number;
  is_new?: boolean;
  description?: string;
  skills_learned?: string[];
  lesson_count?: number;
  xp_reward?: number;
  projects_count?: number;
  has_certificate?: boolean;
  prerequisites?: string[];
  tags?: string[];
  color_hex?: string;
  estimated_hours?: number;
  outcomes?: string[];
  version?: number;
};

export type Unit = {
  id: number;
  title: string;
  description: string;
  course_id: number;
  order: number;
  section_tier?: string;
};

export type Lesson = {
  id: number;
  title: string;
  unit_id: number;
  order: number;
  description?: string;
  explanation_markdown?: string;
  xp_reward?: number;
};

export type ChallengeType = "SELECT" | "ASSIST" | "CODE" | "PROJECT" | "CONCEPT";

export type EducationalStep = 
  | "motivation"
  | "explanation"
  | "comprehension"
  | "fill_blank"
  | "predict_output"
  | "guided_practice"
  | "independent_practice"
  | "knowledge_check"
  | "recap";

// --- Content Metadata Types (JSONB) ---
// These define the shape of the `content_metadata` field on challenges,
// which drives the entire 9-stage Universal Learning Model.

export type ConceptParagraph = string;

export type ContentMetadataIntro = {
  variant: "intro";
  icon?: string;
  paragraphs: ConceptParagraph[];
};

export type ContentMetadataExplanation = {
  variant: "explanation";
  icon?: string;
  paragraphs: ConceptParagraph[];
};

export type ContentMetadataComprehension = {
  variant: "comprehension";
  icon?: string;
  paragraphs: ConceptParagraph[];
};

export type ContentMetadataCodeBlock = {
  variant: "code-block";
  language: string;
  code: string;
  caption?: string;
};

export type ContentMetadataQuiz = {
  variant: "quiz";
  icon?: string;
  paragraphs?: ConceptParagraph[];
};

export type ContentMetadataRecap = {
  variant: "recap";
  icon?: string;
  paragraphs: ConceptParagraph[];
};

export type ContentMetadataCompletion = {
  variant: "completion";
  icon?: string;
  paragraphs?: ConceptParagraph[];
};

export type ContentMetadata =
  | ContentMetadataIntro
  | ContentMetadataExplanation
  | ContentMetadataComprehension
  | ContentMetadataCodeBlock
  | ContentMetadataQuiz
  | ContentMetadataRecap
  | ContentMetadataCompletion;

// --- Test Case Types (JSONB) ---

export type TestCase = {
  input?: string;
  expected_output: string;
  description?: string;
};

export type Challenge = {
  id: number;
  lesson_id: number;
  type: ChallengeType;
  question: string;
  order: number;
  lesson_step?: EducationalStep | null;
  starter_code?: string;
  solution_code?: string;
  test_cases?: TestCase[];
  hints?: string[];
  content_metadata?: ContentMetadata | null;
};


export type ChallengeOption = {
  id: number;
  challenge_id: number;
  text: string;
  correct: boolean;
  image_src: string | null;
  audio_src: string | null;
};

export type ChallengeProgress = {
  id: number;
  user_id: string;
  challenge_id: number;
  completed: boolean;
};

export type CourseCompletion = {
  id: number;
  user_id: string;
  course_id: number;
  completed_at: string;
  xp_earned: number;
  accuracy_percentage?: number;
  time_spent_seconds?: number;
  final_score?: number;
};

export type Certificate = {
  id: number;
  user_id: string;
  course_id: number;
  issue_date: string;
  certificate_url: string | null;
  verification_id: string;
};

export type LearningPath = {
  id: number;
  title: string;
  description: string;
  image_src: string | null;
};

export type LearningPathCourse = {
  path_id: number;
  course_id: number;
  order: number;
};

export type UserProgress = {
  user_id: string;
  user_name: string;
  user_image_src: string;
  active_course_id: number | null;
  hearts: number;
  points: number;
  experience_level?: string | null;
  daily_goal?: number | null;
  learning_style?: string | null;
  preferred_language?: string | null;
  interests?: string[] | null;
  course_versions?: Record<string, number> | null;
};

export type UserSubscription = {
  id: number;
  user_id: string;
  stripe_customer_id: string;
  stripe_subscription_id: string;
  stripe_price_id: string;
  stripe_current_period_end: string;
};

export type UserStreak = {
  user_id: string;
  streak_count: number;
  last_activity: string | null;
};

export type Achievement = {
  id: number;
  title: string;
  description: string;
  icon_src: string;
  requirement_type: string;
  requirement_value: number;
  created_at: string;
};

export type UserAchievement = {
  id: number;
  user_id: string;
  achievement_id: number;
  unlocked_at: string;
};

// ---- Joined / nested types used by queries ----

export type UserProgressWithCourse = UserProgress & {
  courses: Course | null;
};

export type ChallengeWithProgressAndOptions = Challenge & {
  challenge_options: ChallengeOption[];
  challenge_progress: ChallengeProgress[];
  completed?: boolean;
};

export type LessonWithChallenges = Lesson & {
  challenges: ChallengeWithProgressAndOptions[];
  completed?: boolean;
};

export type UnitWithLessons = Unit & {
  lessons: LessonWithChallenges[];
};

export type CourseWithUnitsAndLessons = Course & {
  units: (Unit & {
    lessons: Lesson[];
  })[];
};

export type LessonWithUnit = Lesson & {
  units: Unit;
  challenges: (Challenge & {
    challenge_progress: ChallengeProgress[];
  })[];
};
