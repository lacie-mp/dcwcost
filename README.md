# DCW Cost Management

Marketing website for **DCW Cost Management** — an independent, owner-centered
cost and construction management firm serving the Pacific Northwest since 2014.
Women-owned and WBE/WOSB certified.

Built with [Astro](https://astro.build) and deployed on
[Netlify](https://www.netlify.com).

## Pages

| Route        | Description                                                        |
| ------------ | ------------------------------------------------------------------ |
| `/`          | Home — firm overview, two service pillars, process, featured work  |
| `/about`     | Firm story, values, and leadership team                            |
| `/services`  | Cost Management and Construction Management service pillars         |
| `/projects`  | Landmark projects with sector, client, and DCW's role              |
| `/contact`   | Offices, phone, email, and an enquiry form                         |

## Local development

```bash
npm install     # install dependencies
npm run dev     # start the dev server at http://localhost:4321
npm run build   # build the static site to ./dist
npm run preview # preview the production build locally
```

## Deployment

Netlify builds with `npm run build` and publishes the `dist/` directory
(see `netlify.toml`). The contact form uses Netlify Forms
(`data-netlify="true"`).
