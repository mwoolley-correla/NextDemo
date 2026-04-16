import Breadcrumb from "@/components/molecules/Breadcrumb";
import Link from "next/link";

const hooks = [
  {
    name: "useState",
    href: "/hooks/use-state",
    description: "Manage local component state that triggers re-renders when it changes.",
  },
  {
    name: "useEffect",
    href: "/hooks/use-effect",
    description: "Run side effects (data fetching, subscriptions) after render.",
  },
  {
    name: "useCallback",
    href: "/hooks/use-callback",
    description: "Memoize a function reference to avoid unnecessary re-renders.",
  },
  {
    name: "useActionState",
    href: "/hooks/use-action-state",
    description: "Manage the state of a server action form submission.",
  },
  {
    name: "Debounce",
    href: "/hooks/debounce",
    description: "Delay execution until a user stops typing — a common utility pattern.",
  },
];

export default function HooksPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "React Hooks" }]} />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Stage 4: React Hooks
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Hooks are functions that let you &quot;hook into&quot; React features like state and lifecycle from a functional component. They all start with <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">use</code>.
      </p>

      <div className="grid gap-4">
        {hooks.map((hook) => (
          <Link
            key={hook.name}
            href={hook.href}
            className="p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">{hook.name}</code>
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{hook.description}</p>
              </div>
              <span className="text-gray-400 dark:text-gray-600 text-xl mt-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
