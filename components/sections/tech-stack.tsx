"use client"

import { motion } from 'framer-motion'
import { Terminal, Shield, Globe, Cpu, Database, Layout } from 'lucide-react'

const categories = [
    {
        name: "Backend & Languages",
        icon: <Cpu className="w-4 h-4" />,
        color: "#ff0000",
        tech: ["Java", "Spring Boot", "Python", "PHP", "Node.js", "TypeScript"]
    },
    {
        name: "Frontend & UI",
        icon: <Layout className="w-4 h-4" />,
        color: "#00f3ff",
        tech: ["React", "Next.js", "TailwindCSS", "Framer Motion", "Figma"]
    },
    {
        name: "Infrastructure & Security",
        icon: <Shield className="w-4 h-4" />,
        color: "#ff0000",
        tech: ["Linux", "Bash", "Docker", "Kubernetes", "Git", "Security Auditor"]
    },
    {
        name: "Data & Cloud",
        icon: <Database className="w-4 h-4" />,
        color: "#ffffff",
        tech: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "AWS"]
    }
]

export function TechStack() {
    return (
        <section className="py-24 relative overflow-hidden" id="stack">
            <div className="container px-6 md:px-12 max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-16"
                >
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center gap-2 text-[#00f3ff] font-mono text-xs uppercase tracking-[0.3em]">
                            <Terminal className="w-4 h-4" />
                            <span>sysinfo --components</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                            STACK <span className="text-[#00f3ff]">TECNOLÓGICO</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
                            Herramientas y lenguajes utilizados para construir sistemas de alta disponibilidad y código seguro.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={cat.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-6 bg-black/40 border border-gray-900 hover:border-gray-700 transition-all relative overflow-hidden"
                            >
                                {/* Glow Accent */}
                                <div 
                                    className="absolute top-0 left-0 w-1 h-full opacity-50 group-hover:opacity-100 transition-opacity" 
                                    style={{ backgroundColor: cat.color, boxShadow: `0 0 15px ${cat.color}` }} 
                                />

                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-gray-900 text-white rounded">
                                        {cat.icon}
                                    </div>
                                    <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-white">
                                        {cat.name}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {cat.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 bg-black/60 border border-gray-800 rounded-sm text-[10px] font-mono text-gray-400 hover:text-white hover:border-gray-600 transition-all cursor-default"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Background decoration */}
                                <div className="absolute -bottom-4 -right-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                                    {cat.icon}
                                    <div className="w-24 h-24" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

