import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"

const heightUtilities = {
  title: "Height",
  description: "Control the height of an element.",
  classes: [
    { class: "h-full", description: "height: 100%" },
    { class: "h-screen", description: "height: 100vh" },
    { class: "h-min", description: "height: min-content" },
    { class: "h-max", description: "height: max-content" },
    { class: "h-fit", description: "height: fit-content" },
    { class: "h-0", description: "height: 0" },
    { class: "h-1", description: "height: 0.25rem" },
    { class: "h-4", description: "height: 1rem" },
    { class: "h-12", description: "height: 3rem" },
    { class: "h-48", description: "height: 12rem" },
  ],
  example: "Elements size to specific heights",
  codeSnippet: `<div class="h-64 bg-blue-500 rounded-lg">
  Fixed height element
</div>`,
}

export default function HeightPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={heightUtilities} />
      </main>
      <Footer />
    </div>
  )
}
