import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { RecentPosts } from "@/components/recent-posts"
import { FeaturedProjects } from "@/components/featured-projects"
import { TechStack } from "@/components/tech-stack"
import { getBlogPosts } from "@/lib/mdx"

/**
 * Página de inicio del portafolio.
 *
 * Presenta una experiencia completa con hero section animado, estadísticas,
 * posts recientes del blog, proyectos destacados y stack tecnológico.
 *
 * @returns {JSX.Element} La página de inicio renderizada.
 */
export default function Home() {
  const allPosts = getBlogPosts()
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1
      }
      return 1
    })
    .slice(0, 3)

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <StatsSection />
      <RecentPosts posts={allPosts} />
      <FeaturedProjects />
      <TechStack />
    </main>
  )
}
