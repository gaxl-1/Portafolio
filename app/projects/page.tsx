import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

/**
 * Lista de proyectos destacados para mostrar en el portafolio.
 * Cada proyecto incluye título, descripción, enlace y tecnologías usadas.
 */
const projects = [
    {
        title: "Compritas App",
        description: "Aplicación de compras con autenticación y gestión de carrito.",
        link: "https://github.com/gaxl-1/compritas", // Placeholder link
        tech: ["Next.js", "Tailwind", "Supabase"],
    },
    {
        title: "Task Manager",
        description: "Gestor de tareas CRUD con Spring Boot y React.",
        link: "https://github.com/gaxl-1/task-manager",
        tech: ["Java", "Spring Boot", "React"],
    },
    {
        title: "Banking App",
        description: "Sistema bancario simulado con transacciones.",
        link: "https://github.com/gaxl-1/banking-app",
        tech: ["Python", "Django", "PostgreSQL"],
    },
]

export const metadata = {
    title: "Proyectos",
    description: "Mis proyectos destacados.",
}

/**
 * Componente de la página de Proyectos.
 *
 * Renderiza una cuadrícula (grid) con tarjetas de proyectos destacados.
 * Utiliza los datos definidos en la constante `projects`.
 *
 * @returns {JSX.Element} La sección de proyectos renderizada.
 */
export default function ProjectsPage() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Proyectos</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {projects.map((project, index) => (
                    <Link
                        key={index}
                        href={project.link}
                        target="_blank"
                        className="group flex flex-col space-y-2 rounded-lg border p-4 transition-colors hover:bg-accent/50"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="font-medium tracking-tight group-hover:underline">
                                {project.title}
                            </h3>
                            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </div>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                        <div className="flex gap-2 pt-2">
                            {project.tech.map((t) => (
                                <span key={t} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
