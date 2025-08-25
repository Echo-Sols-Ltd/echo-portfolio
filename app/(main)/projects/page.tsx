import { Metadata } from "next";
import { generateMetadata } from "@/components/SEO";
import ProjectsClient from "../components/ProjectsClient";

export const metadata: Metadata = generateMetadata({
  title: "Our Projects - Echo Solutions Portfolio",
  description:
    "Explore our diverse portfolio of technology projects including AI solutions, healthcare systems, agricultural platforms, and management tools.",
  keywords:
    "Echo Solutions projects, AI projects, healthcare technology, agricultural technology, management systems, Rwanda tech projects",
  image: "/white.svg",
  url: "https://echo-portifolio.vercel.app/projects",
  type: "website",
  author: "Echo Solutions Team",
  tags: [
    "projects",
    "portfolio",
    "AI",
    "healthcare",
    "agriculture",
    "management",
    "technology",
  ],
});

export default function ProjectsPage() {
  return (
    <>
      <ProjectsClient />
    </>
  );
}
