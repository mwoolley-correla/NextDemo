import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
      <Link
        href="/"
        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        Home
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          <span>/</span>
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 dark:text-white font-medium">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
