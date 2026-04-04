"use client"

import { motion } from 'framer-motion'
import { Layout, Smartphone, Terminal, Palette, Activity } from 'lucide-react'

const highlights = [
    {
        title: "Arquitectura Escalable",
        description: "Enfocado en escribir código mantenible y eficiente desde el primer día.",
        icon: Layout,
        color: "#ff0000"
    },
    {
        title: "Multiplataforma",
        description: "Capaz de llevar ideas desde la web hasta dispositivos móviles de forma fluida.",
        icon: Smartphone,
        color: "#00f3ff"
    },
    {
        title: "Linux Enthusiast",
        description: "Desarrollo en entornos basados en Unix para máxima eficiencia y control.",
        icon: Terminal,
        color: "#ff0000"
    },
    {
        title: "Diseño & Código",
        description: "No solo programo, también diseño experiencias funcionales en Figma.",
        icon: Palette,
        color: "#ffffff"
    }
]

export function HighlightsSection() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden border-y border-gray-900 bg-black/20">
            <div className="container px-6 md:px-12 max-w-6xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-col items-center text-center mb-20 space-y-4"
                >
                    <div className="flex items-center gap-2 text-[#ff0000] font-mono text-xs uppercase tracking-[0.4em]">
                        <Activity className="w-4 h-4 animate-pulse" />
                        <span>system_methodology --verbose</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase italic">
                        ENFOQUE & <span className="text-[#ff0000]">METODOLOGÍA</span>
                    </h2>
                    <p className="text-base text-gray-400 font-mono max-w-2xl leading-relaxed">
                        Mi proceso combina la arquitectura técnica sólida con un diseño centrado en el usuario,
                        asegurando soluciones que escalan y sorprenden.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0 border border-gray-900">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 bg-black/40 border-r border-gray-900 last:border-r-0 hover:bg-white/[0.02] transition-all group relative overflow-hidden"
                        >
                            {/* Accent line */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-900 group-hover:bg-[#ff0000] transition-colors" />
                            
                            <div className="relative z-10 space-y-6">
                                <div 
                                    className="w-12 h-12 flex items-center justify-center border border-gray-800 bg-black group-hover:scale-110 transition-transform"
                                    style={{ color: item.color }}
                                >
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-[#ff0000] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 font-mono leading-relaxed text-xs">
                                    {item.description}
                                </p>
                            </div>

                            {/* Decorative serial number */}
                            <div className="absolute bottom-4 right-4 font-mono text-[8px] text-gray-800 uppercase tracking-widest opacity-50">
                                MODULE_0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
                <div className="absolute top-[10%] left-[5%] text-[10vw] font-black text-white/[0.02] select-none">ARCHITECTURE</div>
                <div className="absolute bottom-[10%] right-[5%] text-[10vw] font-black text-white/[0.02] select-none italic">METHODOLOGY</div>
            </div>
        </section>
    )
}

