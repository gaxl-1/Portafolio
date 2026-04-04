"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Terminal, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Sobre Mí", href: "/about" },
    { name: "Contacto", href: "/contact" },
]

export function Navbar() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={cn(
            "fixed top-0 z-[60] w-full transition-all duration-300 border-b",
            scrolled 
                ? "bg-[#0a0a0a]/90 backdrop-blur-md border-[#ff0000]/20 py-2 shadow-[0_0_20px_rgba(255,0,0,0.1)]" 
                : "bg-transparent border-transparent py-4"
        )}>
            <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-6 md:px-12">
                
                {/* Logo Section */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="group flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xl font-black tracking-tighter text-white group-hover:text-[#ff0000] transition-colors">
                            JAIRO GAEL
                          </span>
                          <Shield className="w-4 h-4 text-[#ff0000]" />
                        </div>
                        <span className="text-[10px] font-mono tracking-[0.2em] text-gray-500 font-bold leading-tight">
                            FULL-STACK | SECURE CODE
                        </span>
                    </Link>

                    {/* Terminal Command (Desktop) */}
                    <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-black/50 border border-gray-800 rounded font-mono text-xs">
                        <span className="text-[#ff0000]">jairo@gaeldev</span>
                        <span className="text-gray-400">:</span>
                        <span className="text-[#00f3ff]">~</span>
                        <span className="text-white">$ ./init.sh</span>
                        <span className="w-1.5 h-3 bg-[#ff0000] animate-pulse ml-1" />
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-xs font-mono uppercase tracking-widest transition-all hover:text-[#ff0000] relative group",
                                pathname === item.href ? "text-[#ff0000]" : "text-gray-400"
                            )}
                        >
                            {item.name}
                            {pathname === item.href && (
                                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#ff0000] shadow-[0_0_8px_#ff0000]" />
                            )}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ff0000] transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    {/* Mobile Toggle */}
                    <button
                        className="p-2 md:hidden text-white hover:text-[#ff0000] transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-[64px] z-50 md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col p-8 space-y-8 animate-in fade-in slide-in-from-top-4">
                    <div className="space-y-4">
                        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">Menu de Sistema</p>
                        <nav className="flex flex-col space-y-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-xl font-mono uppercase tracking-widest transition-colors",
                                        pathname === item.href ? "text-[#ff0000]" : "text-white"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span className="text-[#ff0000] mr-2 opacity-50">{">"}</span>
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )
}
