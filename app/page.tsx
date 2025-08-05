import Hero from "@/components/Hero"
import Link from "next/link"
import { ArrowRight, Code, Palette, Shield, Brain, Users, Rocket, Heart, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Preview Section */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Who We Are</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We're a collective of young, passionate technologists who believe in using our skills to create
                meaningful impact. From AI-powered solutions to secure web applications, we build technology that
                matters.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Rocket className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">Innovation-first approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-blue-500" />
                  </div>
                  <span className="text-foreground">Collaborative team culture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-500/20 p-2 rounded-lg">
                    <Heart className="h-5 w-5 text-emerald-500" />
                  </div>
                  <span className="text-foreground">Social impact focus</span>
                </div>
              </div>
              <Link href="/about" className="btn-primary inline-flex items-center space-x-2">
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="glass-effect p-6 rounded-xl card-hover">
                    <Code className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Development</h3>
                    <p className="text-sm text-muted-foreground">Full-stack web & mobile applications</p>
                  </div>
                  <div className="glass-effect p-6 rounded-xl card-hover">
                    <Brain className="h-8 w-8 text-blue-500 mb-3" />
                    <h3 className="font-semibold mb-2">AI/ML</h3>
                    <p className="text-sm text-muted-foreground">Intelligent solutions & automation</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="glass-effect p-6 rounded-xl card-hover">
                    <Palette className="h-8 w-8 text-emerald-500 mb-3" />
                    <h3 className="font-semibold mb-2">Design</h3>
                    <p className="text-sm text-muted-foreground">UI/UX & brand experiences</p>
                  </div>
                  <div className="glass-effect p-6 rounded-xl card-hover">
                    <Shield className="h-8 w-8 text-red-500 mb-3" />
                    <h3 className="font-semibold mb-2">Security</h3>
                    <p className="text-sm text-muted-foreground">Cybersecurity & data protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of our latest work spanning social impact, AI innovation, and cutting-edge web experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Charity Platform */}
            <div className="glass-effect rounded-xl overflow-hidden card-hover group">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-blue-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="h-16 w-16 text-white/80" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">Charity Connect</h3>
                  <span className="text-xs bg-emerald-500/20 text-emerald-500 px-2 py-1 rounded-full">
                    Social Impact
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">
                  A transparent donation platform connecting donors with verified charities using blockchain technology.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-muted px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">Node.js</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">Blockchain</span>
                </div>
                <Link
                  href="/projects"
                  className="text-primary hover:text-primary/80 inline-flex items-center space-x-1"
                >
                  <span>View Project</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* AI Project */}
            <div className="glass-effect rounded-xl overflow-hidden card-hover group">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="h-16 w-16 text-white/80" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">SmartAnalytics</h3>
                  <span className="text-xs bg-purple-500/20 text-purple-500 px-2 py-1 rounded-full">AI/ML</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Machine learning platform for predictive analytics and automated business insights.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-muted px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">TensorFlow</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">FastAPI</span>
                </div>
                <Link
                  href="/projects"
                  className="text-primary hover:text-primary/80 inline-flex items-center space-x-1"
                >
                  <span>View Project</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Security Project */}
            <div className="glass-effect rounded-xl overflow-hidden card-hover group">
              <div className="h-48 bg-gradient-to-br from-red-500 to-orange-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="h-16 w-16 text-white/80" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">SecureVault</h3>
                  <span className="text-xs bg-red-500/20 text-red-500 px-2 py-1 rounded-full">Security</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Enterprise-grade password manager with zero-knowledge encryption and biometric authentication.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-muted px-2 py-1 rounded">Rust</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">WebAssembly</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">Encryption</span>
                </div>
                <Link
                  href="/projects"
                  className="text-primary hover:text-primary/80 inline-flex items-center space-x-1"
                >
                  <span>View Project</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="btn-outline inline-flex items-center space-x-2">
              <span>View All Projects</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              8 passionate individuals with diverse skills and a shared vision for technology that makes a difference.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Alex Chen", role: "Full-Stack Lead", avatar: "AC" },
              { name: "Maya Patel", role: "AI/ML Engineer", avatar: "MP" },
              { name: "Jordan Kim", role: "Security Expert", avatar: "JK" },
              { name: "Sam Rodriguez", role: "UI/UX Designer", avatar: "SR" },
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/team" className="btn-primary inline-flex items-center space-x-2">
              <span>Meet Everyone</span>
              <Users className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 via-blue-500/10 to-emerald-500/10">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about technology, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Start a Project
            </Link>
            <Link href="/about" className="btn-outline text-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
