<div align="center">

# rahul_kannan.sys

Personal portfolio — Next.js 14 (App Router) + TypeScript + Tailwind CSS

</div>

---

## About

A terminal/embedded-systems-themed portfolio site: a boot-sequence intro,
a `neofetch`-style hero readout, and project cards styled like component
datasheets. Built to showcase work spanning embedded systems, full-stack
development, and applied AI/ML.

## Stack

| | |
|---|---|
| Framework | [Next.js 14](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Font | [JetBrains Mono](https://www.jetbrains.com/lp/mono/) |
| Hosting | [Vercel](https://vercel.com) |

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build locally
```

## Project structure

```
app/
  layout.tsx        # root layout, fonts, metadata
  page.tsx           # page content/sections
  globals.css        # design tokens, terminal texture
components/
  BootSequence.tsx    # intro boot animation
  SiteShell.tsx        # boot-state wrapper
  Nav.tsx               # status-bar style nav
  ProjectCard.tsx        # datasheet-style project card
data/
  site.ts             # name, role, contact, external links
  projects.ts           # project entries
  skills.ts               # skills + coursework
```

## Editing content

All copy lives in `data/`, not scattered through components:

- **`data/site.ts`** — name, role, status line, email, and external links
- **`data/projects.ts`** — project cards (tag, description, stack, status)
- **`data/skills.ts`** — skill groups and coursework

## Deploying

This is a standard Next.js app and deploys to Vercel with zero config:

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com/new), import the repo — the Next.js
   preset is auto-detected.
3. Click **Deploy**.
4. Add a custom domain under **Project Settings → Domains** and follow
   the DNS instructions for your registrar.

## Accessibility notes

- The boot sequence respects `prefers-reduced-motion` and is skippable
  (`Esc` or the on-screen button); it only plays once per session.
- Interactive elements have visible focus states.

## License

Personal project — feel free to use the structure/approach as a reference,
but please don't reuse the content or copy verbatim.
