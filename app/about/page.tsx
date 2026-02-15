import { SocialLinks } from "@/components/social-links"

export const metadata = {
    title: "Sobre Mí | Jairo Gael",
    description: "Conoce más sobre Jairo Gael Mota Lopez, Desarrollador Full-Stack Multiplataforma.",
}

export default function AboutPage() {
    return (
        <section className="animate-fade-in space-y-12">
            <div className="space-y-4">
                <h1 className="font-bold text-3xl md:text-4xl tracking-tighter gradient-text">👋 ¡Hola! Soy Jairo Gael</h1>
                <p className="text-xl text-muted-foreground font-medium">
                    Desarrollador Full-Stack Multiplataforma | Estudiante de Ingeniería
                </p>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Soy un apasionado <b>Desarrollador Full-Stack</b> enfocado en construir soluciones robustas que conecten el backend con experiencias de usuario fluidas en web y móvil. Me encanta enfrentar retos técnicos, la arquitectura limpia y optimizar infraestructuras.
                </p>

                <blockquote className="italic border-l-4 border-primary/50 pl-4 py-2 my-8 bg-muted/30 rounded-r-lg">
                    "La tecnología es mejor cuando une a la gente." 🚀
                </blockquote>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                    <div className="space-y-4 p-6 glass-effect rounded-2xl border border-primary/10">
                        <h2 className="text-xl font-bold flex items-center gap-2 m-0">
                            🏗️ Arquitectura Escalable
                        </h2>
                        <p className="text-muted-foreground text-sm m-0">
                            Enfocado en escribir código mantenible y eficiente, priorizando la escalabilidad a largo plazo.
                        </p>
                    </div>
                    <div className="space-y-4 p-6 glass-effect rounded-2xl border border-primary/10">
                        <h2 className="text-xl font-bold flex items-center gap-2 m-0">
                            📱 Multiplataforma
                        </h2>
                        <p className="text-muted-foreground text-sm m-0">
                            Capaz de llevar ideas desde la web hasta dispositivos móviles, asegurando coherencia y rendimiento.
                        </p>
                    </div>
                    <div className="space-y-4 p-6 glass-effect rounded-2xl border border-primary/10">
                        <h2 className="text-xl font-bold flex items-center gap-2 m-0">
                            🐧 Linux Enthusiast
                        </h2>
                        <p className="text-muted-foreground text-sm m-0">
                            Desarrollo en entornos basados en Unix para máxima eficiencia, seguridad y control total del entorno.
                        </p>
                    </div>
                    <div className="space-y-4 p-6 glass-effect rounded-2xl border border-primary/10">
                        <h2 className="text-xl font-bold flex items-center gap-2 m-0">
                            🎨 Diseño & Código
                        </h2>
                        <p className="text-muted-foreground text-sm m-0">
                            No solo programo, también diseño experiencias en Figma para entender mejor el flujo del usuario.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold tracking-tighter my-8 pt-4 border-t">🛠️ Apilamiento Técnico</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 NOT-PROSE">
                    <div className="space-y-3">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-primary/70">Lenguajes & Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=flat&logo=openjdk&logoColor=white" alt="Java" />
                            <img src="https://img.shields.io/badge/kotlin-%237F52FF.svg?style=flat&logo=kotlin&logoColor=white" alt="Kotlin" />
                            <img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black" alt="JS" />
                            <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white" alt="TS" />
                            <img src="https://img.shields.io/badge/spring-%236DB33F.svg?style=flat&logo=spring&logoColor=white" alt="Spring" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-primary/70">Frontend & Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB" alt="React" />
                            <img src="https://img.shields.io/badge/Next-000000?style=flat&logo=next.js&logoColor=white" alt="Next.js" />
                            <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white" alt="Tailwind" />
                            <img src="https://img.shields.io/badge/bootstrap-%238511FA.svg?style=flat&logo=bootstrap&logoColor=white" alt="Bootstrap" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-primary/70">Móvil</h3>
                        <div className="flex flex-wrap gap-2">
                            <img src="https://img.shields.io/badge/Android-3DDC84?style=flat&logo=android&logoColor=white" alt="Android" />
                            <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB" alt="React Native" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-primary/70">Infraestructura & Cloud</h3>
                        <div className="flex flex-wrap gap-2">
                            <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=flat&logo=docker&logoColor=white" alt="Docker" />
                            <img src="https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=flat&logo=kubernetes&logoColor=white" alt="K8s" />
                            <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white" alt="Vercel" />
                            <img src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black" alt="Linux" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-primary/70">Bases de Datos</h3>
                        <div className="flex flex-wrap gap-2">
                            <img src="https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white" alt="Postgres" />
                            <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=flat&logo=mysql&logoColor=white" alt="MySQL" />
                            <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white" alt="MongoDB" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-primary/70">Diseño & Herramientas</h3>
                        <div className="flex flex-wrap gap-2">
                            <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=flat&logo=figma&logoColor=white" alt="Figma" />
                            <img src="https://img.shields.io/badge/git-%23F05033.svg?style=flat&logo=git&logoColor=white" alt="Git" />
                            <img src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=flat&logo=trello&logoColor=white" alt="Trello" />
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t">
                    <h2 className="text-2xl font-bold tracking-tighter mb-4">¿Hablamos?</h2>
                    <p className="text-muted-foreground">
                        Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.
                    </p>
                    <div className="not-prose mt-8">
                        <SocialLinks className="scale-110 origin-left" />
                    </div>
                </div>
            </div>
        </section>
    )
}

