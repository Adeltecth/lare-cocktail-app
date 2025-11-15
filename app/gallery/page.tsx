"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const galleryItems = [
    { query: "cocktail with lemon garnish", title: "Signature Cocktail", src:"/tropical-cocktails-with-ice-and-garnish.jpg" },
    { query: "bartender mixing drinks", title: "Expert Mixing", src:"/gallary/expert-mix.jpg"},
    { query: "colorful tropical cocktails", title: "Tropical Selection", src:"/gallary/tropical.jpg" },
    { query: "wedding bar setup", title: "Wedding Event", src:"/gallary/naija-wedding.jpg"},
    { query: "cocktail bar counter", title: "Bar Setup", src:"/gallary/bar-set-up.jpg"},
    { query: "refreshing summer drink", title: "Summer Vibes", src:"/gallary/summer.jpg"},
  ]
  return (
    <main className="pt-10">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Our Work
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">A glimpse into our finest cocktails and events</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative rounded-xl overflow-hidden h-64 cursor-pointer group"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: hoveredIndex === i ? 1 : 0, y: hoveredIndex === i ? 0 : 10 }}
                  className="absolute inset-0 flex items-end p-6"
                >
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
