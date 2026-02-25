"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
    {
        value: 15,
        label: 'Proyectos Completados',
        suffix: '+',
    },
    {
        value: 20,
        label: 'Tecnologías Dominadas',
        suffix: '+',
    },
    {
        value: 4,
        label: 'Años de Experiencia',
        suffix: '+',
    },
]

export function StatsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section ref={ref} className="py-16 md:py-24 relative bg-background border-y border-primary/5">
            <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="text-6xl md:text-7xl font-bold tracking-tighter text-foreground mb-4 tabular-nums">
                                {isInView && (
                                    <CountUp
                                        end={stat.value}
                                        duration={2.5}
                                        suffix={stat.suffix}
                                    />
                                )}
                            </div>
                            <div className="h-1 w-12 bg-primary/20 mb-4 group-hover:w-24 transition-all duration-500" />
                            <p className="text-sm md:text-base text-muted-foreground font-bold uppercase tracking-[0.2em]">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
