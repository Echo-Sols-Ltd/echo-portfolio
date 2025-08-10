"use client";

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
  Heart,
  Target,
  Filter,
} from "lucide-react";
import { coreMembers, devTeam } from "../../components/data/teamMembers";
import { useState, useMemo } from "react";

// Role mapping function
const categorizeTeamMember = (role: string) => {
  const categories = [];
  const roleUpper = role.toUpperCase();
  
  if (roleUpper.includes('3D')) categories.push('3D Modeling');
  if (roleUpper.includes('UI/UX') || roleUpper.includes('DESIGNER')) categories.push('UI/UX Designer');
  if (roleUpper.includes('FRONTEND')) categories.push('Frontend');
  if (roleUpper.includes('BACKEND')) categories.push('Backend');
  if (roleUpper.includes('FULL STACK') || roleUpper.includes('FULLSTACK')) categories.push('FullStack');
  if (roleUpper.includes('CYBER') || roleUpper.includes('SECURITY')) categories.push('Cybersecurity');
  if (roleUpper.includes('MOBILE')) categories.push('Mobile');
  if (roleUpper.includes('AI') || roleUpper.includes('ML') || roleUpper.includes('MACHINE LEARNING')) categories.push('AI/ML Specialist');
  if (roleUpper.includes('EMBEDDED')) categories.push('Embedded Systems');
  
  return categories;
};

