import Link from "next/link"

const links = [
  { href: "/utilities/grid/auto-columns", label: "Auto Columns" },
  { href: "/utilities/grid/auto-flow", label: "Auto Flow" },
  { href: "/utilities/grid/auto-rows", label: "Auto Rows" },
  { href: "/utilities/grid/gap", label: "Gap" },
  { href: "/utilities/grid/grid-column", label: "Grid Column" },
  { href: "/utilities/grid/grid-row", label: "Grid Row" },
  { href: "/utilities/grid/grid-template-columns", label: "Grid Template Columns" },
  { href: "/utilities/grid/grid-template-rows", label: "Grid Template Rows" },
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
            Grid Utilities
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
