import Link from "next/link"

const links = [
  { href: "/utilities/tables/border-collapse", label: "Border Collapse" },
  { href: "/utilities/tables/border-spacing", label: "Border Spacing" },
  { href: "/utilities/tables/caption-side", label: "Caption Side" },
  { href: "/utilities/tables/table-layout", label: "Table Layout" },
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
            Table Utilities
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
