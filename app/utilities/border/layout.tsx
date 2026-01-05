"use client"

import React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

export default function GridLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <h2 className="text-lg font-semibold text-foreground mb-3">Border Utilities</h2>
            <div className="flex gap-2 flex-wrap">
              <Link
                href="/utilities/border/radius"
                className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
              >
                Bordor Radius
              </Link>
              <Link
                href="/utilities/border/color"
                className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
              >
                Border Color
              </Link>
              <Link
                href="/utilities/border/style"
                className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
              >
                Border Style
              </Link>
              <Link
                href="/utilities/border/width"
                className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
              >
                Border Width
              </Link>
            </div>
          </div>
        </div>
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </>
  )
}