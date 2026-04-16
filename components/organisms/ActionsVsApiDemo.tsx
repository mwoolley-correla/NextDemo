"use client";

import { submitDemoViaServerAction } from "@/lib/actions/demo";
import type { DemoResult } from "@/lib/demo-submission";
import { useActionState, useState } from "react";

const initialState: DemoResult = {
  success: false,
  source: "server-action",
  message: "Submit either form to compare the response flow.",
  errors: {},
  receivedAt: "",
};

export default function ActionsVsApiDemo() {
  const [serverState, serverAction, isServerPending] = useActionState(
    submitDemoViaServerAction,
    initialState
  );
  const [apiState, setApiState] = useState<DemoResult>({
    ...initialState,
    source: "api",
  });
  const [isApiPending, setIsApiPending] = useState(false);

  async function handleApiSubmit(formData: FormData) {
    setIsApiPending(true);

    const payload = {
      name: String(formData.get("name") ?? ""),
      topic: String(formData.get("topic") ?? ""),
    };

    const response = await fetch("/api/demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = (await response.json()) as DemoResult;
    setApiState(result);
    setIsApiPending(false);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
        <div className="mb-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
            Server Action
          </p>
          <h2 className="text-xl font-semibold text-emerald-950 dark:text-emerald-50">
            Form calls server code directly
          </h2>
        </div>
        <p className="mb-4 text-sm text-emerald-900 dark:text-emerald-100">
          Best for app-internal form submissions where you do not need a public HTTP API contract.
        </p>
        <form action={serverAction} className="space-y-4">
          <Field label="Name" name="name" error={serverState.errors.name} />
          <Field label="Topic" name="topic" error={serverState.errors.topic} />
          <button
            type="submit"
            disabled={isServerPending}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isServerPending ? "Submitting..." : "Submit with server action"}
          </button>
        </form>
        <ResultCard state={serverState} />
      </section>

      <section className="rounded-2xl border border-sky-200 bg-sky-50 p-6 dark:border-sky-900 dark:bg-sky-950">
        <div className="mb-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
            API Endpoint
          </p>
          <h2 className="text-xl font-semibold text-sky-950 dark:text-sky-50">
            Form submits over HTTP with fetch
          </h2>
        </div>
        <p className="mb-4 text-sm text-sky-900 dark:text-sky-100">
          Best when other clients may need the same endpoint, or when you want an explicit request and response boundary.
        </p>
        <form
          action={handleApiSubmit}
          className="space-y-4"
        >
          <Field label="Name" name="name" error={apiState.errors.name} />
          <Field label="Topic" name="topic" error={apiState.errors.topic} />
          <button
            type="submit"
            disabled={isApiPending}
            className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isApiPending ? "Submitting..." : "Submit with API route"}
          </button>
        </form>
        <ResultCard state={apiState} />
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  error,
}: {
  label: string;
  name: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
        {label}
      </label>
      <input
        name={name}
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
      />
      {error ? <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p> : null}
    </div>
  );
}

function ResultCard({ state }: { state: DemoResult }) {
  return (
    <div className="mt-5 rounded-xl bg-white/80 p-4 text-sm dark:bg-black/20">
      <p className="font-medium text-gray-900 dark:text-white">{state.message}</p>
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        Source: {state.source} {state.receivedAt ? `• ${state.receivedAt}` : ""}
      </p>
    </div>
  );
}
