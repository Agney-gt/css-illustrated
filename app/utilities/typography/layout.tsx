import Link from "next/link"

const links = [
  { href: "/utilities/typography/content", label: "Content" },
  { href: "/utilities/typography/font-family", label: "Font Family" },
  { href: "/utilities/typography/font-size", label: "Font Size" },
  { href: "/utilities/typography/font-smoothing", label: "Font Smoothing" },
  { href: "/utilities/typography/font-stretch", label: "Font Stretch" },
  { href: "/utilities/typography/font-style", label: "Font Style" },
  { href: "/utilities/typography/font-variant-numeric", label: "Font Variant Numeric" },
  { href: "/utilities/typography/font-weight", label: "Font Weight" },
  { href: "/utilities/typography/hyphens", label: "Hyphens" },
  { href: "/utilities/typography/letter-spacing", label: "Letter Spacing" },
  { href: "/utilities/typography/line-clamp", label: "Line Clamp" },
  { href: "/utilities/typography/line-height", label: "Line Height" },
  { href: "/utilities/typography/list-style-image", label: "List Style Image" },
  { href: "/utilities/typography/list-style-position", label: "List Style Position" },
  { href: "/utilities/typography/list-style-type", label: "List Style Type" },
  { href: "/utilities/typography/overflow-wrap", label: "Overflow Wrap" },
  { href: "/utilities/typography/text-align", label: "Text Align" },
  { href: "/utilities/typography/text-color", label: "Text Color" },
  { href: "/utilities/typography/text-decoration-color", label: "Text Decoration Color" },
  { href: "/utilities/typography/text-decoration-line", label: "Text Decoration Line" },
  { href: "/utilities/typography/text-decoration-style", label: "Text Decoration Style" },
  { href: "/utilities/typography/text-decoration-thickness", label: "Text Decoration Thickness" },
  { href: "/utilities/typography/text-indent", label: "Text Indent" },
  { href: "/utilities/typography/text-overflow", label: "Text Overflow" },
  { href: "/utilities/typography/text-transform", label: "Text Transform" },
  { href: "/utilities/typography/text-underline-offset", label: "Text Underline Offset" },
  { href: "/utilities/typography/text-wrap", label: "Text Wrap" },
  { href: "/utilities/typography/vertical-align", label: "Vertical Align" },
  { href: "/utilities/typography/white-space", label: "White Space" },
  { href: "/utilities/typography/word-break", label: "Word Break" },
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
            Typography Utilities
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
