import Link from "next/link"

const links = [
  { href: "/utilities/alignment/align-content", label: "Align Content" },
  { href: "/utilities/alignment/align-items", label: "Align Items" },
  { href: "/utilities/alignment/align-self", label: "Align Self" },
  { href: "/utilities/alignment/justify-content", label: "Justify Content" },
  { href: "/utilities/alignment/justify-items", label: "Justify Items" },
  { href: "/utilities/alignment/justify-self", label: "Justify Self" },
  { href: "/utilities/alignment/place-content", label: "Place Content" },
  { href: "/utilities/alignment/place-items", label: "Place Items" },
  { href: "/utilities/alignment/place-self", label: "Place Self" },
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
            Alignment Utilities
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
