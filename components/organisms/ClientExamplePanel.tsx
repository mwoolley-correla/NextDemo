"use client";

import { useEffect, useState } from "react";

export default function ClientExamplePanel() {
  const [count, setCount] = useState(0);
  const [userAgent, setUserAgent] = useState("Loading browser info...");

  useEffect(() => {
    setUserAgent(window.navigator.userAgent);
  }, []);

  return (
    <section className="rounded-2xl border border-sky-200 bg-sky-50 p-6 dark:border-sky-900 dark:bg-sky-950">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
            Client Component
          </p>
          <h2 className="text-xl font-semibold text-sky-950 dark:text-sky-50">
            Runs in the browser after hydration
          </h2>
        </div>
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800 dark:bg-sky-900 dark:text-sky-200">
          Interactive and browser-aware
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-white/80 p-4 dark:bg-black/20">
          <p className="mb-2 text-sm text-sky-700 dark:text-sky-300">Browser API example</p>
          <p className="line-clamp-3 text-sm text-sky-950 dark:text-sky-50">{userAgent}</p>
        </div>
        <div className="rounded-xl bg-white/80 p-4 dark:bg-black/20">
          <p className="mb-2 text-sm text-sky-700 dark:text-sky-300">Interactive state</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCount((value) => value + 1)}
              className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-700"
            >
              Increment
            </button>
            <span className="text-lg font-semibold text-sky-950 dark:text-sky-50">{count}</span>
          </div>
        </div>
      </div>

      <ul className="mt-5 space-y-2 text-sm text-sky-900 dark:text-sky-100">
        <li>Can use hooks like useState and useEffect.</li>
        <li>Can handle clicks, typing, and other browser events.</li>
        <li>Can access window, document, localStorage, and navigator.</li>
        <li>Should not read secrets or connect directly to your database.</li>
      </ul>
    </section>
  );
}
