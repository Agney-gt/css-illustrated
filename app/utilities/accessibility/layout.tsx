import type React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Accessibility Utilities
          </h2>
          <div className="flex gap-2 flex-wrap">
            <Link
              href="/utilities/accessibility/screen-readers"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Screen Readers
              <span className="block text-xs text-muted-foreground">
                sr-only • not-sr-only
              </span>
            </Link>
          </div>
        </div>
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
