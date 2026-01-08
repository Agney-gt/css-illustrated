import type React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function BackgroundLayout({
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
            Background Utilities
          </h2>
          <div className="flex gap-2 flex-wrap">
            <Link
              href="/utilities/background/color"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Color
            </Link>
            <Link
              href="/utilities/background/position"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Position
            </Link>
            <Link
              href="/utilities/background/repeat"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Repeat
            </Link>
            <Link
              href="/utilities/background/size"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Size
            </Link>
            <Link
              href="/utilities/background/image"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Image
            </Link>
            <Link
              href="/utilities/background/gradient-stops"
              className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
            >
              Gradient Stops
            </Link>
          </div>
        </div>
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
