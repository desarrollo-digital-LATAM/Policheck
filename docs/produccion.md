# Configuración de producción

Antes de publicar, define `SITE_URL` con el dominio canónico HTTPS de ALBERLIC. No se debe usar `localhost`, `www.alberlic.com` ni un dominio de ejemplo en producción.

```sh
SITE_URL=https://alberlic.com npm run build
```

Esta variable configura `site` en `astro.config.mjs` y permite generar:

- Canonical absoluto.
- URLs Open Graph y Twitter de producción.
- `sitemap-index.xml` y `sitemap-0.xml` mediante `@astrojs/sitemap`.
- La directiva `Sitemap` en `robots.txt`.

En Vercel, agrega `SITE_URL` en **Settings -> Environment Variables -> Production** con el valor `https://alberlic.com` y realiza un nuevo deployment. El build de Vercel Production falla si la variable no tiene exactamente ese valor, evitando publicar una versión sin sitemap ni metadatos canónicos.

**Verificación observada el 26 de octubre de 2026:** `https://alberlic.com/` responde `308` hacia `https://www.alberlic.com/`, y `https://www.alberlic.com/` responde `200`. Esto contradice la configuración recomendada arriba (`SITE_URL=https://alberlic.com`) y puede producir diferencias entre la URL final y canonical/sitemap. No se modificaron DNS ni dominios de Vercel. Antes del despliegue, confirmar en Vercel qué dominio se desea como canónico; alinear explícitamente `SITE_URL`, el dominio primario y la redirección en Vercel, y luego verificar ambas URLs y sitemap. No cambiar DNS sin autorización.
