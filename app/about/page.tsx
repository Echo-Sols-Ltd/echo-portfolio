import { Rocket, Target, Eye, Heart, Code, Users, Globe, Award, Lightbulb, Shield, Brain } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/ScrollAnimation"
import ParallaxSection from "@/components/ParallaxSection"
import CounterAnimation from "@/components/CounterAnimation"

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Floating Elements Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-32 left-16 w-16 h-16 bg-primary/10 rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-64 right-24 w-12 h-12 bg-blue-500/10 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-48 left-32 w-20 h-20 bg-emerald-500/10 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-blue-500/5 to-emerald-500/5 relative z-10">
        <div className="container-custom text-center py-20">
          <ScrollAnimation animation="fade-up" delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
              About{" "}
              <span className="gradient-text animate-gradient-shift bg-gradient-to-r from-primary via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Lex Tech
              </span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={400}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another tech team. We're innovators, problem-solvers, and dreamers building the future one
              line of code at a time.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-right" delay={200}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Our Origin Story</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <ScrollAnimation animation="fade-up" delay={400}>
                    <p>
                      It all started in a small co-working space in 2023. Eight young tech enthusiasts from different
                      backgrounds came together with a shared vision: to use technology as a force for positive change.
                    </p>
                  </ScrollAnimation>
                  <ScrollAnimation animation="fade-up" delay={600}>
                    <p>
                      What began as late-night coding sessions and passionate discussions about the future of tech
                      quickly evolved into something bigger. We realized that our diverse skills—from AI and
                      cybersecurity to design and full-stack development—could create something truly impactful when
                      combined.
                    </p>
                  </ScrollAnimation>
                  <ScrollAnimation animation="fade-up" delay={800}>
                    <p>
                      Today, Lex Tech represents our commitment to building technology that doesn't just work, but works
                      for everyone. We're proof that when passionate people come together with a common purpose,
                      extraordinary things happen.
                    </p>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-left" delay={300}>
              <div className="glass-effect p-8 rounded-2xl animate-pulse-glow">
                <h3 className="text-2xl font-bold mb-6">Our Journey</h3>
                <div className="space-y-4">
                  <ScrollAnimation animation="scale-up" delay={500}>
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/20 p-2 rounded-lg">
                        <Lightbulb className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">2023 - The Idea</h4>
                        <p className="text-sm text-muted-foreground">
                          13 friends decide to change the world through code
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="scale-up" delay={700}>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-500/20 p-2 rounded-lg">
                        <Code className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold">2023 - First Project</h4>
                        <p className="text-sm text-muted-foreground">Built our first social impact platform</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="scale-up" delay={800}>
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
                  </ScrollAnimation>
                  <ScrollAnimation animation="scale-up" delay={1000}>
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-500/20 p-2 rounded-lg">
                        <Globe className="h-5 w-5 text-purple-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold">2024 - Global Impact</h4>
                        <p className="text-sm text-muted-foreground">Projects now reaching users worldwide</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <ParallaxSection speed={0.3}>
        <section className="section-padding bg-card/50">
          <div className="container-custom">
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Our Foundation</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  The core principles that guide everything we do and every decision we make.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Mission */}
              <ScrollAnimation animation="scale-up" delay={400}>
                <div className="glass-effect p-8 rounded-xl text-center card-hover">
                  <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center animate-pulse-glow">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To build innovative technology solutions that solve real-world problems and create positive impact
                    for communities, businesses, and individuals worldwide.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Vision */}
              <ScrollAnimation animation="scale-up" delay={600}>
                <div className="glass-effect p-8 rounded-xl text-center card-hover">
                  <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where technology serves humanity, where innovation drives positive change, and where every
                    line of code contributes to a better future for all.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Values */}
              <ScrollAnimation animation="scale-up" delay={800}>
                <div className="glass-effect p-8 rounded-xl text-center card-hover">
                  <div className="bg-emerald-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Innovation, integrity, collaboration, and impact. We believe in building not just great software,
                    but great relationships and meaningful solutions.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Core Values Detailed */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">What Drives Us</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our core values shape everything we do, from the code we write to the relationships we build.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "We constantly push boundaries and explore new technologies to create cutting-edge solutions.",
                color: "primary",
                delay: 400,
              },
              {
                icon: Users,
                title: "Collaboration",
                desc: "We believe the best solutions come from diverse perspectives working together toward a common goal.",
                color: "blue-500",
                delay: 600,
              },
              {
                icon: Shield,
                title: "Integrity",
                desc: "We operate with complete transparency and honesty, ensuring that trust is the foundation of all our relationships.",
                color: "emerald-500",
                delay: 800,
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "We strive for excellence in every project, from the smallest feature to the largest system architecture.",
                color: "purple-500",
                delay: 900,
              },
            ].map((value, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={value.delay}>
                <div className="text-center p-6 card-hover">
                  <div
                    className={`bg-${value.color}/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className={`h-8 w-8 text-${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <ParallaxSection speed={0.2}>
        <section className="section-padding bg-card/50">
          <div className="container-custom">
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Our Focus Areas</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  We specialize in cutting-edge technologies that are shaping the future of digital experiences.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: "Full-Stack Development",
                  desc: "From responsive frontends to scalable backends, we build complete web and mobile applications using modern frameworks and best practices.",
                  gradient: "from-primary to-blue-500",
                  tags: ["React", "Node.js", "Python", "TypeScript"],
                  delay: 400,
                },
                {
                  icon: Brain,
                  title: "AI & Machine Learning",
                  desc: "We harness the power of artificial intelligence to create intelligent systems that learn, adapt, and provide valuable insights.",
                  gradient: "from-purple-500 to-pink-500",
                  tags: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"],
                  delay: 600,
                },
                {
                  icon: Shield,
                  title: "Cybersecurity",
                  desc: "We implement robust security measures to protect applications and data from evolving cyber threats and vulnerabilities.",
                  gradient: "from-red-500 to-orange-500",
                  tags: ["Penetration Testing", "Encryption", "OAuth", "OWASP"],
                  delay: 800,
                },
              ].map((area, index) => (
                <ScrollAnimation key={index} animation="scale-up" delay={area.delay}>
                  <div className="glass-effect p-8 rounded-xl card-hover group">
                    <div
                      className={`bg-gradient-to-br ${area.gradient} p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <area.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                    <p className="text-muted-foreground mb-4">{area.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-muted px-2 py-1 rounded animate-bounce-in"
                          style={{ animationDelay: `${tagIndex * 100}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Stats Section */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Our Impact</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and innovation.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 10, suffix: "+", label: "Team Members", icon: Users, color: "primary", delay: 400 },
              { end: 50, suffix: "+", label: "Projects Planned", icon: Code, color: "blue-500", delay: 600 },
              { end: 25, suffix: "+", label: "Technologies", icon: Globe, color: "emerald-500", delay: 800 },
              { end: 100, suffix: "%", label: "Passion Driven", icon: Heart, color: "purple-500", delay: 1000 },
            ].map((stat, index) => (
              <ScrollAnimation key={index} animation="scale-up" delay={stat.delay}>
                <div className="text-center p-6 glass-effect rounded-xl card-hover">
                  <div
                    className={`bg-${stat.color}/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center animate-pulse-glow`}
                  >
                    <stat.icon className={`h-8 w-8 text-${stat.color}`} />
                  </div>
                  <CounterAnimation
                    end={stat.end}
                    suffix={stat.suffix}
                    className="text-4xl font-bold gradient-text mb-2"
                  />
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollAnimation animation="fade-up" delay={200}>
        <section className="section-padding bg-gradient-to-r from-primary/10 via-blue-500/10 to-emerald-500/10 relative z-10">
          <div className="container-custom text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 ">
              Ready to Work Together?
            </h2>
            <ScrollAnimation animation="fade-up" delay={400}>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you have a project in mind or just want to learn more about what we do, we'd love to connect.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="scale-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg animate-bounce-in">
                  Get In Touch
                </Link>
                <Link href="/projects" className="btn-outline text-lg">
                  View Our Work
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
