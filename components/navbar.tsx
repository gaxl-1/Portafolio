"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Lista de elementos de navegación.
 */
const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Sobre Mí", href: "/about" },
    { name: "Contacto", href: "/contact" },
]

/**
 * Componente de barra de navegación principal.
 *
 * Incluye el logotipo y enlaces de navegación responsivos.
 * Se adapta a dispositivos móviles ocultando el menú principal.
 *
 * @returns {JSX.Element} El encabezado de navegación.
 */
export function Navbar() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 glass-effect">
            <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-4 md:px-8">
                {/* Desktop Logo & Nav */}
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block gradient-text">Gael Dev</span>
                    </Link>
                    <nav className="flex items-center gap-6 text-sm">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "transition-all hover:text-primary hover:scale-105",
                                    pathname === item.href ? "text-primary font-semibold" : "text-foreground/80"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Mobile Menu Button & Logo */}
                <div className="flex flex-1 items-center md:hidden">
                    <button
                        className="mr-2 p-2 hover:bg-accent/20 rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                    <span className="font-bold gradient-text">Gael Dev</span>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-b glass-effect">
                    <nav className="flex flex-col space-y-4 p-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === item.href ? "text-primary font-semibold" : "text-foreground/80"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}

