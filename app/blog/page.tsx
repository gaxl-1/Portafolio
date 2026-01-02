import Link from "next/link"
import { getBlogPosts, formatDate } from "@/lib/mdx"

export const metadata = {
    title: "Blog",
    description: "Lee mis últimos artículos sobre desarrollo web y tecnología.",
}

/**
 * Componente de la página principal del Blog.
 *
 * Recupera todos los posts disponibles y los lista ordenados por fecha (más reciente primero).
 *
 * @returns {JSX.Element} Lista de posts del blog.
 */
export default function BlogPage() {
    const allBlogs = getBlogPosts().sort((a, b) => {
        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
        }
        return 1
    })

    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
            <div className="grid grid-cols-1 gap-6">
                {allBlogs.map((post) => (
                    <Link
                        key={post.slug}
                        className="group flex flex-col space-y-3 rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:bg-accent/50"
                        href={`/blog/${post.slug}`}
                    >
                        <div className="flex flex-col space-y-1">
                            <h2 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                                {post.metadata.title}
                            </h2>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                {formatDate(post.metadata.publishedAt, false)}
                            </p>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {post.metadata.summary}
                        </p>
                        <div className="flex items-center text-sm text-primary font-medium pt-2 group-hover:underline underline-offset-4">
                            Leer artículo
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
                                className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
