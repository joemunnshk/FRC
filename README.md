# FRC

Monorepo for the FRC team website.

## Structure

- `apps/web` — the public website (static, built with Vite + TanStack Router, deployed to GitHub Pages)
- `apps/admin` — (coming soon) a local-only editor for updating the website's content
- `packages/` — shared code (empty for now)

## Getting started

```bash
npm install
npm run dev --workspace=apps/web
```

Then open the URL shown in the terminal (something like `http://localhost:5173/FRC/`).
