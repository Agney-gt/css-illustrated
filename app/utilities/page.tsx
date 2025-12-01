import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

export default function UtilitiesIndex() {
  const categories = [
    {
      name: "Layout",
      utilities: [
        { name: "Columns", href: "/utilities/columns" },
        { name: "Break After", href: "/utilities/break/break-after" },
        { name: "Break Before", href: "/utilities/break/break-before" },
        { name: "Break Inside", href: "/utilities/break/break-inside" },
        { name: "Box", href: "/utilities/box" },
        { name: "Display", href: "/utilities/display" },
        { name: "Floats & Clear", href: "/utilities/flows" },
        { name: "Object Fit", href: "/utilities/object/fit" },
        { name: "Object Position", href: "/utilities/object/position" },
      ],
    },
    {
      name: "Spacing & Sizing",
      utilities: [
        { name: "Padding", href: "/utilities/spacing/padding" },
        { name: "Margin", href: "/utilities/spacing/margin" },
        { name: "Space Between", href: "/utilities/spacing/space-between" },
        { name: "Width", href: "/utilities/sizing/width" },
        { name: "Min Width", href: "/utilities/sizing/min-width" },
        { name: "Max Width", href: "/utilities/sizing/max-width" },
        { name: "Height", href: "/utilities/sizing/height" },
        { name: "Min Height", href: "/utilities/sizing/min-height" },
        { name: "Max Height", href: "/utilities/sizing/max-height" },
      ],
    },
    {
      name: "Flexbox & Grid",
      utilities: [
        { name: "Flex Display", href: "/utilities/flex" },
        { name: "Flex Direction", href: "/utilities/flex/direction" },
        { name: "Flex Wrap", href: "/utilities/flex/wrap" },
        { name: "Flex Sizing", href: "/utilities/flex/sizing" },
        { name: "Flex Order", href: "/utilities/flex/order" },
        { name: "Grid Auto Flow", href: "/utilities/grid/auto-flow" },
        { name: "Grid Auto Columns", href: "/utilities/grid/auto-columns" },
        { name: "Grid Auto Rows", href: "/utilities/grid/auto-rows" },
        { name: "Gap", href: "/utilities/grid/gap" },
      ],
    },
    {
      name: "Alignment",
      utilities: [
        { name: "Justify Content", href: "/utilities/justify/content" },
        { name: "Justify Items", href: "/utilities/justify/items" },
        { name: "Justify Self", href: "/utilities/justify/self" },
        { name: "Align Content", href: "/utilities/align/content" },
        { name: "Align Items", href: "/utilities/align/items" },
        { name: "Align Self", href: "/utilities/align/self" },
        { name: "Place Content", href: "/utilities/place/content" },
        { name: "Place Items", href: "/utilities/place/items" },
        { name: "Place Self", href: "/utilities/place/self" },
      ],
    },
    {
      name: "Styling",
      utilities: [
        { name: "Background Position", href: "/utilities/background/position" },
        { name: "Background Repeat", href: "/utilities/background/repeat" },
        { name: "Background Size", href: "/utilities/background/size" },
        { name: "Background Image", href: "/utilities/background/image" },
        { name: "Gradient Stops", href: "/utilities/background/gradient-stops" },
        { name: "Border Radius", href: "/utilities/border/radius" },
        { name: "Border Width", href: "/utilities/border/width" },
        { name: "Border Color", href: "/utilities/border/color" },
        { name: "Border Style", href: "/utilities/border/style" },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 px-4 py-12 max-w-7xl mx-auto w-full">
        <div className="space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Utility Reference</h1>
            <p className="text-muted-foreground">Browse all Tailwind CSS utilities by category</p>
          </div>

          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category.name}>
                <h2 className="text-2xl font-bold text-foreground mb-4">{category.name}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.utilities.map((util) => (
                    <Link
                      key={util.name}
                      href={util.href}
                      className="p-3 border border-border rounded hover:bg-card hover:border-accent transition group"
                    >
                      <span className="text-foreground group-hover:text-accent transition">{util.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
