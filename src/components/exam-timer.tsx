"use client";

import { Clock, AlertTriangle } from "lucide-react";
import { useExamTimer } from "@/hooks/use-exam-timer";
import { cn } from "@/lib/utils";

interface ExamTimerProps {
  initialSeconds: number;
  onExpire: () => void;
}

export function ExamTimer({ initialSeconds, onExpire }: ExamTimerProps) {
  const { formatted, isLow } = useExamTimer({
    initialSeconds,
    onExpire,
  });

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-sm font-medium tabular-nums",
        isLow
          ? "bg-destructive/10 text-destructive"
          : "bg-secondary text-secondary-foreground",
      )}
    >
      {isLow ? (
        <AlertTriangle className="size-4 animate-pulse" />
      ) : (
        <Clock className="size-4" />
      )}
      <span>{formatted}</span>
    </div>
  );
}
