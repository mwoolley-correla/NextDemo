"use client";

import Breadcrumb from "@/components/molecules/Breadcrumb";
import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function UseEffectPage() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [mountTime] = useState(() => new Date().toLocaleTimeString());
  const [tick, setTick] = useState(0);

  // Effect 1: Fetch data when postId changes
  useEffect(() => {
    setLoading(true);
    setPost(null);

    const controller = new AbortController();

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data: Post) => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => {
        // Ignore AbortError from cleanup
      });

    // Cleanup: cancel in-flight request when postId changes or component unmounts
    return () => controller.abort();
  }, [postId]); // ← dependency array: re-run when postId changes

  // Effect 2: A timer with cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 1000);

    return () => clearInterval(interval); // cleanup: stop timer on unmount
  }, []); // ← empty array: run once on mount

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "React Hooks", href: "/hooks" },
          { label: "useEffect" },
        ]}
      />

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        <code className="text-blue-600 dark:text-blue-400">useEffect</code>
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">useEffect</code>{" "}
        runs side effects after React renders. The dependency array controls when it re-runs.
      </p>

      {/* Syntax */}
      <div className="bg-gray-900 rounded-lg p-5 mb-8 overflow-x-auto">
        <pre className="text-sm text-gray-100">
{`useEffect(() => {
  // side effect (fetch, subscribe, DOM manipulation)

  return () => {
    // cleanup — runs before next effect or on unmount
  };
}, [dep1, dep2]); // re-run when dep1 or dep2 changes`}
        </pre>
      </div>

      {/* When does it run? */}
      <div className="grid grid-cols-3 gap-4 mb-8 text-sm">
        {[
          { dep: "No array", when: "After every render" },
          { dep: "[]", when: "Once on mount" },
          { dep: "[value]", when: "On mount, and when value changes" },
        ].map((item) => (
          <div key={item.dep} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
            <code className="font-bold text-blue-600 dark:text-blue-400 block mb-1">{item.dep}</code>
            <span className="text-gray-600 dark:text-gray-400">{item.when}</span>
          </div>
        ))}
      </div>

      {/* Demo 1: Timer */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Demo 1: Timer (mount/unmount effect)</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Mounted at: <strong>{mountTime}</strong>. Seconds since mount: <strong className="text-blue-600 dark:text-blue-400">{tick}s</strong>
        </p>
        <pre className="bg-gray-900 rounded p-4 text-sm text-gray-100 overflow-x-auto">
{`useEffect(() => {
  const interval = setInterval(() => setTick(t => t + 1), 1000);
  return () => clearInterval(interval); // ← cleanup!
}, []); // empty array = run once on mount`}
        </pre>
      </div>

      {/* Demo 2: Fetch with cleanup */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Demo 2: Fetch Data (dependency effect)</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Re-runs every time <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">postId</code> changes. The previous request is cancelled before the new one starts.
        </p>
        <div className="flex gap-2 mb-4 flex-wrap">
          {[1, 2, 3, 4, 5].map((id) => (
            <button
              key={id}
              onClick={() => setPostId(id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                postId === id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Post {id}
            </button>
          ))}
        </div>
        {loading ? (
          <div className="text-gray-400 dark:text-gray-500 italic">Fetching post {postId}...</div>
        ) : (
          <div className="bg-gray-50 dark:bg-gray-900 rounded p-4 mb-4">
            <p className="font-medium text-gray-900 dark:text-white mb-1 capitalize">{post?.title}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{post?.body?.slice(0, 100)}...</p>
          </div>
        )}
        <pre className="bg-gray-900 rounded p-4 text-sm text-gray-100 overflow-x-auto">
{`useEffect(() => {
  setLoading(true);
  const controller = new AbortController();

  fetch(\`/api/posts/\${postId}\`, { signal: controller.signal })
    .then(res => res.json())
    .then(data => { setPost(data); setLoading(false); })
    .catch(() => {}); // AbortError is expected — ignore it

  return () => controller.abort(); // cancel if postId changes
}, [postId]);`}
        </pre>
      </div>

      {/* Pitfall */}
      <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-5">
        <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ Common Pitfalls</h3>
        <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
          <li>❌ <strong>Missing dependency</strong>: If you use a variable inside useEffect, put it in the array</li>
          <li>❌ <strong>Infinite loop</strong>: Updating state inside useEffect that depends on that state</li>
          <li>✅ <strong>Always clean up</strong>: timers, subscriptions, and fetches should be cancelled in the cleanup function</li>
        </ul>
      </div>
    </div>
  );
}
