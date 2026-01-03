"use client"

import { motion } from 'framer-motion'

const technologies = [
    { name: "Java", badge: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" },
    { name: "Kotlin", badge: "https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white" },
    { name: "Spring", badge: "https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" },
    { name: "React", badge: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" },
    { name: "TypeScript", badge: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" },
    { name: "Next.js", badge: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" },
    { name: "Docker", badge: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" },
    { name: "PostgreSQL", badge: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" },
]

export function TechStack() {
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
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                            Stack Tecnológico
                        </h2>
                        <p className="text-muted-foreground mt-2">
                            Tecnologías con las que trabajo día a día
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, -5, 5, 0],
                                    transition: { duration: 0.3 }
                                }}
                                className="cursor-pointer"
                            >
                                <img
                                    src={tech.badge}
                                    alt={tech.name}
                                    className="h-8 transition-all hover:shadow-lg"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
