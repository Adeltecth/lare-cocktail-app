"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Phone, MessageCircle, Instagram, Loader2, Music } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "/api/contact"
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus({ type: "success", message: "Thank you! We'll get back to you soon." })
        setFormData({ name: "", email: "", message: "" })
      } else {
        const error = await response.json()
        setStatus({ type: "error", message: error.error || "Failed to send message" })
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error. Please try again." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="pt-20">
      <section className="py-20 bg-gradient-to-b from-secondary/5 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">Let's create something amazing together</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-primary/20 focus:border-primary outline-none transition-colors bg-white"
                required
                disabled={loading}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-primary/20 focus:border-primary outline-none transition-colors bg-white"
                required
                disabled={loading}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border-2 border-primary/20 focus:border-primary outline-none transition-colors bg-white resize-none"
                required
                disabled={loading}
              />
              {status && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-100 text-green-800 border border-green-300"
                      : "bg-red-100 text-red-800 border border-red-300"
                  }`}
                >
                  {status.message}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading && <Loader2 size={20} className="animate-spin" />}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </motion.form>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              {[
                { icon: Phone, title: "Phone", value: "+234 816 364 0024", link: "tel:08163640024" },
                { icon: MessageCircle, title: "WhatsApp", value: "Chat with us", link: "https://wa.me/2348163640024" },
                {
                  icon: Instagram,
                  title: "Instagram",
                  value: "@jm_cocktails",
                  link: "https://instagram.com/jmcocktails_",
                },
                {
                  icon: Music,
                  title: "TikTok",
                  value: "@jm_cocktails",
                  link: "https://tiktok.com//@adejareolamide42",
                },
              ].map((contact, i) => {
                const Icon = contact.icon
                return (
                  <a
                    key={i}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{contact.title}</h3>
                      <p className="text-sm text-muted-foreground">{contact.value}</p>
                    </div>
                  </a>
                )
              })}
            </motion.div>
          </div>

          {/* Hours/Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 text-center"
          >
            <p className="text-muted-foreground">
              Available for bookings and consultations. Contact us to discuss your event requirements and pricing.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
