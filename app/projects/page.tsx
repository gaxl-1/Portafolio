import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

/**
 * Lista de proyectos destacados para mostrar en el portafolio.
 * Cada proyecto incluye título, descripción, enlace y tecnologías usadas.
 */
const projects = [
    {
        title: "Era Lemons v2",
        description: "Nueva versión del sistema de gestión para la comunidad Era Lemons, con funcionalidades avanzadas y mejor estabilidad.",
        link: "https://github.com/gaxl-1/era-lemons-v2",
        tech: ["Kotlin", "Minecraft API", "Java"],
    },
    {
        title: "Gestor de Tareas",
        description: "Aplicación robusta para la gestión de tareas personales, permitiendo organizar el día a día con facilidad.",
        link: "https://github.com/gaxl-1/Gestor_Tareas",
        tech: ["Java", "Next.js", "MySQL"],
    },
    {
        title: "Sistema Bancario Web",
        description: "Plataforma web segura para transacciones bancarias, simulando operaciones financieras de la vida real.",
        link: "https://github.com/gaxl-1/sistema-bancario-web",
        tech: ["Next.js", "Java", "PostgreSQL"],
    },
    {
        title: "BT Car Controller",
        description: "Sistema de control remoto para coche robot a través de Bluetooth e integración de hardware.",
        link: "https://github.com/gaxl-1/bt-car-controller",
        tech: ["C++", "Arduino", "IoT"],
    },
    {
        title: "Coyotex",
        description: "Framework innovador enfocado en el alto rendimiento y la escalabilidad de aplicaciones.",
        link: "https://github.com/gaxl-1/Coyotex",
        tech: ["Full Stack", "Performance", "Software"],
    },
    {
        title: "MindTrack",
        description: "Herramienta avanzada para el seguimiento de la productividad y gestión mental de tareas complejos.",
        link: "https://github.com/gaxl-1/MindTrack",
        tech: ["Productivity", "Management", "App"],
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
                        className="group flex flex-col space-y-3 rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:bg-accent/50"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <h3 className="font-medium text-lg tracking-tight group-hover:underline decoration-primary decoration-2 underline-offset-4">
                                    {project.title}
                                </h3>
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                            {project.tech.map((t) => (
                                <span key={t} className="rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-medium text-secondary-foreground">
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
