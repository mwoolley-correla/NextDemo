import ClientExamplePanel from "@/components/organisms/ClientExamplePanel";
import Breadcrumb from "@/components/molecules/Breadcrumb";
import ServerExamplePanel from "@/components/organisms/ServerExamplePanel";

export const dynamic = "force-dynamic";

const comparisonRows = [
  {
    capability: "Read private environment variables",
    server: "Yes",
    client: "No",
  },
  {
    capability: "Use useState / useEffect",
    server: "No",
    client: "Yes",
  },
  {
    capability: "Access window / document / navigator",
    server: "No",
    client: "Yes",
  },
  {
    capability: "Call a database directly",
    server: "Yes",
    client: "No",
  },
  {
    capability: "Respond to button clicks",
    server: "No",
    client: "Yes",
  },
  {
    capability: "Reduce browser JavaScript",
    server: "Yes",
    client: "No",
  },
];

export default function ServerVsClientPage() {
  const generatedAt = new Date().toISOString();
  const secretAvailable = Boolean(process.env.DEMO_SECRET);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Server vs Client" }]} />

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Stage 3: Server vs Client Components
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        In the App Router, components are server components by default. You only move a component to the client when it needs interactivity, browser APIs, or client-only hooks.
      </p>

      <div className="grid gap-6 mb-8 lg:grid-cols-2">
        <ServerExamplePanel generatedAt={generatedAt} secretAvailable={secretAvailable} />
        <ClientExamplePanel />
      </div>

      <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Quick Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="pb-3 pr-4 font-medium text-gray-500 dark:text-gray-400">Capability</th>
                <th className="pb-3 pr-4 font-medium text-gray-500 dark:text-gray-400">Server</th>
                <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Client</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.capability} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                  <td className="py-3 pr-4 text-gray-700 dark:text-gray-300">{row.capability}</td>
                  <td className="py-3 pr-4 text-emerald-700 dark:text-emerald-300">{row.server}</td>
                  <td className="py-3 text-sky-700 dark:text-sky-300">{row.client}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
        <h2 className="mb-3 text-xl font-semibold text-amber-950 dark:text-amber-50">
          Practical Rule
        </h2>
        <p className="text-sm leading-6 text-amber-900 dark:text-amber-100">
          Start with server components by default. Move a component to the client only if it needs browser APIs, event handlers, or hooks like useState and useEffect. That keeps your app simpler and ships less JavaScript.
        </p>
      </section>
    </div>
  );
}
