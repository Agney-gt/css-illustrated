import Link from "next/link"

const links = [
  { href: "/utilities/effects/background-blend-mode", label: "Background Blend Mode" },
  { href: "/utilities/effects/box-shadow", label: "Box Shadow" },
  { href: "/utilities/effects/mask-clip", label: "Mask Clip" },
  { href: "/utilities/effects/mask-composite", label: "Mask Composite" },
  { href: "/utilities/effects/mask-image", label: "Mask Image" },
  { href: "/utilities/effects/mask-mode", label: "Mask Mode" },
  { href: "/utilities/effects/mask-origin", label: "Mask Origin" },
  { href: "/utilities/effects/mask-position", label: "Mask Position" },
  { href: "/utilities/effects/mask-repeat", label: "Mask Repeat" },
  { href: "/utilities/effects/mask-size", label: "Mask Size" },
  { href: "/utilities/effects/mask-type", label: "Mask Type" },
  { href: "/utilities/effects/mix-blend-mode", label: "Mix Blend Mode" },
  { href: "/utilities/effects/opacity", label: "Opacity" },
  { href: "/utilities/effects/text-shadow", label: "Text Shadow" },
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
            Effects Utilities
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
