import Breadcrumb from "@/components/molecules/Breadcrumb";
import Link from "next/link";

export default function RoutingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Routing" }]} />

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Stage 3: Routing & File-Based Navigation
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Next.js uses a file-based routing system. The folder structure inside{" "}
        <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">app/</code>{" "}
        automatically becomes your URL structure — no routing configuration needed.
      </p>

      {/* Core Concept Box */}
      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
          🗂 The Golden Rule of App Router
        </h2>
        <p className="text-blue-800 dark:text-blue-200 mb-3">
          A folder becomes a route segment. A <code className="bg-blue-100 dark:bg-blue-900 px-1.5 py-0.5 rounded text-sm">page.tsx</code>{" "}
          file inside the folder makes it publicly accessible.
        </p>
        <pre className="bg-blue-100 dark:bg-blue-900 rounded p-4 text-sm text-blue-900 dark:text-blue-100 overflow-x-auto">
{`app/
├── page.tsx           → /          (home)
├── about/
│   └── page.tsx       → /about
├── blog/
│   ├── page.tsx       → /blog
│   └── [slug]/
│       └── page.tsx   → /blog/my-post  (dynamic)
└── (marketing)/       → no URL segment! (route group)
    └── landing/
        └── page.tsx   → /landing`}
        </pre>
      </div>

      {/* Routing concepts */}
      <div className="grid gap-6 mb-8">
        <RoutingConcept
          title="Static Routes"
          url="/about"
          code="app/about/page.tsx"
          description="A folder with a page.tsx creates a static route. This is the most basic pattern."
        />
        <RoutingConcept
          title="Dynamic Routes"
          url="/blog/[slug]"
          code="app/blog/[slug]/page.tsx"
          description="Wrap a folder name in square brackets to create a dynamic segment. The value is passed as a param to the page."
          example={`// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return <h1>Post: {params.slug}</h1>
}`}
        />
        <RoutingConcept
          title="Route Groups"
          url="No URL change"
          code="app/(marketing)/landing/page.tsx → /landing"
          description="Wrap a folder in parentheses to group routes without adding a URL segment. Useful for shared layouts or organising sections of your app."
          variant="purple"
        />
        <RoutingConcept
          title="Layouts"
          url="Wraps all child routes"
          code="app/blog/layout.tsx"
          description="A layout.tsx wraps all routes in the same folder and nested folders. The layout persists across route changes — only the page content re-renders."
          example={`// app/blog/layout.tsx
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <BlogSidebar />   {/* stays mounted on every /blog/* page */}
      {children}        {/* page.tsx renders here */}
    </div>
  )
}`}
        />
        <RoutingConcept
          title="Not Found & Error Pages"
          url="/any-unknown-route"
          code="app/not-found.tsx / app/error.tsx"
          description="Special file conventions let you handle errors and missing routes gracefully without any extra configuration."
          variant="orange"
        />
      </div>

      {/* Navigation section */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          🧭 Client-Side Navigation with Link
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Always use the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">{`<Link>`}</code>{" "}
          component instead of an{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">{`<a>`}</code>{" "}
          tag for internal navigation. It prefetches the destination, enabling instant page transitions.
        </p>
        <pre className="bg-white dark:bg-gray-900 rounded p-4 text-sm text-gray-800 dark:text-gray-200 overflow-x-auto border border-gray-200 dark:border-gray-700">
{`import Link from "next/link"

// ✅ Use this — client-side navigation, prefetching, no full page reload
<Link href="/about">About</Link>

// ❌ Avoid this for internal links — causes a full page reload
<a href="/about">About</a>`}
        </pre>
      </div>

      {/* Routes in this demo */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          📍 Routes in This Demo
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Here&apos;s how this project&apos;s route structure maps to URLs:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 text-left">
                <th className="pb-2 pr-4 text-gray-500 dark:text-gray-400 font-medium">File Path</th>
                <th className="pb-2 pr-4 text-gray-500 dark:text-gray-400 font-medium">URL</th>
                <th className="pb-2 text-gray-500 dark:text-gray-400 font-medium">Stage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {[
                ["app/page.tsx", "/", "1 — Landing hub"],
                ["app/routing/page.tsx", "/routing", "2 — Routing (this page)"],
                ["app/server-vs-client/page.tsx", "/server-vs-client", "3 — Server vs Client"],
                ["app/hooks/page.tsx", "/hooks", "4 — React Hooks"],
                ["app/hooks/use-state/page.tsx", "/hooks/use-state", "4 — useState"],
                ["app/hooks/use-effect/page.tsx", "/hooks/use-effect", "4 — useEffect"],
                ["app/actions-vs-api/page.tsx", "/actions-vs-api", "5 — Actions vs API"],
                ["app/components-demo/page.tsx", "/components-demo", "6 — Components"],
                ["app/todos/page.tsx", "/todos", "7 — Database"],
                ["app/monitoring/page.tsx", "/monitoring", "8 — Logging"],
                ["app/mui-demo/page.tsx", "/mui-demo", "9 — MUI"],
                ["app/environment/page.tsx", "/environment", "12 — Environment Variables"],
                ["app/middleware/page.tsx", "/middleware", "13 — Middleware Concepts"],
                ["app/proxy-csp/page.tsx", "/proxy-csp", "14 — Proxy, Headers, and CSP"],
                ["app/api/demo/route.ts", "/api/demo", "5 — API endpoint"],
              ].map(([file, url, stage]) => (
                <tr key={url}>
                  <td className="py-2 pr-4 font-mono text-xs text-gray-600 dark:text-gray-400">{file}</td>
                  <td className="py-2 pr-4">
                    <Link href={url} className="text-blue-600 dark:text-blue-400 hover:underline">
                      {url}
                    </Link>
                  </td>
                  <td className="py-2 text-gray-500 dark:text-gray-400 text-xs">{stage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function RoutingConcept({
  title,
  url,
  code,
  description,
  example,
  variant = "green",
}: {
  title: string;
  url: string;
  code: string;
  description: string;
  example?: string;
  variant?: "green" | "purple" | "orange";
}) {
  const colors = {
    green: "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200",
    purple: "bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-200",
    orange: "bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800 text-orange-800 dark:text-orange-200",
  };

  return (
    <div className={`border rounded-lg p-5 ${colors[variant]}`}>
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded text-xs">{code}</code>
        <span className="text-xs opacity-70">→ {url}</span>
      </div>
      <p className="text-sm mb-3 opacity-80">{description}</p>
      {example && (
        <pre className="bg-white/60 dark:bg-black/30 rounded p-3 text-xs overflow-x-auto">
          {example}
        </pre>
      )}
    </div>
  );
}
