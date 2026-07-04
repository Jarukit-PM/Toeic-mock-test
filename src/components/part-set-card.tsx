"use client";

import Link from "next/link";
import { Clock, CheckCircle2, ChevronRight, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSetProgress } from "@/hooks/use-set-progress";
import { getDifficultyLabel, getPartStats } from "@/lib/toeic-utils";
import { getProgressKey } from "@/lib/storage";
import type { PartPracticeSet } from "@/types/toeic";

interface PartSetCardProps {
  set: PartPracticeSet;
}

export function PartSetCard({ set }: PartSetCardProps) {
  const progress = useSetProgress();
  const key = getProgressKey(set.id, set.part);
  const partProgress = progress[key];
  const stats = getPartStats(set);
  const difficulty = getDifficultyLabel(set.difficulty);
  const hasProgress = (partProgress?.attempts ?? 0) > 0;

  return (
    <Link href={`/part/${set.part}/${set.id}`} className="group block">
      <Card className="h-full transition-all hover:border-primary/40 hover:shadow-md">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <div>
              <CardTitle className="text-lg group-hover:text-primary">
                {set.title}
              </CardTitle>
              <p className="mt-0.5 text-sm text-muted-foreground">{set.titleTh}</p>
            </div>
            <Badge variant="secondary">{difficulty.en}</Badge>
          </div>
          <CardDescription className="mt-2">
            {set.description}
            <span className="mt-1 block text-xs">{set.descriptionTh}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <FileText className="size-4" />
              {stats.questionCount} ข้อ
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" />
              ~{stats.estimatedMinutes} นาที
            </span>
            {hasProgress && (
              <span className="flex items-center gap-1 text-xs text-success">
                <CheckCircle2 className="size-3.5" />
                Best: {partProgress?.bestScore}%
              </span>
            )}
            <span className="ml-auto flex items-center gap-1 text-primary">
              เริ่มทำ
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