export default function TeamPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('3D Modeling');
  const [coreMembersShown, setCoreMembersShown] = useState<number>(8);
  const [devTeamShown, setDevTeamShown] = useState<number>(8);
  
  const categories = [
    { name: '3D Modeling', icon: Palette, color: 'purple-500', bgColor: 'bg-purple-500' },
    { name: 'UI/UX Designer', icon: Palette, color: 'blue-500', bgColor: 'bg-blue-500' },
    { name: 'Frontend', icon: Globe, color: 'orange-500', bgColor: 'bg-orange-500' },
    { name: 'Backend', icon: Database, color: 'emerald-500', bgColor: 'bg-emerald-500' },
    { name: 'FullStack', icon: Code, color: 'indigo-500', bgColor: 'bg-indigo-500' },
    { name: 'Cybersecurity', icon: Shield, color: 'red-500', bgColor: 'bg-red-500' },
    { name: 'Mobile', icon: Smartphone, color: 'pink-500', bgColor: 'bg-pink-500' },
    { name: 'AI/ML Specialist', icon: Brain, color: 'violet-500', bgColor: 'bg-violet-500' },
    { name: 'Embedded Systems', icon: Database, color: 'cyan-500', bgColor: 'bg-cyan-500' },
  ];

  const filteredDevTeam = useMemo(() => {
    if (!selectedCategory) {
      return devTeam;
    }
    
    return devTeam.filter(member => {
      const memberCategories = categorizeTeamMember(member.role);
      return memberCategories.includes(selectedCategory);
    });
  }, [selectedCategory]);

  const selectCategory = (category: string) => {
    setSelectedCategory(prev => prev === category ? '' : category);
    setDevTeamShown(8);
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setCoreMembersShown(8);
    setDevTeamShown(8);
  };

  const showMoreCoreMembers = () => {
    setCoreMembersShown(prev => Math.min(prev + 8, coreMembers.length));
  };

  const showLessCoreMembers = () => {
    setCoreMembersShown(8);
  };

  const showMoreDevTeam = () => {
    setDevTeamShown(prev => Math.min(prev + 8, filteredDevTeam.length));
  };

  const showLessDevTeam = () => {
    setDevTeamShown(8);
  };

  return (
    <div className="pt-20">
      {/* Floating Elements Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-24 left-12 w-18 h-18 bg-primary/10 rounded-full animate-float"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="absolute top-48 right-16 w-14 h-14 bg-blue-500/10 rounded-full animate-float"
          style={{ animationDelay: "0.15s" }}
        ></div>
        <div
          className="absolute bottom-32 left-24 w-22 h-22 bg-emerald-500/10 rounded-full animate-float"
          style={{ animationDelay: "0.12s" }}
        ></div>
        <div
          className="absolute bottom-64 right-32 w-16 h-16 bg-purple-500/10 rounded-full animate-float"
          style={{ animationDelay: "0.18s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-blue-500/5 to-emerald-500/5 relative z-10">
        <div className="container-custom text-center py-20">
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
              Meet Our{" "}
              <span className="gradient-text animate-gradient-shift bg-gradient-to-r from-primary via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={150}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              10+ passionate individuals with diverse skills and a shared vision
              for technology that makes a difference.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Team Stats */}
      <ParallaxSection speed={0.3}>
        <section className="section-padding bg-card/50">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                {
                  end: 10,
                  suffix: "+",
                  label: "Team Members",
                  icon: Users,
                  color: "primary",
                  delay: 120,
                },
                {
                  end: 8,
                  label: "Specializations",
                  icon: Target,
                  color: "blue-500",
                  delay: 140,
                },
                {
                  end: 50,
                  suffix: "+",
                  label: "Technologies",
                  icon: Code,
                  color: "emerald-500",
                  delay: 160,
                },
                {
                  end: 100,
                  suffix: "%",
                  label: "Passion Driven",
                  icon: Heart,
                  color: "purple-500",
                  delay: 180,
                },
              ].map((stat, index) => (
                <ScrollAnimation
                  key={index}
                  animation="scale-up"
                  delay={stat.delay}
                >
                  <div className="p-6 glass-effect rounded-xl card-hover">
                    <div
                      className={`bg-${stat.color}/20 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center animate-pulse-glow`}
                    >
                      <stat.icon className={`h-6 w-6 text-${stat.color}`} />
                    </div>
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

      {/* Team Specializations */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
                Our Expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Each team member brings unique skills and perspectives to create
                comprehensive technology solutions.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16 cursor-pointer">
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
              {
                icon: Globe,
                label: "Frontend",
                color: "orange-500",
                delay: 140,
              },
              {
                icon: Smartphone,
                label: "Mobile",
                color: "pink-500",
                delay: 160,
              },
              { icon: Users, label: "DevOps", color: "cyan-500", delay: 180 },
            ].map((spec, index) => (
              <ScrollAnimation
                key={index}
                animation="scale-up"
                delay={spec.delay}
              >
                <div className="text-center p-4 card-hover">
                  <div
                    className={`bg-${spec.color}/20 p-3 rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <spec.icon className={`h-6 w-6 text-${spec.color}`} />
                  </div>
                  <div className="text-sm font-medium">{spec.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="section-padding bg-card/50 relative z-10">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
                Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the talented individuals who make Echo Solutions's vision a
                reality.
              </p>
            </div>
          </ScrollAnimation>

          {/* Core Members */}
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold font-space-grotesk mb-2">
                Core Team
              </h3>
              <p className="text-muted-foreground">
                Visionaries and decision-makers at the helm.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
            {coreMembers.slice(0, coreMembersShown).map((member, index) => (
              <div
                key={member.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <TeamMember {...member} />
              </div>
            ))}
          </div>
          
          {/* Show More/Less Buttons for Core Members */}
          <div className="text-center mb-16">
            {coreMembers.length > coreMembersShown ? (
              <button
                onClick={showMoreCoreMembers}
                className="btn-secondary inline-flex items-center gap-2"
              >
                Show {Math.min(8, coreMembers.length - coreMembersShown)} More
                <span className="text-sm opacity-75">
                  ({coreMembersShown} of {coreMembers.length})
                </span>
              </button>
            ) : coreMembersShown > 8 ? (
              <button
                onClick={showLessCoreMembers}
                className="btn-outline inline-flex items-center gap-2"
              >
                Show Less
                <span className="text-sm opacity-75">
                  (Showing all {coreMembers.length} members)
                </span>
              </button>
            ) : null}
          </div>

          {/* Filter Section */}
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-space-grotesk mb-4">
                Filter by Role
              </h3>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => selectCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ease-in-out flex items-center gap-2 transform hover:scale-105 ${
                      selectedCategory === category.name
                        ? `${category.bgColor} text-white shadow-lg shadow-${category.color}/25 scale-105 ring-2 ring-white/20`
                        : 'bg-card/50 text-muted-foreground hover:bg-card/80 hover:text-foreground hover:shadow-md'
                    }`}
                  >
                    <category.icon className="h-4 w-4" />
                    {category.name}
                  </button>
                ))}
              </div>
              {selectedCategory && (
                <div className="flex justify-center items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    Filtering by: <span className="font-semibold text-foreground">{selectedCategory}</span>
                  </span>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center gap-2 hover:scale-105"
                  >
                    <Filter className="h-4 w-4" />
                    Clear Filter
                  </button>
                </div>
              )}
            </div>
          </ScrollAnimation>

          {/* Dev Team */}
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold font-space-grotesk mb-2">
                Development Team
              </h3>
              <p className="text-muted-foreground">
                Engineers turning ideas into reality.
                {selectedCategory && (
                  <span className="block text-sm mt-1 font-medium">
                    Showing {filteredDevTeam.length} of {devTeam.length} members
                  </span>
                )}
              </p>
            </div>
          </ScrollAnimation>

          <div className="transition-all duration-700 ease-in-out">
            {filteredDevTeam.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all duration-500">
                  {filteredDevTeam.slice(0, devTeamShown).map((member, index) => (
                    <div 
                      key={`${member.name}-${selectedCategory}`}
                      className="transform transition-all duration-300 hover:scale-105 animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <TeamMember {...member} />
                    </div>
                  ))}
                </div>
                
                {/* Show More/Less Buttons for Development Team */}
                <div className="text-center mt-8">
                  {filteredDevTeam.length > devTeamShown ? (
                    <button
                      onClick={showMoreDevTeam}
                      className="btn-secondary inline-flex items-center gap-2"
                    >
                      Show {Math.min(8, filteredDevTeam.length - devTeamShown)} More
                      <span className="text-sm opacity-75">
                        ({devTeamShown} of {filteredDevTeam.length})
                      </span>
                    </button>
                  ) : devTeamShown > 8 ? (
                    <button
                      onClick={showLessDevTeam}
                      className="btn-outline inline-flex items-center gap-2"
                    >
                      Show Less
                      <span className="text-sm opacity-75">
                        (Showing all {filteredDevTeam.length} members)
                      </span>
                    </button>
                  ) : null}
                </div>
              </>
            ) : selectedCategory ? (
              <ScrollAnimation animation="fade-up" delay={100}>
                <div className="text-center py-20">
                  <div className="animate-pulse mb-6">
                    <Filter className="h-20 w-20 text-muted-foreground/30 mx-auto mb-4" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">No {selectedCategory} specialists found</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    We don't currently have any team members specializing in {selectedCategory}. 
                    Try exploring other categories or view all team members.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={clearFilters}
                      className="btn-primary"
                    >
                      View All Team Members
                    </button>
                  </div>
                </div>
              </ScrollAnimation>
            ) : null}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <ParallaxSection speed={0.2}>
        <section className="section-padding">
          <div className="container-custom">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
                  Our Culture
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  We've built a culture that celebrates diversity, encourages
                  innovation, and supports continuous learning.
                </p>
              </div>
            </ScrollAnimation>

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
                  <div className="glass-effect p-8 rounded-xl text-center card-hover">
                    <div
                      className={`bg-${culture.color}/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center animate-pulse-glow`}
                    >
                      <culture.icon
                        className={`h-8 w-8 text-${culture.color}`}
                      />
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

      {/* Join Us CTA */}
      <ScrollAnimation animation="fade-up" delay={100}>
        <section className="section-padding bg-gradient-to-r from-primary/10 via-blue-500/10 to-emerald-500/10 relative z-10">
          <div className="container-custom text-center py-10">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 ">
              Want to Join Our Team?
            </h2>
            <ScrollAnimation animation="fade-up" delay={120}>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're always looking for passionate individuals who share our
                vision for technology that makes a difference.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="scale-up" delay={140}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@lextech.dev"
                  className="btn-primary text-lg animate-bounce-in"
                >
                  View Open Positions
                </a>
                <a href="/contact" className="btn-outline text-lg">
                  Get In Touch
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
}