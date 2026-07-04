import type {
  AnswerChoice,
  PartPracticeSet,
  PartStats,
} from "@/types/toeic";
import { PART_META } from "@/types/toeic";

export function getPartQuestionCount(set: PartPracticeSet): number {
  if (set.part === 5) return set.questions.length;
  if (set.part === 6) {
    return set.passages.reduce(
      (sum, passage) => sum + passage.questions.length,
      0,
    );
  }
  return set.groups.reduce(
    (sum, group) => sum + group.questions.length,
    0,
  );
}

export function getPartStats(set: PartPracticeSet): PartStats {
  const questionCount = getPartQuestionCount(set);
  const meta = PART_META[set.part];
  const estimatedMinutes = Math.max(
    1,
    Math.round((questionCount / meta.fullQuestions) * meta.fullMinutes),
  );
  return { questionCount, estimatedMinutes };
}

export function getPartTimeLimitSeconds(set: PartPracticeSet): number {
  const stats = getPartStats(set);
  return stats.estimatedMinutes * 60;
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

export function calculateScore(
  correctAnswers: Record<string, AnswerChoice>,
  userAnswers: Record<string, AnswerChoice | null>,
): { score: number; total: number; details: Record<string, boolean> } {
  const details: Record<string, boolean> = {};
  let score = 0;
  const total = Object.keys(correctAnswers).length;

  for (const [id, correct] of Object.entries(correctAnswers)) {
    const isCorrect = userAnswers[id] === correct;
    details[id] = isCorrect;
    if (isCorrect) score += 1;
  }

  return { score, total, details };
}

export function getScoreColor(percentage: number): string {
  if (percentage >= 80) return "text-success";
  if (percentage >= 60) return "text-primary";
  if (percentage >= 40) return "text-amber-600";
  return "text-destructive";
}

export function getDifficultyLabel(
  difficulty: PartPracticeSet["difficulty"],
): { en: string; th: string } {
  const map = {
    beginner: { en: "Beginner", th: "เริ่มต้น" },
    intermediate: { en: "Intermediate", th: "ปานกลาง" },
    advanced: { en: "Advanced", th: "ขั้นสูง" },
  };
  return map[difficulty];
}
