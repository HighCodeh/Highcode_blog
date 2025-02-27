"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>


      {/* Botão do Menu Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 md:hidden bg-purple-500 text-white p-4 rounded-full shadow-lg hover:bg-purple-600 transition-all duration-300 flex items-center justify-center mobile-menu-button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Menu Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Link
              href="/"
              className={cn(
                "text-2xl font-bold transition-colors",
                pathname === "/" ? "text-purple-400" : "text-white hover:text-purple-400",
              )}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className={cn(
                "text-2xl font-bold transition-colors",
                pathname.startsWith("/blog") ? "text-purple-400" : "text-white hover:text-purple-400",
              )}
              onClick={() => setIsOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-2xl font-bold transition-colors",
                pathname === "/about" ? "text-purple-400" : "text-white hover:text-purple-400",
              )}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/docs"
              className={cn(
                "text-2xl font-bold transition-colors",
                pathname === "/docs" ? "text-purple-400" : "text-white hover:text-purple-400",
              )}
              onClick={() => setIsOpen(false)}
            >
              Docs
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

