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
      <main className="flex-1 max-w-5xl px-8 py-12 space-y-12 text-left">
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

        {/* Type Selector */}
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

        {/* Interactive Playground */}
        <div className="border rounded-lg p-6 bg-slate-900 text-white text-center">
          <p className="font-semibold">{data.diagrams[activeType]?.title}</p>
          <div
            className={`mt-4 flex h-32 items-center justify-center gap-4 ${data.diagrams[activeType]?.classes}`}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-16 h-16 bg-blue-500 flex items-center justify-center text-white font-bold rounded shadow"
              >
                {i}
              </div>
            ))}
          </div>
          {data.diagrams[activeType]?.description && (
            <p className="mt-4 text-sm text-gray-300">
              {data.diagrams[activeType]?.description}
            </p>
          )}
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

        {/* Interactive Tools Section */}
        <section className="space-y-4 border border-border rounded-xl p-6 bg-gradient-to-br from-indigo-500/5 to-purple-500/5">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">🚀 Interactive Learning Tools</h2>
            <p className="text-sm text-muted-foreground">
              Practice and master {data.title} with hands-on tools and challenges
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => router.push(`/challenge?utility=${slugKey}`)}
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Take Challenge
            </button>
            
            <button
              onClick={() => router.push('/visualeditor')}
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Visual Editor
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}