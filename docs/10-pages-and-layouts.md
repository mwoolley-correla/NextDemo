# Stage 10: Pages & Layouts Architecture

## Overview

This stage dives deeper into the relationship between `page.tsx` and `layout.tsx` files, showing how layouts wrap and structure your pages in Next.js. Understanding this hierarchy is essential for building organized, maintainable applications.

Time to complete: 20-30 minutes  
Prerequisites: Stage 2 (Routing) complete  
Status: In Development

---

## Concepts & Theory

### The Page and Layout Hierarchy

In Next.js App Router, every route is made up of **segments** (folders) and two special files:

- **`page.tsx`** — The actual content displayed for a route
- **`layout.tsx`** — A wrapper component that persists across all child pages

### How Layouts Wrap Pages

```
app/
├── layout.tsx                (wraps everything)
├── page.tsx                  → / (home page)
├── hooks/
│   ├── layout.tsx            (wraps /hooks/*)
│   ├── page.tsx              → /hooks (hooks overview)
│   ├── use-state/
│   │   └── page.tsx          → /hooks/use-state
│   └── use-effect/
│       └── page.tsx          → /hooks/use-effect
└── todos/
    ├── layout.tsx            (wraps /todos/*)
    ├── page.tsx              → /todos (todos list)
    └── [id]/
        └── page.tsx          → /todos/:id (todo detail)
```

When you navigate to `/hooks/use-state`:
1. `app/layout.tsx` renders first (root layout)
2. `app/hooks/layout.tsx` renders inside it
3. `app/hooks/use-state/page.tsx` renders inside that
4. They compose into a nested component tree

### Layout Composition

Layouts are **nested** and **persistent**. This means:

- A layout wraps all pages below it
- When navigating between sibling pages, the layout **does not re-mount**
- State inside a layout persists across page changes (within that segment)
- Each level can have its own layout

### Root Layout vs Segment Layouts

**Root Layout** (`app/layout.tsx`):
- Wraps the entire application
- Must include `<html>` and `<body>` tags
- Only one per app
- Good place for global providers, navigation, and theme setup

**Segment Layouts** (`app/section/layout.tsx`):
- Wraps pages within a folder
- Reusable for consistent UI within a section
- Can have state and effects
- Good for section-specific sidebars, tabs, or context

### Why This Architecture Matters

This layout system allows you to:
- **Persist UI state** — A sidebar doesn't re-mount when switching pages
- **Avoid layout shift** — Global structure stays stable
- **Scope providers** — Use different providers for different sections
- **DRY principle** — Share navigation and structure without duplication
- **Performance** — Only the page content changes, not the wrapper

---

## Code Examples

### Example 1: Basic Page Structure

```tsx
// app/layout.tsx (root layout)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <nav>Navigation Bar</nav>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
```

```tsx
// app/dashboard/layout.tsx (segment layout)
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside>Dashboard Sidebar</aside>
      <main>{children}</main>
    </div>
  );
}
```

```tsx
// app/dashboard/page.tsx (page content)
export default function DashboardHome() {
  return <h1>Welcome to Dashboard</h1>;
}
```

### Example 2: Nested Layouts with State

```tsx
// app/settings/layout.tsx
"use client";
import { useState } from "react";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab("profile")}>Profile</button>
        <button onClick={() => setActiveTab("security")}>Security</button>
      </div>
      {children}
    </div>
  );
}
```

When you navigate between `/settings/profile` and `/settings/security`, the `activeTab` state **persists** because the layout doesn't re-mount.

### Example 3: Dynamic Segment Layouts

```tsx
// app/blog/[slug]/layout.tsx
"use server";

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Fetch post metadata once for all child pages
  const post = await fetchPost(slug);

  return (
    <article>
      <header>
        <h1>{post.title}</h1>
        <time>{post.date}</time>
      </header>
      {children}
    </article>
  );
}
```

---

## Common Patterns

### Pattern 1: Sidebar Navigation

```tsx
// app/docs/layout.tsx
export default function DocsLayout({ children }) {
  return (
    <div className="flex gap-4">
      <nav className="w-64">
        {/* Navigation persists across page changes */}
        <DocsSidebar />
      </nav>
      <main className="flex-1">{children}</main>
    </div>
  );
}
```

### Pattern 2: Scoped Providers

```tsx
// app/dashboard/layout.tsx
import { DashboardProvider } from "@/contexts/dashboard";

export default function DashboardLayout({ children }) {
  return (
    <DashboardProvider>
      {children}
    </DashboardProvider>
  );
}
```

Only the dashboard section has access to `DashboardProvider`.

### Pattern 3: Conditional Layouts

```tsx
// app/admin/layout.tsx
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/auth";

export default async function AdminLayout({ children }) {
  if (!(await isAdmin())) {
    redirect("/login");
  }

  return <div className="admin-shell">{children}</div>;
}
```

---

## Key Takeaways

1. **Pages render inside layouts** — Layouts are wrappers, pages are content
2. **Layouts are nested** — Each segment can have its own layout
3. **Layouts persist** — State and UI don't reset when navigating between sibling pages
4. **Root layout is special** — It must include HTML/body and wraps everything
5. **Use layouts for structure** — Navigation, sidebars, and common UI belong in layouts
6. **Use pages for content** — Each page is independent content for a route

---

## Exercises

1. **Create a segment layout** — Add a `layout.tsx` to a folder and verify it wraps pages
2. **Persist state in a layout** — Build a layout with tabs that keep their state across page changes
3. **Multiple layouts** — Create a root layout and a section layout to see the nesting
4. **Use params in layout** — Build a layout that uses dynamic route parameters

---

## Next Steps

Now that you understand the page/layout hierarchy, you're ready to:
- Build complex layouts with multiple sections
- Use layouts for authentication and authorization checks
- Create reusable layout patterns in your own projects
