import React from "react";
import CopyButton from "./copybutton";

type UtilityCardProps = {
  classNameValue: string;
  description: string;
};

function UtilityCard({
  classNameValue,
  description,
}: UtilityCardProps) {
  return (
    <div className="border border-border rounded-lg p-4 hover:bg-card/50 transition">
      <div className="flex justify-between items-center">
        <code className={`font-mono text-sm font-semibold text-foreground bg-muted/40 px-2 py-0.5 rounded ${classNameValue}`}>
          {classNameValue}
        </code>
        <CopyButton text={classNameValue} />
      </div>

      <p className="text-sm text-muted-foreground mt-2">
        {description}
      </p>
    </div>
  );
}

export default UtilityCard;