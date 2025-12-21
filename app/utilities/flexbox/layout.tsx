import Link from "next/link"

const links = [
  { href: "/utilities/flexbox/basis", label: "Basis" },
  { href: "/utilities/flexbox/direction", label: "Direction" },
  { href: "/utilities/flexbox/flex", label: "Flex" },
  { href: "/utilities/flexbox/grow", label: "Grow" },
  { href: "/utilities/flexbox/order", label: "Order" },
  { href: "/utilities/flexbox/shrink", label: "Shrink" },
  { href: "/utilities/flexbox/sizing", label: "Sizing" },
  { href: "/utilities/flexbox/wrap", label: "Wrap" },
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
            Flexbox Utilities
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
