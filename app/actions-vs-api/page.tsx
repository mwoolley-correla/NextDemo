import ActionsVsApiDemo from "@/components/organisms/ActionsVsApiDemo";
import Breadcrumb from "@/components/molecules/Breadcrumb";

export default function ActionsVsApiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Actions vs API" }]} />

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Stage 7: Server Actions vs API Endpoints
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Both patterns let your Next.js app run server-side logic, but they solve different problems. Server actions are optimized for app-internal form workflows. API routes are better when you want an explicit HTTP contract.
      </p>

      <ActionsVsApiDemo />

      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          When to choose each one
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950">
            <h3 className="mb-2 font-semibold text-emerald-900 dark:text-emerald-100">Choose server actions when...</h3>
            <ul className="space-y-2 text-sm text-emerald-800 dark:text-emerald-200">
              <li>You are submitting a form from your own app.</li>
              <li>You want less client boilerplate and no manual fetch call.</li>
              <li>You do not need a public or reusable HTTP endpoint.</li>
            </ul>
          </div>
          <div className="rounded-xl bg-sky-50 p-4 dark:bg-sky-950">
            <h3 className="mb-2 font-semibold text-sky-900 dark:text-sky-100">Choose API routes when...</h3>
            <ul className="space-y-2 text-sm text-sky-800 dark:text-sky-200">
              <li>Another frontend, mobile app, or third party may call the endpoint.</li>
              <li>You want explicit HTTP methods, status codes, and JSON responses.</li>
              <li>You need integration boundaries that are easy to test independently.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
