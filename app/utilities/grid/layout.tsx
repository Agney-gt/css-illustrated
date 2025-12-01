import type React from "react"
import Link from "next/link"

export default function GridLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h2 className="text-lg font-semibold text-foreground mb-3">Grid Utilities</h2>
          <div className="flex gap-2 flex-wrap">
            <Link
              href="/utilities/grid/auto-flow"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Auto Flow
            </Link>
            <Link
              href="/utilities/grid/auto-columns"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Auto Columns
            </Link>
            <Link
              href="/utilities/grid/auto-rows"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Auto Rows
            </Link>
            <Link
              href="/utilities/grid/gap"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Gap
            </Link>
          </div>
        </div>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  )
}
