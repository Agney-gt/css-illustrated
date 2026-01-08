"use client";

import React from "react";
import { notFound } from "next/navigation";
import { allUtilities } from "@/app/lib/utilities-data";
import { SectionRenderer } from "@/components/shared/section-renderer";

export function UtilityContent({ slug }: { slug: string[] }) {
  const pageData = allUtilities.find(
    (page) => JSON.stringify(page.slug) === JSON.stringify(slug)
  );

  if (!pageData) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          {pageData.sections.map((section, index) => (
            <SectionRenderer key={index} section={section} />
          ))}
        </div>
      </main>
    </div>
  );
}
