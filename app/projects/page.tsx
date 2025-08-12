"use client";

import { useState, useEffect, useRef } from "react";
import { Calendar, Users, Code } from "lucide-react";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import ParallaxSection from "@/components/ParallaxSection";
import CounterAnimation from "@/components/CounterAnimation";
import { projects, categories } from "@/components/data/projects";
import * as THREE from "three";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Star field refs
  const firstStarRef = useRef<HTMLDivElement>(null);
  const firstSceneRef = useRef<any>(null);
  const animationIdRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);

  // Create star texture for Three.js
  const createStarTexture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext("2d");
    if (!context) return null;
    const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    context.fillStyle = gradient;
    context.beginPath();
    context.arc(16, 16, 16, 0, Math.PI * 2);
    context.fill();
    return new THREE.CanvasTexture(canvas);
  };

  // Create star field function
  const createStarField = (
    mountRef: React.RefObject<HTMLDivElement | null>
  ) => {
    if (!mountRef.current) return null;
    const container = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    if (renderer.domElement) {
      try {
        container.appendChild(renderer.domElement);
      } catch (error) {
        console.error("Failed to append Three.js canvas:", error);
        return null;
      }
    }

    // Regular stars
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
      const intensity = Math.random() * 0.5 + 0.5;
      colors[i * 3] = intensity * (0.8 + Math.random() * 0.2);
      colors[i * 3 + 1] = intensity * (0.9 + Math.random() * 0.1);
      colors[i * 3 + 2] = intensity;
      sizes[i] = Math.random() * 3;
    }
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    starGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    starGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const starTexture = createStarTexture();
    const starMaterial = new THREE.PointsMaterial({
      size: 5.25,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      map: starTexture,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Bright stars
    const brightStarGeometry = new THREE.BufferGeometry();
    const brightStarCount = 40;
    const brightPositions = new Float32Array(brightStarCount * 3);
    const brightColors = new Float32Array(brightStarCount * 3);
    const brightSizes = new Float32Array(brightStarCount);
    for (let i = 0; i < brightStarCount; i++) {
      brightPositions[i * 3] = (Math.random() - 0.5) * 1500;
      brightPositions[i * 3 + 1] = (Math.random() - 0.5) * 1500;
      brightPositions[i * 3 + 2] = (Math.random() - 0.5) * 1500;
      brightColors[i * 3] = 0.9 + Math.random() * 0.1;
      brightColors[i * 3 + 1] = 0.95 + Math.random() * 0.05;
      brightColors[i * 3 + 2] = 1.0;
      brightSizes[i] = Math.random() * 4 + 2;
    }
    brightStarGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(brightPositions, 3)
    );
    brightStarGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(brightColors, 3)
    );
    brightStarGeometry.setAttribute(
      "size",
      new THREE.BufferAttribute(brightSizes, 1)
    );

    const brightStarTexture = createStarTexture();
    const brightStarMaterial = new THREE.PointsMaterial({
      size: 9.45,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      map: brightStarTexture,
    });
    const brightStars = new THREE.Points(
      brightStarGeometry,
      brightStarMaterial
    );
    scene.add(brightStars);

    camera.position.z = 5;
    return {
      scene,
      camera,
      renderer,
      stars,
      brightStars,
      starGeometry,
      brightStarGeometry,
      starMaterial,
      brightStarMaterial,
    };
  };

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  // Initialize star field
  useEffect(() => {
    const firstScene = createStarField(firstStarRef);
    if (firstScene) {
      firstSceneRef.current = firstScene;
      firstScene.renderer.render(firstScene.scene, firstScene.camera);
    }

    return () => {
      if (firstSceneRef.current && firstStarRef.current) {
        const {
          scene,
          renderer,
          starGeometry,
          brightStarGeometry,
          starMaterial,
          brightStarMaterial,
        } = firstSceneRef.current;
        starGeometry.dispose();
        brightStarGeometry.dispose();
        starMaterial.dispose();
        brightStarMaterial.dispose();
        while (scene.children.length > 0) {
          scene.remove(scene.children[0]);
        }
        if (
          renderer.domElement &&
          firstStarRef.current.contains(renderer.domElement)
        ) {
          try {
            firstStarRef.current.removeChild(renderer.domElement);
          } catch (error) {
            console.warn("Canvas already removed:", error);
          }
        }
        renderer.dispose();
        firstSceneRef.current = null;
      }
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section - Black with Stars */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Star Field Canvas */}
        <div
          ref={firstStarRef}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 1 }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20 z-10" />

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white space-y-15 mb-28">
          {/* Badge positioned at the top center */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-transparent backdrop-blur-md border border-white/30 rounded-full shadow-lg">
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold tracking-wide text-white">
              Our Upcoming Projects
            </span>
          </div>

          <ScrollAnimation animation="fade-up" delay={150}>
            <div className="flex items-center justify-center mb-6">
              <h1 className="text-7xl md:text-8xl font-semibold tracking-normal text-white">
                Our <span className="font-sans font-light italic">Projects</span>
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={180}>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Exciting projects in development spanning AI, security, social
              impact, and cutting-edge web experiences.
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
                {
                  end: 25,
                  suffix: "+",
                  label: "Technologies Used",
                  delay: 180,
                },
              ].map((stat, index) => (
                <ScrollAnimation
                  key={index}
                  animation="scale-up"
                  delay={stat.delay}
                >
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
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
                <span className="font-sans font-light italic">Projects</span> in Development
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our most exciting upcoming projects that will showcase our
                diverse capabilities and innovative approach.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <ScrollAnimation
                  key={project.id}
                  animation="scale-up"
                  delay={80 + index * 100}
                >
                  <div className="glass-effect rounded-xl overflow-hidden card-hover group">
                    <div
                      className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
                    >
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
                      <h3 className="text-xl font-bold mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {project.description}
                      </p>

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
                        {project.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
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
                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
                  Our <span className="font-sans font-light italic"></span>Roadmap
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Explore our complete project pipeline and see what we're
                  building across different domains.
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
                <ScrollAnimation
                  key={project.id}
                  animation="fade-up"
                  delay={120 + index * 50}
                >
                  <div className="glass-effect rounded-xl overflow-hidden card-hover group">
                    <div
                      className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden`}
                    >
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
                      <h3 className="text-lg font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

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
                        {project.technologies
                          .slice(0, 4)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs bg-muted px-2 py-1 rounded"
                            >
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
                  <p className="text-muted-foreground text-lg">
                    No projects found in this category.
                  </p>
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
        <section className="section-padding bg-white relative z-10">
          <div className="container-custom text-center py-6">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              Have a{" "}
              <span className="font-light font-sans italic">Project</span> in
              Mind?
            </h2>
            <ScrollAnimation animation="fade-up" delay={120}>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We'd love to hear about your ideas and discuss how we can bring
                them to life with our expertise.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="scale-up" delay={140}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary text-lg animate-bounce-in"
                >
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
  );
};

export default ProjectsPage;
