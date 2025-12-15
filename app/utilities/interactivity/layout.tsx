import type React from "react"
import Link from "next/link"

type InteractivityLink = {
  href: string
  label: string
}

type InteractivityLinksProps = {
  links: InteractivityLink[]
}

const links = [
  { href: "/utilities/interactivity/accent-color", label: "Accent Color" },
  { href: "/utilities/interactivity/appearance", label: "Appearance" },
  { href: "/utilities/interactivity/caret-color", label: "Caret Color" },
  { href: "/utilities/interactivity/color-scheme", label: "Color Scheme" },
  { href: "/utilities/interactivity/cursor", label: "Cursor" },
  { href: "/utilities/interactivity/field-sizing", label: "Field Sizing" },
  { href: "/utilities/interactivity/pointer-events", label: "Pointer Events" },
  { href: "/utilities/interactivity/resize", label: "Resize" },
  { href: "/utilities/interactivity/scroll-behaviour", label: "Scroll Behavior" },
  { href: "/utilities/interactivity/scroll-margin", label: "Scroll Margin" },
  { href: "/utilities/interactivity/scroll-padding", label: "Scroll Padding" },
  { href: "/utilities/interactivity/scroll-snap-align", label: "Scroll Snap Align" },
  { href: "/utilities/interactivity/scroll-snap-stop", label: "Scroll Snap Stop" },
  { href: "/utilities/interactivity/scroll-snap-type", label: "Scroll Snap Type" },
  { href: "/utilities/interactivity/touch-action", label: "Touch Action" },
  { href: "/utilities/interactivity/user-select", label: "User Select" },
  { href: "/utilities/interactivity/will-change", label: "Will Change" },
]

function InteractivityLinks({ links }: InteractivityLinksProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="px-3 py-1 text-sm border border-border rounded hover:bg-card transition"
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
} 

export default function InteractivityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h2 className="text-lg font-semibold text-foreground mb-3">Interactivity Utilities</h2>
          <div className="flex gap-2 flex-wrap">
            <InteractivityLinks links={links} />
          </div>
        </div>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  )
}
