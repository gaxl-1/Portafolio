import Link from "next/link"
import Image from "next/image"
import { MDXRemote } from "next-mdx-remote/rsc"
import { highlight } from "sugar-high"
import React from "react"

function Table({ data }: { data: any }) {
    let headers = data.headers.map((header: any) => (
        <th key={header}>{header}</th>
    ))
    let rows = data.rows.map((row: any, index: any) => (
        <tr key={index}>
            {row.map((cell: any, cellIndex: any) => (
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

function CustomLink(props: any) {
    let href = props.href

    if (href.startsWith("/")) {
        return (
            <Link href={href} {...props}>
                {props.children}
            </Link>
        )
    }

    if (href.startsWith("#")) {
        return <a {...props} />
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props: any) {
    return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Grid({ children }: { children: React.ReactNode }) {
    return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
}

function Code({ children, ...props }: any) {
    let codeHTML = highlight(children)
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
    const Heading = ({ children }: any) => {
        let slug = slugify(children)
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

let components = {
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
 * @param {object} props - Propiedades del componente MDXRemote.
 * @returns {JSX.Element} Contenido MDX renderizado.
 */
export function CustomMDX(props: any) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
        />
    )
}
