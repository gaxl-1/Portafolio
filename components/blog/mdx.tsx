import Link from "next/link"
import Image from "next/image"
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc"
import { highlight } from "sugar-high"
import React from "react"
import { cn } from "@/lib/utils"

interface TableProps {
    data: {
        headers: string[]
        rows: string[][]
    }
}

function Table({ data }: TableProps) {
    const headers = data.headers.map((header) => (
        <th key={header}>{header}</th>
    ))
    const rows = data.rows.map((row, index) => (
        <tr key={index}>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
            ))}
        </tr>
    ))

    return (
        <table>
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
}

function CustomLink({ href, children, ...props }: CustomLinkProps) {
    if (href.startsWith("/")) {
        return (
            <Link href={href} {...props}>
                {children}
            </Link>
        )
    }

    if (href.startsWith("#")) {
        return <a href={href} {...props}>{children}</a>
    }

    return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
}

interface RoundedImageProps extends React.ComponentProps<typeof Image> {
    alt: string
}

function RoundedImage({ alt, className, ...props }: RoundedImageProps) {
    return (
        <Image
            alt={alt}
            className={cn("rounded-lg", className)}
            {...props}
        />
    )
}

function Grid({ children }: { children: React.ReactNode }) {
    return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
}

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
    children: string
}

function Code({ children, ...props }: CodeProps) {
    const codeHTML = highlight(children)
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str: string) {
    return str
        .toString()
        .toLowerCase()
        .trim() // Remove whitespace from both ends of a string
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/&/g, "-and-") // Replace & with 'and'
        .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
}

function createHeading(level: number) {
    const Heading = ({ children }: { children: string }) => {
        const slug = slugify(children)
        return React.createElement(
            `h${level}`,
            { id: slug },
            [
                React.createElement("a", {
                    href: `#${slug}`,
                    key: `link-${slug}`,
                    className: "anchor",
                }),
            ],
            children
        )
    }

    Heading.displayName = `Heading${level}`

    return Heading
}

const components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    Image: RoundedImage,
    a: CustomLink,
    code: Code,
    Table,
    Grid,
}

/**
 * Componente para renderizar contenido MDX remoto.
 *
 * Utiliza `next-mdx-remote` para interpretar strings MDX y convertirlos a componentes React.
 * Inyecta los componentes personalizados definidos en `components`.
 *
 * @param {MDXRemoteProps} props - Propiedades del componente MDXRemote.
 * @returns {JSX.Element} Contenido MDX renderizado.
 */
export function CustomMDX(props: MDXRemoteProps) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
        />
    )
}
