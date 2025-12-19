"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageTitle from "@/components/otherComponents/pageTitle";
import ExampleCard from "@/components/otherComponents/realWorldExampleCard";
import UtilityCard from "@/components/otherComponents/utilityClassCard";
import PreviewPanel from "@/components/otherComponents/previewPanel";
import UtilityExaButtons from "@/components/otherComponents/utilityExaBtn";
import SummaryTips from "@/components/otherComponents/summaryTips";


const utilities = [
  { className: "accent-inherit", desc: "Inherit accent color from parent" },
  { className: "accent-current", desc: "Use current text color as accent" },
  { className: "accent-transparent", desc: "Transparent accent color" },
  { className: "accent-black", desc: "Black accent color" },
  { className: "accent-white", desc: "White accent color" },
  { className: "accent-red-50", desc: "Very light red accent" },
  { className: "accent-red-100", desc: "Light red accent" },
  { className: "accent-red-200", desc: "Soft red accent" },
  { className: "accent-red-300", desc: "Muted red accent" },
  { className: "accent-red-400", desc: "Medium red accent" },
  { className: "accent-red-500", desc: "Base red accent" },
  { className: "accent-red-600", desc: "Strong red accent" },
  { className: "accent-red-700", desc: "Dark red accent" },
  { className: "accent-red-800", desc: "Deeper red accent" },
  { className: "accent-red-900", desc: "Very dark red accent" },
  { className: "accent-red-950", desc: "Near-black red accent" },
  { className: "accent-orange-50", desc: "Very light orange accent" },
  { className: "accent-orange-100", desc: "Light orange accent" },
  { className: "accent-orange-200", desc: "Soft orange accent" },
  { className: "accent-orange-300", desc: "Muted orange accent" },
  { className: "accent-orange-400", desc: "Medium orange accent" },
  { className: "accent-orange-500", desc: "Base orange accent" },
  { className: "accent-orange-600", desc: "Strong orange accent" },
  { className: "accent-orange-700", desc: "Dark orange accent" },
  { className: "accent-orange-800", desc: "Deeper orange accent" },
  { className: "accent-orange-900", desc: "Very dark orange accent" },
  { className: "accent-orange-950", desc: "Near-black orange accent" },
  { className: "accent-yellow-50", desc: "Very light yellow accent" },
  { className: "accent-yellow-500", desc: "Base yellow accent" },
  { className: "accent-yellow-950", desc: "Very dark yellow accent" },
  { className: "accent-amber-50", desc: "Very light amber accent" },
  { className: "accent-amber-500", desc: "Base amber accent" },
  { className: "accent-amber-950", desc: "Very dark amber accent" },
  { className: "accent-lime-50", desc: "Very light lime accent" },
  { className: "accent-lime-500", desc: "Base lime accent" },
  { className: "accent-lime-950", desc: "Very dark lime accent" },
  { className: "accent-green-50", desc: "Very light green accent" },
  { className: "accent-green-500", desc: "Base green accent" },
  { className: "accent-green-950", desc: "Very dark green accent" },
  { className: "accent-emerald-50", desc: "Very light emerald accent" },
  { className: "accent-emerald-500", desc: "Base emerald accent" },
  { className: "accent-emerald-950", desc: "Very dark emerald accent" },
  { className: "accent-teal-50", desc: "Very light teal accent" },
  { className: "accent-teal-500", desc: "Base teal accent" },
  { className: "accent-teal-950", desc: "Very dark teal accent" },
  { className: "accent-blue-50", desc: "Very light blue accent" },
  { className: "accent-blue-500", desc: "Primary blue accent" },
  { className: "accent-blue-950", desc: "Very dark blue accent" },
  { className: "accent-sky-50", desc: "Very light sky accent" },
  { className: "accent-sky-500", desc: "Base sky accent" },
  { className: "accent-sky-950", desc: "Very dark sky accent" },
  { className: "accent-cyan-50", desc: "Very light cyan accent" },
  { className: "accent-cyan-500", desc: "Base cyan accent" },
  { className: "accent-cyan-950", desc: "Very dark cyan accent" },
  { className: "accent-purple-50", desc: "Very light purple accent" },
  { className: "accent-purple-500", desc: "Base purple accent" },
  { className: "accent-purple-950", desc: "Very dark purple accent" },
  { className: "accent-pink-50", desc: "Very light pink accent" },
  { className: "accent-pink-500", desc: "Base pink accent" },
  { className: "accent-pink-950", desc: "Very dark pink accent" },
  { className: "accent-rose-50", desc: "Very light rose accent" },
  { className: "accent-rose-500", desc: "Base rose accent" },
  { className: "accent-rose-950", desc: "Very dark rose accent" },
  { className: "accent-neutral-50", desc: "Very light neutral accent" },
  { className: "accent-neutral-500", desc: "Base neutral accent" },
  { className: "accent-neutral-950", desc: "Very dark neutral accent" },
  { className: "accent-slate-50", desc: "Very light slate accent" },
  { className: "accent-slate-500", desc: "Base slate accent" },
  { className: "accent-slate-950", desc: "Very dark slate accent" },
  ]; 
  
