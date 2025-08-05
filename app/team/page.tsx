import TeamMember from "@/components/TeamMember"
import { Users, Code, Palette, Shield, Brain, Database, Smartphone, Globe } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Full-Stack Lead & Co-Founder",
    bio: "Passionate about building scalable web applications and leading technical architecture decisions.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker", "GraphQL"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alex-chen-dev",
      twitter: "https://twitter.com/alexchendev",
      email: "alex@lextech.dev",
    },
    expandedBio:
      "With 5+ years of experience in full-stack development, Alex leads our technical vision and ensures we're using the best practices and latest technologies. He's passionate about mentoring junior developers and building systems that scale.",
  },
  {
    name: "Maya Patel",
    role: "AI/ML Engineer",
    bio: "Specializes in machine learning algorithms and building intelligent systems that solve real-world problems.",
    skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP", "MLOps"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      github: "https://github.com/mayapatel",
      linkedin: "https://linkedin.com/in/maya-patel-ai",
      email: "maya@lextech.dev",
    },
    expandedBio:
      "Maya holds a Master's in Computer Science with a focus on AI. She's published research papers on computer vision and has experience building production ML systems. She's passionate about making AI accessible and ethical.",
  },
  {
    name: "Jordan Kim",
    role: "Cybersecurity Expert",
    bio: "Focuses on application security, penetration testing, and building secure systems from the ground up.",
    skills: ["Penetration Testing", "OWASP", "Cryptography", "Security Auditing", "Incident Response", "Compliance"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      github: "https://github.com/jordankim",
      linkedin: "https://linkedin.com/in/jordan-kim-security",
      twitter: "https://twitter.com/jordansec",
      email: "jordan@lextech.dev",
    },
    expandedBio:
      "Jordan is a certified ethical hacker with experience in both offensive and defensive security. They've helped numerous startups implement security best practices and have spoken at several cybersecurity conferences.",
  },
  {
    name: "Sam Rodriguez",
    role: "UI/UX Designer",
    bio: "Creates beautiful, intuitive user experiences that bridge the gap between design and functionality.",
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping", "Design Systems", "Accessibility"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "https://linkedin.com/in/sam-rodriguez-design",
      twitter: "https://twitter.com/samdesigns",
      email: "sam@lextech.dev",
    },
    expandedBio:
      "Sam has a background in graphic design and human-computer interaction. They're passionate about creating inclusive designs and have worked with nonprofits to improve digital accessibility for underserved communities.",
  },
  {
    name: "Riley Thompson",
    role: "Backend Engineer",
    bio: "Builds robust APIs and database architectures that power our applications at scale.",
    skills: ["Python", "Django", "PostgreSQL", "Redis", "Microservices", "API Design"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      github: "https://github.com/rileythompson",
      linkedin: "https://linkedin.com/in/riley-thompson-backend",
      email: "riley@lextech.dev",
    },
    expandedBio:
      "Riley specializes in building high-performance backend systems and has experience with distributed architectures. They're passionate about database optimization and have contributed to several open-source projects.",
  },
  {
    name: "Casey Wu",
    role: "Frontend Developer",
    bio: "Crafts responsive, performant user interfaces with a focus on modern web technologies.",
    skills: ["React", "Vue.js", "CSS/SASS", "JavaScript", "Webpack", "Performance Optimization"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      github: "https://github.com/caseywu",
      linkedin: "https://linkedin.com/in/casey-wu-frontend",
      twitter: "https://twitter.com/caseycodes",
      email: "casey@lextech.dev",
    },
    expandedBio:
      "Casey is passionate about creating smooth user experiences and staying up-to-date with the latest frontend frameworks. They regularly contribute to the open-source community and mentor aspiring developers.",
  },
  {
    name: "Avery Johnson",
    role: "Mobile Developer",
    bio: "Develops cross-platform mobile applications that deliver native-like experiences.",
    skills: ["React Native", "Flutter", "iOS", "Android", "Mobile UI/UX", "App Store Optimization"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      github: "https://github.com/averyjohnson",
      linkedin: "https://linkedin.com/in/avery-johnson-mobile",
      email: "avery@lextech.dev",
    },
    expandedBio:
      "Avery has published several apps on both iOS and Android app stores. They're experienced in mobile performance optimization and have a keen eye for mobile-first design principles.",
  },
  {
    name: "Taylor Park",
    role: "DevOps Engineer",
    bio: "Ensures smooth deployment pipelines and maintains scalable cloud infrastructure.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Monitoring"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      github: "https://github.com/taylorpark",
      linkedin: "https://linkedin.com/in/taylor-park-devops",
      twitter: "https://twitter.com/taylordevops",
      email: "taylor@lextech.dev",
    },
    expandedBio:
      "Taylor is passionate about automation and infrastructure as code. They've helped scale applications from startup to enterprise level and are always looking for ways to improve deployment efficiency and system reliability.",
  },
]

