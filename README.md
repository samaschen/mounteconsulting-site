# MountE Consulting — site

Marketing site for [MountE Consulting](https://mounteconsulting.com) (data science, Retool/low-code, marketing mix modeling). Built with **Next.js** (App Router), **React**, **TypeScript**, and **Tailwind CSS**.

There is no automated test suite in this repo yet; “testing locally” means running the dev server, exercising pages in the browser, linting, and optionally doing a production build/run.

---

## Prerequisites

- **Node.js** 18.18+ or 20 LTS (recommended), matching [Next.js 15 requirements](https://nextjs.org/docs/app/getting-started/installation)
- **npm** (comes with Node)

---

## Quick start (npm — recommended)

From the repository root:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The home page loads at `/`; the About page is at `/about`.

Hot reload is enabled via Turbopack (`next dev --turbopack`).

---

## Scripts

| Command        | Purpose |
|----------------|---------|
| `npm run dev`  | Development server (Turbopack) on port 3000 |
| `npm run build`| Production build (output in `.next/`) |
| `npm run start`| Serve the production build (run `build` first) |
| `npm run lint` | ESLint via `next lint` |

### What to run for a local “smoke test”

1. **Lint:** `npm run lint` — catches many TS/React issues and style rules.
2. **Dev UX:** `npm run dev` — click through `/`, `/about`, forms, and navigation.
3. **Production-like:**  
   `npm run build && npm run start`  
   Then visit [http://localhost:3000](http://localhost:3000) again to confirm the built app behaves as expected.

---

## Using Docker (optional)

There is no `Dockerfile` in this repo; the straightforward approach is to use the official Node image and the same npm commands inside a container.

**Development (bind-mount the project, isolate `node_modules` for Linux):**

```bash
docker run --rm -it \
  -v "$PWD":/app \
  -v /app/node_modules \
  -w /app -p 3000:3000 \
  node:22-bookworm \
  bash -c "npm install && npm run dev -- --hostname 0.0.0.0"
```

`--hostname 0.0.0.0` makes the dev server reachable from your machine on port 3000.

**Production build check inside Docker:**

```bash
docker run --rm -it \
  -v "$PWD":/app \
  -v /app/node_modules \
  -w /app -p 3000:3000 \
  node:22-bookworm \
  bash -c "npm ci && npm run build && npm run start -- --hostname 0.0.0.0"
```

If you already have `node_modules` on the host and hit native-addon issues, remove `node_modules` and rely on `npm install` inside the container only, or keep the anonymous `/app/node_modules` volume as above.

---

## Project layout (high level)

- `src/app/` — App Router pages (`page.tsx`, `layout.tsx`, `about/`)
- `src/components/` — UI components (navbar, footer, contact form, etc.)
- `src/lib/content.ts` — Site copy and metadata

---

## License / privacy

This repository is private (`"private": true` in `package.json`). Adjust as needed for your org.
