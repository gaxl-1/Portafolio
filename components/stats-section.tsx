"use client"

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
    {
        value: 4,
        label: 'Proyectos Completados',
        suffix: '+',
    },
    {
        value: 12,
        label: 'Tecnologías Dominadas',
        suffix: '+',
    },
    {
        value: 2,
        label: 'Años de Experiencia',
        suffix: '+',
    },
]

export function StatsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section ref={ref} className="py-16 md:py-24 bg-secondary/30">
            <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto">
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
                            className="flex flex-col items-center text-center p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
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
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
