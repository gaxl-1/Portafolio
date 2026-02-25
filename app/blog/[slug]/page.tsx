import { notFound } from "next/navigation"
import Link from "next/link"
import { CustomMDX } from "@/components/blog/mdx"
import { getBlogPosts, formatDate } from "@/lib/mdx"
import { Metadata } from "next"

/**
 * Genera los parámetros estáticos para cada post del blog en tiempo de construcción.
 * Esto permite que Next.js pre-renderice todas las páginas del blog (SSG).
 */
export async function generateStaticParams() {
    let posts = getBlogPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata | undefined> {
    const { slug } = await params
    let post = getBlogPosts().find((post) => post.slug === slug)
    if (!post) {
        return
    }
    let {
        title,
        publishedAt: publishedTime,
        summary: description,
        image,
    } = post.metadata
    let ogImage = image ? image : "https://gael-dev-portfolio.vercel.app/og?title=" + encodeURIComponent(title)

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime,
            url: `https://gael-dev-portfolio.vercel.app/blog/${slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    }
}

/**
 * Componente de página para un artículo individual del blog.
 *
 * Busca el post correspondiente al `slug` en la URL. Si no existe, muestra 404.
 * Renderiza el contenido MDX usando `CustomMDX` e inyecta metadata JSON-LD para SEO.
 *
 * @param {object} params - Parámetros de la ruta (slug).
 * @returns {JSX.Element} El artículo completo renderizado.
 */
export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    let post = getBlogPosts().find((post) => post.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <section>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: post.metadata.title,
                        datePublished: post.metadata.publishedAt,
                        dateModified: post.metadata.publishedAt,
                        description: post.metadata.summary,
                        image: post.metadata.image
                            ? `https://gael-dev-portfolio.vercel.app${post.metadata.image}`
                            : `https://gael-dev-portfolio.vercel.app/og?title=${encodeURIComponent(post.metadata.title)}`,
                        url: `https://gael-dev-portfolio.vercel.app/blog/${slug}`,
                        author: {
                            "@type": "Person",
                            name: "Jairo Gael",
                        },
                    }),
                }}
            />

            <Link
                href="/blog"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                >
                    <path d="m15 18-6-6 6-6" />
                </svg>
                Volver al blog
            </Link>

            <h1 className="title font-bold text-3xl tracking-tighter max-w-[650px] mb-4">
                {post.metadata.title}
            </h1>

            <div className="flex justify-between items-center mb-8 text-sm">
                <div className="flex items-center text-neutral-600 dark:text-neutral-400 bg-secondary/50 px-3 py-1 rounded-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                    >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    {formatDate(post.metadata.publishedAt)}
                </div>
            </div>
            <article className="prose prose-neutral dark:prose-invert">
                <CustomMDX source={post.content} />
            </article>
        </section>
    )
}
