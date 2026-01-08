"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, X, Hash, LayoutGrid } from "lucide-react";
import { categories } from "@/app/data/utilities";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SearchDialog({
  open,
  onOpenChange,
}: SearchDialogProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
     
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  const filteredCategories = query
    ? categories
        .map((category) => ({
          ...category,
          utilities: category.utilities.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          ),
        }))
        .filter((category) => category.utilities.length > 0)
    : []; 

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
     
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={() => onOpenChange(false)}
      />

      <div className="relative w-full max-w-lg bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
      
        <div className="flex items-center border-b border-border px-4 py-3">
          <Search className="w-5 h-5 text-muted-foreground mr-3" />
          <input
            autoFocus
            type="text"
            placeholder="Search utilities (e.g. 'flex', 'color', 'grid')..."
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-base"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={() => onOpenChange(false)}
            className="p-1 bg-muted rounded hover:bg-muted/80 text-xs text-muted-foreground ml-2"
          >
            ESC
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {query === "" ? (
            <div className="py-12 text-center text-muted-foreground text-sm">
              <LayoutGrid className="w-10 h-10 mx-auto mb-3 opacity-20" />
              <p>
                Type to search across{" "}
                {categories.reduce((acc, cat) => acc + cat.utilities.length, 0)}{" "}
                utilities.
              </p>
            </div>
          ) : filteredCategories.length > 0 ? (
            <div className="space-y-4">
              {filteredCategories.map((category) => (
                <div key={category.name}>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2 mt-2">
                    {category.name}
                  </h3>
                  <div className="space-y-1">
                    {category.utilities.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => onOpenChange(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group"
                      >
                        <div className="p-1.5 bg-muted rounded-md group-hover:bg-background transition-colors">
                          <Hash className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <span className="text-sm font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-muted-foreground text-sm">
              <p>
                No results found for{" "}
                <span className="text-foreground font-medium">"{query}"</span>
              </p>
              <p className="mt-1">
                Try searching for a CSS property or utility name.
              </p>
            </div>
          )}
        </div>

        <div className="bg-muted/50 border-t border-border px-4 py-2 text-xs text-muted-foreground flex justify-between">
          <span>Select to navigate</span>
          <span className="hidden sm:inline">
            Use arrows to move (coming soon)
          </span>
        </div>
      </div>
    </div>
  );
}
