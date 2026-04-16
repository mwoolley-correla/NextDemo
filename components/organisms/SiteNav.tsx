"use client";

import Link from "next/link";

const stages = [
  { id: 1, title: "Setup", href: "/setup" },
  { id: 2, title: "Pages & Layouts", href: "/pages-and-layouts" },
  { id: 3, title: "Routing", href: "/routing" },
  { id: 4, title: "Server vs Client", href: "/server-vs-client" },
  { id: 5, title: "Providers", href: "/providers" },
  { id: 6, title: "React Hooks", href: "/hooks" },
  { id: 7, title: "Actions vs API", href: "/actions-vs-api" },
  { id: 8, title: "Components", href: "/components-demo" },
  { id: 9, title: "Database & Zod", href: "/todos" },
  { id: 10, title: "Logging", href: "/monitoring" },
  { id: 11, title: "MUI", href: "/mui-demo" },
  { id: 12, title: "Environment", href: "/environment" },
  { id: 13, title: "Middleware", href: "/middleware" },
  { id: 14, title: "Proxy & CSP", href: "/proxy-csp" },
];

export default function SiteNav() {
  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            Next.js Demo
          </Link>
          <div className="hidden md:flex items-center gap-1 overflow-x-auto">
            {stages.map((stage) => (
              <Link
                key={stage.id}
                href={stage.href}
                className="px-3 py-1.5 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors whitespace-nowrap"
              >
                <span className="text-gray-400 dark:text-gray-600 mr-1">
                  {String(stage.id).padStart(2, "0")}
                </span>
                {stage.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
