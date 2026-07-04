"use client";

import { cn } from "@/lib/utils";
import type { AnswerChoice } from "@/types/toeic";

interface QuestionNavigatorProps {
  questions: { id: string; number: number }[];
  answers: Record<string, AnswerChoice | null>;
  currentId: string;
  onSelect: (id: string) => void;
}

export function QuestionNavigator({
  questions,
  answers,
  currentId,
  onSelect,
}: QuestionNavigatorProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {questions.map((q) => {
        const answered = answers[q.id] != null;
        const isCurrent = q.id === currentId;
        return (
          <button
            key={q.id}
            type="button"
            onClick={() => onSelect(q.id)}
            className={cn(
              "flex size-8 items-center justify-center rounded-md text-xs font-medium transition-colors",
              isCurrent && "ring-2 ring-primary ring-offset-1",
              answered
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80",
            )}
          >
            {q.number}
          </button>
        );
      })}
    </div>
  );
}
