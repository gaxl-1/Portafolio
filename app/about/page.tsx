import { Layout, Smartphone, Terminal, Palette, GraduationCap, Rocket, Shield, Lock, Search } from 'lucide-react'
import { GlitchText } from "@/components/ui/glitch-text"
import Link from 'next/link'

export const metadata = {
    title: "System Profile | Jairo Gael",
    description: "Conoce más sobre Jairo Gael Mota Lopez, Software Engineer especializado en Full-Stack, Cloud e IA.",
}

export default function AboutPage() {
    return (
        <section className="space-y-16 pt-32 pb-12 px-6 md:px-12 max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="space-y-3 border-l-4 border-[#ff0000] pl-6 py-2">
                <div className="flex items-center gap-2 text-[#ff0000] font-mono text-xs uppercase tracking-[0.3em]">
                    <Search className="w-3 h-3" />
                    <span>WHOAMI // USER_IDENTIFICATION</span>
                </div>
                <h1 className="font-black text-4xl md:text-5xl tracking-tighter text-white uppercase italic">
                    JAIRO <GlitchText text="GAEL" className="text-[#ff0000]" />
                </h1>
                <p className="text-sm md:text-base text-gray-400 font-mono font-bold tracking-tight uppercase">
                    Software Engineer | Full-Stack Multiplatform | Cloud & Infrastructure
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-8">
                    <div className="relative p-6 bg-black/40 border border-gray-900 overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 font-mono text-[10px] text-gray-700 uppercase">Mission_Statement</div>
                        <p className="text-sm md:text-base leading-relaxed text-gray-300 font-mono">
                            Apasionado por el desarrollo de <b className="text-[#ff0000]">software escalable</b> y la arquitectura limpia. Experto en conectar backends potentes con interfaces modernas, integrando soluciones de <b className="text-[#00f3ff]">Inteligencia Artificial</b> y flujos de trabajo automatizados.
                        </p>
                        
                        <div className="mt-6 p-4 border-l-4 border-[#ff0000] bg-[#ff0000]/5 italic text-sm text-gray-400 font-mono">
                            &quot;La tecnología es mejor cuando une a la gente.&quot; 🚀
                        </div>
                    </div>

                    {/* Methodology Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3 p-6 bg-black border border-gray-900 group hover:border-[#ff0000] transition-all">
                            <div className="w-10 h-10 bg-[#ff0000]/10 border border-[#ff0000]/30 flex items-center justify-center text-[#ff0000]">
                                <Layout className="h-5 w-5" />
                            </div>
                            <h2 className="text-base font-black text-white uppercase tracking-tight">Arquitectura Escalable</h2>
                            <p className="text-gray-500 text-xs font-mono leading-relaxed">
                                Enfocado en escribir código mantenible y eficiente, priorizando la escalabilidad a largo plazo.
                            </p>
                        </div>

                        <div className="space-y-3 p-6 bg-black border border-gray-900 group hover:border-[#00f3ff] transition-all">
                            <div className="w-10 h-10 bg-[#00f3ff]/10 border border-[#00f3ff]/30 flex items-center justify-center text-[#00f3ff]">
                                <Smartphone className="h-5 w-5" />
                            </div>
                            <h2 className="text-base font-black text-white uppercase tracking-tight">Multiplataforma</h2>
                            <p className="text-gray-500 text-xs font-mono leading-relaxed">
                                Capaz de llevar ideas desde la web hasta dispositivos móviles, asegurando coherencia y rendimiento.
                            </p>
                        </div>

                        <div className="space-y-3 p-6 bg-black border border-gray-900 group hover:border-[#ff0000] transition-all">
                            <div className="w-10 h-10 bg-[#ff0000]/10 border border-[#ff0000]/30 flex items-center justify-center text-[#ff0000]">
                                <Terminal className="h-5 w-5" />
                            </div>
                            <h2 className="text-base font-black text-white uppercase tracking-tight">Linux Enthusiast</h2>
                            <p className="text-gray-500 text-xs font-mono leading-relaxed">
                                Desarrollo en entornos Unix para máxima eficiencia, seguridad y control total del entorno.
                            </p>
                        </div>

                        <div className="space-y-3 p-6 bg-black border border-gray-900 group hover:border-white/50 transition-all">
                            <div className="w-10 h-10 bg-white/10 border border-white/30 flex items-center justify-center text-white">
                                <Palette className="h-5 w-5" />
                            </div>
                            <h2 className="text-base font-black text-white uppercase tracking-tight">Diseño & Código</h2>
                            <p className="text-gray-500 text-xs font-mono leading-relaxed">
                                No solo programo, también diseño experiencias en Figma para entender el flujo del usuario.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <div className="p-6 bg-[#0a0a0a] border border-gray-900 space-y-6 relative overflow-hidden">
                        <div className="space-y-4 relative z-10">
                            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] flex items-center gap-2 text-[#ff0000]">
                                <GraduationCap className="h-4 w-4" />
                                ACADEMIC_STATUS
                            </h3>
                            <div className="space-y-1 pl-3 border-l border-gray-800">
                                <p className="font-bold text-white uppercase text-sm">Ingeniería en Tecnologías</p>
                                <p className="text-[10px] text-[#ff0000] font-mono">ESTADO: EN CURSO_</p>
                            </div>
                        </div>

                        <div className="space-y-4 relative z-10">
                            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] flex items-center gap-2 text-[#00f3ff]">
                                <Rocket className="h-4 w-4" />
                                CURRENT_OBJECTIVE
                            </h3>
                            <p className="text-[10px] text-gray-400 font-mono leading-relaxed bg-black/50 p-3 border border-gray-900 italic">
                                &quot;Construcción de aplicaciones escalables y optimización de infraestructura Linux.&quot;
                            </p>
                        </div>

                        <div className="pt-4 border-t border-gray-900 space-y-3">
                            <div className="flex items-center justify-between text-[10px] font-mono text-gray-600">
                                <span>SYSTEM_SECURITY</span>
                                <span>ENCRYPTED_</span>
                            </div>
                            <div className="h-1 bg-gray-900 w-full overflow-hidden">
                                <div className="h-full bg-[#ff0000] w-[85%] animate-pulse" />
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border border-red-950 bg-red-950/10 space-y-3">
                        <h3 className="text-red-500 font-mono text-xs font-bold flex items-center gap-2">
                             <Shield className="w-4 h-4" /> THREAT_LEVEL: LOW
                        </h3>
                        <p className="text-red-400/70 text-[10px] font-mono leading-relaxed">
                            Asegurando que cada línea de código cumpla con los estándares de seguridad de la industria.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="relative group overflow-hidden bg-black border border-gray-900 p-8 md:p-12 text-center">
                <div className="absolute inset-0 bg-[#ff0000]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 space-y-4">
                    <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tighter uppercase">
                        ¿TIENES UN <span className="text-[#ff0000]">SISTEMA</span> EN MENTE?
                    </h2>
                    <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
                        Iniciemos una sesión de despliegue para tu próxima gran idea.
                    </p>
                    <div className="flex justify-center pt-4">
                        <Link 
                            href="/contact"
                            className="px-10 py-3 bg-[#ff0000] text-white font-black uppercase tracking-widest text-xs hover:shadow-[0_0_30px_#ff0000] transition-all"
                        >
                            ESTABLECER CONTACTO
                        </Link>
                    </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#ff0000]" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#ff0000]" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#ff0000]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#ff0000]" />
            </div>
        </section>
    )
}
