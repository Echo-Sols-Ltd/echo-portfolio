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
  Palette,
  Shield,
  Brain,
  Users,
  Rocket,
  Heart,
  Globe,
  Star,
  Play,
  X,
  Box,
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
export default function Home() {
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
  // State for video modal
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  // Video modal handlers
  const openVideoModal = () => {
    setIsVideoModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };
  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    document.body.style.overflow = "unset";
    // Pause video when modal closes
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0; // Reset video to beginning
    }
  };
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
  // Video modal escape key handler
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isVideoModalOpen) {
        closeVideoModal();
      }
    };
    if (isVideoModalOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      if (modalVideoRef.current) {
        modalVideoRef.current.play();
      }
    }
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isVideoModalOpen]);
  return (
    <>
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
            {/* Services Grid */}
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  {/* Development */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Code className="h-5 w-5 text-black" />
                    </div>
                    <h3 className="font-semibold text-black mb-2">
                      Development
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Web & Mobile Development Solutions
                    </p>
                  </div>
                  {/* AI/ML */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Brain className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-black mb-2">AI/ML</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Intelligent Solutions & Automation
                    </p>
                  </div>
                  {/* 3D Modelling */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Box className="h-5 w-5 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-black mb-2">
                      3D Modelling
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      3D Design & Visualization
                    </p>
                  </div>
                </div>
                <div className="space-y-4 mt-16">
                  {/* Design */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Palette className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-black mb-2">Design</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      UI/UX & Brand Experiences
                    </p>
                  </div>
                  {/* Security */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="h-5 w-5 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-black mb-2">Security</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Cybersecurity & Data Protection
                    </p>
                  </div>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <ScrollAnimation animation="scale-up" delay={120}>
                <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 relative">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-8 w-8 text-blue-400" />
                  </div>
                  <CounterAnimation
                    end={40}
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
                    end={50}
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
              <ScrollAnimation animation="scale-up" delay={180}>
                <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 relative">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Star className="h-8 w-8 text-blue-400" />
                  </div>
                  <CounterAnimation
                    end={100}
                    suffix="%"
                    className="text-4xl font-bold text-white mb-2"
                  />
                  <div className="text-gray-300 font-medium">
                    Passion Driven
                  </div>
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
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're working on exciting projects that will showcase our
                diverse capabilities across AI, security, and social impact.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Charity Platform */}
            <ScrollAnimation animation="fade-up" delay={120}>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-emerald-500 to-blue-500 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full font-medium animate-pulse">
                      In Development
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-black">
                      Charity Connect
                    </h3>
                    <span className="text-xs bg-emerald-500/20 text-emerald-500 px-2 py-1 rounded-full">
                      Social Impact
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    A transparent donation platform connecting donors with
                    verified charities using blockchain technology.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      React
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      Node.js
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      Blockchain
                    </span>
                  </div>
                  <div className="text-gray-600 text-sm">
                    <span>🚀 Coming Q2 2025</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            {/* AI Project */}
            <ScrollAnimation animation="fade-up" delay={140}>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Brain className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full font-medium">
                      Planning
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-black">
                      SmartAnalytics
                    </h3>
                    <span className="text-xs bg-purple-500/20 text-purple-500 px-2 py-1 rounded-full">
                      AI/ML
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Machine learning platform for predictive analytics and
                    automated business insights.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      Python
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      TensorFlow
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      FastAPI
                    </span>
                  </div>
                  <div className="text-gray-600 text-sm">
                    <span>🔬 Coming Q3 2025</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            {/* Security Project */}
            <ScrollAnimation animation="fade-up" delay={160}>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-red-500 to-orange-500 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full font-medium">
                      Concept
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-black">
                      SecureVault
                    </h3>
                    <span className="text-xs bg-red-500/20 text-red-500 px-2 py-1 rounded-full">
                      Security
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Enterprise-grade password manager with zero-knowledge
                    encryption and biometric authentication.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      Rust
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      WebAssembly
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      Encryption
                    </span>
                  </div>
                  <div className="text-gray-600 text-sm">
                    <span>💡 Coming Q4 2025</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animation="scale-up" delay={100}>
            <div className="text-center mt-12">
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Want to Work With Us?
                </h3>
                <p className="text-gray-600 mb-6">
                  While we're building our portfolio, we're ready to take on
                  client projects and bring your ideas to life.
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
        </div>
      </section>
      {/* Team Preview Section with Star Field */}
      <ParallaxSection speed={0.2}>
        <section className="py-20 bg-black relative overflow-hidden">
          {/* Star Field Canvas */}
          <div
            ref={teamStarRef}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 1 }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20 z-10" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Meet Our{" "}
                  <span className="font-light font-sans italic">Team</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  30+ passionate individuals with diverse skills and a shared
                  vision for technology that makes a difference.
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  name: "Izere Shema Leandre",
                  role: "CEO & Founder",
                  avatar: "/flicky.jpeg",
                  delay: 120,
                },
                {
                  name: "Nyumbayire Laurent",
                  role: "Co-Founder",
                  avatar: "/laurent.jpeg",
                  delay: 140,
                },
                {
                  name: "Muneza Jean Dieudonne",
                  role: "CPO",
                  avatar: "/dios.jpeg",
                  delay: 160,
                },
                {
                  name: "Uhirwe Esther Hope",
                  role: "CMO",
                  avatar: "/hope.jpeg",
                  delay: 180,
                },
              ].map((member, index) => (
                <ScrollAnimation
                  key={index}
                  animation="scale-up"
                  delay={member.delay}
                >
                  <div className="text-center group">
                    <div className="w-36 h-36 rounded-full overflow-hidden mb-4 mx-auto duration-300 ring-4 group-hover:ring-blue-400 group-hover:ring-2 transition-all">
                      <img
                        src={member.avatar || "/placeholder.svg"}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-white">{member.name}</h3>
                    <p className="text-sm italic text-gray-400">
                      {member.role}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
            <ScrollAnimation animation="fade-up" delay={120}>
              <div className="text-center mt-12">
                <Link
                  href="/team"
                  className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors duration-200 backdrop-blur-sm border border-white/20"
                >
                  <span>Meet Everyone</span>
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ParallaxSection>
      {/* CTA Section - Ready to Build Something */}
      <ScrollAnimation animation="fade-up" delay={100}>
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white"></div>
          {/* Video Preview Container */}
          <div className="flex justify-center mb-20">
            <div className="relative w-full max-w-4xl h-96 overflow-hidden rounded-2xl mx-6 lg:mx-8">
              {/* Video Element (muted for preview) */}
              <video
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                poster="/thumbnail.png"
              >
                <source src="/haptic.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Play Button Overlay */}
              <div
                className="absolute inset-0 bg-black/30 flex items-center justify-center group cursor-pointer transition-all duration-300 hover:bg-black/40"
                onClick={openVideoModal}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <div className="bg-white rounded-full p-4 shadow-2xl">
                    <Play className="h-8 w-8 text-black ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Ready to{" "}
              <span className="font-sans italic font-light">Build</span>{" "}
              Something{" "}
              <span className="font-sans italic font-light">Amazing?</span>
            </h2>
            <ScrollAnimation animation="fade-up" delay={120}>
              <p className="text-lg text-black/90 mb-8 max-w-2xl mx-auto">
                Whether you have a project in mind or just want to chat about
                technology, we'd love to hear from you.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="scale-up" delay={140}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-lg hover:bg-black/80 transition-colors duration-200 text-lg"
                >
                  Start a Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-black text-black bg-white hover:bg-gray-50 font-medium rounded-lg transition-colors duration-200 text-lg"
                >
                  Learn More
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>
      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeVideoModal}
            className="absolute top-6 right-6 z-60 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200 hover:scale-110"
            aria-label="Close video"
          >
            <X className="h-6 w-6" />
          </button>
          {/* Modal Content */}
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            <video
              ref={modalVideoRef}
              className="w-full h-full object-contain"
              controls
              controlsList="nodownload"
              onEnded={() => {
                closeVideoModal();
              }}
            >
              <source src="/haptic.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeVideoModal}
          ></div>
        </div>
      )}
    </>
  );
}
