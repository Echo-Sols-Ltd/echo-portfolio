import type React from "react";
import type { Metadata } from "next";
import { Roboto, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { generateMetadata, generateStructuredData } from "@/components/SEO";

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
  url: "https://echosolutions.rw",
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
  const structuredData = generateStructuredData();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${roboto.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
