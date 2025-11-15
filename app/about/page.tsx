"use client"

import React from "react"
import { motion } from "framer-motion"

export default function About() {
  return (
    <main className="pt-5">
      <section className="py-20 bg-linear-to-b from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl font-bold mb-8 lg:text-center">
              <span className="bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent ">
                Our Story
              </span>
            </h1>

            <div className="prose prose-lg max-w-none ">
              <div className="grid md:grid-cols-2 gap-8 items-start mb-15">
<div className="flex flex-col gap-4 md:h-96 md:overflow-y-scroll md:scrollbar-hide p-4 border border-gray-300 rounded-lg">
    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
      JM Cocktails was born from a passion for creating unforgettable moments through the art of mixology. What started as a simple love for unique flavors and creative presentations has grown into a full-service mixology experience, dedicated to transforming every event into an extraordinary celebration.
    </p>
    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
      Based in Lagos, we specialize in crafting premium cocktails for weddings, private parties, corporate events, and outdoor gatherings. Each drink is carefully designed to delight the senses, combining quality ingredients, innovative techniques, and a touch of flair to create a lasting impression on your guests.
    </p>
    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
      Our commitment to excellence goes beyond just the drinks. We focus on the complete experience: from personalized menus tailored to your theme, to professional service that ensures every guest feels special. At JM Cocktails, we believe that a cocktail is more than a beverage — it’s an experience, a conversation starter, and a memory in the making.
    </p>
    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
      Whether you’re hosting an intimate gathering or a large-scale celebration, our team works closely with you to bring your vision to life. We pride ourselves on creativity, precision, and a genuine love for what we do, ensuring that each event is infused with style, sophistication, and of course, a taste of joy.
    </p>
    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
      At JM Cocktails, every pour tells a story — your story. Let us craft the perfect moments for your special occasion, leaving your guests talking, laughing, and savoring every sip.
    </p>
  </div>
    <img src="/jare-story.jpg" alt="Our Story"  className="w-full h-64 md:h-96 lg:h-[400px] object-cover rounded-lg shadow-lg" />

  </div>
             

              <h2 className="text-3xl font-bold mt-12 mb-6">Our Values</h2>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { title: "Quality", desc: "Premium ingredients and meticulous preparation" },
                  { title: "Creativity", desc: "Innovative cocktails tailored to your event" },
                  { title: "Professionalism", desc: "Expert service with a personal touch" },
                ].map((value, i) => (
                  <div key={i} className="p-6 rounded-xl bg-white border border-primary/20">
                    <h3 className="font-bold text-lg text-primary mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
