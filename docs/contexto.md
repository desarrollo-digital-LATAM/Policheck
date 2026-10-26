# Contexto de ALBERLIC

## Qué es

INVERSIONES ALBERLIC es la marca pública principal y presenta dos líneas de negocio independientes: soluciones integrales de comunicación y producción publicitaria, y servicios especializados de evaluación, inteligencia corporativa y gestión de riesgos. En la segunda línea, las prestaciones confirmadas actualmente son evaluaciones poligráficas y de confianza. No describir ni afirmar servicios de investigación, inteligencia corporativa o gestión de riesgos hasta recibir confirmación del cliente. La comunicación publicitaria es una oferta editorial nueva; no se deben atribuirle proyectos, clientes, capacidad instalada ni resultados no verificados.

## Enfoque

Una evaluación poligráfica es una herramienta que puede integrar una entrevista, el registro de determinadas respuestas fisiológicas y un análisis posterior. No debe presentarse como una máquina infalible ni como sustituto de asesoramiento legal, profesional o de una decisión del cliente.

## Estructura del sitio

- `/`: homepage corporativa de INVERSIONES ALBERLIC, que presenta exactamente las dos líneas y enlaza a sus páginas independientes.
- `/comunicacion-publicitaria/`: categorías de comunicación, creatividad y producción publicitaria.
- `/poligrafo/`: landing existente de evaluación poligráfica, trasladada sin retirar sus secciones ni funcionalidades.

La denominación corporativa de la segunda línea es «Servicios especializados de evaluación, inteligencia corporativa y gestión de riesgos». Su descripción comercial debe limitarse a pruebas de polígrafo y evaluación poligráfica descritas en la ruta; no afirmar prestaciones aún no confirmadas.

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

## Identidad visual corporativa

La paleta de referencia está centralizada como tokens CSS en `src/styles/global.css`: azul marino `#111F40`, azul institucional `#1669A5`, turquesa `#5BCDD3`, blanco frío `#F2F6FA`, acento cálido `#F3AE69` y texto secundario `#526575`. El PDF corporativo citado como referencia no estaba disponible en el repositorio durante la actualización; las denominaciones se tomaron del brief del cliente.

La homepage utiliza fotografías ilustrativas de Unsplash, servidas como JPG locales y optimizados para sus dimensiones de presentación. No representan instalaciones, proyectos, clientes, personal ni equipos de ALBERLIC. Procedencia/licencia: Andy Brown, «A desk with a keyboard, pencils, and various color samples» (https://unsplash.com/photos/a-desk-with-a-keyboard-pencils-and-various-color-samples-8dgFq8Vbelo); Andy Brown, «A bunch of pens and notebooks on a table» (https://unsplash.com/photos/a-bunch-of-pens-and-notebooks-on-a-table-4cOaHsfIBKQ); Vitaly Gariev, «Man in suit interviews woman holding clipboard» (https://unsplash.com/photos/man-in-suit-interviews-woman-holding-clipboard-bhQJOeJWEfE). Las tres páginas de imagen indican uso gratuito bajo la Unsplash License (https://unsplash.com/license). Se eliminaron los SVG conceptuales de la iteración anterior.
