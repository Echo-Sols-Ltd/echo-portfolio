import Link from "next/link"
import { Code2, Github, Twitter, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="rounded-lg bg-white p-1 group-hover:scale-110 transition-transform duration-300">
              <Image src="/Lex.svg" className="bg-contain" height={20} width={20} alt="Logo"/>
            </div>
            <span className="text-2xl font-bold font-space-grotesk">Echo Solutions</span>
          </Link>
            <p className="text-muted-foreground leading-relaxed">
              Building innovative technology solutions with a focus on AI, security, and social impact.
            </p>
            <div className="flex space-x-4">
              <a
              target="bla"
                href="https://github.com/VersaTech-Solutions"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
              target="bla"
                href="https://www.linkedin.com/company/echho-solutions"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/team", label: "Team" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Web Development", "AI/ML Solutions", "Cybersecurity", "UI/UX Design"].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:echosolutions@yahoo.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                   echosolutions@yahoo.com
                </a>
              </div>
              <p className="text-muted-foreground text-sm">Ready to build something amazing together? Let's talk.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Echo Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
