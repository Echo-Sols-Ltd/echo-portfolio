"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Rocket } from "lucide-react";
import * as THREE from "three";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
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

  const slides = [
    {
      word: "Build",
      title: "Transformative Solutions",
      description:
        "Developing advanced, high-impact applications that address real-world challenges with precision and excellence.",
    },
    {
      word: "Design",
      title: "Captivating Experiences",
      description:
        "Creating seamless, human-centered interfaces that delight users and inspire engagement every day.",
    },
    {
      word: "Secure",
      title: "Fortified Systems",
      description:
        "Deploying State-of-the-art security protocols to safeguard data and ensure complete business protection.",
    },
    {
      word: "Optimize",
      title: "Unmatched Performance",
      description:
        "Refining systems for exceptional efficiency, lightning speed, and a flawless user experience.",
    },
  ];

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

  const handleResize = useCallback(() => {
    if (!sceneRef.current || !mountRef.current) return;

    const { camera, renderer } = sceneRef.current;
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

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
        return;
      }
    }

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

    sceneRef.current = {
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

    const renderOnce = () => {
      if (!sceneRef.current) return;

      const { scene, camera, renderer } = sceneRef.current;
      renderer.render(scene, camera);
    };

    renderOnce();

    const handleResizeWithRender = () => {
      handleResize();
      renderOnce();
    };

    window.addEventListener("resize", handleResizeWithRender);

    return () => {
      isVisibleRef.current = false;

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }

      window.removeEventListener("resize", handleResizeWithRender);

      if (sceneRef.current && mountRef.current) {
        const {
          scene,
          renderer,
          starGeometry,
          brightStarGeometry,
          starMaterial,
          brightStarMaterial,
        } = sceneRef.current;

        starGeometry.dispose();
        brightStarGeometry.dispose();
        starMaterial.dispose();
        brightStarMaterial.dispose();

        while (scene.children.length > 0) {
          scene.remove(scene.children[0]);
        }

        if (
          renderer.domElement &&
          mountRef.current.contains(renderer.domElement)
        ) {
          try {
            mountRef.current.removeChild(renderer.domElement);
          } catch (UtilityClassNameError) {
            console.warn("Canvas already removed:", Error);
          }
        }

        renderer.dispose();
        sceneRef.current = null;
      }
    };
  }, [handleResize]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div
        ref={mountRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20 z-10" />

      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-12 bg-transparent backdrop-blur-md border border-white/30 rounded-full shadow-lg">
          <Rocket className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-semibold tracking-wide text-white">
            Excellence in Digital Innovation
          </span>
        </div>

        <div className="space-y-10">
          <div className="space-y-6">
            <div className="relative">
              <div className="flex items-center justify-center">
                <h1 className="text-7xl md:text-8xl font-semibold tracking-normal text-white">
                  We{" "}
                  <span className="font-sans italic font-light">
                    {slides[currentWord].word}
                  </span>
                </h1>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-sans text-white leading-normal">
              {slides[currentWord].title}
            </h2>
          </div>

          <p className="text-lg md:text-[19px] text-blue-200/90 max-w-5xl mx-auto leading-relaxed font-light">
            {slides[currentWord].description}
          </p>
        </div>

        <div className="flex justify-center space-x-4 mt-16">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentWord(index)}
              className={`relative transition-all duration-700 rounded-full group focus:outline-none focus:ring-2 focus:ring-white/50 ${
                index === currentWord
                  ? "w-9 h-3 bg-white shadow-lg"
                  : "w-3 h-3 bg-white/30"
              }`}
              role="tab"
              aria-selected={index === currentWord}
              aria-label={`Show ${slide.word} slide`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
