import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"

const placeSelfUtilities = {
  title: "Place Self",
  description: "Shorthand for both align-self and justify-self.",
  classes: [
    { class: "place-self-auto", description: "Auto alignment" },
    { class: "place-self-start", description: "Align to start" },
    { class: "place-self-end", description: "Align to end" },
    { class: "place-self-center", description: "Center self" },
    { class: "place-self-stretch", description: "Stretch self" },
  ],
  example: "Individual items center themselves",
  codeSnippet: `<div class="grid grid-cols-3 h-64">
  <div class="place-self-center">Centered</div>
</div>`,
}

export default function PlaceSelfPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={placeSelfUtilities} />
      </main>
      <Footer />
    </div>
  )
}
