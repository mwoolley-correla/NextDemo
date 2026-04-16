"use client";

import Breadcrumb from "@/components/molecules/Breadcrumb";
import { useState, useCallback, memo } from "react";

let renderCount = 0;

const ExpensiveChild = memo(function ExpensiveChild({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  renderCount++;
  const thisRender = renderCount;

  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg font-medium hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
    >
      {label} (render #{thisRender})
    </button>
  );
});

export default function UseCallbackPage() {
  const [count, setCount] = useState(0);
  const [unrelated, setUnrelated] = useState(0);

  // ✅ Memoized — same function reference on every render
  const handleMemoized = useCallback(() => {
    setCount((c) => c + 1);
  }, []); // no deps → created once

  // ❌ Not memoized — new function reference on every render
  const handleNotMemoized = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "React Hooks", href: "/hooks" },
          { label: "useCallback" },
        ]}
      />

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        <code className="text-blue-600 dark:text-blue-400">useCallback</code>
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">useCallback</code>{" "}
        memoizes a function so it keeps the same reference between renders. This prevents child components wrapped in{" "}
        <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">React.memo</code> from re-rendering unnecessarily.
      </p>

      {/* Syntax */}
      <div className="bg-gray-900 rounded-lg p-5 mb-8 overflow-x-auto">
        <pre className="text-sm text-gray-100">
{`const memoizedFn = useCallback(() => {
  doSomething(a, b);
}, [a, b]); // re-create only when a or b changes`}
        </pre>
      </div>

      {/* Why it matters */}
      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-5 mb-8">
        <h2 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Why does it matter?</h2>
        <p className="text-sm text-blue-800 dark:text-blue-200">
          In JavaScript, <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">() =&gt; {"{}"}</code> creates a <strong>new function object</strong> on every call.
          When you pass a function as a prop to a child component, the child sees a new prop on every render — even if nothing changed — and re-renders.
          <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded ml-1">useCallback</code> prevents this by returning the same function reference.
        </p>
      </div>

      {/* Demo */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Demo: Watch the render count</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Click &quot;Trigger unrelated re-render&quot; and watch which child components re-render.
          The <strong>memoized button</strong> should stay the same render count; the <strong>non-memoized button</strong> will increment.
        </p>

        <div className="flex flex-wrap gap-3 mb-4">
          <ExpensiveChild onClick={handleMemoized} label="✅ useCallback button" />
          <ExpensiveChild onClick={handleNotMemoized} label="❌ No useCallback button" />
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Count: <strong className="text-gray-900 dark:text-white">{count}</strong>
        </p>

        <button
          onClick={() => setUnrelated((u) => u + 1)}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          Trigger unrelated re-render (count: {unrelated})
        </button>
      </div>

      <pre className="bg-gray-900 rounded-lg p-5 text-sm text-gray-100 overflow-x-auto mb-8">
{`// ✅ Memoized — stable reference, child won't re-render
const handleMemoized = useCallback(() => {
  setCount(c => c + 1);
}, []);

// ❌ Not memoized — new function every render, child WILL re-render
const handleNotMemoized = () => {
  setCount(c => c + 1);
};

// Child wrapped in React.memo — skips render if props haven't changed
const ExpensiveChild = memo(function ExpensiveChild({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
});`}
      </pre>

      <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-5">
        <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Don&apos;t overuse it</h3>
        <p className="text-sm text-amber-800 dark:text-amber-200">
          <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">useCallback</code> itself has a cost.
          Only use it when you have a <strong>measurable performance problem</strong>, or when passing functions to{" "}
          <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">memo()</code>-wrapped children.
          Premature optimization makes code harder to read for no benefit.
        </p>
      </div>
    </div>
  );
}
