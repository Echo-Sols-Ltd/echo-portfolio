"use client";
import React, { useRef, useEffect } from "react";
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
  Target,
  Box,
} from "lucide-react";
import { coreMembers, devTeam } from "@/components/data/teamMembers";
import * as THREE from "three";
import { TeamMemberStructuredData } from "@/components/StructuredData";

export default function TeamClient() {
  // Star field refs
  const firstStarRef = useRef<HTMLDivElement>(null);
  const firstSceneRef = useRef<any>(null);

  // Create star texture
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

  // Create star field
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
    container.appendChild(renderer.domElement);

    // Stars
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
      const intensity = Math.random() * 0.5 + 0.5;
      colors[i * 3] = intensity;
      colors[i * 3 + 1] = intensity;
      colors[i * 3 + 2] = intensity;
    }
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    starGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 5,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      map: createStarTexture(),
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 5;
    return { scene, camera, renderer, starGeometry, starMaterial };
  };

  // Init star field
  useEffect(() => {
    const firstScene = createStarField(firstStarRef);
    if (firstScene) {
      firstSceneRef.current = firstScene;
      firstScene.renderer.render(firstScene.scene, firstScene.camera);
    }
    return () => {
      if (firstSceneRef.current) {
        const { scene, renderer, starGeometry, starMaterial } =
          firstSceneRef.current;
        starGeometry.dispose();
        starMaterial.dispose();
        scene.clear();
        renderer.dispose();
        firstSceneRef.current = null;
      }
    };
  }, []);

  return (
    <div className="pt-16">
      <TeamMemberStructuredData teamMembers={coreMembers} />
      {/* Hero Section - Black with Stars */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <div
          ref={firstStarRef}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20 z-10" />
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white space-y-15 mb-28">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-transparent backdrop-blur-md border border-white/30 rounded-full shadow-lg">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold tracking-wide text-white">
              Meet Our Talented Team
            </span>
          </div>
          <ScrollAnimation animation="fade-up" delay={150}>
            <div className="flex items-center justify-center mb-6">
              <h1 className="text-7xl md:text-8xl font-semibold tracking-normal text-white">
                Our <span className="font-light font-sans italic">Team</span>
              </h1>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={180}>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              30+ passionate individuals with diverse skills and a shared vision
              for technology that makes a meaningful difference in the world.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Team Stats */}
      <ParallaxSection speed={0.3}>
        <section className="section-padding bg-card/50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  end: 30,
                  suffix: "+",
                  label: "Team Members",
                  icon: Users,
                  color: "purple-500",
                  delay: 120,
                },
                {
                  end: 9,
                  label: "Specializations",
                  icon: Target,
                  color: "blue-500",
                  delay: 140,
                },
                {
                  end: 25,
                  suffix: "+",
                  label: "Technologies",
                  icon: Code,
                  color: "emerald-500",
                  delay: 160,
                },
              ].map((stat, index) => (
                <ScrollAnimation
                  key={index}
                  animation="scale-up"
                  delay={stat.delay}
                >
                  <div className="p-6 border border-gray-200 rounded-xl card-hover">
                    <div
                      className={`bg-${stat.color}/20 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center animate-pulse-glow`}
                    >
                      {React.createElement(stat.icon, {
                        className: `h-6 w-6 text-${stat.color}`,
                      })}
                    </div>
                    <CounterAnimation
                      end={stat.end}
                      suffix={stat.suffix || ""}
                      className="text-4xl font-semibold text-black mb-2"
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
                Our{" "}
                <span className="font-light font-sans italic">Expertise</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each team member brings unique skills and perspectives to create
                comprehensive technology solutions.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-6 mb-16">
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
              { icon: Globe, label: "Frontend", color: "primary", delay: 140 },
              {
                icon: Smartphone,
                label: "Mobile",
                color: "purple-500",
                delay: 160,
              },
              { icon: Box, label: "3D", color: "red-500", delay: 180 },
              { icon: Users, label: "DevOps", color: "blue-500", delay: 180 },
            ].map((spec, index) => (
              <ScrollAnimation
                key={index}
                animation="scale-up"
                delay={spec.delay}
              >
                <div className="text-center p-4 card-hover">
                  <div
                    className={`bg-${spec.color}/20 p-3 rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center`}
                  >
                    {React.createElement(spec.icon, {
                      className: `h-6 w-6 text-${spec.color}`,
                    })}
                  </div>
                  <div className="text-sm font-medium">{spec.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="section-padding bg-card/50 relative z-10">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
                Our <span className="font-light font-sans italic">Team</span>
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Meet the talented individuals who make Echo Solutions's vision a
                reality.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-black/40 rounded-full shadow-lg mt-7">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-semibold tracking-wide text-black">
                  CORE TEAM
                </span>
              </div>
            </div>
          </ScrollAnimation>

          {/* Core Team - ALL MEMBERS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
            {coreMembers.map((member, index) => (
              <div
                key={member.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <TeamMember {...member} />
              </div>
            ))}
          </div>

          {/* Dev Team */}
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-black/40 rounded-full shadow-lg mt-7">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-semibold tracking-wide text-black">
                  DEV TEAM
                </span>
              </div>
            </div>
          </ScrollAnimation>

          {/* Dev Team - ALL MEMBERS */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
            {devTeam.map((member, index) => (
              <div
                key={member.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <TeamMember {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <ParallaxSection speed={0.2}>
        <section className="pt-12 pb-20">
          {" "}
          {/* reduced spacing */}
          <div className="container-custom">
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
                  <div className="glass-effect p-8 rounded-xl text-center">
                    <div
                      className={`bg-${culture.color}/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center`}
                    >
                      {React.createElement(culture.icon, {
                        className: `h-8 w-8 text-${culture.color}`,
                      })}
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
    </div>
  );
}
