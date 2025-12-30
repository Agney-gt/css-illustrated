import Link from "next/link"

const links = [
  { href: "/core-concepts/colors", label: "Colors" },
  { href: "/core-concepts/custom_styles", label: "Custom Styles" },
  { href: "/core-concepts/dark_mode", label: "Dark Mode" },
  { href: "/core-concepts/detecting_classes_in_source_files", label: "Detecting Classes in Source Files" },
  { href: "/core-concepts/functions_and_directives", label: "Functions and Directives" },
  { href: "/core-concepts/hover-focus-and-other-states", label: "Hover, Focus and Other States" },
  { href: "/core-concepts/preflight", label: "Preflight" },
  { href: "/core-concepts/responsive_design", label: "Responsive Design" },
  { href: "/core-concepts/Styling-with-utility-classes", label: "Styling with Utility Classes" },
  { href: "/core-concepts/theme_variables", label: "Theme Variables" },
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
            Core Concepts
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
