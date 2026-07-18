import type { PartNumber, PartPracticeSet, Part5Set, Part6Set, Part7Set } from "@/types/toeic";
import { part5SetA } from "./part5/set-a";
import { part5SetB } from "./part5/set-b";
import { part5SetC } from "./part5/set-c";
import { part6Set1 } from "./part6/set-1";
import { part6Set2 } from "./part6/set-2";
import { part6Set3 } from "./part6/set-3";
import { part7Set1 } from "./part7/set-1";
import { part7Set2 } from "./part7/set-2";
import { part7Set3 } from "./part7/set-3";

export const part5Sets: Part5Set[] = [part5SetA, part5SetB, part5SetC];
export const part6Sets: Part6Set[] = [part6Set1, part6Set2, part6Set3];
export const part7Sets: Part7Set[] = [part7Set1, part7Set2, part7Set3];

export const PART_SETS: Record<PartNumber, PartPracticeSet[]> = {
  5: part5Sets,
  6: part6Sets,
  7: part7Sets,
};

export function getPartSets(part: PartNumber): PartPracticeSet[] {
  return PART_SETS[part];
}

export function getPartSet(part: PartNumber, setId: string): PartPracticeSet | undefined {
  return PART_SETS[part].find((s) => s.id === setId);
}

export function getAllPartSetIds(part: PartNumber): string[] {
  return PART_SETS[part].map((s) => s.id);
}
