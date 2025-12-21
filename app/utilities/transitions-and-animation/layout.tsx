import Link from "next/link"

const links = [
  { href: "/utilities/transitions-and-animation/animation", label: "Animation" },
  { href: "/utilities/transitions-and-animation/transition-behavior", label: "Transition Behavior" },
  { href: "/utilities/transitions-and-animation/transition-delay", label: "Transition Delay" },
  { href: "/utilities/transitions-and-animation/transition-duration", label: "Transition Duration" },
  { href: "/utilities/transitions-and-animation/transition-property", label: "Transition Property" },
  { href: "/utilities/transitions-and-animation/transition-timing-function", label: "Transition Timing Function" },
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
            Transitions & Animation
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
