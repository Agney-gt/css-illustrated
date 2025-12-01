import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"

const flexWrapUtilities = {
  title: "Flex Wrap",
  description: "Control whether flex items wrap to multiple lines.",
  classes: [
    { class: "flex-wrap", description: "Wrap to multiple lines" },
    { class: "flex-wrap-reverse", description: "Wrap in reverse" },
    { class: "flex-nowrap", description: "Keep on single line" },
  ],
  example: "Items wrap when needed",
  codeSnippet: `<div class="flex flex-wrap gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`,
}

export default function FlexWrapPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={flexWrapUtilities} />
      </main>
      <Footer />
    </div>
  )
}
