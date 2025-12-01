import type React from "react"
import Link from "next/link"

export default function BreakLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h2 className="text-lg font-semibold text-foreground mb-3">Break Utilities</h2>
          <div className="flex gap-2 flex-wrap">
            <Link
              href="/utilities/break/break-after"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Break After
            </Link>
            <Link
              href="/utilities/break/break-before"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Break Before
            </Link>
            <Link
              href="/utilities/break/break-inside"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Break Inside
            </Link>
          </div>
        </div>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  )
}
