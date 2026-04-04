"use client"

import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/gaxl-1",
        icon: Github,
        hoverClass: "hover:text-white hover:border-white"
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/jairo-gael-mota-l%C3%B3pez-78b11339a",
        icon: Linkedin,
        hoverClass: "hover:text-[#00f3ff] hover:border-[#00f3ff]"
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/gaxl.1/",
        icon: Instagram,
        hoverClass: "hover:text-[#ff0000] hover:border-[#ff0000]"
    },
    {
        name: "Email",
        href: "mailto:lgael4885@gmail.com",
        icon: Mail,
        hoverClass: "hover:text-[#ff0000] hover:border-[#ff0000]"
    },
]

export function SocialLinks({ className }: { className?: string }) {
    return (
        <div className={`flex gap-4 ${className}`}>
            {socialLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-10 h-10 border border-gray-800 bg-black text-gray-500 transition-all ${link.hoverClass}`}
                    aria-label={link.name}
                >
                    <link.icon className="h-5 w-5" />
                </Link>
            ))}
        </div>
    )
}
