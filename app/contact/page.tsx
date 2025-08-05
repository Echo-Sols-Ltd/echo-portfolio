"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Twitter, Linkedin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: "",
    newsletter: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setIsLoading(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        project: "",
        budget: "",
        message: "",
        newsletter: false,
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-blue-500/5 to-emerald-500/5">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6 animate-fade-in">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Ready to build something amazing together? We'd love to hear about your project and discuss how we can help
            bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-effect p-8 rounded-xl text-center card-hover">
              <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email Us</h3>
              <p className="text-muted-foreground mb-4">Drop us a line anytime</p>
              <a href="mailto:hello@lextech.dev" className="text-primary hover:text-primary/80 font-medium">
                hello@lextech.dev
              </a>
            </div>

            <div className="glass-effect p-8 rounded-xl text-center card-hover">
              <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Phone className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Call Us</h3>
              <p className="text-muted-foreground mb-4">Mon-Fri 9AM-6PM PST</p>
              <a href="tel:+15551234567" className="text-primary hover:text-primary/80 font-medium">
                +1 (555) 123-4567
              </a>
            </div>

            <div className="glass-effect p-8 rounded-xl text-center card-hover">
              <div className="bg-emerald-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Visit Us</h3>
              <p className="text-muted-foreground mb-4">Our workspace</p>
              <address className="text-primary not-italic">
                123 Tech Street
                <br />
                San Francisco, CA 94105
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Start Your Project</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you need a web application, mobile app, AI solution, or cybersecurity consultation, we're here
                to help. Tell us about your project and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">What We Can Help With</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Full-stack web applications</li>
                    <li>• Mobile app development</li>
                    <li>• AI/ML solutions and consulting</li>
                    <li>• Cybersecurity audits and implementation</li>
                    <li>• UI/UX design and branding</li>
                    <li>• DevOps and cloud infrastructure</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Process</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary/20 p-1 rounded-full mt-1">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-medium">Discovery Call</h4>
                        <p className="text-sm text-muted-foreground">We discuss your project goals and requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-500/20 p-1 rounded-full mt-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-medium">Proposal & Planning</h4>
                        <p className="text-sm text-muted-foreground">We create a detailed project plan and timeline</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-emerald-500/20 p-1 rounded-full mt-1">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-medium">Development & Delivery</h4>
                        <p className="text-sm text-muted-foreground">We build, test, and deploy your solution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="glass-effect p-8 rounded-2xl">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="bg-emerald-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thanks for reaching out! We'll get back to you within 24 hours to discuss your project.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-10k">Under $10k</option>
                          <option value="10k-25k">$10k - $25k</option>
                          <option value="25k-50k">$25k - $50k</option>
                          <option value="50k-100k">$50k - $100k</option>
                          <option value="over-100k">Over $100k</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="project" className="block text-sm font-medium mb-2">
                        Project Type *
                      </label>
                      <select
                        id="project"
                        name="project"
                        required
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select project type</option>
                        <option value="web-app">Web Application</option>
                        <option value="mobile-app">Mobile Application</option>
                        <option value="ai-ml">AI/ML Solution</option>
                        <option value="security">Cybersecurity</option>
                        <option value="design">UI/UX Design</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-vertical"
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 text-primary focus:ring-primary border-border rounded"
                      />
                      <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                        I'd like to receive updates about Lex Tech's latest projects and tech insights
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full btn-primary flex items-center justify-center space-x-2 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links & Newsletter */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6">Follow Our Journey</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stay updated with our latest projects, tech insights, and behind-the-scenes content.
              </p>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/lextech"
                  className="bg-muted p-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/lextech"
                  className="bg-muted p-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/company/lextech"
                  className="bg-muted p-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Tech Newsletter</h3>
              <p className="text-muted-foreground mb-6">
                Get monthly insights on the latest tech trends, project updates, and development tips from our team.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
                <button className="btn-primary px-6">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
