## Code Innova Web

Landing page de presentación de servicios desarrollada con **Next.js 16 (App Router)** y **Tailwind CSS**, pensada para una empresa/estudio de desarrollo como Code Innova.

### Características principales

- **Arquitectura por componentes**: cada sección principal se ha separado en componentes reutilizables en `components/`:
  - `Header`, `Footer`, `PageLayout`
  - `Hero`, `ServicesSection`, `TestimonialsSection`
  - `ContactForm` para la página `/contacto`
- **SEO optimizado**:
  - Uso de `metadata` en el App Router (`app/layout.tsx`, `app/page.tsx`, `app/contacto/page.tsx`)
  - Página de ejemplo `pages/seo-demo.tsx` con `<Head>` y `getStaticProps`
  - Etiquetas semánticas: `<header>`, `<main>`, `<section>`, `<footer>`, `<article>`
  - Imágenes optimizadas con `next/image`
- **Estilo visual**:
  - Diseño moderno y limpio, inspirado en la estética de Code Innova
  - Tailwind CSS 4 usando `app/globals.css`
- **Responsive**:
  - Layout pensado para móvil primero y escalable a escritorio (clases utilitarias de Tailwind)

### Rutas disponibles

- `/` – Página principal con Hero, Servicios y Testimonios.
- `/contacto` – Página de contacto con formulario funcional en el front-end.
- `/seo-demo` – Ejemplo de página usando `getStaticProps` para SEO/SSR (router de `pages`).

### Puesta en marcha

Instala dependencias (puedes usar npm, pnpm o yarn; el proyecto tiene lockfile de pnpm):

```bash
pnpm install
```

Lanza el servidor de desarrollo:

```bash
pnpm dev
```

Abre `http://localhost:3000` en el navegador para ver la web.

