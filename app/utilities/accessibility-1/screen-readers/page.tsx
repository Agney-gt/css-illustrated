  "use client";

  import { useState } from "react";
  import Navbar from "@/components/navbar";
  import Footer from "@/components/footer";
  import CodeBlock from "@/app/utilities/components/code-block";
  import { MentalModelSection } from "@/components/shared/mental-model-section";
  import { ComparisonTable } from "@/components/shared/comparison-table";
  import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";

  export default function ScreenReadersPage() {
    const [activeType, setActiveType] = useState<"sr-only" | "not-sr-only">("sr-only");
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const copyToClipboard = (text: string, index: number) => {
      navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    };

    const types = ["sr-only", "not-sr-only"] as const;

    const examplesData = 
    {

      "sr-only": [
        {
          title: "Visually Hidden Label",
          note: "Use sr-only to hide a label visually but keep it readable for screen readers.",
          code: `<label class="sr-only" for="email">Email address</label>
          <input id="email" type="email" placeholder="Enter your email" />`,
        },
        {
          title: "Screen Reader Only Text for Buttons",
          note: "Provide extra description for icons for screen readers.",
          code: `<button class="p-2 bg-blue-600 text-white rounded">
    <svg class="w-5 h-5"><!-- icon --></svg>
    <span class="sr-only">Submit Form</span>
  </button>`,
        },
        {
          title: "Live Region for Dynamic Updates",
          note: "Announce dynamic content changes via aria-live and sr-only.",
          code: `<div role="status" aria-live="polite" class="sr-only">
    Form submitted successfully
  </div>`,
        },
        {
          title: "Skip Link for Keyboard Users",
          note: "Provide a way to jump to main content for non-visual users.",
          code: `<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>
  <main id="main-content"> ... </main>`,
        },
        {
          title: "Hidden Instructions",
          note: "Provide guidance for screen reader users without affecting layout.",
          code: `<p class="sr-only">Use arrow keys to navigate the gallery</p>`,
        },
      ],
      "not-sr-only": [
        {
          title: "Visible Label Example",
          note: "Label is visible on the page for all users.",
          code: `<label for="email">Email address</label>
  <input id="email" type="email" placeholder="Enter your email" />`,
        },
        {
          title: "Button with Text",
          note: "Button shows text for both visual users and screen readers.",
          code: `<button class="p-2 bg-blue-600 text-white rounded">Submit Form</button>`,
        },
        {
          title: "Visible Notifications",
          note: "Alerts that appear visually and for screen readers.",
          code: `<div role="alert" class="bg-green-100 text-green-800 p-2 rounded">
  Form submitted successfully
  </div>`,
        },
        {
          title: "Inline Instructions",
          note: "Instructions visible directly to all users.",
          code: `<p>Use arrow keys to navigate the gallery</p>`,
        },
        {
          title: "Navigation Links",
          note: "All navigation links visible for everyone.",
          code: `<nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>`,
        },
      ],
    };

    const CopyableCode = ({ code, index }: { code: string; index: number }) => (
      <div
        className="relative border border-border rounded-lg p-4 hover:bg-card/50 cursor-pointer group transition"
        onClick={() => copyToClipboard(code, index)}
      >
        {copiedIndex === index && (
          <div className="absolute top-2 left-2 px-2 py-0.5 text-xs text-white bg-green-600 rounded">
            Copied!
          </div>
        )}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 text-xs text-gray-700 bg-white rounded opacity-0 group-hover:opacity-100 transition">
          Click to copy
        </div>
        <CodeBlock code={code} language="html" />
      </div>
    );

    const diagrams = {
      "sr-only": (
        <div className="border border-border rounded-lg p-6 bg-slate-900 text-white text-center">
          <p className="font-semibold">This content is visually hidden but accessible to screen readers</p>
          <div className="mt-4 flex justify-center items-center h-32">
            <div className="sr-only bg-blue-500 w-32 h-16 flex items-center justify-center">
              Screen Reader Only Block
            </div>
          </div>
        </div>
      ),
      "not-sr-only": (
        <div className="border border-border rounded-lg p-6 bg-slate-900 text-white text-center">
          <p className="font-semibold">This content is visible to all users</p>
          <div className="mt-4 flex justify-center items-center h-32">
            <div className="bg-blue-500 w-32 h-16 flex items-center justify-center text-white font-semibold">
              Visible Block
            </div>
          </div>
        </div>
      ),
    };

    const commonUseCases = {
      "sr-only": [
        "Use sr-only for labels, instructions, and dynamic updates",
        "Keep content accessible without affecting visual layout",
        "Combine with focus:not-sr-only for skip links",
      ],
      "not-sr-only": [
        "Use visible content for all users",
        "Display alerts, instructions, navigation links",
        "Combine with sr-only when needed for accessibility",
      ],
    };

    const benefits = {
      "sr-only": [
        "Helps comply with accessibility standards (WCAG)",
        "Improves UX for visually impaired users",
        "Maintains semantic HTML structure",
      ],
      "not-sr-only": [
        "Visible to all users",
        "Ensures clarity for non-visual users as well",
        "Works with sr-only for enhanced accessibility",
      ],
    };

    const commonMistakes = {
      "sr-only": [
        "Hiding content that should be visible",
        "Forgetting focus:not-sr-only on skip links",
        "Overusing sr-only unnecessarily",
      ],
      "not-sr-only": [
        "Making content visible but forgetting accessibility labels",
        "Not combining with sr-only for hidden instructions",
      ],
    };

    return (

      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />

        <main className="flex-1 max-w-5xl px-8 py-12 space-y-12 text-left">


          {/* Mental Model Section */}
          <MentalModelSection
            title="How Assistive Technology Works"
            description="Screen readers read the DOM tree"
            features={[
              "Element types (button, heading, link)",
              "Text content (including sr-only)",
              "ARIA attributes and roles",
              "Form labels and descriptions"
            ]}
            layerAssignment="Screen reader utilities belong to the Content layer - they control what information assistive technology can access without affecting visual layout or shape."
          />

          {/* Quick Comparison Table */}
          <ComparisonTable
            title="Quick Comparison: sr-only vs not-sr-only"
            columns={["Feature", "sr-only", "not-sr-only"]}
            rows={[
              {
                feature: "Visibility",
                values: [
                  "Hidden visually, readable by screen readers",
                  "Visible to all users"
                ]
              },
              {
                feature: "Use Cases", 
                values: [
                  "Hidden labels, instructions, live updates",
                  "Alerts, navigation, visible content"
                ]
              },
              {
                feature: "Accessibility",
                values: [
                  "Improves screen reader UX",
                  "Works for all users"
                ]
              }
            ]}
          />

          {/* Type Selector */}
          <div className="flex gap-4 mb-6">
            {types.map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded font-medium ${
                  activeType === type
                    ? "bg-blue-600 text-white shadow"
                    : "bg-card/20 text-foreground hover:bg-card/30"
                }`}
                onClick={() => setActiveType(type)}
              >
                {type === "sr-only" ? "sr-only" : "not sr-only"}
              </button>
            ))}
          </div>

          {/* Selected Type Content */}
          <div className="space-y-6">
            {/* Diagram */}
            {diagrams[activeType]}

            {/* Explanation with Layer Context */}
            <MentalModelSection
              title=""
              description=""
              features={[]}
              layerAssignment={activeType === "sr-only" 
                ? "Content Layer (assistive technology information): The sr-only class hides content visually but keeps it accessible to screen readers. This creates a dual-layer experience where assistive technology receives information that doesn't affect the visual presentation layer."
                : "Content Layer (assistive technology information): Visible content (not sr-only) serves both visual users and assistive technology. This is the default content layer behavior - information available to everyone through different channels."
              }
              browserBehavior="Screen readers ignore CSS display:none but read sr-only content, which uses clip:rect(0,0,0,0) to hide visually while remaining in the accessibility tree."
            />

            {/* Benefits Section */}
            <section className="space-y-2 border border-border rounded-lg p-4 bg-card/30">
              <h2 className="text-2xl font-semibold text-foreground">Benefits</h2>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {benefits[activeType].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Cross-Reference to Related Concepts */}
            <section className="space-y-2 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 bg-yellow-50/30 dark:bg-yellow-900/10">
              <h2 className="text-xl font-semibold text-yellow-700 dark:text-yellow-400">Related Accessibility Concepts</h2>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Screen reader utilities work with:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>ARIA attributes:</strong> Define roles, states, and properties</li>
                  <li><strong>Semantic HTML:</strong> Use proper element types (button, nav, main)</li>
                  <li><strong>Focus management:</strong> Tab order and keyboard navigation</li>
                  <li><strong>Color contrast:</strong> Ensure text is readable (Text Color utilities)</li>
                  <li><strong>Touch target size:</strong> Make interactive areas accessible (Spacing utilities)</li>
                </ul>
                <p className="mt-3 text-xs">Screen reader utilities are part of a complete accessibility strategy, not a standalone solution.</p>
              </div>
            </section>

            {/* ❌ Common Mistakes & Why They Happen */}
            <CommonMistakesSection
              mistakes={[
                {
                  title: "Forgetting focus:not-sr-only on skip links",
                  reason: "Screen reader users can't see when the link becomes visible during keyboard navigation.",
                  example: `<a class="sr-only">Skip to content</a> // Never visible when focused`,
                  level: 'critical'
                },
                {
                  title: "Using sr-only for content that should be visible",
                  reason: "You're hiding useful information from sighted users unnecessarily.",
                  example: `<p class="sr-only">This form is required</p> // Why hide this warning?`,
                  level: 'warning'
                },
                {
                  title: "Adding sr-only to decorative content",
                  reason: "Assistive technology users don't need to hear about decorative elements.",
                  example: `<div class="sr-only">Beautiful background pattern</div> // Use aria-hidden instead`,
                  level: 'info'
                }
              ]}
            />

            {/* Real World Examples */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Real World Examples</h2>
              {examplesData[activeType].map((ex, idx) => (
                <div key={idx} className="space-y-2 border border-border rounded-lg p-4 bg-card/20">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{ex.title}</h3>
                    <p className="text-sm text-muted-foreground">{ex.note}</p>
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">
                    {activeType === "sr-only" ? "Content Layer: Information for assistive technology only" : "Content Layer: Information visible to all users"}
                  </div>
                  <CopyableCode code={ex.code} index={idx} />
                </div>
              ))}
            </section>


            {/* Common Use Cases */}
            <section className="space-y-2 border border-border rounded-lg p-4 bg-card/30">
              <h2 className="text-2xl font-semibold text-foreground">Common Use Cases</h2>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {commonUseCases[activeType].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Layer-Specific Rules */}
            <section className="space-y-2 border border-blue-200 dark:border-blue-800 rounded-lg p-4 bg-blue-50/30 dark:bg-blue-900/10">
              <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400">Content Layer Rules</h2>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li><strong>sr-only</strong> must be used for content that screen readers need but sighted users don't</li>
                <li><strong>not-sr-only</strong> is the default - use it for content everyone should access</li>
                <li>Combine with <code className="bg-muted px-1 rounded">focus:not-sr-only</code> for interactive elements</li>
                <li>Use <code className="bg-muted px-1 rounded">aria-hidden</code> for decorative elements, not sr-only</li>
                <li>Screen reader content should complement, not duplicate, visible content</li>
              </ul>
            </section>

            {/* Pre-Ship Checklist */}
            <section className="space-y-2 border border-green-200 dark:border-green-800 rounded-lg p-4 bg-green-50/30 dark:bg-green-900/10">
              <h2 className="text-xl font-semibold text-green-700 dark:text-green-400">Pre-Ship Checklist</h2>
              <div className="text-sm space-y-2">
                <div className="font-medium">Content Layer Verification:</div>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>[ ] Does sr-only content provide unique value to assistive technology users?</li>
                  <li>[ ] Are skip links focusable (focus:not-sr-only)?</li>
                  <li>[ ] Is decorative content using aria-hidden instead of sr-only?</li>
                  <li>[ ] Does visible content have adequate labels for screen readers?</li>
                  <li>[ ] Are form inputs properly labeled (visible or sr-only)?</li>
                </ul>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }