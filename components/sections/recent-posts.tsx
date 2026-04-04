"use client"

import Link from "next/link"
import { motion } from 'framer-motion'
import { ArrowRight, Terminal, Calendar, User } from "lucide-react"

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
        <section className="py-24 relative">
            <div className="container px-6 md:px-12 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-900 pb-8">
                        <div className="space-y-2">
                             <div className="flex items-center gap-2 text-[#ff0000] font-mono text-xs uppercase tracking-[0.3em]">
                                <Terminal className="w-4 h-4" />
                                <span>blog_fetch --latest</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                                RECENT <span className="text-[#ff0000]">INTEL</span>
                            </h2>
                            <p className="text-gray-400 font-mono text-sm max-w-xl">
                                Últimas bitácoras sobre desarrollo, ciberseguridad y tecnología.
                            </p>
                        </div>
                        <Link
                            href="/blog"
                            className="group flex items-center gap-2 text-[#ff0000] font-mono text-sm uppercase tracking-widest hover:text-white transition-colors"
                        >
                            Ver todos los registros
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {posts.map((post, index) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="group block relative border border-gray-900 bg-black/40 p-6 md:p-8 hover:border-[#ff0000]/30 hover:bg-[#ff0000]/5 transition-all overflow-hidden"
                                >
                                    {/* Scanline hover effect */}
                                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-5 transition-opacity bg-gradient-to-b from-transparent via-[#ff0000] to-transparent bg-[length:100%_4px]" />
                                    
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                                        <div className="flex-1 space-y-4">
                                            <div className="flex items-center gap-6 text-[10px] font-mono uppercase tracking-widest text-[#ff0000]">
                                                <span className="flex items-center gap-2">
                                                    <Calendar className="w-3 h-3" />
                                                    {new Date(post.metadata.publishedAt).toLocaleDateString('es-MX', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </span>
                                                <span className="flex items-center gap-2 text-gray-500">
                                                    <User className="w-3 h-3" />
                                                    Jairo Gael
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-[#ff0000] transition-colors line-clamp-1">
                                                {post.metadata.title}
                                            </h3>
                                            
                                            <p className="text-gray-400 font-mono text-sm line-clamp-2 max-w-3xl">
                                                {post.metadata.summary}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-4 text-[#ff0000] font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                            Read_More
                                            <div className="w-12 h-[1px] bg-[#ff0000]" />
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                    
                                    {/* Progress indicator decoration */}
                                    <div className="absolute bottom-0 left-0 h-[2px] bg-[#ff0000] w-0 group-hover:w-full transition-all duration-500" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

