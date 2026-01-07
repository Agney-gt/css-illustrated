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
    
      <Navbar />

      <CategoryNav />

      <main className="flex-1 w-full">{children}</main>

      <Footer />
    </div>
  );
}
