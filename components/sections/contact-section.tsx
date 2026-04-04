"use client"

import { motion } from 'framer-motion'
import { ContactForm } from "@/components/forms/contact-form"
import { Terminal, Activity } from 'lucide-react'

export function ContactSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-black/40 border-t border-gray-900" id="contact">
            <div className="container px-6 md:px-12 max-w-6xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-2 text-[#ff0000] font-mono text-xs uppercase tracking-[0.4em]">
                                <Activity className="w-4 h-4 animate-pulse" />
                                <span>TERMINAL_CONTACT --OPEN</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic">
                                ESTABLECER <br/>
                                <span className="text-[#ff0000]">ENLACE</span>
                            </h2>
                            <p className="text-gray-400 font-mono text-sm max-w-md leading-relaxed">
                                ¿Tienes un proyecto en mente o una misión crítica? Abre un canal de comunicación para iniciar la transmisión de datos.
                            </p>
                        </motion.div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#ff0000] to-[#ff0000] opacity-10 blur z-0" />
                        <div className="relative bg-[#0a0a0a] border border-gray-800 p-8 md:p-12 z-10">
                            <div className="flex items-center gap-3 mb-8 border-b border-gray-900 pb-4">
                                <Terminal className="w-4 h-4 text-[#ff0000]" />
                                <span className="font-mono text-[10px] text-[#ff0000] uppercase tracking-widest">msg_encrypt --send</span>
                            </div>
                            <ContactForm />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
