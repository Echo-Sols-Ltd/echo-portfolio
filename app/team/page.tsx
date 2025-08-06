import TeamMember from "@/components/TeamMember"
import ScrollAnimation from "@/components/ScrollAnimation"
import ParallaxSection from "@/components/ParallaxSection"
import CounterAnimation from "@/components/CounterAnimation"
import { Users, Code, Palette, Shield, Brain, Database, Smartphone, Globe, Heart, Target } from "lucide-react"

const teamMembers = [
  {
    name: "Shema Leandre",
    role: "CEO & Founder",
    bio: "Passionate about building scalable web applications and leading technical architecture decisions.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker", "GraphQL"],
    image: "/flicky.jpeg",
    social: {
      github: "https://github.com/leandre000",
      linkedin: "https://linkedin.com/in/shema-leandre",
      twitter: "https://x.com/shema_Leandre",
      email: "iamshemaleandre@gmail.com",
    },
    expandedBio:
      "With 5+ years of experience in full-stack development, Alex leads our technical vision and ensures we're using the best practices and latest technologies. He's passionate about mentoring junior developers and building systems that scale.",
  },
  {
    name: "Mugisha Prosper",
    role: "AI/ML Engineer",
    bio: "Specializes in machine learning algorithms and building intelligent systems that solve real-world problems.",
    skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP", "MLOps"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      github: "https://github.com/Joy-Euse",
      // linkedin: "https://linkedin.com/in/maya-patel-ai",
      // email: "maya@lextech.dev",
    },
    expandedBio:
      "Prosper published research papers on computer vision and has experience building production ML systems. She's passionate about making AI accessible and ethical.",
  },
  {
    name: "Niyitanga Honore",
    role: "Cybersecurity Expert",
    bio: "Focuses on application security, penetration testing, and building secure systems from the ground up.",
    skills: ["Penetration Testing", "OWASP", "Cryptography", "Security Auditing", "Incident Response", "Compliance"],
    image: "/honore.jpeg",
    social: {
      github: "https://github.com/nihonor",
      // linkedin: "https://linkedin.com/in/jordan-kim-security",
      // twitter: "https://twitter.com/jordansec",
      // email: "jordan@lextech.dev",
    },
    expandedBio:
      "Niyitanga is a certified ethical hacker with experience in both offensive and defensive security. They've helped numerous startups implement security best practices and have spoken at several cybersecurity conferences.",
  },
  {
    name: "Irakoze Dianah",
    role: "UI/UX Designer",
    bio: "Creates beautiful, intuitive user experiences that bridge the gap between design and functionality.",
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping", "Design Systems", "Accessibility"],
    image: "/dianah.jpeg",
    social: {
      github:"https://github.com/IRANZI",
      // linkedin: "https://linkedin.com/in/sam-rodriguez-design",
      twitter: "https://x.com/GITEGOLUNAR",
      email: "iradianah5@gmail.com",
    },
    expandedBio:
      "Dianah has a background in graphic design and human-computer interaction. They're passionate about creating inclusive designs and have worked with nonprofits to improve digital accessibility for underserved communities.",
  },
  {
    name: "Hirwa Jovin",
    role: "Backend Engineer",
    bio: "Builds robust APIs and database architectures that power our applications at scale.",
    skills: ["Springboot/Java","Python", "Django", "PostgreSQL", "Redis", "Microservices", "API Design"],
    image: "/jvn.jpeg",
    social: {
      github: "https://github.com/AbayoHJovin",
      // linkedin: "https://linkedin.com/in/riley-thompson-backend",
      email: "abayohirwajovin@gmail.com",
    },
    expandedBio:
      "Hirwa specializes in building high-performance backend systems and has experience with distributed architectures. They're passionate about database optimization and have contributed to several open-source projects.",
  },
  {
    name: "Ishimwe Liana",
    role: "Frontend Developer",
    bio: "Crafts responsive, performant user interfaces with a focus on modern web technologies.",
    skills: ["React", "Vue.js", "CSS/SASS", "JavaScript", "Webpack", "Performance Optimization"],
    image: "/liana.jpeg",
    social: {
      github: "https://github.com/TETA-Liana",
      // linkedin: "https://linkedin.com/in/casey-wu-frontend",
      twitter: "https://x.com/teta2044",
      email: "tetaliana287@gmail.com",
    },
    expandedBio:
      "Liana is passionate about creating smooth user experiences and staying up-to-date with the latest frontend frameworks. They regularly contribute to the open-source community and mentor aspiring developers.",
  },
  {
    name: "Iradukunda Joyuese",
    role: "Backend Engineer",
    bio: "Builds robust APIs and database architectures that power our applications at scale.",
    skills: ["Springboot/Java","Python", "Django", "PostgreSQL", "Redis", "Microservices", "API Design"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      github: "https://github.com/Uhirwe",
      // linkedin: "https://linkedin.com/in/riley-thompson-backend",
      // email: "riley@lextech.dev",
    },
    expandedBio:
      "Iradukunda specializes in building high-performance backend systems and has experience with distributed architectures. They're passionate about database optimization and have contributed to several open-source projects.",
  },
  {
    name: "Iradukunda Hope",
    role: "UI/UX Designer",
    bio: "Creates beautiful, intuitive user experiences that bridge the gap between design and functionality.",
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping", "Design Systems", "Accessibility"],
    image: "/hope.jpeg",
    social: {
      // linkedin: "https://linkedin.com/in/sam-rodriguez-design",
      twitter: "https://www.instagram.com/h._esther_/",
      // email: "sam@lextech.dev",
    },
    expandedBio:
      "Iradukunda has a background in graphic design and human-computer interaction. They're passionate about creating inclusive designs and have worked with nonprofits to improve digital accessibility for underserved communities.",
  },
    {
    name: "Nziza Prince",
    role: "Fullstack Engineer",
    bio: "Builds robust Applications and system architectures that power our applications at scale.",
    skills: ["Vue","React", "Next js", "Springboot","Java","Tanstack Query", "PostgreSQL", "Redis", "Nest js", "Microservices with nest", "API Design"],
    image: "/nziza.png",
    social: {
      github: "https://github.com/Nziza-Prince",
      linkedin: "https://www.linkedin.com/in/nziza-prince-a45b74296/",
      email: "nzizaprince7@gmail.com",
    },
    expandedBio:
      "Nziza specializes in building high-performance fullstack systems and has experience with distributed architectures. They're passionate about database optimization and have contributed to several open-source projects.",
  },
]

