"use client";

import Breadcrumb from "@/components/molecules/Breadcrumb";
import { useState } from "react";

export default function UseStatePage() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello, World!");

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "React Hooks", href: "/hooks" },
          { label: "useState" },
        ]}
      />

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        <code className="text-blue-600 dark:text-blue-400">useState</code>
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">useState</code>{" "}
        declares a state variable. When the state changes, React re-renders the component with the new value.
      </p>

      {/* Syntax Box */}
      <div className="bg-gray-900 rounded-lg p-5 mb-8 overflow-x-auto">
        <pre className="text-sm text-gray-100">
{`const [value, setValue] = useState(initialValue)
//     ↑             ↑
//   current      setter function
//   value        (triggers re-render)`}
        </pre>
      </div>

      {/* Demo 1: Counter */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Demo 1: Counter</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Clicking the buttons updates <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">count</code> and React automatically re-renders this component.
        </p>

        <div className="flex items-center gap-4 mb-5">
          <button
            onClick={() => setCount((c) => c - 1)}
            className="px-4 py-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg font-medium hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
          >
            − Decrement
          </button>
          <span className="text-3xl font-bold text-gray-900 dark:text-white w-12 text-center">
            {count}
          </span>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg font-medium hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
          >
            + Increment
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
        </div>

        <pre className="bg-gray-900 rounded p-4 text-sm text-gray-100 overflow-x-auto">
{`"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(c => c - 1)}>−</button>
      <span>{count}</span>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
}`}
        </pre>
      </div>

      {/* Demo 2: Text Input */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Demo 2: Controlled Input</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          The input&apos;s value is controlled by React state, not the DOM. React is the &quot;single source of truth&quot;.
        </p>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full max-w-sm px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
          Current value: <strong className="text-gray-900 dark:text-white">&quot;{text}&quot;</strong>{" "}
          — Length: <strong className="text-gray-900 dark:text-white">{text.length}</strong>
        </p>

        <pre className="bg-gray-900 rounded p-4 text-sm text-gray-100 overflow-x-auto">
{`const [text, setText] = useState("Hello, World!");

<input
  value={text}                          // controlled by state
  onChange={(e) => setText(e.target.value)} // update state on change
/>`}
        </pre>
      </div>

      {/* Key Rules */}
      <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-5">
        <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">⚠️ Rules of Hooks</h3>
        <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
          <li>✅ <strong>Only call hooks at the top level</strong> — never inside loops, conditions, or nested functions</li>
          <li>✅ <strong>Only call hooks from React function components</strong> or custom hooks</li>
          <li>✅ <strong>Requires <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">&quot;use client&quot;</code></strong> — useState only works in Client Components</li>
          <li>❌ <strong>Don&apos;t mutate state directly</strong> — always use the setter function</li>
        </ul>
      </div>
    </div>
  );
}
