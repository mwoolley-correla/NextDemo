"use client";

import Breadcrumb from "@/components/molecules/Breadcrumb";
import debounce from "@/lib/debounce";
import { useEffect, useRef, useState } from "react";

const allTopics = [
  "app router",
  "server components",
  "client components",
  "useState",
  "useEffect",
  "useCallback",
  "useActionState",
  "server actions",
  "api routes",
  "zod validation",
  "sqlite persistence",
  "material ui",
  "telemetry",
  "logging",
  "dynamic routes",
];

export default function DebouncePage() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const updateQueryRef = useRef<(value: string) => void>(undefined);

  if (!updateQueryRef.current) {
    updateQueryRef.current = debounce((value: string) => {
      setDebouncedQuery(value);
    }, 400);
  }

  useEffect(() => {
    updateQueryRef.current?.(query);
  }, [query]);

  const results = allTopics.filter((topic) =>
    topic.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "React Hooks", href: "/hooks" },
          { label: "Debounce" },
        ]}
      />

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Debounce</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Debouncing delays work until the user stops typing. It is not a React hook itself, but it is a common pattern used alongside hooks to reduce unnecessary fetches and re-renders.
      </p>

      <div className="bg-gray-900 rounded-lg p-5 mb-8 overflow-x-auto">
        <pre className="text-sm text-gray-100">
{`function debounce(fn, delayMs) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delayMs);
  };
}`}
        </pre>
      </div>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Demo: Search with debounce
        </h2>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Type to search topics..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 space-y-1">
          <p>Immediate value: <strong className="text-gray-900 dark:text-white">{query || "(empty)"}</strong></p>
          <p>Debounced value: <strong className="text-blue-600 dark:text-blue-400">{debouncedQuery || "(empty)"}</strong></p>
        </div>

        <div className="mt-5 rounded-lg bg-gray-50 dark:bg-gray-900 p-4">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Matching topics</p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            {results.length > 0 ? (
              results.map((result) => <li key={result}>{result}</li>)
            ) : (
              <li>No matches</li>
            )}
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-5">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">When to use it</h3>
        <p className="text-sm text-blue-800 dark:text-blue-200">
          Use debounce for search boxes, autosave, filtering, and any input that would otherwise trigger expensive work on every keystroke.
        </p>
      </div>
    </div>
  );
}
