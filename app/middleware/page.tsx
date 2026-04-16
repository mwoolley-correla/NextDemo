import Breadcrumb from "@/components/molecules/Breadcrumb";

const middlewareJobs = [
  {
    job: "Request filtering",
    detail: "Decide early whether a request should continue, redirect, or rewrite.",
  },
  {
    job: "Header management",
    detail: "Attach common security and observability headers once for all routes.",
  },
  {
    job: "Auth and personalization",
    detail: "Read cookies/headers and route users to the right experience.",
  },
  {
    job: "Bot/rate controls",
    detail: "Inspect request metadata and apply light traffic controls.",
  },
];

const implementationRows = [
  {
    topic: "File location",
    value: "proxy.ts at the project root",
  },
  {
    topic: "Runtime point",
    value: "Runs before route handlers and page rendering",
  },
  {
    topic: "Current behavior in this repo",
    value: "Generates per-request nonce, builds CSP, and sets security headers",
  },
  {
    topic: "Scope",
    value: "Controlled with config.matcher to exclude static/image internals",
  },
  {
    topic: "Output",
    value: "Returns NextResponse.next(), redirect(), or rewrite()",
  },
];

export default function MiddlewareStagePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Middleware Concepts" }]} />

      <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
        Stage 13: Middleware in Next.js
      </h1>

      <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
        Middleware is request-time logic that runs before your route code. In this project, that layer is implemented through proxy.ts, which is the modern file convention for this concern.
      </p>

      <section className="mb-8 rounded-2xl border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-900 dark:bg-cyan-950">
        <h2 className="mb-3 text-xl font-semibold text-cyan-950 dark:text-cyan-50">
          What Middleware Is For
        </h2>
        <ul className="space-y-2 text-sm text-cyan-900 dark:text-cyan-100">
          {middlewareJobs.map((item) => (
            <li key={item.job} className="rounded-xl bg-white/70 px-4 py-3 dark:bg-black/20">
              <p className="font-medium">{item.job}</p>
              <p className="mt-1">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          How It Is Implemented Here
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="pb-3 pr-4 font-medium text-gray-500 dark:text-gray-400">Topic</th>
                <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Implementation</th>
              </tr>
            </thead>
            <tbody>
              {implementationRows.map((row) => (
                <tr key={row.topic} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                  <td className="py-3 pr-4 text-gray-700 dark:text-gray-300">{row.topic}</td>
                  <td className="py-3 font-mono text-gray-700 dark:text-gray-300">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Minimal Pattern
        </h2>
        <pre className="overflow-x-auto rounded-xl bg-gray-50 p-4 text-xs text-gray-800 dark:bg-gray-950 dark:text-gray-200">
{`import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("X-Example", "middleware-layer");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};`}
        </pre>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
        <h2 className="mb-3 text-xl font-semibold text-amber-950 dark:text-amber-50">
          Practical Guidance
        </h2>
        <p className="text-sm leading-6 text-amber-900 dark:text-amber-100">
          Keep middleware logic fast and focused. Heavy business logic belongs in route handlers or server actions; middleware should stay lightweight and cross-cutting.
        </p>
      </section>
    </div>
  );
}
