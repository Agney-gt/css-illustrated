import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center space-y-6">
          <div>
            <h1 className="text-6xl font-bold text-foreground mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-foreground">Page not found</h2>
          </div>

          <p className="text-muted-foreground max-w-md mx-auto">
            The utility page you're looking for doesn't exist. Try searching for a utility or explore the categories.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/"
              className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Go Home
            </Link>
            <Link
              href="/utilities"
              className="px-6 py-2 border border-border rounded-lg font-semibold hover:bg-card transition"
            >
              View All Utilities
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
