import { HeroSection } from "@/components/asa/hero-section"
import { DeadStackSection } from "@/components/asa/dead-stack-section"
import { NewStackSection } from "@/components/asa/new-stack-section"
import { SocialProofSection } from "@/components/asa/social-proof-section"
import { QualifierSection } from "@/components/asa/qualifier-section"
import { QuoteSection } from "@/components/asa/quote-section"
import { CTASection } from "@/components/asa/cta-section"
import { Footer } from "@/components/asa/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle radial gradient overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(74,222,128,0.04) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(74,222,128,0.02) 0%, transparent 50%)",
        }}
      />
      <main className="relative z-10">
        <HeroSection />
        <QuoteSection />
        <DeadStackSection />
        <NewStackSection />
        <SocialProofSection />
        <QualifierSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
