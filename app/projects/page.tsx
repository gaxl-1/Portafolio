import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

/**
 * Lista de proyectos destacados para mostrar en el portafolio.
 * Cada proyecto incluye título, descripción, enlace y tecnologías usadas.
 */
const projects = [
    {
        title: "Sistema Bancario Web",
        description: "Plataforma web para gestión de transacciones bancarias, simulando un entorno financiero real y seguro.",
        link: "https://github.com/gaxl-1/sistema-bancario-web",
        tech: ["Python", "Django", "Web"],
    },
    {
        title: "BT Car Controller",
        description: "Controlador para coche robot mediante Bluetooth. Integración de hardware y software para control remoto.",
        link: "https://github.com/gaxl-1/bt-car-controller",
        tech: ["C++", "Arduino", "Bluetooth"],
    },
    {
        title: "Compritas",
        description: "Aplicación moderna para gestión de compras, listas inteligentes y seguimiento de gastos.",
        link: "https://github.com/gaxl-1/Compritas",
        tech: ["Mobile", "UX/UI", "App"],
    },
    {
        title: "Coyotex",
        description: "Proyecto innovador de desarrollo de software con enfoque en escalabilidad y rendimiento.",
        link: "https://github.com/gaxl-1/Coyotex",
        tech: ["Software", "Dev", "Full Stack"],
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
