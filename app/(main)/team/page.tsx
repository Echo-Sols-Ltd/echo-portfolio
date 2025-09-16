import { Metadata } from "next";
import { generateMetadata } from "@/components/SEO";
import TeamClient from "../components/TeamClient";

export const metadata: Metadata = generateMetadata({
  title: "Team | Echo Solutions",
  description:
    "Meet the talented team behind Echo Solutions - young tech enthusiasts specializing in AI/ML, cybersecurity, full-stack development, and social impact technology.",
  keywords:
    "Echo Solutions team, tech team Rwanda, AI developers, cybersecurity experts, web developers, young technologists Africa",
  image: "/white.svg",
  url: "https://www.echo-solution.com/team",
  type: "website",
  author: "Echo Solutions Team",
  tags: [
    "team",
    "developers",
    "AI experts",
    "cybersecurity",
    "web development",
    "Rwanda",
  ],
});

export default function TeamPage() {
  return (
    <>
      <TeamClient />
    </>
  );
}
