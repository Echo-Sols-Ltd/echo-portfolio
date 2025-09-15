import { Metadata } from "next";
import { generateMetadata } from "@/components/SEO";
import ContactClient from "../components/ContactClient";

export const metadata: Metadata = generateMetadata({
  title: "Contact Us - Echo Solutions",
  description:
    "Get in touch with Echo Solutions for your technology needs. We're ready to discuss your project and bring your ideas to life.",
  keywords:
    "contact Echo Solutions, tech consulting Rwanda, project inquiry, technology services, AI development, cybersecurity consulting",
  image: "/white.svg",
  url: "https://www.echo-solution.com/contact",
  type: "website",
  author: "Echo Solutions Team",
  tags: [
    "contact",
    "inquiry",
    "project discussion",
    "technology consulting",
    "Rwanda",
  ],
});

export default function ContactPage() {
  return (
    <>
      <ContactClient />
    </>
  );
}
