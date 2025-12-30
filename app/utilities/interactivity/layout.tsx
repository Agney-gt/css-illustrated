import Link from "next/link"

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
  { href: "/utilities/interactivity/scroll-snap-align", label: "Scroll Snap Align" },
  { href: "/utilities/interactivity/scroll-snap-stop", label: "Scroll Snap Stop" },
  { href: "/utilities/interactivity/scroll-snap-type", label: "Scroll Snap Type" },
  { href: "/utilities/interactivity/touch-action", label: "Touch Action" },
  { href: "/utilities/interactivity/user-select", label: "User Select" },
  { href: "/utilities/interactivity/will-change", label: "Will Change" },
]

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h2 className="text-lg font-semibold mb-3">
            Interactivity Utilities
          </h2>

          <div className="flex gap-2 flex-wrap">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-1 text-sm border border-border rounded hover:bg-black/20 transition"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-1">{children}</main>
    </div>
  )
}
