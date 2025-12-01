import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"
import { translateUtilities } from "@/lib/utilities"

export default function TranslatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={translateUtilities} />
      </main>
      <Footer />
    </div>
  )
}
