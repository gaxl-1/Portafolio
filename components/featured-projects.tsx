"use client"

import Link from "next/link"
import { motion } from 'framer-motion'
import { ExternalLink, Github } from "lucide-react"

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
]

export function FeaturedProjects() {
    return (
        <section className="py-16 md:py-24">
            <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                Proyectos Destacados
                            </h2>
                            <p className="text-muted-foreground mt-2">
                                Algunos de mis trabajos más recientes
                            </p>
                        </div>
                        <Link
                            href="/projects"
                            className="hidden sm:inline-flex items-center text-sm font-medium text-primary hover:underline"
                        >
                            Ver todos
                            <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="group block h-full"
                                >
                                    <div className="flex flex-col h-full rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:scale-105">
                                        <div className="flex items-center justify-between mb-4">
                                            <Github className="h-8 w-8 text-muted-foreground" />
                                            <ExternalLink className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-4 flex-grow">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <Link
                        href="/projects"
                        className="sm:hidden inline-flex items-center text-sm font-medium text-primary hover:underline mx-auto"
                    >
                        Ver todos los proyectos
                        <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
