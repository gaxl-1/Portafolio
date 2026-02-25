import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/gaxl-1",
        icon: Github,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/jairo-gael-mota-l%C3%B3pez-78b11339a",
        icon: Linkedin,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/gaxl.1/",
        icon: Instagram,
    },
    {
        name: "Email",
        href: "mailto:lgael4885@gmail.com",
        icon: Mail,
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
                    className="text-muted-foreground transition-colors hover:text-foreground hover:scale-110"
                    aria-label={link.name}
                >
                    <link.icon className="h-5 w-5" />
                </Link>
            ))}
        </div>
    )
}
