import React, { useState } from "react";
import CopyButton from "@/app/utilities/components/copy-button";

type PreviewPanelProps = {
  title?: string;
  code: string;
  onCodeChange: (code: string) => void;
  previewClass?: string;
  description?: string;
};

function PreviewPanel({
  title = "Live preview",
  code,
  onCodeChange,
  previewClass = "",
  description,
}: PreviewPanelProps) {
  return (
    <div className="rounded-xl border border-border bg-card/50 backdrop-blur">
      
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <h3 className="text-sm font-semibold tracking-wide">
          {title}
        </h3>
      </div>

      <div className="px-5 py-6">
        <div
          className={`space-y-4 text-foreground ${previewClass}`}
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </div>

      <div className="mx-5 mb-5 rounded-lg border border-border bg-muted/60">
        <div className="relative">
          <textarea
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
            className="w-full min-h-[180px] resize-none bg-transparent
               p-4 font-mono text-sm outline-none text-foreground placeholder:text-muted-foreground"
          />

          <div className="absolute top-3 right-3">
            <CopyButton text={code} />
          </div>
        </div>
      </div>

      {description && (
        <div className="px-5 pb-5 text-sm text-muted-foreground">
          {description}
        </div>
      )}
    </div>
  );
}

export default PreviewPanel;
