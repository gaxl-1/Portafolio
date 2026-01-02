# Gael Dev Portfolio v1.0

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

Bienvenido al repositorio oficial de mi portafolio profesional y blog personal. Este proyecto está diseñado para ser rápido, accesible y fácil de mantener.

## 🚀 Tecnologías

Este sitio está construido sobre un stack moderno enfocado en el rendimiento y la experiencia de desarrollador:

-   **[Next.js 15 (App Router)](https://nextjs.org/)**: Framework React para producción.
-   **[Tailwind CSS v4](https://tailwindcss.com/)**: Sistema de diseño utility-first.
-   **[TypeScript](https://www.typescriptlang.org/)**: Para un código robusto y tipado.
-   **[MDX](https://mdxjs.com/)**: Contenido del blog escrito en Markdown + JSX.
-   **[Framer Motion](https://www.framer.com/motion/)**: Animaciones fluidas.
-   **[Lucide React](https://lucide.dev/)**: Iconografía moderna.

## 🛠️ Instalación y Uso Local

Sigue estos pasos para correr el proyecto en tu máquina:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/portfolio.git
    cd portfolio
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Gestión del Blog

El blog utiliza **MDX**, lo que significa que no necesitas una base de datos externa.

1.  Ve a la carpeta `content/blog`.
2.  Crea un nuevo archivo con extensión `.mdx` (ej: `mi-nuevo-post.mdx`).
3.  Añade el "Frontmatter" necesario al inicio del archivo:

```yaml
---
title: "Título de mi Post"
publishedAt: "2025-01-01"
summary: "Una breve descripción que aparecerá en la lista."
---
```

4.  ¡Escribe tu contenido debajo! Puedes usar Markdown estándar y componentes React.

## 📬 Contacto

El formulario de contacto está preparado para integrarse con **Resend**.
Para activarlo en producción:

1.  Crea una cuenta en [Resend](https://resend.com/).
2.  Configura la variable de entorno `RESEND_API_KEY` en tu hosting (Vercel).
3.  Implementa la lógica de envío en `app/api/send/route.ts` (código comentado incluido).

## ☁️ Despliegue

La forma más fácil de desplegar es usar **[Vercel](https://vercel.com/)**:

1.  Sube tu código a GitHub.
2.  Importa el repositorio en Vercel.
3.  Click en "Deploy".

---

Hecho con ❤️ por **Gael Dev**.
