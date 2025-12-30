"use client";
import { useState } from "react";

/* ---------------- TYPES ---------------- */
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
  boxShadow?: string;
  border?: string;
};

type Element = {
  id: string;
  type: "heading" | "text" | "button" | "container" | "image" | "card";
  content: string;
  styles: ElementStyle;
};

/* ---------------- DEFAULT ELEMENTS ---------------- */
const DEFAULT_ELEMENTS: Element[] = [
  {
    id: "1",
    type: "heading",
    content: "Transform Your Vision Into Reality",
    styles: {
      fontSize: "56px",
      color: "#ffffff",
      backgroundColor: "transparent",
      padding: "20px",
      margin: "0px 0px 16px 0px",
      borderRadius: "0px",
      fontWeight: "800",
      textAlign: "center",
      width: "100%",
      height: "auto",
    },
  },
  {
    id: "2",
    type: "text",
    content: "Experience the power of visual design with our intuitive editor. Click any element to customize colors, sizes, spacing, and more.",
    styles: {
      fontSize: "20px",
      color: "#a1a1aa",
      backgroundColor: "transparent",
      padding: "0px 40px",
      margin: "0px 0px 40px 0px",
      borderRadius: "0px",
      fontWeight: "400",
      textAlign: "center",
      width: "100%",
      height: "auto",
    },
  },
  {
    id: "3",
    type: "button",
    content: "Get Started Free",
    styles: {
      fontSize: "18px",
      color: "#ffffff",
      backgroundColor: "#6366f1",
      padding: "16px 32px",
      margin: "0px auto 48px auto",
      borderRadius: "12px",
      fontWeight: "600",
      textAlign: "center",
      width: "auto",
      height: "auto",
      boxShadow: "0 10px 40px rgba(99, 102, 241, 0.4)",
    },
  },
  {
    id: "4",
    type: "card",
    content: "⚡ Lightning Fast Performance",
    styles: {
      fontSize: "18px",
      color: "#ffffff",
      backgroundColor: "#1f2937",
      padding: "24px",
      margin: "0px 8px 16px 8px",
      borderRadius: "16px",
      fontWeight: "600",
      textAlign: "center",
      width: "calc(33.333% - 16px)",
      height: "auto",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      border: "1px solid #374151",
    },
  },
  {
    id: "5",
    type: "card",
    content: "🎨 Beautiful Designs",
    styles: {
      fontSize: "18px",
      color: "#ffffff",
      backgroundColor: "#1f2937",
      padding: "24px",
      margin: "0px 8px 16px 8px",
      borderRadius: "16px",
      fontWeight: "600",
      textAlign: "center",
      width: "calc(33.333% - 16px)",
      height: "auto",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      border: "1px solid #374151",
    },
  },
  {
    id: "6",
    type: "card",
    content: "🚀 Easy to Use",
    styles: {
      fontSize: "18px",
      color: "#ffffff",
      backgroundColor: "#1f2937",
      padding: "24px",
      margin: "0px 8px 16px 8px",
      borderRadius: "16px",
      fontWeight: "600",
      textAlign: "center",
      width: "calc(33.333% - 16px)",
      height: "auto",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      border: "1px solid #374151",
    },
  },
  {
    id: "7",
    type: "container",
    content: "💬 \"This editor has completely transformed how we design our interfaces. The real-time editing is incredible!\" - Sarah Johnson, Designer",
    styles: {
      fontSize: "16px",
      color: "#d1d5db",
      backgroundColor: "#7c3aed",
      padding: "32px",
      margin: "32px 0px 0px 0px",
      borderRadius: "20px",
      fontWeight: "400",
      textAlign: "center",
      width: "100%",
      height: "auto",
      boxShadow: "0 20px 50px rgba(124, 58, 237, 0.3)",
      border: "1px solid #8b5cf6",
    },
  },
];

