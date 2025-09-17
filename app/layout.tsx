import type React from "react";
import type { Metadata } from "next";
import { Roboto, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { generateMetadata, generateStructuredData } from "@/components/SEO";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = generateMetadata({
  title:
    "Echo Solutions - We Build, Design, Secure, and Optimize Tech for Impact",
  description:
    "A dynamic team of 25+ young tech enthusiasts specializing in AI/ML, cybersecurity, full-stack development, and social impact technology solutions.",
  keywords:
    "tech startup, AI, machine learning, cybersecurity, web development, social impact, technology consulting, Rwanda, Africa",
  image: "/thumbnail.png",
  url: "https://www.echo-solution.com/",
  type: "website",
  author: "Echo Solutions Team",
  tags: [
    "Technology",
    "AI",
    "cybersecurity",
    "web development",
    "Rwanda",
    "Africa",
    "Global",
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialStructuredData = generateStructuredData();

  // Generate organization schema for better search results
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Echo Solutions",
    "url": "https://www.echo-solution.com",
    "logo": "https://www.echo-solution.com/white.svg",
    "sameAs": [
      "https://www.linkedin.com/company/echho-solutions",
      "https://x.com/echhosolutions",
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+250791234567",
        "contactType": "customer service",
        "availableLanguage": ["English", "Kinyarwanda", "French"]
      }
    ]
  };

  // Generate website schema
  const websiteSchema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Echo Solutions",
    "url": "https://www.echo-solution.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.echo-solution.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const enhancedStructuredData = [...(Array.isArray(initialStructuredData) ? initialStructuredData : [initialStructuredData]), organizationSchema, websiteSchema];

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="HS9nxSznCu2Lh4uI0wVFFUJeTm4IZdyM3jjPNvqStOY" />
        <link rel="icon" href="/white.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://www.echo-solution.com" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(enhancedStructuredData),
          }}
        />
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body
        className={`${roboto.variable} ${instrumentSerif.variable} antialiased`}
      >
        <GoogleAnalytics measurementId="G-VZPMNMVT6F" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
