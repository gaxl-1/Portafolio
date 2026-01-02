import Link from "next/link"
import { ArrowRight } from "lucide-react"

/**
 * Componente de la página de inicio (Landing Page).
 *
 * Muestra la sección Hero con una breve introducción y enlaces rápidos
 * al blog y al portafolio de proyectos.
 *
 * @returns {JSX.Element} La página de inicio renderizada.
 */
export default function Home() {
  return (
    <section className="flex flex-col items-start justify-center pt-8 md:pt-24 space-y-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Hola, soy Gael 👋
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Desarrollador Full-Stack Multiplataforma.
          Me apasiona construir soluciones robustas que conecten el backend con experiencias de usuario fluidas en web y móvil.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/blog"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Leer mi Blog
        </Link>
        <Link
          href="/projects"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Ver Proyectos
        </Link>
      </div>
    </section>
  )
}
