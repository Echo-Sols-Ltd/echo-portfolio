"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/team", label: "TEAM" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
  ];

  // Handle hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  if (!isMounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
      <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo - Responsive sizing */}
            <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer flex-shrink-0">
              <div className="w-7 h-7 sm:w-9 sm:h-9 bg-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-md">
                <img 
                  src="/white.svg" 
                  alt="Echo Solutions Logo" 
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </div>
              <span className="text-base sm:text-xl font-bold text-white tracking-tight">
                Echo Solutions
              </span>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 xl:px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group ${
                    pathname === link.href
                      ? "text-blue-400"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute inset-x-3 xl:inset-x-4 -bottom-px h-px bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </a>
              ))}
            </div>

            {/* Tablet Navigation - Hidden on mobile and large desktop */}
            <div className="hidden md:flex lg:hidden items-center space-x-1">
              {navLinks.slice(0, 4).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-2 py-2 rounded-md text-xs font-medium transition-colors duration-200 relative group ${
                    pathname === link.href
                      ? "text-blue-400"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute inset-x-2 -bottom-px h-px bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </a>
              ))}
            </div>

            {/* Contact Button - Desktop & Tablet */}
            <div className="hidden md:block flex-shrink-0">
              <a href="/contact">
                <button className="bg-white text-black px-4 lg:px-6 py-2 lg:py-3 rounded-lg text-xs lg:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-95">
                  <span className="hidden lg:inline">GET IN TOUCH</span>
                  <span className="lg:hidden">CONTACT</span>
                </button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 touch-manipulation"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-14 sm:top-16 left-0 right-0 bg-black/95 backdrop-blur-lg shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="py-4 px-3 sm:px-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`flex items-center px-4 py-4 text-base font-medium rounded-lg transition-colors duration-200 touch-manipulation ${
                    pathname === link.href
                      ? "text-blue-400 bg-blue-400/10"
                      : "text-white/80 hover:text-white hover:bg-white/5 active:bg-white/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                  {pathname === link.href && (
                    <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
                  )}
                </a>
              ))}
              
              {/* Mobile Contact Button */}
              <div className="pt-4 pb-2">
                <a href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-white text-black py-4 rounded-lg text-base font-semibold transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 touch-manipulation">
                    GET IN TOUCH
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;