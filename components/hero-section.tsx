"use client"

import Link from "next/link"
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background base - Negro Absoluto */}
            <div className="absolute inset-0 bg-background" />

            {/* Subtle radial glow - para profundidad sin ruido */}
            <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-8 max-w-screen-2xl mx-auto">
                <div className="flex flex-col items-center text-center space-y-10">
                    {/* Badge de disponibilidad / Status */}
                    <div className="animate-fade-in">
                        <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-widest text-primary">
                            Disponible para nuevos proyectos
                        </span>
                    </div>

                    {/* Heading Principal */}
                    <div className="space-y-6">
                        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up">
                            Hola, soy{" "}
                            <span className="gradient-text neon-glow">
                                Jairo Gael
                            </span>{" "}
                            👋
                        </h1>

                        {/* Typing animation - Enfoque Profesional */}
                        <div className="h-10 flex items-center justify-center">
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    2000,
                                    'Java & Spring Expert',
                                    2000,
                                    'AI Integration Enthusiast',
                                    2000,
                                    'Cloud & Infrastructure',
                                    2000,
                                ]}
                                wrapper="p"
                                speed={50}
                                className="text-xl md:text-2xl font-medium text-muted-foreground tracking-tight"
                                repeat={Infinity}
                            />
                        </div>
                    </div>

                    {/* Descripción con tipografía refinada */}
                    <div className="space-y-8 max-w-3xl mx-auto">
                        <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            Apasionado por el desarrollo de <b className="text-foreground">software escalable</b> y la arquitectura limpia. Experto en conectar backends potentes con interfaces modernas e Inteligencia Artificial.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                            {['Java', 'Spring', 'React', 'Python', 'AI', 'Cloud'].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-1.5 glass-effect rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20 text-muted-foreground hover:border-primary/50 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Acciones principales */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                        <Link
                            href="/projects"
                            className="group relative inline-flex h-12 items-center justify-center rounded-xl bg-foreground px-8 text-sm font-bold text-background transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        >
                            Ver Proyectos
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/contact"
                            className="group relative inline-flex h-12 items-center justify-center rounded-xl glass-effect px-8 text-sm font-bold border border-primary/20 hover:border-primary/50 transition-all hover:scale-105 active:scale-95"
                        >
                            <span className="gradient-text">Hablemos</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll indicator - positioned absolutely at bottom */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
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
