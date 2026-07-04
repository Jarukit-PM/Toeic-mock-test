import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ExamClient } from "@/components/exam-client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getPartSet, parsePartNumber } from "@/data";
import {
  getDifficultyLabel,
  getPartStats,
} from "@/lib/toeic-utils";
import { PART_META } from "@/types/toeic";

interface ExamPageProps {
  params: Promise<{ partNumber: string; setId: string }>;
}

export default async function ExamPage({ params }: ExamPageProps) {
  const { partNumber, setId } = await params;
  const part = parsePartNumber(partNumber);
  const set = part ? getPartSet(part, setId) : undefined;

  if (!set || !part) notFound();

  const meta = PART_META[part];
  const difficulty = getDifficultyLabel(set.difficulty);
  const stats = getPartStats(set);

  return (
    <div>
      <div className="border-b bg-muted/30 px-4 py-3">
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <Button asChild variant="ghost" size="sm" className="-ml-2">
            <Link href="/">
              <ArrowLeft className="size-4" />
              กลับ
            </Link>
          </Button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{set.title}</p>
            <p className="text-xs text-muted-foreground">
              Part {part}: {meta.nameTh} · {stats.questionCount} ข้อ · ~
              {stats.estimatedMinutes} นาที
            </p>
          </div>
          <Badge variant="secondary" className="shrink-0">
            {difficulty.en}
          </Badge>
        </div>
      </div>
      <ExamClient set={set} />
    </div>
  );
}
