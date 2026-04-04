"use client"

import { motion } from 'framer-motion'
import { Github, Activity, Globe } from 'lucide-react'

export function GithubStats() {
    return (
        <section className="py-24 relative overflow-hidden bg-black/20 border-y border-gray-900">
            <div className="container px-6 md:px-12 max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-12 space-y-3">
                    <div className="flex items-center gap-2 text-[#ff0000] font-mono text-xs uppercase tracking-[0.4em]">
                        <Github className="w-4 h-4" />
                        <span>git_remote --stats</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white uppercase italic">
                        GITHUB <span className="text-[#ff0000]">ACTIVITY</span>
                    </h2>
                    <p className="text-gray-500 font-mono text-xs max-w-xl">
                        Monitoreo en tiempo real de contribuciones y despliegues en el ecosistema de código abierto.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-8">
                    {/* First Row: Stats and Languages */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative group border border-gray-900 hover:border-[#ff0000]/50 transition-all"
                        >
                             <div className="bg-black/90 p-4 relative overflow-hidden">
                                <img
                                    src="https://github-readme-stats-fast.vercel.app/api?username=gaxl-1&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=ff0000&icon_color=ff0000&text_color=ffffff"
                                    alt="Estadísticas de Jairo"
                                    className="w-full h-auto"
                                />
                             </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="relative group border border-gray-900 hover:border-[#00f3ff]/50 transition-all"
                        >
                            <div className="bg-black/90 p-4 relative overflow-hidden">
                                <img
                                    src="https://github-readme-stats-fast.vercel.app/api/top-langs?username=gaxl-1&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=ff0000&icon_color=ff0000&text_color=ffffff"
                                    alt="Lenguajes más usados"
                                    className="w-full h-auto"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Second Row: Streak Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full relative group border border-gray-900 hover:border-[#ff0000]/50 transition-all"
                    >
                         <div className="bg-black/90 p-4 relative overflow-hidden">
                            <img
                                src="https://github-readme-streak-stats.herokuapp.com/?user=gaxl-1&theme=tokyonight&hide_border=true&background=00000000&stroke=ff0000&ring=ff0000&fire=ff0000&currStreakNum=ff0000&sideLabels=ff0000&currStreakLabel=ff0000"
                                alt="GitHub Streak"
                                className="w-full h-auto"
                            />
                         </div>
                    </motion.div>

                    {/* Profile Views Badge */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center gap-2 text-gray-500 font-mono text-[10px] uppercase tracking-widest">
                            <Activity className="w-3 h-3" />
                            Live_Traffic_Monitor
                        </div>
                        <div className="px-6 py-2 border border-gray-800 bg-black/50 flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <Globe className="w-3 h-3 text-[#ff0000]" />
                                <span className="font-mono text-[10px] text-gray-400">STATUS: ONLINE</span>
                            </div>
                            <div className="w-[1px] h-4 bg-gray-800" />
                            <img
                                src="https://komarev.com/ghpvc/?username=gaxl-1&label=ACCESS_LOGS&color=ff0000&style=flat-square"
                                alt="Vistas del perfil"
                                className="h-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
