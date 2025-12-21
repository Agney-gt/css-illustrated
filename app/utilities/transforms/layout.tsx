import Link from "next/link"

const links = [
  { href: "/utilities/transforms/backface-visibility", label: "Backface Visibility" },
  { href: "/utilities/transforms/perspective", label: "Perspective" },
  { href: "/utilities/transforms/perspective-origin", label: "Perspective Origin" },
  { href: "/utilities/transforms/rotate", label: "Rotate" },
  { href: "/utilities/transforms/scale", label: "Scale" },
  { href: "/utilities/transforms/skew", label: "Skew" },
  { href: "/utilities/transforms/transform", label: "Transform" },
  { href: "/utilities/transforms/transform-origin", label: "Transform Origin" },
  { href: "/utilities/transforms/transform-style", label: "Transform Style" },
  { href: "/utilities/transforms/translate", label: "Translate" },
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
            Transform Utilities
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
