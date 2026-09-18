import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import type { LogEntry } from "../types/log";

const MAX_ENTRIES = 25;
const POLL_INTERVAL_MS = 5000;

function formatTime(date: Date): string {
  return date.toISOString().slice(11, 23);
}

function formatErrorLine(endpoint: string, error: unknown): string {
  const message =
    error instanceof Error ? error.message : JSON.stringify(error);
  return `${formatTime(new Date())} - GET ${endpoint} failed: ${message}`;
}

export function usePolling<T>(endpoint: string, queryFn: () => Promise<T>) {
  const [entries, setEntries] = useState<LogEntry[]>([]);
  const previousPayload = useRef<string | null>(null);

  const appendEntry = (text: string, changed = false) => {
    setEntries((prev) =>
      [...prev, { timestamp: Date.now(), text, changed }].slice(-MAX_ENTRIES),
    );
  };

  const query = useQuery({
    queryKey: [endpoint],
    queryFn,
    refetchInterval: POLL_INTERVAL_MS,
  });

  useEffect(() => {
    if (query.dataUpdatedAt === 0 || !query.data) {
      return;
    }

    const payload = JSON.stringify(query.data);
    const hasChanged = payload !== previousPayload.current;
    const status = hasChanged ? "changed" : "no change";

    previousPayload.current = payload;

    appendEntry(
      `${formatTime(new Date())}  GET ${endpoint} → ${status}`,
      hasChanged,
    );
  }, [query.dataUpdatedAt]);

  useEffect(() => {
    if (query.errorUpdatedAt === 0) {
      return;
    }

    appendEntry(formatErrorLine(endpoint, query.error));
  }, [query.errorUpdatedAt]);

  return entries;
}
