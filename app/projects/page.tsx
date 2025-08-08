"use client"

import { useState, useEffect } from "react"
import { Calendar, Users } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/ScrollAnimation"
import ParallaxSection from "@/components/ParallaxSection"
import CounterAnimation from "@/components/CounterAnimation"
import { projects, categories } from "@/components/data/projects"

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
      {/* Floating Elements Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-28 left-8 w-20 h-20 bg-primary/10 rounded-full animate-float"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="absolute top-52 right-12 w-16 h-16 bg-blue-500/10 rounded-full animate-float"
          style={{ animationDelay: "0.15s" }}
        ></div>
        <div
          className="absolute bottom-36 left-16 w-24 h-24 bg-emerald-500/10 rounded-full animate-float"
          style={{ animationDelay: "0.12s" }}
        ></div>
        <div
          className="absolute bottom-16 right-8 w-12 h-12 bg-purple-500/10 rounded-full animate-float"
          style={{ animationDelay: "0.18s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-blue-500/5 to-emerald-500/5 relative z-10">
        <div className="container-custom text-center py-20 mb-10">
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
              Our{" "}
              <span className="gradient-text animate-gradient-shift bg-gradient-to-r from-primary via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Upcoming Projects
              </span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={150}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Exciting projects in development spanning AI, security, social impact, and cutting-edge web experiences.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Project Stats */}
      <ParallaxSection speed={0.3}>
        <section className="section-padding bg-card/50">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { end: projects.length, label: "Projects Planned", delay: 120 },
                { end: categories.length - 1, label: "Categories", delay: 140 },
                { end: 0, label: "Users (Coming Soon!)", delay: 160 },
                { end: 25, suffix: "+", label: "Technologies Used", delay: 180 },
              ].map((stat, index) => (
                <ScrollAnimation key={index} animation="scale-up" delay={stat.delay}>
                  <div className="p-6 glass-effect rounded-xl card-hover">
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

      {/* Featured Projects */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Projects in Development</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our most exciting upcoming projects that will showcase our diverse capabilities and innovative approach.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <ScrollAnimation key={project.id} animation="scale-up" delay={80 + index * 100}>
                  <div className="glass-effect rounded-xl overflow-hidden card-hover group">
                    <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <project.icon className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="text-xs px-3 py-1 rounded-full bg-white/20 text-white font-medium">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span
                          className={`text-xs px-3 py-1 rounded-full ${
                            project.status === "In Development"
                              ? "bg-green-500/20 text-green-300 animate-pulse"
                              : "bg-yellow-500/20 text-yellow-300"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                          <span>{project.timeline}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-muted px-2 py-1 rounded animate-bounce-in"
                            style={{ animationDelay: `${techIndex * 50}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="text-center">
                        <span
                          className={`text-sm font-medium px-3 py-1 rounded-full ${
                            project.status === "In Development"
                              ? "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                              : project.status === "Planning"
                                ? "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                                : "bg-gray-500/20 text-gray-600 dark:text-gray-400"
                          }`}
                        >
                          {project.status} • {project.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <ParallaxSection speed={0.2}>
        <section className="section-padding bg-card/50">
          <div className="container-custom">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">Our Roadmap</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Explore our complete project pipeline and see what we're building across different domains.
                </p>
              </div>
            </ScrollAnimation>

            {/* Category Filter */}
            <ScrollAnimation animation="fade-up" delay={120}>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-muted hover:bg-primary hover:text-primary-foreground"
                    }`}
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ScrollAnimation key={project.id} animation="fade-up" delay={120 + index * 50}>
                  <div className="glass-effect rounded-xl overflow-hidden card-hover group">
                    <div className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <project.icon className="h-12 w-12 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white font-medium">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            project.status === "In Development"
                              ? "bg-green-500/20 text-green-300"
                              : "bg-yellow-500/20 text-yellow-300"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                          <span>{project.timeline}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs bg-muted px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="text-center">
                        <span
                          className={`text-sm font-medium px-3 py-1 rounded-full ${
                            project.status === "In Development"
                              ? "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                              : project.status === "Planning"
                                ? "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                                : "bg-gray-500/20 text-gray-600 dark:text-gray-400"
                          }`}
                        >
                          {project.status} • {project.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <ScrollAnimation animation="fade-up" delay={120}>
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No projects found in this category.</p>
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="mt-4 text-primary hover:text-primary/80 font-medium"
                  >
                    View All Projects
                  </button>
                </div>
              </ScrollAnimation>
            )}
          </div>
        </section>
      </ParallaxSection>

      {/* CTA Section */}
      <ScrollAnimation animation="fade-up" delay={100}>
        <section className="section-padding bg-gradient-to-r from-primary/10 via-blue-500/10 to-emerald-500/10 relative z-10">
          <div className="container-custom text-center py-6">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              Have a Project in Mind?
            </h2>
            <ScrollAnimation animation="fade-up" delay={120}>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We'd love to hear about your ideas and discuss how we can bring them to life with our expertise.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="scale-up" delay={140}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg animate-bounce-in">
                  Start a Project
                </Link>
                <Link href="/team" className="btn-outline text-lg">
                  Meet Our Team
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}

export default ProjectsPage