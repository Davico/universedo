import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://universedo.com', // Your domain (update after buying)
  integrations: [sitemap()],
});