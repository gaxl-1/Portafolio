# Plan de Reorganización y Seguridad del Portafolio

Este plan detalla los pasos para profesionalizar la estructura de carpetas del proyecto y asegurar que no haya fugas de información sensible.

## 1. Seguridad
- [x] Verificar `.gitignore` para asegurar que archivos `.env` no se suban al repositorio.
- [x] Auditar `app/api/send/route.ts` para confirmar que la `RESEND_API_KEY` solo se usa en el servidor.
- [ ] Revisar historial de Git (si es posible) para asegurar que no hubo commits previos con llaves expuestas. *Nota: Si la llave fue expuesta alguna vez, se recomienda rotarla.*
- [ ] Asegurar que no haya llaves hardcodeadas en los componentes del cliente.

## 2. Reorganización de Carpetas (Profesionalización)
Se propone la siguiente estructura para `components/`:

- `components/layout/`: Componentes globales de estructura (`Navbar`, `Footer`).
- `components/sections/`: Secciones principales de las páginas (`Hero`, `Stats`, `TechStack`, etc.).
- `components/ui/`: Componentes atómicos (Botones, Inputs, etc.) si se separan en el futuro.
- `components/forms/`: Formularios complejos (`ContactForm`).
- `components/theme/`: Proveedores y toggles de tema (`ThemeProvider`, `ModeToggle`).
- `components/blog/`: Componentes específicos del blog (`MDX`).
- `components/shared/`: Componentes pequeños reutilizables (`SocialLinks`).

### Pasos:
1. Crear subcarpetas.
2. Mover archivos.
3. Actualizar aliases de importación en `app/` y otros componentes.

## 3. Calidad de Código y Documentación
- [ ] Actualizar `README.md` con instrucciones claras de instalación y configuración de variables de entorno.
- [ ] Revisar consistencia en el uso de Tailwind y variables de CSS.
