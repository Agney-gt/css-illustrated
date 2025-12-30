import Link from "next/link"

const links = [
  { href: "/utilities/borders/border-color", label: "Border Color" },
  { href: "/utilities/borders/border-radius", label: "Border Radius" },
  { href: "/utilities/borders/border-style", label: "Border Style" },
  { href: "/utilities/borders/border-width", label: "Border Width" },
  { href: "/utilities/borders/divide-color", label: "Divide Color" },
  { href: "/utilities/borders/divide-style", label: "Divide Style" },
  { href: "/utilities/borders/divide-width", label: "Divide Width" },
  { href: "/utilities/borders/outline-color", label: "Outline Color" },
  { href: "/utilities/borders/outline-offset", label: "Outline Offset" },
  { href: "/utilities/borders/outline-style", label: "Outline Style" },
  { href: "/utilities/borders/outline-width", label: "Outline Width" },
  { href: "/utilities/borders/ring-color", label: "Ring Color" },
  { href: "/utilities/borders/ring-offset-color", label: "Ring Offset Color" },
  { href: "/utilities/borders/ring-offset-width", label: "Ring Offset Width" },
  { href: "/utilities/borders/ring-width", label: "Ring Width" },
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
            Border Utilities
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