export default function VisualEditor() {
  const [elements, setElements] = useState(DEFAULT_ELEMENTS);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showCode, setShowCode] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const selectedElement = elements.find((el) => el.id === selectedId);

  /* ---------------- GENERATE CODE ---------------- */
  const generateCode = () => {
    const stylesToTailwind = (styles: ElementStyle) => {
      const classes: string[] = [];
      
      // Font size mapping
      const fontSizeMap: Record<string, string> = {
        '12px': 'text-xs', '14px': 'text-sm', '16px': 'text-base',
        '18px': 'text-lg', '20px': 'text-xl', '24px': 'text-2xl',
        '30px': 'text-3xl', '36px': 'text-4xl', '48px': 'text-5xl',
        '56px': 'text-6xl', '60px': 'text-6xl', '72px': 'text-7xl'
      };
      if (fontSizeMap[styles.fontSize]) {
        classes.push(fontSizeMap[styles.fontSize]);
      } else {
        classes.push(`text-[${styles.fontSize}]`);
      }
      
      // Font weight
      const weightMap: Record<string, string> = {
        '300': 'font-light', '400': 'font-normal', '500': 'font-medium',
        '600': 'font-semibold', '700': 'font-bold', '800': 'font-extrabold'
      };
      if (weightMap[styles.fontWeight]) {
        classes.push(weightMap[styles.fontWeight]);
      }
      
      // Text align
      if (styles.textAlign === 'center') classes.push('text-center');
      if (styles.textAlign === 'right') classes.push('text-right');
      if (styles.textAlign === 'left') classes.push('text-left');
      
      // Text color
      if (styles.color && styles.color !== 'transparent') {
        classes.push(`text-[${styles.color}]`);
      }
      
      // Background color
      if (styles.backgroundColor && styles.backgroundColor !== 'transparent') {
        classes.push(`bg-[${styles.backgroundColor}]`);
      }
      
      // Padding
      if (styles.padding && styles.padding !== '0px') {
        const paddingValues = styles.padding.split(' ');
        if (paddingValues.length === 1) {
          const val = paddingValues[0];
          if (val === '8px') classes.push('p-2');
          else if (val === '12px') classes.push('p-3');
          else if (val === '16px') classes.push('p-4');
          else if (val === '20px') classes.push('p-5');
          else if (val === '24px') classes.push('p-6');
          else if (val === '32px') classes.push('p-8');
          else classes.push(`p-[${val}]`);
        } else {
          classes.push(`p-[${styles.padding}]`);
        }
      }
      
      // Margin
      if (styles.margin && styles.margin !== '0px') {
        if (styles.margin.includes('auto')) {
          classes.push('mx-auto');
        } else {
          classes.push(`m-[${styles.margin}]`);
        }
      }
      
      // Border radius
      if (styles.borderRadius && styles.borderRadius !== '0px') {
        const radiusMap: Record<string, string> = {
          '4px': 'rounded', '6px': 'rounded-md', '8px': 'rounded-lg',
          '12px': 'rounded-xl', '16px': 'rounded-2xl', '20px': 'rounded-3xl'
        };
        if (radiusMap[styles.borderRadius]) {
          classes.push(radiusMap[styles.borderRadius]);
        } else {
          classes.push(`rounded-[${styles.borderRadius}]`);
        }
      }
      
      // Width
      if (styles.width && styles.width !== 'auto') {
        if (styles.width === '100%') classes.push('w-full');
        else classes.push(`w-[${styles.width}]`);
      }
      
      // Height
      if (styles.height && styles.height !== 'auto') {
        if (styles.height === '100%') classes.push('h-full');
        else classes.push(`h-[${styles.height}]`);
      }
      
      // Box shadow
      if (styles.boxShadow) {
        if (styles.boxShadow.includes('rgba(99, 102, 241')) {
          classes.push('shadow-lg shadow-indigo-500/40');
        } else if (styles.boxShadow.includes('rgba(124, 58, 237')) {
          classes.push('shadow-lg shadow-purple-500/30');
        } else {
          classes.push('shadow-lg');
        }
      }
      
      // Border
      if (styles.border) {
        if (styles.border.includes('#374151')) {
          classes.push('border border-gray-700');
        } else {
          classes.push('border');
        }
      }
      
      return classes.join(' ');
    };

    const html = elements.map((el) => {
      const tag = el.type === "heading" ? "h1" : 
                  el.type === "button" ? "button" :
                  el.type === "card" ? "div" :
                  el.type === "container" ? "div" : "p";
      
      const tailwindClasses = stylesToTailwind(el.styles);
      
      return `    <${tag} class="${tailwindClasses}">
      ${el.content}
    </${tag}>`;
    }).join("\n\n");

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated Page</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-slate-950 to-indigo-950">
  <div class="max-w-5xl mx-auto px-5 py-16">
${html}
  </div>
</body>
</html>`;
  };

  /* ---------------- COPY CODE ---------------- */
  const copyCode = () => {
    const code = generateCode();
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  /* ---------------- UPDATE STYLE ---------------- */
  const updateStyle = (property: keyof ElementStyle, value: string) => {
    if (!selectedId) return;
    setElements((prev) =>
      prev.map((el) =>
        el.id === selectedId
          ? { ...el, styles: { ...el.styles, [property]: value } }
          : el
      )
    );
  };

  /* ---------------- UPDATE CONTENT ---------------- */
  const updateContent = (value: string) => {
    if (!selectedId) return;
    setElements((prev) =>
      prev.map((el) => (el.id === selectedId ? { ...el, content: value } : el))
    );
  };

  /* ---------------- ADD NEW ELEMENT ---------------- */
  const addElement = (type: Element["type"]) => {
    const newElement: Element = {
      id: Date.now().toString(),
      type,
      content: `New ${type}`,
      styles: {
        fontSize: "16px",
        color: "#ffffff",
        backgroundColor:
          type === "button"
            ? "#6366f1"
            : type === "card"
            ? "#1f2937"
            : "transparent",
        padding: type === "card" ? "24px" : "12px",
        margin: "8px 0px",
        borderRadius:
          type === "button" ? "8px" : type === "card" ? "16px" : "0px",
        fontWeight: "400",
        textAlign: "left",
        width: "100%",
        height: "auto",
        boxShadow:
          type === "button" || type === "card"
            ? "0 4px 20px rgba(0, 0, 0, 0.3)"
            : undefined,
        border: type === "card" ? "1px solid #374151" : undefined,
      },
    };
    setElements([...elements, newElement]);
    setSelectedId(newElement.id);
  };

  /* ---------------- DELETE ELEMENT ---------------- */
  const deleteElement = () => {
    if (!selectedId) return;
    setElements(elements.filter((el) => el.id !== selectedId));
    setSelectedId(null);
  };

  /* ---------------- RENDER ELEMENT ---------------- */
  const renderElement = (element: Element) => {
    const isSelected = selectedId === element.id;
    const baseClasses = `cursor-pointer transition-all duration-200 ${
      isSelected
        ? "ring-4 ring-indigo-500 ring-opacity-50"
        : "hover:ring-2 hover:ring-gray-500"
    }`;

    const style = {
      fontSize: element.styles.fontSize,
      color: element.styles.color,
      backgroundColor: element.styles.backgroundColor,
      padding: element.styles.padding,
      margin: element.styles.margin,
      borderRadius: element.styles.borderRadius,
      fontWeight: element.styles.fontWeight,
      textAlign: element.styles.textAlign as any,
      width: element.styles.width,
      height: element.styles.height,
      display:
        element.type === "button"
          ? "inline-block"
          : element.type === "card"
          ? "inline-block"
          : "block",
      boxShadow: element.styles.boxShadow,
      border: element.styles.border,
    };

    const commonProps = {
      onClick: (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedId(element.id);
      },
      className: baseClasses,
      style,
      contentEditable: isSelected,
      suppressContentEditableWarning: true,
      onBlur: (e: any) => updateContent(e.target.textContent),
    };

    if (element.type === "heading") {
      return <h1 {...commonProps}>{element.content}</h1>;
    }
    if (element.type === "text") {
      return <p {...commonProps}>{element.content}</p>;
    }
    if (element.type === "button") {
      return <button {...commonProps}>{element.content}</button>;
    }
    if (element.type === "card") {
      return <div {...commonProps}>{element.content}</div>;
    }
    return <div {...commonProps}>{element.content}</div>;
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-950 to-indigo-950 text-white overflow-hidden">
      {/* LEFT SIDE - CANVAS */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Toolbar */}
        <div className="bg-gray-900/50 backdrop-blur-xl border-b border-gray-800/50 px-6 py-4 flex items-center gap-3 shadow-2xl">
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            ✨ Visual Editor
          </div>
          <div className="h-6 w-px bg-gray-700 mx-2"></div>
          <button
            onClick={() => addElement("heading")}
            className="px-4 py-2 bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/30 rounded-lg text-sm font-medium transition"
          >
            📝 Heading
          </button>
          <button
            onClick={() => addElement("text")}
            className="px-4 py-2 bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/30 rounded-lg text-sm font-medium transition"
          >
            📄 Text
          </button>
          <button
            onClick={() => addElement("button")}
            className="px-4 py-2 bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/30 rounded-lg text-sm font-medium transition"
          >
            🔘 Button
          </button>
          <button
            onClick={() => addElement("card")}
            className="px-4 py-2 bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/30 rounded-lg text-sm font-medium transition"
          >
            🎴 Card
          </button>
          <button
            onClick={() => addElement("container")}
            className="px-4 py-2 bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/30 rounded-lg text-sm font-medium transition"
          >
            📦 Container
          </button>
          {selectedId && (
            <button
              onClick={deleteElement}
              className="ml-auto px-4 py-2 bg-red-600/10 hover:bg-red-600/20 border border-red-500/30 rounded-lg text-sm font-medium transition text-red-400"
            >
              🗑️ Delete
            </button>
          )}
        </div>

        {/* Canvas */}
        <div
          className="flex-1 overflow-auto p-8"
          onClick={() => setSelectedId(null)}
        >
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700/50 p-12 relative overflow-hidden">
            {/* Decorative gradient orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

            {elements.length === 0 ? (
              <div className="text-center text-gray-500 py-20 relative z-10">
                Click the buttons above to add elements
              </div>
            ) : (
              <div className="relative z-10">
{elements.map((element) => (
  <div key={element.id}>{renderElement(element)}</div>
))}              </div>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - CONTROLS */}
      <div className="w-96 bg-gray-900/80 backdrop-blur-xl border-l border-gray-800/50 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Properties Panel
            </h2>
            <button
              onClick={() => setShowCode(!showCode)}
              className="px-3 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 rounded-lg text-sm font-medium transition text-green-400"
              title="View Code"
            >
              &lt;/&gt;
            </button>
          </div>
          
          <p className="text-sm text-gray-400 mb-6">
            {selectedElement
              ? `Editing: ${selectedElement.type.charAt(0).toUpperCase() + selectedElement.type.slice(1)}`
              : "Select an element to edit its properties"}
          </p>

          {showCode ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">Generated Code</h3>
                <button
                  onClick={copyCode}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    copySuccess
                      ? "bg-green-600 text-white"
                      : "bg-indigo-600 hover:bg-indigo-500 text-white"
                  }`}
                >
                  {copySuccess ? "✓ Copied!" : "📋 Copy Code"}
                </button>
              </div>
              <div className="bg-gray-950 rounded-lg p-4 border border-gray-800 max-h-[calc(100vh-200px)] overflow-auto">
                <pre className="text-xs text-gray-300 font-mono whitespace-pre-wrap">
                  {generateCode()}
                </pre>
              </div>
            </div>
          ) : selectedElement ? (
            <div className="space-y-6">
              {/* Font Size */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Font Size <span className="text-indigo-400">{selectedElement.styles.fontSize}</span>
                </label>
                <input
                  type="range"
                  min="8"
                  max="120"
                  value={parseInt(selectedElement.styles.fontSize)}
                  onChange={(e) => updateStyle("fontSize", `${e.target.value}px`)}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              {/* Text Color */}
              <div>
                <label className="block text-sm font-medium mb-2">Text Color</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={selectedElement.styles.color}
                    onChange={(e) => updateStyle("color", e.target.value)}
                    className="w-14 h-14 rounded-lg cursor-pointer bg-gray-800 border-2 border-gray-700"
                  />
                  <input
                    type="text"
                    value={selectedElement.styles.color}
                    onChange={(e) => updateStyle("color", e.target.value)}
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm font-mono"
                  />
                </div>
              </div>

              {/* Background Color */}
              <div>
                <label className="block text-sm font-medium mb-2">Background Color</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={selectedElement.styles.backgroundColor === "transparent" ? "#000000" : selectedElement.styles.backgroundColor}
                    onChange={(e) => updateStyle("backgroundColor", e.target.value)}
                    className="w-14 h-14 rounded-lg cursor-pointer bg-gray-800 border-2 border-gray-700"
                  />
                  <input
                    type="text"
                    value={selectedElement.styles.backgroundColor}
                    onChange={(e) => updateStyle("backgroundColor", e.target.value)}
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm font-mono"
                    placeholder="transparent"
                  />
                </div>
              </div>

              {/* Padding */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Padding <span className="text-indigo-400">{selectedElement.styles.padding}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={parseInt(selectedElement.styles.padding)}
                  onChange={(e) => updateStyle("padding", `${e.target.value}px`)}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              {/* Border Radius */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Border Radius <span className="text-indigo-400">{selectedElement.styles.borderRadius}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={parseInt(selectedElement.styles.borderRadius)}
                  onChange={(e) => updateStyle("borderRadius", `${e.target.value}px`)}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              {/* Font Weight */}
              <div>
                <label className="block text-sm font-medium mb-2">Font Weight</label>
                <select
                  value={selectedElement.styles.fontWeight}
                  onChange={(e) => updateStyle("fontWeight", e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm"
                >
                  <option value="300">Light (300)</option>
                  <option value="400">Normal (400)</option>
                  <option value="500">Medium (500)</option>
                  <option value="600">Semibold (600)</option>
                  <option value="700">Bold (700)</option>
                  <option value="800">Extra Bold (800)</option>
                </select>
              </div>

              {/* Text Align */}
              <div>
                <label className="block text-sm font-medium mb-2">Text Align</label>
                <div className="flex gap-2">
                  {["left", "center", "right"].map((align) => (
                    <button
                      key={align}
                      onClick={() => updateStyle("textAlign", align)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        selectedElement.styles.textAlign === align
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-800 hover:bg-gray-700"
                      }`}
                    >
                      {align === "left" ? "⬅️" : align === "center" ? "⬛" : "➡️"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Width */}
              <div>
                <label className="block text-sm font-medium mb-2">Width</label>
                <input
                  type="text"
                  value={selectedElement.styles.width}
                  onChange={(e) => updateStyle("width", e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm font-mono"
                  placeholder="100%, 200px, auto"
                />
              </div>

              {/* Margin */}
              <div>
                <label className="block text-sm font-medium mb-2">Margin</label>
                <input
                  type="text"
                  value={selectedElement.styles.margin}
                  onChange={(e) => updateStyle("margin", e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm font-mono"
                  placeholder="16px, 8px 16px, auto"
                />
              </div>

              {/* Quick Presets */}
              <div>
                <label className="block text-sm font-medium mb-3">✨ Quick Presets</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      updateStyle("backgroundColor", "#6366f1");
                      updateStyle("color", "#ffffff");
                      updateStyle("padding", "16px 32px");
                      updateStyle("borderRadius", "12px");
                      updateStyle("boxShadow", "0 10px 40px rgba(99, 102, 241, 0.4)");
                    }}
                    className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-xs font-medium shadow-lg shadow-indigo-500/30"
                  >
                    Primary Button
                  </button>
                  <button
                    onClick={() => {
                      updateStyle("backgroundColor", "transparent");
                      updateStyle("color", "#ffffff");
                      updateStyle("fontSize", "48px");
                      updateStyle("fontWeight", "800");
                    }}
                    className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-xs font-medium"
                  >
                    Hero Heading
                  </button>
                  <button
                    onClick={() => {
                      updateStyle("backgroundColor", "#1f2937");
                      updateStyle("padding", "24px");
                      updateStyle("borderRadius", "16px");
                      updateStyle("boxShadow", "0 4px 20px rgba(0, 0, 0, 0.3)");
                      updateStyle("border", "1px solid #374151");
                    }}
                    className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-xs font-medium"
                  >
                    Card Style
                  </button>
                  <button
                    onClick={() => {
                      updateStyle("backgroundColor", "transparent");
                      updateStyle("color", "#a1a1aa");
                      updateStyle("fontSize", "18px");
                      updateStyle("fontWeight", "400");
                    }}
                    className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-xs font-medium"
                  >
                    Body Text
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-20">
              Click on an element to customize
            </div>
          )}
        </div>
      </div>
    </div>
  );
}