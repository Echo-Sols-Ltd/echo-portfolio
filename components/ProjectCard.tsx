"use client";

import Link from "next/link";
import { ArrowRight, Code } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  logo: string;
  category: string;
  status: string;
  featured?: boolean;
  link?: string;
  github?: string;
};

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <ScrollAnimation animation="fade-up" delay={120}>
      <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
        {/* Media */}
        <div className="relative h-44 md:h-52 w-full overflow-hidden bg-gray-50">
          {/* Prefer project.image, fall back to logo */}
          <img
            src={project.image || project.logo}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading={priority ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />
          {/* category/status badges */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-2.5 py-1 text-xs rounded-full bg-white/90 text-gray-800 border border-gray-200">
              {project.category}
            </span>
            <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/90 text-white">
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{project.title}</h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">{project.description}</p>

          {(project.link || project.github) && (
            <div className="mt-4 flex flex-wrap gap-3">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm rounded-lg border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 transition"
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
                  className="inline-flex items-center px-4 py-2 text-sm rounded-lg border border-gray-200 bg-gray-900 text-white hover:bg-gray-800 transition"
                >
                  GitHub
                  <Code className="ml-2 h-4 w-4" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </ScrollAnimation>
  );
}
