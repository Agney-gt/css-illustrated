import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"

const userSelectUtilities = {
  title: "User Select",
  description: "Control whether text can be selected by users.",
  classes: [
    { class: "select-none", description: "Text cannot be selected" },
    { class: "select-text", description: "Text can be selected" },
    { class: "select-all", description: "Select all text on click" },
    { class: "select-auto", description: "Default select behavior" },
  ],
  example: "Control user text selection behavior",
  codeSnippet: `<button class="select-none">
  Unselectable button text
</button>`,
}

export default function UserSelectPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={userSelectUtilities} />
      </main>
      <Footer />
    </div>
  )
}
