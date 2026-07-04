"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import { ExamTimer } from "@/components/exam-timer";
import { Part5Exam } from "@/components/part5-exam";
import { Part6Exam } from "@/components/part6-exam";
import { Part7Exam } from "@/components/part7-exam";
import { QuestionNavigator } from "@/components/question-navigator";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getAllQuestionIds, getCorrectAnswers } from "@/data";
import {
  clearDraftAnswers,
  loadDraftAnswers,
  saveDraftAnswers,
  saveTestResult,
} from "@/lib/storage";
import {
  calculateScore,
  getPartTimeLimitSeconds,
} from "@/lib/toeic-utils";
import type { AnswerChoice, PartPracticeSet } from "@/types/toeic";
import { PART_META } from "@/types/toeic";

interface ExamClientProps {
  set: PartPracticeSet;
}

export function ExamClient({ set }: ExamClientProps) {
  const router = useRouter();
  const part = set.part;
  const questionIds = useMemo(() => getAllQuestionIds(set), [set]);
  const timeLimit = useMemo(() => getPartTimeLimitSeconds(set), [set]);

  const [answers, setAnswers] = useState<Record<string, AnswerChoice | null>>(
    () => {
      const base = Object.fromEntries(questionIds.map((id) => [id, null]));
      if (typeof window === "undefined") return base;
      const draft = loadDraftAnswers(set.id, part);
      return draft ? { ...base, ...draft } : base;
    },
  );
  const [currentId, setCurrentId] = useState(questionIds[0] ?? "");
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [startTime] = useState(() => Date.now());
  const skipSaveRef = useRef(true);

  const questions = useMemo(
    () =>
      questionIds.map((id, index) => ({
        id,
        number: index + 1,
      })),
    [questionIds],
  );

  useEffect(() => {
    if (skipSaveRef.current) {
      skipSaveRef.current = false;
      return;
    }
    saveDraftAnswers(set.id, part, answers);
  }, [answers, set.id, part]);

  const answeredCount = Object.values(answers).filter((a) => a != null).length;
  const unansweredCount = questionIds.length - answeredCount;

  const handleAnswer = (questionId: string, choice: AnswerChoice) => {
    setAnswers((prev) => ({ ...prev, [questionId]: choice }));
  };

  const handleSubmit = useCallback(() => {
    const correctMap = getCorrectAnswers(set);
    const { score, total } = calculateScore(correctMap, answers);
    const timeSpentSeconds = Math.round((Date.now() - startTime) / 1000);

    saveTestResult({
      setId: set.id,
      part,
      answers,
      score,
      total,
      submittedAt: new Date().toISOString(),
      timeSpentSeconds,
    });
    clearDraftAnswers(set.id, part);
    router.push(`/part/${part}/${set.id}/results`);
  }, [answers, part, router, set, startTime]);

  const scrollToQuestion = (id: string) => {
    setCurrentId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mx-auto max-w-3xl space-y-4 px-4 py-6 pb-24">
      <div className="sticky top-14 z-40 -mx-4 border-b bg-background/95 px-4 py-3 backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium">
              Part {part}: {PART_META[part].name}
            </p>
            <p className="text-xs text-muted-foreground">
              {set.title} · {answeredCount}/{questionIds.length} answered
            </p>
          </div>
          <ExamTimer initialSeconds={timeLimit} onExpire={handleSubmit} />
        </div>
        <div className="mt-3">
          <QuestionNavigator
            questions={questions}
            answers={answers}
            currentId={currentId}
            onSelect={scrollToQuestion}
          />
        </div>
      </div>

      {part === 5 && (
        <Part5Exam
          questions={set.questions}
          answers={answers}
          onAnswer={handleAnswer}
        />
      )}

      {part === 6 && (
        <Part6Exam
          passages={set.passages}
          answers={answers}
          onAnswer={handleAnswer}
        />
      )}

      {part === 7 && (
        <Part7Exam
          groups={set.groups}
          answers={answers}
          onAnswer={handleAnswer}
        />
      )}

      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6">
        <Button
          size="lg"
          className="shadow-lg"
          onClick={() => setShowSubmitDialog(true)}
        >
          <Send className="size-4" />
          Submit ({answeredCount}/{questionIds.length})
        </Button>
      </div>

      <Dialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submit answers?</DialogTitle>
            <DialogDescription>
              {unansweredCount > 0
                ? `You have ${unansweredCount} unanswered question(s). Unanswered questions will be marked incorrect.`
                : "You have answered all questions. Ready to submit?"}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setShowSubmitDialog(false)}>
              Continue
            </Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
