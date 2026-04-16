export default function Home() {
  const stages = [
    {
      id: 1,
      title: "Setup & Housekeeping",
      description: "Project initialization, dependencies, and folder structure",
      href: "#",
      status: "current",
    },
    {
      id: 2,
      title: "Routing & Landing Hub",
      description: "File-based routing with App Router",
      href: "#",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Server vs Client",
      description: "Understanding what can/can't be done on each side",
      href: "#",
      status: "upcoming",
    },
    {
      id: 4,
      title: "React Hooks",
      description: "useState, useEffect, useCallback, useActionState, debounce",
      href: "#",
      status: "upcoming",
    },
    {
      id: 5,
      title: "Server Actions vs API",
      description: "Comparing server actions and API endpoints",
      href: "#",
      status: "upcoming",
    },
    {
      id: 6,
      title: "Components & Atomic Design",
      description: "Building reusable components with atomic structure",
      href: "#",
      status: "upcoming",
    },
    {
      id: 7,
      title: "Database & Zod",
      description: "SQLite, Zod validation, and data persistence",
      href: "#",
      status: "upcoming",
    },
    {
      id: 8,
      title: "Logging & Telemetry",
      description: "Structured logging and performance monitoring",
      href: "#",
      status: "upcoming",
    },
    {
      id: 9,
      title: "MUI & Useful Packages",
      description: "Material-UI styling and other helpful libraries",
      href: "#",
      status: "upcoming",
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
            <a
              key={stage.id}
              href={stage.href}
              className={`p-6 rounded-lg border-2 transition-all ${
                stage.status === "current"
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
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
                      : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {stage.status === "current" ? "Current" : "Coming Soon"}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Documentation Link */}
        <div className="mt-12 p-6 rounded-lg bg-gray-100 dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            📚 Documentation
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Each stage has detailed documentation with setup steps, code examples, and common
            pitfalls. Check the{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">docs/</code> folder.
          </p>
        </div>
      </div>
    </div>
  );
}
