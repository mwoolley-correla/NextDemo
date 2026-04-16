type ServerExamplePanelProps = {
  generatedAt: string;
  secretAvailable: boolean;
};

export default async function ServerExamplePanel({
  generatedAt,
  secretAvailable,
}: ServerExamplePanelProps) {
  await new Promise((resolve) => setTimeout(resolve, 120));

  return (
    <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
            Server Component
          </p>
          <h2 className="text-xl font-semibold text-emerald-950 dark:text-emerald-50">
            Runs on the server before HTML is sent to the browser
          </h2>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
          No browser JavaScript required
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-white/80 p-4 dark:bg-black/20">
          <p className="mb-1 text-sm text-emerald-700 dark:text-emerald-300">Generated at</p>
          <p className="font-mono text-sm text-emerald-950 dark:text-emerald-50">{generatedAt}</p>
        </div>
        <div className="rounded-xl bg-white/80 p-4 dark:bg-black/20">
          <p className="mb-1 text-sm text-emerald-700 dark:text-emerald-300">Can read server-only env</p>
          <p className="font-medium text-emerald-950 dark:text-emerald-50">
            {secretAvailable ? "Yes" : "Yes, but no demo secret is configured"}
          </p>
        </div>
      </div>

      <ul className="mt-5 space-y-2 text-sm text-emerald-900 dark:text-emerald-100">
        <li>Can talk directly to databases and private APIs.</li>
        <li>Can safely access non-public environment variables.</li>
        <li>Cannot use browser APIs like window, localStorage, or document.</li>
        <li>Cannot use interactive React hooks like useState or useEffect.</li>
      </ul>
    </section>
  );
}
