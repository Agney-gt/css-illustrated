"use client";

import { useState, useEffect } from "react";

type DiagramType = {
  title: string;
  classes: string;
  description: string;
};

type ControlOption = {
  label: string;
  value: string;
};

type Control = {
  property: string;
  title: string;
  options: ControlOption[];
};

type Challenge = {
  utility: string;
  title: string;
  description: string;
  targetDescription: string;
  successMessage: string;
  hintMessage: string;
  baseContainer: string;
  boxClasses: string;
  numberOfBoxes: number;
  solution: Record<string, string>;
  controls: Control[];
  boxContent?: string[];
};

type EditorProperty = {
  name: string;
  label: string;
  type: "color" | "range" | "text" | "select";
  min?: number;
  max?: number;
  options?: { label: string; value: string }[];
  unit?: string;
};

type UtilityData = {
  title: string;
  diagrams: Record<string, DiagramType>;
  challenge?: Challenge;
  editorProperties?: EditorProperty[];
};

type ElementStyle = {
  fontSize: string;
  color: string;
  backgroundColor: string;
  padding: string;
  margin: string;
  borderRadius: string;
  fontWeight: string;
  textAlign: string;
  width: string;
  height: string;
  [key: string]: string;
};

type Element = {
  id: string;
  type: "box";
  styles: ElementStyle;
};

interface IntegratedPlaygroundProps {
  utilityName: string;
}

