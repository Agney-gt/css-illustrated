import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"

const placeContentUtilities = {
  title: "Place Content",
  description: "Shorthand for both align-content and justify-content.",
  classes: [
    { class: "place-content-center", description: "Center content both ways" },
    { class: "place-content-start", description: "Align to start" },
    { class: "place-content-end", description: "Align to end" },
    { class: "place-content-between", description: "Space between" },
    { class: "place-content-around", description: "Space around" },
    { class: "place-content-evenly", description: "Even spacing" },
  ],
  example: "Content centers in both directions",
  codeSnippet: `<div class="grid grid-cols-3 h-screen place-content-center">
  <div>Centered content</div>
</div>`,
}

export default function PlaceContentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={placeContentUtilities} />
      </main>
      <Footer />
    </div>
  )
}
