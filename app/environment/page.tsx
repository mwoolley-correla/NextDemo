import Breadcrumb from "@/components/molecules/Breadcrumb";
import EnvironmentClientPanel from "@/components/organisms/EnvironmentClientPanel";

export const dynamic = "force-dynamic";

const envFileRows = [
  {
    file: ".env",
    purpose: "Shared defaults for local development. Usually committed only if it contains safe defaults.",
  },
  {
    file: ".env.local",
    purpose: "Machine-specific values and secrets. This should stay uncommitted.",
  },
  {
    file: ".env.production",
    purpose: "Production-specific values when needed during build/runtime.",
  },
];

const consumeRows = [
  {
    location: "Server components, route handlers, server actions",
    access: "process.env.MY_SECRET",
    notes: "Safe place for private credentials and API keys.",
  },
  {
    location: "Client components",
    access: "process.env.NEXT_PUBLIC_*",
    notes: "Exposed to the browser bundle. Never put secrets here.",
  },
];

export default function EnvironmentPage() {
  const demoSecret = process.env.DEMO_SECRET;
  const publicStageName = process.env.NEXT_PUBLIC_DEMO_STAGE_NAME;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Environment Variables" }]} />

      <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
        Stage 12: Environment Variables
      </h1>

      <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
        This stage covers where .env files belong, how Next.js loads them, and how values are consumed safely on server and client.
      </p>

      <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          .env Files At A Glance
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="pb-3 pr-4 font-medium text-gray-500 dark:text-gray-400">File</th>
                <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {envFileRows.map((row) => (
                <tr key={row.file} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                  <td className="py-3 pr-4 font-mono text-gray-700 dark:text-gray-300">{row.file}</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Where Values Are Consumed
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="pb-3 pr-4 font-medium text-gray-500 dark:text-gray-400">Location</th>
                <th className="pb-3 pr-4 font-medium text-gray-500 dark:text-gray-400">Access Pattern</th>
                <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Notes</th>
              </tr>
            </thead>
            <tbody>
              {consumeRows.map((row) => (
                <tr key={row.location} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                  <td className="py-3 pr-4 text-gray-700 dark:text-gray-300">{row.location}</td>
                  <td className="py-3 pr-4 font-mono text-gray-700 dark:text-gray-300">{row.access}</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
          <h2 className="mb-3 text-xl font-semibold text-emerald-950 dark:text-emerald-50">
            Server Component View
          </h2>
          <p className="mb-3 text-sm leading-6 text-emerald-900 dark:text-emerald-100">
            This block runs on the server, so it can read private variables directly.
          </p>
          <div className="space-y-3 text-sm">
            <div className="rounded-xl bg-white/70 p-3 dark:bg-black/20">
              <p className="font-medium text-emerald-950 dark:text-emerald-50">DEMO_SECRET</p>
              <p className="mt-1 text-emerald-900 dark:text-emerald-100">
                {demoSecret ?? "(not set)"}
              </p>
            </div>
            <div className="rounded-xl bg-white/70 p-3 dark:bg-black/20">
              <p className="font-medium text-emerald-950 dark:text-emerald-50">NEXT_PUBLIC_DEMO_STAGE_NAME</p>
              <p className="mt-1 text-emerald-900 dark:text-emerald-100">
                {publicStageName ?? "(not set)"}
              </p>
            </div>
          </div>
        </section>

        <EnvironmentClientPanel />
      </div>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
        <h2 className="mb-3 text-xl font-semibold text-amber-950 dark:text-amber-50">
          Setup Tip
        </h2>
        <p className="text-sm leading-6 text-amber-900 dark:text-amber-100">
          Create a .env.local file at the project root and add values like DEMO_SECRET=hello and NEXT_PUBLIC_DEMO_STAGE_NAME=Environment Stage. Restart the dev server after changing env files.
        </p>
      </section>
    </div>
  );
}
