import type React from "react"
import Link from "next/link"

export default function AlignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h2 className="text-lg font-semibold text-foreground mb-3">Align Utilities</h2>
          <div className="flex gap-2 flex-wrap">
            <Link
              href="/utilities/alignment/align/content"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Content
            </Link>
            <Link
              href="/utilities/alignment/align/items"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Items
            </Link>
            <Link
              href="/utilities/alignment/align/self"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Self
            </Link>
          </div>
        </div>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  )
}
