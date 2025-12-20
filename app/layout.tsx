import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tailwind CSS Utilities - Complete Learning Guide",
  description:
    "Master every Tailwind CSS utility with interactive examples and comprehensive documentation for spacing, sizing, colors, transforms, and more.",
  metadataBase: new URL("https://tailwind-utilities.vercel.app"),
  openGraph: {
    title: "Tailwind CSS Utilities Reference",
    description: "Complete interactive guide to all Tailwind CSS utilities",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#000000",
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='75' text-anchor='middle' font-size='95' fill='%233b82f6'%3E%F0%9D%95%BF%3C/text%3E%3C/svg%3E"
        />
      </head>
      <body className={`${geistSans.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
