"use client";
import Hero from "@/components/Hero";
import type React from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import ParallaxSection from "@/components/ParallaxSection";
import CounterAnimation from "@/components/CounterAnimation";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Brain,
  Users,
  Rocket,
  Heart,
  Globe,
  Star,
  Play,
  Box,
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { projects } from "@/components/data/projects";
import { ProjectStructuredData } from "@/components/StructuredData";
import ProjectCard from "@/components/ProjectCard";

export default function HomeClient(): React.JSX.Element {
  // State and refs for Stats section star field
  const statsStarRef = useRef<HTMLDivElement>(null);
  const statsSceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    stars: THREE.Points;
    brightStars: THREE.Points;
    starGeometry: THREE.BufferGeometry;
    brightStarGeometry: THREE.BufferGeometry;
    starMaterial: THREE.PointsMaterial;
    brightStarMaterial: THREE.PointsMaterial;
  } | null>(null);
  // State and refs for Team section star field
  const teamStarRef = useRef<HTMLDivElement>(null);
  const teamSceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    stars: THREE.Points;
    brightStars: THREE.Points;
    starGeometry: THREE.BufferGeometry;
    brightStarGeometry: THREE.BufferGeometry;
    starMaterial: THREE.PointsMaterial;
    brightStarMaterial: THREE.PointsMaterial;
  } | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);
  // Removed modal state; render video inline with controls
  const inlineVideoRef = useRef<HTMLVideoElement>(null);
  const [showVideoOverlay, setShowVideoOverlay] = useState(false);
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
  // Handle window resize for Three.js renderer
  const handleResize = useCallback(
    (
      sceneRef: React.RefObject<{
        scene: THREE.Scene;
        camera: THREE.PerspectiveCamera;
        renderer: THREE.WebGLRenderer;
        stars: THREE.Points;
        brightStars: THREE.Points;
        starGeometry: THREE.BufferGeometry;
        brightStarGeometry: THREE.BufferGeometry;
        starMaterial: THREE.PointsMaterial;
        brightStarMaterial: THREE.PointsMaterial;
      } | null>,
      mountRef: React.RefObject<HTMLDivElement | null>
    ) => {
      if (!sceneRef.current || !mountRef.current) return;
      const { camera, renderer } = sceneRef.current;
      const container = mountRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    },
    []
  );
  // Initialize Three.js scenes
  useEffect(() => {
    // Stats section star field
    const statsScene = createStarField(statsStarRef);
    if (statsScene) {
      statsSceneRef.current = statsScene;
      statsScene.renderer.render(statsScene.scene, statsScene.camera);
    }
    // Team section star field
    const teamScene = createStarField(teamStarRef);
    if (teamScene) {
      teamSceneRef.current = teamScene;
      teamScene.renderer.render(teamScene.scene, teamScene.camera);
    }
    const handleResizeStats = () => {
      if (statsStarRef.current) {
        handleResize(statsSceneRef, statsStarRef);
        if (statsSceneRef.current) {
          statsSceneRef.current.renderer.render(
            statsSceneRef.current.scene,
            statsSceneRef.current.camera
          );
        }
      }
    };
    const handleResizeTeam = () => {
      if (teamStarRef.current) {
        handleResize(teamSceneRef, teamStarRef);
        if (teamSceneRef.current) {
          teamSceneRef.current.renderer.render(
            teamSceneRef.current.scene,
            teamSceneRef.current.camera
          );
        }
      }
    };
    window.addEventListener("resize", handleResizeStats);
    window.addEventListener("resize", handleResizeTeam);
    return () => {
      isVisibleRef.current = false;
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
      window.removeEventListener("resize", handleResizeStats);
      window.removeEventListener("resize", handleResizeTeam);
      // Cleanup stats scene
      if (statsSceneRef.current && statsStarRef.current) {
        const {
          scene,
          renderer,
          starGeometry,
          brightStarGeometry,
          starMaterial,
          brightStarMaterial,
        } = statsSceneRef.current;
        starGeometry.dispose();
        brightStarGeometry.dispose();
        starMaterial.dispose();
        brightStarMaterial.dispose();
        while (scene.children.length > 0) {
          scene.remove(scene.children[0]);
        }
        if (
          renderer.domElement &&
          statsStarRef.current.contains(renderer.domElement)
        ) {
          try {
            statsStarRef.current.removeChild(renderer.domElement);
          } catch (error) {
            console.warn("Canvas already removed:", error);
          }
        }
        renderer.dispose();
        statsSceneRef.current = null;
      }
      // Cleanup team scene
      if (teamSceneRef.current && teamStarRef.current) {
        const {
          scene,
          renderer,
          starGeometry,
          brightStarGeometry,
          starMaterial,
          brightStarMaterial,
        } = teamSceneRef.current;
        starGeometry.dispose();
        brightStarGeometry.dispose();
        starMaterial.dispose();
        brightStarMaterial.dispose();
        while (scene.children.length > 0) {
          scene.remove(scene.children[0]);
        }
        if (
          renderer.domElement &&
          teamStarRef.current.contains(renderer.domElement)
        ) {
          try {
            teamStarRef.current.removeChild(renderer.domElement);
          } catch (error) {
            console.warn("Canvas already removed:", error);
          }
        }
        renderer.dispose();
        teamSceneRef.current = null;
      }
    };
  }, [handleResize]);
  // Removed modal escape key handler; not needed for inline video

  // Play video only when scrolled into view using IntersectionObserver
  useEffect(() => {
    const v = inlineVideoRef.current;
    if (!v) return;
    // Ensure muted to satisfy autoplay policies; we'll just play/pause on visibility
    v.muted = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(v);
    return () => {
      observer.disconnect();
      v.pause();
    };
  }, []);

  const filteredProjects = projects.filter((project) => project.featured);
  const homeProjects = filteredProjects.slice(0, 3);
  const aboutIcons = [
    { Icon: Rocket, label: "Innovation", desc: "Turning bold ideas into real-world products." },
    { Icon: Users, label: "Collaboration", desc: "We build together, ship together, win together." },
    { Icon: Brain, label: "AI-first", desc: "Intelligence woven into every experience." },
    { Icon: Star, label: "Quality", desc: "Pixel-perfect, test-backed, production-ready." },
    { Icon: Globe, label: "Impact", desc: "Solutions that matter for people and planet." },
    { Icon: Code, label: "Engineering", desc: "Pragmatic code, modern stacks, clean architecture." },
  ];

  return (
    <>
      <ProjectStructuredData projects={projects} />
      <Hero />
      {/* About Preview Section */}
      <section className="pt-16 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Column */}
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-full">
                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                    WHO WE ARE
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We're a collective of young, passionate technologists who
                    believe in using our skills to create meaningful impact.
                    From AI-powered solutions to secure web applications, we
                    build technology that matters.
                  </p>
                </div>
                {/* Key Points */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-1">
                      <Rocket className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Innovation-Driven Solutions
                      </h4>
                      <p className="text-gray-600">
                        Leveraging cutting-edge technology to solve complex
                        business challenges
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-1">
                      <Users className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Collaborative Approach
                      </h4>
                      <p className="text-gray-600">
                        Working closely with clients to understand and exceed
                        expectations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-1">
                      <Heart className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Results-Focused
                      </h4>
                      <p className="text-gray-600">
                        Committed to delivering solutions that create tangible
                        business value
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center px-6 py-3 bg-black hover:bg-black/90 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
            {/* Visual Icon Panel Column (no images) */}
            <div className="hidden lg:block">
              <ScrollAnimation animation="fade-up" delay={120}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-gray-100 to-white rounded-3xl -z-10" />
                  <div className="grid grid-cols-2 gap-4">
                    {aboutIcons.map(({ Icon, label, desc }, idx) => (
                      <div
                        key={label}
                        className={`rounded-2xl border border-gray-200 bg-white shadow-sm p-6 flex items-center gap-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${
                          idx % 3 === 0 ? "" : ""
                        }`}
                      >
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-gray-100 animate-pulse" />
                          <div className="relative w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200">
                            <Icon className="h-7 w-7 text-gray-800" />
                          </div>
                        </div>
                        <div>
                          <div className="text-base font-semibold text-gray-900">{label}</div>
                          <div className="text-sm text-gray-500">{desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section with Star Field and Counter Animations */}
      <ParallaxSection speed={0.3}>
        <section className="py-20 bg-black relative overflow-hidden">
          {/* Star Field Canvas */}
          <div
            ref={statsStarRef}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 1 }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20 z-10" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our{" "}
                  <span className="font-sans font-light italic">Impact</span> in
                  Numbers
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Every project we build is designed to create meaningful change
                  and lasting impact.
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation animation="scale-up" delay={120}>
                <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 relative">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-8 w-8 text-blue-400" />
                  </div>
                  <CounterAnimation
                    end={8}
                    suffix="+"
                    className="text-4xl font-bold text-white mb-2"
                  />
                  <div className="text-gray-300 font-medium">Team Members</div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="scale-up" delay={140}>
                <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 relative">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Code className="h-8 w-8 text-blue-400" />
                  </div>
                  <CounterAnimation
                    end={5}
                    suffix="+"
                    className="text-4xl font-bold text-white mb-2"
                  />
                  <div className="text-gray-300 font-medium">Projects</div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="scale-up" delay={160}>
                <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 relative">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-blue-400" />
                  </div>
                  <CounterAnimation
                    end={25}
                    suffix="+"
                    className="text-4xl font-bold text-white mb-2"
                  />
                  <div className="text-gray-300 font-medium">Technologies</div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-full mb-6">
                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                PORTFOLIO SHOWCASE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Featured <span className="font-light font-sans italic">Projects</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our diverse portfolio spanning AI, security, agriculture, and social impact.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} priority={idx < 3} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-black hover:bg-black/90 text-white font-medium rounded-lg transition-colors"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Ready to Build Something */}
      <ScrollAnimation animation="fade-up" delay={100}>
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white"></div>
          {/* Video Preview Container */}
          <div className="flex justify-center mb-20" itemScope itemType="https://schema.org/VideoObject">
            <div className="relative w-full max-w-4xl h-96 overflow-hidden rounded-2xl mx-6 lg:mx-8">
              {/* Video with proper schema.org markup */}
              <video
                ref={inlineVideoRef}
                className="w-full h-full object-cover"
                preload="none"
                muted
                loop
                playsInline
                controls
                poster="/thumbnail.png"
                itemProp="contentUrl"
                src="/haptic.mp4"
              >
                <source src="/haptic.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* No overlay play button: attempt to unmute & play programmatically.
                  Note: browsers often block autoplay with sound. We try to unmute
                  and play; if blocked we keep the video muted but attach a one-time
                  pointerdown listener so a single user interaction anywhere will
                  unmute and play the video. */}
              {/* Schema.org metadata for video */}
              <meta itemProp="name" content="Echo Solutions - Our Work in Action" />
              <meta itemProp="description" content="Watch how Echo Solutions creates innovative technology solutions" />
              <meta itemProp="thumbnailUrl" content="https://www.echo-solution.com/thumbnail.png" />
              <meta itemProp="uploadDate" content="2024-01-01T00:00:00+02:00" />
              <meta itemProp="duration" content="PT1M30S" />
              <meta itemProp="embedUrl" content="https://www.echo-solution.com/haptic.mp4" />
              <meta itemProp="contentSize" content="50 MB" />
              <meta itemProp="width" content="1280" />
              <meta itemProp="height" content="720" />
              {/* 
              {showVideoOverlay && (
                <button
                  aria-label="Play video"
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                  onClick={() => {
                    setShowVideoOverlay(false);
                    inlineVideoRef.current?.play();
                  }}
                >
                  <span className="bg-white rounded-full p-6 shadow-2xl">
                    <Play className="h-10 w-10 text-black ml-1" />
                  </span>
                </button>
              )} */}
            </div>
          </div>
          <ScrollAnimation animation="scale-up" delay={100}>
            <div className="text-center mt-16">
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Want to Work With Us?
                </h3>
                <p className="text-gray-600 mb-6">
                  We're ready to take on client projects and bring your ideas to
                  life with cutting-edge technology solutions.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-black hover:bg-black/90 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </section>
      </ScrollAnimation>
    </>
  );
}
