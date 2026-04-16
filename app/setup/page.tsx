import Breadcrumb from "@/components/molecules/Breadcrumb";

const dependencies = [
  "Next.js 16.2.4 with the App Router",
  "React 19.2.4 and React DOM 19.2.4",
  "TypeScript 5 with strict mode enabled",
  "Tailwind CSS 4 for utility-first styling",
  "Material UI 9 with Emotion",
  "better-sqlite3 for the local demo database",
  "zod for runtime validation",
];

const completedWork = [
  {
    label: "Project scripts",
    detail: "package.json includes dev, build, and start scripts for the standard Next.js workflow.",
  },
  {
    label: "Strict TypeScript",
    detail: "tsconfig.json enables strict mode and the @/* import alias used across the app.",
  },
  {
    label: "Global app shell",
    detail: "app/layout.tsx provides the root html/body wrapper, shared navigation, and application providers.",
  },
  {
    label: "Styling foundation",
    detail: "app/globals.css defines the global tokens and base colors, including dark mode behavior.",
  },
  {
    label: "Shared component structure",
    detail: "components/ is split into atoms, molecules, organisms, and providers to support the later lessons.",
  },
  {
    label: "Supporting libraries",
    detail: "lib/ contains actions, database helpers, debounce helpers, logging, telemetry, theming, and schema code.",
  },
  {
    label: "Lesson docs",
    detail: "docs/ stores the stage-by-stage written walkthroughs that back the demo pages.",
  },
];

const keyFiles = [
  { path: "app/layout.tsx", purpose: "Root layout that wraps every page in the app." },
  { path: "app/page.tsx", purpose: "Landing hub that links the learning stages." },
  { path: "app/globals.css", purpose: "Global CSS variables and base styles." },
  { path: "package.json", purpose: "Dependencies and project scripts." },
  { path: "tsconfig.json", purpose: "TypeScript compiler configuration." },
  { path: "components/providers/AppProviders.tsx", purpose: "Material UI and baseline providers." },
];

export default function SetupPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumb items={[{ label: "Setup & Housekeeping" }]} />

      <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
        Stage 1: Setup & Housekeeping
      </h1>

      <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
        This stage is the foundation for the rest of the demo. It covers what the project was initialized with, how the base app shell was assembled, and which files matter before moving into routing, layouts, hooks, and data work.
      </p>

      <section className="mb-8 rounded-2xl border border-sky-200 bg-sky-50 p-6 dark:border-sky-900 dark:bg-sky-950">
        <h2 className="mb-3 text-xl font-semibold text-sky-950 dark:text-sky-50">
          What Was Actually Done In This Repo
        </h2>
        <p className="text-sm leading-6 text-sky-900 dark:text-sky-100">
          This project is not just a blank Next.js starter anymore. It has already been expanded into a structured teaching app with a shared layout, reusable components, docs, demo routes, database helpers, and provider setup.
        </p>
      </section>

      <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Installed Stack
        </h2>
        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          {dependencies.map((dependency) => (
            <li key={dependency} className="rounded-xl bg-gray-50 px-4 py-3 dark:bg-gray-950">
              {dependency}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Work Completed During Setup
        </h2>
        <div className="space-y-4">
          {completedWork.map((item) => (
            <div key={item.label} className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">{item.label}</h3>
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Files To Inspect First
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="pb-3 pr-4 font-medium text-gray-500 dark:text-gray-400">File</th>
                <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {keyFiles.map((file) => (
                <tr key={file.path} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                  <td className="py-3 pr-4 font-mono text-gray-800 dark:text-gray-200">{file.path}</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400">{file.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
        <h2 className="mb-3 text-xl font-semibold text-amber-950 dark:text-amber-50">
          Why This Stage Matters
        </h2>
        <p className="text-sm leading-6 text-amber-900 dark:text-amber-100">
          Every later lesson assumes this structure already exists. Routing depends on the app folder, layouts depend on the root shell, hooks demos depend on the shared component setup, and the data stages depend on the libraries and helpers added here.
        </p>
      </section>

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
        <h2 className="mb-3 text-xl font-semibold text-emerald-950 dark:text-emerald-50">
          Outcome
        </h2>
        <p className="text-sm leading-6 text-emerald-900 dark:text-emerald-100">
          Stage 1 now has its own route and acts as the missing bridge between the generic documentation and the actual state of the repository. From here, Stage 2 can focus purely on routing instead of setup details.
        </p>
      </section>
    </div>
  );
}