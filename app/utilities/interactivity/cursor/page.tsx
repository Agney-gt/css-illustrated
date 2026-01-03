"use client"

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Metadata } from "next";
import { CursorPlayground } from "@/components/cursor/cursor-playground";
import { RealWorldExamples } from "@/components/cursor/real-world-examples";
import { TipsSection } from "@/components/shared/tips-section";
import { CURSOR_TIPS } from "@/app/utilities/interactivity/cursor/data";
import { PageHero } from "@/components/shared/page-hero";
import { CURSOR_HERO } from "@/app/utilities/interactivity/cursor/data";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { CURSOR_UTILITIES } from "@/app/utilities/interactivity/cursor/data";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

export default function CursorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero {...CURSOR_HERO} />

          <UtilityGrid
            title="Cursor utilities"
            items={CURSOR_UTILITIES}
            prefix="cursor-"
          />

          <CursorPlayground />

          <InteractiveChallenge
            title="The Confusing Button"
            description="This 'Processing' button is disabled, but when you hover over it, the cursor still turns into a hand (`cursor-pointer`). This tricks users into thinking it's clickable. Change the cursor to `cursor-not-allowed` to clearly signal that the button is inactive."
            codeSnippet={`<div class="p-8 bg-white border rounded-xl flex flex-col items-center gap-4">
  <div class="text-sm font-medium text-slate-500">Form Status: Submitting...</div>
  
  <button 
    disabled
    class="{input} px-6 py-3 bg-blue-600/50 text-white font-bold rounded-lg flex items-center gap-2"
  >
    <svg class="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">...</svg>
    Processing...
  </button>
</div>`}
            options={[
              "cursor-pointer",
              "cursor-default",
              "cursor-not-allowed",
              "cursor-wait",
            ]}
            correctOption="cursor-not-allowed"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg flex flex-col items-center gap-6 w-full max-w-sm">
                  <div className="text-sm font-medium text-slate-500 flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                    Form Status: Submitting...
                  </div>

                  <button
                    disabled
                    className={`
                      px-6 py-3 bg-blue-600/50 text-white font-bold rounded-lg flex items-center gap-2 w-full justify-center transition-all
                      ${userClass}
                    `}
                  >
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </button>

                  {/* Feedback Message */}
                  {userClass === "cursor-pointer" && (
                    <p className="text-xs text-red-500 font-medium text-center">
                      ❌ Confusing! Users will try to click this.
                    </p>
                  )}
                  {userClass === "cursor-not-allowed" && (
                    <p className="text-xs text-green-600 font-bold text-center bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full border border-green-200 dark:border-green-800 animate-in fade-in zoom-in">
                      ✅ Clear! "Stop" sign visible on hover.
                    </p>
                  )}
                </div>
              </div>
            )}
          />

          <RealWorldExamples />

          <TipsSection tips={CURSOR_TIPS} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
