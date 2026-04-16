import Breadcrumb from "@/components/molecules/Breadcrumb";
import Link from "next/link";

export default function ProvidersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Providers & Context" }]} />

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Stage 5: Providers & Context
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Learn how to share data across your app without <strong>prop drilling</strong> using React
        Context and Provider components. This project already uses providers for theming and styling—now
        you'll learn how they work and how to build your own.
      </p>

      {/* Core Concept Box */}
      <div className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100 mb-3">
          🎁 Providers Solve Prop Drilling
        </h2>
        <p className="text-indigo-800 dark:text-indigo-200 mb-3">
          When many components need the same data, you can either pass it through every layer (prop
          drilling) or use a Provider to make it available directly.
        </p>
      </div>

      {/* Prop Drilling vs Provider */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          📊 Prop Drilling vs Provider
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-red-600 dark:text-red-400">
              ❌ Prop Drilling
            </h4>
            <pre className="bg-gray-100 dark:bg-gray-950 rounded p-3 text-xs overflow-x-auto border border-gray-300 dark:border-gray-700">
{`<App user={user}>
  <Header user={user} />
  <Main user={user}>
    <Sidebar user={user} />
    <Content user={user}>
      <Card user={user} />
    </Content>
  </Main>
</App>`}
            </pre>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
              Every component passes data down, even if it doesn't use it.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-emerald-600 dark:text-emerald-400">
              ✅ Provider
            </h4>
            <pre className="bg-gray-100 dark:bg-gray-950 rounded p-3 text-xs overflow-x-auto border border-gray-300 dark:border-gray-700">
{`<UserProvider user={user}>
  <App />
  <Header /> {/* uses useUser() */}
  <Main>
    <Sidebar /> {/* uses useUser() */}
    <Content>
      <Card /> {/* uses useUser() */}
    </Content>
  </Main>
</UserProvider>`}
            </pre>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
              Components access data via hooks, no prop passing needed.
            </p>
          </div>
        </div>
      </section>

      {/* How Providers Work */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          🔧 How Providers Work
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">1. Create Context</h4>
            <pre className="bg-gray-100 dark:bg-gray-950 rounded p-3 text-xs text-gray-800 dark:text-gray-200 overflow-x-auto border border-gray-300 dark:border-gray-700">
{`const UserContext = createContext<User | null>(null);`}
            </pre>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">2. Create Provider Component</h4>
            <pre className="bg-gray-100 dark:bg-gray-950 rounded p-3 text-xs text-gray-800 dark:text-gray-200 overflow-x-auto border border-gray-300 dark:border-gray-700">
{`export function UserProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}`}
            </pre>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">3. Create Hook to Use Context</h4>
            <pre className="bg-gray-100 dark:bg-gray-950 rounded p-3 text-xs text-gray-800 dark:text-gray-200 overflow-x-auto border border-gray-300 dark:border-gray-700">
{`export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be inside UserProvider");
  }
  return context;
}`}
            </pre>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">4. Use in Your App</h4>
            <pre className="bg-gray-100 dark:bg-gray-950 rounded p-3 text-xs text-gray-800 dark:text-gray-200 overflow-x-auto border border-gray-300 dark:border-gray-700">
{`// app/layout.tsx
<UserProvider>
  {children}
</UserProvider>

// app/page.tsx
const user = useUser(); // Access anywhere!`}
            </pre>
          </div>
        </div>
      </section>

      {/* Providers in This Project */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          🏗 Providers Already in This Project
        </h3>
        <div className="space-y-4">
          <div className="rounded-lg bg-gray-50 dark:bg-gray-950 p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AppProviders</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Located in <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">components/providers/AppProviders.tsx</code>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Wraps the root layout and provides Material UI theming to the entire app. It uses MUI's
              ThemeProvider and CssBaseline for consistent styling.
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 dark:bg-gray-950 p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ThemeProvider (from MUI)</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Part of Material UI
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Provides design tokens (colors, fonts, spacing) to all MUI components throughout the app.
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 dark:bg-gray-950 p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">CssBaseline (from MUI)</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Part of Material UI
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Normalizes base HTML styles across browsers, creating a consistent starting point.
            </p>
          </div>
        </div>
      </section>

      {/* When to Use Providers */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          🎯 When to Use Providers
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950 rounded-lg p-4">
            <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">✅ Use Providers</h4>
            <ul className="space-y-2 text-sm text-emerald-800 dark:text-emerald-200">
              <li>• Sharing global state (user, theme, settings)</li>
              <li>• Avoiding prop drilling</li>
              <li>• Data needed by many unrelated components</li>
              <li>• Relatively static data</li>
              <li>• Library integrations (MUI, auth providers)</li>
            </ul>
          </div>

          <div className="border border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950 rounded-lg p-4">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">❌ Don't Use Providers</h4>
            <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
              <li>• Frequently changing data (causes re-renders)</li>
              <li>• Data used by only a few adjacent components</li>
              <li>• Component-specific state</li>
              <li>• Form inputs that change rapidly</li>
              <li>• Simple prop passing is cleaner</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Provider Patterns */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          🎪 Common Provider Patterns
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-950 rounded">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pattern 1: Nested Providers</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Combine multiple providers in a single wrapper for clean organization.
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-950 rounded">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pattern 2: Scoped Providers</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Use providers in specific folder layouts to scope context to sections of your app.
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-950 rounded">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pattern 3: Server vs Client</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Server providers fetch data once; client providers enable interactivity.
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-950 rounded">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pattern 4: Optional Context</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Hooks that provide defaults if context is missing.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="rounded-2xl border border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950 p-6 mb-8">
        <h3 className="text-xl font-semibold text-emerald-900 dark:text-emerald-100 mb-4">
          ✨ Key Takeaways
        </h3>
        <ul className="space-y-2 text-emerald-800 dark:text-emerald-200 text-sm">
          <li>✅ Providers eliminate prop drilling and clean up component interfaces</li>
          <li>✅ Use `React.createContext()` to create context</li>
          <li>✅ Wrap providers in your layout for global access</li>
          <li>✅ Create custom hooks (`useContext()`) for clean consumer code</li>
          <li>✅ Nest multiple providers for organized state management</li>
          <li>✅ Scope providers appropriately to avoid unnecessary re-renders</li>
        </ul>
      </section>

      {/* Related Links */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          📚 Related Topics
        </h3>
        <div className="grid gap-3">
          <Link
            href="/server-vs-client"
            className="p-3 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white font-medium"
          >
            ← Stage 4: Server vs Client Components
          </Link>
          <Link
            href="/hooks"
            className="p-3 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white font-medium"
          >
            → Stage 6: React Hooks
          </Link>
        </div>
      </section>
    </div>
  );
}
