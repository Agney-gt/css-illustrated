import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"

const alignSelfUtilities = {
  title: "Align Self",
  description: "Control how an individual flex or grid item is aligned on the cross axis.",
  classes: [
    { class: "self-auto", description: "Auto alignment" },
    { class: "self-start", description: "Align to start" },
    { class: "self-end", description: "Align to end" },
    { class: "self-center", description: "Center self" },
    { class: "self-stretch", description: "Stretch self" },
    { class: "self-baseline", description: "Align to baseline" },
  ],
  example: "Individual items align themselves",
  codeSnippet: `<div class="flex gap-4 h-32">
  <div class="self-center">Centered</div>
</div>`,
}

export default function AlignSelfPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={alignSelfUtilities} />
      </main>
      <Footer />
    </div>
  )
}
