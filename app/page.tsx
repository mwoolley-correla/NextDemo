import Link from "next/link";

export default function Home() {
  const stages = [
    {
      id: 1,
      title: "Setup & Housekeeping",
      description: "Project initialization, dependencies, and folder structure",
      href: "/setup",
      status: "completed",
    },
    {
      id: 2,
      title: "Pages & Layouts Architecture",
      description: "How layout.tsx wraps and structures pages in your app",
      href: "/pages-and-layouts",
      status: "completed",
    },
    {
      id: 3,
      title: "Routing & Landing Hub",
      description: "File-based routing with App Router",
      href: "/routing",
      status: "completed",
    },
    {
      id: 4,
      title: "Server vs Client",
      description: "Understanding what can/can't be done on each side",
      href: "/server-vs-client",
      status: "completed",
    },
    {
      id: 5,
      title: "Providers & Context",
      description: "Share state across components without prop drilling",
      href: "/providers",
      status: "completed",
    },
    {
      id: 6,
      title: "React Hooks",
      description: "useState, useEffect, useCallback, useActionState, debounce",
      href: "/hooks",
      status: "completed",
    },
    {
      id: 7,
      title: "Server Actions vs API",
      description: "Comparing server actions and API endpoints",
      href: "/actions-vs-api",
      status: "completed",
    },
    {
      id: 8,
      title: "Components & Atomic Design",
      description: "Building reusable components with atomic structure",
      href: "/components-demo",
      status: "completed",
    },
    {
      id: 9,
      title: "Database & Zod",
      description: "SQLite, Zod validation, and data persistence",
      href: "/todos",
      status: "completed",
    },
    {
      id: 10,
      title: "Logging & Telemetry",
      description: "Structured logging and performance monitoring",
      href: "/monitoring",
      status: "completed",
    },
    {
      id: 11,
      title: "MUI & Useful Packages",
      description: "Material-UI styling and other helpful libraries",
      href: "/mui-demo",
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Next.js & React Demo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            An educational project demonstrating core concepts of Next.js and React for
            developers new to both frameworks.
          </p>
        </div>

        {/* Stages Grid */}
        <div className="grid gap-6">
          {stages.map((stage) => (
            <Link
              key={stage.id}
              href={stage.href}
              className={`p-6 rounded-lg border-2 transition-all ${
                stage.status === "current"
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                  : stage.status === "completed"
                    ? "border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-gray-400 dark:text-gray-600">
                      {String(stage.id).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {stage.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{stage.description}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ml-4 ${
                    stage.status === "current"
                      ? "bg-blue-500 text-white"
                      : stage.status === "completed"
                        ? "bg-emerald-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {stage.status === "current"
                    ? "Current"
                    : stage.status === "completed"
                      ? "Completed"
                      : "Coming Soon"}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Documentation Link */}
        <div className="mt-12 p-6 rounded-lg bg-gray-100 dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            📚 Documentation
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Each stage has detailed documentation with setup steps, code examples, and common
            pitfalls. Start with{" "}
            <Link href="/routing" className="text-blue-600 dark:text-blue-400 hover:underline">
              the routing walkthrough
            </Link>{" "}
            and check the{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">docs/</code> folder.
          </p>
        </div>
      </div>
    </div>
  );
}
