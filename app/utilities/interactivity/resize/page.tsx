import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"

const resizeUtilities = {
  title: "Resize",
  description: "Control whether an element can be resized by the user.",
  classes: [
    { class: "resize", description: "Resizable in all directions" },
    { class: "resize-none", description: "Not resizable" },
    { class: "resize-x", description: "Resizable horizontally" },
    { class: "resize-y", description: "Resizable vertically" },
  ],
  example: "Textareas become user-resizable",
  codeSnippet: `<textarea class="resize w-full h-24">
  Resizable text area
</textarea>`,
}

export default function ResizePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={resizeUtilities} />
      </main>
      <Footer />
    </div>
  )
}
