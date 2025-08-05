"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Play, Sparkles, Zap, Shield, Brain } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const slides = [
    {
      word: "Build",
      title: "Innovative Solutions",
      description: "Creating cutting-edge applications that solve real-world problems",
      image: "/placeholder.svg?height=600&width=800&text=Building+Apps",
      color: "from-primary to-blue-500",
    },
    {
      word: "Design",
      title: "Beautiful Experiences",
      description: "Crafting intuitive interfaces that users love to interact with",
      image: "/placeholder.svg?height=600&width=800&text=UI+Design",
      color: "from-blue-500 to-emerald-500",
    },
    {
      word: "Secure",
      title: "Protected Systems",
      description: "Implementing robust security measures to keep data safe",
      image: "/placeholder.svg?height=600&width=800&text=Cybersecurity",
      color: "from-emerald-500 to-red-500",
    },
    {
      word: "Optimize",
      title: "Peak Performance",
      description: "Fine-tuning systems for maximum efficiency and speed",
      image: "/placeholder.svg?height=600&width=800&text=Performance",
      color: "from-red-500 to-purple-500",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/5 to-emerald-500/5"></div>

      {/* Image Carousel Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentWord ? "opacity-20" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-30`}></div>
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce delay-1000">
        <Sparkles className="h-8 w-8 text-primary/30" />
      </div>
      <div className="absolute top-40 right-20 animate-bounce delay-2000">
        <Zap className="h-6 w-6 text-blue-500/30" />
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce delay-3000">
        <Shield className="h-7 w-7 text-emerald-500/30" />
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce delay-500">
        <Brain className="h-8 w-8 text-purple-500/30" />
      </div>

      <div className="container-custom text-center z-10 relative">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Heading with Slide Content */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold font-space-grotesk leading-tight">
              We <span className="gradient-text inline-block min-w-[200px] text-left">{slides[currentWord].word}</span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground/80">{slides[currentWord].title}</h2>
          </div>

          {/* Dynamic Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
            {slides[currentWord].description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12 animate-slide-up">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">8</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">50+</div>
              <div className="text-muted-foreground">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">5</div>
              <div className="text-muted-foreground">Tech Stacks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">100%</div>
              <div className="text-muted-foreground">Passion Driven</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link href="/projects" className="btn-primary flex items-center space-x-2 text-lg">
              <span>View Our Work</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/team" className="btn-outline flex items-center space-x-2 text-lg">
              <Play className="h-5 w-5" />
              <span>Meet the Team</span>
            </Link>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentWord(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentWord ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
