import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"

const ringOffsetColorUtilities = {
  title: "Ring Offset Color",
  description: "Control the color of the space between a ring and an element.",
  classes: [
    { class: "ring-offset-gray-400", description: "Gray offset color" },
    { class: "ring-offset-blue-600", description: "Blue offset color" },
    { class: "ring-offset-background", description: "Background token color" },
  ],
  example: "Ring offset shows custom color",
  codeSnippet: `<button class="ring-2 ring-offset-2 ring-offset-blue-500">
  Ring with color offset
</button>`,
}

export default function RingOffsetColorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={ringOffsetColorUtilities} />
      </main>
      <Footer />
    </div>
  )
}
