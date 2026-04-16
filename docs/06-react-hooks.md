# Stage 6: React Hooks

## Overview

This stage introduces the core React hooks used throughout modern Next.js applications. The project includes interactive examples for each concept so learners can see when state changes, when effects run, and why memoization sometimes matters.

Time to complete: 25-40 minutes  
Prerequisites: Stages 1-5 complete
Status: Complete

---

## Hooks Covered

- `useState`
- `useEffect`
- `useCallback`
- `useActionState`
- debounce as a practical utility pattern used with hooks

---

## Why Hooks Matter

Hooks let functional components manage state, side effects, and form workflows without switching to class components.

In this demo project they also reinforce an important Next.js rule:

- hooks that depend on browser interactivity belong in client components
- server components should stay focused on rendering and secure data access

---

## Route Map

The hooks stage is split into nested routes:

```text
/hooks
/hooks/use-state
/hooks/use-effect
/hooks/use-callback
/hooks/use-action-state
/hooks/debounce
```

This also demonstrates nested routing and a shared section layout with `app/hooks/layout.tsx`.

---

## Step-by-Step Implementation

### Step 1: Build a hooks overview page

Create `app/hooks/page.tsx` and link each hook demo route.

This page acts as the entry point for the section.

### Step 2: Add a hooks layout

Create `app/hooks/layout.tsx` so all hook pages share the same sidebar navigation.

```tsx
export default function HooksLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
```

### Step 3: Demonstrate `useState`

`useState` stores local component state.

```tsx
const [count, setCount] = useState(0);
```

Use it for counters, inputs, toggles, and local UI state.

### Step 4: Demonstrate `useEffect`

`useEffect` runs side effects after render.

```tsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(interval);
}, []);
```

Use it for fetching, subscriptions, timers, and cleanup.

### Step 5: Demonstrate `useCallback`

`useCallback` keeps a stable function reference.

```tsx
const handleClick = useCallback(() => {
  setCount((value) => value + 1);
}, []);
```

Use it when passing callbacks to memoized children and you have a real rendering problem to solve.

### Step 6: Demonstrate `useActionState`

`useActionState` is useful for forms and async actions.

```tsx
const [state, formAction, isPending] = useActionState(submitForm, null);
```

It keeps form submission state, returned values, and pending state together.

### Step 7: Demonstrate debounce

Debounce is not a React hook, but it is often paired with hooks in search and autosave flows.

```tsx
const debounced = debounce((value: string) => {
  setSearch(value);
}, 400);
```

Use it when you want to wait until the user stops typing before doing expensive work.

---

## What to Test

Run the app:

```bash
npm run dev
```

Visit each route and verify the demo behavior:

- `/hooks/use-state`: counter updates and controlled input works
- `/hooks/use-effect`: timer updates and data fetch changes with selection
- `/hooks/use-callback`: memoized callback avoids unnecessary child re-renders
- `/hooks/use-action-state`: form validation and pending state behave correctly
- `/hooks/debounce`: immediate value updates instantly, debounced value lags slightly

---

## Common Pitfalls

### Calling hooks conditionally

Hooks must always be called in the same order. Do not place them inside `if` statements, loops, or nested functions.

### Forgetting cleanup in `useEffect`

Timers, subscriptions, and in-flight requests should usually be cleaned up.

### Overusing `useCallback`

Memoization adds complexity. Use it when it solves a measurable issue, not by default.

### Treating debounce like a hook

Debounce is a utility function, not a built-in React hook. It works alongside hooks rather than replacing them.

---

## Files Added in This Stage

- `app/hooks/layout.tsx`
- `app/hooks/page.tsx`
- `app/hooks/use-state/page.tsx`
- `app/hooks/use-effect/page.tsx`
- `app/hooks/use-callback/page.tsx`
- `app/hooks/use-action-state/page.tsx`
- `app/hooks/debounce/page.tsx`
- `lib/debounce.ts`

---

## Next Step

Move on to Stage 7 to compare server actions and API endpoints, including when each approach is the better fit.
