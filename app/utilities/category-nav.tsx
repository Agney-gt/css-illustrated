"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/app/data/utilities";

export function CategoryNav() {
  const pathname = usePathname();

  const activeCategory = categories.find((cat) =>
    cat.utilities.some((util) => pathname === util.href)
  );

  const navItems = activeCategory ? activeCategory.utilities : [];

  if (!activeCategory) return null;

  return (
    <div className="border-b border-border bg-card/30 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          {activeCategory.name}
          <span className="text-muted-foreground font-normal text-sm">
            / Utilities
          </span>
        </h2>

        {/* CHANGED HERE: Removed overflow-x-auto, added flex-wrap */}
        <div className="flex flex-wrap gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  px-3 py-1.5 text-sm rounded-md transition-all whitespace-nowrap
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground font-medium shadow-sm"
                      : "bg-background border border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
