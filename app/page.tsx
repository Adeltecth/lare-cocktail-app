"use client"

import EventSection from "@/components/event-section"
 import HeroSection from "@/components/hero-section"
import LogoEffect from "@/components/logo-effect"

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* Features Section */}
      <section className="py-25 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose JM Cocktails?</h2>
            <p className="text-lg text-muted-foreground">Crafted excellence for every occasion</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Expert Mixology", desc: "Professionally trained bartenders with years of experience" },
              { title: "Premium Ingredients", desc: "Only the finest spirits, fresh fruits, and quality ingredients" },
              { title: "Creative Craft", desc: "Custom cocktails designed specifically for your event" },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-all"
              >
                <h3 className="font-bold text-lg mb-2 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LogoEffect />
      <EventSection />
    </main>
  )
}
