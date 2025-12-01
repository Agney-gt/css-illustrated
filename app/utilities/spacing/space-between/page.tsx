import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"

const spaceBetweenUtilities = {
  title: "Space Between",
  description: "Control the spacing between child elements.",
  classes: [
    { class: "space-x-0", description: "No horizontal space" },
    { class: "space-x-1", description: "0.25rem horizontal space" },
    { class: "space-x-2", description: "0.5rem horizontal space" },
    { class: "space-x-4", description: "1rem horizontal space" },
    { class: "space-x-8", description: "2rem horizontal space" },
    { class: "space-y-0", description: "No vertical space" },
    { class: "space-y-2", description: "0.5rem vertical space" },
    { class: "space-y-4", description: "1rem vertical space" },
    { class: "-space-x-2", description: "-0.5rem (overlap)" },
  ],
  example: "Automatic spacing between sibling elements",
  codeSnippet: `<div class="flex space-x-4">
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
</div>`,
}

export default function SpaceBetweenPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={spaceBetweenUtilities} />
      </main>
      <Footer />
    </div>
  )
}
