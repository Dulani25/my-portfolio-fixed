import type React from "react"
import type { Metadata } from "next"
import { Inter, Dancing_Script } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
})

export const metadata: Metadata = {
  title: "Dulani Kamkanamge - Portfolio",
  description:
    "Full Stack Developer Portfolio - Creating beautiful, responsive web applications with modern technologies.",
  keywords: ["portfolio", "developer", "react", "nextjs", "web development"],
  authors: [{ name: "Dulani Kamkanamge" }],
  openGraph: {
    title: "Dulani Kamkanamge - Portfolio",
    description: "Full Stack Developer Portfolio",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dancingScript.variable}`}>{children}</body>
    </html>
  )
}
