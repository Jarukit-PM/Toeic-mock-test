"use client";

import { useCallback, useSyncExternalStore } from "react";
import {
  getResultSnapshot,
  subscribeToResults,
} from "@/lib/storage";
import type { PartNumber, TestResult } from "@/types/toeic";

export function useTestResult(
  setId: string,
  part: PartNumber,
): TestResult | null {
  const getSnapshot = useCallback(
    () => getResultSnapshot(setId, part),
    [setId, part],
  );

  return useSyncExternalStore(
    subscribeToResults,
    getSnapshot,
    () => null,
  );
}
