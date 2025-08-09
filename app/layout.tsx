import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Echo Solutions - We Build, Design, Secure, and Optimize Tech for Impact",
  description:
    "A dynamic team of 8 young tech enthusiasts specializing in AI/ML, cybersecurity, full-stack development, and social impact technology solutions.",
  keywords: "tech startup, AI, machine learning, cybersecurity, web development, social impact, technology consulting",
  authors: [{ name: "Echo Solutions Team" }],
  icons: {
    icon: "/Lex.svg",
    shortcut: "/Lex.svg",
    apple: "/Lex.svg",
  },
  openGraph: {
    title: "Echo Solutions - Tech for Impact",
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
          <main className="min-h-screen">{children}
            <Analytics />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
