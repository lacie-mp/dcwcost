# DCW Cost

Marketing website for **DCW Cost**, an independent construction
cost-management consultancy. Built with [Astro](https://astro.build).

## Pages

| Route        | Description                                             |
| ------------ | ------------------------------------------------------- |
| `/`          | Home — hero, key stats, services overview, process      |
| `/about`     | About — company story, values, and leadership team      |
| `/projects`  | Projects — selected engagements across sectors          |
| `/services`  | Services — six service areas and engagement models      |
| `/contact`   | Contact — enquiry form and direct contact details       |

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
