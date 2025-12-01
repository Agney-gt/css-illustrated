import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"

const flexDirectionUtilities = {
  title: "Flex Direction",
  description: "Control the direction flex items are laid out.",
  classes: [
    { class: "flex-row", description: "Row direction (left to right)" },
    { class: "flex-col", description: "Column direction (top to bottom)" },
    { class: "flex-row-reverse", description: "Row reverse (right to left)" },
    { class: "flex-col-reverse", description: "Column reverse (bottom to top)" },
  ],
  example: "Flex direction changes layout orientation",
  codeSnippet: `<div class="flex flex-col">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`,
}

export default function FlexDirectionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={flexDirectionUtilities} />
      </main>
      <Footer />
    </div>
  )
}
