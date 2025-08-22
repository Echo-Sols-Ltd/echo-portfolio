import { Metadata } from "next";
import { generateMetadata } from "@/components/SEO";
import { AboutPageStructuredData } from "@/components/StructuredData";
import AboutClient from "../components/AboutClient";

export const metadata: Metadata = generateMetadata({
  title: "About Echo Solutions - Our Story, Mission & Team",
  description:
    "Discover the story behind Echo Solutions, a team of young tech enthusiasts from Rwanda creating innovative technology solutions for social impact.",
  keywords:
    "about Echo Solutions, tech team Rwanda, young technologists, AI developers, cybersecurity experts, web developers Africa",
  image: "/white.svg",
  url: "https://echosolutions.rw/about",
  type: "website",
  author: "Echo Solutions Team",
  tags: ["about us", "team", "mission", "Rwanda", "technology", "innovation"],
});

export default function AboutPage() {
  return (
    <>
      <AboutClient />
    </>
  );
}
