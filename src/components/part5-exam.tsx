"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import type { AnswerChoice, Part5Question } from "@/types/toeic";

const CHOICES: AnswerChoice[] = ["A", "B", "C", "D"];

interface Part5ExamProps {
  questions: Part5Question[];
  answers: Record<string, AnswerChoice | null>;
  onAnswer: (questionId: string, choice: AnswerChoice) => void;
  reviewMode?: boolean;
  results?: Record<string, boolean>;
  showCorrect?: boolean;
}

export function Part5Exam({
  questions,
  answers,
  onAnswer,
  reviewMode = false,
  results,
  showCorrect = false,
}: Part5ExamProps) {
  return (
    <div className="space-y-6">
      {questions.map((question) => {
        const parts = question.sentence.split("___");
        const isCorrect = results?.[question.id];
        const userAnswer = answers[question.id];

        return (
          <article
            key={question.id}
            id={question.id}
            className={cn(
              "rounded-xl border p-4 sm:p-5",
              reviewMode &&
                isCorrect === true &&
                "border-success/40 bg-success/5",
              reviewMode &&
                isCorrect === false &&
                "border-destructive/40 bg-destructive/5",
            )}
          >
            <p className="mb-4 text-sm font-medium text-muted-foreground">
              ข้อ {question.number}
            </p>
            <p className="mb-4 text-base leading-relaxed">
              {parts[0]}
              <span className="mx-1 inline-block min-w-[4rem] border-b-2 border-primary/40 px-1 text-center font-medium text-primary">
                {userAnswer ? `(${userAnswer})` : "___"}
              </span>
              {parts[1] ?? ""}
            </p>

            <RadioGroup
              value={userAnswer ?? undefined}
              onValueChange={(value) =>
                !reviewMode && onAnswer(question.id, value as AnswerChoice)
              }
              className="space-y-2"
              disabled={reviewMode}
            >
              {question.options.map((option, index) => {
                const choice = CHOICES[index];
                const isUserChoice = userAnswer === choice;
                const isCorrectChoice =
                  showCorrect && question.correctAnswer === choice;

                return (
                  <div
                    key={choice}
                    className={cn(
                      "flex items-center gap-3 rounded-lg border px-3 py-2",
                      isUserChoice && !reviewMode && "border-primary bg-primary/5",
                      reviewMode &&
                        isCorrectChoice &&
                        "border-success bg-success/10",
                      reviewMode &&
                        isUserChoice &&
                        !isCorrectChoice &&
                        "border-destructive bg-destructive/10",
                    )}
                  >
                    <RadioGroupItem value={choice} id={`${question.id}-${choice}`} />
                    <Label
                      htmlFor={`${question.id}-${choice}`}
                      className="flex-1 cursor-pointer font-normal"
                    >
                      <span className="mr-2 font-semibold">{choice}.</span>
                      {option}
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>

            {reviewMode && question.explanation && (
              <p className="mt-3 rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">
                {question.explanation}
              </p>
            )}
          </article>
        );
      })}
    </div>
  );
}
