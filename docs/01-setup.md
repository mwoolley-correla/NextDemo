# Stage 1: Project Setup & Housekeeping

## Overview

In this stage, we'll set up a fresh Next.js 15+ project with all necessary dependencies, configure TypeScript for strict mode, and organize our folder structure to support the remaining stages.

**Time to complete**: 15-20 minutes  
**Prerequisites**: Node.js 18+ and npm installed  
**Status**: ✅ Complete

---

## Concepts & Theory

### What is Next.js?

Next.js is a React framework built on top of Node.js that simplifies building full-stack web applications. It provides:

- **File-based routing**: Automatically creates routes based on your folder structure (no need to configure routes manually)
- **Server and Client Components**: Write code that runs on the server, client, or both
- **API Routes & Server Actions**: Create backend endpoints without a separate server
- **Optimized Performance**: Built-in image optimization, code splitting, and more
- **TypeScript Support**: Full TypeScript integration out of the box

### Why This Matters

A well-organized project structure from the start prevents technical debt and makes future features easier to add. We're setting up:

1. **TypeScript strict mode** - Catches errors early
2. **Proper folder hierarchy** - Separates concerns (components, utilities, routes)
3. **Tailwind CSS** - Utility-first CSS framework for rapid styling
4. **ESLint ready** - Code quality checks (optional but recommended)

---

## Prerequisites

Before starting, ensure you have:

- **Node.js 18.17** or newer
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)
- Basic command line familiarity

### Verify Installation

```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version (should be 9+)
npm --version
```

---

## Step-by-Step Implementation

### Step 1: Create a New Next.js Project

```bash
# Navigate to your projects folder (adjust path as needed)
cd /path/to/projects

# Create a new Next.js app with our preferences
npx create-next-app@latest nextdemo \
  --typescript \
  --tailwind \
  --app \
  --no-eslint \
  --import-alias '@/*'
```

**What these flags mean:**
- `--typescript` - Enable TypeScript
- `--tailwind` - Install Tailwind CSS for styling
- `--app` - Use the modern App Router (not Pages Router)
- `--no-eslint` - We'll skip ESLint for now (can add later)
- `--import-alias '@/*'` - Enable clean imports like `@/components/...`

**Expected output:**
```
✔ Would you like to use ESLint? … No
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like your code inside a `src/` directory? … No
✔ Would you like to use App Router? … Yes
✔ Would you like to use Turbopack for `next dev`? … No
✔ Would you like to customize the import alias? … Yes

Creating a new Next.js app in /path/to/projects/nextdemo...
Success! Created nextdemo at /path/to/projects/nextdemo
```

### Step 2: Navigate to Project & Install Dependencies

```bash
cd nextdemo

# Install all dependencies
npm install
```

**Expected output:**
```
added 98 packages, and audited 99 packages in 58s
found 0 vulnerabilities
```

### Step 3: Verify Project Structure

After setup, your project should look like this:

```
nextdemo/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── .gitignore
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies
├── postcss.config.mjs       # CSS processing config
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md
```

### Step 4: Create Additional Folder Structure

We'll organize code into logical sections:

```bash
# Create folders for organized code
mkdir -p components/atoms components/molecules components/organisms
mkdir -p lib/actions
mkdir -p docs
```

**What each folder does:**
- `components/` - Reusable UI components (atoms, molecules, organisms)
- `lib/` - Utility functions, database code, server actions
- `docs/` - Documentation for each stage
- `public/` - Static files (images, fonts)
- `app/` - All routes and pages (Next.js App Router)

### Step 5: Configure TypeScript (Strict Mode)

Check `tsconfig.json` and ensure strict mode is enabled:

```json
{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitAny": true,
    // ... other options
  }
}
```

This catches potential bugs at compile time rather than runtime.

### Step 6: Start the Development Server

```bash
npm run dev
```

**Expected output:**
```
  ▲ Next.js 16.2.4
  - Local:        http://localhost:3000
  - Environments: .env.local

 ✓ Ready in 2s
```

Visit `http://localhost:3000` in your browser—you should see the Next.js welcome page.

### Step 7: Test the Build

```bash
# Press Ctrl+C to stop the dev server, then run:
npm run build

npm start
```

**Expected output from build:**
```
> next build

  ▲ Next.js 16.2.4
  Creating an optimized production build ...
  ✓ Compiled successfully
  ✓ Linting and checking validity of types
  ✓ Collecting page data
  ✓ Generating static pages (3/3)

Route (app)                              Size
...
✓ Build successful
```

---

## What to Test

### ✅ Visual Verification

1. **Dev server runs**: `npm run dev` starts without errors
2. **Page loads**: Visit `http://localhost:3000` and see the welcome page
3. **Hot reload works**: Edit `app/page.tsx`, save, and the browser refreshes automatically
4. **Build succeeds**: `npm run build` completes without errors

### ✅ TypeScript Verification

```bash
# Check for any TypeScript errors
npx tsc --noEmit
```

Expected output: No errors should be reported.

### ✅ Folder Structure

Verify all folders exist:

```bash
ls -la components/
ls -la lib/
ls -la docs/
```

---

## Common Pitfalls

### ❌ "npm: command not found"

**Problem**: Node.js/npm not installed correctly  
**Solution**:
1. Download from https://nodejs.org/ (LTS version)
2. Install and restart your terminal
3. Verify with `node --version` and `npm --version`

### ❌ "Port 3000 already in use"

**Problem**: Another process is using port 3000  
**Solution**:
```bash
# Run on a different port
npm run dev -- -p 3001
```

### ❌ TypeScript errors in existing files

**Problem**: `strict: true` catches errors that weren't caught before  
**Solution**: This is actually good! Fix the errors now rather than dealing with bugs later.

### ❌ "create-next-app failed"

**Problem**: Network issues or outdated npm cache  
**Solution**:
```bash
npm cache clean --force
npx create-next-app@latest nextdemo --typescript --tailwind --app
```

---

## Summary

You now have a production-ready Next.js project with:

- ✅ Latest Next.js 15+ with App Router
- ✅ TypeScript strict mode enabled
- ✅ Tailwind CSS for styling
- ✅ Organized folder structure
- ✅ Clean import aliases (`@/...`)
- ✅ Development server running

---

## Next Steps

Once you've verified everything works, move on to **Stage 2: Pages & Layouts Architecture**, then continue to **Stage 3: Routing & Landing Hub** to learn how file-based routing works and create a navigation hub for all demo pages.

---

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript in Next.js](https://nextjs.org/docs/app/building-your-application/configuring/typescript)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [App Router Guide](https://nextjs.org/docs/app)

---

## Troubleshooting

If you get stuck, check:

1. **Node.js version**: `node --version` (should be 18+)
2. **npm version**: `npm --version` (should be 9+)
3. **Folder permissions**: Ensure you have write access to the project directory
4. **Terminal**: Try a fresh terminal window
5. **Cache issues**: Run `npm cache clean --force` and try again

For more help, visit the [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions).
