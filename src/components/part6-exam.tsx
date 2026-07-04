"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { AnswerChoice, Part6Passage } from "@/types/toeic";

const CHOICES: AnswerChoice[] = ["A", "B", "C", "D"];

interface Part6ExamProps {
  passages: Part6Passage[];
  answers: Record<string, AnswerChoice | null>;
  onAnswer: (questionId: string, choice: AnswerChoice) => void;
  reviewMode?: boolean;
  results?: Record<string, boolean>;
  showCorrect?: boolean;
}

function renderParagraph(paragraph: string, blankNumber?: number) {
  if (!blankNumber) return <p>{paragraph}</p>;

  const marker = `{{${blankNumber}}}`;
  if (!paragraph.includes(marker)) return <p>{paragraph}</p>;

  const [before, after] = paragraph.split(marker);
  return (
    <p>
      {before}
      <span className="mx-1 inline-block min-w-[5rem] border-b-2 border-primary/40 px-1 text-center font-medium text-primary">
        [{blankNumber}]
      </span>
      {after}
    </p>
  );
}

export function Part6Exam({
  passages,
  answers,
  onAnswer,
  reviewMode = false,
  results,
  showCorrect = false,
}: Part6ExamProps) {
  return (
    <div className="space-y-8">
      {passages.map((passage) => (
        <section key={passage.id} className="space-y-6">
          <div className="rounded-xl border bg-card p-4 sm:p-6">
            {passage.title && (
              <h3 className="mb-4 text-lg font-semibold">{passage.title}</h3>
            )}
            <div className="space-y-3 text-sm leading-relaxed sm:text-base">
              {passage.paragraphs.map((paragraph, index) => (
                <div key={`${passage.id}-p-${index}`}>
                  {renderParagraph(paragraph)}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {passage.questions.map((question) => {
              const isCorrect = results?.[question.id];
              const userAnswer = answers[question.id];

              return (
                <article
                  key={question.id}
                  id={question.id}
                  className={cn(
                    "rounded-xl border p-4",
                    reviewMode &&
                      isCorrect === true &&
                      "border-success/40 bg-success/5",
                    reviewMode &&
                      isCorrect === false &&
                      "border-destructive/40 bg-destructive/5",
                  )}
                >
                  <p className="mb-3 text-sm font-medium text-muted-foreground">
                    ข้อ {question.number} — Choose the best word for blank{" "}
                    {question.number}
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
