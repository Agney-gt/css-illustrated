import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"

const marginUtilities = {
  title: "Margin",
  description: "Control the outer spacing around elements.",
  classes: [
    { class: "m-0", description: "margin: 0" },
    { class: "m-1", description: "margin: 0.25rem" },
    { class: "m-2", description: "margin: 0.5rem" },
    { class: "m-4", description: "margin: 1rem" },
    { class: "m-6", description: "margin: 1.5rem" },
    { class: "m-8", description: "margin: 2rem" },
    { class: "mx-auto", description: "Horizontal center" },
    { class: "mx-4", description: "Horizontal margin: 1rem" },
    { class: "my-8", description: "Vertical margin: 2rem" },
    { class: "mt-4", description: "Margin top: 1rem" },
  ],
  example: "Outer spacing creates breathing room",
  codeSnippet: `<div class="m-4 border border-border">
  Content with margin
</div>`,
}

export default function MarginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={marginUtilities} />
      </main>
      <Footer />
    </div>
  )
}
