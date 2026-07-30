// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dcwcost.com',
  output: 'static',
  build: {
    // Emit static files to ./dist (Astro default) for Netlify to publish.
    format: 'directory',
  },
});
