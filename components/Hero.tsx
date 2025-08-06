"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const slides = [
    {
      word: "Build",
      title: "Innovative Solutions",
      description: "Creating cutting-edge applications that solve real-world problems",
      image: "/african-classroom-education.png",
      color: "from-primary to-blue-500",
    },
    {
      word: "Design",
      title: "Beautiful Experiences",
      description: "Crafting intuitive interfaces that users love to interact with",
      image: "/african-woman-entrepreneur-success.png",
      color: "from-blue-500 to-emerald-500",
    },
    {
      word: "Secure",
      title: "Protected Systems",
      description: "Implementing robust security measures to keep data safe",
      image: "/technology-helping-people.png",
      color: "from-emerald-500 to-red-500",
    },
    {
      word: "Optimize",
      title: "Peak Performance",
      description: "Fine-tuning systems for maximum efficiency and speed",
      image: "/diverse-community-help.png",
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
    <section className="h-screen max-h-[800px] flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-500/10 to-emerald-500/10"></div>

      {/* Image Carousel Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentWord ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Image container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-3xl max-h-80 opacity-20">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover rounded-2xl"
                  priority={index === 0}
                />
              </div>
            </div>
            {/* Strong overlay for better text contrast */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-60`}></div>
            {/* Additional dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      <div className="container-custom text-center z-20 relative px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main Heading - Reduced size */}
          <div className="space-y-3 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-space-grotesk leading-tight text-white drop-shadow-2xl">
              We{" "}
              <span className="inline-block min-w-[150px] md:min-w-[200px] text-left bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent drop-shadow-lg">
                {slides[currentWord].word}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-xl">
              {slides[currentWord].title}
            </h2>
          </div>

          {/* Dynamic Subtitle - Reduced size */}
          <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed animate-slide-up drop-shadow-lg font-medium">
            {slides[currentWord].description}
          </p>

          {/* Stats - More compact */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 my-8 animate-slide-up">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">13</div>
              <div className="text-white/80 font-medium text-sm">Team Members</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">50+</div>
              <div className="text-white/80 font-medium text-sm">Projects Built</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">8</div>
              <div className="text-white/80 font-medium text-sm">Tech Stacks</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">100%</div>
              <div className="text-white/80 font-medium text-sm">Passion Driven</div>
            </div>
          </div>

          {/* CTA Buttons - More compact */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-slide-up">
            <Link
              href="/projects"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-2"
            >
              <span>View Our Work</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
<Link
  href="/team"
  className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 backdrop-blur-sm bg-white/10 flex items-center space-x-2"
>
  <Play className="h-4 w-4" />
  <span>Meet the Team</span>
</Link>

          </div>

          {/* Slide Indicators - Positioned better for shorter section */}
          <div className="flex justify-center space-x-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentWord(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
                  index === currentWord
                    ? "bg-white border-white shadow-lg"
                    : "bg-transparent border-white/50 hover:border-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
