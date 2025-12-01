import type React from "react"
import Link from "next/link"

export default function OutlineLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h2 className="text-lg font-semibold text-foreground mb-3">Outline Utilities</h2>
          <div className="flex gap-2 flex-wrap">
            <Link
              href="/utilities/outline/width"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Width
            </Link>
            <Link
              href="/utilities/outline/color"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Color
            </Link>
            <Link
              href="/utilities/outline/style"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Style
            </Link>
            <Link
              href="/utilities/outline/offset"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Offset
            </Link>
          </div>
        </div>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  )
}
