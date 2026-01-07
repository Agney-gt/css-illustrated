import type React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CategoryNav } from "@/app/utilities/category-nav";

export default function UtilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 2. Dynamic Category Sub-Navigation */}
      {/* This automatically changes based on the page you are on */}
      <CategoryNav />

      {/* 3. Main Content Page (Injected here) */}
      <main className="flex-1 w-full">{children}</main>

      {/* 4. Global Footer */}
      <Footer />
    </div>
  );
}
