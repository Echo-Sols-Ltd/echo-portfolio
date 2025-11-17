"use client";
import React from 'react';
import Image from 'next/image';
// removed useState/useEffect – no carousel anymore
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
import { upperCore, lowerCore, devTeam } from "@/components/data/teamMembers";
import { TeamMemberStructuredData } from "@/components/StructuredData";

// Combine all team members for different sections
const allTeamMembers = [...upperCore, ...lowerCore, ...devTeam];

export default function TeamClient() {
  
  // Helper to get member image
  const getImageSrc = (member: any) => {
    return (
      member.image ||
      member.img ||
      member.avatar ||
      member.photo ||
      member.picture ||
      member.imageUrl ||
      "/default-avatar.png" // Fallback image
    );
  };

  return (
    <div className="pt-16">
      <TeamMemberStructuredData teamMembers={allTeamMembers} />
      
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
              {allTeamMembers.length} passionate individuals with diverse skills and a shared vision
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
                  end: allTeamMembers.length,
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

      {/* Team Structure Sections */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
                Our <span className="font-light font-sans italic">Structure</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Organized teams working together to deliver exceptional results.
              </p>
            </div>
          </ScrollAnimation>

          {/* Upper Core Team */}
          <ScrollAnimation animation="fade-up" delay={120}>
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Leadership Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upperCore.map((member, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                        {getImageSrc(member) ? (
                          <Image
                            src={getImageSrc(member)}
                            alt={`${member.name} - ${member.role}`}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                            <span className="text-lg font-bold text-gray-600">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-black">{member.name}</h4>
                        <p className="text-gray-600 text-sm">{member.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Lower Core Team */}
          <ScrollAnimation animation="fade-up" delay={140}>
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Technical Leadership</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lowerCore.map((member, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                        {getImageSrc(member) ? (
                          <Image
                            src={getImageSrc(member)}
                            alt={`${member.name} - ${member.role}`}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                            <span className="text-lg font-bold text-gray-600">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-black">{member.name}</h4>
                        <p className="text-gray-600 text-sm">{member.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Development Team */}
          <ScrollAnimation animation="fade-up" delay={160}>
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Development Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {devTeam.map((member, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-4 card-hover border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                        {getImageSrc(member) ? (
                          <Image
                            src={getImageSrc(member)}
                            alt={`${member.name} - ${member.role}`}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                            <span className="text-sm font-bold text-gray-600">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-black text-sm truncate">{member.name}</h4>
                        <p className="text-gray-600 text-xs truncate">{member.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Team Specializations */}
      <section className="section-padding relative z-10 bg-gray-50">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
                Our <span className="font-light font-sans italic">Expertise</span>
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
                <div className="text-center p-4 card-hover bg-white rounded-lg">
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

      {/* Team Culture */}
      <ParallaxSection speed={0.2}>
        <section className="pt-12 pb-20 bg-gray-50">
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
                  <div className="glass-effect p-8 rounded-xl text-center bg-white">
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