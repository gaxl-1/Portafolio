import Link from "next/link"
import { getBlogPosts, formatDate } from "@/lib/mdx"
import { Terminal, Calendar, ArrowRight, Activity } from 'lucide-react'

export const metadata = {
    title: "Intelligence Feed | Jairo Gael",
    description: "Lee mis últimos artículos sobre desarrollo web y tecnología.",
}

export default function BlogPage() {
    const allBlogs = getBlogPosts().sort((a, b) => {
        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
        }
        return 1
    })

    return (
        <section className="pt-32 pb-24 relative overflow-hidden">
             <div className="container px-6 md:px-12 max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <div className="flex items-center gap-2 text-[#ff0000] font-mono text-xs uppercase tracking-[0.4em]">
                        <Activity className="w-4 h-4 animate-pulse" />
                        <span>INTEL_FEED --VERIFIED</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-none">
                        CENTRO DE <br/>
                        <span className="text-[#ff0000]">CONOCIMIENTO</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                    {allBlogs.map((post, idx) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group relative block"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff0000]/50 to-[#00f3ff]/50 opacity-0 group-hover:opacity-100 transition-opacity blur-sm z-0" />
                            
                            <div className="relative bg-[#0a0a0a] border border-gray-900 p-8 z-10 group-hover:border-transparent transition-colors overflow-hidden">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 border border-gray-800 flex items-center justify-center bg-black group-hover:border-[#ff0000]/50">
                                            <Terminal className="w-5 h-5 text-gray-500 group-hover:text-[#ff0000]" />
                                        </div>
                                        <div className="space-y-1">
                                            <h2 className="text-xl font-bold text-white tracking-tight group-hover:text-[#ff0000]">
                                                {post.metadata.title}
                                            </h2>
                                            <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                                <Calendar className="w-3 h-3" />
                                                {formatDate(post.metadata.publishedAt, false)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest group-hover:text-white">
                                        ACCESS_POST
                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                                
                                <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
                                    {post.metadata.summary}
                                </p>

                                {/* Decorative serial number */}
                                <div className="absolute top-0 right-0 p-4 font-mono text-[80px] text-white/[0.01] select-none font-black italic">
                                    0{idx + 1}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

