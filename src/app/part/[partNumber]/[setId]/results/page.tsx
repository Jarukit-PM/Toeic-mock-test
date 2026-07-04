import { notFound } from "next/navigation";
import { ResultsPageClient } from "@/components/results-page-client";
import { getPartSet, parsePartNumber } from "@/data";

interface ResultsPageProps {
  params: Promise<{ partNumber: string; setId: string }>;
}

export default async function ResultsPage({ params }: ResultsPageProps) {
  const { partNumber, setId } = await params;
  const part = parsePartNumber(partNumber);
  const set = part ? getPartSet(part, setId) : undefined;

  if (!set || !part) notFound();

  return <ResultsPageClient part={part} setId={setId} />;
}
