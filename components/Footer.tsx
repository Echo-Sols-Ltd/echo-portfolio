import Link from "next/link"
import { Github, Linkedin, Mail, Instagram, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black">
      {/* Top curved section */}
      <div className="bg-white h-20 relative">
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-20"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 xl:col-span-1 space-y-8">
            <Link href="/" className="inline-flex items-center space-x-4 group">
              <div className="rounded-xl bg-white p-3 shadow-lg border group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              </div>
              <span className="text-2xl lg:text-3xl font-bold text-white">
                Echo Solutions
              </span>
            </Link>
            
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Building innovative technology solutions with a focus on AI, security, and social impact. Transforming ideas into digital excellence.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
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
                  className="w-12 h-12 bg-gray-800 border border-gray-600 rounded-xl flex items-center justify-center hover:border-blue-400 hover:bg-gray-700 hover:scale-110 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white relative pb-3">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/projects", label: "Features" },
                { href: "/team", label: "Reviews" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-base hover:translate-x-1 inline-block transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white relative pb-3">
              Resources
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/help", label: "Help Center" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms & Conditions" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-base hover:translate-x-1 inline-block transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white relative pb-3">
              Contact Us
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            </h3>

            <div className="space-y-5">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gray-700 transition-colors">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-300 text-base font-medium">Location</p>
                  <p className="text-gray-400 text-sm">Kigali, Rwanda</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gray-700 transition-colors">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-300 text-base font-medium">Phone</p>
                  <a 
                    href="tel:+250785588324"
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    +250 785 588 324
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gray-700 transition-colors">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-300 text-base font-medium">Email</p>
                  <a
                    href="mailto:echosolutions@yahoo.com"
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors break-all"
                  >
                    echosolutions@yahoo.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-base">
              © {currentYear} <span className="font-semibold text-white">Echo Solutions</span>. All rights reserved.
            </p>
            <div className="flex items-center space-x-8">
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-base transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-base transition-colors">
                Privacy
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-blue-400 text-base transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}