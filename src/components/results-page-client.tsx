"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ResultsClient } from "@/components/results-client";
import { Button } from "@/components/ui/button";
import { getPartSet } from "@/data";
import { useTestResult } from "@/hooks/use-test-result";
import type { PartNumber } from "@/types/toeic";

interface ResultsPageClientProps {
  part: PartNumber;
  setId: string;
}

export function ResultsPageClient({ part, setId }: ResultsPageClientProps) {
  const set = getPartSet(part, setId);
  const result = useTestResult(setId, part);

  if (!set) return null;

  if (!result) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-12 text-center">
        <p className="text-muted-foreground">ยังไม่มีผลคะแนนสำหรับ Part นี้</p>
        <Button asChild className="mt-4">
          <Link href={`/part/${part}/${setId}`}>เริ่มทำข้อสอบ</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Button asChild variant="ghost" className="mb-4 -ml-2">
        <Link href="/">
          <ArrowLeft className="size-4" />
          กลับหน้าแรก
        </Link>
      </Button>
      <ResultsClient set={set} result={result} />
    </div>
  );
}
