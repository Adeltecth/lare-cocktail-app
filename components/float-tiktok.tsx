"use client"

import Link from "next/link"
import { Music } from "lucide-react"

export default function FloatTikTok() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Link
                href="https://tiktok.com//@adejareolamide42"

                target="_blank"
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all"
            >
                <Music size={20} />
                <span className="font-semibold hidden sm:block">TikTok</span>
            </Link>
        </div>
    )
}
