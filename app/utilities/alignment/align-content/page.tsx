"use client";
import {useState} from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";

export default function AlignContentPage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 max-w-5xl px-8 py-12 space-y-12 text-left">
        {/* Intent-First Framing */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground">Align Content</h1>
          <div className="text-lg text-muted-foreground max-w-3xl">
            <strong className="text-foreground">When to reach for align-content utilities:</strong> When you have multi-line flex or grid containers and need to control how the lines themselves are positioned in the cross axis.
          </div>
          <div className="text-sm text-muted-foreground p-4 bg-card/30 rounded border-l-4 border-blue-500">
            <strong>🧠 Mental Model:</strong> Align content distributes *lines* of content, not individual items. It only works when there's extra space in the cross axis and items wrap to multiple lines.
          </div>
        </div>

        {/* Mental Model Section */}
        <MentalModelSection
          title="How Flex/Grid Line Alignment Works"
          description="Align content controls positioning of wrapped lines"
          features={[
            "Only works with flex-wrap or grid with multiple rows",
            "Distributes space between lines, not items",
            "Acts on cross axis (opposite of flex-direction)",
            "Requires container height to create extra space"
          ]}
          layerAssignment="Layout layer - controls positioning and space distribution of content lines within container"
          browserBehavior="Browser first positions items based on flex/grid rules, then if items wrap, align-content redistributes wrapped lines in the available cross-axis space."
        />

        {/* Quick Comparison Table */}
        <ComparisonTable
          title="Content Alignment Behavior Comparison"
          columns={["Utility", "When It Works", "What It Does"]}
          rows={[
            {
              feature: "content-start/content-end",
              values: [
                "Multi-line flex/grid",
                "Pushes lines to start/end of cross axis"
              ]
            },
            {
              feature: "content-center",
              values: [
                "Multi-line flex/grid", 
                "Centers lines in cross axis"
              ]
            },
            {
              feature: "content-between/content-around",
              values: [
                "Multi-line flex/grid",
                "Distributes space between/around lines"
              ]
            },
            {
              feature: "content-evenly",
              values: [
                "Multi-line flex/grid",
                "Equal spacing around and between lines"
              ]
            }
          ]}
        />

        {/* Common Mistakes Section */}
        <CommonMistakesSection
          mistakes={[
            {
              title: "Using align-content on single-line containers",
              reason: "Why: Align content only works when items wrap to multiple lines. Single line containers have no lines to align.",
              example: `<div class="flex content-center"> // Does nothing
  <div>Item 1</div>
  <div>Item 2</div>
</div>`,
              level: 'critical'
            },
            {
              title: "Forgetting flex-wrap or grid with multiple rows",
              reason: "Why: Without wrapping or multiple rows, there's only one line of content to position.",
              example: `<div class="flex content-between"> // No effect
  <div>Item 1</div>
  <div>Item 2</div>
</div>`,
              level: 'warning'
            }
          ]}
        />

        {/* Simple Example */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Quick Demo</h2>
          
          <div className="border border-border rounded-lg p-4 bg-card/20">
            <h3 className="text-lg font-semibold text-foreground mb-3">Content Distribution in Action</h3>
            <div className="flex flex-wrap gap-2 h-32 content-center bg-slate-800 rounded p-2 mb-4">
              <div className="bg-slate-600 text-white px-3 py-2 rounded">Item 1</div>
              <div className="bg-slate-600 text-white px-3 py-2 rounded">Item 2</div>
              <div className="bg-slate-600 text-white px-3 py-2 rounded">Item 3</div>
              <div className="bg-slate-600 text-white px-3 py-2 rounded">Item 4</div>
              <div className="bg-slate-600 text-white px-3 py-2 rounded">Item 5</div>
            </div>

            <div className="relative group cursor-pointer" onClick={() => copyToClipboard(`<div class="flex flex-wrap gap-2 h-32 content-center">
  <div>Item</div>
</div>`)}>
              <CodeBlock 
                code={`<div class="flex flex-wrap gap-2 h-32 content-center">  // Layout: flex + content distribution
  <div>Item</div>                                              // Content: item text
</div>`}
                language="jsx"
              />
              {copied && (
                <div className="absolute top-2 left-2 px-2 py-1 text-xs text-white bg-green-600 rounded">
                  Copied!
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Layout Layer Rules */}
        <section className="space-y-2 border border-blue-200 dark:border-blue-800 rounded-lg p-4 bg-blue-50/30 dark:bg-blue-900/10">
          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400">Layout Layer Rules</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li><strong>content-*</strong> only works when items wrap (flex-wrap) or grid has multiple rows</li>
            <li><strong>content-*</strong> requires container height to create distribution space</li>
            <li><strong>content-*</strong> affects lines, not individual items</li>
            <li><strong>content-center</strong> ≠ <strong>items-center</strong> — one centers lines, other centers items</li>
            <li><strong>content-*</strong> works on cross axis, opposite to main axis (justify-content)</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}