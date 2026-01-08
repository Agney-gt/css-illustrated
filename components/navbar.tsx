"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search } from "lucide-react"; // Assuming you have lucide-react installed
import SearchDialog from "./search-dialog";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)
      ) {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-accent-foreground font-bold group-hover:scale-110 transition">
              𝕿
            </div>
            <span className="font-bold text-foreground hidden sm:inline">
              Tailwind Utilities
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden md:flex items-center gap-2 px-3 py-2 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-foreground/20 transition bg-background/50"
            >
              <Search className="w-4 h-4" />
              <span className="text-sm">Search</span>
              <kbd className="hidden lg:inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">/</span>
              </kbd>
            </button>

            <button
              onClick={() => setSearchOpen(true)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            >
              <Search className="w-5 h-5" />
            </button>

            <div className="h-4 w-[1px] bg-border mx-2 hidden sm:block"></div>

            <Link
              href="/utilities"
              className="text-muted-foreground hover:text-foreground transition text-sm font-medium"
            >
              Utilities
            </Link>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition text-sm font-medium"
            >
              Docs
            </a>
          </div>
        </div>
      </nav>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
