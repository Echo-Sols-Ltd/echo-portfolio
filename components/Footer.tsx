import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Twitter,
  Code2
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/EchoSols",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/company/echho-solutions",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/echo_sols/",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://twitter.com/EchoSols",
      icon: Twitter,
      label: "Twitter",
    },
    {
      href: "https://www.facebook.com/profile.php?id=100077099235184",
      icon: Facebook,
      label: "Facebook",
    },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];

  const resourceLinks = [
    { href: "/#help", label: "Help Center" },
    { href: "/#privacy", label: "Privacy Policy" },
    { href: "/#terms", label: "Terms & Conditions" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Kigali, Rwanda",
      href: null,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+250 793 373 953",
      href: "https://wa.me/+250793373953",
    },
    {
      icon: Mail,
      label: "Email",
      value: "echhosolutions@yahoo.com",
      href: "mailto:echhosolutions@yahoo.com",
    },
  ];

  return (
    <footer className="bg-black">
      {/* Curved Divider */}
      <div className="bg-white h-16 sm:h-20 relative">
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-16 sm:h-20"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Brand Section */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-8">
            <Link href="/" className="inline-flex items-center space-x-3 group">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-md">
            <img src="/white.svg" alt="Echo SOLUTIONS LOGO" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Echo Solutions</span>
          </div>
            </Link>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md">
              Building innovative technology solutions with a focus on AI,
              security, and social impact. Transforming ideas into digital
              excellence.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.href}
                  className="w-11 h-11 bg-gray-800 border border-gray-600 rounded-xl flex items-center justify-center hover:border-blue-300 hover:bg-gray-700 transition-all duration-300 group"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="h-5 w-5 text-gray-300 group-hover:text-blue-300 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links and Contact Section */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Quick Links */}
              <div className="space-y-5">
                <h3 className="text-lg sm:text-xl font-semibold text-white relative pb-3">
                  Quick Links
                  <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-300"></div>
                </h3>
                <nav>
                  <ul className="space-y-3">
                    {quickLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-gray-300 hover:text-blue-200 transition-colors duration-200 text-sm sm:text-base inline-block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Resources */}
              <div className="space-y-5">
                <h3 className="text-lg sm:text-xl font-semibold text-white relative pb-3">
                  Resources
                  <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-300"></div>
                </h3>
                <nav>
                  <ul className="space-y-3">
                    {resourceLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-gray-300 text-sm sm:text-base hover:text-blue-200 transition-colors duration-200 inline-block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Contact Us */}
              <div className="sm:col-span-2 lg:col-span-1 space-y-5">
                <h3 className="text-lg sm:text-xl font-semibold text-white relative pb-3">
                  Contact Us
                  <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-300"></div>
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((contact) => (
                    <div key={contact.label} className="flex items-start space-x-3 group">
                      <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gray-700 transition-colors mt-0.5">
                        <contact.icon className="h-4 w-4 text-blue-200" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-300 text-sm sm:text-base font-medium">
                          {contact.label}
                        </p>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-gray-400 hover:text-blue-400 text-sm transition-colors break-words"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-gray-400 text-sm">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            <p className="text-gray-400 text-sm sm:text-base">
              © {currentYear}{" "}
              <span className="font-semibold text-white">Echo Solutions</span>.
              All rights reserved.
            </p>
            <nav className="flex items-center space-x-6 sm:space-x-8">
              {[
                { href: "/#terms", label: "Terms" },
                { href: "/#privacy", label: "Privacy" },
                { href: "/#cookies", label: "Cookies" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-200 text-sm sm:text-base transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}