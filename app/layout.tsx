import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "JM Cocktails - Lagos Premium Mixology Service",
  description:
    "Sip the Joy. Taste the Vibe. Premium cocktail service for events, weddings, and celebrations in Lagos.",
  keywords: "cocktails, mixology, events, Lagos, premium drinks",
  icons: {
    icon: "/favicon2.png",
    shortcut: "/favicon2.png",
    apple: "/favicon2.png",
    other: [
      { rel: "apple-touch-icon", url: "/favicon2.png" },
      { rel: "icon", url: "/favicon2.png" },
    ],
  },
  // themeColor removed from here
}

// Optional viewport export
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <meta name="theme-color" content="#E91E63" />
        <link rel="icon" href="/favicon2.png" />
        <link rel="shortcut icon" href="/favicon2.png" />
        <link rel="apple-touch-icon" href="/favicon2.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
