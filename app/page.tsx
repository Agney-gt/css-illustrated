import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="space-y-6 mb-16">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
                Master Tailwind CSS Utilities
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
                Complete guide to every Tailwind CSS utility. Learn spacing, sizing, colors, transforms, and more with
                interactive examples.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/utilities"
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition"
              >
                Start Learning
              </Link>
              <a
                href="#categories"
                className="px-6 py-3 border border-border rounded-lg font-semibold hover:bg-card transition"
              >
                Explore Categories
              </a>
            </div>
          </div>

          {/* Categories Grid */}
          <div id="categories" className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Utility Categories</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Layout", desc: "Columns, Display, Floats, Grid", href: "/utilities/columns" },
                { title: "Spacing", desc: "Padding, Margin, Gap", href: "/utilities/spacing/padding" },
                { title: "Sizing", desc: "Width, Height, Min/Max", href: "/utilities/sizing/width" },
                { title: "Flexbox", desc: "Direction, Wrap, Grow, Order", href: "/utilities/flex" },
                { title: "Grid", desc: "Auto Flow, Rows, Columns", href: "/utilities/grid/auto-flow" },
                { title: "Alignment", desc: "Justify, Align, Place", href: "/utilities/justify/content" },
                { title: "Backgrounds", desc: "Colors, Gradients, Position", href: "/utilities/background/position" },
                { title: "Borders", desc: "Radius, Width, Color, Style", href: "/utilities/border/radius" },
                { title: "Effects", desc: "Shadow, Ring, Outline", href: "/utilities/ring/width" },
                { title: "Transforms", desc: "Scale, Rotate, Translate, Skew", href: "/utilities/transform/scale" },
                { title: "Interactivity", desc: "Cursor, Pointer, Scroll", href: "/utilities/interactivity/cursor" },
                { title: "Accessibility", desc: "Screen Readers", href: "/utilities/accessibility/screen-readers" },
              ].map((cat) => (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className="p-4 border border-border rounded-lg hover:bg-card transition group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{cat.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
