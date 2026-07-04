"use client";

import { useSyncExternalStore } from "react";
import {
  getProgressSnapshot,
  getServerProgressSnapshot,
  subscribeToProgress,
} from "@/lib/storage";
import type { SetProgress } from "@/types/toeic";

export function useSetProgress(): SetProgress {
  return useSyncExternalStore(
    subscribeToProgress,
    getProgressSnapshot,
    getServerProgressSnapshot,
  );
}
