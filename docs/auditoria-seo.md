# Auditoría SEO y técnica

Fecha de revisión: 2026

## SEO técnico

- ✅ `title` descriptivo: `ALBERLIC | Pruebas de Polígrafo y Evaluación de Confianza`.
- ✅ Meta description orientada a pruebas de polígrafo, evaluación poligráfica y Perú.
- ⚠️ Canonical, sitemap y URLs sociales quedan activos al definir `PUBLIC_SITE_URL` con el dominio HTTPS real.
- ✅ `robots.txt` permite el rastreo normal; añade la directiva `Sitemap` cuando existe el dominio configurado.
- ✅ Open Graph y Twitter Card con imagen PNG propia de 1200x630.
- ✅ Favicon SVG propio, sin referencia al favicon de Astro.
- ✅ JSON-LD de `Organization` y `WebSite` sin datos empresariales inventados.
- ✅ Una jerarquía visible de un solo H1 y secciones H2/H3 coherentes.
- ✅ Enlaces internos y CTAs de WhatsApp revisados.

## SEO de contenido

- ✅ El contenido cubre de forma natural prueba de polígrafo, evaluación poligráfica, servicios de polígrafo, empresas y evaluación de confianza.
- ✅ El contenido explica proceso, duración aproximada, consentimiento, privacidad y contacto.
- ✅ No se publican certificaciones, cifras, precios, resultados o garantías no verificadas.

## Accesibilidad

- ✅ Tipografía de contenido legible, contraste reforzado y estados de foco visibles.
- ✅ Navegación por teclado, enlace para saltar al contenido, etiquetas de formulario y FAQ nativa accesible.
- ✅ La imagen Open Graph incluye texto alternativo en sus metadatos sociales; los elementos visuales internos son decorativos y están ocultos de tecnologías asistivas cuando corresponde.

## Rendimiento y mantenimiento

- ✅ Astro sirve el contenido estático; React queda limitado al formulario interactivo.
- ✅ No se añadieron APIs, almacenamiento ni dependencias de runtime innecesarias.
- ✅ `@astrojs/sitemap`, `@astrojs/check` y `typescript` cubren sitemap y validación.
- ✅ `npm run build`, `npm run check` y `git diff --check` superan la revisión.

## Pendientes antes de producción

- ⚠️ Definir `PUBLIC_SITE_URL` con el dominio HTTPS oficial. Consulta `docs/produccion.md`.
- ⚠️ Validar en el futuro cualquier dirección, correo, política de privacidad, acreditación o dato empresarial antes de publicarlo.
- ⚠️ Medir rastreo, indexación y rendimiento reales una vez que el sitio esté publicado.
