# 🚀 Jairo Gael | Portfolio Profesional

Bienvenido al repositorio de mi portafolio personal y blog. Esta es una aplicación web moderna construida con **Next.js 15+**, **React 19** y **Tailwind CSS**, diseñada para mostrar mis proyectos, habilidades y compartir conocimiento a través de un blog integrado.

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&pause=1000&color=00F7FF&center=true&vCenter=true&width=700&lines=Full+Stack+Developer;Java+%26+Spring+Expert;Cloud+%26+Infrastructure;AI+Integration+Enthusiast" />
</p>

## 🛠️ Tecnologías Utilizadas

- **Core:** [Next.js](https://nextjs.org/) (App Router), React, TypeScript.
- **Estilos:** Tailwind CSS, Framer Motion (Animaciones), Lucide React (Iconos).
- **Contenido:** MDX para blog posts y proyectos, gray-matter para gestión de frontmatter.
- **Servicios:** [Resend](https://resend.com/) para el formulario de contacto.
- **Despliegue:** Vercel.

## 📁 Estructura del Proyecto

El proyecto sigue una estructura profesional y organizada:

- `app/`: Rutas, layouts y páginas de la aplicación.
- `components/`:
  - `layout/`: Navbar y Footer globales.
  - `sections/`: Secciones de la página de inicio (Hero, Stats, TechStack, etc.).
  - `forms/`: Componentes de formularios (Contacto).
  - `blog/`: Componentes específicos para el renderizado de MDX.
  - `theme/`: Gestión del modo oscuro.
  - `shared/`: Componentes transversales reutilizables.
- `content/`: Archivos MDX para los posts del blog.
- `lib/`: Utilidades, helpers y lógica de procesamiento de MDX.
- `public/`: Assets estáticos.

## 🛡️ Seguridad y Configuración

El proyecto utiliza variables de entorno para proteger información sensible. **Nunca** compartas tu archivo `.env.local` ni lo subas a un repositorio público.

### Variables de Entorno Requeridas

Copia el archivo `.env.example` a `.env.local` y configura las siguientes llaves:

```bash
RESEND_API_KEY=tu_api_key_de_resend
```

> [!IMPORTANT]
> Si alguna vez has expuesto accidentalmente una API Key en un commit público, debes **rotarla inmediatamente** en el panel de control del servicio correspondiente y purgar el historial de Git si es necesario.

## 🚀 Instalación y Desarrollo

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/gaxl-1/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar el entorno:**
   ```bash
   cp .env.example .env.local
   # Edita .env.local con tus llaves
   ```

4. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

5. **Construir para producción:**
   ```bash
   npm run build
   ```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">
  Hecho con ❤️ por <a href="https://github.com/gaxl-1">Jairo Gael</a>
</div>
