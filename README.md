# DCW Cost & Construction Management

Marketing website for **DCW Cost & Construction Management**, an independent,
women-owned and employee-owned cost and construction management consultancy
based in Seattle and Portland. Built with [Astro](https://astro.build).

## Pages

| Route        | Description                                                       |
| ------------ | ----------------------------------------------------------------- |
| `/`          | Home — positioning, stats, two service pillars, featured projects |
| `/about`     | About — the DCW story, EOT transition, values, and leadership     |
| `/services`  | Services — Cost Management and Construction Management breakdown   |
| `/projects`  | Projects — Colman Dock, University Link, Mount Vernon, and more    |
| `/contact`   | Contact — enquiry form plus Seattle & Portland office details     |

All pages share a common `Header` (sticky nav) and `Footer` via
`src/layouts/BaseLayout.astro`.

## Project structure

```
src/
  components/    # Header, Footer, CallToAction
  layouts/       # BaseLayout (html shell + header/footer)
  pages/         # One .astro file per route
  styles/        # global.css — design tokens & shared styles
public/          # favicon and static assets
```

## Commands

All commands are run from the project root:

| Command           | Action                                         |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Install dependencies                           |
| `npm run dev`     | Start the local dev server at `localhost:4321` |
| `npm run build`   | Type-check and build the site to `./dist/`     |
| `npm run preview` | Preview the production build locally           |

## Tech

- Astro (static output)
- TypeScript (strict)
- Hand-authored CSS with a small design-token system (no UI framework)
