import { SocialLinks } from "@/components/social-links"

/**
 * Componente de pie de página global.
 *
 * Muestra información de copyright y enlaces a código fuente.
 *
 * @returns {JSX.Element} El pie de página renderizado.
 */
export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-8 max-w-screen-2xl mx-auto">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by <span className="font-medium underline underline-offset-4">Gael</span>.
                        Source code available on GitHub.
                    </p>
                    <div className="ml-auto">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </footer>
    )
}
