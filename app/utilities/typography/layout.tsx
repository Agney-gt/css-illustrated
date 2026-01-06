import type React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function SpacingLayout({
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
            Typography Utilities
          </h2>
          <div className="flex gap-2 flex-wrap">
            <Link
              href="/utilities/typography/font/family"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Font
            </Link>
            <Link
              href="/utilities/typography/text-color"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Text
            </Link>
          </div>
        </div>
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
