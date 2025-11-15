"use client"

 import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center sm:justify-center flex-col overflow-hidden pt-16">
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-75"
        >
          <source src="/jare-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start gap-8 sm:gap-10">
         
          <h1 className="text-5xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mt-6 md:mt-0.5">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Sip the Joy.
            </span>
            <br />
            <span className="text-foreground">Taste the Vibe.</span>
          </h1>

          {/* Paragraph for mobile and desktop */}
          <p className="mt-4 hidden md:block text-sm sm:text-base md:text-lg text-white max-w-md sm:max-w-lg lg:max-w-xl leading-relaxed">
            Premium mixology service bringing artisan cocktails to your events, weddings, and celebrations in Lagos. Craft excellence in every pour.
          </p>
<div className="flex flex-col sm:flex-col md:flex-row gap-4 w-full  mt-30 sm:mt-8">
            <Link
              href="/contact"
              className="px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg transition-all hover:scale-105 text-center sm:text-left"
            >
              Book Us Now
            </Link>
            <a
              href="https://wa.me/2348163640024"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors text-center sm:text-left"
            >
              Chat on WhatsApp
            </a>
          </div>
      </div>


      {/* Contact info */}
      <p className="absolute right-0 bottom-0 mt-4 sm:mt-auto text-xs sm:text-sm text-muted-foreground px-4 text-right">
        📱{" "}
        <a href="tel:08163640024" className="font-semibold text-primary">
          08163640024
        </a>{" "}
        •
        <a href="https://instagram.com/jm_cocktails" className="font-semibold text-primary ml-2">
          @jm_cocktails
        </a>
      </p>
    </section>
  )
}
