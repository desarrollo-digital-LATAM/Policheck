// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from "vite";

// The production build must know the canonical URL so Astro can emit absolute SEO URLs.
const { PUBLIC_SITE_URL: site } = loadEnv(
  process.env.NODE_ENV ?? "",
  process.cwd(),
  "PUBLIC_",
);

if (
  process.env.VERCEL_ENV === "production" &&
  site !== "https://alberlic.com"
) {
  throw new Error(
    "SITE_URL must be https://alberlic.com for Vercel Production builds.",
  );
}

export default defineConfig({
  site,
  integrations: [react(), ...(site ? [sitemap()] : [])],
  vite: {
    plugins: [tailwindcss()],
  },
});
