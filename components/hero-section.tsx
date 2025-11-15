"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient */}
       <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full lg:h-fit object-cover brightness-75"
        >
          <source src="/jare-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-start ">
          {/* Content */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Sip the Joy.
              </span>
              <br />
              <span className="text-foreground">Taste the Vibe.</span>
            </h1>
            <p className="hidden md:block md:text-lg text-white max-w-[400px]  mb-6 leading-relaxed">
              Premium mixology service bringing artisan cocktails to your events, weddings, and celebrations in Lagos.
              Craft excellence in every pour.
            </p>

            <div className="flex flex-col lg:flex-row justify-start gap-4 mt-10">
              <Link
                href="/contact"
                className="px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                Book Us Now
              </Link>
              <a
                href="https://wa.me/2348163640024"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>

            
          </motion.div>

           
        </div>
         <p className="absolute right-1    mt-8 sm:mt-auto text-sm text-muted-foreground">
              📱{" "}
              <a href="tel:08163640024" className="font-semibold text-primary">
                08163640024
              </a>{" "}
              •
              <a href="https://instagram.com/jm_cocktails" className="font-semibold text-primary ml-2">
                @jm_cocktails
              </a>
            </p>
      </div>
    </section>
  )
}