export default function TeamPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-blue-500/5 to-emerald-500/5">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6 animate-fade-in">
            Meet Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            8 passionate individuals with diverse skills and a shared vision for technology that makes a difference.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text mb-2">8</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text mb-2">5</div>
              <div className="text-muted-foreground">Specializations</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-muted-foreground">Passion Driven</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Specializations */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each team member brings unique skills and perspectives to create comprehensive technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
            <div className="text-center p-4">
              <div className="bg-primary/20 p-3 rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-sm font-medium">Full-Stack</div>
            </div>
            <div className="text-center p-4">
              <div className="bg-purple-500/20 p-3 rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Brain className="h-6 w-6 text-purple-500" />
              </div>
              <div className="text-sm font-medium">AI/ML</div>
            </div>
            <div className="text-center p-4">
              <div className="bg-red-500/20 p-3 rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Shield className="h-6 w-6 text-red-500" />
              </div>
              <div className="text-sm font-medium">Security</div>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-500/20 p-3 rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Palette className="h-6 w-6 text-blue-500" />
              </div>
              <div className="text-sm font-medium">Design</div>
            </div>
            <div className="text-center p-4">
              <div className="bg-emerald-500/20 p-3 rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Database className="h-6 w-6 text-emerald-500" />
              </div>
              <div className="text-sm font-medium">Backend</div>
            </div>
            <div className="text-center p-4">
              <div className="bg-orange-500/20 p-3 rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Globe className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-sm font-medium">Frontend</div>
            </div>
            <div className="text-center p-4">
              <div className="bg-pink-500/20 p-3 rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-pink-500" />
              </div>
              <div className="text-sm font-medium">Mobile</div>
            </div>
            <div className="text-center p-4">
              <div className="bg-cyan-500/20 p-3 rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Users className="h-6 w-6 text-cyan-500" />
              </div>
              <div className="text-sm font-medium">DevOps</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Our Culture</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've built a culture that celebrates diversity, encourages innovation, and supports continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-xl text-center">
              <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Collaborative</h3>
              <p className="text-muted-foreground">
                We believe the best solutions come from diverse perspectives working together. Every voice matters and
                every idea is valued.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-xl text-center">
              <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Brain className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Learning-Focused</h3>
              <p className="text-muted-foreground">
                Technology evolves rapidly, and so do we. We encourage continuous learning and provide resources for
                professional growth.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-xl text-center">
              <div className="bg-emerald-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Globe className="h-8 w-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Impact-Driven</h3>
              <p className="text-muted-foreground">
                We're not just building software; we're creating solutions that make a real difference in people's
                lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding bg-gradient-to-r from-primary/10 via-blue-500/10 to-emerald-500/10">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Want to Join Our Team?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who share our vision for technology that makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:careers@lextech.dev" className="btn-primary text-lg">
              View Open Positions
            </a>
            <a href="/contact" className="btn-outline text-lg">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
