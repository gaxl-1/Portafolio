"use client"

import { motion } from 'framer-motion'
import { Layout, Smartphone, Terminal, Palette } from 'lucide-react'

const highlights = [
    {
        title: "Arquitectura Escalable",
        description: "Enfocado en escribir código mantenible y eficiente desde el primer día.",
        icon: Layout,
        color: "text-blue-500",
        delay: 0.1
    },
    {
        title: "Multiplataforma",
        description: "Capaz de llevar ideas desde la web hasta dispositivos móviles de forma fluida.",
        icon: Smartphone,
        color: "text-green-500",
        delay: 0.2
    },
    {
        title: "Linux Enthusiast",
        description: "Desarrollo en entornos basados en Unix para máxima eficiencia y control.",
        icon: Terminal,
        color: "text-yellow-500",
        delay: 0.3
    },
    {
        title: "Diseño & Código",
        description: "No solo programo, también diseño experiencias funcionales en Figma.",
        icon: Palette,
        color: "text-purple-500",
        delay: 0.4
    }
]

export function HighlightsSection() {
    return (
        <section className="py-16 md:py-24 bg-muted/50">
            <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">
                        Enfoque & Highlights
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-[600px] mx-auto">
                        Mi metodología se basa en la calidad del código, el diseño centrado en el usuario y la eficiencia tecnológica.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: item.delay }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl glass-effect border border-primary/10 hover:border-primary/30 transition-all hover:scale-105 group"
                        >
                            <div className={`w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 shadow-inner group-hover:scale-110 transition-transform`}>
                                <item.icon className={`h-6 w-6 ${item.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
