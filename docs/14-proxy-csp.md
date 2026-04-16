# Stage 14: Proxy File, CSP, and Security Headers

## Overview

This stage introduces `proxy.ts` as a central location for request-time concerns such as security headers, nonce generation, cache-control strategy, and Content Security Policy (CSP) rollout.

Time to complete: 20-30 minutes  
Prerequisites: Stages 1-13 complete  
Status: Complete

---

## Why Use proxy.ts

`proxy.ts` runs before route handlers and pages, making it useful for cross-cutting concerns:

- inject request metadata (for example a nonce)
- apply consistent security headers
- manage CSP policy in one place
- split report-only versus enforced policies by environment variables

This keeps security concerns out of individual page files.

---

## What Was Added

A root-level `proxy.ts` file with:

- nonce creation per request
- CSP generation helper
- `Content-Security-Policy-Report-Only` by default
- optional enforcement via `CSP_ENFORCE=true`
- additional headers:
  - `X-Content-Type-Options`
  - `Referrer-Policy`
  - `X-Frame-Options`
  - `Permissions-Policy`

---

## Key CSP Topics

### 1. Nonce-based script policy

A unique nonce is generated per request and attached to headers. This supports safer script execution than broad `'unsafe-inline'` allowances.

### 2. Report-only rollout

Start with report-only mode to detect violations without breaking pages.

### 3. Enforcement toggle

Set this in `.env.local` to enforce CSP:

```bash
CSP_ENFORCE=true
```

### 4. Directive hardening over time

Begin with practical defaults, then tighten `script-src`, `style-src`, and `connect-src` as dependencies are understood.

### 5. Matcher scoping

Exclude static asset routes to avoid unnecessary overhead and accidental breakage of framework internals.

---

## Suggested .env.local Values

```bash
CSP_ENFORCE=false
```

Use `false` during setup and testing. Switch to `true` only after violations are handled.

---

## What To Test

1. Run `npm run dev`.
2. Visit `/proxy-csp` and confirm the mode label changes based on `CSP_ENFORCE`.
3. Open browser dev tools and verify CSP header appears on document requests.
4. Confirm app routes still render normally.
5. If enforcing, confirm no critical scripts/styles are blocked.

---

## Common Pitfalls

### Enforcing CSP too early

Starting directly in enforced mode can break pages before directives are tuned.

### Forgetting third-party origins

If you use external analytics/CDNs, their origins must be allowed in specific directives.

### Overusing unsafe directives

Avoid broad allowances such as unrestricted `'unsafe-inline'` or wildcard sources.

### Not versioning policy changes

Track CSP edits like code changes so regressions are easy to diagnose.

---

## Files Added In This Stage

- `proxy.ts`
- `app/proxy-csp/page.tsx`
- `docs/14-proxy-csp.md`
