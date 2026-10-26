# Contexto de ALBERLIC

## Qué es

ALBERLIC es una marca con dos líneas de negocio independientes: soluciones de comunicación y producción publicitaria, y servicios de evaluación poligráfica y orientación para personas y organizaciones que consultan sobre confianza. La comunicación publicitaria es una oferta editorial nueva; no se deben atribuirle proyectos, clientes, capacidad instalada ni resultados no verificados.

## Enfoque

Una evaluación poligráfica es una herramienta que puede integrar una entrevista, el registro de determinadas respuestas fisiológicas y un análisis posterior. No debe presentarse como una máquina infalible ni como sustituto de asesoramiento legal, profesional o de una decisión del cliente.

## Estructura del sitio

- `/`: homepage corporativa que presenta exactamente las dos líneas.
- `/comunicacion-publicitaria/`: categorías de comunicación, creatividad y producción publicitaria.
- `/poligrafo/`: landing existente de evaluación poligráfica, trasladada sin retirar sus secciones ni funcionalidades.

La segunda línea se presenta corporativamente como evaluación profesional y servicios de confianza. Sus prestaciones confirmadas son las pruebas de polígrafo y evaluación poligráfica descritas en la ruta; no se debe afirmar que se ofrecen inteligencia corporativa, investigaciones ni gestión integral de riesgos.

## Alcance de la página de polígrafo

El sitio informa sobre el proceso de forma responsable y dirige las consultas a WhatsApp. No recopila ni almacena datos: el formulario compone un mensaje que se abre en WhatsApp.

## Principios de comunicación

- Claridad, confianza y trato profesional.
- Consentimiento e información previa al procedimiento.
- Tratamiento responsable y reservado de la información.
- Sin afirmaciones no verificadas sobre certificaciones, resultados, precios o garantías.

## Componentes y contacto

Astro renderiza las páginas estáticas y `ContactForm` (React) se conserva en `/poligrafo/`; valida campos en el navegador y prepara el mensaje para abrir WhatsApp, sin enviar ni almacenar datos en el sitio. El canal comercial usa `+51 966 994 027`. La página publicitaria usa enlaces WhatsApp con mensajes contextuales y no ofrece un formulario poligráfico fuera de contexto.

## SEO y migración

El contenido antes publicado en `/` ahora tiene canonical en `/poligrafo/`; la raíz queda dedicada a la marca corporativa. Cada ruta define título y descripción propios mediante `Layout`; el canonical, Open Graph, JSON-LD, robots y sitemap dependen de `SITE_URL` y de la configuración existente. No se añadió una redirección de `/` a `/poligrafo/` ni se alteró la configuración de dominio.

Tras publicar: verificar ambas variantes del dominio y la canonical seleccionada; inspeccionar e indexar `/`, `/comunicacion-publicitaria/` y `/poligrafo/` en Google Search Console; enviar/actualizar el sitemap; revisar cobertura e impresiones de la antigua URL raíz y enlaces externos. Considerar una redirección o migración adicional únicamente si se confirma una URL antigua alternativa y su conveniencia, sin redirigir la nueva homepage.