export default function TeamPage() {
  return (
    <div className="pt-20">
      {/* Floating Elements Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-24 left-12 w-18 h-18 bg-primary/10 rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-48 right-16 w-14 h-14 bg-blue-500/10 rounded-full animate-float"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute bottom-32 left-24 w-22 h-22 bg-emerald-500/10 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-64 right-32 w-16 h-16 bg-purple-500/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-blue-500/5 to-emerald-500/5 relative z-10">
        <div className="container-custom text-center py-20">
          <ScrollAnimation animation="fade-up" delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
              Meet Our{" "}
              <span className="gradient-text animate-gradient-shift bg-gradient-to-r from-primary via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={400}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              8 passionate individuals with diverse skills and a shared vision for technology that makes a difference.
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
                { end: 8, label: "Team Members", icon: Users, color: "primary", delay: 400 },
                { end: 5, label: "Specializations", icon: Target, color: "blue-500", delay: 600 },
                { end: 50, suffix: "+", label: "Technologies", icon: Code, color: "emerald-500", delay: 800 },
                { end: 100, suffix: "%", label: "Passion Driven", icon: Heart, color: "purple-500", delay: 900 },
              ].map((stat, index) => (
                <ScrollAnimation key={index} animation="scale-up" delay={stat.delay}>
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
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Our Expertise</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Each team member brings unique skills and perspectives to create comprehensive technology solutions.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
            {[
              { icon: Code, label: "Full-Stack", color: "primary", delay: 300 },
              { icon: Brain, label: "AI/ML", color: "purple-500", delay: 400 },
              { icon: Shield, label: "Security", color: "red-500", delay: 500 },
              { icon: Palette, label: "Design", color: "blue-500", delay: 600 },
              { icon: Database, label: "Backend", color: "emerald-500", delay: 700 },
              { icon: Globe, label: "Frontend", color: "orange-500", delay: 800 },
              { icon: Smartphone, label: "Mobile", color: "pink-500", delay: 900 },
              { icon: Users, label: "DevOps", color: "cyan-500", delay: 900 },
            ].map((spec, index) => (
              <ScrollAnimation key={index} animation="scale-up" delay={spec.delay}>
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
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the talented individuals who make Lex Tech's vision a reality.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={member.name} animation="fade-up" delay={300 + index * 100}>
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
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Our Culture</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  We've built a culture that celebrates diversity, encourages innovation, and supports continuous
                  learning.
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
                  delay: 400,
                },
                {
                  icon: Brain,
                  title: "Learning-Focused",
                  desc: "Technology evolves rapidly, and so do we. We encourage continuous learning and provide resources for professional growth.",
                  color: "blue-500",
                  delay: 600,
                },
                {
                  icon: Globe,
                  title: "Impact-Driven",
                  desc: "We're not just building software; we're creating solutions that make a real difference in people's lives.",
                  color: "emerald-500",
                  delay: 800,
                },
              ].map((culture, index) => (
                <ScrollAnimation key={index} animation="scale-up" delay={culture.delay}>
                  <div className="glass-effect p-8 rounded-xl text-center card-hover">
                    <div
                      className={`bg-${culture.color}/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center animate-pulse-glow`}
                    >
                      <culture.icon className={`h-8 w-8 text-${culture.color}`} />
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
      <ScrollAnimation animation="fade-up" delay={200}>
        <section className="section-padding bg-gradient-to-r from-primary/10 via-blue-500/10 to-emerald-500/10 relative z-10">
          <div className="container-custom text-center py-10">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 ">
              Want to Join Our Team?
            </h2>
            <ScrollAnimation animation="fade-up" delay={400}>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're always looking for passionate individuals who share our vision for technology that makes a
                difference.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="scale-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:careers@lextech.dev" className="btn-primary text-lg animate-bounce-in">
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
  )
}
