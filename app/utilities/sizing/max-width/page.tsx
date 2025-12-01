import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"

const maxWidthUtilities = {
  title: "Max Width",
  description: "Control the maximum width of an element.",
  classes: [
    { class: "max-w-0", description: "Max width: 0" },
    { class: "max-w-xs", description: "Max width: 20rem" },
    { class: "max-w-sm", description: "Max width: 24rem" },
    { class: "max-w-md", description: "Max width: 28rem" },
    { class: "max-w-lg", description: "Max width: 32rem" },
    { class: "max-w-xl", description: "Max width: 36rem" },
    { class: "max-w-full", description: "Max width: 100%" },
    { class: "max-w-screen-lg", description: "Max width: screen lg" },
  ],
  example: "Elements respect maximum width constraints",
  codeSnippet: `<div class="max-w-2xl mx-auto">
  Constrained width content
</div>`,
}

export default function MaxWidthPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={maxWidthUtilities} />
      </main>
      <Footer />
    </div>
  )
}
