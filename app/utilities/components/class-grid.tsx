"use client"

import { useState } from "react"

interface ClassGridProps {
  classes: Array<{ class: string; description: string }>
}

export default function ClassGrid({ classes }: ClassGridProps) {
  const [copied, setCopied] = useState<string | null>(null)

  const copyClass = (className: string) => {
    navigator.clipboard.writeText(className)
    setCopied(className)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {classes.map((item, index) => (
        <button
          key={index}
          onClick={() => copyClass(item.class)}
          className="text-left border border-border rounded-lg p-4 hover:bg-card/50 transition group"
        >
          <code className="text-sm font-mono text-accent font-semibold group-hover:text-accent-foreground transition block truncate">
            {item.class}
          </code>
          <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
          <span className="text-xs text-muted-foreground mt-3 opacity-0 group-hover:opacity-100 transition inline-block">
            {copied === item.class ? "✓ Copied!" : "Click to copy"}
          </span>
        </button>
      ))}
    </div>
  )
}
