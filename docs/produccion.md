# Configuración de producción

Antes de publicar, define `PUBLIC_SITE_URL` con el dominio canónico HTTPS de ALBERLIC. No se debe usar `localhost`, `www.alberlic.com` ni un dominio de ejemplo en producción.

```sh
PUBLIC_SITE_URL=https://alberlic.com npm run build
```

Esta variable configura `site` en `astro.config.mjs` y permite generar:

- Canonical absoluto.
- URLs Open Graph y Twitter de producción.
- `sitemap-index.xml` y `sitemap-0.xml` mediante `@astrojs/sitemap`.
- La directiva `Sitemap` en `robots.txt`.

En Vercel, agrégala en **Settings -> Environment Variables -> Production** con el valor `https://alberlic.com` y realiza un nuevo deployment. El build de Vercel Production falla si la variable no tiene exactamente ese valor, evitando publicar una versión sin sitemap ni metadatos canónicos.

En **Settings -> Domains**, configura `alberlic.com` como el dominio principal y redirige `www.alberlic.com` hacia `https://alberlic.com` con una redirección permanente. No debe existir una redirección inversa de `alberlic.com` a `www.alberlic.com`.
