import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Lex Tech - We Build, Design, Secure, and Optimize Tech for Impact",
  description:
    "A dynamic team of 8 young tech enthusiasts specializing in AI/ML, cybersecurity, full-stack development, and social impact technology solutions.",
    icons: {
    icon: "/Lex.svg", // or "/favicon.png" or "/favicon.svg"
  },
  keywords: "tech startup, AI, machine learning, cybersecurity, web development, social impact, technology consulting",
  authors: [{ name: "Lex Tech Team" }],
  openGraph: {
    title: "Lex Tech - Tech for Impact",
    description: "Building innovative technology solutions with a focus on AI, security, and social impact.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
