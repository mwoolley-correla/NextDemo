# Stage 3: Routing & Landing Hub

## Overview

This stage introduces the Next.js App Router and shows how your file structure becomes your URL structure. You will also create a landing hub that links every learning stage in this demo project.

Time to complete: 15-25 minutes  
Prerequisites: Stage 1 complete  
Status: Complete

---

## Concepts & Theory

### File-based routing

In Next.js, files inside the `app/` directory define routes automatically.

- `app/page.tsx` becomes `/`
- `app/routing/page.tsx` becomes `/routing`
- `app/hooks/use-state/page.tsx` becomes `/hooks/use-state`
- `app/api/demo/route.ts` becomes `/api/demo`

This removes the need for a manual router configuration file.

### Layouts

A `layout.tsx` file wraps all routes below it in the same folder.

- `app/layout.tsx` wraps the whole application
- `app/hooks/layout.tsx` wraps all `/hooks/*` routes

Layouts are useful for persistent navigation, sidebars, and shared UI.

### Route groups

Folders in parentheses like `(marketing)` or `(dashboard)` help organize routes without affecting the URL. This project does not rely on them yet, but they are an important App Router feature worth understanding early.

---

## Why This Matters

Routing is one of the first places where Next.js feels different from plain React.

Instead of installing a router and declaring routes manually, you build the route tree directly from folders and files. That makes the app structure easier to understand for beginners because the filesystem is the routing map.

---

## Step-by-Step Implementation

### Step 1: Add a shared top navigation

Create a shared component for stage links:

```tsx
import Link from "next/link";

const stages = [
  { id: 1, title: "Setup", href: "/" },
  { id: 2, title: "Routing", href: "/routing" },
  { id: 3, title: "Server vs Client", href: "/server-vs-client" },
];

export default function SiteNav() {
  return (
    <nav>
      {stages.map((stage) => (
        <Link key={stage.id} href={stage.href}>
          {stage.title}
        </Link>
      ))}
    </nav>
  );
}
```

Then render it from the root layout so it appears on every page.

### Step 2: Build a dedicated routing page

Create `app/routing/page.tsx`.

This page should explain:

- static routes
- dynamic routes
- layouts
- route groups
- internal navigation with `Link`

Example:

```tsx
export default function RoutingPage() {
  return <h1>Stage 2: Routing & File-Based Navigation</h1>;
}
```

### Step 3: Add placeholder pages for later stages

Create the route files now so learners can click around the app even before later stages are fully implemented.

Examples:

```text
app/server-vs-client/page.tsx
app/actions-vs-api/page.tsx
app/components-demo/page.tsx
app/todos/page.tsx
app/monitoring/page.tsx
app/mui-demo/page.tsx
```

This improves discoverability and makes the learning flow visible from the start.

### Step 4: Add nested routing for hooks

Create a hooks section with its own layout:

```text
app/hooks/layout.tsx
app/hooks/page.tsx
app/hooks/use-state/page.tsx
app/hooks/use-effect/page.tsx
app/hooks/use-callback/page.tsx
app/hooks/use-action-state/page.tsx
app/hooks/debounce/page.tsx
```

This demonstrates nested routes and a section-level layout.

### Step 5: Add an API route

Create an example API route at `app/api/demo/route.ts`:

```ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello from an API route" });
}
```

This is useful for later stages and also reinforces that the `app/` directory can define both pages and backend endpoints.

---

## What to Test

Run the app:

```bash
npm run dev
```

Verify these routes load:

```text
/
/routing
/server-vs-client
/hooks
/hooks/use-state
/hooks/use-effect
/hooks/use-callback
/hooks/use-action-state
/hooks/debounce
/actions-vs-api
/components-demo
/todos
/monitoring
/mui-demo
/api/demo
```

For `/api/demo`, open it in the browser and confirm you receive JSON.

---

## Common Pitfalls

### Using `<a>` instead of `<Link>` for internal routes

Use `Link` from `next/link` for internal navigation. This enables client-side transitions and prefetching.

### Forgetting `page.tsx`

A folder alone does not create a page. You need a `page.tsx` file inside the folder.

### Putting API handlers in the wrong file

Pages use `page.tsx`. API endpoints use `route.ts`.

### Assuming layouts re-render on every page change

Layouts persist across navigation. The page content changes, but the shared layout stays mounted.

---

## Files Added in This Stage

- `components/organisms/SiteNav.tsx`
- `components/molecules/Breadcrumb.tsx`
- `app/routing/page.tsx`
- `app/server-vs-client/page.tsx`
- `app/hooks/layout.tsx`
- `app/hooks/page.tsx`
- `app/hooks/use-state/page.tsx`
- `app/hooks/use-effect/page.tsx`
- `app/hooks/use-callback/page.tsx`
- `app/hooks/use-action-state/page.tsx`
- `app/hooks/debounce/page.tsx`
- `app/actions-vs-api/page.tsx`
- `app/components-demo/page.tsx`
- `app/todos/page.tsx`
- `app/monitoring/page.tsx`
- `app/mui-demo/page.tsx`
- `app/api/demo/route.ts`

---

## Next Step

Move on to Stage 3 to explain server components vs client components with concrete examples of what can and cannot run in each environment.
