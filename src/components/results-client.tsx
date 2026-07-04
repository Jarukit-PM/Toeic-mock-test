"use client";

import Link from "next/link";
import { RotateCcw, ArrowLeft } from "lucide-react";
import { Part5Exam } from "@/components/part5-exam";
import { Part6Exam } from "@/components/part6-exam";
import { Part7Exam } from "@/components/part7-exam";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCorrectAnswers } from "@/data";
import { calculateScore, formatTime, getScoreColor } from "@/lib/toeic-utils";
import type { AnswerChoice, PartPracticeSet, TestResult } from "@/types/toeic";
import { PART_META } from "@/types/toeic";

interface ResultsClientProps {
  set: PartPracticeSet;
  result: TestResult;
}

export function ResultsClient({ set, result }: ResultsClientProps) {
  const part = set.part;
  const correctAnswers = getCorrectAnswers(set);
  const { details } = calculateScore(correctAnswers, result.answers);
  const percentage = Math.round((result.score / result.total) * 100);
  const wrongIds = Object.entries(details)
    .filter(([, correct]) => !correct)
    .map(([id]) => id);
  const meta = PART_META[part];

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border bg-card p-6 text-center sm:p-8">
        <p className="text-sm text-muted-foreground">
          {set.title} · Part {part} — {meta.nameTh}
        </p>
        <p className={`mt-2 text-5xl font-bold ${getScoreColor(percentage)}`}>
          {result.score}/{result.total}
        </p>
        <p className="mt-1 text-lg text-muted-foreground">{percentage}%</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">
            ใช้เวลา {formatTime(result.timeSpentSeconds)}
          </Badge>
          <Badge variant={wrongIds.length === 0 ? "default" : "outline"}>
            ผิด {wrongIds.length} ข้อ
          </Badge>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="size-4" />
            กลับหน้าแรก
          </Link>
        </Button>
        <Button asChild>
          <Link href={`/part/${part}/${set.id}`}>
            <RotateCcw className="size-4" />
            ลองใหม่ / Retry
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="wrong">
        <TabsList>
          <TabsTrigger value="wrong">ข้อที่ผิด ({wrongIds.length})</TabsTrigger>
          <TabsTrigger value="all">ทุกข้อ ({result.total})</TabsTrigger>
        </TabsList>

        <TabsContent value="wrong" className="mt-6">
          {wrongIds.length === 0 ? (
            <p className="rounded-xl border bg-success/5 p-6 text-center text-success">
              ยอดเยี่ยม! ไม่มีข้อผิด 🎉
            </p>
          ) : (
            <ReviewContent
              set={set}
              answers={result.answers}
              results={details}
              filterIds={new Set(wrongIds)}
            />
          )}
        </TabsContent>

        <TabsContent value="all" className="mt-6">
          <ReviewContent
            set={set}
            answers={result.answers}
            results={details}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ReviewContent({
  set,
  answers,
  results,
  filterIds,
}: {
  set: PartPracticeSet;
  answers: Record<string, AnswerChoice | null>;
  results: Record<string, boolean>;
  filterIds?: Set<string>;
}) {
  if (set.part === 5) {
    const questions = filterIds
      ? set.questions.filter((question) => filterIds.has(question.id))
      : set.questions;
    return (
      <Part5Exam
        questions={questions}
        answers={answers}
        onAnswer={() => {}}
        reviewMode
        results={results}
        showCorrect
      />
    );
  }

  if (set.part === 6) {
    const passages = set.passages
      .map((passage) => ({
        ...passage,
        questions: filterIds
          ? passage.questions.filter((question) => filterIds.has(question.id))
          : passage.questions,
      }))
      .filter((passage) => passage.questions.length > 0);

    return (
      <Part6Exam
        passages={passages}
        answers={answers}
        onAnswer={() => {}}
        reviewMode
        results={results}
        showCorrect
      />
    );
  }

  const groups = set.groups
    .map((group) => ({
      ...group,
      questions: filterIds
        ? group.questions.filter((question) => filterIds.has(question.id))
        : group.questions,
    }))
    .filter((group) => group.questions.length > 0);

  return (
    <Part7Exam
      groups={groups}
      answers={answers}
      onAnswer={() => {}}
      reviewMode
      results={results}
      showCorrect
    />
  );
}
