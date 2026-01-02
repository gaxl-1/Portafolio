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
            {allBlogs.map((post) => (
                <Link
                    key={post.slug}
                    className="flex flex-col space-y-1 mb-4"
                    href={`/blog/${post.slug}`}
                >
                    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                        <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                            {formatDate(post.metadata.publishedAt, false)}
                        </p>
                        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                            {post.metadata.title}
                        </p>
                    </div>
                </Link>
            ))}
        </section>
    )
}
