"use client"

import { useState, useEffect, useMemo, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface SearchResult {
  name: string
  href: string
  category: string
}

const SEARCH_DATA: SearchResult[] = [
  { name: "Columns", href: "/utilities/columns", category: "Layout" },
  { name: "Display", href: "/utilities/display", category: "Layout" },
  { name: "Overflow", href: "/utilities/overflow", category: "Layout" },
  { name: "Flex", href: "/utilities/flex", category: "Flexbox" },
  { name: "Flex Direction", href: "/utilities/flex/direction", category: "Flexbox" },
  { name: "Flex Wrap", href: "/utilities/flex/wrap", category: "Flexbox" },
  { name: "Flex Order", href: "/utilities/flex/order", category: "Flexbox" },
  { name: "Grid", href: "/utilities/grid/auto-flow", category: "Grid" },
  { name: "Gap", href: "/utilities/grid/gap", category: "Grid" },
  { name: "Justify Content", href: "/utilities/justify/content", category: "Alignment" },
  { name: "Align Items", href: "/utilities/align/items", category: "Alignment" },
  { name: "Padding", href: "/utilities/spacing/padding", category: "Spacing" },
  { name: "Margin", href: "/utilities/spacing/margin", category: "Spacing" },
]

export default function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)

  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  /* ---------- OPEN WITH / ---------- */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement

      // Don't open if typing in input/textarea
      if (["INPUT", "TEXTAREA"].includes(target?.tagName)) return

      if (e.key === "/") {
        e.preventDefault()
        setOpen(true)
      }

      if (e.key === "Escape") {
        closeDialog()
      }
    }

    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [])

  /* ---------- AUTO FOCUS ---------- */
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0)
    }
  }, [open])

  /* ---------- FILTER LOGIC (BEST PRACTICE) ---------- */
  const results = useMemo(() => {
    if (!query.trim()) return []

    const q = query.toLowerCase()

    return SEARCH_DATA.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q),
    ).slice(0, 8)
  }, [query])

  /* ---------- KEYBOARD NAVIGATION ---------- */
  useEffect(() => {
    if (!open) return

    const handler = (e: KeyboardEvent) => {
      if (!results.length) return

      if (e.key === "ArrowDown") {
        e.preventDefault()
        setActiveIndex((i) => (i + 1) % results.length)
      }

      if (e.key === "ArrowUp") {
        e.preventDefault()
        setActiveIndex((i) => (i - 1 + results.length) % results.length)
      }

      if (e.key === "Enter") {
        e.preventDefault()
        router.push(results[activeIndex].href)
        closeDialog()
      }
    }

    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [open, results, activeIndex, router])

  const closeDialog = () => {
    setOpen(false)
    setQuery("")
    setActiveIndex(0)
  }

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={closeDialog} />

      {/* Dialog */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-md">
        <div className="bg-card border border-border rounded-lg shadow-xl overflow-hidden">

          {/* Input */}
          <div className="p-4 border-b border-border">
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setActiveIndex(0)
              }}
              placeholder="Search utilities..."
              className="w-full px-3 py-2 border rounded bg-background focus:outline-none focus:border-accent"
            />
          </div>

          {/* Results */}
          <div className="max-h-64 overflow-y-auto">
            {!query && (
              <div className="p-4 text-sm text-muted-foreground text-center">
                Start typing to search
              </div>
            )}

            {query && results.length === 0 && (
              <div className="p-4 text-sm text-muted-foreground text-center">
                No results found
              </div>
            )}

            {results.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeDialog}
                className={`flex justify-between p-3 text-sm border-b last:border-0
                  ${index === activeIndex ? "bg-accent/10" : "hover:bg-muted"}`}
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                </div>
                <span className="text-xs">↵</span>
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-between px-3 py-2 text-xs text-muted-foreground border-t">
            <span>ESC to close</span>
            <span>↑ ↓ Enter</span>
          </div>
        </div>
      </div>
    </>
  )
}
