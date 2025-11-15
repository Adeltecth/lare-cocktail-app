"use client"

import { motion } from "framer-motion"

export default function Menu() {
  const cocktails = [
    { name: "Tropical Sunset", desc: "Rum, mango, passion fruit, lime", src:"/c/c-1.jpg "},
    { name: "Lagos Breeze", desc: "Vodka, coconut, pineapple, mint", src:"/c/c-2.jpg" },
    { name: "Magenta Dream", desc: "Gin, hibiscus, cranberry, rose water", src:"/c/c-3.jpg" },
    { name: "Ocean Bliss", desc: "Blue Curaçao, coconut, lime, soda", src:"/c/c-4.jpg" },
    { name: "Lime Fusion", desc: "Tequila, lime, agave, habanero", src:"/c/c-5.jpg" },
    { name: "Golden Hour", desc: "Whiskey, honey, ginger, lemon", src:"/c/c-6.jpg" },
        { name: "Long Island", desc: "Whiskey, honey, ginger, lemon", src:"/c/c-7.jpg" },
    { name: "Cosmopolitan", desc: "Whiskey, honey, ginger, lemon", src:"/c/c-8.jpg" },
        { name: "Tequila Sunrise", desc: "Whiskey, honey, ginger, lemon", src:"/c/c-9.jpg" },

  ]

  return (
    <main className="pt-20">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Signature Cocktails
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">Crafted with passion, served with excellence</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cocktails.map((cocktail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-xl overflow-hidden bg-white border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg"
              >
                
                <img
                  src={cocktail.src}
                  alt={cocktail.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg text-primary mb-1">{cocktail.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{cocktail.desc}</p>
                  <div className="flex items-center justify-between">
                     <button className="px-3 py-1 rounded-lg bg-primary text-white text-sm hover:bg-primary/90 transition-colors">
                      Order
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
