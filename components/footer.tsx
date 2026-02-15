import { SocialLinks } from "@/components/social-links"
import { Heart } from "lucide-react"

/**
 * Componente de pie de página global.
 *
 * Muestra información de copyright y enlaces a código fuente.
 *
 * @returns {JSX.Element} El pie de página renderizado.
 */
export function Footer() {
    return (
        <footer className="border-t border-border/40 glass-effect mt-auto">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-8 max-w-screen-2xl mx-auto py-6 md:py-0">
                <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6 w-full md:w-auto">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left flex items-center gap-2">
                        Hecho con <Heart className="w-4 h-4 text-accent animate-pulse-glow inline-block" /> por{" "}
                        <span className="font-bold gradient-text">Jairo Gael</span>
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                        © {new Date().getFullYear()} Todos los derechos reservados
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <SocialLinks />
                </div>
            </div>
        </footer>
    )
}

