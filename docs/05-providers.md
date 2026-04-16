# Stage 5: Providers & Context

## Overview

This stage introduces **providers** and **React Context**, showing how to share state and configuration across your application without prop drilling. You'll learn how Next.js and libraries use providers, create your own, and understand when and why to use them.

Time to complete: 20-30 minutes  
Prerequisites: Stage 4 (Server vs Client) complete  
Status: Complete

---

## Concepts & Theory

### What is a Provider?

A **provider** is a component that wraps other components and makes data available to all of them via **React Context**. Instead of passing props down through every layer, providers give child components direct access to shared state.

```tsx
// Without provider (prop drilling):
<App user={user} theme={theme} settings={settings}>
  <Header user={user} theme={theme} />
  <Main user={user} settings={settings} />
  <Footer theme={theme} />
</App>

// With provider (clean):
<UserProvider>
  <ThemeProvider>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </ThemeProvider>
</UserProvider>
```

### React Context

React Context has three main pieces:

1. **Context object** — Created with `React.createContext()`
2. **Provider component** — Wraps the tree and passes data
3. **Consumer hook** — Access data with `useContext()`

```tsx
// 1. Create context
const UserContext = createContext<User | null>(null);

// 2. Create provider
export function UserProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Use in components
export function useUser() {
  return useContext(UserContext);
}
```

### Providers in This Project

This project already uses providers:

- **AppProviders** (`components/providers/AppProviders.tsx`) — Wraps the root with Material UI theming
- **ThemeProvider** (from MUI) — Provides theme tokens throughout the app
- **CssBaseline** (from MUI) — Normalizes base styles

### When to Use Providers

Use providers when:
- ✅ Data is needed by many components at different levels
- ✅ You want to avoid prop drilling
- ✅ The data rarely changes or changes infrequently
- ✅ Multiple unrelated components need the same data

Avoid providers when:
- ❌ Data changes very frequently (causes unnecessary re-renders)
- ❌ Only a few adjacent components need the data (just use props)
- ❌ The data is component-specific state

### Provider Patterns

#### Pattern 1: Simple Provider

```tsx
const MyContext = createContext<string>("default");

export function MyProvider({ children }) {
  return (
    <MyContext.Provider value="hello">
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}
```

#### Pattern 2: Provider with State

```tsx
const ThemeContext = createContext<[theme, setTheme]>(["light", () => {}]);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}
```

#### Pattern 3: Nested Providers

```tsx
export function AppProviders({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
```

#### Pattern 4: Server vs Client Providers

```tsx
// Server provider (pre-fetches data on server)
export async function ServerDataProvider({ children }) {
  const data = await fetchData();
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

// Client provider (allows interactivity)
"use client";
export function ClientThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  // ...
}
```

---

## Why This Matters

Providers solve a real problem in React apps: **sharing state without drilling props through every component layer**. As your app grows:

- Without providers: components become cluttered with unused props
- With providers: clean component interfaces, organized state management
- Teams can use providers to scope features (dashboard provider, admin provider, etc.)

---

## Code Examples

### Example 1: Creating a Modal Provider

```tsx
// contexts/ModalContext.tsx
"use client";

import { createContext, useState } from "react";

const ModalContext = createContext<{
  isOpen: boolean;
  open: () => void;
  close: () => void;
} | null>(null);

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used inside ModalProvider");
  }
  return context;
}
```

### Example 2: Using the Provider

```tsx
// app/layout.tsx
import { ModalProvider } from "@/contexts/ModalContext";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}

// app/page.tsx
import { useModal } from "@/contexts/ModalContext";

export default function Page() {
  const { open } = useModal();

  return <button onClick={open}>Open Modal</button>;
}
```

### Example 3: Multi-Level Providers

```tsx
// Wrap multiple providers for organized state management
export function AppProviders({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NotificationProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
        </NotificationProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
```

---

## Common Patterns

### Pattern 1: Global State with Provider

```tsx
const StoreContext = createContext<Store | null>(null);

export function StoreProvider({ children }) {
  const store = useMemo(() => createStore(), []);
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
}
```

### Pattern 2: Optional Provider with Default

```tsx
export function useOptionalSettings() {
  return useContext(SettingsContext) || { theme: "light", lang: "en" };
}
```

### Pattern 3: Scoped Providers

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

The dashboard provider only wraps `/dashboard/*` pages, keeping the context scoped.

---

## Key Takeaways

1. **Providers eliminate prop drilling** — Pass data through context instead of props
2. **Nesting providers is common** — Multiple providers work together
3. **Use hooks to access context** — `useContext()` retrieves provider data
4. **Scope providers appropriately** — Root providers for global data, layout providers for section data
5. **Server and client providers differ** — Use "use client" for interactive providers
6. **Performance matters** — Providers with frequent updates can cause re-renders; split when needed

---

## Exercises

1. **Create a simple provider** — Build a `FavoriteProvider` that stores a list of favorites
2. **Use the provider hook** — Create a `useFavorites()` hook and use it in a component
3. **Nest multiple providers** — Build an `AppProviders` component that wraps three providers
4. **Scope a provider** — Create a section-specific provider in a folder's `layout.tsx`

---

## Next Steps

Now that you understand providers and context:
- Use them in Stage 6 (React Hooks) to manage complex state
- Apply them to Stage 7 (Server Actions) to manage loading/error states
- Combine them with Stage 8 (Components) to build reusable component libraries
