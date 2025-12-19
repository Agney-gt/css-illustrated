import React from "react";

type SummaryTipsProps = {
  title?: string;
  items: string[];
};

const SummaryTips: React.FC<SummaryTipsProps> = ({
  title = "Summary tips",
  items,
}) => {
  return (
    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">
      <h3 className="font-semibold">{title}</h3>

      <ul className="text-sm text-muted-foreground space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryTips;
