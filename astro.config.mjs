// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

// Set PUBLIC_SITE_URL to the final HTTPS domain before the production build.
const { PUBLIC_SITE_URL: site } = loadEnv(process.env.NODE_ENV ?? '', process.cwd(), 'PUBLIC_');

export default defineConfig({
  site,
  integrations: [react(), ...(site ? [sitemap()] : [])],
  vite: {
    plugins: [tailwindcss()]
  }
});
