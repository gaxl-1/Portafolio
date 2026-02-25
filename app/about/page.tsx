import { SocialLinks } from "@/components/shared/social-links"
import { Layout, Smartphone, Terminal, Palette, GraduationCap, Globe, Rocket, Code2 } from 'lucide-react'

export const metadata = {
    title: "Sobre Mí | Jairo Gael",
    description: "Conoce más sobre Jairo Gael Mota Lopez, Software Engineer especializado en Full-Stack, Cloud e IA.",
}

export default function AboutPage() {
    return (
        <section className="animate-fade-in space-y-16 py-8">
            <div className="space-y-6 text-center md:text-left">
                <h1 className="font-bold text-4xl md:text-6xl tracking-tighter gradient-text">
                    👋 ¡Hola! Soy Jairo Gael
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl">
                    Software Engineer | Full-Stack Multiplatform | Cloud & Infrastructure
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                    <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-widest text-primary">
                        Full-Stack
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold uppercase tracking-widest text-cyan-500">
                        Cloud & Infra
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-widest text-purple-500">
                        AI Enthusiast
                    </span>
                </div>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-2 space-y-6">
                        <p className="text-xl leading-relaxed text-muted-foreground font-light">
                            Apasionado por el desarrollo de <b className="text-foreground">software escalable</b> y la arquitectura limpia. Experto en conectar backends potentes con interfaces modernas, integrando soluciones de <b className="text-foreground">Inteligencia Artificial</b> y flujos de trabajo automatizados.
                        </p>

                        <blockquote className="italic border-l-4 border-primary/50 pl-6 py-4 my-8 bg-muted/20 rounded-r-2xl text-lg">
                            "La tecnología es mejor cuando une a la gente." 🚀
                        </blockquote>
                    </div>

                    <div className="glass-effect p-8 rounded-3xl border border-primary/10 space-y-6">
                        <h3 className="text-xl font-bold flex items-center gap-2 m-0 mt-0">
                            <GraduationCap className="h-5 w-5 text-primary" />
                            Formación Académica
                        </h3>
                        <div className="space-y-1">
                            <p className="font-bold text-foreground m-0">Ingeniería en Tecnologías</p>
                            <p className="text-sm text-muted-foreground m-0">Estudiante Actual</p>
                        </div>
                        <hr className="border-primary/10" />
                        <h3 className="text-xl font-bold flex items-center gap-2 m-0">
                            <Rocket className="h-5 w-5 text-primary" />
                            Enfoque Actual
                        </h3>
                        <p className="text-sm text-muted-foreground m-0">
                            Construcción de aplicaciones escalables y optimización de infraestructura Linux.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-20">
                    <div className="space-y-4 p-6 glass-effect rounded-2xl border border-primary/10 hover:border-primary/30 transition-all hover:translate-y-[-4px] group">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Layout className="h-6 w-6 text-blue-500" />
                        </div>
                        <h2 className="text-lg font-bold m-0">Arquitectura Escalable</h2>
                        <p className="text-muted-foreground text-sm m-0 leading-relaxed">
                            Enfocado en escribir código mantenible y eficiente, priorizando la escalabilidad a largo plazo.
                        </p>
                    </div>

                    <div className="space-y-4 p-6 glass-effect rounded-2xl border border-primary/10 hover:border-primary/30 transition-all hover:translate-y-[-4px] group">
                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Smartphone className="h-6 w-6 text-green-500" />
                        </div>
                        <h2 className="text-lg font-bold m-0">Multiplataforma</h2>
                        <p className="text-muted-foreground text-sm m-0 leading-relaxed">
                            Capaz de llevar ideas desde la web hasta dispositivos móviles, asegurando coherencia y rendimiento.
                        </p>
                    </div>

                    <div className="space-y-4 p-6 glass-effect rounded-2xl border border-primary/10 hover:border-primary/30 transition-all hover:translate-y-[-4px] group">
                        <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Terminal className="h-6 w-6 text-yellow-500" />
                        </div>
                        <h2 className="text-lg font-bold m-0">Linux Enthusiast</h2>
                        <p className="text-muted-foreground text-sm m-0 leading-relaxed">
                            Desarrollo en entornos Unix para máxima eficiencia, seguridad y control total del entorno.
                        </p>
                    </div>

                    <div className="space-y-4 p-6 glass-effect rounded-2xl border border-primary/10 hover:border-primary/30 transition-all hover:translate-y-[-4px] group">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Palette className="h-6 w-6 text-purple-500" />
                        </div>
                        <h2 className="text-lg font-bold m-0">Diseño & Código</h2>
                        <p className="text-muted-foreground text-sm m-0 leading-relaxed">
                            No solo programo, también diseño experiencias en Figma para entender el flujo del usuario.
                        </p>
                    </div>
                </div>

                <div className="space-y-8 my-20">
                    <div className="flex items-center gap-4">
                        <div className="h-px bg-border flex-1" />
                        <h2 className="text-2xl font-bold tracking-tighter m-0 flex items-center gap-3">
                            <Code2 className="h-6 w-6 text-primary" />
                            Stack Tecnológico
                        </h2>
                        <div className="h-px bg-border flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 not-prose">
                        <div className="space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-primary/70">Lenguajes & Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" className="h-7" />
                                <img src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" alt="Spring" className="h-7" />
                                <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" className="h-7" />
                                <img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" alt="JS" className="h-7" />
                                <img src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" alt="PHP" className="h-7" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-primary/70">Frontend & Mobile</h3>
                            <div className="flex flex-wrap gap-2">
                                <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" className="h-7" />
                                <img src="https://img.shields.io/badge/Next-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" className="h-7" />
                                <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" className="h-7" />
                                <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Android" className="h-7" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-primary/70">AI & LLM Integration</h3>
                            <div className="flex flex-wrap gap-2">
                                <img src="https://img.shields.io/badge/Gemini-8E75C2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Gemini" className="h-7" />
                                <img src="https://img.shields.io/badge/OpenAI-41100A?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI" className="h-7" />
                                <img src="https://img.shields.io/badge/Claude-D97757?style=for-the-badge&logo=anthropic&logoColor=white" alt="Claude" className="h-7" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-primary/70">Infraestructura & DevOps</h3>
                            <div className="flex flex-wrap gap-2">
                                <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" className="h-7" />
                                <img src="https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white" alt="K8s" className="h-7" />
                                <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux" className="h-7" />
                                <img src="https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="Bash" className="h-7" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-primary/70">Databases & Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgres" className="h-7" />
                                <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" className="h-7" />
                                <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" className="h-7" />
                                <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" alt="Firebase" className="h-7" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-primary/70">Build & Collaboration</h3>
                            <div className="flex flex-wrap gap-2">
                                <img src="https://img.shields.io/badge/apache_maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white" alt="Maven" className="h-7" />
                                <img src="https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white" alt="Gradle" className="h-7" />
                                <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" className="h-7" />
                                <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" className="h-7" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex flex-col items-center gap-8 py-12 px-6 glass-effect rounded-[3rem] border border-primary/20 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter m-0">¿Tienes un proyecto en mente?</h2>
                    <p className="text-lg text-muted-foreground m-0 max-w-xl leading-relaxed">
                        Me encantaría escuchar sobre tus ideas y cómo podemos colaborar para crear algo excepcional.
                    </p>
                    <div className="not-prose flex flex-col sm:flex-row items-center gap-6 mt-4">
                        <SocialLinks className="scale-125 transition-transform" />
                    </div>
                </div>
            </div>
        </section>
    )
}

