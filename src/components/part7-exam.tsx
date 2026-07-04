"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { AnswerChoice, Part7Group } from "@/types/toeic";

const CHOICES: AnswerChoice[] = ["A", "B", "C", "D"];

interface Part7ExamProps {
  groups: Part7Group[];
  answers: Record<string, AnswerChoice | null>;
  onAnswer: (questionId: string, choice: AnswerChoice) => void;
  reviewMode?: boolean;
  results?: Record<string, boolean>;
  showCorrect?: boolean;
}

const layoutLabel = {
  single: "Single Passage",
  double: "Double Passage",
  triple: "Triple Passage",
};

export function Part7Exam({
  groups,
  answers,
  onAnswer,
  reviewMode = false,
  results,
  showCorrect = false,
}: Part7ExamProps) {
  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <section key={group.id} className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="outline">{layoutLabel[group.layout]}</Badge>
            <span className="text-sm text-muted-foreground">
              {group.passages.length} passage(s)
            </span>
          </div>

          <div
            className={cn(
              "grid gap-4",
              group.layout === "double" && "md:grid-cols-2",
              group.layout === "triple" && "lg:grid-cols-3",
            )}
          >
            {group.passages.map((passage) => (
              <div
                key={passage.id}
                className="rounded-xl border bg-card p-4 sm:p-5"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h3 className="font-semibold">{passage.title}</h3>
                  <Badge variant="secondary" className="capitalize">
                    {passage.type}
                  </Badge>
                </div>
                <div className="space-y-2 text-sm leading-relaxed">
                  {passage.content.map((line, index) =>
                    line === "" ? (
                      <div key={`${passage.id}-spacer-${index}`} className="h-2" />
                    ) : (
                      <p key={`${passage.id}-line-${index}`}>{line}</p>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            {group.questions.map((question) => {
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
                  <p className="mb-2 text-sm font-medium text-muted-foreground">
                    ข้อ {question.number}
                  </p>
                  <p className="mb-4 font-medium">{question.prompt}</p>

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
                            isUserChoice &&
                              !reviewMode &&
                              "border-primary bg-primary/5",
                            reviewMode &&
                              isCorrectChoice &&
                              "border-success bg-success/10",
                            reviewMode &&
                              isUserChoice &&
                              !isCorrectChoice &&
                              "border-destructive bg-destructive/10",
                          )}
                        >
                          <RadioGroupItem
                            value={choice}
                            id={`${question.id}-${choice}`}
                          />
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

          <Separator />
        </section>
      ))}
    </div>
  );
}
