"use client"

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { Monitor, Shield, Zap, Database } from 'lucide-react'

const stats = [
    {
        value: 15,
        label: 'Proyectos Ejecutados',
        suffix: '+',
        icon: Monitor,
        color: "#ff0000"
    },
    {
        value: 20,
        label: 'Módulos Dominados',
        suffix: '+',
        icon: Zap,
        color: "#00f3ff"
    },
    {
        value: 4,
        label: 'Ciclos de Experiencia',
        suffix: '+',
        icon: Database,
        color: "#ff0000"
    },
]

export function StatsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [mounted, setMounted] = useState(false)
    const [randomData, setRandomData] = useState<string[]>([])

    useEffect(() => {
        setMounted(true)
        const data = Array.from({ length: 20 }).map(() => 
            `0x${Math.random().toString(16).slice(2, 10).toUpperCase()} BUFFER_OVERFLOW_SHIELD_ACTIVE TRACE_ROUTE_... 0x${Math.random().toString(16).slice(2, 10).toUpperCase()} ACCESS_GRANTED_ROOT_USER_LOGGED_IN_...`
        )
        setRandomData(data)
    }, [])

    return (
        <section ref={ref} className="py-24 relative overflow-hidden border-b border-gray-900 bg-black/40">
            {/* Background Data Stream (Visual only) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono text-[10px] overflow-hidden whitespace-nowrap leading-none select-none">
                {mounted && randomData.map((text, i) => (
                    <div key={i} className="animate-marquee py-1">
                        {text}
                    </div>
                ))}
            </div>

            <div className="container px-6 md:px-12 max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative p-8 bg-black/60 border border-gray-800 group hover:border-gray-600 transition-colors"
                        >
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 p-2 opacity-20">
                                <stat.icon className="w-4 h-4" />
                            </div>

                            <div className="space-y-4">
                                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500">
                                    NODE_STAT_0{index + 1}
                                </p>
                                
                                <div 
                                    className="text-6xl font-black tracking-tighter tabular-nums mb-2"
                                    style={{ color: stat.color }}
                                >
                                    {isInView && (
                                        <CountUp
                                            end={stat.value}
                                            duration={2.5}
                                            suffix={stat.suffix}
                                        />
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-sm font-mono font-bold text-white uppercase tracking-widest leading-tight">
                                        {stat.label}
                                    </h3>
                                    {/* Progress bar decoration */}
                                    <div className="h-1 bg-gray-900 w-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: "100%" } : {}}
                                            transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                                            className="h-full"
                                            style={{ backgroundColor: stat.color }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}


