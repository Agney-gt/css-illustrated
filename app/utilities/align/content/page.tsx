import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"

const alignContentUtilities = {
  title: "Align Content",
  description: "Control how flex and grid lines are distributed in the cross axis.",
  classes: [
    { class: "content-start", description: "Align to start" },
    { class: "content-end", description: "Align to end" },
    { class: "content-center", description: "Center content" },
    { class: "content-between", description: "Space between lines" },
    { class: "content-around", description: "Space around lines" },
    { class: "content-evenly", description: "Even spacing" },
    { class: "content-baseline", description: "Align to baseline" },
  ],
  example: "Multiple lines align together",
  codeSnippet: `<div class="flex flex-wrap content-center h-64">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`,
}

export default function AlignContentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={alignContentUtilities} />
      </main>
      <Footer />
    </div>
  )
}
