"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import ParallaxSection from "@/components/ParallaxSection";
import * as THREE from "three";
import { ContactPageStructuredData } from "@/components/StructuredData";


export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: "",
    newsletter: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            project: "",
            budget: "",
            message: "",
            newsletter: false,
          });
        }, 3000);
      } else {
        console.error("Failed to send message");
        setError(
          "Failed to send message. Please try again or email us directly."
        );
      }
    } catch (err) {
      console.error("Error submitting form", err);
    }

    setIsLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="pt-16">
      <ContactPageStructuredData />
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
            <Mail className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold tracking-wide text-white">
              Let's Connect
            </span>
          </div>

          <ScrollAnimation animation="fade-up" delay={150}>
            <div className="flex items-center justify-center mb-6">
              <h1 className="text-7xl md:text-8xl font-semibold tracking-normal text-white">
                Let's{" "}
                <span className="font-sans font-light italic">Connect</span>
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={180}>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Ready to start your next project? We'd love to hear from you and
              discuss how we can bring your vision to life.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Methods */}
      <ParallaxSection speed={0.3}>
        <section className="section-padding bg-card/50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <ScrollAnimation animation="scale-up" delay={120}>
                <div className="glass-effect p-8 rounded-xl text-center card-hover">
                  <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Email Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Drop us a line anytime
                  </p>
                  <a
                    href="mailto:iamshemaleandre@gmail.com"
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    iamshemaleandre@gmail.com
                  </a>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale-up" delay={140}>
                <div className="glass-effect p-8 rounded-xl text-center card-hover">
                  <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Phone className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Call Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Mon-Fri 9AM-6PM PST
                  </p>
                  <a
                    href="tel:+250793373953"
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    +250 793 373 953
                  </a>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale-up" delay={160}>
                <div className="glass-effect p-8 rounded-xl text-center card-hover">
                  <div className="bg-emerald-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Visit Us</h3>
                  <p className="text-muted-foreground mb-4">Our workspace</p>
                  <address className="text-primary not-italic">
                    Kicukiro, Kigali, Rwanda
                  </address>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Contact Form */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollAnimation animation="fade-right" delay={100}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
                  Start Your Project
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Whether you need a web application, mobile app, AI solution,
                  or cybersecurity consultation, we're here to help. Tell us
                  about your project and we'll get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <ScrollAnimation animation="fade-up" delay={120}>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        What We Can Help With
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Full-stack web applications</li>
                        <li>• Mobile app development</li>
                        <li>• AI/ML solutions and consulting</li>
                        <li>• Cybersecurity audits and implementation</li>
                        <li>• UI/UX design and branding</li>
                        <li>• DevOps and cloud infrastructure</li>
                      </ul>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="fade-up" delay={140}>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        Our Process
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="bg-primary/20 p-1 rounded-full mt-1">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          </div>
                          <div>
                            <h4 className="font-medium">Discovery Call</h4>
                            <p className="text-sm text-muted-foreground">
                              We discuss your project goals and requirements
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-blue-500/20 p-1 rounded-full mt-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                          <div>
                            <h4 className="font-medium">Proposal & Planning</h4>
                            <p className="text-sm text-muted-foreground">
                              We create a detailed project plan and timeline
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-emerald-500/20 p-1 rounded-full mt-1">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          </div>
                          <div>
                            <h4 className="font-medium">
                              Development & Delivery
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              We build, test, and deploy your solution
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-left" delay={120}>
              <div className="glass-effect p-8 rounded-2xl">
                {isSubmitted ? (
                  <ScrollAnimation animation="scale-up" delay={100}>
                    <div className="text-center py-12">
                      <div className="bg-emerald-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center animate-bounce-in">
                        <CheckCircle className="h-8 w-8 text-emerald-500" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thanks for reaching out! We'll get back to you within 24
                        hours to discuss your project.
                      </p>
                    </div>
                  </ScrollAnimation>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <ScrollAnimation animation="fade-up" delay={100}>
                        <div className="bg-red-500/20 border border-red-500/30 text-red-600 dark:text-red-400 p-4 rounded-lg">
                          {error}
                        </div>
                      </ScrollAnimation>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ScrollAnimation animation="fade-up" delay={120}>
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                            placeholder="Your full name"
                          />
                        </div>
                      </ScrollAnimation>

                      <ScrollAnimation animation="fade-up" delay={140}>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </ScrollAnimation>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ScrollAnimation animation="fade-up" delay={160}>
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium mb-2"
                          >
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                            placeholder="Your company name"
                          />
                        </div>
                      </ScrollAnimation>

                      <ScrollAnimation animation="fade-up" delay={180}>
                        <div>
                          <label
                            htmlFor="budget"
                            className="block text-sm font-medium mb-2"
                          >
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-10k">Under $10k</option>
                            <option value="10k-25k">$10k - $25k</option>
                            <option value="25k-50k">$25k - $50k</option>
                            <option value="50k-100k">$50k - $100k</option>
                            <option value="over-100k">Over $100k</option>
                          </select>
                        </div>
                      </ScrollAnimation>
                    </div>

                    <ScrollAnimation animation="fade-up" delay={120}>
                      <div>
                        <label
                          htmlFor="project"
                          className="block text-sm font-medium mb-2"
                        >
                          Project Type *
                        </label>
                        <select
                          id="project"
                          name="project"
                          required
                          value={formData.project}
                          onChange={handleChange}
                          className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select project type</option>
                          <option value="web-app">Web Application</option>
                          <option value="mobile-app">Mobile Application</option>
                          <option value="ai-ml">AI/ML Solution</option>
                          <option value="security">Cybersecurity</option>
                          <option value="design">UI/UX Design</option>
                          <option value="consulting">Consulting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-up" delay={140}>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2"
                        >
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-vertical"
                          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        />
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-up" delay={160}>
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="newsletter"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleChange}
                          className="mt-1 h-4 w-4 text-primary focus:ring-primary border-border rounded"
                        />
                        <label
                          htmlFor="newsletter"
                          className="text-sm text-muted-foreground"
                        >
                          I'd like to receive updates about Echo Solutions's
                          latest projects and tech insights
                        </label>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="scale-up" delay={180}>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full btn-primary flex items-center justify-center space-x-2 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed animate-bounce-in"
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </ScrollAnimation>
                  </form>
                )}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Social Links & Newsletter */}
      <ParallaxSection speed={0.2}>
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="fade-right" delay={100}>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6">
                    Follow Our Journey
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Stay updated with our latest projects, tech insights, and
                    behind-the-scenes content.
                  </p>
                  <div className="flex space-x-6">
                    <a
                      href="https://github.com/EchoSols"
                      className="bg-muted p-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-left" delay={120}>
                <div className="glass-effect p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Tech Newsletter</h3>
                  <p className="text-muted-foreground mb-6">
                    Get monthly insights on the latest tech trends, project
                    updates, and development tips from our team.
                  </p>
                  <div className="flex gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    />
                    <button className="btn-primary px-6">Subscribe</button>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ParallaxSection>
    </div>
  );
}