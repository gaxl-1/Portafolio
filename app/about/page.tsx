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
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    Hola, soy <b>Gael</b>. Soy un desarrollador de software enfocado en crear
                    soluciones eficientes y elegantes. Me encanta aprender nuevas tecnologías
                    y transformar ideas en realidad.
                </p>
                <p>
                    Actualmente estoy trabajando en profundizar mis conocimientos en:
                </p>
                <ul>
                    <li>Arquitectura de Software</li>
                    <li>Desarrollo Full Stack con Next.js</li>
                    <li>Inteligencia Artificial aplicada al código</li>
                </ul>
                <p>
                    Cuando no estoy programando, me gusta explorar nuevas herramientas,
                    contribuir al código abierto y compartir lo que aprendo.
                </p>
                <hr />
                <h3>Contacto</h3>
                <p>
                    ¿Tienes un proyecto en mente? Me encantaría escucharlo.
                    Puedes contactarme a través de mis redes sociales o enviarme un correo.
                </p>
            </div>
        </section>
    )
}