export default function AccentColorPage() {
  const utilityExaBtnText = utilities.map(u => u.className);
  const [activeUtilityExaBtn, setActiveExample] = useState(utilityExaBtnText[0]);

  const [code, setCode] = useState("");
  useEffect(() => {setCode(`
  <div class="space-y-2 ${activeUtilityExaBtn}">
    <label class="flex items-center gap-2">
      <input type="checkbox" checked />
      Checkbox
    </label>

    <label class="flex items-center gap-2">
      <input type="radio" name="demo" checked />
      Radio
    </label>

    <input type="range" />
  </div>
    `.trim());
  }, [activeUtilityExaBtn]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">

          <PageTitle 
            title="Accent Color"
            description="Control the highlight color of native form controls like checkboxes,
              radio buttons, and range inputs."
          />


          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Accent Color Utilities</h2>

            <div className="grid md:grid-cols-4 gap-4">
              {utilities.map((u) => (
                <UtilityCard
                  key={u.className}
                  classNameValue={u.className}
                  description={u.desc}
                />
              ))}
            </div>
          </div>    


          <div className="space-y-6 border-t border-border pt-8">
          <h2 className="text-3xl font-bold">Interactive Playground</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="space-y-4">
              <UtilityExaButtons
                label="Caret Colors"
                options={utilityExaBtnText}
                activeValue={activeUtilityExaBtn}
                onSelect={setActiveExample}
              />
            </div>

            <div className="md:col-span-2">
              <PreviewPanel
                title="Live Preview"
                code={code}
                onCodeChange={setCode}
                previewClass="p-4"
                description="Edit the HTML above to see live changes."
              />
            </div>
          </div>
        </div>


          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ExampleCard
                title="Brand-colored forms"
                code={`<form class="accent-indigo-500">
<label class="flex items-center gap-2">
  <input type="checkbox" checked />
  Subscribe
</label>
<label class="flex items-center gap-2 mt-2">
  <input type="radio" name="plan" checked />
  Monthly 
</label>
</form>`}
                description="Match native inputs with your brand color without custom CSS."
              >
              </ExampleCard>

              <ExampleCard
                title="Status-based UI"
                code={`<div class="accent-rose-500">
  <label class="flex items-center gap-2">
    <input type="checkbox" />
    Delete account
  </label>
</div>`}
                description="Use red accents for destructive or irreversible actions."
              >
              </ExampleCard>
            </div>
          </div>
                
          <SummaryTips 
            items={[
              "1. Accent color affects only native browser controls.",
              "2. Use semantic colors for better UX.",
              "3. No effect on fully custom components.",
              "4. Works with checkboxes, radio buttons, and range inputs by default.",
              "5. Accent color does not apply to text inputs or select elements.",
              "6. Browser support may vary slightly across platforms.",
              "7. Use neutral accent colors for accessibility-focused designs.",
              "8. Avoid low-contrast accent colors to ensure visibility.",
              "9. Accent utilities rely on the browser’s native control styling.",
              "10. Use `accent-current` to sync accents with text color.",
              "11. Use `accent-inherit` to inherit accent color from parent elements.",
              "12. Dark accent shades work better in light themes; lighter shades suit dark themes.",
              "13. Do not rely on accent color alone to convey critical information.",
              "14. Custom styled controls will override accent-color behavior.",
              "15. Accent color does not affect disabled form controls.",
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
