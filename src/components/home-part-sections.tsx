"use client";

import { PartSetCard } from "@/components/part-set-card";
import { getPartSets } from "@/data";
import type { PartNumber } from "@/types/toeic";
import { PART_META } from "@/types/toeic";

interface HomePartSectionsProps {
  part: PartNumber;
}

export function HomePartSection({ part }: HomePartSectionsProps) {
  const meta = PART_META[part];
  const sets = getPartSets(part);

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">
          Part {part}: {meta.name}
        </h2>
        <p className="text-sm text-muted-foreground">{meta.nameTh}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sets.map((set) => (
          <PartSetCard key={set.id} set={set} />
        ))}
      </div>
    </section>
  );
}

export function HomePartSections() {
  return (
    <div className="space-y-10">
      <HomePartSection part={5} />
      <HomePartSection part={6} />
      <HomePartSection part={7} />
    </div>
  );
}
