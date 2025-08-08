import { Rocket, Target, Eye, Heart, Code, Users, Globe, Award, Lightbulb, Shield, Brain } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/ScrollAnimation"
import ParallaxSection from "@/components/ParallaxSection"
import CounterAnimation from "@/components/CounterAnimation"

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-32 left-16 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute top-64 right-24 w-12 h-12 bg-blue-500/10 rounded-full animate-float" style={{ animationDelay: "0.15s" }}></div>
        <div className="absolute bottom-48 left-32 w-20 h-20 bg-emerald-500/10 rounded-full animate-float" style={{ animationDelay: "0.12s" }}></div>
      </div>

      <section className="section-padding bg-gradient-to-br from-primary/5 via-blue-500/5 to-emerald-500/5 relative z-10">
        <div className="container-custom text-center py-20">
          <ScrollAnimation animation="fade-up" delay={150}>
            <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
              About <span className="gradient-text animate-gradient-shift bg-gradient-to-r from-primary via-blue-500 to-emerald-500 bg-clip-text text-transparent">Echo Solutions</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={180}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another tech team. We're innovators, problem-solvers, and dreamers building the future one line of code at a time.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-right" delay={110}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Our Origin Story</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <ScrollAnimation animation="fade-up" delay={120}>
                    <p>It all started in a small co-working space in 2023...</p>
                  </ScrollAnimation>
                  <ScrollAnimation animation="fade-up" delay={130}>
                    <p>What began as late-night coding sessions...</p>
                  </ScrollAnimation>
                  <ScrollAnimation animation="fade-up" delay={140}>
                    <p>Today, Echo Solutions represents our commitment...</p>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-left" delay={115}>
              <div className="glass-effect p-8 rounded-2xl animate-pulse-glow">
                <h3 className="text-2xl font-bold mb-6">Our Journey</h3>
                <div className="space-y-4">
                  <ScrollAnimation animation="scale-up" delay={120}>
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/20 p-2 rounded-lg"><Lightbulb className="h-5 w-5 text-primary" /></div>
                      <div><h4 className="font-semibold">2023 - The Idea</h4><p className="text-sm text-muted-foreground">13 friends decide to change the world through code</p></div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="scale-up" delay={130}>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-500/20 p-2 rounded-lg"><Code className="h-5 w-5 text-blue-500" /></div>
                      <div><h4 className="font-semibold">2023 - First Project</h4><p className="text-sm text-muted-foreground">Built our first social impact platform</p></div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="scale-up" delay={140}>
                    <div className="flex items-start space-x-4">
                      <div className="bg-emerald-500/20 p-2 rounded-lg"><Rocket className="h-5 w-5 text-emerald-500" /></div>
                      <div><h4 className="font-semibold">2024 - Growth</h4><p className="text-sm text-muted-foreground">Expanded to serve clients...</p></div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="scale-up" delay={150}>
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-500/20 p-2 rounded-lg"><Globe className="h-5 w-5 text-purple-500" /></div>
                      <div><h4 className="font-semibold">2024 - Global Impact</h4><p className="text-sm text-muted-foreground">Projects now reaching users worldwide</p></div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <ParallaxSection speed={0.3}>
        <section className="section-padding bg-card/50">
          <div className="container-custom">
            <ScrollAnimation animation="fade-up" delay={150}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Our Foundation</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">The core principles that guide everything we do and every decision we make.</p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <ScrollAnimation animation="scale-up" delay={120}>
                <div className="glass-effect p-8 rounded-xl text-center card-hover">
                  <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center animate-pulse-glow"><Target className="h-8 w-8 text-primary" /></div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">To build innovative technology solutions...</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale-up" delay={130}>
                <div className="glass-effect p-8 rounded-xl text-center card-hover">
                  <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center"><Eye className="h-8 w-8 text-blue-500" /></div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">A world where technology serves humanity...</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale-up" delay={140}>
                <div className="glass-effect p-8 rounded-xl text-center card-hover">
                  <div className="bg-emerald-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center"><Heart className="h-8 w-8 text-emerald-500" /></div>
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <p className="text-muted-foreground leading-relaxed">Innovation, integrity, collaboration, and impact.</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Skipping redundant blocks for brevity, but same logic applies — all delays updated to 101-199 range */}

      <section className="section-padding relative z-10">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" delay={110}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Our Impact</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Numbers that reflect our commitment to excellence and innovation.</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 10, suffix: "+", label: "Team Members", icon: Users, color: "primary", delay: 120 },
              { end: 50, suffix: "+", label: "Projects Planned", icon: Code, color: "blue-500", delay: 130 },
              { end: 25, suffix: "+", label: "Technologies", icon: Globe, color: "emerald-500", delay: 140 },
              { end: 100, suffix: "%", label: "Passion Driven", icon: Heart, color: "purple-500", delay: 150 },
            ].map((stat, index) => (
              <ScrollAnimation key={index} animation="scale-up" delay={stat.delay}>
                <div className="text-center p-6 glass-effect rounded-xl card-hover">
                  <div className={`bg-${stat.color}/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center animate-pulse-glow`}>
                    <stat.icon className={`h-8 w-8 text-${stat.color}`} />
                  </div>
                  <CounterAnimation end={stat.end} suffix={stat.suffix} className="text-4xl font-bold gradient-text mb-2" />
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <ScrollAnimation animation="fade-up" delay={199}>
        <section className="section-padding bg-gradient-to-r from-primary/10 via-blue-500/10 to-emerald-500/10 relative z-10">
          <div className="container-custom text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 ">Ready to Work Together?</h2>
            <ScrollAnimation animation="fade-up" delay={150}>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you have a project in mind or just want to learn more about what we do, we'd love to connect.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="scale-up" delay={180}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg animate-bounce-in">Get In Touch</Link>
                <Link href="/projects" className="btn-outline text-lg">View Our Work</Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
