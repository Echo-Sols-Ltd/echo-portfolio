"use client"

import { useState } from "react"
import { Menu, X, Code2 } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/team", label: "TEAM" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-md">
              <img src="/white.svg" alt="Echo SOLUTIONS LOGO" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Echo Solutions</span>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute inset-x-4 -bottom-px h-px bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </a>
            ))}
          </div>

          {/* Contact Button - Right */}
          <div className="hidden md:block">
            <button className="bg-white text-black px-6 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 shadow-sm hover:shadow-md">
              GET IN TOUCH
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            <div className="py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 py-3 mt-2">
                <button 
                  className="w-full bg-white text-black py-3 rounded-lg text-sm font-semibold transition-colors duration-200 shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar