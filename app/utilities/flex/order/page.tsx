import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UtilityPageTemplate from "../../components/utility-page-template"

const flexOrderUtilities = {
  title: "Flex Order",
  description: "Control the order of flex items visually.",
  classes: [
    { class: "order-first", description: "Order: -9999" },
    { class: "order-last", description: "Order: 9999" },
    { class: "order-none", description: "Order: 0 (default)" },
    { class: "order-1", description: "Order: 1" },
    { class: "order-2", description: "Order: 2" },
    { class: "order-12", description: "Order: 12" },
  ],
  example: "Items reorder without changing HTML",
  codeSnippet: `<div class="flex gap-4">
  <div class="order-2">Second</div>
  <div class="order-1">First</div>
</div>`,
}

export default function FlexOrderPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <UtilityPageTemplate utility={flexOrderUtilities} />
      </main>
      <Footer />
    </div>
  )
}
