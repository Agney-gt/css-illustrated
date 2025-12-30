import Link from "next/link"

const links = [
  { href: "/utilities/filters/filter/blur", label: "Blur" },
  { href: "/utilities/filters/filter/brightness", label: "Brightness" },
  { href: "/utilities/filters/filter/contrast", label: "Contrast" },
  { href: "/utilities/filters/filter/grayscale", label: "Grayscale" },
  { href: "/utilities/filters/filter/hue-rotate", label: "Hue Rotate" },
  { href: "/utilities/filters/filter/invert", label: "Invert" },
  { href: "/utilities/filters/filter/saturate", label: "Saturate" },
  { href: "/utilities/filters/filter/sepia", label: "Sepia" },
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
            Filter Utilities
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
