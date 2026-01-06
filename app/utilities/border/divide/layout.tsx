"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function DivideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const navigationItems = [
    { href: "/utilities/border/divide/width", label: "Width" },
    { href: "/utilities/border/divide/style", label: "Style" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="border-b border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Divide Utilities</h1>
              <p className="text-muted-foreground mt-1">Control borders between child elements</p>
            </div>
            <nav className="flex gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm rounded-md transition-all ${
                    pathname === item.href
                      ? "bg-primary text-primary-foreground font-medium"
                      : "border border-border hover:bg-card hover:border-primary/20"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  )
}
