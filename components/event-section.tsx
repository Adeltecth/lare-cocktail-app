"use client"

import { motion } from "framer-motion"
import { Heart, Users, Briefcase, Leaf } from "lucide-react"

export default function EventSection() {
  const services = [
    {
      icon: Heart,
      title: "Weddings",
      desc: "Create magical moments with custom cocktails for your special day",
      src: "/gallary/naija-wedding.jpg",
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      desc: "Professional mixology service for conferences and corporate functions",
      src: "/gallary/coperate.jpg",
    },
    {
      icon: Users,
      title: "Private Parties",
      desc: "Personalized cocktail experience for intimate celebrations",
      src: "/gallary/outdoor.jpg",
    },
    {
      icon: Leaf,
      title: "Outdoor Mixology",
      desc: "Portable bar setup for outdoor events and festivals",
      src: "/gallary/mixology.jpg",
    },
  ];

  return (
    <main className="pt-5">
      <section className="py-20 bg-gradient-to-b from-accent/5 to-secondary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Event Services
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">Premium mixology for every occasion</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative overflow-hidden p-8 rounded-xl bg-white border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all group"
                >
                     {/* Background image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.src}
                      alt={service.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors"></div>
                  </div>
                                    {/* Text content */}

<div className="relative z-10">
    <div className=" p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-2xl mb-2 text-primary">{service.title}</h3>
                  <p className="text-white leading-relaxed">{service.desc}</p>
</div>
                  
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/30 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Plan Your Event?</h3>
            <p className="text-muted-foreground mb-6">Contact us today for a consultation</p>
            <a
              href="https://wa.me/2348163640024"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
