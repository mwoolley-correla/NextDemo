# Stage 13: Middleware Concepts and Implementation

## Overview

This stage explains middleware in Next.js: what it is, when to use it, and how it is implemented in this project.

In this repository, middleware behavior is implemented via `proxy.ts`, which runs on incoming requests before route handlers and pages.

Time to complete: 20-30 minutes  
Prerequisites: Stages 1-12 complete  
Status: Complete

---

## What Middleware Does

Middleware is best for request-level, cross-cutting concerns:

- redirects and rewrites
- adding or normalizing headers
- auth gate checks
- security policy application
- lightweight request shaping

It is not intended for heavy data fetching or complex business workflows.

---

## How It Is Implemented In This Repo

The project uses root `proxy.ts` with:

- a `proxy(request)` function
- a matcher that excludes framework static/image assets
- request header enrichment (nonce)
- response security headers and CSP policy mode

This provides one centralized interception layer for most app routes.

---

## Minimal Implementation Pattern

```ts
import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("X-Example", "middleware-layer");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
```

---

## Decision Guide: Middleware vs Route Handler

Use middleware/proxy when:

- behavior should apply to many routes
- you need early redirects/rewrites
- you are applying global request/response headers

Use route handlers or server actions when:

- logic is feature-specific
- operation is heavy or stateful
- you need direct data access and domain workflow handling

---

## What To Test

1. Run `npm run dev`.
2. Visit `/middleware`.
3. Confirm global routes still load and static assets are unaffected.
4. Inspect network response headers to verify middleware/proxy output.
5. Confirm matcher scope behaves as expected.

---

## Common Pitfalls

### Putting heavy logic in middleware

Keep middleware fast to avoid adding latency to every request.

### Overbroad matcher patterns

If matcher catches framework internals, pages or assets can break unexpectedly.

### Mixing concerns

Use middleware for cross-cutting concerns only. Keep feature logic in route-level code.

### Forgetting runtime behavior

Middleware-like layers run per request, so design for predictable and cheap execution.

---

## Files Added In This Stage

- `app/middleware/page.tsx`
- `docs/13-middleware.md`
