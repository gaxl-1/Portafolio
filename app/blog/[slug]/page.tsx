import { notFound } from "next/navigation"
import { CustomMDX } from "@/components/mdx"
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
                            name: "Gael Dev",
                        },
                    }),
                }}
            />
            <h1 className="title font-semibold text-2xl tracking-tighter">
                {post.metadata.title}
            </h1>
            <div className="flex justify-between items-center mt-2 mb-8 text-sm">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {formatDate(post.metadata.publishedAt)}
                </p>
            </div>
            <article className="prose prose-neutral dark:prose-invert">
                <CustomMDX source={post.content} />
            </article>
        </section>
    )
}
