import { Rocket, Target, Eye, Heart, Code, Users, Globe, Award, Lightbulb, Shield, Brain } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-blue-500/5 to-emerald-500/5">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6 animate-fade-in">
            About <span className="gradient-text">Lex Tech</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            We're not just another tech team. We're innovators, problem-solvers, and dreamers building the future one
            line of code at a time.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Our Origin Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  It all started in a small co-working space in 2023. Eight young tech enthusiasts from different
                  backgrounds came together with a shared vision: to use technology as a force for positive change.
                </p>
                <p>
                  What began as late-night coding sessions and passionate discussions about the future of tech quickly
                  evolved into something bigger. We realized that our diverse skills—from AI and cybersecurity to design
                  and full-stack development—could create something truly impactful when combined.
                </p>
                <p>
                  Today, Lex Tech represents our commitment to building technology that doesn't just work, but works for
                  everyone. We're proof that when passionate people come together with a common purpose, extraordinary
                  things happen.
                </p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Our Journey</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">2023 - The Idea</h4>
                      <p className="text-sm text-muted-foreground">8 friends decide to change the world through code</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                      <Code className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">2023 - First Project</h4>
                      <p className="text-sm text-muted-foreground">Built our first social impact platform</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-500/20 p-2 rounded-lg">
                      <Rocket className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">2024 - Growth</h4>
                      <p className="text-sm text-muted-foreground">
                        Expanded to serve clients across multiple industries
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500/20 p-2 rounded-lg">
                      <Globe className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">2024 - Global Impact</h4>
                      <p className="text-sm text-muted-foreground">Projects now reaching users worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="glass-effect p-8 rounded-xl text-center">
              <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To build innovative technology solutions that solve real-world problems and create positive impact for
                communities, businesses, and individuals worldwide.
              </p>
            </div>

            {/* Vision */}
            <div className="glass-effect p-8 rounded-xl text-center">
              <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Eye className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where technology serves humanity, where innovation drives positive change, and where every line
                of code contributes to a better future for all.
              </p>
            </div>

            {/* Values */}
            <div className="glass-effect p-8 rounded-xl text-center">
              <div className="bg-emerald-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-8 w-8 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Innovation, integrity, collaboration, and impact. We believe in building not just great software, but
                great relationships and meaningful solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Detailed */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values shape everything we do, from the code we write to the relationships we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly push boundaries and explore new technologies to create cutting-edge solutions.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe the best solutions come from diverse perspectives working together toward a common goal.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-emerald-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We build trust through transparency, honesty, and delivering on our promises every single time.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every project, from the smallest feature to the largest system architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Our Focus Areas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We specialize in cutting-edge technologies that are shaping the future of digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-xl card-hover">
              <div className="bg-gradient-to-br from-primary to-blue-500 p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Full-Stack Development</h3>
              <p className="text-muted-foreground mb-4">
                From responsive frontends to scalable backends, we build complete web and mobile applications using
                modern frameworks and best practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-muted px-2 py-1 rounded">React</span>
                <span className="text-xs bg-muted px-2 py-1 rounded">Node.js</span>
                <span className="text-xs bg-muted px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-muted px-2 py-1 rounded">TypeScript</span>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-xl card-hover">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI & Machine Learning</h3>
              <p className="text-muted-foreground mb-4">
                We harness the power of artificial intelligence to create intelligent systems that learn, adapt, and
                provide valuable insights.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-muted px-2 py-1 rounded">TensorFlow</span>
                <span className="text-xs bg-muted px-2 py-1 rounded">PyTorch</span>
                <span className="text-xs bg-muted px-2 py-1 rounded">OpenAI</span>
                <span className="text-xs bg-muted px-2 py-1 rounded">Computer Vision</span>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-xl card-hover">
              <div className="bg-gradient-to-br from-red-500 to-orange-500 p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cybersecurity</h3>
              <p className="text-muted-foreground mb-4">
                We implement robust security measures to protect applications and data from evolving cyber threats and
                vulnerabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-muted px-2 py-1 rounded">Penetration Testing</span>
                <span className="text-xs bg-muted px-2 py-1 rounded">Encryption</span>
                <span className="text-xs bg-muted px-2 py-1 rounded">OAuth</span>
                <span className="text-xs bg-muted px-2 py-1 rounded">OWASP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 via-blue-500/10 to-emerald-500/10">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to learn more about what we do, we'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Get In Touch
            </Link>
            <Link href="/projects" className="btn-outline text-lg">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
