import React from "react";

type UtilityButtonsProps = {
  label?: string;
  options: string[];          
  activeValue: string;
  onSelect: (value: string) => void;
};

const UtilityExaButtons: React.FC<UtilityButtonsProps> = ({
  label = "Options",
  options,
  activeValue,
  onSelect,
}) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-muted-foreground">
        {label}
      </label>

      <div className="flex flex-wrap gap-2">
        {options.map((value) => (
          <button
            key={value}
            onClick={() => onSelect(value)}
            className={`px-3 py-1 text-sm rounded border transition
              ${
                activeValue === value
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-border hover:bg-muted"
              }`}
          >
            {value} 
          </button>
        ))}
      </div>
    </div>
  );
};

export default UtilityExaButtons;
