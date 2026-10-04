import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://aiforglobalgood.org',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
