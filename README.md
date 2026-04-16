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
| 2 | Pages & Layouts Architecture | /pages-and-layouts | [docs/02-pages-and-layouts.md](./docs/02-pages-and-layouts.md) |
| 3 | Routing & Landing Hub | /routing | [docs/03-routing-pages.md](./docs/03-routing-pages.md) |
| 4 | Server vs Client | /server-vs-client | [docs/04-server-vs-client.md](./docs/04-server-vs-client.md) |
| 5 | Providers & Context | /providers | [docs/05-providers.md](./docs/05-providers.md) |
| 6 | React Hooks | /hooks | [docs/06-react-hooks.md](./docs/06-react-hooks.md) |
| 7 | Server Actions vs API | /actions-vs-api | [docs/07-server-actions-vs-api.md](./docs/07-server-actions-vs-api.md) |
| 8 | Components & Atomic Design | /components-demo | [docs/08-components-atomic.md](./docs/08-components-atomic.md) |
| 9 | Database & Zod | /todos | [docs/09-database-zod.md](./docs/09-database-zod.md) |
| 10 | Logging & Telemetry | /monitoring | [docs/10-logging-telemetry.md](./docs/10-logging-telemetry.md) |
| 11 | MUI & Useful Packages | /mui-demo | [docs/11-useful-packages-mui.md](./docs/11-useful-packages-mui.md) |

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
		02-pages-and-layouts.md
		03-routing-pages.md
		04-server-vs-client.md
		05-providers.md
		06-react-hooks.md
		07-server-actions-vs-api.md
		08-components-atomic.md
		09-database-zod.md
		10-logging-telemetry.md
		11-useful-packages-mui.md
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
