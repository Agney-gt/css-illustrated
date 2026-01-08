"use client"

import React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { PageHero } from "@/components/shared/page-hero"
import { UtilityGrid } from "@/components/shared/utility-grid"
import { UtilityPlayground } from "@/components/shared/utility_playground"
import { ExampleSection, ExampleCard } from "@/components/shared/example-section"
import { TipsSection } from "@/components/shared/tips-section"
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section"
import { MentalModelSection } from "@/components/shared/mental-model-section"
import { ComparisonTable } from "@/components/shared/comparison-table"
import { RealWorldExamples } from "@/components/shared/real-world-examples"
import CodeBlock from "@/app/utilities/components/code-block"

export default function GridLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <h2 className="text-lg font-semibold text-foreground mb-3">Grid Utilities</h2>
            <div className="flex gap-2 flex-wrap">
              <Link
                href="/utilities/grid/auto-flow"
                className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
              >
                Auto Flow
              </Link>
              <Link
                href="/utilities/grid/auto-columns"
                className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
              >
                Auto Columns
              </Link>
              <Link
                href="/utilities/grid/auto-rows"
                className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
              >
                Auto Rows
              </Link>
              <Link
                href="/utilities/grid/gap"
                className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
              >
                Gap
              </Link>
            </div>
          </div>
        </div>
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </>
  )
}
