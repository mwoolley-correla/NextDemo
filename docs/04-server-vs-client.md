# Stage 4: Server Components vs Client Components

## Overview

This stage explains one of the most important ideas in modern Next.js: not every React component runs in the browser.

With the App Router, components are server components by default. You opt into client-side behavior by adding the `"use client"` directive.

Time to complete: 20-30 minutes  
Prerequisites: Stages 1 and 2 complete  
Status: Complete

---

## Core Idea

There are two execution environments in a Next.js app:

- Server components run on the server.
- Client components run in the browser.

They can be combined in the same page, but they do not have the same capabilities.

---

## What Server Components Are Good For

Use server components when you need to:

- fetch data securely
- read private environment variables
- call databases directly
- render content before it reaches the browser
- reduce the amount of JavaScript sent to the client

Server components cannot use browser-only APIs or interactive hooks.

---

## What Client Components Are Good For

Use client components when you need to:

- respond to clicks and typing
- use `useState`, `useEffect`, or other client hooks
- access `window`, `document`, `navigator`, or `localStorage`
- build interactive widgets and forms

Client components should not directly access secrets or private server resources.

---

## Step-by-Step Implementation

### Step 1: Create a server example component

A server component does not need `"use client"`.

```tsx
export default function ServerPanel() {
  return <p>This runs on the server.</p>;
}
```

You can safely read server-only values here.

### Step 2: Create a client example component

A client component must start with `"use client"`.

```tsx
"use client";

import { useState } from "react";

export default function ClientPanel() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### Step 3: Compose them on one page

A server page can render both server and client components together.

```tsx
import ServerPanel from "@/components/ServerPanel";
import ClientPanel from "@/components/ClientPanel";

export default function Page() {
  return (
    <>
      <ServerPanel />
      <ClientPanel />
    </>
  );
}
```

This is the normal pattern in Next.js.

---

## What to Test

Run the app:

```bash
npm run dev
```

Open `/server-vs-client` and verify:

- the server example renders a fresh timestamp on request
- the client example can increment a counter
- the browser user agent is visible only through the client component
- the comparison table explains what belongs on each side

---

## Common Pitfalls

### Forgetting `"use client"`

If a component uses `useState`, `useEffect`, or event handlers, it must be a client component.

### Trying to use `window` in a server component

This fails because `window` only exists in the browser.

### Fetching secrets in the client

Anything in client-side code can be inspected by users. Keep secrets and database access on the server.

### Making everything a client component

That works, but it throws away one of the biggest advantages of Next.js. Default to server components and move to the client only when interactivity is required.

---

## Next Step

Move on to Stage 5 (Providers & Context), then Stage 6 for focused React hook examples: `useState`, `useEffect`, `useCallback`, `useActionState`, and debounce.