export default function IntegratedPlayground({ utilityName }: IntegratedPlaygroundProps) {
  const [utilityData, setUtilityData] = useState<UtilityData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [activeMode, setActiveMode] = useState<"demo" | "challenge" | "editor">("demo");
  const [activeType, setActiveType] = useState("");
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({});
  const [isSolved, setIsSolved] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  
  // Visual Editor State
  const [elements, setElements] = useState<Element[]>([
    { id: "1", type: "box", styles: { fontSize: "16px", color: "#ffffff", backgroundColor: "#6366f1", padding: "0px", margin: "8px", borderRadius: "12px", fontWeight: "700", textAlign: "center", width: "80px", height: "80px" } },
    { id: "2", type: "box", styles: { fontSize: "16px", color: "#ffffff", backgroundColor: "#6366f1", padding: "0px", margin: "8px", borderRadius: "12px", fontWeight: "700", textAlign: "center", width: "80px", height: "80px" } },
    { id: "3", type: "box", styles: { fontSize: "16px", color: "#ffffff", backgroundColor: "#6366f1", padding: "0px", margin: "8px", borderRadius: "12px", fontWeight: "700", textAlign: "center", width: "80px", height: "80px" } }
  ]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [containerClasses, setContainerClasses] = useState("flex flex-wrap content-start");

  const selectedElement = elements.find((el) => el.id === selectedId);

  // Load utility data
  useEffect(() => {
    const loadUtilityData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await import(`@/app/data/${utilityName}.json`);
        
        const utilityData: UtilityData = data.default || data;
        setUtilityData(utilityData);
        
        if (utilityData.diagrams && Object.keys(utilityData.diagrams).length > 0) {
          setActiveType(Object.keys(utilityData.diagrams)[0]);
          const firstDiagram = utilityData.diagrams[Object.keys(utilityData.diagrams)[0]];
          setContainerClasses(firstDiagram.classes);
        }
      } catch (err) {
        console.error('Error loading utility data:', err);
        setError(err instanceof Error ? err.message : "Failed to load utility data");
      } finally {
        setLoading(false);
      }
    };

    if (utilityName) {
      loadUtilityData();
    }
  }, [utilityName]);

  // Check if challenge is solved
  useEffect(() => {
    if (activeMode !== "challenge" || !utilityData?.challenge) return;
    const isCorrect = Object.keys(utilityData.challenge.solution).every(
      (key) => selectedValues[key] === utilityData.challenge!.solution[key]
    );
    setIsSolved(isCorrect);
  }, [selectedValues, activeMode, utilityData]);

  const handleChallengeChange = (property: string, value: string) => {
    setSelectedValues((prev) => ({ ...prev, [property]: value }));
  };

  const showSolution = () => {
    if (utilityData?.challenge) {
      setSelectedValues({ ...utilityData.challenge.solution });
    }
  };

  const updateElementStyle = (property: keyof ElementStyle, value: string) => {
    if (!selectedId) return;
    setElements((prev) =>
      prev.map((el) =>
        el.id === selectedId
          ? { ...el, styles: { ...el.styles, [property]: value } }
          : el
      )
    );
  };

  const addElement = () => {
    const newElement: Element = {
      id: Date.now().toString(),
      type: "box",
      styles: {
        fontSize: "16px",
        color: "#ffffff",
        backgroundColor: "#6366f1",
        padding: "0px",
        margin: "8px",
        borderRadius: "12px",
        fontWeight: "700",
        textAlign: "center",
        width: "80px",
        height: "80px"
      }
    };
    setElements([...elements, newElement]);
  };

  const deleteElement = () => {
    if (!selectedId) return;
    setElements(elements.filter((el) => el.id !== selectedId));
    setSelectedId(null);
  };

  const generateCode = () => {
    const boxesHTML = elements.map((_, i) => 
      `    <div class="w-20 h-20 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold m-2">${i + 1}</div>`
    ).join("\n");

    return `<div class="${containerClasses} border-2 border-gray-600 rounded-lg bg-gray-800/30 p-4 h-80">
${boxesHTML}
</div>`;
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generateCode());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const renderEditorProperty = (prop: EditorProperty) => {
    if (!selectedElement) return null;

    const value = selectedElement.styles[prop.name] || "";

    switch (prop.type) {
      case "color":
        return (
          <div key={prop.name}>
            <label className="block text-sm font-medium mb-2 text-gray-300">{prop.label}</label>
            <input
              type="color"
              value={value}
              onChange={(e) => updateElementStyle(prop.name as keyof ElementStyle, e.target.value)}
              className="w-full h-10 rounded cursor-pointer"
            />
          </div>
        );

      case "range":
        return (
          <div key={prop.name}>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              {prop.label}: {value}
            </label>
            <input
              type="range"
              min={prop.min || 0}
              max={prop.max || 100}
              value={parseInt(value) || 0}
              onChange={(e) => updateElementStyle(prop.name as keyof ElementStyle, `${e.target.value}${prop.unit || 'px'}`)}
              className="w-full accent-indigo-600"
            />
          </div>
        );

      case "text":
        return (
          <div key={prop.name}>
            <label className="block text-sm font-medium mb-2 text-gray-300">{prop.label}</label>
            <input
              type="text"
              value={value}
              onChange={(e) => updateElementStyle(prop.name as keyof ElementStyle, e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm font-mono text-white"
            />
          </div>
        );

      case "select":
        return (
          <div key={prop.name}>
            <label className="block text-sm font-medium mb-2 text-gray-300">{prop.label}</label>
            <select
              value={value}
              onChange={(e) => updateElementStyle(prop.name as keyof ElementStyle, e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white"
            >
              {prop.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        );

      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-400">Loading utility data...</div>
      </div>
    );
  }

  if (error || !utilityData) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="text-red-400 mb-4">Error: {error || "No data loaded"}</div>
          <div className="text-sm text-gray-500">
            <p>Make sure your JSON file exists at:</p>
            <code className="bg-gray-800 px-2 py-1 rounded">app/data/{utilityName}.json</code>
          </div>
        </div>
      </div>
    );
  }

  const userClasses = Object.values(selectedValues).filter(Boolean).join(" ");
  const solutionClasses = utilityData.challenge 
    ? Object.values(utilityData.challenge.solution).join(" ") 
    : "";

  return (
    <div className="space-y-6">
      {/* Mode Selector */}
      <div className="flex gap-3 p-1 bg-gray-900/50 rounded-xl border border-gray-700">
        <button
          onClick={() => setActiveMode("demo")}
          className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
            activeMode === "demo"
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
              : "text-gray-400 hover:text-white"
          }`}
        >
          📺 Demo
        </button>
        {utilityData.challenge && (
          <button
            onClick={() => setActiveMode("challenge")}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeMode === "challenge"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                : "text-gray-400 hover:text-white"
            }`}
          >
            🎯 Challenge
          </button>
        )}
        <button
          onClick={() => setActiveMode("editor")}
          className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
            activeMode === "editor"
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
              : "text-gray-400 hover:text-white"
          }`}
        >
          ✨ Visual Editor
        </button>
      </div>

      {/* DEMO MODE */}
      {activeMode === "demo" && (
        <div className="space-y-6">
          <div className="flex gap-3 flex-wrap">
            {Object.keys(utilityData.diagrams).map((type) => (
              <button
                key={type}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  activeType === type
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => setActiveType(type)}
              >
                {type.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
              </button>
            ))}
          </div>

          {activeType && utilityData.diagrams[activeType] && (
            <div className="border-2 border-gray-700 rounded-xl p-6 bg-gradient-to-br from-gray-900 to-gray-800">
              <p className="font-semibold text-white mb-4">{utilityData.diagrams[activeType].title}</p>
              <div className={`${utilityData.diagrams[activeType].classes} border-2 border-dashed border-gray-600 rounded-lg bg-gray-800/30 p-4 h-80`}>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="w-20 h-20 bg-indigo-500 flex items-center justify-center text-white font-bold rounded-lg m-2"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-400">{utilityData.diagrams[activeType].description}</p>
            </div>
          )}
        </div>
      )}

      {/* CHALLENGE MODE - Improved Layout */}
      {activeMode === "challenge" && utilityData.challenge && (
        <div className="space-y-6">
          {/* Header with Solved Badge */}
          <div className="bg-gray-900 border-2 border-indigo-500/50 rounded-xl p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{utilityData.challenge.title}</h3>
                <p className="text-gray-300 text-sm">{utilityData.challenge.description}</p>
              </div>
              {isSolved && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/50 animate-pulse">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-bold text-emerald-300">Solved!</span>
                </div>
              )}
            </div>
          </div>

          {/* Controls Section - Moved to Top */}
          <div className="border-2 border-gray-700 rounded-xl p-6 bg-gray-900/50">
            <h4 className="font-bold text-white mb-4">⚙️ Controls</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {utilityData.challenge.controls.map((control) => (
                <div key={control.property}>
                  <label className="block text-sm font-semibold mb-3 text-gray-300">
                    {control.title}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {control.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleChallengeChange(control.property, option.value)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedValues[control.property] === option.value
                            ? "bg-indigo-600 text-white shadow-lg scale-105"
                            : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={showSolution}
              className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 py-3 rounded-lg font-semibold transition-all shadow-lg"
            >
              💡 Show Solution
            </button>
          </div>

          {/* Layout Comparison - Below Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Target */}
            <div className="border-2 border-emerald-500/50 rounded-xl p-6 bg-gray-900 shadow-lg">
              <h4 className="font-bold text-emerald-400 mb-3 flex items-center gap-2 text-lg">
                <span>🎯</span> Target Layout
              </h4>
              <p className="text-sm text-gray-300 mb-4">{utilityData.challenge.targetDescription}</p>
              <div className={`${utilityData.challenge.baseContainer} ${solutionClasses}`}>
                {Array.from({ length: utilityData.challenge.numberOfBoxes }).map((_, i) => (
                  <div key={i} className={`${utilityData.challenge!.boxClasses} flex items-center justify-center text-white font-bold`}>
                    {utilityData.challenge!.boxContent ? utilityData.challenge!.boxContent[i] : i + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Your Output - With green border when solved */}
            <div className={`border-2 ${isSolved ? 'border-emerald-500 border-4' : 'border-purple-500/50'} rounded-xl p-6 bg-gray-900 shadow-lg transition-all duration-300`}>
              <h4 className="font-bold text-purple-400 mb-3 flex items-center gap-2 text-lg">
                <span>✨</span> Your Output
                {isSolved && <span className="text-emerald-400 text-sm ml-2">✓ Correct!</span>}
              </h4>
              <p className="text-sm text-gray-300 mb-4">
                {isSolved ? utilityData.challenge.successMessage : utilityData.challenge.hintMessage}
              </p>
              <div className={`${utilityData.challenge.baseContainer} ${userClasses}`}>
                {Array.from({ length: utilityData.challenge.numberOfBoxes }).map((_, i) => (
                  <div key={i} className={`${utilityData.challenge!.boxClasses} flex items-center justify-center text-white font-bold`}>
                    {utilityData.challenge!.boxContent ? utilityData.challenge!.boxContent[i] : i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VISUAL EDITOR MODE */}
      {activeMode === "editor" && (
        <div className="space-y-6">
          {/* Toolbar */}
          <div className="flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-700 rounded-xl">
            <button
              onClick={addElement}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium transition-all shadow-lg"
            >
              ➕ Add Box
            </button>
            {selectedId && (
              <button
                onClick={deleteElement}
                className="px-4 py-2 bg-red-600/80 hover:bg-red-600 rounded-lg text-sm font-medium transition-all"
              >
                🗑️ Delete
              </button>
            )}
            <div className="h-6 w-px bg-gray-700 mx-2"></div>
            <button
              onClick={copyCode}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                copiedCode
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300"
              }`}
            >
              {copiedCode ? "✓ Copied!" : "📋 Copy Code"}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Canvas */}
            <div className="lg:col-span-2 border-2 border-gray-700 rounded-xl p-6 bg-gradient-to-br from-gray-900 to-gray-800">
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 text-gray-300">Container Classes</label>
                <input
                  type="text"
                  value={containerClasses}
                  onChange={(e) => setContainerClasses(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm font-mono text-white"
                  placeholder="flex flex-wrap content-start"
                />
              </div>
              
              <div
                className={`${containerClasses} border-2 border-dashed border-gray-600 rounded-lg bg-gray-800/30 p-4 min-h-80`}
                onClick={() => setSelectedId(null)}
              >
                {elements.map((element, idx) => (
                  <div
                    key={element.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedId(element.id);
                    }}
                    style={{
                      width: element.styles.width,
                      height: element.styles.height,
                      backgroundColor: element.styles.backgroundColor,
                      color: element.styles.color,
                      margin: element.styles.margin,
                      borderRadius: element.styles.borderRadius,
                      fontSize: element.styles.fontSize,
                      fontWeight: element.styles.fontWeight,
                    }}
                    className={`flex items-center justify-center cursor-pointer transition-all ${
                      selectedId === element.id
                        ? "ring-4 ring-indigo-500 ring-opacity-50"
                        : "hover:ring-2 hover:ring-gray-500"
                    }`}
                  >
                    {idx + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Properties Panel */}
            <div className="border-2 border-gray-700 rounded-xl p-6 bg-gray-900/50 max-h-[600px] overflow-y-auto">
              <h4 className="font-bold text-white mb-4">🎨 Properties</h4>
              
              {selectedElement ? (
                <div className="space-y-4">
                  {utilityData.editorProperties?.map(prop => renderEditorProperty(prop))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">Click on a box to edit its properties</p>
              )}
            </div>
          </div>

          {/* Generated Code */}
          <div className="border-2 border-gray-700 rounded-xl p-6 bg-gray-900/50">
            <h4 className="font-bold text-white mb-3">📝 Generated Code</h4>
            <pre className="bg-gray-950 rounded-lg p-4 text-xs text-gray-300 font-mono overflow-x-auto">
              {generateCode()}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}