import Breadcrumb from "@/components/molecules/Breadcrumb";
import { getRecentLogs } from "@/lib/logging";
import { getRecentTelemetry } from "@/lib/telemetry";

export const dynamic = "force-dynamic";

export default function MonitoringPage() {
  const logs = getRecentLogs();
  const telemetry = getRecentTelemetry();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Logging & Telemetry" }]} />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Stage 10: Logging & Telemetry
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        This dashboard shows recent in-memory log entries and timing samples produced by the app's server actions and API routes.
      </p>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <p className="text-sm text-gray-500 dark:text-gray-400">Recent logs</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{logs.length}</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <p className="text-sm text-gray-500 dark:text-gray-400">Telemetry samples</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{telemetry.length}</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Logs</h2>
          {logs.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No logs yet. Submit a form on the Actions vs API or Todos pages, then refresh this screen.
            </p>
          ) : (
            <ul className="space-y-3">
              {logs.map((entry) => (
                <li key={entry.id} className="rounded-xl bg-gray-50 p-4 text-sm dark:bg-gray-950">
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <span className="font-medium text-gray-900 dark:text-white">{entry.message}</span>
                    <span className="text-xs uppercase text-gray-500 dark:text-gray-400">{entry.level}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{entry.timestamp}</p>
                  {entry.context ? (
                    <pre className="mt-2 overflow-x-auto rounded bg-white p-3 text-xs text-gray-700 dark:bg-black/20 dark:text-gray-300">
                      {JSON.stringify(entry.context, null, 2)}
                    </pre>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Telemetry</h2>
          {telemetry.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No timing data yet. Trigger a few server actions first.
            </p>
          ) : (
            <ul className="space-y-3">
              {telemetry.map((entry) => (
                <li key={entry.id} className="rounded-xl bg-gray-50 p-4 text-sm dark:bg-gray-950">
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <span className="font-medium text-gray-900 dark:text-white">{entry.name}</span>
                    <span className="text-xs text-blue-600 dark:text-blue-400">{entry.durationMs} ms</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{entry.timestamp}</p>
                  {entry.metadata ? (
                    <pre className="mt-2 overflow-x-auto rounded bg-white p-3 text-xs text-gray-700 dark:bg-black/20 dark:text-gray-300">
                      {JSON.stringify(entry.metadata, null, 2)}
                    </pre>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
