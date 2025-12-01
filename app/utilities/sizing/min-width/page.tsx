import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"

const minWidthUtilities = {
  title: "Min Width",
  description: "Control the minimum width of an element.",
  classes: [
    { class: "min-w-0", description: "Min width: 0" },
    { class: "min-w-full", description: "Min width: 100%" },
    { class: "min-w-min", description: "Min width: min-content" },
    { class: "min-w-max", description: "Min width: max-content" },
    { class: "min-w-fit", description: "Min width: fit-content" },
  ],
  example: "Elements maintain minimum width constraints",
  codeSnippet: `<div class="min-w-full overflow-x-auto">
  Wide content
</div>`,
}

export default function MinWidthPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={minWidthUtilities} />
      </main>
      <Footer />
    </div>
  )
}
