"use client"

import { motion } from 'framer-motion'

export function GithubStats() {
    return (
        <section className="py-16 md:py-24">
            <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                        Actividad en GitHub
                    </h2>
                    <p className="text-muted-foreground mt-2">
                        Mi contribución y estadísticas en el ecosistema open source
                    </p>
                </div>

                <div className="flex flex-col items-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full flex flex-col md:flex-row justify-center gap-4"
                    >
                        <img
                            src="https://github-readme-stats.vercel.app/api?username=gaxl-1&show_icons=true&theme=tokyonight&hide_border=false"
                            alt="Estadísticas de Jairo"
                            className="h-auto md:h-48 rounded-lg shadow-xl hover:scale-[1.02] transition-transform"
                        />
                        <img
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=gaxl-1&layout=compact&theme=tokyonight&hide_border=false"
                            alt="Lenguajes más usados"
                            className="h-auto md:h-48 rounded-lg shadow-xl hover:scale-[1.02] transition-transform"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl"
                    >
                        <img
                            src="https://github-readme-streak-stats.herokuapp.com/?user=gaxl-1&theme=tokyonight"
                            alt="GitHub Streak"
                            className="w-full rounded-lg shadow-xl hover:scale-[1.01] transition-transform"
                        />
                    </motion.div>

                    <div className="mt-8">
                        <img
                            src="https://komarev.com/ghpvc/?username=gaxl-1&label=Perfil%20Visto&color=0e75b6&style=flat"
                            alt="Vistas del perfil"
                            className="rounded-full shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
