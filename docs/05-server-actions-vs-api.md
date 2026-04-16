# Stage 5: Server Actions vs API Endpoints

## Overview

This stage compares two ways of running server-side logic in a Next.js app:

- server actions
- API endpoints

Both are valid. The important part is understanding the tradeoff.

Time to complete: 25-35 minutes  
Prerequisites: Stages 1-4 complete  
Status: Complete

---

## Core Difference

### Server actions

Server actions let a form call server code directly.

They are ideal when:

- the caller is your own Next.js app
- the interaction is form-based
- you want less client-side boilerplate

### API endpoints

API endpoints expose an HTTP interface.

They are ideal when:

- another client may call the endpoint later
- you want explicit request and response contracts
- you need HTTP methods and status codes

---

## Shared Logic

In this project, both flows use the same validation and processing function in `lib/demo-submission.ts`.

That is deliberate. The comparison should focus on transport and calling style, not duplicated business logic.

---

## Step-by-Step Implementation

### Step 1: Create shared processing logic

```ts
export async function processDemoSubmission(input, source) {
  // validate fields
  // simulate async work
  // return a consistent result object
}
```

This keeps validation behavior identical for both flows.

### Step 2: Create a server action

```ts
"use server";

export async function submitDemoViaServerAction(_previousState, formData) {
  const name = String(formData.get("name") ?? "");
  const topic = String(formData.get("topic") ?? "");
  return processDemoSubmission({ name, topic }, "server-action");
}
```

This action can be attached directly to a form with `useActionState`.

### Step 3: Create an API route

```ts
export async function POST(request: Request) {
  const body = await request.json();
  const result = await processDemoSubmission(body, "api");
  return NextResponse.json(result, { status: result.success ? 200 : 400 });
}
```

This exposes the same functionality over HTTP.

### Step 4: Build a side-by-side comparison UI

The page includes two forms:

- one submits through a server action
- one submits through `fetch("/api/demo")`

That makes the differences visible in real code.

---

## What to Test

Run the app:

```bash
npm run dev
```

Visit `/actions-vs-api` and test both forms.

Try these cases:

- valid input in both forms
- invalid name
- invalid topic
- compare pending states and returned messages
- open `/api/demo` directly and confirm the GET route returns JSON

---

## What Learners Should Notice

### Server action form

- no manual `fetch` call is needed
- the form can bind directly to server code
- state is managed nicely with `useActionState`

### API form

- there is an explicit HTTP call
- status codes and JSON responses matter
- the endpoint is reusable outside this app

---

## Common Pitfalls

### Duplicating business logic

Do not implement separate validation rules for server actions and API routes if the underlying behavior should match.

### Treating server actions like public APIs

Server actions are great inside your app, but they are not a general replacement for external HTTP endpoints.

### Adding unnecessary API routes

If only your own form needs the behavior, a server action is often simpler.

### Returning inconsistent shapes

Whether you use a server action or API route, keep the result shape predictable so the UI stays simple.

---

## Files Added in This Stage

- `lib/demo-submission.ts`
- `lib/actions/demo.ts`
- `components/organisms/ActionsVsApiDemo.tsx`
- `app/actions-vs-api/page.tsx`
- `app/api/demo/route.ts`

---

## Next Step

Move on to Stage 6 to build a reusable component system using atoms, molecules, and organisms.
