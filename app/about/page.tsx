import { SocialLinks } from "@/components/social-links"

export const metadata = {
    title: "Sobre Mí",
    description: "Conoce más sobre Gael Dev.",
}

/**
 * Componente de la página Sobre Mí.
 *
 * Muestra información biográfica, habilidades actuales e intereses del desarrollador.
 * También incluye una sección de contacto breve.
 *
 * @returns {JSX.Element} La página 'Sobre Mí' renderizada.
 */
export default function AboutPage() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Sobre Mí</h1>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Soy un apasionado <b>Desarrollador Full-Stack</b> enfocado en construir soluciones robustas
                    que conecten el backend con experiencias de usuario fluidas en web y móvil.
                    Me encanta enfrentar retos técnicos y aprender constantemente sobre nuevas infraestructuras.
                    Además, soy estudiante de <b>Ingeniería en Tecnologías</b>.
                </p>

                <hr className="my-8" />

                <h2 className="font-semibold text-xl mb-4">💻 Stack de Tecnologías</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-medium mb-2">Backend</h3>
                        <p className="text-sm text-muted-foreground">Java, Kotlin, Spring Boot</p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2">Frontend</h3>
                        <p className="text-sm text-muted-foreground">React, TypeScript, JavaScript</p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2">Móvil</h3>
                        <p className="text-sm text-muted-foreground">Android, Kotlin</p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2">Bases de Datos</h3>
                        <p className="text-sm text-muted-foreground">PostgreSQL, MySQL, MongoDB</p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2">Infraestructura</h3>
                        <p className="text-sm text-muted-foreground">Docker, Kubernetes</p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2">Herramientas</h3>
                        <p className="text-sm text-muted-foreground">Git, GitHub, Trello</p>
                    </div>
                </div>

                <hr className="my-8" />

                <h2 className="font-semibold text-xl mb-4">✨ Mis Intereses</h2>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none pl-0">
                    <li className="bg-secondary/50 p-4 rounded-lg text-center">
                        <b>🛠️ Open Source</b>
                        <br />
                        <span className="text-sm text-muted-foreground">Contribuyendo a la comunidad.</span>
                    </li>
                    <li className="bg-secondary/50 p-4 rounded-lg text-center">
                        <b>🤖 Automatización</b>
                        <br />
                        <span className="text-sm text-muted-foreground">Optimizando flujos de trabajo.</span>
                    </li>
                    <li className="bg-secondary/50 p-4 rounded-lg text-center">
                        <b>🎮 Game Dev</b>
                        <br />
                        <span className="text-sm text-muted-foreground">Explorando lógica de videojuegos.</span>
                    </li>
                </ul>

                <hr className="my-8" />

                <h3 className="font-semibold text-xl mb-4">Contacto</h3>
                <p>
                    ¿Tienes un proyecto en mente? Me encantaría escucharlo.
                    Puedes contactarme a través de mis redes sociales o enviarme un correo.
                </p>
                <div className="not-prose mt-6">
                    <SocialLinks />
                </div>
            </div>
        </section>
    )
}
