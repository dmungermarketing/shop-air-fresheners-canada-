import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production domain — used for canonical URLs, sitemap, OG tags.
export default defineConfig({
  site: 'https://shopairfresheners.ca',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
