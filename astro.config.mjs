import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://2025.eddn.dev',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});