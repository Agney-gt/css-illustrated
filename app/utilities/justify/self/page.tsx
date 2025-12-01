import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"

const justifySelfUtilities = {
  title: "Justify Self",
  description: "Control how an individual grid item is aligned along the inline axis.",
  classes: [
    { class: "justify-self-auto", description: "Auto alignment" },
    { class: "justify-self-start", description: "Align to start" },
    { class: "justify-self-end", description: "Align to end" },
    { class: "justify-self-center", description: "Center self" },
    { class: "justify-self-stretch", description: "Stretch self" },
  ],
  example: "Individual items align themselves",
  codeSnippet: `<div class="grid grid-cols-3">
  <div class="justify-self-center">Centered</div>
</div>`,
}

export default function JustifySelfPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={justifySelfUtilities} />
      </main>
      <Footer />
    </div>
  )
}
