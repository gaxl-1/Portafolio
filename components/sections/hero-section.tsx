"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Terminal, Shield, Laptop, MessageCircle } from "lucide-react"
import { GlitchText } from "@/components/ui/glitch-text"

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="container relative z-10 px-6 md:px-12 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Content */}
                <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff0000]/10 border border-[#ff0000]/30 rounded-sm">
                            <Terminal className="w-3 h-3 text-[#ff0000]" />
                            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#ff0000]">
                                System Status: Online
                            </span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-white">
                            JAIRO<br/>
                            <span className="text-white">GAEL</span>
                        </h1>
                        
                        <div className="text-xl md:text-2xl font-mono font-bold tracking-tight">
                            Ningún sistema es <GlitchText text="invencible" className="text-[#ff0000] italic" />
                        </div>

                        <p className="max-w-xl text-gray-400 text-sm md:text-lg leading-relaxed font-mono break-words">
                            “Desarrollador Full-Stack | Arquitectura escalable | Linux enthusiast | Empezando en Hacking Ético y Ciberseguridad”
                        </p>
                    </div>

                    {/* Terminal Command Widget */}
                    <div className="group relative w-fit max-w-full">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#ff0000] to-[#00f3ff] rounded blur opacity-20 group-hover:opacity-40 transition" />
                        <div className="relative flex items-center gap-2 md:gap-3 px-3 md:px-6 py-3 bg-black border border-gray-800 rounded font-mono shadow-2xl text-[10px] sm:text-sm md:text-base overflow-hidden">
                             <span className="text-[#ff0000]">{">"}</span>
                             <span className="text-gray-300">jairo@gaeldev:~$</span>
                             <span className="text-[#00f3ff]">./portfolio.sh</span>
                             <span className="w-1.5 md:w-2 h-4 md:h-5 bg-[#ff0000] animate-pulse" />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 w-full">
                        <Link
                            href="/projects"
                            className="w-full sm:w-auto text-center px-8 py-4 bg-[#ff0000] text-black font-black uppercase tracking-widest text-sm hover:translate-y-[-2px] hover:shadow-[0_0_25px_#ff0000] transition-all"
                        >
                            Ver mis proyectos
                        </Link>
                        <Link
                            href="/blog"
                            className="w-full sm:w-auto text-center px-8 py-4 bg-transparent border-2 border-[#00f3ff] text-[#00f3ff] font-black uppercase tracking-widest text-sm hover:bg-[#00f3ff]/10 hover:shadow-[0_0_25px_rgba(0,243,255,0.3)] transition-all"
                        >
                            Leer el blog
                        </Link>
                    </div>
                </div>

                {/* Right Visual Element */}
                <div className="hidden lg:flex items-center justify-center relative scale-110">
                    {/* Decorative Rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[400px] h-[400px] border border-[#ff0000]/10 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute w-[350px] h-[350px] border border-[#ff0000]/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    </div>
                    
                    {/* Main Reticle Icon */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-[#ff0000]/20 blur-[100px] group-hover:bg-[#ff0000]/20 transition-colors" />
                        <div className="relative w-64 h-64 border-4 border-[#ff0000]/20 rounded-2xl p-8 flex items-center justify-center overflow-hidden">
                           {/* Scrolling code background */}
                           <div className="absolute inset-0 opacity-10 font-mono text-[10px] overflow-hidden leading-tight p-2 flex flex-col gap-1 whitespace-nowrap select-none">
                              {Array.from({length: 20}).map((_, i) => (
                                <div key={i} className="animate-marquee">
                                    01011001 01000001 01001001 01010010 01001111 _ root_access: GRANTED
                                </div>
                              ))}
                           </div>
                           
                           <div className="relative flex flex-col items-center gap-4 text-[#ff0000] group-hover:text-white transition-colors">
                              <div className="relative">
                                <Shield className="w-32 h-32 opacity-20" />
                                <Laptop className="absolute inset-0 m-auto w-16 h-16 animate-pulse" />
                              </div>
                              <span className="font-mono font-bold tracking-[0.3em] uppercase text-xs">SECURE_DEV</span>
                           </div>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#ff0000]" />
                        <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#ff0000]" />
                        <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#00f3ff]" />
                        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#ffffff]" />
                    </div>
                </div>
            </div>



            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
               <span className="font-mono text-[10px] uppercase tracking-[0.5em] vertical-text animate-pulse">Scroll</span>
               <div className="w-[1px] h-12 bg-gradient-to-b from-[#ff0000] to-transparent" />
            </div>
        </section>
    )
}

