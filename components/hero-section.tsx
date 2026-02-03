"use client"

import Link from "next/link"
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Animated gradient background - ultra sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 animate-gradient" />

            {/* Additional animated gradient overlay - ultra sutil */}
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-accent/5 animate-gradient" style={{ animationDelay: '2s' }} />

            {/* Floating particles effect - ultra sutiles */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-20" />
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full animate-float opacity-15" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-primary rounded-full animate-float opacity-10" style={{ animationDelay: '3s' }} />
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-secondary rounded-full animate-float opacity-15" style={{ animationDelay: '1.5s' }} />
            </div>



            <div className="container relative z-10 px-4 md:px-8 max-w-screen-2xl mx-auto">
                <div className="flex flex-col items-center text-center space-y-8">
                    {/* Main heading with glow effect */}
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in">
                            Hola, soy{" "}
                            <span className="gradient-text neon-glow inline-flex items-center gap-2">
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

                    {/* Description with shimmer effect */}
                    <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl relative">
                        Me apasiona construir soluciones robustas que conecten el backend
                        con experiencias de usuario fluidas en web y móvil.
                        <span className="absolute inset-0 shimmer pointer-events-none" />
                    </p>

                    {/* CTA Buttons with enhanced effects */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="/projects"
                            className="group relative inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-secondary px-8 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:shadow-2xl hover:scale-105 animate-glow overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center">
                                Ver mis proyectos
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <Link
                            href="/contact"
                            className="group relative inline-flex h-12 items-center justify-center rounded-lg glass-effect px-8 text-sm font-medium shadow-sm transition-all hover:scale-105 hover:shadow-lg border-2 border-primary/50 hover:border-primary"
                        >
                            <span className="gradient-text">Contáctame</span>
                        </Link>
                    </div>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-3 justify-center pt-8">
                        {['React', 'Next.js', 'TypeScript', 'Java', 'Kotlin'].map((tech, index) => (
                            <span
                                key={tech}
                                className="px-4 py-2 glass-effect rounded-full text-sm font-medium border border-primary/30 hover:border-primary transition-all hover:scale-110 cursor-default"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {tech}
                            </span>
                        ))}
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

