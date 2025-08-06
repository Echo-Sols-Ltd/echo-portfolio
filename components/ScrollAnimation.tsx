"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up" | "rotate-in" | "slide-up-stagger"
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

export default function ScrollAnimation({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  className = "",
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold },
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [delay, threshold])

  const getAnimationClass = () => {
    const baseClass = `scroll-animation scroll-animation-${animation}`
    return isVisible ? `${baseClass} scroll-animation-visible` : baseClass
  }

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  )
}
