import Link from "next/link"

const links = [
  { href: "/utilities/sizing/height", label: "Height" },
  { href: "/utilities/sizing/max-height", label: "Max Height" },
  { href: "/utilities/sizing/max-width", label: "Max Width" },
  { href: "/utilities/sizing/min-height", label: "Min Height" },
  { href: "/utilities/sizing/min-width", label: "Min Width" },
  { href: "/utilities/sizing/width", label: "Width" },
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
            Sizing Utilities
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
