import type { AnswerChoice, PartNumber, PartPracticeSet } from "@/types/toeic";

export {
  PART_SETS,
  getAllPartSetIds,
  getPartSet,
  getPartSets,
  part5Sets,
  part6Sets,
  part7Sets,
} from "./parts";

export function getCorrectAnswers(
  set: PartPracticeSet,
): Record<string, AnswerChoice> {
  if (set.part === 5) {
    return Object.fromEntries(
      set.questions.map((question) => [question.id, question.correctAnswer]),
    );
  }

  if (set.part === 6) {
    return Object.fromEntries(
      set.passages.flatMap((passage) =>
        passage.questions.map((question) => [question.id, question.correctAnswer]),
      ),
    );
  }

  return Object.fromEntries(
    set.groups.flatMap((group) =>
      group.questions.map((question) => [question.id, question.correctAnswer]),
    ),
  );
}

export function getAllQuestionIds(set: PartPracticeSet): string[] {
  return Object.keys(getCorrectAnswers(set));
}

export function parsePartNumber(value: string): PartNumber | null {
  const num = Number(value);
  if (num === 5 || num === 6 || num === 7) return num;
  return null;
}
