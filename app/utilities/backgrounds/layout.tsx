import Link from "next/link"

const links = [
  { href: "/utilities/backgrounds/background-attachment", label: "Background Attachment" },
  { href: "/utilities/backgrounds/background-clip", label: "Background Clip" },
  { href: "/utilities/backgrounds/background-color", label: "Background Color" },
  { href: "/utilities/backgrounds/background-image", label: "Background Image" },
  { href: "/utilities/backgrounds/background-origin", label: "Background Origin" },
  { href: "/utilities/backgrounds/background-position", label: "Background Position" },
  { href: "/utilities/backgrounds/background-repeat", label: "Background Repeat" },
  { href: "/utilities/backgrounds/background-size", label: "Background Size" },
  { href: "/utilities/backgrounds/gradient-stops", label: "Gradient Stops" },
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
            Backgrounds Utilities
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
