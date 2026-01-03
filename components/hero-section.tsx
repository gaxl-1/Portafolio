"use client"

import Link from "next/link"
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 animate-gradient" />

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <div className="container relative z-10 px-4 md:px-8 max-w-screen-2xl mx-auto">
                <div className="flex flex-col items-center text-center space-y-8">
                    {/* Main heading */}
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                            Hola, soy{" "}
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Gael
                            </span>{" "}
                            👋
                        </h1>

                        {/* Typing animation */}
                        <div className="h-12 md:h-16 flex items-center justify-center">
                            <TypeAnimation
                                sequence={[
                                    'Desarrollador Full-Stack Multiplataforma',
                                    2000,
                                    'Creador de experiencias digitales',
                                    2000,
                                    'Apasionado por la tecnología',
                                    2000,
                                    'Constructor de soluciones robustas',
                                    2000,
                                ]}
                                wrapper="p"
                                speed={50}
                                className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground"
                                repeat={Infinity}
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                        Me apasiona construir soluciones robustas que conecten el backend
                        con experiencias de usuario fluidas en web y móvil.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/projects"
                            className="group inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl hover:scale-105"
                        >
                            Ver mis proyectos
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-primary bg-background px-8 text-sm font-medium shadow-sm transition-all hover:bg-accent hover:scale-105"
                        >
                            Contáctame
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll indicator - positioned absolutely at bottom */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <span className="text-sm">Scroll para explorar</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                    >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </section>
    )
}
