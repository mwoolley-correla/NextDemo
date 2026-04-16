# Stage 9: Database & Zod

## Overview

This stage adds persistence and validation to the demo project.

- SQLite stores todo data on disk
- Zod validates user input before it reaches the database
- server actions mutate the data and revalidate the page

Time to complete: 30-45 minutes  
Prerequisites: Stages 1-6 complete  
Status: Complete

---

## Why SQLite Here

SQLite is a good teaching database because:

- it requires no separate server process
- it persists data to a local file
- it works well for demos and prototypes
- it reduces setup friction compared to Postgres for beginners

The database file for this project lives in `data/nextdemo.sqlite`.

---

## Why Zod Here

Zod validates data before writing it to the database.

That means bad input gets rejected early and consistently.

Example rule in this project:

- todo titles must be at least 3 characters long
- todo titles must stay under 120 characters

---

## Step-by-Step Implementation

### Step 1: Install dependencies

```bash
npm install better-sqlite3 zod
```

### Step 2: Create schemas

Create `lib/db-schema.ts`.

```ts
export const todoCreateSchema = z.object({
  title: z.string().trim().min(3).max(120),
});
```

This becomes the validation layer between the form and the database.

### Step 3: Create the database module

Create `lib/db.ts`.

Responsibilities:

- create the `data/` directory if needed
- open the SQLite database file
- create the `todos` table if it does not exist
- expose helper functions for list/create/toggle/delete

### Step 4: Add server actions

Create `lib/actions/todos.ts`.

Use server actions to:

- validate input with Zod
- insert rows into SQLite
- toggle completion
- delete rows
- call `revalidatePath("/todos")`

### Step 5: Build the page

Create a page that:

- shows a create form
- renders persisted todos from SQLite
- uses server actions for mutations
- displays validation errors from Zod

---

## What to Test

Run the app:

```bash
npm run dev
```

Visit `/todos` and verify:

- adding a valid todo creates a row
- invalid short titles show a validation message
- refreshing the page keeps the data
- toggling a todo updates completion state
- deleting a todo removes it permanently

---

## Common Pitfalls

### Writing to the database from a client component

Database access must stay on the server.

### Skipping validation

Never trust raw form input. Validate before you write.

### Forgetting `revalidatePath`

If you mutate the database but do not revalidate, the page may continue showing stale data.

### Picking a heavy database setup too early

For a learning project, SQLite is enough to teach persistence, validation, and server-side data flow.

---

## Files Added in This Stage

- `lib/db-schema.ts`
- `lib/db.ts`
- `lib/actions/todos.ts`
- `components/organisms/TodoCreateForm.tsx`
- `app/todos/page.tsx`
- `data/nextdemo.sqlite` after first write

---

## Next Step

Move on to Stage 8 to add structured logging and simple telemetry around the server-side work you now have in the app.
