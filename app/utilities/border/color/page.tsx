import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"
import { borderColorUtilities } from "@/lib/utilities"

export default function BorderColorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={borderColorUtilities} />
      </main>
      <Footer />
    </div>
  )
}
