import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"
import { gridAutoRowsUtilities } from "@/lib/utilities"

export default function GridAutoRowsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={gridAutoRowsUtilities} />
      </main>
      <Footer />
    </div>
  )
}
