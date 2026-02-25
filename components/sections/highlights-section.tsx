"use client"

import { motion } from 'framer-motion'
import { Layout, Smartphone, Terminal, Palette } from 'lucide-react'

const highlights = [
    {
        title: "Arquitectura Escalable",
        description: "Enfocado en escribir código mantenible y eficiente desde el primer día.",
        icon: Layout,
        delay: 0.1
    },
    {
        title: "Multiplataforma",
        description: "Capaz de llevar ideas desde la web hasta dispositivos móviles de forma fluida.",
        icon: Smartphone,
        delay: 0.2
    },
    {
        title: "Linux Enthusiast",
        description: "Desarrollo en entornos basados en Unix para máxima eficiencia y control.",
        icon: Terminal,
        delay: 0.3
    },
    {
        title: "Diseño & Código",
        description: "No solo programo, también diseño experiencias funcionales en Figma.",
        icon: Palette,
        delay: 0.4
    }
]

export function HighlightsSection() {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
                        Enfoque & Metodología
                    </h2>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed">
                        Mi proceso combina la arquitectura técnica sólida con un diseño centrado en el usuario,
                        asegurando soluciones que escalan y sorprenden.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: item.delay }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl glass-effect border border-primary/5 hover:border-primary/20 transition-all duration-500 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                <item.icon className="h-7 w-7 text-foreground/80" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
