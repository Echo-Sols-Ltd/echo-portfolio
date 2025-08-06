import Hero from "@/components/Hero"
import ScrollAnimation from "@/components/ScrollAnimation"
import ParallaxSection from "@/components/ParallaxSection"
import CounterAnimation from "@/components/CounterAnimation"
import Link from "next/link"
import { ArrowRight, Code, Palette, Shield, Brain, Users, Rocket, Heart, Globe, Star } from "lucide-react"

export default function Home() {
  return (
    <>
      <Hero />

      {/* Floating Elements Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-blue-500/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-emerald-500/10 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-12 h-12 bg-purple-500/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* About Preview Section */}
      <section className="section-padding bg-card/50 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-right" delay={200}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Who We Are</h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  We're a collective of young, passionate technologists who believe in using our skills to create
                  meaningful impact. From AI-powered solutions to secure web applications, we build technology that
                  matters.
                </p>
                <div className="space-y-4 mb-8">
                  <ScrollAnimation animation="fade-up" delay={400}>
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/20 p-2 rounded-lg animate-pulse-glow">
                        <Rocket className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground">Innovation-first approach</span>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="fade-up" delay={600}>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-500/20 p-2 rounded-lg">
                        <Users className="h-5 w-5 text-blue-500" />
                      </div>
                      <span className="text-foreground">Collaborative team culture</span>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="fade-up" delay={700}>
                    <div className="flex items-center space-x-3">
                      <div className="bg-emerald-500/20 p-2 rounded-lg">
                        <Heart className="h-5 w-5 text-emerald-500" />
                      </div>
                      <span className="text-foreground">Social impact focus</span>
                    </div>
                  </ScrollAnimation>
                </div>
                <ScrollAnimation animation="scale-up" delay={800}>
                  <Link href="/about" className="btn-primary inline-flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-left" delay={400}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <ScrollAnimation animation="scale-up" delay={400}>
                    <div className="glass-effect p-6 rounded-xl card-hover group">
                      <Code className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-semibold mb-2">Development</h3>
                      <p className="text-sm text-muted-foreground">Full-stack web & mobile applications</p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="scale-up" delay={600}>
                    <div className="glass-effect p-6 rounded-xl card-hover group">
                      <Brain className="h-8 w-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-semibold mb-2">AI/ML</h3>
                      <p className="text-sm text-muted-foreground">Intelligent solutions & automation</p>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="space-y-4 mt-8">
                  <ScrollAnimation animation="scale-up" delay={600}>
                    <div className="glass-effect p-6 rounded-xl card-hover group">
                      <Palette className="h-8 w-8 text-emerald-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-semibold mb-2">Design</h3>
                      <p className="text-sm text-muted-foreground">UI/UX & brand experiences</p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="scale-up" delay={800}>
                    <div className="glass-effect p-6 rounded-xl card-hover group">
                      <Shield className="h-8 w-8 text-red-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-semibold mb-2">Security</h3>
                      <p className="text-sm text-muted-foreground">Cybersecurity & data protection</p>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats Section with Counter Animations */}
      <ParallaxSection speed={0.3}>
        <section className="section-padding bg-gradient-to-r from-primary/10 via-blue-500/10 to-emerald-500/10">
          <div className="container-custom">
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Our Impact in Numbers</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Every project we build is designed to create meaningful change and lasting impact.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <ScrollAnimation animation="scale-up" delay={400}>
                <div className="text-center p-6 glass-effect rounded-xl card-hover">
                  <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CounterAnimation end={8} className="text-4xl font-bold gradient-text mb-2" />
                  <div className="text-muted-foreground">Team Members</div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale-up" delay={600}>
                <div className="text-center p-6 glass-effect rounded-xl card-hover">
                  <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Code className="h-8 w-8 text-blue-500" />
                  </div>
                  <CounterAnimation end={50} suffix="+" className="text-4xl font-bold gradient-text mb-2" />
                  <div className="text-muted-foreground">Projects Planned</div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale-up" delay={700}>
                <div className="text-center p-6 glass-effect rounded-xl card-hover">
                  <div className="bg-emerald-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-emerald-500" />
                  </div>
                  <CounterAnimation end={25} suffix="+" className="text-4xl font-bold gradient-text mb-2" />
                  <div className="text-muted-foreground">Technologies</div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale-up" delay={800}>
                <div className="text-center p-6 glass-effect rounded-xl card-hover">
                  <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Star className="h-8 w-8 text-purple-500" />
                  </div>
                  <CounterAnimation end={100} suffix="%" className="text-4xl font-bold gradient-text mb-2" />
                  <div className="text-muted-foreground">Passion Driven</div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Featured Projects Section */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Projects Coming Soon</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're working on exciting projects that will showcase our diverse capabilities across AI, security, and
                social impact.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Charity Platform */}
            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="glass-effect rounded-xl overflow-hidden card-hover group">
                <div className="h-48 bg-gradient-to-br from-emerald-500 to-blue-500 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full font-medium animate-pulse">
                      In Development
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">Charity Connect</h3>
                    <span className="text-xs bg-emerald-500/20 text-emerald-500 px-2 py-1 rounded-full">
                      Social Impact
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    A transparent donation platform connecting donors with verified charities using blockchain
                    technology.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-muted px-2 py-1 rounded">React</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded">Node.js</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded">Blockchain</span>
                  </div>
                  <div className="text-muted-foreground text-sm">
                    <span>🚀 Coming Q2 2024</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* AI Project */}
            <ScrollAnimation animation="fade-up" delay={600}>
              <div className="glass-effect rounded-xl overflow-hidden card-hover group">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Brain className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full font-medium">
                      Planning
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                  <div className="text-muted-foreground text-sm">
                    <span>🔬 Coming Q3 2024</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Security Project */}
            <ScrollAnimation animation="fade-up" delay={800}>
              <div className="glass-effect rounded-xl overflow-hidden card-hover group">
                <div className="h-48 bg-gradient-to-br from-red-500 to-orange-500 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full font-medium">
                      Concept
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                  <div className="text-muted-foreground text-sm">
                    <span>💡 Coming Q4 2024</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="scale-up" delay={700}>
            <div className="text-center mt-12">
              <div className="glass-effect p-8 rounded-xl max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Want to Work With Us?</h3>
                <p className="text-muted-foreground mb-6">
                  While we're building our portfolio, we're ready to take on client projects and bring your ideas to
                  life.
                </p>
                <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Team Preview Section */}
      <ParallaxSection speed={0.2}>
        <section className="section-padding bg-card/50">
          <div className="container-custom">
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Meet Our Team</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  8 passionate individuals with diverse skills and a shared vision for technology that makes a
                  difference.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
              {
                name: "Shema Leandre",
                role: "CEO and Founder",
                avatar: "/flicky.jpeg",
                delay:400
              },
              {
                name: "Irakoze Dianah",
                role: "UI/UX Designer/Frontend",
                avatar: "dianah.jpeg",
                delay:600
              },
              {
                name: "Hirwa Jovin",
                role: "Backend/Embedded expert",
                avatar: "/jvn.jpeg",
                delay:700
              },
              {
                name: "Ishimwe Liana",
                role: "Frontend Developer",
                avatar: "/liana.jpeg",
                delay:800
              },
            ].map((member, index) => (
                <ScrollAnimation key={index} animation="scale-up" delay={member.delay}>
                  <div className="text-center group">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 ring-4 ring-primary/20 animate-pulse-glow">
                      <img
                        src={member.avatar || "/placeholder.svg"}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation animation="fade-up" delay={1200}>
              <div className="text-center mt-12">
                <Link href="/team" className="btn-primary inline-flex items-center space-x-2">
                  <span>Meet Everyone</span>
                  <Users className="h-5 w-5" />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ParallaxSection>

      {/* CTA Section */}
      <ScrollAnimation animation="fade-up" delay={200}>
        <section className="section-padding bg-gradient-to-r from-primary/10 via-blue-500/10 to-emerald-500/10 relative z-10">
          <div className="container-custom text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 py-10">
              Ready to Build Something Amazing?
            </h2>
            <ScrollAnimation animation="fade-up" delay={400}>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you have a project in mind or just want to chat about technology, we'd love to hear from you.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="scale-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg animate-bounce-in">
                  Start a Project
                </Link>
                <Link href="/about" className="btn-outline text-lg">
                  Learn More
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>
    </>
  )
}
