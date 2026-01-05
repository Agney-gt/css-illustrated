"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";
import { utilitiesContent } from "@/app/utilities/data/utilities";
import IntegratedPlayground from "@/app/utilities/components/integrated-playground";

const NAV_GROUPS: Record<string, { label: string; slug: string }[]> = {
  align: [
    { label: "Content", slug: "align-content" },
    { label: "Items", slug: "align-items" },
    { label: "Self", slug: "align-self" },
  ],
};

export default function UtilityPage() {
  const params = useParams();
  const router = useRouter();

  const slugArray = Array.isArray(params?.slug) ? params.slug : [];
  const lastSegmentKey = slugArray.at(-1) ?? "";
  const joinedKey = slugArray.join("-");
  
  const slugKey = utilitiesContent[lastSegmentKey]
    ? lastSegmentKey
    : utilitiesContent[joinedKey]
    ? joinedKey
    : "";

  const data = utilitiesContent[slugKey];
  const [activeType, setActiveType] = useState(data?.types?.[0] ?? "");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const CopyableCode = ({ code, index }: { code: string; index: number }) => (
    <div
      className="relative border border-border rounded-lg p-4 hover:bg-card/50 cursor-pointer group transition"
      onClick={() => copy(code, index)}
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

  if (!slugKey || !data) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <h1 className="text-2xl font-semibold">Utility not found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  const navItems = data.navigationGroup ? NAV_GROUPS[data.navigationGroup] ?? [] : [];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-8 py-12 space-y-12 text-left w-full">
        {/* Top Navigation */}
        {navItems.length > 0 && (
          <div className="flex gap-3">
            {navItems.map((item) => {
              const isActive = slugKey === item.slug;
              const group = data.navigationGroup;
              const subUtility = item.slug.replace(`${group}-`, "");

              return (
                <button
                  key={item.slug}
                  onClick={() => router.push(`/utilities/${group}/${subUtility}`)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition border ${
                    isActive
                      ? "bg-muted border-border text-foreground"
                      : "border-transparent hover:bg-card/40"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Mental Model Section */}
        <MentalModelSection
          title={data.title}
          description={data.description}
          features={data.mentalModelFeatures}
          layerAssignment={data.layerAssignment}
        />

        {/* Comparison Table */}
        {data.comparisonTable && <ComparisonTable {...data.comparisonTable} />}

        {/* INTEGRATED PLAYGROUND - No type selector here */}
        <IntegratedPlayground 
          utilityName={slugKey}
        />

        {/* Type Selector - Moved after playground */}
        <div className="flex gap-4 mb-6">
          {data.types.map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded font-medium ${
                activeType === type
                  ? "bg-blue-600 text-white shadow"
                  : "bg-card/20 text-foreground hover:bg-card/30"
              }`}
              onClick={() => setActiveType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Benefits */}
        {data.benefits?.[activeType] && (
          <section className="space-y-2 border border-border rounded-lg p-4 bg-card/30">
            <h2 className="text-2xl font-semibold text-foreground">Benefits</h2>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {data.benefits[activeType].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Real World Examples */}
        {data.examples?.[activeType] && (
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Real World Examples</h2>
            {data.examples[activeType].map((ex, idx) => (
              <div key={idx} className="space-y-2 border border-border rounded-lg p-4 bg-card/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{ex.title}</h3>
                  <p className="text-sm text-muted-foreground">{ex.note}</p>
                </div>
                <CopyableCode code={ex.code} index={idx} />
              </div>
            ))}
          </section>
        )}

        {/* Common Mistakes */}
        {data.commonMistakes?.[activeType] && (
          <CommonMistakesSection mistakes={data.commonMistakes[activeType]} />
        )}

        {/* Common Use Cases */}
        {data.commonUseCases?.[activeType] && (
          <section className="space-y-2 border border-border rounded-lg p-4 bg-card/30">
            <h2 className="text-2xl font-semibold text-foreground">Common Use Cases</h2>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {data.commonUseCases[activeType].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Additional Sections */}
        {data.additionalSections?.map((section, sIdx) => (
          <section key={sIdx} className="space-y-2 border border-border rounded-lg p-4 bg-card/30">
            <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {section.content[activeType]?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}