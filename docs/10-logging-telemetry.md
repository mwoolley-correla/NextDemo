# Stage 8: Logging & Telemetry
# Stage 10: Logging & Telemetry

This stage adds lightweight observability to the demo project.
# Stage 8: Logging & Telemetry

## Overview

This stage adds lightweight observability to the demo project.

- structured logs record what happened
- telemetry records how long important operations took
- a monitoring page shows the latest in-memory entries

Time to complete: 20-30 minutes  
Prerequisites: Stages 1-7 complete  
Status: Complete

---

## Logging vs Telemetry

### Logging

Logs answer questions like:

- what happened?
- when did it happen?
- what context was attached?

### Telemetry

Telemetry answers questions like:

- how long did the action take?
- which route produced the timing?
- are some operations getting slower?

---

## Implementation Approach

This project uses simple in-memory arrays to keep the example approachable.

That is enough to teach the concepts without introducing external services yet.

In a production app, these would usually flow to tools like:

- Sentry
- Datadog
- New Relic
- LogRocket
- OpenTelemetry-compatible backends

---

## Step-by-Step Implementation

### Step 1: Add a logger

Create `lib/logging.ts`.

Responsibilities:

- store recent log entries
- support levels like `info`, `warn`, and `error`
- optionally print to the server console

### Step 2: Add telemetry helpers

Create `lib/telemetry.ts`.

Responsibilities:

- store recent timing entries
- wrap async work with a measurement helper
- attach metadata like route names

### Step 3: Instrument real actions

Instrument the existing server-side flows:

- todo creation
- todo toggle
- todo deletion
- API route calls

This is better than fake demo instrumentation because learners can trigger it themselves.

### Step 4: Build the monitoring page

Create `app/monitoring/page.tsx`.

Show:

- recent log entries
- recent telemetry samples
- a short explanation of where the data comes from

---

## What to Test

Run the app:

```bash
npm run dev
```

Then:

1. create or delete todos on `/todos`
2. submit either form on `/actions-vs-api`
3. visit `/monitoring`
4. confirm logs and telemetry entries appear

---

## Common Pitfalls

### Logging nothing useful

A log message without context often becomes noise. Include relevant IDs, route names, and outcomes.

### Measuring the wrong scope

Telemetry should wrap the specific operation you care about, not arbitrary large blocks with unrelated work.

### Assuming in-memory data is durable

These demo logs reset when the server restarts. That is expected in this example.

### Instrumenting too late

Add logs and timings near the business action itself so they stay close to the real behavior.

---

## Files Added in This Stage

- `lib/logging.ts`
- `lib/telemetry.ts`
- `app/monitoring/page.tsx`

---

## Next Step

Move on to Stage 9 to integrate Material UI and show how a component library can sit alongside your own reusable components.
