import type { PartNumber, SetProgress, TestResult } from "@/types/toeic";

const PROGRESS_KEY = "toeic-reading-progress";
const RESULT_PREFIX = "toeic-result";
const PROGRESS_EVENT = "toeic-progress-change";
const RESULT_EVENT = "toeic-result-change";

const emptyProgress: SetProgress = {};

let progressCache: SetProgress = emptyProgress;
let progressCacheRaw: string | null = null;

const resultCaches = new Map<string, { raw: string | null; value: TestResult | null }>();

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function notifyProgressChange(): void {
  if (!isBrowser()) return;
  progressCacheRaw = null;
  window.dispatchEvent(new Event(PROGRESS_EVENT));
}

function notifyResultChange(setId: string, part: PartNumber): void {
  if (!isBrowser()) return;
  resultCaches.delete(`${setId}-part${part}`);
  window.dispatchEvent(new Event(RESULT_EVENT));
}

export function getProgressKey(setId: string, part: PartNumber): string {
  return `${setId}-part${part}`;
}

function readProgressSnapshot(): SetProgress {
  if (!isBrowser()) return emptyProgress;

  const raw = localStorage.getItem(PROGRESS_KEY);
  if (raw === progressCacheRaw) return progressCache;

  progressCacheRaw = raw;
  try {
    progressCache = raw ? (JSON.parse(raw) as SetProgress) : emptyProgress;
  } catch {
    progressCache = emptyProgress;
  }
  return progressCache;
}

function readResultSnapshot(setId: string, part: PartNumber): TestResult | null {
  if (!isBrowser()) return null;

  const cacheKey = `${setId}-part${part}`;
  const raw = localStorage.getItem(`${RESULT_PREFIX}-${setId}-part${part}`);
  const cached = resultCaches.get(cacheKey);

  if (cached && cached.raw === raw) return cached.value;

  let value: TestResult | null = null;
  try {
    value = raw ? (JSON.parse(raw) as TestResult) : null;
  } catch {
    value = null;
  }

  resultCaches.set(cacheKey, { raw, value });
  return value;
}

export function subscribeToProgress(onStoreChange: () => void): () => void {
  const handleChange = () => onStoreChange();
  window.addEventListener("storage", handleChange);
  window.addEventListener(PROGRESS_EVENT, handleChange);
  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(PROGRESS_EVENT, handleChange);
  };
}

export function subscribeToResults(onStoreChange: () => void): () => void {
  const handleChange = () => onStoreChange();
  window.addEventListener("storage", handleChange);
  window.addEventListener(RESULT_EVENT, handleChange);
  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(RESULT_EVENT, handleChange);
  };
}

export function getProgressSnapshot(): SetProgress {
  return readProgressSnapshot();
}

export function getResultSnapshot(
  setId: string,
  part: PartNumber,
): TestResult | null {
  return readResultSnapshot(setId, part);
}

export function getServerProgressSnapshot(): SetProgress {
  return emptyProgress;
}

export function loadSetProgress(): SetProgress {
  return readProgressSnapshot();
}

export function savePartProgress(
  setId: string,
  part: PartNumber,
  score: number,
  total: number,
): void {
  if (!isBrowser()) return;
  const progress = { ...readProgressSnapshot() };
  const key = getProgressKey(setId, part);
  const existing = progress[key] ?? {};
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  progress[key] = {
    attempts: (existing.attempts ?? 0) + 1,
    bestScore: Math.max(existing.bestScore ?? 0, percentage),
    lastAttemptAt: new Date().toISOString(),
  };

  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  notifyProgressChange();
}

export function saveTestResult(result: TestResult): void {
  if (!isBrowser()) return;
  const key = `${RESULT_PREFIX}-${result.setId}-part${result.part}`;
  localStorage.setItem(key, JSON.stringify(result));
  savePartProgress(result.setId, result.part, result.score, result.total);
  notifyResultChange(result.setId, result.part);
}

export function loadTestResult(
  setId: string,
  part: PartNumber,
): TestResult | null {
  return readResultSnapshot(setId, part);
}

export function saveDraftAnswers(
  setId: string,
  part: PartNumber,
  answers: Record<string, import("@/types/toeic").AnswerChoice | null>,
): void {
  if (!isBrowser()) return;
  localStorage.setItem(
    `toeic-draft-${setId}-part${part}`,
    JSON.stringify(answers),
  );
}

export function loadDraftAnswers(
  setId: string,
  part: PartNumber,
): Record<string, import("@/types/toeic").AnswerChoice | null> | null {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(`toeic-draft-${setId}-part${part}`);
    return raw
      ? (JSON.parse(raw) as Record<string, import("@/types/toeic").AnswerChoice | null>)
      : null;
  } catch {
    return null;
  }
}

export function clearDraftAnswers(setId: string, part: PartNumber): void {
  if (!isBrowser()) return;
  localStorage.removeItem(`toeic-draft-${setId}-part${part}`);
}
