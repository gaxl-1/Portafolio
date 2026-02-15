# Jairo Gael Portfolio v2.1 - Premium Edition

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Resend](https://img.shields.io/badge/Resend-Connected-red)

Nueva versión rediseñada del portafolio profesional y blog personal. Enfoque en **Negro Absoluto**, minimalismo técnico y alto contraste con Rojo Vino y Gris Plata.

## 🚀 Tecnologías

Este sitio utiliza lo último en desarrollo web:

-   **[Next.js 16 (Turbopack)](https://nextjs.org/)**: Rendimiento extremo y App Router.
-   **[Tailwind CSS v4](https://tailwindcss.com/)**: Motor de diseño moderno y optimizado.
-   **[Resend API](https://resend.com/)**: Integración real para envíos de correo desde el formulario.
-   **[Framer Motion](https://www.framer.com/motion/)**: Animaciones de entrada, hover y scroll-triggered.
-   **[Lucide React](https://lucide.dev/)**: Pack de iconos vectorial y ligero.

## 🌑 Diseño "Absolute Black"

El portafolio ha sido rediseñado con una estética premium:
- **Cero Distracciones**: Fondo negro casi puro (1.5% luminosidad).
- **Contraste de Acento**: Uso exclusivo de **Rojo Vino** para elementos de acción.
- **Minimalismo Industrial**: Grises técnicos para jerarquía visual.
- **Glassmorphism**: Componentes con desenfoque de fondo y bordes ultra-sutiles.

## 🛠️ Configuración Necesaria

Para que el formulario de contacto funcione, debes configurar tu API Key:

1.  Copia el archivo `.env.example` a `.env.local`.
2.  Obtén tu API Key gratuita en [Resend.com](https://resend.com).
3.  Asigna el valor a `RESEND_API_KEY`.

```bash
# .env.local
RESEND_API_KEY=re_tu_llave_aqui
```

## 📬 Formulario de Contacto

El formulario en `/contact` está conectado al endpoint `/api/send`. Los mensajes se envían directamente a `lgael4885@gmail.com` mediante la infraestructura de Resend.

## ☁️ Despliegue en Producción

El proyecto está optimizado para **Vercel**:

1.  Sube tus cambios a GitHub.
2.  En el panel de Vercel, añade la variable de entorno `RESEND_API_KEY`.
3.  El despliegue será automático.

---

Rediseñado y potenciado con ❤️ por **Jairo Gael**.
