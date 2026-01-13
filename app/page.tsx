import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { IntegrationsCarousel } from "@/components/integrations-carousel"
import { FeaturesBento } from "@/components/features-bento"
import { Pricing } from "@/components/pricing"
import { HowItWorks } from "@/components/how-it-works"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <IntegrationsCarousel />
      <FeaturesBento />
      <Pricing />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}
