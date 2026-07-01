# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A minimal Next.js (App Router) site that renders two Korean-language markdown documents as a tabbed viewer. There is no backend, database, or API — it's a static doc viewer deployed to Vercel.

## Commands

```
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # run production build
npm run lint     # next lint
```

There is no test suite configured in this repo.

## Architecture

- `app/page.tsx` is a server component that reads two markdown files directly off disk at request time via `fs.readFileSync`, from the `Instructions/` directory at the repo root (not `app/`):
  - `Instructions/claude-code-education-guide.md`
  - `Instructions/사전학습_및_유의사항.md`
- It passes both as `{ label, content }` tab objects into `app/components/DocTabs.tsx`, a client component that handles tab switching and renders the active markdown via `react-markdown` + `remark-gfm`.
- To add/change a doc tab, edit the `fs.readFileSync` calls and `tabs` array in `app/page.tsx` — the markdown files themselves live in `Instructions/`.
- Styling is a single global stylesheet at `app/globals.css` (dark theme, CSS custom properties in `:root`), targeting the `.site-header`, `.tabs`, `.tab-btn`, and `.doc-content` (markdown output) class names. There is no CSS-in-JS or per-component styling.
- `index.html` and `main.css` at the repo root are standalone leftovers, not wired into the Next.js app (Next does not serve root-level `index.html`) — don't assume they render anywhere.

## Notes

- `Instructions/*.md` are the source of truth for on-site content and are also linked directly from `README.md`; if you edit their content, both the rendered site and the README's links stay in sync since the README just links to the GitHub-rendered file.
- Deployed on Vercel; see the link in `README.md` for the live URL.
