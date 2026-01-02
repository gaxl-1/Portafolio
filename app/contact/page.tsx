import { ContactForm } from "@/components/contact-form"
import { SocialLinks } from "@/components/social-links"

export const metadata = {
    title: "Contacto",
    description: "Ponte en contacto conmigo.",
}

/**
 * Componente de la página de Contacto.
 *
 * Muestra un formulario interactivo para que los visitantes puedan enviar mensajes.
 * Integra el componente `ContactForm`.
 *
 * @returns {JSX.Element} La página de contacto renderizada.
 */
export default function ContactPage() {
    return (
        <section className="max-w-2xl mx-auto">
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contacto</h1>
            <p className="text-muted-foreground mb-8">
                Si estás interesado en colaborar o simplemente quieres saludar,
                ¡rellena el formulario a continuación o búscame en mis redes!
            </p>
            <div className="mb-8">
                <SocialLinks />
            </div>
            <ContactForm />
        </section>
    )
}
