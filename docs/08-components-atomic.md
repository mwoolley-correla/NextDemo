# Stage 6: Components & Atomic Design
# Stage 8: Components & Atomic Design

This stage turns the component folders into a real reusable UI structure. Instead of putting everything directly in pages, the project now composes interface pieces from atoms, molecules, and organisms.
# Stage 6: Components & Atomic Design

## Overview

This stage turns the component folders into a real reusable UI structure. Instead of putting everything directly in pages, the project now composes interface pieces from atoms, molecules, and organisms.

Time to complete: 20-30 minutes  
Prerequisites: Stages 1-5 complete  
Status: Complete

---

## The Structure

### Atoms

Atoms are the smallest useful building blocks.

Examples in this project:

- `Button`
- `Input`
- `Badge`

### Molecules

Molecules combine a few atoms into something more useful.

Examples in this project:

- `Breadcrumb`
- `InfoCard`
- `SearchBar`

### Organisms

Organisms combine molecules and atoms into larger sections.

Examples in this project:

- `SiteNav`
- `FeatureShowcase`
- `ActionsVsApiDemo`
- `ServerExamplePanel`
- `ClientExamplePanel`

---

## Why This Matters

Atomic design is useful because it encourages:

- consistent UI patterns
- clearer separation of responsibility
- easier reuse across routes
- simpler page components

The goal is not rigid naming. The goal is disciplined composition.

---

## Step-by-Step Implementation

### Step 1: Create atoms

Atoms should stay small and generic.

```tsx
export default function Button({ children }) {
  return <button>{children}</button>;
}
```

In this project, atoms handle only styling and basic HTML behavior.

### Step 2: Create molecules

Molecules combine a few atoms into a slightly richer unit.

```tsx
<SearchBar>
  <Input />
  <Button />
</SearchBar>
```

This is where basic composition starts to matter.

### Step 3: Create organisms

Organisms combine multiple smaller parts into meaningful UI sections.

```tsx
<FeatureShowcase>
  <InfoCard />
  <InfoCard />
  <InfoCard />
</FeatureShowcase>
```

These components are still reusable, but they are more opinionated.

### Step 4: Keep pages focused on assembly

Pages should mostly compose existing components rather than define every UI detail inline.

That keeps route files easier to scan and easier to teach from.

---

## What to Test

Run the app:

```bash
npm run dev
```

Visit `/components-demo` and verify:

- buttons render in multiple variants
- badges render with different tones
- the search bar composes an input and button
- the feature showcase renders three cards from reusable pieces

---

## Common Pitfalls

### Making atoms too smart

Atoms should usually stay simple. If a component starts managing too much layout or business logic, it probably belongs higher up.

### Overengineering the taxonomy

Do not spend more time debating labels than building useful components.

### Repeating page-specific markup everywhere

If the same card, input group, or section appears in multiple places, extract it.

### Building organisms too early

Start with atoms and molecules where possible. Build larger organisms once patterns repeat.

---

## Files Added in This Stage

- `components/atoms/Button.tsx`
- `components/atoms/Input.tsx`
- `components/atoms/Badge.tsx`
- `components/molecules/InfoCard.tsx`
- `components/molecules/SearchBar.tsx`
- `components/organisms/FeatureShowcase.tsx`
- `app/components-demo/page.tsx`

---

## Next Step

Move on to Stage 7 to add validation and persistence with Zod and a database-backed todo example.
