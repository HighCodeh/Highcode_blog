"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function BackButton() {
  const router = useRouter()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center space-x-2 group transition-all duration-300 hover:scale-105"
    >
      <ArrowLeft className="h-5 w-5 text-purple-400 group-hover:translate-x-[-4px] transition-transform" />
      <span className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">Back</span>
    </button>
  )
}

