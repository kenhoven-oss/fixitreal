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

- Local: edit `.env.local` (gitignored, never committed).
- Production / Preview: set in the Vercel dashboard → Settings → Environment Variables.
- `.env.local.example` is committed and documents every variable the app reads.

Never put secrets in code, in `src/content/`, or in any file without `.local` in its name.

## Deployment

`main` branch auto-deploys to Vercel. Preview deploys are created for every pull request.

## Multi-PC setup

Any computer needs: Git, Node.js LTS, GitHub auth (SSH key or PAT), and an editor. Clone with `git clone git@github.com:kenhoven-oss/fixitreal.git`, then `npm install`, then `cp .env.local.example .env.local`. Nothing else is required — no assets live outside the repo.
