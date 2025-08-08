import TeamMember from "@/components/TeamMember";
import ScrollAnimation from "@/components/ScrollAnimation";
import ParallaxSection from "@/components/ParallaxSection";
import CounterAnimation from "@/components/CounterAnimation";
import {
  Users,
  Code,
  Palette,
  Shield,
  Brain,
  Database,
  Smartphone,
  Globe,
  Heart,
  Target,
} from "lucide-react";
import { coreMembers, devTeam } from "../../components/data/teamMembers";

export default function TeamPage() {
  return (
    <div className="pt-20">
      {/* Floating Elements Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-24 left-12 w-18 h-18 bg-primary/10 rounded-full animate-float"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="absolute top-48 right-16 w-14 h-14 bg-blue-500/10 rounded-full animate-float"
          style={{ animationDelay: "0.15s" }}
        ></div>
        <div
          className="absolute bottom-32 left-24 w-22 h-22 bg-emerald-500/10 rounded-full animate-float"
          style={{ animationDelay: "0.12s" }}
        ></div>
        <div
          className="absolute bottom-64 right-32 w-16 h-16 bg-purple-500/10 rounded-full animate-float"
          style={{ animationDelay: "0.18s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-blue-500/5 to-emerald-500/5 relative z-10">
        <div className="container-custom text-center py-20">
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
              Meet Our{" "}
              <span className="gradient-text animate-gradient-shift bg-gradient-to-r from-primary via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={150}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              10+ passionate individuals with diverse skills and a shared vision
              for technology that makes a difference.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Team Stats */}
      <ParallaxSection speed={0.3}>
        <section className="section-padding bg-card/50">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                {
                  end: 10,
                  suffix: "+",
                  label: "Team Members",
                  icon: Users,
                  color: "primary",
                  delay: 120,
                },
                {
                  end: 8,
                  label: "Specializations",
                  icon: Target,
                  color: "blue-500",
                  delay: 140,
                },
                {
                  end: 50,
                  suffix: "+",
                  label: "Technologies",
                  icon: Code,
                  color: "emerald-500",
                  delay: 160,
                },
                {
                  end: 100,
                  suffix: "%",
                  label: "Passion Driven",
                  icon: Heart,
                  color: "purple-500",
                  delay: 180,
                },
              ].map((stat, index) => (
                <ScrollAnimation
                  key={index}
                  animation="scale-up"
                  delay={stat.delay}
                >
                  <div className="p-6 glass-effect rounded-xl card-hover">
                    <div
                      className={`bg-${stat.color}/20 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center animate-pulse-glow`}
                    >
                      <stat.icon className={`h-6 w-6 text-${stat.color}`} />
                    </div>
                    <CounterAnimation
                      end={stat.end}
                      suffix={stat.suffix || ""}
                      className="text-4xl font-bold gradient-text mb-2"
                    />
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Team Specializations */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
                Our Expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Each team member brings unique skills and perspectives to create
                comprehensive technology solutions.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
            {[
              { icon: Code, label: "Full-Stack", color: "primary", delay: 120 },
              { icon: Brain, label: "AI/ML", color: "purple-500", delay: 140 },
              { icon: Shield, label: "Security", color: "red-500", delay: 160 },
              { icon: Palette, label: "Design", color: "blue-500", delay: 180 },
              {
                icon: Database,
                label: "Backend",
                color: "emerald-500",
                delay: 120,
              },
              {
                icon: Globe,
                label: "Frontend",
                color: "orange-500",
                delay: 140,
              },
              {
                icon: Smartphone,
                label: "Mobile",
                color: "pink-500",
                delay: 160,
              },
              { icon: Users, label: "DevOps", color: "cyan-500", delay: 180 },
            ].map((spec, index) => (
              <ScrollAnimation
                key={index}
                animation="scale-up"
                delay={spec.delay}
              >
                <div className="text-center p-4 card-hover">
                  <div
                    className={`bg-${spec.color}/20 p-3 rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <spec.icon className={`h-6 w-6 text-${spec.color}`} />
                  </div>
                  <div className="text-sm font-medium">{spec.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="section-padding bg-card/50 relative z-10">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
                Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the talented individuals who make Lex Tech's vision a
                reality.
              </p>
            </div>
          </ScrollAnimation>

          {/* Core Members */}
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold font-space-grotesk mb-2">
                Core Team
              </h3>
              <p className="text-muted-foreground">
                Visionaries and decision-makers at the helm.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {coreMembers.map((member, index) => (
              <ScrollAnimation
                key={member.name}
                animation="fade-up"
                delay={120 + index * 50}
              >
                <TeamMember {...member} />
              </ScrollAnimation>
            ))}
          </div>

          {/* Dev Team */}
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold font-space-grotesk mb-2">
                Development Team
              </h3>
              <p className="text-muted-foreground">
                Engineers turning ideas into reality.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {devTeam.map((member, index) => (
              <ScrollAnimation
                key={member.name}
                animation="fade-up"
                delay={120 + index * 50}
              >
                <TeamMember {...member} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <ParallaxSection speed={0.2}>
        <section className="section-padding">
          <div className="container-custom">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
                  Our Culture
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  We've built a culture that celebrates diversity, encourages
                  innovation, and supports continuous learning.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Collaborative",
                  desc: "We believe the best solutions come from diverse perspectives working together. Every voice matters and every idea is valued.",
                  color: "primary",
                  delay: 120,
                },
                {
                  icon: Brain,
                  title: "Learning-Focused",
                  desc: "Technology evolves rapidly, and so do we. We encourage continuous learning and provide resources for professional growth.",
                  color: "blue-500",
                  delay: 140,
                },
                {
                  icon: Globe,
                  title: "Impact-Driven",
                  desc: "We're not just building software; we're creating solutions that make a real difference in people's lives.",
                  color: "emerald-500",
                  delay: 160,
                },
              ].map((culture, index) => (
                <ScrollAnimation
                  key={index}
                  animation="scale-up"
                  delay={culture.delay}
                >
                  <div className="glass-effect p-8 rounded-xl text-center card-hover">
                    <div
                      className={`bg-${culture.color}/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center animate-pulse-glow`}
                    >
                      <culture.icon
                        className={`h-8 w-8 text-${culture.color}`}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{culture.title}</h3>
                    <p className="text-muted-foreground">{culture.desc}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Join Us CTA */}
      <ScrollAnimation animation="fade-up" delay={100}>
        <section className="section-padding bg-gradient-to-r from-primary/10 via-blue-500/10 to-emerald-500/10 relative z-10">
          <div className="container-custom text-center py-10">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 ">
              Want to Join Our Team?
            </h2>
            <ScrollAnimation animation="fade-up" delay={120}>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're always looking for passionate individuals who share our
                vision for technology that makes a difference.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="scale-up" delay={140}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@lextech.dev"
                  className="btn-primary text-lg animate-bounce-in"
                >
                  View Open Positions
                </a>
                <a href="/contact" className="btn-outline text-lg">
                  Get In Touch
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
}