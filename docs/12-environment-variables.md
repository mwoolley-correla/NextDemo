# Stage 12: Environment Variables and .env Files

## Overview

This stage explains how environment variables work in a Next.js App Router project, where .env files should live, and how values are consumed safely on the server versus the client.

Time to complete: 15-20 minutes  
Prerequisites: Stages 1-11 complete  
Status: Complete

---

## Why This Matters

Environment variables let you configure behavior without hardcoding sensitive values in source code.

Typical use cases:

- database URLs
- API keys
- feature flags
- public app configuration like app name or analytics IDs

The key rule is simple:

- secrets stay server-only
- browser-visible values must use the NEXT_PUBLIC_ prefix

---

## .env File Conventions

At the project root, Next.js can load values from these files:

- `.env` for shared defaults
- `.env.local` for local machine values and secrets
- `.env.production` for production-specific values

In this repo, `.gitignore` ignores `.env*`, which helps prevent accidental commits of secrets.

---

## Step-by-Step

### Step 1: Add local values

Create `.env.local` in the project root:

```bash
DEMO_SECRET=hello-from-server
NEXT_PUBLIC_DEMO_STAGE_NAME=Environment Stage
```

### Step 2: Consume on the server

Server components, route handlers, and server actions can read private values directly:

```ts
const secret = process.env.DEMO_SECRET;
```

This is safe because server code does not ship private values to the browser by default.

### Step 3: Consume on the client

Client components can only access values prefixed with `NEXT_PUBLIC_`:

```ts
const publicName = process.env.NEXT_PUBLIC_DEMO_STAGE_NAME;
```

Trying to read a private variable in client code returns `undefined`.

### Step 4: Restart after updates

When you change .env files, restart the dev server so Next.js reloads values.

---

## What To Test

1. Start the app with `npm run dev`.
2. Visit `/environment`.
3. Confirm the server panel shows `DEMO_SECRET`.
4. Confirm the client panel shows `NEXT_PUBLIC_DEMO_STAGE_NAME`.
5. Confirm `DEMO_SECRET` is `undefined` in the client panel.

---

## Common Pitfalls

### Forgetting the NEXT_PUBLIC_ prefix for client values

If a variable is needed in browser code, it must be named with `NEXT_PUBLIC_`.

### Putting secrets in NEXT_PUBLIC_ variables

Anything with that prefix is exposed to users. Never store private keys there.

### Not restarting the dev server

Env changes are often not reflected until you restart the process.

### Committing local secrets

Keep secrets in `.env.local` and avoid committing real credentials.

---

## Files Added In This Stage

- `app/environment/page.tsx`
- `components/organisms/EnvironmentClientPanel.tsx`
- `docs/12-environment-variables.md`
