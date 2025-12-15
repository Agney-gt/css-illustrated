"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CodeBlock from "../../components/code-block"

export default function BackgroundPositionPage() {
  const utilities = [
    "bg-left-top",
    "bg-center",
    "bg-right-bottom",
    "bg-top",
    "bg-bottom",
  ]

  const [activeClass, setActiveClass] = useState(utilities[0])
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const CopyableCode = ({ code, index }: { code: string; index: number }) => (
    <div
      className="relative border border-border rounded-lg p-4 hover:bg-card/50 cursor-pointer group transition"
      onClick={() => copyToClipboard(code, index)}
    >
      {copiedIndex === index && (
        <div className="absolute top-2 left-2 px-2 py-0.5 text-xs text-white bg-green-600 rounded">
          Copied!
        </div>
      )}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 text-xs bg-white rounded opacity-0 group-hover:opacity-100 transition">
        Click to copy
      </div>
      <CodeBlock code={code} language="html" />
    </div>
  )

  const explanations: Record<string, string> = {
    "bg-left-top": "Background positioned to the top-left corner.",
    "bg-center": "Background positioned at the center of the container.",
    "bg-right-bottom": "Background positioned at bottom-right corner.",
    "bg-top": "Background positioned at top center.",
    "bg-bottom": "Background positioned at bottom center.",
  }

  const examples: Record<
    string,
    { title: string; note: string; code: string }[]
  > = {
    "bg-left-top": [
      {
        title: "Logo Corner Banner",
        note: "Branding aligned from top-left",
        code: `<div class="bg-left-top bg-no-repeat bg-contain" style="background-image:url(logo.png); height:200px;"></div>`,
      },
      {
        title: "Corner Texture",
        note: "Decorative pattern",
        code: `<div class="bg-left-top bg-no-repeat" style="background-image:url(texture.svg); height:250px;"></div>`,
      },
      {
        title: "Watermark Placement",
        note: "Logo stays visible",
        code: `<div class="bg-left-top" style="background-image:url(watermark.png); height:300px;"></div>`,
      },
      {
        title: "Top Corner Highlight",
        note: "UI enhancement",
        code: `<section class="bg-left-top bg-cover" style="background-image:url(highlight.png); height:260px;"></section>`,
      },
      {
        title: "Product Branding Placement",
        note: "Logo first to appear",
        code: `<header class="bg-left-top bg-contain" style="background-image:url(brand.png); height:200px;"></header>`,
      },
    ],
    "bg-center": [
      {
        title: "Hero Banner",
        note: "Focal point centered",
        code: `<section class="bg-center bg-cover" style="background-image:url(hero.jpg); height:300px;"></section>`,
      },
      {
        title: "Centered Product Promo",
        note: "Balanced visuals",
        code: `<div class="bg-center bg-cover" style="background-image:url(product.png); height:260px;"></div>`,
      },
      {
        title: "Landing Layout",
        note: "Main subject in focus",
        code: `<div class="bg-center bg-no-repeat" style="background-image:url(main.png); height:220px;"></div>`,
      },
      {
        title: "Event Banner",
        note: "Central artwork",
        code: `<header class="bg-center bg-cover" style="background-image:url(event.jpg); height:300px;"></header>`,
      },
      {
        title: "Centered Poster",
        note: "Important content visible",
        code: `<div class="bg-center bg-no-repeat" style="background-image:url(poster.jpg); height:280px;"></div>`,
      },
    ],
    "bg-right-bottom": [
      {
        title: "Minimal Corner Accent",
        note: "Subtle pattern",
        code: `<div class="bg-right-bottom bg-no-repeat" style="background-image:url(pattern.svg); height:250px;"></div>`,
      },
      {
        title: "Decorative UI Element",
        note: "Priority-left content",
        code: `<div class="bg-right-bottom" style="background-image:url(ui.png); height:220px;"></div>`,
      },
      {
        title: "Shadow Accent",
        note: "Adds depth",
        code: `<div class="bg-right-bottom" style="background-image:url(shadow.png); height:240px;"></div>`,
      },
      {
        title: "Promo Highlight",
        note: "Sale icon stays away from text",
        code: `<div class="bg-right-bottom bg-cover" style="background-image:url(sale.png); height:260px;"></div>`,
      },
      {
        title: "Corner Logo",
        note: "Strong visual anchor",
        code: `<div class="bg-right-bottom bg-contain" style="background-image:url(corner-logo.png); height:200px;"></div>`,
      },
    ],
    "bg-top": [
      {
        title: "Header Art",
        note: "Top-focused layout",
        code: `<header class="bg-top bg-cover" style="background-image:url(header.jpg); height:250px;"></header>`,
      },
      {
        title: "Spotlight Banner",
        note: "Top featured content",
        code: `<div class="bg-top bg-cover" style="background-image:url(spotlight.png); height:260px;"></div>`,
      },
      {
        title: "Promo Strip",
        note: "Aligned toward navigation",
        code: `<section class="bg-top bg-no-repeat" style="background-image:url(promo.jpg); height:240px;"></section>`,
      },
      {
        title: "Magazine Cover",
        note: "Heads-up attention",
        code: `<div class="bg-top bg-contain" style="background-image:url(mag-cover.png); height:260px;"></div>`,
      },
      {
        title: "Title Artwork",
        note: "Show header art",
        code: `<div class="bg-top bg-no-repeat" style="background-image:url(title-art.png); height:230px;"></div>`,
      },
    ],
    "bg-bottom": [
      {
        title: "UI Screenshot Showcase",
        note: "Key elements bottom placed",
        code: `<div class="bg-bottom bg-cover" style="background-image:url(app.png); height:300px;"></div>`,
      },
      {
        title: "Footer Image",
        note: "Bottom-based content",
        code: `<footer class="bg-bottom bg-contain" style="background-image:url(footer.png); height:250px;"></footer>`,
      },
      {
        title: "News Highlight",
        note: "Images that start lower",
        code: `<div class="bg-bottom bg-cover" style="background-image:url(news.png); height:250px;"></div>`,
      },
      {
        title: "Movie Poster",
        note: "Face at bottom",
        code: `<div class="bg-bottom bg-cover" style="background-image:url(movie.jpg); height:290px;"></div>`,
      },
      {
        title: "Product Display",
        note: "Base-aligned focus",
        code: `<div class="bg-bottom bg-contain" style="background-image:url(display.png); height:270px;"></div>`,
      },
    ],
  }

  // Map Tailwind background positions to block alignment
  const positionMap: Record<string, string> = {
    "bg-left-top": "top-2 left-2",
    "bg-center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "bg-right-bottom": "bottom-2 right-2",
    "bg-top": "top-2 left-1/2 -translate-x-1/2",
    "bg-bottom": "bottom-2 left-1/2 -translate-x-1/2",
  }

  // 🌟 Updated Visual Preview
  const renderPreview = (cls: string) => (
    <div className="border border-border rounded-lg p-6 bg-gray-900 text-white text-center">
      <p className="font-semibold mb-4">Visual Representation: {cls}</p>

      <div
        className={`relative w-full h-48 rounded-lg border bg-no-repeat bg-cover ${cls}`}
        style={{
          backgroundImage:
            "url('https://via.placeholder.com/300x200.png?text=BG+Position')",
        }}
      >
        {/* Purple Block moves according to selected class */}
        <div
          className={`absolute w-14 h-14 bg-purple-500/70 rounded-md backdrop-blur-sm transition-all duration-300 ${positionMap[cls]}`}
        />
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 space-y-12">
        <h1 className="text-3xl font-bold">Tailwind Background Position Utilities</h1>

        <div className="flex flex-wrap gap-3">
          {utilities.map((cls) => (
            <button
              key={cls}
              onClick={() => setActiveClass(cls)}
              className={`px-4 py-2 rounded font-medium transition ${
                activeClass === cls
                  ? "bg-blue-600 text-white shadow"
                  : "bg-card/20 hover:bg-card/30"
              }`}
            >
              {cls}
            </button>
          ))}
        </div>

        {renderPreview(activeClass)}

        <p className="text-sm text-muted-foreground">
          {explanations[activeClass]}
        </p>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Real-World Examples</h2>
          {examples[activeClass].map((ex, i) => (
            <div
              key={i}
              className="border border-border rounded-lg p-4 bg-card/20 space-y-2"
            >
              <div className="flex justify-between">
                <span className="font-semibold">{ex.title}</span>
                <span className="text-xs text-muted-foreground">
                  {ex.note}
                </span>
              </div>
              <CopyableCode code={ex.code} index={i} />
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}
