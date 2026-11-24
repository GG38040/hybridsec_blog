import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hybridsec.org',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.endsWith('/search/') && !page.endsWith('/newsletter-success/')
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
