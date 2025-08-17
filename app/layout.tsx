import type React from "react";
import type { Metadata } from "next";
import { Roboto, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

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

export const metadata: Metadata = {
  title:
    "Echo Solutions - We Build, Design, Secure, and Optimize Tech for Impact",
  description:
    "A dynamic team of 8 young tech enthusiasts specializing in AI/ML, cybersecurity, full-stack development, and social impact technology solutions.",
  keywords:
    "tech startup, AI, machine learning, cybersecurity, web development, social impact, technology consulting",
  authors: [{ name: "Echo Solutions Team" }],
  icons: {
    icon: "/white.svg",
    shortcut: "/white.svg",
    apple: "/white.svg",
  },
  openGraph: {
    title: "Echo Solutions - Tech for Impact",
    description:
      "Building innovative technology solutions with a focus on AI, security, and social impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
