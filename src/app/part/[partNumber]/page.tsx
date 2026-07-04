import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PartSetCard } from "@/components/part-set-card";
import { Button } from "@/components/ui/button";
import { getPartSets, parsePartNumber } from "@/data";
import { PART_META } from "@/types/toeic";

interface PartPageProps {
  params: Promise<{ partNumber: string }>;
}

export default async function PartPage({ params }: PartPageProps) {
  const { partNumber } = await params;
  const part = parsePartNumber(partNumber);

  if (!part) notFound();

  const sets = getPartSets(part);
  const meta = PART_META[part];
  const totalQuestions = sets.reduce((sum, s) => {
    if (s.part === 5) return sum + s.questions.length;
    if (s.part === 6) return sum + s.passages.reduce((p, pass) => p + pass.questions.length, 0);
    return sum + s.groups.reduce((g, grp) => g + grp.questions.length, 0);
  }, 0);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Button asChild variant="ghost" className="mb-4 -ml-2">
        <Link href="/">
          <ArrowLeft className="size-4" />
          กลับหน้าแรก
        </Link>
      </Button>

      <div className="mb-8 rounded-2xl border bg-card p-6">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Part {part}: {meta.name}
        </h1>
        <p className="mt-1 text-muted-foreground">{meta.nameTh}</p>
        <p className="mt-4 text-sm text-muted-foreground">
          {sets.length} ชุดข้อสอบ · รวม {totalQuestions} ข้อ · เวลามาตรฐาน{" "}
          {meta.fullMinutes} นาที / {meta.fullQuestions} ข้อ
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sets.map((set) => (
          <PartSetCard key={set.id} set={set} />
        ))}
      </div>
    </div>
  );
}
