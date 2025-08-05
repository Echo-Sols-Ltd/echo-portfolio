"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Github, Calendar, Users, Code, Brain, Shield, Palette, Heart, Zap } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Charity Connect",
    description:
      "A transparent donation platform connecting donors with verified charities using blockchain technology for complete transparency and impact tracking.",
    longDescription:
      "Built with React, Node.js, and Ethereum smart contracts, this platform revolutionizes charitable giving by providing real-time tracking of donations and their impact. Features include donor profiles, charity verification, impact reporting, and automated fund distribution.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Social Impact",
    technologies: ["React", "Node.js", "Blockchain", "Ethereum", "MongoDB", "Express"],
    status: "Live",
    teamSize: 4,
    duration: "6 months",
    demoUrl: "https://charityconnect.demo",
    githubUrl: "https://github.com/lextech/charity-connect",
    featured: true,
    icon: Heart,
    color: "from-emerald-500 to-blue-500",
  },
  {
    id: 2,
    title: "SmartAnalytics",
    description:
      "Machine learning platform for predictive analytics and automated business insights with real-time data processing capabilities.",
    longDescription:
      "An enterprise-grade analytics platform that uses advanced ML algorithms to provide predictive insights. Features include automated data pipeline, custom model training, real-time dashboards, and API integration for seamless business intelligence.",
    image: "/placeholder.svg?height=300&width=500",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    status: "Live",
    teamSize: 3,
    duration: "8 months",
    demoUrl: "https://smartanalytics.demo",
    githubUrl: "https://github.com/lextech/smart-analytics",
    featured: true,
    icon: Brain,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "SecureVault",
    description:
      "Enterprise-grade password manager with zero-knowledge encryption and biometric authentication for maximum security.",
    longDescription:
      "A comprehensive security solution featuring end-to-end encryption, biometric authentication, secure sharing, and enterprise-grade compliance. Built with Rust for maximum performance and security, with cross-platform support.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Security",
    technologies: ["Rust", "WebAssembly", "React", "Tauri", "SQLite", "Cryptography"],
    status: "Live",
    teamSize: 2,
    duration: "10 months",
    demoUrl: "https://securevault.demo",
    githubUrl: "https://github.com/lextech/secure-vault",
    featured: true,
    icon: Shield,
    color: "from-red-500 to-orange-500",
  },
  {
    id: 4,
    title: "EcoTracker",
    description:
      "Mobile app for tracking personal carbon footprint with gamification elements and community challenges.",
    longDescription:
      "A React Native application that helps users track their environmental impact through daily activities. Features include carbon footprint calculation, eco-friendly suggestions, community challenges, and progress visualization.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Mobile",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Maps API"],
    status: "In Development",
    teamSize: 3,
    duration: "4 months",
    githubUrl: "https://github.com/lextech/eco-tracker",
    featured: false,
    icon: Zap,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "DesignSystem Pro",
    description:
      "Comprehensive design system and component library for rapid prototyping and consistent UI development.",
    longDescription:
      "A complete design system built with React and TypeScript, featuring customizable components, design tokens, accessibility guidelines, and comprehensive documentation. Includes Figma integration and automated testing.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Design",
    technologies: ["React", "TypeScript", "Storybook", "Figma API", "CSS-in-JS"],
    status: "Live",
    teamSize: 2,
    duration: "5 months",
    demoUrl: "https://designsystem.demo",
    githubUrl: "https://github.com/lextech/design-system-pro",
    featured: false,
    icon: Palette,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 6,
    title: "CloudOps Dashboard",
    description: "Real-time infrastructure monitoring and management platform with automated scaling and alerting.",
    longDescription:
      "A comprehensive DevOps platform for monitoring cloud infrastructure, managing deployments, and automating scaling decisions. Features include real-time metrics, custom alerting, cost optimization, and multi-cloud support.",
    image: "/placeholder.svg?height=300&width=500",
    category: "DevOps",
    technologies: ["Go", "Kubernetes", "Prometheus", "Grafana", "AWS", "Terraform"],
    status: "Live",
    teamSize: 2,
    duration: "7 months",
    demoUrl: "https://cloudops.demo",
    githubUrl: "https://github.com/lextech/cloudops-dashboard",
    featured: false,
    icon: Code,
    color: "from-indigo-500 to-purple-500",
  },
]

const categories = ["All", "Social Impact", "AI/ML", "Security", "Mobile", "Design", "DevOps"]

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-blue-500/5 to-emerald-500/5">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6 animate-fade-in">
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Innovative solutions spanning AI, security, social impact, and cutting-edge web experiences.
          </p>
        </div>
      </section>

      {/* Project Stats */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text mb-2">6</div>
              <div className="text-muted-foreground">Categories</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text mb-2">100K+</div>
              <div className="text-muted-foreground">Users Impacted</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text mb-2">25+</div>
              <div className="text-muted-foreground">Technologies Used</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our most impactful and innovative projects that showcase our diverse capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <div key={project.id} className="glass-effect rounded-xl overflow-hidden card-hover group">
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon className="h-16 w-16 text-white/80" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`text-xs px-3 py-1 rounded-full bg-white/20 text-white font-medium`}>
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${
                          project.status === "Live"
                            ? "bg-green-500/20 text-green-300"
                            : "bg-yellow-500/20 text-yellow-300"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{project.teamSize} members</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          className="flex-1 btn-primary text-center text-sm py-2 flex items-center justify-center space-x-1"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="flex-1 btn-outline text-center text-sm py-2 flex items-center justify-center space-x-1"
                        >
                          <Github className="h-4 w-4" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">All Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our complete portfolio of innovative solutions across different domains.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="glass-effect rounded-xl overflow-hidden card-hover group">
                <div className={`h-40 bg-gradient-to-br ${project.color} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="h-12 w-12 text-white/80" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        project.status === "Live"
                          ? "bg-green-500/20 text-green-300"
                          : "bg-yellow-500/20 text-yellow-300"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{project.teamSize}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className="flex-1 text-primary hover:text-primary/80 text-sm font-medium flex items-center justify-center space-x-1 py-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="flex-1 text-muted-foreground hover:text-primary text-sm font-medium flex items-center justify-center space-x-1 py-2"
                      >
                        <Github className="h-3 w-3" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 text-primary hover:text-primary/80 font-medium"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 via-blue-500/10 to-emerald-500/10">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Have a Project in Mind?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We'd love to hear about your ideas and discuss how we can bring them to life with our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Start a Project
            </Link>
            <Link href="/team" className="btn-outline text-lg">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage
