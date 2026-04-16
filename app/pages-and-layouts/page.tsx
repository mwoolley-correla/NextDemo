import Breadcrumb from "@/components/molecules/Breadcrumb";
import Link from "next/link";

export default function PagesAndLayoutsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Pages & Layouts" }]} />

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Stage 2: Pages & Layouts Architecture
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Understanding how <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">layout.tsx</code> and{" "}
        <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">page.tsx</code> work together is essential
        for building organized Next.js applications.
      </p>

      {/* Core Concept Box */}
      <div className="bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
          🎁 Pages Live Inside Layouts
        </h2>
        <p className="text-purple-800 dark:text-purple-200 mb-3">
          A <code className="bg-purple-100 dark:bg-purple-900 px-1.5 py-0.5 rounded text-sm">layout.tsx</code> is a wrapper
          component that persists across all pages in its folder and subfolders. When you navigate between pages, the layout
          does <strong>not</strong> remount — only the page content changes.
        </p>
      </div>

      {/* File Structure Visualization */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          📁 File Structure Example
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Here's how this project is organized:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-950 rounded p-4 text-sm text-gray-800 dark:text-gray-200 overflow-x-auto border border-gray-300 dark:border-gray-700 mb-4">
{`app/
├── layout.tsx                    ← Root layout (wraps EVERYTHING)
├── page.tsx                      ← Home page renders inside root layout
│
├── hooks/
│   ├── layout.tsx                ← Wraps all /hooks/* pages
│   ├── page.tsx                  ← /hooks
│   ├── use-state/
│   │   └── page.tsx              ← /hooks/use-state
│   ├── use-effect/
│   │   └── page.tsx              ← /hooks/use-effect
│   └── use-callback/
│       └── page.tsx              ← /hooks/use-callback
│
├── todos/
│   ├── layout.tsx                ← Wraps all /todos/* pages
│   └── page.tsx                  ← /todos
│
└── pages-and-layouts/
    └── page.tsx                  ← You are here! /pages-and-layouts`}
        </pre>
      </section>

      {/* Component Tree Visualization */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          🏗 Component Nesting When You Visit a Page
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          When you visit <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">/hooks/use-state</code>, Next.js builds this component tree:
        </p>
        <div className="bg-gray-50 dark:bg-gray-950 rounded p-4 border border-gray-200 dark:border-gray-800 font-mono text-sm mb-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400">📦 RootLayout</span>
            <span className="text-gray-400">app/layout.tsx</span>
          </div>
          <div className="ml-6 mb-2 flex items-center gap-2">
            <span className="text-green-600 dark:text-green-400">📦 HooksLayout</span>
            <span className="text-gray-400">app/hooks/layout.tsx</span>
          </div>
          <div className="ml-12 mb-2 flex items-center gap-2">
            <span className="text-orange-600 dark:text-orange-400">📄 UseStatePage</span>
            <span className="text-gray-400">app/hooks/use-state/page.tsx</span>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            ↑ These nest inside each other. Layouts stay mounted when navigating between sibling pages.
          </p>
        </div>
      </section>

      {/* Root vs Segment Layouts */}
      <section className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            🌍 Root Layout
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>📍 <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">app/layout.tsx</code></li>
            <li>✅ Must include <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;html&gt;</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;body&gt;</code></li>
            <li>✅ One per application</li>
            <li>✅ Wraps <strong>entire app</strong></li>
            <li>✅ Best for: navigation, providers, themes</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            📂 Segment Layout
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>📍 <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">app/section/layout.tsx</code></li>
            <li>✅ No HTML/body tags</li>
            <li>✅ Multiple allowed</li>
            <li>✅ Wraps <strong>pages in folder</strong></li>
            <li>✅ Best for: sidebars, tabs, local context</li>
          </ul>
        </div>
      </section>

      {/* Key Behaviors */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          ⚡ Key Behaviors
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Persistence</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              When navigating between <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">/hooks/use-state</code> and{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">/hooks/use-effect</code>, the layout doesn't remount. Only the page changes.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">State Preservation</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              If a layout has state (like an open sidebar), it persists across page changes within that segment.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Nesting</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Each level can have its own layout. Root layout wraps segment layouts, which wrap pages.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Performance</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Only page content updates during navigation. Layout structure remains stable, improving perceived performance.
            </p>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          💻 Real Code Example
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This is the actual root layout from this project:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-950 rounded p-4 text-xs text-gray-800 dark:text-gray-200 overflow-x-auto border border-gray-300 dark:border-gray-700">
{`// app/layout.tsx
import AppProviders from "@/components/providers/AppProviders";
import SiteNav from "@/components/organisms/SiteNav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <AppProviders>
          {/* This nav persists across ALL pages */}
          <SiteNav />
          
          {/* Page content goes here */}
          <main className="flex-1">{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}`}
        </pre>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
          The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;SiteNav /&gt;</code> component stays on screen for every page in the app because it's in the root layout.
        </p>
      </section>

      {/* Common Patterns */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          🎯 Common Layout Patterns
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-950 rounded">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pattern 1: App Shell</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Root layout contains header, navigation, and footer. Pages fill the middle.
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-950 rounded">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pattern 2: Sidebar</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Segment layout adds a persistent sidebar. Useful for documentation, dashboards, or settings sections.
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-950 rounded">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pattern 3: Tabs</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Layout holds tab state. Navigating between tabs doesn't reset scroll or selected tab.
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-950 rounded">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pattern 4: Scoped Providers</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Different sections use different contexts. Root layout might have auth provider, dashboard layout has dashboard provider.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="rounded-2xl border border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950 p-6 mb-8">
        <h3 className="text-xl font-semibold text-emerald-900 dark:text-emerald-100 mb-4">
          ✨ Key Takeaways
        </h3>
        <ul className="space-y-2 text-emerald-800 dark:text-emerald-200 text-sm">
          <li>✅ <strong>Pages</strong> are content, <strong>Layouts</strong> are wrappers</li>
          <li>✅ Layouts <strong>persist</strong> when navigating between pages</li>
          <li>✅ Each segment can have its own layout</li>
          <li>✅ Nesting creates a component tree</li>
          <li>✅ Root layout must include HTML/body tags</li>
          <li>✅ Use layouts for shared UI and state</li>
        </ul>
      </section>

      {/* Related Links */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          📚 Related Topics
        </h3>
        <div className="grid gap-3">
          <Link
            href="/setup"
            className="p-3 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white font-medium"
          >
            ← Stage 1: Setup & Housekeeping
          </Link>
          <Link
            href="/routing"
            className="p-3 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white font-medium"
          >
            → Stage 3: Routing & File-Based Navigation
          </Link>
        </div>
      </section>
    </div>
  );
}
