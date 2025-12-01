"use client"

import { useState } from "react"
import type { UtilityData } from "@/lib/utilities"
import CodeBlock from "./code-block"

interface UtilityPageTemplateProps {
  utility: UtilityData
}

export default function UtilityPageTemplate({ utility }: UtilityPageTemplateProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(utility.codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-5xl font-bold text-foreground">{utility.title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">{utility.description}</p>
      </div>

      {/* Quick Example */}
      <div className="border-l-4 border-accent pl-6 py-2">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">Quick Example</h2>
        <p className="text-foreground">{utility.example}</p>
      </div>

      {/* Code Example */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Code Example</h2>
          <button
            onClick={copyToClipboard}
            className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <CodeBlock code={utility.codeSnippet} language="jsx" />
      </div>

      {/* Utility Classes */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Available Classes ({utility.classes.length})</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {utility.classes.map((item, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-4 hover:bg-card/50 transition group cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(item.class)
                setCopied(true)
                setTimeout(() => setCopied(false), 1500)
              }}
            >
              <code className="text-sm font-mono text-accent font-semibold group-hover:text-accent-foreground transition">
                {item.class}
              </code>
              <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
              <span className="text-xs text-muted-foreground mt-3 opacity-0 group-hover:opacity-100 transition">
                Click to copy
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Demo */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Visual Demo</h2>
        <div className="border border-border rounded-lg p-8 bg-card/30">
          <div className="flex gap-4 flex-wrap items-center justify-center min-h-32">
            <div className="p-4 bg-accent rounded-lg text-accent-foreground font-semibold hover:scale-110 transition">
              Demo Element
            </div>
            <div className="p-4 bg-card border border-border rounded-lg hover:shadow-lg transition">
              Additional Context
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="space-y-3 bg-card/30 border border-border rounded-lg p-6">
        <h3 className="font-semibold text-foreground">Common Use Cases</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-accent">→</span>
            <span>Building layouts with responsive design patterns</span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent">→</span>
            <span>Creating flexible and adaptive components</span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent">→</span>
            <span>Implementing consistent spacing and alignment</span>
          </li>
        </ul>
      </div>

      {/* Related Utilities Hint */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-sm text-foreground">
          💡 Tip: These utilities often work best combined with spacing, sizing, and alignment utilities.
        </p>
      </div>
    </div>
  )
}
