import { getBlogPosts } from '@/lib/mdx'

export default function sitemap() {
    const blogs = getBlogPosts().map((post) => ({
        url: `https://gaeldevblog.vercel.app/blog/${post.slug}`,
        lastModified: post.metadata.publishedAt,
    }))

    const routes = ['', '/blog', '/projects', '/about', '/contact'].map((route) => ({
        url: `https://gaeldevblog.vercel.app${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes, ...blogs]
}
