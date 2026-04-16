import Breadcrumb from "@/components/molecules/Breadcrumb";

const headerRows = [
  {
    header: "Content-Security-Policy / Content-Security-Policy-Report-Only",
    reason: "Limits script/style/resource origins and reduces XSS impact.",
  },
  {
    header: "X-Content-Type-Options: nosniff",
    reason: "Prevents browsers from MIME sniffing unexpected file types.",
  },
  {
    header: "Referrer-Policy: strict-origin-when-cross-origin",
    reason: "Restricts referrer data sent to other origins.",
  },
  {
    header: "X-Frame-Options: DENY",
    reason: "Blocks clickjacking through iframes.",
  },
  {
    header: "Permissions-Policy",
    reason: "Disables unused browser features like camera and microphone.",
  },
];

const relatedTopics = [
  "CSP nonce strategy for scripts",
  "Report-only rollout before enforcement",
  "Security headers managed in one place",
  "Matcher scoping to avoid static assets",
  "Incremental CSP hardening for third-party scripts",
];

export default function ProxyCspPage() {
  const mode = process.env.CSP_ENFORCE === "true" ? "Enforced" : "Report-Only";

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Proxy, Headers, and CSP" }]} />

      <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
        Stage 14: Proxy, Headers, and CSP
      </h1>

      <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
        This stage introduces the proxy.ts file as a central edge layer for request handling, security headers, and Content Security Policy management.
      </p>

      <section className="mb-8 rounded-2xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-900 dark:bg-indigo-950">
        <h2 className="mb-3 text-xl font-semibold text-indigo-950 dark:text-indigo-50">
          Current CSP Mode
        </h2>
        <p className="text-sm leading-6 text-indigo-900 dark:text-indigo-100">
          CSP mode is currently <strong>{mode}</strong>. Toggle by setting CSP_ENFORCE=true in .env.local.
        </p>
      </section>

      <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          What proxy.ts Centralizes
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="pb-3 pr-4 font-medium text-gray-500 dark:text-gray-400">Header</th>
                <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {headerRows.map((row) => (
                <tr key={row.header} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                  <td className="py-3 pr-4 font-mono text-gray-700 dark:text-gray-300">{row.header}</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400">{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Associated Topics
        </h2>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          {relatedTopics.map((topic) => (
            <li key={topic} className="rounded-xl bg-gray-50 px-4 py-3 dark:bg-gray-950">
              {topic}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
        <h2 className="mb-3 text-xl font-semibold text-amber-950 dark:text-amber-50">
          Practical Workflow
        </h2>
        <p className="text-sm leading-6 text-amber-900 dark:text-amber-100">
          Start in report-only mode, watch browser console and violation reports, then tighten directives and switch to enforcement when noise is resolved.
        </p>
      </section>
    </div>
  );
}
