import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"

const pointerEventsUtilities = {
  title: "Pointer Events",
  description: "Control whether an element can be targeted by pointer events.",
  classes: [
    { class: "pointer-events-none", description: "Element cannot receive events" },
    { class: "pointer-events-auto", description: "Element can receive events" },
  ],
  example: "Elements become click-through or interactive",
  codeSnippet: `<div class="pointer-events-none opacity-50">
  Disabled overlay
</div>`,
}

export default function PointerEventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={pointerEventsUtilities} />
      </main>
      <Footer />
    </div>
  )
}
