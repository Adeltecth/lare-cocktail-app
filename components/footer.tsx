"use client"

import Link from "next/link"
import { Instagram, Phone, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/jm_cocktails", label: "Instagram" },
    { icon: Phone, href: "tel:08163640024", label: "Call" },
    { icon: MessageCircle, href: "https://wa.me/2348163640024", label: "WhatsApp" },
  ]

  return (
    <footer className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-t border-primary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-2">
              JM Cocktails
            </h3>
            <p className="text-sm text-muted-foreground">
              Sip the Joy. Taste the Vibe. Premium mixology service in Lagos.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                Phone:{" "}
                <a href="tel:08163640024" className="text-primary hover:underline">
                  08163640024
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a href="https://instagram.com/jm_cocktails" className="text-primary hover:underline">
                  @jm_cocktails
                </a>
              </p>
              <p>Location: Lagos, Nigeria</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <br />
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <br />
              <Link href="/menu" className="text-muted-foreground hover:text-primary transition-colors">
                Menu
              </Link>
              <br />
              <Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">
                Events
              </Link>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-8 border-t border-primary/20">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-full bg-white/50 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            )
          })}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          © {new Date().getFullYear()} JM Cocktails. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
