"use client";
import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
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
import { coreMembers } from "@/components/data/teamMembers";
import { TeamMemberStructuredData } from "@/components/StructuredData";

export default function TeamClient() {
  const [currentMember, setCurrentMember] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const currentMemberData = coreMembers[currentMember];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentMember((prev) => {
        const next = prev === coreMembers.length - 1 ? 0 : prev + 1;
        return next;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [isAutoScrolling, coreMembers.length]);

  // Function to handle manual member change
  const handleMemberChange = (index: number) => {
    setCurrentMember(index);
    setIsAutoScrolling(false);

    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 10000);
  };

  // Helper to get member image
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

  return (
    <div className="pt-16">
      <TeamMemberStructuredData teamMembers={coreMembers} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
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
              8 passionate individuals with diverse skills and a shared vision
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
                  end: 8,
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

      {/* Team Member Carousel Section */}
      <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 lg:px-20 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-black rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Team Spotlight
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              Meet Our <span className="text-gray-700">Amazing Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get to know the passionate individuals who bring our vision to life
            </p>
          </div>

          <div
            className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm border border-white/20"
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 order-2 lg:order-1">
                <div className="text-black text-5xl sm:text-7xl font-bold mb-6 lg:mb-8 opacity-20">&quot;</div>
                <h3 className="font-sans text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-6 lg:mb-8">
                  Discover the talent behind our success
                </h3>
                
                <div className="mb-6 lg:mb-8">
                  <div className="font-sans font-bold text-black text-2xl sm:text-3xl mb-3">
                    {currentMemberData.name}
                  </div>
                  <div className="font-medium text-gray-600 text-base sm:text-lg mb-6 uppercase tracking-wide">
                    {currentMemberData.role}
                  </div>
                
                  {/* Social Links */}
                  <div className="flex gap-4 mb-8">
                    {currentMemberData.social?.github && (
                      <a 
                        href={currentMemberData.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {/* {currentMemberData.social?.linkedin && (
                      <a 
                        href={currentMemberData.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )} */}
                    {currentMemberData.social?.twitter && (
                      <a 
                        href={currentMemberData.social.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    )}
                    {currentMemberData.social?.ig && (
                      <a 
                        href={currentMemberData.social.ig} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group w-12 h-12 bg-pink-500 hover:bg-pink-600 text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    )}
                    {currentMemberData.social?.email && (
                      <a 
                        href={`mailto:${currentMemberData.social.email}`} 
                        className="group w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.98L12 10.09l9.382-6.269h.982c.904 0 1.636.732 1.636 1.636z"/>
                        </svg>
                      </a>
                    )}
                    {currentMemberData.social?.facebook && (
                      <a 
                        href={currentMemberData.social.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Pagination dots */}
                <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
                  {/* <span className="text-sm text-gray-500 font-medium">Navigate:</span> */}
                  <div className="flex gap-3">
                    {coreMembers.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleMemberChange(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                          index === currentMember
                            ? 'bg-black shadow-lg'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`View team member ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full max-w-sm mx-auto lg:max-w-md order-1 lg:order-2">
                <div className="relative group">
                  <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200">
                    {getImageSrc(currentMemberData) ? (
                      <Image
                        key={currentMember}
                        src={getImageSrc(currentMemberData)}
                        alt={`${currentMemberData.name} - ${currentMemberData.role}` }
                        width={400}
                        height={400}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 animate-fade-in rounded-2xl"
                        style={{
                          objectPosition: 'center top'
                        }}
                        priority
                      />
                    ) : (
                      <div key={currentMember} className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center animate-fade-in rounded-2xl">
                        <div className="text-center">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <span className="text-2xl sm:text-3xl font-bold text-white">
                              {String(currentMemberData.name || "")
                                .split(" ")
                                .map((s: string) => s[0])
                                .slice(0, 2)
                                .join("") || "?"}
                            </span>
                          </div>
                          <p className="text-gray-500 text-sm font-medium">Profile Photo</p>
                        </div>
                      </div>
                    )}
                    {/* Subtle overlay for better text contrast if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
