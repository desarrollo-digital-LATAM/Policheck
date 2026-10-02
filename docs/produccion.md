# Configuración de producción

Antes de publicar, define `PUBLIC_SITE_URL` con el dominio HTTPS real de POLICHECK. No se debe usar `localhost` ni un dominio de ejemplo en producción.

```sh
PUBLIC_SITE_URL=https://DOMINIO-REAL-DE-POLICHECK npm run build
```

Esta variable configura `site` en `astro.config.mjs` y permite generar:

- Canonical absoluto.
- URLs Open Graph y Twitter de producción.
- `sitemap-index.xml` y `sitemap-0.xml` mediante `@astrojs/sitemap`.
- La directiva `Sitemap` en `robots.txt`.

Sin la variable, la landing sigue compilando para desarrollo, pero omite las URLs absolutas y el sitemap para evitar publicar un dominio incorrecto.
