import Link from "next/link"

const links = [
  { href: "/utilities/filters/backdrop-filter/blur", label: "Blur" },
  { href: "/utilities/filters/backdrop-filter/brightness", label: "Brightness" },
  { href: "/utilities/filters/backdrop-filter/contrast", label: "Contrast" },
  { href: "/utilities/filters/backdrop-filter/grayscale", label: "Grayscale" },
  { href: "/utilities/filters/backdrop-filter/hue-rotate", label: "Hue Rotate" },
  { href: "/utilities/filters/backdrop-filter/invert", label: "Invert" },
  { href: "/utilities/filters/backdrop-filter/opacity", label: "Opacity" },
  { href: "/utilities/filters/backdrop-filter/saturate", label: "Saturate" },
  { href: "/utilities/filters/backdrop-filter/sepia", label: "Sepia" },
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
            Backdrop Filter Utilities
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
