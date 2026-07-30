// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dcwcost.com',
  output: 'static',
  integrations: [sitemap()],
  build: {
    // Emit static files to ./dist (Astro default) for Netlify to publish.
    format: 'directory',
  },
});
