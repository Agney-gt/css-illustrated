"use client";

import React, { useState } from "react";
import { PageHero } from "@/components/shared/page-hero";
import {
  POINTER_HERO,
  POINTER_UTILITIES,
  POINTER_TIPS,
} from "@/app/utilities/interactivity/pointer-events/data";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { PointerPlayground } from "@/components/pointer-events/pointer-playground";
import { PointerExamples } from "@/components/pointer-events/pointer-examples";
import { TipsSection } from "@/components/shared/tips-section";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

export default function PointerEventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero {...POINTER_HERO} />

          <UtilityGrid
            title="Pointer-events utilities"
            items={POINTER_UTILITIES}
          />

          <PointerPlayground />

          <InteractiveChallenge
            title="The Blocked Button"
            description="This 'Premium' button has a fancy gloss overlay sitting on top of it. Currently, the overlay is capturing all your clicks (`pointer-events-auto`), making the button underneath unclickable. Apply `pointer-events-none` to the overlay so clicks pass through to the button."
            codeSnippet={`<div class="relative inline-block">
  <button class="px-8 py-3 bg-indigo-600 text-white font-bold rounded-full">
    Get Premium
  </button>

  <div class="{input} absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent border border-white/30">
  </div>
</div>`}
            options={[
              "pointer-events-auto",
              "pointer-events-none",
              "cursor-pointer",
              "opacity-0",
            ]}
            correctOption="pointer-events-none"
            renderPreview={(userClass) => {
              const [isSuccess, setIsSuccess] = useState(false);
              const [blockedCount, setBlockedCount] = useState(0);

              // Reset state when class changes
              React.useEffect(() => {
                setIsSuccess(false);
                setBlockedCount(0);
              }, [userClass]);

              return (
                <div className="flex flex-col items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                  <div className="relative group">
                    {/* The Target Button */}
                    <button
                      onClick={() => setIsSuccess(true)}
                      className={`
                        px-8 py-3 bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all text-white font-bold rounded-full shadow-lg flex items-center gap-2
                        ${isSuccess ? "bg-green-600 hover:bg-green-700" : ""}
                      `}
                    >
                      {isSuccess ? (
                        <>
                          <span>✓</span> Activated!
                        </>
                      ) : (
                        "Get Premium"
                      )}
                    </button>

                    {/* The Gloss Overlay (The Blocker) */}
                    {/* We use absolute inset-0 to ensure it covers the button completely */}
                    <div
                      className={`
                        absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent border border-white/40
                        ${userClass}
                      `}
                      // This click handler simulates the overlay "eating" the click
                      onClick={(e) => {
                        if (userClass !== "pointer-events-none") {
                          e.stopPropagation(); // Stop click from reaching button
                          setBlockedCount((prev) => prev + 1);

                          // Visual shake feedback
                          const el = e.currentTarget;
                          el.animate(
                            [
                              { transform: "translateX(0)" },
                              { transform: "translateX(-2px)" },
                              { transform: "translateX(2px)" },
                              { transform: "translateX(0)" },
                            ],
                            { duration: 150 }
                          );
                        }
                      }}
                    ></div>
                  </div>

                  {/* Feedback Message */}
                  <div className="mt-8 h-12 text-center flex flex-col items-center justify-center">
                    {isSuccess ? (
                      <div className="text-xs text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full border border-green-200 animate-in fade-in zoom-in">
                        🎉 Success! Clicks passed through the overlay.
                      </div>
                    ) : (
                      <>
                        <div className="text-xs text-slate-500 mb-1">
                          Try clicking the button...
                        </div>
                        {blockedCount > 0 && (
                          <div className="text-xs text-red-500 font-medium animate-pulse">
                            🚫 Overlay blocked {blockedCount} click
                            {blockedCount > 1 ? "s" : ""}!
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              );
            }}
          />

          <PointerExamples />

          <TipsSection tips={POINTER_TIPS} />
        </div>
      </main>
    </div>
  );
}
