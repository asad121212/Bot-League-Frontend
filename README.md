# Bot League — frontend replica

A frontend-only replica of the Bot League landing page, built with React,
TypeScript, and Tailwind CSS. No backend, no API calls — all data is static
mock data in `src/data/siteData.ts`.

## Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite (build tool / dev server)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Project structure

```
src/
  components/
    layout/         Navbar, Logo
    hero/            Hero section, live badge
    competitions/    Events section: bracket, upcoming cards, past results
    ui/              Shared primitives: Button, SectionHeading
  data/
    siteData.ts      Mock nav links, events, results, bracket data
  types/
    index.ts         Shared TypeScript interfaces
  App.tsx            Page composition
  main.tsx           React entry point
  index.css          Tailwind directives + base styles
```

## Notes

- All colors and spacing are defined as design tokens in `tailwind.config.ts`
  (`surface.*`, `brand.*`, `ink.*`) rather than hard-coded hex values, so the
  theme can be re-skinned from one place.
- The hero's arena backdrop is built from layered CSS gradients rather than a
  photo, since this is a frontend-only, asset-free build — swap in a real
  image by replacing the `style` block in `Hero.tsx` with a `background-image`.
- Every interactive element (register, login, watch live) is wired to a
  no-op handler or `console.info` call — replace these with real handlers /
  routing when a backend exists.
