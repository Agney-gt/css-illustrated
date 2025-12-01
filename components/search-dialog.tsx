"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

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
  { name: "Width", href: "/utilities/sizing/width", category: "Sizing" },
  { name: "Height", href: "/utilities/sizing/height", category: "Sizing" },
  { name: "Border Radius", href: "/utilities/border/radius", category: "Borders" },
  { name: "Border Width", href: "/utilities/border/width", category: "Borders" },
  { name: "Border Color", href: "/utilities/border/color", category: "Borders" },
  { name: "Ring Width", href: "/utilities/ring/width", category: "Effects" },
  { name: "Outline", href: "/utilities/outline/width", category: "Effects" },
  { name: "Scale", href: "/utilities/transform/scale", category: "Transforms" },
  { name: "Rotate", href: "/utilities/transform/rotate", category: "Transforms" },
  { name: "Translate", href: "/utilities/transform/translate", category: "Transforms" },
  { name: "Cursor", href: "/utilities/interactivity/cursor", category: "Interactivity" },
  { name: "Font Size", href: "/utilities/font/size", category: "Typography" },
  { name: "Font Weight", href: "/utilities/font/weight", category: "Typography" },
  { name: "Screen Readers", href: "/utilities/accessibility/screen-readers", category: "Accessibility" },
]

export default function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/" && !open) {
        e.preventDefault()
        setOpen(true)
      }
      if (e.key === "Escape") {
        setOpen(false)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [open])

  useEffect(() => {
    if (query.length === 0) {
      setResults([])
      return
    }

    const filtered = SEARCH_DATA.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()),
    ).slice(0, 8)

    setResults(filtered)
  }, [query])

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setOpen(false)} />

      {/* Dialog */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-md">
        <div className="bg-card border border-border rounded-lg shadow-xl overflow-hidden">
          {/* Search Input */}
          <div className="p-4 border-b border-border">
            <input
              autoFocus
              type="text"
              placeholder="Search utilities... (press / to focus)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-background border border-border rounded px-3 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
            />
          </div>

          {/* Results */}
          <div className="max-h-64 overflow-y-auto">
            {results.length === 0 && query.length > 0 ? (
              <div className="p-4 text-center text-muted-foreground text-sm">No results found for "{query}"</div>
            ) : results.length === 0 ? (
              <div className="p-4 text-center text-muted-foreground text-sm">Start typing to search utilities</div>
            ) : (
              results.map((result) => (
                <Link
                  key={result.href}
                  href={result.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between p-3 border-b border-border hover:bg-card/80 transition last:border-0"
                >
                  <div>
                    <p className="text-foreground font-medium text-sm">{result.name}</p>
                    <p className="text-muted-foreground text-xs">{result.category}</p>
                  </div>
                  <span className="text-accent text-xs">→</span>
                </Link>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-3 bg-card/50 border-t border-border text-xs text-muted-foreground flex justify-between">
            <span>Press ESC to close</span>
            <span>↵ to select</span>
          </div>
        </div>
      </div>
    </>
  )
}
