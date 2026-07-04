export type AnswerChoice = "A" | "B" | "C" | "D";

export type PartNumber = 5 | 6 | 7;

export interface BaseQuestion {
  id: string;
  number: number;
  options: [string, string, string, string];
  correctAnswer: AnswerChoice;
  explanation?: string;
}

export interface Part5Question extends BaseQuestion {
  sentence: string;
}

export type Part6Question = BaseQuestion;

export interface Part6Passage {
  id: string;
  title?: string;
  paragraphs: string[];
  questions: Part6Question[];
}

export type Part7PassageType =
  | "email"
  | "article"
  | "notice"
  | "advertisement"
  | "memo";

export interface Part7Passage {
  id: string;
  title: string;
  type: Part7PassageType;
  content: string[];
}

export interface Part7Question extends BaseQuestion {
  prompt: string;
}

export interface Part7Group {
  id: string;
  layout: "single" | "double" | "triple";
  passages: Part7Passage[];
  questions: Part7Question[];
}

export interface PartSetBase {
  id: string;
  title: string;
  titleTh: string;
  description: string;
  descriptionTh: string;
  difficulty: "beginner" | "intermediate" | "advanced";
}

export interface Part5Set extends PartSetBase {
  part: 5;
  questions: Part5Question[];
}

export interface Part6Set extends PartSetBase {
  part: 6;
  passages: Part6Passage[];
}

export interface Part7Set extends PartSetBase {
  part: 7;
  groups: Part7Group[];
}

export type PartPracticeSet = Part5Set | Part6Set | Part7Set;

export interface PartMeta {
  number: PartNumber;
  name: string;
  nameTh: string;
  fullQuestions: number;
  fullMinutes: number;
}

export const PART_META: Record<PartNumber, PartMeta> = {
  5: {
    number: 5,
    name: "Incomplete Sentences",
    nameTh: "ประโยคไม่สมบูรณ์",
    fullQuestions: 30,
    fullMinutes: 15,
  },
  6: {
    number: 6,
    name: "Text Completion",
    nameTh: "เติมข้อความ",
    fullQuestions: 16,
    fullMinutes: 8,
  },
  7: {
    number: 7,
    name: "Reading Comprehension",
    nameTh: "ความเข้าใจการอ่าน",
    fullQuestions: 54,
    fullMinutes: 54,
  },
};

export interface PartStats {
  questionCount: number;
  estimatedMinutes: number;
}

export interface TestResult {
  setId: string;
  part: PartNumber;
  answers: Record<string, AnswerChoice | null>;
  score: number;
  total: number;
  submittedAt: string;
  timeSpentSeconds: number;
}

export interface SetProgress {
  [key: string]: {
    bestScore?: number;
    attempts?: number;
    lastAttemptAt?: string;
  };
}
