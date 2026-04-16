"use client";

export default function EnvironmentClientPanel() {
  const publicStageName = process.env.NEXT_PUBLIC_DEMO_STAGE_NAME ?? "(not set)";
  const leakedSecret = process.env.DEMO_SECRET;

  return (
    <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950">
      <h2 className="mb-3 text-xl font-semibold text-blue-950 dark:text-blue-50">
        Client Component View
      </h2>
      <p className="mb-4 text-sm leading-6 text-blue-900 dark:text-blue-100">
        In browser code, only variables prefixed with NEXT_PUBLIC_ are available.
      </p>

      <div className="space-y-3 text-sm">
        <div className="rounded-xl bg-white/70 p-3 dark:bg-black/20">
          <p className="font-medium text-blue-950 dark:text-blue-50">NEXT_PUBLIC_DEMO_STAGE_NAME</p>
          <p className="mt-1 text-blue-900 dark:text-blue-100">{publicStageName}</p>
        </div>

        <div className="rounded-xl bg-white/70 p-3 dark:bg-black/20">
          <p className="font-medium text-blue-950 dark:text-blue-50">DEMO_SECRET</p>
          <p className="mt-1 text-blue-900 dark:text-blue-100">
            {typeof leakedSecret === "string" ? leakedSecret : "undefined in client bundle"}
          </p>
        </div>
      </div>
    </section>
  );
}
