"use client";

import Breadcrumb from "@/components/molecules/Breadcrumb";
import { useActionState } from "react";

type FormState = {
  message: string;
  errors: Record<string, string>;
  success: boolean;
} | null;

async function submitContact(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Simulate network delay
  await new Promise((r) => setTimeout(r, 800));

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const errors: Record<string, string> = {};

  if (!name || name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }
  if (!email || !email.includes("@")) {
    errors.email = "Please enter a valid email address";
  }
  if (!message || message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  if (Object.keys(errors).length > 0) {
    return { message: "", errors, success: false };
  }

  return {
    message: `Thanks ${name}! We'll be in touch at ${email}.`,
    errors: {},
    success: true,
  };
}

export default function UseActionStatePage() {
  const [state, formAction, isPending] = useActionState(submitContact, null);

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "React Hooks", href: "/hooks" },
          { label: "useActionState" },
        ]}
      />

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        <code className="text-blue-600 dark:text-blue-400">useActionState</code>
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">useActionState</code>{" "}
        manages the state of a form action — including pending state, returned data, and errors — all in one hook.
        It was introduced in React 19.
      </p>

      {/* Syntax */}
      <div className="bg-gray-900 rounded-lg p-5 mb-8 overflow-x-auto">
        <pre className="text-sm text-gray-100">
{`const [state, formAction, isPending] = useActionState(
  actionFn,    // async function(prevState, formData) => newState
  initialState // value of state before first submission
);

// Use formAction as the form's action prop:
<form action={formAction}>...</form>`}
        </pre>
      </div>

      {/* Demo Form */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Demo: Contact Form</h2>

        {state?.success ? (
          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-5 text-green-800 dark:text-green-200">
            <p className="font-medium mb-1">✅ Submitted successfully!</p>
            <p className="text-sm">{state.message}</p>
          </div>
        ) : (
          <form action={formAction} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                name="name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Jane Smith"
              />
              {state?.errors?.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{state.errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="jane@example.com"
              />
              {state?.errors?.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{state.errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Your message (at least 10 characters)..."
              />
              {state?.errors?.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{state.errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isPending ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>

      {/* Code */}
      <pre className="bg-gray-900 rounded-lg p-5 text-sm text-gray-100 overflow-x-auto mb-8">
{`"use client";
import { useActionState } from "react";

// The action receives the previous state and the form's data
async function submitContact(prevState, formData) {
  const name = formData.get("name");
  // ... validate, call server, etc.
  return { success: true, message: \`Thanks \${name}!\` };
}

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    null // initial state
  );

  return (
    <form action={formAction}>
      <input name="name" />
      {state?.errors?.name && <p>{state.errors.name}</p>}
      <button disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}`}
      </pre>

      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-5">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Key Differences from useState</h3>
        <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
          <li>✅ Built for <strong>forms</strong> — works with HTML form submissions natively</li>
          <li>✅ <strong>isPending</strong> is built in — no need to manage a separate loading state</li>
          <li>✅ Works with <strong>server actions</strong> — action can run on the server (see Stage 5)</li>
          <li>✅ Works <strong>without JavaScript</strong> — form still submits if JS hasn&apos;t loaded</li>
        </ul>
      </div>
    </div>
  );
}
