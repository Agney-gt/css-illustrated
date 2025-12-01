import type React from "react"
import Link from "next/link"

export default function InteractivityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h2 className="text-lg font-semibold text-foreground mb-3">Interactivity Utilities</h2>
          <div className="flex gap-2 flex-wrap">
            <Link
              href="/utilities/interactivity/cursor"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Cursor
            </Link>
            <Link
              href="/utilities/interactivity/pointer-events"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Pointer Events
            </Link>
            <Link
              href="/utilities/interactivity/user-select"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              User Select
            </Link>
            <Link
              href="/utilities/interactivity/resize"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Resize
            </Link>
          </div>
        </div>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  )
}
