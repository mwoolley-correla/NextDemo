# Next.js Demo

An educational, stage-based project that teaches core Next.js and React concepts through a single application.

## Overview

This repository uses Next.js App Router, React 19, TypeScript strict mode, Tailwind CSS, and Material UI.
Each stage includes:

- runnable UI in the app
- supporting written documentation in docs
- practical patterns for server/client boundaries, actions, routing, and data

## Stages

| # | Stage | Route | Documentation |
|---|---|---|---|
| 1 | Setup & Housekeeping | /setup | [docs/01-setup.md](./docs/01-setup.md) |
| 2 | Pages & Layouts Architecture | /pages-and-layouts | [docs/10-pages-and-layouts.md](./docs/10-pages-and-layouts.md) |
| 3 | Routing & Landing Hub | /routing | [docs/02-routing-pages.md](./docs/02-routing-pages.md) |
| 4 | Server vs Client | /server-vs-client | [docs/03-server-vs-client.md](./docs/03-server-vs-client.md) |
| 5 | React Hooks | /hooks | [docs/04-react-hooks.md](./docs/04-react-hooks.md) |
| 6 | Server Actions vs API | /actions-vs-api | [docs/05-server-actions-vs-api.md](./docs/05-server-actions-vs-api.md) |
| 7 | Components & Atomic Design | /components-demo | [docs/06-components-atomic.md](./docs/06-components-atomic.md) |
| 8 | Database & Zod | /todos | [docs/07-database-zod.md](./docs/07-database-zod.md) |
| 9 | Logging & Telemetry | /monitoring | [docs/08-logging-telemetry.md](./docs/08-logging-telemetry.md) |
| 10 | MUI & Useful Packages | /mui-demo | [docs/09-useful-packages-mui.md](./docs/09-useful-packages-mui.md) |

Home route: /

## Tech Stack

- Next.js 16.2.4
- React 19.2.4
- TypeScript 5 (strict mode enabled)
- Tailwind CSS 4
- Material UI 9 with Emotion
- better-sqlite3
- zod

## Quick Start

Prerequisites:

- Node.js (current LTS recommended)
- npm

Install and run:

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Commands

```bash
npm run dev
npm run build
npm start
npx tsc --noEmit
```

## Project Structure

```text
nextdemo/
	app/
		layout.tsx
		page.tsx
		globals.css
		setup/
		routing/
		server-vs-client/
		hooks/
		actions-vs-api/
		components-demo/
		todos/
		monitoring/
		mui-demo/
		pages-and-layouts/
		api/demo/route.ts
	components/
		atoms/
		molecules/
		organisms/
		providers/
	docs/
		01-setup.md
		02-routing-pages.md
		03-server-vs-client.md
		04-react-hooks.md
		05-server-actions-vs-api.md
		06-components-atomic.md
		07-database-zod.md
		08-logging-telemetry.md
		09-useful-packages-mui.md
		10-pages-and-layouts.md
	lib/
		actions/
		db.ts
		db-schema.ts
		theme.ts
		logging.ts
		telemetry.ts
```

## Notes

- Dark mode base page background is controlled globally in app/globals.css.
- The root wrapper for all pages is app/layout.tsx.
- Stage 1 has its own dedicated route at /setup in addition to the written setup guide.

## License

MIT
