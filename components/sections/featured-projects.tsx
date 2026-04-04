"use client"

import Link from "next/link"
import { motion } from 'framer-motion'
import { ExternalLink, Github, Terminal, Code2 } from "lucide-react"

const projects = [
    {
        title: "MindTrack",
        description: "Sistema de gestión de salud mental y seguimiento emocional, diseñado para conectar pacientes con especialistas.",
        link: "https://github.com/gaxl-1/MindTrack",
        tech: ["Next.js", "Firebase", "Tailwind"],
        color: "#ff0000"
    },
    {
        title: "Sistema Bancario Web",
        description: "Plataforma segura para transacciones bancarias simuladas, con enfoque en seguridad y arquitectura limpia.",
        link: "https://github.com/gaxl-1/sistema-bancario-web",
        tech: ["Java", "Spring Boot", "PostgreSQL"],
        color: "#ff0000"
    },
    {
        title: "BT Car Controller",
        description: "Aplicación móvil para el control de vehículos mediante Bluetooth, integrando hardware y software.",
        link: "https://github.com/gaxl-1/bt-car-controller",
        tech: ["Java", "Android", "Bluetooth API"],
        color: "#00f3ff"
    },
]

export function FeaturedProjects() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff0000]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="container px-6 md:px-12 max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-[#ff0000] font-mono text-xs uppercase tracking-[0.3em]">
                                <Terminal className="w-4 h-4" />
                                <span>deployments.log</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white">
                                PROYECTOS <span className="text-[#ff0000]">DESTACADOS</span>
                            </h2>
                            <p className="text-gray-400 font-mono text-sm max-w-xl">
                                Módulos críticos desarrollados con enfoque en escalabilidad, seguridad y optimización de recursos.
                            </p>
                        </div>
                        <Link
                            href="/projects"
                            className="group flex items-center gap-2 px-6 py-3 border border-gray-800 hover:border-[#ff0000] bg-black/50 transition-all font-mono text-xs text-white uppercase tracking-widest"
                        >
                            Ver el archivo completo
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                {/* Neon Border Glow */}
                                <div 
                                  className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm z-0" 
                                  style={{ backgroundColor: project.color }}
                                />
                                
                                <div className="relative flex flex-col h-full bg-[#0a0a0a] border border-gray-800 p-8 z-10 overflow-hidden group-hover:border-transparent transition-colors">
                                    {/* Project Header */}
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="w-12 h-12 border border-gray-800 flex items-center justify-center bg-black group-hover:border-[#ff0000]/50 transition-colors">
                                            <Code2 className="w-6 h-6 text-gray-400 group-hover:text-[#ff0000]" />
                                        </div>
                                        <div className="flex gap-3">
                                            <Link href={project.link} target="_blank" className="p-2 hover:bg-gray-800 rounded transition-colors text-gray-400 hover:text-white">
                                                <Github className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 
                                      className="text-xl font-black tracking-tight mb-4 group-hover:glitch-active transition-all"
                                      style={{ color: "white" }}
                                    >
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-gray-400 text-sm font-mono leading-relaxed mb-8 flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-900 group-hover:border-gray-800 transition-colors mt-auto">
                                        {project.tech.map((t) => {
                                            const iconMap: { [key: string]: string } = {
                                                "Next.js": "nextjs",
                                                "Firebase": "firebase",
                                                "Tailwind": "tailwind",
                                                "Java": "java",
                                                "Spring Boot": "spring",
                                                "PostgreSQL": "postgres",
                                                "Android": "android",
                                                "Bluetooth API": "arduino", // Proxy for hardware/bluetooth
                                            };
                                            const icon = iconMap[t] || "code";
                                            return (
                                                <div
                                                    key={t}
                                                    className="flex items-center gap-2 px-2 py-1 bg-black border border-gray-800 group-hover:border-gray-700 transition-all rounded-sm"
                                                >
                                                    <img 
                                                      src={`https://skillicons.dev/icons?i=${icon}&theme=dark`} 
                                                      alt={t} 
                                                      className="w-4 h-4"
                                                    />
                                                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
                                                        {t}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Corner Accents */}
                                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#ff0000]/30 group-hover:border-[#ff0000] transition-colors" />
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-[#ff0000]/30 group-hover:border-[#ff0000] transition-colors" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

