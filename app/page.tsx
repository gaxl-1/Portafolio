import { HeroSection } from "@/components/sections/hero-section"
import { StatsSection } from "@/components/sections/stats-section"
import { RecentPosts } from "@/components/sections/recent-posts"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { TechStack } from "@/components/sections/tech-stack"
import { HighlightsSection } from "@/components/sections/highlights-section"
import { GithubStats } from "@/components/sections/github-stats"
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
      <HighlightsSection />
      <StatsSection />
      <GithubStats />
      <RecentPosts posts={allPosts} />
      <FeaturedProjects />
      <TechStack />
    </main>
  )
}
