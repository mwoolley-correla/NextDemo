# Next.js & React Demo Project

A comprehensive, hands-on educational project demonstrating core concepts of **Next.js 15+** and **React 19** for developers new to both frameworks.

## 🎯 Project Goal

This project guides learners through 9 progressive stages, building a single cumulative application that showcases real-world Next.js and React patterns. Each stage includes:

- **Runnable code** - A working feature you can test immediately
- **Detailed documentation** - Step-by-step implementation with code snippets
- **Interactive examples** - Hands-on demos embedded in the web app
- **Best practices** - Production-ready patterns explained

## 📚 Stages

| # | Stage | Focus | Status |
|---|-------|-------|--------|
| 1 | [Setup & Housekeeping](./docs/01-setup.md) | Project init, TypeScript, folder structure | ✅ Current |
| 2 | Routing & Landing Hub | File-based routing with App Router | 🔜 Coming |
| 3 | Server vs Client | What works where and why | 🔜 Coming |
| 4 | React Hooks | useState, useEffect, useCallback, useActionState, debounce | 🔜 Coming |
| 5 | Server Actions vs API | When and why to use each | 🔜 Coming |
| 6 | Components & Atomic Design | Reusable component library | 🔜 Coming |
| 7 | Database & Zod | SQLite with validation | 🔜 Coming |
| 8 | Logging & Telemetry | Structured logging and monitoring | 🔜 Coming |
| 9 | MUI & Useful Packages | Material-UI styling and libraries | 🔜 Coming |

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+**
- **npm 9+**

Verify installation:
```bash
node --version  # Should be 18 or higher
npm --version   # Should be 9 or higher
```

### Installation

```bash
# Clone or navigate to this project
cd nextdemo

# Install dependencies (if not already installed)
npm install

# Start the development server
npm run dev
```

Visit **http://localhost:3000** in your browser.

### Available Commands

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Check for TypeScript errors
npx tsc --noEmit
```

## 📁 Project Structure

```
nextdemo/
├── app/                    # Next.js App Router routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (demo hub)
│   ├── globals.css        # Global styles
│   └── (future routes)    # Route groups for each stage
├── components/            # Reusable UI components
│   ├── atoms/            # Basic building blocks (Button, Input, etc.)
│   ├── molecules/        # Combinations of atoms (Form, Card, etc.)
│   └── organisms/        # Complex components (Sidebar, Header, etc.)
├── lib/                   # Utility functions and server code
│   ├── actions/          # Server actions
│   ├── db.ts             # Database setup (Stage 7)
│   ├── logging.ts        # Logging utilities (Stage 8)
│   └── theme.ts          # MUI theme (Stage 9)
├── docs/                  # Documentation for each stage
│   ├── 01-setup.md
│   ├── 02-routing-pages.md
│   ├── 03-server-vs-client.md
│   └── ... (through Stage 9)
├── public/                # Static assets (images, fonts)
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies
├── postcss.config.mjs      # CSS processing
└── tailwind.config.ts     # Tailwind CSS configuration
```

## 🎓 How to Use This Project

### For Learners

1. **Read the Documentation**: Start with [Stage 1 docs](./docs/01-setup.md)
2. **Follow the Code**: Each stage has code in the `app/` folder
3. **Interact with Examples**: Visit `/stage-N` routes to see live demos
4. **Experiment**: Modify code and see changes instantly (hot reload)

### For Instructors

- Each stage is self-contained with clear prerequisites
- Documentation includes explanation, implementation, and pitfalls
- Code examples are production-ready but intentionally simple
- Can be taught linearly or individual stages can be skipped

## 🛠 Technologies Used

- **Next.js 15+** - React framework with file-based routing
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **SQLite** - Database (Stage 7)
- **Zod** - Type-safe validation (Stage 7)
- **Material-UI** - Component library (Stage 9)

## 📖 Key Concepts Covered

### Next.js Concepts
- ✅ App Router (file-based routing)
- ✅ Server Components vs Client Components
- ✅ Server Actions
- ✅ API Routes
- ✅ Dynamic routes and params
- ✅ Metadata and SEO

### React Concepts
- ✅ Functional components
- ✅ Hooks (useState, useEffect, useCallback, useActionState)
- ✅ State management
- ✅ Event handling
- ✅ Forms and validation
- ✅ Component composition

### Full-Stack Concepts
- ✅ Database integration (SQLite)
- ✅ Data validation (Zod)
- ✅ API design
- ✅ Error handling
- ✅ Logging and telemetry
- ✅ Component libraries and theming

## ⚙️ TypeScript Strict Mode

This project runs in **strict TypeScript mode**, catching potential bugs at compile time:

```bash
# Check for any TypeScript errors
npx tsc --noEmit
```

## 🐛 Troubleshooting

### "Port 3000 already in use"
```bash
npm run dev -- -p 3001
```

### "npm command not found"
Node.js or npm isn't installed. Download from https://nodejs.org/

### "TypeScript errors in files I didn't modify"
This is expected with strict mode. The errors are real and should be fixed!

## 📚 Additional Resources

- [Next.js Official Docs](https://nextjs.org/docs)
- [React Official Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🤝 Contributing

This is an educational project. Suggestions and improvements are welcome!

## 📝 License

This project is open source and available under the MIT License.

---

## 🎬 Getting Started

1. Read [Stage 1: Setup & Housekeeping](./docs/01-setup.md) - It walks through the entire setup process
2. Run `npm run dev` to start the development server
3. Visit http://localhost:3000 to see the demo hub
4. Navigate to each stage as you complete the documentation

**Happy learning! 🚀**
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
