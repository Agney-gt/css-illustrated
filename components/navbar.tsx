"use client"

import Link from "next/link"
import { useState } from "react"
import SearchDialog from "./search-dialog"

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-accent-foreground font-bold group-hover:scale-110 transition">
              𝕿
            </div>
            <span className="font-bold text-foreground hidden sm:inline">CSS Illustrated</span>
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden md:flex items-center gap-2 px-3 py-2 border border-border rounded-lg text-muted-foreground hover:text-foreground transition"
            >
              <span className="text-sm">Type</span>
              <kbd className="text-xs bg-card px-2 py-1 rounded">/</kbd>
              <span className="text-sm">to search</span>
            </button>

            <Link href="/utilities" className="text-muted-foreground hover:text-foreground transition text-sm">
              Utilities
            </Link>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition text-sm"
            >
              Docs
            </a>
          </div>
        </div>
      </nav>

      <SearchDialog />
    </>
  )
}
