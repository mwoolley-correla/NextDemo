import Link from "next/link";

export default function HooksLayout({ children }: { children: React.ReactNode }) {
  const hookLinks = [
    { name: "Overview", href: "/hooks" },
    { name: "useState", href: "/hooks/use-state" },
    { name: "useEffect", href: "/hooks/use-effect" },
    { name: "useCallback", href: "/hooks/use-callback" },
    { name: "useActionState", href: "/hooks/use-action-state" },
    { name: "Debounce", href: "/hooks/debounce" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-52 shrink-0">
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
            Stage 6: Hooks
          </p>
          <nav className="flex flex-col gap-1">
            {hookLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </div>
  );
}
