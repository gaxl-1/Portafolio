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
                        <div className="flex flex-wrap gap-2">
                            <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
                            <img src="https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin" />
                            <img src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" alt="Spring" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
                            <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                            <img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2">Móvil</h3>
                        <div className="flex flex-wrap gap-2">
                            <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Android" />
                            <img src="https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2">Bases de Datos</h3>
                        <div className="flex flex-wrap gap-2">
                            <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
                            <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                            <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2">Infraestructura</h3>
                        <div className="flex flex-wrap gap-2">
                            <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
                            <img src="https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2">Herramientas</h3>
                        <div className="flex flex-wrap gap-2">
                            <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                            <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                            <img src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=trello&logoColor=white" alt="Trello" />
                        </div>
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
