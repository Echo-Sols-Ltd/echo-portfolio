import { Metadata } from "next";
import { generateMetadata } from "@/components/SEO";
import HomeClient from "./components/HomeClient";

export const metadata: Metadata = generateMetadata({
  title: "Echo Solutions - Innovative Technology Solutions for Social Impact",
  description:
    "Echo Solutions is a team of young technologists from Rwanda creating cutting-edge technology solutions including AI, cybersecurity, web development, and 3D modeling for meaningful social impact.",
  keywords:
    "Echo Solutions, technology solutions, AI development, cybersecurity, web development, 3D modeling, Rwanda tech, social impact technology",
  image: "/white.svg",
  url: "https://www.echo-solution.com/",
  type: "website",
  author: "Echo Solutions Team",
  tags: [
    "technology",
    "AI",
    "cybersecurity",
    "web development",
    "3D modeling",
    "Rwanda",
    "social impact",
  ],
});

export default function Home() {
  return <HomeClient />;
}
