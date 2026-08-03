# FRC

Monorepo for the FRC team website.

## Structure

- `apps/web` — the public website (static, built with Vite + TanStack Router, deployed to GitHub Pages)
- `apps/admin` — a local-only editor for updating the website's content
- `packages/` — shared code (empty for now)

## Getting started

```bash
npm install
```

**To preview the public website:**

```bash
npm run dev:web
```

Then open the URL shown in the terminal (something like `http://localhost:5173/FRC/`).

**To edit the website's content:**

```bash
npm run dev:admin
```

Open the URL shown in the terminal (something like `http://localhost:5173/`), make your edits, and click Save.
Then refresh the web app (above) to see the change locally.

## Publishing changes

The website is deployed automatically to GitHub Pages whenever changes to `apps/web` are pushed to the `main` branch.
So after editing content with the admin app, commit and push the change to publish it:

```bash
git add apps/web/src/data
git commit -m "Update site content"
git push
```
