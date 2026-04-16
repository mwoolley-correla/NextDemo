import "server-only";
import { performance } from "node:perf_hooks";

export type TelemetryEntry = {
  id: number;
  name: string;
  durationMs: number;
  timestamp: string;
  metadata?: Record<string, unknown>;
};

const entries: TelemetryEntry[] = [];
let nextTelemetryId = 1;

export function recordTelemetry(
  name: string,
  durationMs: number,
  metadata?: Record<string, unknown>
) {
  entries.push({
    id: nextTelemetryId++,
    name,
    durationMs,
    timestamp: new Date().toISOString(),
    metadata,
  });

  if (entries.length > 100) {
    entries.shift();
  }
}

export async function measureAsync<T>(
  name: string,
  run: () => Promise<T>,
  metadata?: Record<string, unknown>
): Promise<T> {
  const startedAt = performance.now();
  try {
    return await run();
  } finally {
    recordTelemetry(name, Number((performance.now() - startedAt).toFixed(2)), metadata);
  }
}

export function getRecentTelemetry() {
  return [...entries].reverse();
}
