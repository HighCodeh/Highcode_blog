"use client"

import { useEffect, useRef } from "react"

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const particles: HTMLDivElement[] = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "particle animate-particle"
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.opacity = `${Math.random()}`
      particle.style.animationDelay = `${Math.random() * 5}s`
      container.appendChild(particle)
      particles.push(particle)
    }

    return () => {
      particles.forEach((particle) => particle.remove())
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
}

