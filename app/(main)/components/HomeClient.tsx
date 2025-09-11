"use client";
import Hero from "@/components/Hero";
import type React from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import ParallaxSection from "@/components/ParallaxSection";
import CounterAnimation from "@/components/CounterAnimation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code,
  Palette,
  Shield,
  Brain,
  Users,
  Rocket,
  Heart,
  Globe,
  Star,
  Play,
  Box,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { projects } from "@/components/data/projects";
import { ProjectStructuredData } from "@/components/StructuredData";

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
  const [showVideoOverlay, setShowVideoOverlay] = useState(true);
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

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const filteredProjects = projects.filter((project) => project.featured);

  const nextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

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
                    end={30}
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
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-full mb-8">
                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                PORTFOLIO SHOWCASE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-10">
                Featured{" "}
                <span className="font-light font-sans italic">Projects</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Explore our diverse portfolio of projects spanning AI, security,
                agriculture, and social impact solutions.
              </p>
            </div>
          </ScrollAnimation>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              disabled={filteredProjects.length <= 1}
              className="absolute -left-7 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-3 transition-all duration-200 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>

            <button
              onClick={nextProject}
              disabled={filteredProjects.length <= 1}
              className="absolute -right-7 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-3 transition-all duration-200 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>

            {/* Carousel Content */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentProjectIndex * 100}%)`,
                }}
              >
                {filteredProjects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <ScrollAnimation animation="fade-up" delay={120}>
                      <div className="relative rounded-xl overflow-hidden group mx-2 h-[25vh] md:h-[35vh] lg:h-[78vh] border-2 border-gray-200">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500"
                        />
                        {/* Base gradient */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        {/* Black scrim for readability */}
                        <div className="pointer-events-none absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 flex items-end p-6 lg:p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-white max-w-2xl">
                            <div className="mt-4 flex flex-wrap gap-3">
                              {project.link && (
                                <Link
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center px-5 py-3 bg-white/20 backdrop-blur-sm text-white text-sm rounded-lg border border-white/30 hover:bg-white/30 transition-colors"
                                >
                                  Live Site
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              )}
                              {project.github && (
                                <Link
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center px-5 py-3 bg-gray-800/70 text-white text-sm rounded-lg border border-gray-700 hover:bg-gray-700/80 transition"
                                >
                                  GitHub
                                  <Code className="ml-2 h-4 w-4" />
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            {filteredProjects.length > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProjectIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      currentProjectIndex === index
                        ? "bg-black"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section - Ready to Build Something */}
      <ScrollAnimation animation="fade-up" delay={100}>
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white"></div>
          {/* Video Preview Container */}
          <div className="flex justify-center mb-20">
            <div className="relative w-full max-w-4xl h-96 overflow-hidden rounded-2xl mx-6 lg:mx-8">
              {/* Inline Video with thumbnail and overlay play button */}
              <video
                ref={inlineVideoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/thumbnail.png"
              >
                <source src="/haptic.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
