import "server-only";

export type LogEntry = {
  id: number;
  timestamp: string;
  level: "info" | "warn" | "error";
  message: string;
  context?: Record<string, unknown>;
};

const logs: LogEntry[] = [];
let nextLogId = 1;

function record(level: LogEntry["level"], message: string, context?: Record<string, unknown>) {
  const entry: LogEntry = {
    id: nextLogId++,
    timestamp: new Date().toISOString(),
    level,
    message,
    context,
  };

  logs.push(entry);

  if (logs.length > 100) {
    logs.shift();
  }

  const payload = context ? `${message} ${JSON.stringify(context)}` : message;

  if (level === "error") {
    console.error(payload);
  } else if (level === "warn") {
    console.warn(payload);
  } else {
    console.info(payload);
  }
}

export function logInfo(message: string, context?: Record<string, unknown>) {
  record("info", message, context);
}

export function logWarn(message: string, context?: Record<string, unknown>) {
  record("warn", message, context);
}

export function logError(message: string, context?: Record<string, unknown>) {
  record("error", message, context);
}

export function getRecentLogs() {
  return [...logs].reverse();
}
