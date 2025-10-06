"use client";
import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
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

// NOTE: Swiper removed — not used here

export default function TeamClient() {
  // Star field refs
  const firstStarRef = useRef<HTMLDivElement>(null);
  const firstSceneRef = useRef<any>(null);

  // Circular layout refs/state
  const circleRef = useRef<HTMLDivElement | null>(null);
  const [positions, setPositions] = useState<
    { x: number; y: number; cx: number; cy: number; angle: number }[]
  >([]);
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

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
    const positionsArr = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      positionsArr[i * 3] = (Math.random() - 0.5) * 2000;
      positionsArr[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positionsArr[i * 3 + 2] = (Math.random() - 0.5) * 2000;
      const intensity = Math.random() * 0.5 + 0.5;
      colors[i * 3] = intensity;
      colors[i * 3 + 1] = intensity;
      colors[i * 3 + 2] = intensity;
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(positionsArr, 3));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Measure container and compute circular positions
  const computePositions = () => {
    const el = circleRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const n = coreMembers.length;
    if (n === 0) {
      setPositions([]);
      setContainerSize({ w, h });
      return;
    }

    const centerX = w / 2;
    const centerY = h / 2;

    // responsive item size (circle diameter)
    const itemSize = Math.min(140, Math.max(80, Math.floor(w * 0.18)));
    const radius = Math.max(100, Math.min(centerX, centerY) - itemSize / 1.6);

    const newPos: { x: number; y: number; cx: number; cy: number; angle: number }[] = [];

    for (let i = 0; i < n; i++) {
      // start at top (-90 deg) and go clockwise
      const angle = -Math.PI / 2 + (i / n) * 2 * Math.PI;
      const cx = centerX + Math.cos(angle) * radius;
      const cy = centerY + Math.sin(angle) * radius;
      const x = cx - itemSize / 2;
      const y = cy - itemSize / 2;
      newPos.push({ x, y, cx, cy, angle });
    }

    setContainerSize({ w, h });
    setPositions(newPos);
  };

  useLayoutEffect(() => {
    computePositions();
    // recompute on resize
    const ro = new ResizeObserver(() => computePositions());
    if (circleRef.current) ro.observe(circleRef.current);
    window.addEventListener("orientationchange", computePositions);
    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", computePositions);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coreMembers.length]);

  // helper to get member image from various possible property names
  const getImageSrc = (member: any) => {
    return (
      member.image ||
      member.img ||
      member.avatar ||
      member.photo ||
      member.picture ||
      member.imageUrl ||
      null
    );
  };

  // draws curved arrows between centers (SVG paths)
  const renderArrows = () => {
    if (!positions || positions.length < 2) return null;
    const { w, h } = containerSize;
    if (w === 0 || h === 0) return null;

    // radius used in control-point calculation
    const centerX = w / 2;
    const centerY = h / 2;
    // curvature factor (how far control point is pushed outward)
    const curvatureFactor = Math.min(centerX, centerY) * 0.35;

    return (
      <svg
        className="absolute inset-0 z-0 pointer-events-none"
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.8)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.8)" />
          </linearGradient>
          <marker
            id="core-arrow"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="rgba(59, 130, 246, 0.8)" />
          </marker>
        </defs>

        {positions.map((p, i) => {
          const next = positions[(i + 1) % positions.length];
          if (!next) return null;

          // midpoint
          const mx = (p.cx + next.cx) / 2;
          const my = (p.cy + next.cy) / 2;

          // vector from center to midpoint
          let vx = mx - centerX;
          let vy = my - centerY;
          const vlen = Math.sqrt(vx * vx + vy * vy) || 1;
          vx /= vlen;
          vy /= vlen;

          // control point pushed outward (away from center)
          const cx = mx + vx * curvatureFactor;
          const cy = my + vy * curvatureFactor;

          // path from p to next (quadratic Bezier)
          const d = `M ${p.cx} ${p.cy} Q ${cx} ${cy} ${next.cx} ${next.cy}`;

          return (
            <g key={`arrow-${i}`}>
              <path
                d={d}
                stroke="url(#gradient)"
                strokeWidth={3}
                fill="none"
                markerEnd="url(#core-arrow)"
                strokeLinecap="round"
                className="animate-pulse"
                style={{
                  filter: "drop-shadow(0 0 4px rgba(59, 130, 246, 0.3))",
                }}
              />
              <path
                d={d}
                stroke="rgba(59, 130, 246, 0.6)"
                strokeWidth={1}
                fill="none"
                strokeLinecap="round"
                className="animate-pulse"
                style={{
                  animationDelay: "0.5s",
                }}
              />
            </g>
          );
        })}
      </svg>
    );
  };

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

          {/* Core Team - CIRCULAR LAYOUT */}
          <div
            ref={circleRef}
            className="relative mx-auto w-full max-w-[900px] h-[420px] md:h-[520px] lg:h-[620px] mb-12"
            aria-hidden={false}
          >
            {/* arrows behind */}
            {renderArrows()}

            {/* center label with enhanced styling */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-2xl border-2 border-gray-200/50 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-6 h-6 mx-auto mb-1 rounded-full bg-gradient-to-r from-gray-600 to-black"></div>
                  <span className="text-xs font-bold text-gray-700 tracking-wide">CORE</span>
                  <div className="text-[10px] text-gray-500 font-medium">TEAM</div>
                </div>
              </div>
            </div>

            {/* members (in front) */}
            {positions.length > 0 &&
              positions.map((pos, idx) => {
                const member = coreMembers[idx];
                if (!member) return null;
                const itemSize = Math.min(140, Math.max(80, Math.floor(containerSize.w * 0.18)));
                const imgSrc = getImageSrc(member);
                return (
                  <div
                    key={member.name || idx}
                    className={`absolute z-20 flex flex-col items-center text-center transition-all duration-500 cursor-pointer group ${
                      hoveredMember === idx ? 'scale-110 z-30' : 'hover:scale-105'
                    }`}
                    style={{
                      left: pos.x,
                      top: pos.y,
                      width: itemSize,
                      height: itemSize + 60, // extra space for social links
                      transform: `translate(0, 0) ${hoveredMember === idx ? 'translateY(-8px)' : ''}`,
                    }}
                    onMouseEnter={() => setHoveredMember(idx)}
                    onMouseLeave={() => setHoveredMember(null)}
                  >
                    <div
                      className={`rounded-full overflow-hidden flex items-center justify-center shadow-xl border-4 bg-white transition-all duration-300 ${
                        hoveredMember === idx 
                          ? 'border-gray-600 shadow-2xl shadow-gray-600/30' 
                          : 'border-white/70 hover:border-gray-400'
                      }`}
                      style={{
                        width: itemSize,
                        height: itemSize,
                      }}
                    >
                      {imgSrc ? (
                        <img
                          src={imgSrc}
                          alt={member.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          className="transition-all duration-300 group-hover:brightness-110"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-300 group-hover:from-gray-100 group-hover:to-gray-200">
                          <span className="text-lg font-semibold text-gray-700">
                            {String(member.name || "")
                              .split(" ")
                              .map((s: string) => s[0])
                              .slice(0, 2)
                              .join("") || "?"}
                          </span>
                        </div>
                      )}
                    </div>

                    <div 
                      style={{ marginTop: 8, width: itemSize }} 
                      className={`text-xs transition-all duration-300 ${
                        hoveredMember === idx ? 'text-gray-800' : 'text-gray-700'
                      }`}
                    >
                      <div className={`font-medium truncate transition-all duration-300 ${
                        hoveredMember === idx ? 'font-bold' : ''
                      }`}>
                        {member.name}
                      </div>
                      <div className={`text-[12px] truncate transition-all duration-300 ${
                        hoveredMember === idx ? 'text-gray-600 font-medium' : 'text-gray-500'
                      }`}>
                        {member.role}
                      </div>
                    </div>

                    {/* Social media links - appear on hover */}
                    <div className={`flex gap-2 mt-2 transition-all duration-300 ${
                      hoveredMember === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      {member.social?.github && (
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                      )}
                      {member.social?.linkedin && (
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                      )}
                      {member.social?.twitter && (
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                      )}
                      {member.social?.ig && (
                        <a href={member.social.ig} target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                      )}
                      {member.social?.email && (
                        <a href={`mailto:${member.social.email}`} className="w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.98L12 10.09l9.382-6.269h.982c.904 0 1.636.732 1.636 1.636z"/></svg>
                        </a>
                      )}
                      {member.social?.facebook && (
                        <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Dev Team (kept removed) - we left this out per your request */}
        </div>
      </section>

      {/* Team Culture */}
      <ParallaxSection speed={0.2}>
        <section className="pt-12 pb-20">
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
