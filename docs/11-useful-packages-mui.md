# Stage 11: Useful Packages and Material UI

This final stage introduces Material UI as an example of a mature React component library.

## Overview

This final stage introduces Material UI as an example of a mature React component library.

The goal is not to replace every custom component. The goal is to show how external packages can complement your own design system and accelerate delivery.

Time to complete: 20-30 minutes  
Prerequisites: Stages 1-8 complete  
Status: Complete

---

## Why Use a Component Library

A package like MUI gives you:

- accessible components out of the box
- a theming system
- consistent spacing and interaction patterns
- fast delivery for admin panels, dashboards, and internal tools

That makes it useful even if you also keep your own custom components.

---

## Packages Added

```bash
npm install @mui/material @emotion/react @emotion/styled
```

These provide:

- MUI core components
- Emotion styling support

---

## Step-by-Step Implementation

### Step 1: Create a theme

Create `lib/theme.ts`.

This centralizes colors, typography, and shape decisions.

### Step 2: Add a provider

Create `components/providers/AppProviders.tsx`.

Wrap the app in MUI's `ThemeProvider` and `CssBaseline` so components render with consistent styling.

### Step 3: Build a showcase page

Create `components/organisms/MuiShowcase.tsx` and render it from `app/mui-demo/page.tsx`.

This page demonstrates:

- `Button`
- `TextField`
- `Card`
- `Alert`
- `Chip`

### Step 4: Keep custom components too

A real app often mixes both:

- your own atoms and molecules for domain-specific UI
- third-party components for standardized interaction patterns

That is the approach used in this demo project.

---

## What to Test

Run the app:

```bash
npm run dev
```

Visit `/mui-demo` and verify:

- MUI components render correctly
- the theme colors are applied
- the text field updates interactively
- the app still works alongside the custom component system

---

## Common Pitfalls

### Letting the library define everything

A package should help you ship faster, not remove all ownership of your UI architecture.

### Skipping theming

If you use a component library without a shared theme, the app quickly becomes inconsistent.

### Mixing patterns without discipline

It is fine to use custom components and MUI together, but be intentional about when each is appropriate.

### Adding too many libraries too early

Each dependency adds maintenance cost. Use packages that clearly save time or solve real problems.

---

## Files Added in This Stage

- `lib/theme.ts`
- `components/providers/AppProviders.tsx`
- `components/organisms/MuiShowcase.tsx`
- `app/mui-demo/page.tsx`

---

## Project Status

All planned stages for the initial demo project are now implemented:

1. Setup and housekeeping
2. Routing
3. Server vs client
4. React hooks
5. Server actions vs API
6. Atomic components
7. Database and Zod
8. Logging and telemetry
9. MUI integration
