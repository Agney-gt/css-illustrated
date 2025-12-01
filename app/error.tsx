"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="text-center space-y-6">
        <div>
          <h1 className="text-6xl font-bold text-foreground mb-2">⚠️</h1>
          <h2 className="text-2xl font-semibold text-foreground">Something went wrong</h2>
        </div>

        <p className="text-muted-foreground max-w-md mx-auto">
          An unexpected error occurred. Please try again or contact support if the problem persists.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition"
          >
            Try Again
          </button>
          <Link href="/" className="px-6 py-2 border border-border rounded-lg font-semibold hover:bg-card transition">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
