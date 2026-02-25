"use client"

import Link from "next/link"
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from "lucide-react"

interface Post {
    slug: string
    metadata: {
        title: string
        publishedAt: string
        summary: string
    }
}

interface RecentPostsProps {
    posts: Post[]
}

export function RecentPosts({ posts }: RecentPostsProps) {
    return (
        <section className="py-16 md:py-24">
            <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                Últimos Posts
                            </h2>
                            <p className="text-muted-foreground mt-2">
                                Comparto conocimiento y experiencias
                            </p>
                        </div>
                        <Link
                            href="/blog"
                            className="hidden sm:inline-flex items-center text-sm font-medium text-primary hover:underline"
                        >
                            Ver todos
                            <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {posts.map((post, index) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="group block h-full"
                                >
                                    <div className="flex flex-col h-full rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:scale-105">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                            <Calendar className="h-4 w-4" />
                                            {new Date(post.metadata.publishedAt).toLocaleDateString('es-MX', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.metadata.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                                            {post.metadata.summary}
                                        </p>
                                        <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
                                            Leer más
                                            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <Link
                        href="/blog"
                        className="sm:hidden inline-flex items-center text-sm font-medium text-primary hover:underline mx-auto"
                    >
                        Ver todos los posts
                        <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
