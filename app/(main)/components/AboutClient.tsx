"use client";

import type React from "react";
import { Rocket, Heart, Code, Users, Globe, Lightbulb } from "lucide-react";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import ParallaxSection from "@/components/ParallaxSection";
import CounterAnimation from "@/components/CounterAnimation";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { AboutPageStructuredData } from "@/components/StructuredData";


export default function AboutClient() {
  const firstStarRef = useRef<HTMLDivElement>(null);
  const thirdStarRef = useRef<HTMLDivElement>(null);
  const firstSceneRef = useRef<any>(null);
  const thirdSceneRef = useRef<any>(null);
  const animationIdRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);

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

  const handleResize = (
    sceneRef: any,
    mountRef: React.RefObject<HTMLDivElement | null>
  ) => {
    if (sceneRef.current && mountRef.current) {
      const { camera, renderer } = sceneRef.current;
      const container = mountRef.current;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
  };

  useEffect(() => {
    // First section star field
    const firstScene = createStarField(firstStarRef);
    if (firstScene) {
      firstSceneRef.current = firstScene;
      firstScene.renderer.render(firstScene.scene, firstScene.camera);
    }

    // Third section star field
    const thirdScene = createStarField(thirdStarRef);
    if (thirdScene) {
      thirdSceneRef.current = thirdScene;
      thirdScene.renderer.render(thirdScene.scene, thirdScene.camera);
    }

    const handleResizeFirst = () => {
      if (firstStarRef.current) {
        handleResize(firstSceneRef, firstStarRef);
        if (firstSceneRef.current) {
          firstSceneRef.current.renderer.render(
            firstSceneRef.current.scene,
            firstSceneRef.current.camera
          );
        }
      }
    };

    const handleResizeThird = () => {
      if (thirdStarRef.current) {
        handleResize(thirdSceneRef, thirdStarRef);
        if (thirdSceneRef.current) {
          thirdSceneRef.current.renderer.render(
            thirdSceneRef.current.scene,
            thirdSceneRef.current.camera
          );
        }
      }
    };

    window.addEventListener("resize", handleResizeFirst);
    window.addEventListener("resize", handleResizeThird);

    return () => {
      isVisibleRef.current = false;
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
      window.removeEventListener("resize", handleResizeFirst);
      window.removeEventListener("resize", handleResizeThird);

      // Cleanup first scene
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

      // Cleanup third scene
      if (thirdSceneRef.current && thirdStarRef.current) {
        const {
          scene,
          renderer,
          starGeometry,
          brightStarGeometry,
          starMaterial,
          brightStarMaterial,
        } = thirdSceneRef.current;
        starGeometry.dispose();
        brightStarGeometry.dispose();
        starMaterial.dispose();
        brightStarMaterial.dispose();
        while (scene.children.length > 0) {
          scene.remove(scene.children[0]);
        }
        if (
          renderer.domElement &&
          thirdStarRef.current.contains(renderer.domElement)
        ) {
          try {
            thirdStarRef.current.removeChild(renderer.domElement);
          } catch (error) {
            console.warn("Canvas already removed:", error);
          }
        }
        renderer.dispose();
        thirdSceneRef.current = null;
      }
    };
  }, []);

  return (
    <div className="pt-16">
      <AboutPageStructuredData />
      {/* First Section - Black with Stars */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Star Field Canvas */}
        <div
          ref={firstStarRef}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 1 }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20 z-1" />

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white space-y-15 mb-28">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-transparent backdrop-blur-md border border-white/30 rounded-full shadow-lg">
            <Rocket className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold tracking-wide text-white">
              Excellence in Digital Innovation
            </span>
          </div>

          <ScrollAnimation animation="fade-up" delay={150}>
            <div className="flex items-center justify-center mb-6">
              <h1 className="text-7xl md:text-8xl font-semibold tracking-normal text-white">
                About{" "}
                <span className="font-sans font-light italic">
                  Echo Solutions
                </span>
              </h1>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={180}>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              We're not just another tech team. We're innovators,
              problem-solvers, and dreamers building the future one line of code
              at a time.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Second Section - White */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <ScrollAnimation animation="fade-right" delay={110}>
              <div className="space-y-8">
                <h2 className="text-5xl md:text-6xl font-bold font-space-grotesk text-black leading-tight">
                  Our{" "}
                  <span className="font-light font-sans italic">Origin</span>{" "}
                  Story
                </h2>
                <div className="space-y-8 text-xl text-gray-700 leading-relaxed">
                  <ScrollAnimation animation="fade-up" delay={120}>
                    <p className="text-lg">
                      It all started in a small co-working space in 2025, where
                      13 passionate developers came together with a shared
                      vision of creating technology that makes a real difference
                      in people's lives.
                    </p>
                  </ScrollAnimation>
                  <ScrollAnimation animation="fade-up" delay={130}>
                    <p className="text-lg">
                      What began as late-night coding sessions and endless cups
                      of coffee has evolved into a dynamic team dedicated to
                      pushing the boundaries of what's possible with modern web
                      technologies.
                    </p>
                  </ScrollAnimation>
                  <ScrollAnimation animation="fade-up" delay={140}>
                    <p className="text-lg">
                      Today, Echo Solutions represents our commitment to
                      excellence, innovation, and the belief that great software
                      can change the world.
                    </p>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-left" delay={115}>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-3xl shadow-xl border border-gray-200">
                <h3 className="text-3xl font-bold mb-8 text-black">
                  Our{" "}
                  <span className="font-light font-sans italic">Journey</span>
                </h3>
                <div className="space-y-6">
                  <ScrollAnimation animation="scale-up" delay={120}>
                    <div className="flex items-start space-x-6">
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-xl shadow-sm">
                        <Lightbulb className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base text-black mb-1">
                          2025 - The Idea
                        </h4>
                        <p className="text-gray-600 text-base">
                          13 friends decide to change the world through code
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="scale-up" delay={130}>
                    <div className="flex items-start space-x-6">
                      <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-xl shadow-sm">
                        <Code className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base text-black mb-1">
                          2025 - First Project
                        </h4>
                        <p className="text-gray-600 text-base">
                          Built our first social impact platform
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="scale-up" delay={140}>
                    <div className="flex items-start space-x-6">
                      <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-4 rounded-xl shadow-sm">
                        <Rocket className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base text-black mb-1">
                          2025 - Growth
                        </h4>
                        <p className="text-gray-600 text-base">
                          Expanded to serve clients worldwide
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="scale-up" delay={150}>
                    <div className="flex items-start space-x-6">
                      <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-xl shadow-sm">
                        <Globe className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base text-black mb-1">
                          2025 - Global Impact
                        </h4>
                        <p className="text-gray-600 text-base">
                          Projects now reaching users worldwide
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Third Section - Black with Stars */}
      <ParallaxSection speed={0.3}>
        <section className="py-24 bg-black relative overflow-hidden">
          {/* Star Field Canvas */}
          <div
            ref={thirdStarRef}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 1 }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20 z-10" />

          <div className="container mx-auto px-6 relative z-20">
            <ScrollAnimation animation="fade-up" delay={150}>
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
                  Our{" "}
                  <span className="font-light font-sans italic">
                    Foundation
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  The core principles that guide everything we do and every
                  decision we make.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <ScrollAnimation animation="scale-up" delay={120}>
                <div className="bg-black/40 backdrop-blur-sm p-12 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 group relative overflow-hidden">
                  {/* Subtle geometric background elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-xl"></div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-serif italic text-white mb-8 leading-tight">
                      Our Mission
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base font-light">
                      To build innovative technology solutions that empower
                      businesses, enhance user experiences, and create
                      measurable impact in the communities we serve.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale-up" delay={140}>
                <div className="bg-black/40 backdrop-blur-sm p-12 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 group relative overflow-hidden">
                  {/* Subtle geometric background elements */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-white/4 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-white/2 to-transparent rounded-full blur-3xl"></div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-serif italic text-white mb-8 leading-tight">
                      Our Vision
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base font-light">
                      To shape a world where technology serves humanity with
                      simplicity, efficiency, and trust—transforming ideas into
                      solutions that inspire and connect people.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale-up" delay={160}>
                <div className="bg-black/40 backdrop-blur-sm p-12 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 group relative overflow-hidden">
                  {/* Subtle geometric background elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-white/3 to-transparent rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-xl"></div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-serif italic text-white mb-8 leading-tight">
                      Our Values
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base font-light">
                      Innovation, integrity, collaboration, and impact, guiding
                      every project we deliver and ensuring our work
                      consistently creates lasting value for our clients and
                      partners.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Ready to Build Section - Keep unchanged as requested */}
      <ScrollAnimation animation="fade-up" delay={199}>
        <section className="py-20 bg-white relative z-10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Ready to{" "}
              <span className="font-light font-sans italic">Build</span>{" "}
              Something{" "}
              <span className="font-light font-sans italic">Amazing?</span>
            </h2>
            <ScrollAnimation animation="fade-up" delay={150}>
              <p className="text-lg text-black/90 mb-8 max-w-2xl mx-auto">
                Whether you have a project in mind or just want to learn more
                about what we do, we'd love to connect.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="scale-up" delay={180}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-lg hover:bg-black/80 transition-colors duration-200 text-lg"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center px-8 py-4 border-2 border-black text-black bg-white hover:bg-gray-50 font-medium rounded-lg transition-colors duration-200 text-lg"
                >
                  View Our Work
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
}
