import type React from "react"
import type { Metadata } from "next"
import { Outfit, Inter } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Yash Semlani",
  description: "Yash Semlani's personal website",
  generator: 'v0.dev',
  icons: {
    icon: '/site-icon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
