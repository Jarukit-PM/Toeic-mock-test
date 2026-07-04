"use client";

import { useCallback, useEffect, useState } from "react";
import { formatTime } from "@/lib/toeic-utils";

interface UseExamTimerOptions {
  initialSeconds: number;
  onExpire?: () => void;
  autoStart?: boolean;
}

export function useExamTimer({
  initialSeconds,
  onExpire,
  autoStart = true,
}: UseExamTimerOptions) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(autoStart);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) return;

    const interval = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          onExpire?.();
          return 0;
        }
        return prev - 1;
      });
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isRunning, secondsLeft, onExpire]);

  const pause = useCallback(() => setIsRunning(false), []);
  const resume = useCallback(() => {
    if (secondsLeft > 0) setIsRunning(true);
  }, [secondsLeft]);

  const formatted = formatTime(secondsLeft);
  const isLow = secondsLeft <= 60;
  const isExpired = secondsLeft <= 0;

  return {
    secondsLeft,
    elapsedSeconds,
    formatted,
    isRunning,
    isLow,
    isExpired,
    pause,
    resume,
  };
}
