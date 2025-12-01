import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"

const placeItemsUtilities = {
  title: "Place Items",
  description: "Shorthand for both align-items and justify-items.",
  classes: [
    { class: "place-items-start", description: "Align to start" },
    { class: "place-items-end", description: "Align to end" },
    { class: "place-items-center", description: "Center items" },
    { class: "place-items-baseline", description: "Align to baseline" },
    { class: "place-items-stretch", description: "Stretch items" },
  ],
  example: "Items align in both directions",
  codeSnippet: `<div class="grid grid-cols-3 place-items-center h-64">
  <div>Centered item</div>
</div>`,
}

export default function PlaceItemsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={placeItemsUtilities} />
      </main>
      <Footer />
    </div>
  )
}
