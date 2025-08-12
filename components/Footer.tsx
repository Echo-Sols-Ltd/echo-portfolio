import Link from "next/link"
import { Github, Linkedin, Mail, Instagram, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black">
      {/* Top curved section */}
      <div className="bg-white h-16 relative">
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-16"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="rounded-lg bg-white p-2 shadow-sm border group-hover:shadow-md transition-all duration-300">
                <Image 
                  src="/Lex.svg" 
                  className="bg-contain" 
                  height={24} 
                  width={24} 
                  alt="Echo Solutions Logo"
                />
              </div>
              <span className="text-2xl font-bold text-white">
                Echo Solutions
              </span>
            </Link>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Building innovative technology solutions with a focus on AI, security, and social impact. Transforming ideas into digital excellence.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                { href: "https://github.com/VersaTech-Solutions", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/company/echho-solutions", icon: Linkedin, label: "LinkedIn" },
                { href: "https://www.instagram.com/echo_sols/", icon: Instagram, label: "Instagram" }
              ].map((social) => (
                <a
                  key={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center hover:border-gray-500 hover:bg-gray-700 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-gray-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-blue-400 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/projects", label: "Features" },
                { href: "/team", label: "Reviews" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href} className="flex items-center space-x-2">
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-blue-400 pb-2 inline-block">
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/help", label: "Help Center" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms & Conditions" },
              ].map((link) => (
                <li key={link.href} className="flex items-center space-x-2">
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-blue-400 pb-2 inline-block">
              Contact Us
            </h3>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Kigali, Rwanda</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+250785588324"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  +250 785 588 324
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:echosolutions@yahoo.com"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  echosolutions@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Black */}
      <div className="bg-black">
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="font-medium text-white">Echo Solutions</span>. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}