"use client"

import { useState } from "react"

interface CopyButtonProps {
  text: string
  label?: string
}

export default function CopyButton({ text, label = "Copy" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button onClick={handleCopy} className="px-3 py-2 text-sm border border-border rounded hover:bg-card transition">
      {copied ? "✓ Copied!" : label}
    </button>
  )
}
