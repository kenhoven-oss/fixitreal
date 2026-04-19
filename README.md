# FixItReal.com

Next.js 16 + TypeScript + Tailwind 4, deployed to Vercel from `main`.

## Local development

```bash
npm install
cp .env.local.example .env.local   # fill in values as needed
npm run dev
```

Dev server runs on http://localhost:3000.

## Scripts

- `npm run dev` — start dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — serve the production build locally
- `npm run lint` — ESLint

## Project layout

```
src/
  app/                  # Next.js App Router routes
  components/           # Reusable UI components (Header, Footer, ...)
  content/site.ts       # Site-wide config (name, domain, nav)
  lib/
    env.ts              # Env var access with validation
    metadata.ts         # buildMetadata() helper for page-level <head>
    jsonld.ts           # JSON-LD schema helpers
```

Content lives in `.ts` files under `src/content/` — no CMS.

## Environment variables

Two places variables live:

- **Local dev:** `.env.local` (gitignored; never committed).
- **Vercel (preview + production):** project → Settings → Environment Variables.

Workflow for adding a new variable (e.g. a Stripe key):

1. Add the key to `.env.local.example` with an empty value, and the real value to `.env.local`.
2. Add it to `src/lib/env.ts` so the app reads it through a typed accessor. Mark `required: true` for server-side secrets.
3. In Vercel → Settings → Environment Variables, add the same key with its real value. Tick **Production**, **Preview**, and optionally **Development**.
4. Commit `.env.local.example` + `env.ts` changes. Next push redeploys with the new var.

Never put secrets in code, in `src/content/`, or in any file without `.local` in its name. `NEXT_PUBLIC_` vars are exposed to the browser — only use that prefix for non-secret values.

## Deployment

`main` auto-deploys to production. Every pull request gets its own preview deployment at a `*.vercel.app` URL.

## Multi-PC setup

On any new machine:

1. Install **Git**, **Node.js LTS** (≥20), and an editor (VS Code is fine).
2. Make sure Git is authed to GitHub — HTTPS + Git Credential Manager (bundled with Git for Windows) is the path of least resistance; SSH also works.
3. `git clone https://github.com/kenhoven-oss/fixitreal.git`
4. `cd fixitreal && npm install`
5. `cp .env.local.example .env.local` (skip if no vars are needed yet)
6. `npm run dev`

Everything the app needs lives in the repo. No assets, configs, or secrets are stored only on any one machine.
