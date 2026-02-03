"use client"

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
    {
        value: 6,
        label: 'Proyectos Completados',
        suffix: '+',
    },
    {
        value: 12,
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
        <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />

            <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative flex flex-col items-center text-center p-8 rounded-xl glass-effect hover:scale-105 transition-all duration-300 cursor-default overflow-hidden"
                        >
                            {/* Animated gradient border */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glow" />

                            <div className="relative z-10">
                                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                                    {isInView && (
                                        <CountUp
                                            end={stat.value}
                                            duration={2.5}
                                            suffix={stat.suffix}
                                        />
                                    )}
                                </div>
                                <p className="text-sm md:text-base text-muted-foreground font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

