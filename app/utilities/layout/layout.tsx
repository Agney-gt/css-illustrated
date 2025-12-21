import Link from "next/link"

const links = [
  { href: "/utilities/layout/aspect-ratio", label: "Aspect Ratio" },
  { href: "/utilities/layout/box", label: "Box" },
  { href: "/utilities/layout/break-after", label: "Break After" },
  { href: "/utilities/layout/break-before", label: "Break Before" },
  { href: "/utilities/layout/break-inside", label: "Break Inside" },
  { href: "/utilities/layout/clear", label: "Clear" },
  { href: "/utilities/layout/columns", label: "Columns" },
  { href: "/utilities/layout/display", label: "Display" },
  { href: "/utilities/layout/float", label: "Float" },
  { href: "/utilities/layout/isolation", label: "Isolation" },
  { href: "/utilities/layout/object-fit", label: "Object Fit" },
  { href: "/utilities/layout/object-position", label: "Object Position" },
  { href: "/utilities/layout/overflow", label: "Overflow" },
  { href: "/utilities/layout/overscroll-behavior", label: "Overscroll Behavior" },
  { href: "/utilities/layout/position", label: "Position" },
  { href: "/utilities/layout/top_right_bottom_left", label: "Top / Right / Bottom / Left" },
  { href: "/utilities/layout/visibility", label: "Visibility" },
  { href: "/utilities/layout/z-index", label: "Z Index" },
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
            Layout Utilities
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
