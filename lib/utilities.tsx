interface UtilityData {
  title: string
  description: string
  classes: { class: string; description: string }[]
  example: string
  codeSnippet: string
}

// Break After Utilities
export const breakAfterUtilities: UtilityData = {
  title: "Break After",
  description: "Control how content breaks after an element in multi-column layouts.",
  classes: [
    { class: "break-after-auto", description: "Auto break behavior" },
    { class: "break-after-avoid", description: "Avoid breaking" },
    { class: "break-after-all", description: "Break after always" },
    { class: "break-after-avoid-page", description: "Avoid page break" },
    { class: "break-after-page", description: "Force page break" },
    { class: "break-after-left", description: "Break to left page" },
    { class: "break-after-right", description: "Break to right page" },
    { class: "break-after-column", description: "Break to next column" },
  ],
  example: "Content breaks naturally at optimal points",
  codeSnippet: `<div class="columns-3">
  <p class="break-after-column">
    Column breaks here
  </p>
</div>`,
}

// Break Before Utilities
export const breakBeforeUtilities: UtilityData = {
  title: "Break Before",
  description: "Control how content breaks before an element in multi-column layouts.",
  classes: [
    { class: "break-before-auto", description: "Auto break behavior" },
    { class: "break-before-avoid", description: "Avoid breaking" },
    { class: "break-before-all", description: "Always break before" },
    { class: "break-before-avoid-page", description: "Avoid page break" },
    { class: "break-before-page", description: "Force page break" },
    { class: "break-before-left", description: "Break to left page" },
    { class: "break-before-right", description: "Break to right page" },
    { class: "break-before-column", description: "Break to next column" },
  ],
  example: "Force breaks before specific elements",
  codeSnippet: `<h2 class="break-before-page">
  New Page Title
</h2>`,
}

// Break Inside Utilities
export const breakInsideUtilities: UtilityData = {
  title: "Break Inside",
  description: "Control how content breaks inside an element.",
  classes: [
    { class: "break-inside-auto", description: "Auto break behavior" },
    { class: "break-inside-avoid", description: "Avoid breaking inside" },
    { class: "break-inside-avoid-page", description: "Avoid page break" },
    { class: "break-inside-avoid-column", description: "Avoid column break" },
  ],
  example: "Keep elements intact without breaking",
  codeSnippet: `<div class="break-inside-avoid border border-border p-4">
  This card won't break across columns
</div>`,
}

// Box Utilities
export const boxUtilities: UtilityData = {
  title: "Box Sizing & Decoration",
  description: "Control box sizing model and decoration breaking.",
  classes: [
    { class: "box-border", description: "Include padding/border in width" },
    { class: "box-content", description: "Exclude padding/border from width" },
    { class: "box-decoration-slice", description: "Slice background/border" },
    { class: "box-decoration-clone", description: "Clone background/border" },
  ],
  example: "Control how element dimensions are calculated",
  codeSnippet: `<div class="box-border w-32 p-4 border border-border">
  Width includes padding and border
</div>`,
}

// Flows (Float, Clear, Isolation)
export const flowsUtilities: UtilityData = {
  title: "Floats, Clear & Isolation",
  description: "Control float, clear, and isolation properties.",
  classes: [
    { class: "float-left", description: "Float left" },
    { class: "float-right", description: "Float right" },
    { class: "float-none", description: "No float" },
    { class: "clear-left", description: "Clear left floats" },
    { class: "clear-right", description: "Clear right floats" },
    { class: "clear-both", description: "Clear all floats" },
    { class: "clear-none", description: "Don't clear" },
    { class: "isolate", description: "Create stacking context" },
    { class: "isolation-auto", description: "Auto stacking context" },
  ],
  example: "Control element floating and stacking",
  codeSnippet: `<img class="float-left mr-4" src="..." />
<p>Text wraps around floating image</p>`,
}

// Object Fit
export const objectFitUtilities: UtilityData = {
  title: "Object Fit",
  description: "Control how replaced content (images/video) fills its container.",
  classes: [
    { class: "object-contain", description: "Fit entire object, ratio preserved" },
    { class: "object-cover", description: "Cover container, ratio preserved" },
    { class: "object-fill", description: "Fill container, may distort" },
    { class: "object-none", description: "Don't resize object" },
    { class: "object-scale-down", description: "Scale down if larger" },
  ],
  example: "Images fit containers responsively",
  codeSnippet: `<img class="w-full h-48 object-cover rounded-lg" src="..." />`,
}

// Object Position
export const objectPositionUtilities: UtilityData = {
  title: "Object Position",
  description: "Control positioning of replaced content within its container.",
  classes: [
    { class: "object-bottom", description: "Position at bottom" },
    { class: "object-center", description: "Position at center" },
    { class: "object-left", description: "Position at left" },
    { class: "object-left-bottom", description: "Position at left-bottom" },
    { class: "object-left-top", description: "Position at left-top" },
    { class: "object-right", description: "Position at right" },
    { class: "object-right-bottom", description: "Position at right-bottom" },
    { class: "object-right-top", description: "Position at right-top" },
    { class: "object-top", description: "Position at top" },
  ],
  example: "Images position within containers",
  codeSnippet: `<img class="object-cover object-center w-full h-64" src="..." />`,
}

// Grid Auto Flow
export const gridAutoFlowUtilities: UtilityData = {
  title: "Grid Auto Flow",
  description: "Control how auto-placed grid items flow into the grid.",
  classes: [
    { class: "grid-flow-row", description: "Fill row by row" },
    { class: "grid-flow-col", description: "Fill column by column" },
    { class: "grid-flow-dense", description: "Fill gaps intelligently" },
    { class: "grid-flow-row-dense", description: "Row-wise dense packing" },
    { class: "grid-flow-col-dense", description: "Column-wise dense packing" },
  ],
  example: "Grid items flow into available space",
  codeSnippet: `<div class="grid grid-flow-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`,
}

// Grid Auto Columns
export const gridAutoColumnsUtilities: UtilityData = {
  title: "Grid Auto Columns",
  description: "Control the size of implicitly-created grid columns.",
  classes: [
    { class: "auto-cols-min", description: "Size to min-content" },
    { class: "auto-cols-max", description: "Size to max-content" },
    { class: "auto-cols-fr", description: "Size with fr unit" },
    { class: "auto-cols-auto", description: "Size to auto" },
  ],
  example: "Auto-created columns size intelligently",
  codeSnippet: `<div class="grid grid-flow-col auto-cols-fr gap-4">
  <div>Auto-sized column</div>
</div>`,
}

// Grid Auto Rows
export const gridAutoRowsUtilities: UtilityData = {
  title: "Grid Auto Rows",
  description: "Control the size of implicitly-created grid rows.",
  classes: [
    { class: "auto-rows-min", description: "Size to min-content" },
    { class: "auto-rows-max", description: "Size to max-content" },
    { class: "auto-rows-fr", description: "Size with fr unit" },
    { class: "auto-rows-auto", description: "Size to auto" },
  ],
  example: "Auto-created rows size to content",
  codeSnippet: `<div class="grid auto-rows-min gap-4">
  <div>Auto-sized row</div>
</div>`,
}

// Gap
export const gapUtilities: UtilityData = {
  title: "Gap",
  description: "Control the gap between grid and flex items.",
  classes: [
    { class: "gap-0", description: "No gap" },
    { class: "gap-1", description: "0.25rem gap" },
    { class: "gap-2", description: "0.5rem gap" },
    { class: "gap-4", description: "1rem gap" },
    { class: "gap-6", description: "1.5rem gap" },
    { class: "gap-8", description: "2rem gap" },
    { class: "gap-x-4", description: "Horizontal gap only" },
    { class: "gap-y-8", description: "Vertical gap only" },
  ],
  example: "Consistent spacing between items",
  codeSnippet: `<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`,
}

// Font Utilities
export const fontFamilyUtilities: UtilityData = {
  title: "Font Family",
  description: "Control the font family of text.",
  classes: [
    { class: "font-sans", description: "Sans-serif font" },
    { class: "font-serif", description: "Serif font" },
    { class: "font-mono", description: "Monospace font" },
  ],
  example: "Apply different font families",
  codeSnippet: `<p class="font-sans">Sans-serif text</p>
<p class="font-mono">Monospace code</p>`,
}

export const fontSizeUtilities: UtilityData = {
  title: "Font Size",
  description: "Control the font size of text.",
  classes: [
    { class: "text-xs", description: "0.75rem" },
    { class: "text-sm", description: "0.875rem" },
    { class: "text-base", description: "1rem" },
    { class: "text-lg", description: "1.125rem" },
    { class: "text-xl", description: "1.25rem" },
    { class: "text-2xl", description: "1.5rem" },
    { class: "text-3xl", description: "1.875rem" },
    { class: "text-4xl", description: "2.25rem" },
    { class: "text-5xl", description: "3rem" },
    { class: "text-6xl", description: "3.75rem" },
  ],
  example: "Text scales from small to large",
  codeSnippet: `<h1 class="text-5xl font-bold">Heading</h1>
<p class="text-sm text-muted-foreground">Caption</p>`,
}

export const fontWeightUtilities: UtilityData = {
  title: "Font Weight",
  description: "Control the font weight of text.",
  classes: [
    { class: "font-thin", description: "100 weight" },
    { class: "font-light", description: "300 weight" },
    { class: "font-normal", description: "400 weight" },
    { class: "font-medium", description: "500 weight" },
    { class: "font-semibold", description: "600 weight" },
    { class: "font-bold", description: "700 weight" },
    { class: "font-extrabold", description: "800 weight" },
    { class: "font-black", description: "900 weight" },
  ],
  example: "Text weight varies for emphasis",
  codeSnippet: `<p class="font-light">Light text</p>
<p class="font-bold">Bold text</p>
<p class="font-black">Extra bold text</p>`,
}

// Text Color
export const textColorUtilities: UtilityData = {
  title: "Text Color",
  description: "Control the text color of elements.",
  classes: [
    { class: "text-red-500", description: "Red color" },
    { class: "text-blue-600", description: "Blue color" },
    { class: "text-green-700", description: "Green color" },
    { class: "text-gray-400", description: "Gray color" },
    { class: "text-foreground", description: "Default foreground" },
    { class: "text-muted-foreground", description: "Muted foreground" },
  ],
  example: "Text colors apply to any element",
  codeSnippet: `<p class="text-red-500">Error message</p>
<p class="text-green-600">Success message</p>
<p class="text-blue-500">Info message</p>`,
}

// Background Color
export const backgroundColorUtilities: UtilityData = {
  title: "Background Color",
  description: "Control the background color of elements.",
  classes: [
    { class: "bg-white", description: "White background" },
    { class: "bg-black", description: "Black background" },
    { class: "bg-red-500", description: "Red background" },
    { class: "bg-blue-600", description: "Blue background" },
    { class: "bg-card", description: "Card background token" },
    { class: "bg-background", description: "Page background token" },
  ],
  example: "Background colors fill entire element",
  codeSnippet: `<div class="bg-blue-500 text-white p-4 rounded-lg">
  Colored background
</div>`,
}

// Background Position
export const backgroundPositionUtilities: UtilityData = {
  title: "Background Position",
  description: "Control the position of background images.",
  classes: [
    { class: "bg-center", description: "Center position" },
    { class: "bg-top", description: "Top position" },
    { class: "bg-bottom", description: "Bottom position" },
    { class: "bg-left", description: "Left position" },
    { class: "bg-right", description: "Right position" },
    { class: "bg-left-top", description: "Left-top position" },
    { class: "bg-right-bottom", description: "Right-bottom position" },
  ],
  example: "Background images position within containers",
  codeSnippet: `<div class="bg-cover bg-center" 
     style="background-image: url(...)">
</div>`,
}

// Background Repeat
export const backgroundRepeatUtilities: UtilityData = {
  title: "Background Repeat",
  description: "Control how background images repeat.",
  classes: [
    { class: "bg-repeat", description: "Repeat in all directions" },
    { class: "bg-no-repeat", description: "Don't repeat" },
    { class: "bg-repeat-x", description: "Repeat horizontally" },
    { class: "bg-repeat-y", description: "Repeat vertically" },
    { class: "bg-repeat-round", description: "Repeat with rounding" },
    { class: "bg-repeat-space", description: "Repeat with spacing" },
  ],
  example: "Control background image tiling",
  codeSnippet: `<div class="bg-repeat-x" 
     style="background-image: url(pattern.svg)">
</div>`,
}

// Background Size
export const backgroundSizeUtilities: UtilityData = {
  title: "Background Size",
  description: "Control the size of background images.",
  classes: [
    { class: "bg-auto", description: "Use image's natural size" },
    { class: "bg-cover", description: "Cover entire element" },
    { class: "bg-contain", description: "Fit entire image" },
  ],
  example: "Background images scale responsively",
  codeSnippet: `<div class="bg-cover w-full h-64"
     style="background-image: url(...)">
</div>`,
}

// Background Image & Gradients
export const backgroundImageUtilities: UtilityData = {
  title: "Background Image & Gradients",
  description: "Control background images and gradient directions.",
  classes: [
    { class: "bg-none", description: "No background image" },
    { class: "bg-gradient-to-r", description: "Gradient to right" },
    { class: "bg-gradient-to-l", description: "Gradient to left" },
    { class: "bg-gradient-to-t", description: "Gradient to top" },
    { class: "bg-gradient-to-b", description: "Gradient to bottom" },
    { class: "bg-gradient-to-tr", description: "Gradient to top-right" },
    { class: "bg-gradient-to-bl", description: "Gradient to bottom-left" },
  ],
  example: "Smooth color gradients fill elements",
  codeSnippet: `<div class="bg-gradient-to-r from-blue-500 to-purple-600">
  Gradient background
</div>`,
}

// Border Width
export const borderWidthUtilities: UtilityData = {
  title: "Border Width",
  description: "Control the width of borders.",
  classes: [
    { class: "border", description: "1px border" },
    { class: "border-0", description: "No border" },
    { class: "border-2", description: "2px border" },
    { class: "border-4", description: "4px border" },
    { class: "border-8", description: "8px border" },
    { class: "border-x-2", description: "2px horizontal borders" },
    { class: "border-y-4", description: "4px vertical borders" },
    { class: "border-t-2", description: "2px top border" },
    { class: "border-r-4", description: "4px right border" },
  ],
  example: "Borders frame elements",
  codeSnippet: `<div class="border-2 border-blue-500 p-4">
  Bordered element
</div>`,
}

// Border Color
export const borderColorUtilities: UtilityData = {
  title: "Border Color",
  description: "Control the color of borders.",
  classes: [
    { class: "border-red-500", description: "Red border" },
    { class: "border-blue-600", description: "Blue border" },
    { class: "border-green-700", description: "Green border" },
    { class: "border-gray-300", description: "Gray border" },
    { class: "border-border", description: "Default border color" },
  ],
  example: "Borders take on custom colors",
  codeSnippet: `<div class="border-2 border-red-500">
  Red border
</div>`,
}

// Border Style
export const borderStyleUtilities: UtilityData = {
  title: "Border Style",
  description: "Control the style of borders.",
  classes: [
    { class: "border-solid", description: "Solid border" },
    { class: "border-dashed", description: "Dashed border" },
    { class: "border-dotted", description: "Dotted border" },
    { class: "border-double", description: "Double border" },
    { class: "border-none", description: "No border" },
  ],
  example: "Borders vary in style and appearance",
  codeSnippet: `<div class="border-2 border-dashed border-blue-500">
  Dashed border
</div>`,
}

// Divide Width
export const divideWidthUtilities: UtilityData = {
  title: "Divide Width",
  description: "Control borders between child elements.",
  classes: [
    { class: "divide-x", description: "Vertical dividers" },
    { class: "divide-y", description: "Horizontal dividers" },
    { class: "divide-x-0", description: "No vertical dividers" },
    { class: "divide-y-2", description: "2px horizontal dividers" },
    { class: "divide-y-4", description: "4px horizontal dividers" },
    { class: "divide-x-reverse", description: "Reverse vertical dividers" },
    { class: "divide-y-reverse", description: "Reverse horizontal dividers" },
  ],
  example: "Dividers separate child elements visually",
  codeSnippet: `<div class="divide-y divide-gray-300">
  <div class="p-4">Item 1</div>
  <div class="p-4">Item 2</div>
  <div class="p-4">Item 3</div>
</div>`,
}

// Divide Color
export const divideColorUtilities: UtilityData = {
  title: "Divide Color",
  description: "Control the color of dividers between elements.",
  classes: [
    { class: "divide-red-500", description: "Red dividers" },
    { class: "divide-blue-400", description: "Blue dividers" },
    { class: "divide-green-600", description: "Green dividers" },
    { class: "divide-border", description: "Default divider color" },
  ],
  example: "Dividers take on custom colors",
  codeSnippet: `<div class="divide-y-2 divide-blue-500">
  <div>Section 1</div>
  <div>Section 2</div>
</div>`,
}

// Divide Style
export const divideStyleUtilities: UtilityData = {
  title: "Divide Style",
  description: "Control the style of dividers between elements.",
  classes: [
    { class: "divide-solid", description: "Solid dividers" },
    { class: "divide-dashed", description: "Dashed dividers" },
    { class: "divide-dotted", description: "Dotted dividers" },
    { class: "divide-double", description: "Double dividers" },
  ],
  example: "Dividers vary in appearance",
  codeSnippet: `<div class="divide-y divide-dashed">
  <div>Section 1</div>
  <div>Section 2</div>
</div>`,
}

// Outline Width
export const outlineWidthUtilities: UtilityData = {
  title: "Outline Width",
  description: "Control the width of outlines.",
  classes: [
    { class: "outline-0", description: "No outline" },
    { class: "outline-1", description: "1px outline" },
    { class: "outline-2", description: "2px outline" },
    { class: "outline-4", description: "4px outline" },
    { class: "outline-8", description: "8px outline" },
  ],
  example: "Outlines highlight element focus states",
  codeSnippet: `<button class="outline-2 outline-blue-500 focus:outline-4">
  Focus button
</button>`,
}

// Outline Color
export const outlineColorUtilities: UtilityData = {
  title: "Outline Color",
  description: "Control the color of outlines.",
  classes: [
    { class: "outline-red-500", description: "Red outline" },
    { class: "outline-blue-400", description: "Blue outline" },
    { class: "outline-ring", description: "Ring color outline" },
  ],
  example: "Outlines take on custom colors",
  codeSnippet: `<input class="outline-2 outline-blue-500" />`,
}

// Outline Style
export const outlineStyleUtilities: UtilityData = {
  title: "Outline Style",
  description: "Control the style of outlines.",
  classes: [
    { class: "outline", description: "Solid outline" },
    { class: "outline-dashed", description: "Dashed outline" },
    { class: "outline-dotted", description: "Dotted outline" },
    { class: "outline-double", description: "Double outline" },
    { class: "outline-none", description: "No outline" },
  ],
  example: "Outlines vary in style",
  codeSnippet: `<input class="outline-dashed outline-2" />`,
}

// Outline Offset
export const outlineOffsetUtilities: UtilityData = {
  title: "Outline Offset",
  description: "Control the offset of outlines from elements.",
  classes: [
    { class: "outline-offset-0", description: "No offset" },
    { class: "outline-offset-1", description: "1px offset" },
    { class: "outline-offset-2", description: "2px offset" },
    { class: "outline-offset-4", description: "4px offset" },
    { class: "outline-offset-8", description: "8px offset" },
  ],
  example: "Outlines space away from elements",
  codeSnippet: `<button class="outline-2 outline-offset-2">
  Spaced outline
</button>`,
}

// Ring Width
export const ringWidthUtilities: UtilityData = {
  title: "Ring Width",
  description: "Add glowing rings around elements.",
  classes: [
    { class: "ring", description: "Default ring (3px)" },
    { class: "ring-0", description: "No ring" },
    { class: "ring-1", description: "1px ring" },
    { class: "ring-2", description: "2px ring" },
    { class: "ring-4", description: "4px ring" },
    { class: "ring-8", description: "8px ring" },
    { class: "ring-inset", description: "Ring inset" },
  ],
  example: "Focus rings highlight interactive elements",
  codeSnippet: `<button class="ring-2 ring-blue-500 focus:ring-4">
  Ring button
</button>`,
}

// Ring Color
export const ringColorUtilities: UtilityData = {
  title: "Ring Color",
  description: "Control the color of rings.",
  classes: [
    { class: "ring-red-500", description: "Red ring" },
    { class: "ring-blue-400", description: "Blue ring" },
    { class: "ring-green-600", description: "Green ring" },
    { class: "ring-ring", description: "Default ring color" },
  ],
  example: "Rings take on custom colors",
  codeSnippet: `<input class="ring-2 ring-blue-500" />`,
}

// Ring Offset
export const ringOffsetUtilities: UtilityData = {
  title: "Ring Offset",
  description: "Add space between ring and element.",
  classes: [
    { class: "ring-offset-0", description: "No offset" },
    { class: "ring-offset-1", description: "1px offset" },
    { class: "ring-offset-2", description: "2px offset" },
    { class: "ring-offset-4", description: "4px offset" },
    { class: "ring-offset-8", description: "8px offset" },
  ],
  example: "Rings space away from elements",
  codeSnippet: `<button class="ring-2 ring-offset-2">
  Spaced ring
</button>`,
}

// Rotate
export const rotateUtilities: UtilityData = {
  title: "Rotate",
  description: "Rotate elements using transforms.",
  classes: [
    { class: "rotate-0", description: "No rotation" },
    { class: "rotate-1", description: "1 degree" },
    { class: "rotate-6", description: "6 degrees" },
    { class: "rotate-45", description: "45 degrees" },
    { class: "rotate-90", description: "90 degrees" },
    { class: "rotate-180", description: "180 degrees" },
    { class: "-rotate-45", description: "-45 degrees" },
  ],
  example: "Elements rotate around their origin",
  codeSnippet: `<div class="rotate-45 hover:rotate-90 transition">
  Rotating element
</div>`,
}

// Translate
export const translateUtilities: UtilityData = {
  title: "Translate",
  description: "Move elements using transforms.",
  classes: [
    { class: "translate-x-0", description: "No horizontal translation" },
    { class: "translate-x-4", description: "Move right 1rem" },
    { class: "translate-y-0", description: "No vertical translation" },
    { class: "translate-y-6", description: "Move down 1.5rem" },
    { class: "-translate-x-4", description: "Move left 1rem" },
    { class: "-translate-y-8", description: "Move up 2rem" },
  ],
  example: "Elements move smoothly with transforms",
  codeSnippet: `<div class="translate-x-2 hover:translate-x-4 transition">
  Sliding element
</div>`,
}

// Skew
export const skewUtilities: UtilityData = {
  title: "Skew",
  description: "Skew elements using transforms.",
  classes: [
    { class: "skew-x-0", description: "No horizontal skew" },
    { class: "skew-x-3", description: "3 degree horizontal skew" },
    { class: "skew-x-12", description: "12 degree horizontal skew" },
    { class: "skew-y-0", description: "No vertical skew" },
    { class: "skew-y-6", description: "6 degree vertical skew" },
  ],
  example: "Elements skew for visual effects",
  codeSnippet: `<div class="skew-x-12">
  Skewed element
</div>`,
}

// Transform Origin
export const originUtilities: UtilityData = {
  title: "Transform Origin",
  description: "Control the point around which elements transform.",
  classes: [
    { class: "origin-center", description: "Transform from center" },
    { class: "origin-top", description: "Transform from top" },
    { class: "origin-bottom", description: "Transform from bottom" },
    { class: "origin-left", description: "Transform from left" },
    { class: "origin-right", description: "Transform from right" },
    { class: "origin-top-left", description: "Transform from top-left" },
    { class: "origin-bottom-right", description: "Transform from bottom-right" },
  ],
  example: "Transforms occur around chosen points",
  codeSnippet: `<div class="origin-top-right rotate-45">
  Transforms from top-right
</div>`,
}

// Accessibility
export const srOnlyUtilities: UtilityData = {
  title: "Screen Readers",
  description: "Control visibility for accessibility.",
  classes: [
    { class: "sr-only", description: "Hidden visually, visible to screen readers" },
    { class: "not-sr-only", description: "Visible to all users" },
  ],
  example: "Add accessible labels and descriptions",
  codeSnippet: `<button>
  Delete
  <span class="sr-only">item</span>
</button>`,
}

// Columns Utilities
export const columnsUtilities: UtilityData = {
  title: "Columns",
  description: "Control the number of columns in a multi-column layout.",
  classes: [
    { class: "columns-1", description: "1 column" },
    { class: "columns-2", description: "2 columns" },
    { class: "columns-3", description: "3 columns" },
    { class: "columns-4", description: "4 columns" },
    { class: "columns-auto", description: "Auto columns" },
  ],
  example: "Text flows across multiple columns",
  codeSnippet: `<div class="columns-3 gap-4">
  <p>Lorem ipsum dolor sit amet...</p>
</div>`,
}

// Display Utilities
export const displayUtilities: UtilityData = {
  title: "Display",
  description: "Control the display type of elements.",
  classes: [
    { class: "block", description: "Block display" },
    { class: "inline-block", description: "Inline-block display" },
    { class: "inline", description: "Inline display" },
    { class: "flex", description: "Flex display" },
    { class: "grid", description: "Grid display" },
    { class: "hidden", description: "Hidden display" },
    { class: "contents", description: "Contents display" },
    { class: "table", description: "Table display" },
  ],
  example: "Elements display as block, inline, flex, or grid",
  codeSnippet: `<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`,
}

// Overflow Utilities
export const overflowUtilities: UtilityData = {
  title: "Overflow",
  description: "Control how content overflows container boundaries.",
  classes: [
    { class: "overflow-auto", description: "Auto scroll if needed" },
    { class: "overflow-hidden", description: "Hide overflow" },
    { class: "overflow-visible", description: "Show overflow" },
    { class: "overflow-scroll", description: "Always scrollable" },
    { class: "overflow-x-auto", description: "Horizontal scroll" },
    { class: "overflow-y-auto", description: "Vertical scroll" },
  ],
  example: "Content scrolls when it exceeds container",
  codeSnippet: `<div class="w-full h-48 overflow-auto border">
  <p>Scrollable content</p>
</div>`,
}

// Flex Utilities
export const flexUtilities: UtilityData = {
  title: "Flex",
  description: "Control flex container properties.",
  classes: [
    { class: "flex-row", description: "Flex row direction" },
    { class: "flex-col", description: "Flex column direction" },
    { class: "flex-wrap", description: "Allow wrapping" },
    { class: "flex-nowrap", description: "Prevent wrapping" },
  ],
  example: "Flexible layouts adapt to content",
  codeSnippet: `<div class="flex flex-wrap gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`,
}

// Flex Grow Utilities
export const flexGrowUtilities: UtilityData = {
  title: "Flex Grow",
  description: "Control how flex items grow to fill available space.",
  classes: [
    { class: "flex-grow-0", description: "flex-grow: 0 (no growth)" },
    { class: "flex-grow", description: "flex-grow: 1 (grow proportionally)" },
  ],
  example: "Control flex item growth behavior",
  codeSnippet: `<div class="flex gap-4">
  <div class="flex-grow bg-blue-500 p-4">Grows</div>
  <div class="flex-grow-0 w-24 bg-blue-400 p-4">Fixed</div>
</div>`,
}

// Flex Shrink Utilities
export const flexShrinkUtilities: UtilityData = {
  title: "Flex Shrink",
  description: "Control how flex items shrink when space is constrained.",
  classes: [
    { class: "flex-shrink-0", description: "flex-shrink: 0 (no shrinking)" },
    { class: "flex-shrink", description: "flex-shrink: 1 (shrink proportionally)" },
  ],
  example: "Control flex item shrink behavior",
  codeSnippet: `<div class="flex gap-4 w-96">
  <div class="flex-shrink bg-green-500 p-4 whitespace-nowrap">No Shrink</div>
  <div class="flex-shrink w-full bg-green-400 p-4">Shrinks</div>
</div>`,
}

// Flex Basis Utilities
export const flexBasisUtilities: UtilityData = {
  title: "Flex Basis",
  description: "Set the default size of a flex item before remaining space is distributed.",
  classes: [
    { class: "basis-0", description: "flex-basis: 0" },
    { class: "basis-auto", description: "flex-basis: auto" },
    { class: "basis-1/2", description: "flex-basis: 50%" },
    { class: "basis-1/3", description: "flex-basis: 33.333%" },
    { class: "basis-1/4", description: "flex-basis: 25%" },
  ],
  example: "Define the base size before flex growth/shrink",
  codeSnippet: `<div class="flex gap-4">
  <div class="basis-1/4 bg-purple-500 p-4">25%</div>
  <div class="basis-1/2 bg-purple-400 p-4">50%</div>
  <div class="basis-1/4 bg-purple-300 p-4">25%</div>
</div>`,
}

// Padding Utilities
export const paddingUtilities: UtilityData = {
  title: "Padding",
  description: "Control inner spacing within elements.",
  classes: [
    { class: "p-0", description: "No padding" },
    { class: "p-1", description: "0.25rem padding" },
    { class: "p-2", description: "0.5rem padding" },
    { class: "p-4", description: "1rem padding" },
    { class: "p-6", description: "1.5rem padding" },
    { class: "p-8", description: "2rem padding" },
    { class: "px-4", description: "Horizontal padding only" },
    { class: "py-2", description: "Vertical padding only" },
    { class: "pt-4", description: "Top padding only" },
    { class: "pr-4", description: "Right padding only" },
    { class: "pb-4", description: "Bottom padding only" },
    { class: "pl-4", description: "Left padding only" },
  ],
  example: "Internal spacing around content",
  codeSnippet: `<div class="p-6 border rounded-lg">
  Padded content
</div>`,
}

// Width Utilities
export const widthUtilities: UtilityData = {
  title: "Width",
  description: "Control the width of elements.",
  classes: [
    { class: "w-0", description: "Width 0" },
    { class: "w-full", description: "Width 100%" },
    { class: "w-1/2", description: "Width 50%" },
    { class: "w-1/3", description: "Width 33.333%" },
    { class: "w-auto", description: "Width auto" },
    { class: "w-screen", description: "Width 100vw" },
  ],
  example: "Elements size responsively",
  codeSnippet: `<div class="w-full">Full width</div>
<div class="w-1/2">Half width</div>`,
}

// Border Radius Utilities
export const borderRadiusUtilities: UtilityData = {
  title: "Border Radius",
  description: "Control rounded corners on elements.",
  classes: [
    { class: "rounded-none", description: "No rounding" },
    { class: "rounded-sm", description: "Small radius" },
    { class: "rounded", description: "Default radius" },
    { class: "rounded-md", description: "Medium radius" },
    { class: "rounded-lg", description: "Large radius" },
    { class: "rounded-xl", description: "Extra large radius" },
    { class: "rounded-full", description: "Fully rounded" },
  ],
  example: "Corners round smoothly for modern look",
  codeSnippet: `<div class="rounded-lg border p-4">
  Rounded card
</div>`,
}

// Align Items Utilities
export const alignItemsUtilities: UtilityData = {
  title: "Align Items",
  description: "Control alignment of flex/grid items along cross axis.",
  classes: [
    { class: "items-start", description: "Align to start" },
    { class: "items-end", description: "Align to end" },
    { class: "items-center", description: "Center align" },
    { class: "items-baseline", description: "Baseline align" },
    { class: "items-stretch", description: "Stretch to fill" },
  ],
  example: "Items align consistently across axis",
  codeSnippet: `<div class="flex items-center h-32 gap-4">
  <div>Content</div>
</div>`,
}

// Justify Content Utilities
export const justifyContentUtilities: UtilityData = {
  title: "Justify Content",
  description: "Control alignment of flex/grid items along main axis.",
  classes: [
    { class: "justify-start", description: "Justify to start" },
    { class: "justify-end", description: "Justify to end" },
    { class: "justify-center", description: "Center justify" },
    { class: "justify-between", description: "Justify space-between" },
    { class: "justify-around", description: "Justify space-around" },
    { class: "justify-evenly", description: "Justify space-evenly" },
  ],
  example: "Items distribute across main axis",
  codeSnippet: `<div class="flex justify-between gap-4">
  <div>Left</div>
  <div>Right</div>
</div>`,
}

// Cursor Utilities
export const cursorUtilities: UtilityData = {
  title: "Cursor",
  description: "Control the cursor appearance on hover.",
  classes: [
    { class: "cursor-auto", description: "Auto cursor" },
    { class: "cursor-default", description: "Default cursor" },
    { class: "cursor-pointer", description: "Pointer cursor" },
    { class: "cursor-wait", description: "Wait cursor" },
    { class: "cursor-text", description: "Text cursor" },
    { class: "cursor-move", description: "Move cursor" },
    { class: "cursor-not-allowed", description: "Not-allowed cursor" },
  ],
  example: "Cursor changes based on interaction type",
  codeSnippet: `<button class="cursor-pointer">Click me</button>
<input class="cursor-text" />`,
}

// Scale Utilities
export const scaleUtilities: UtilityData = {
  title: "Scale",
  description: "Scale elements using transforms.",
  classes: [
    { class: "scale-0", description: "Scale to 0" },
    { class: "scale-50", description: "Scale to 50%" },
    { class: "scale-75", description: "Scale to 75%" },
    { class: "scale-100", description: "Scale to 100%" },
    { class: "scale-110", description: "Scale to 110%" },
    { class: "scale-125", description: "Scale to 125%" },
    { class: "scale-150", description: "Scale to 150%" },
  ],
  example: "Elements scale smoothly for emphasis",
  codeSnippet: `<div class="scale-100 hover:scale-110 transition">
  Hover to zoom
</div>`,
}

// Screen Readers Utilities (Accessibility)
export const screenReaderUtilities: UtilityData = {
  title: "Screen Readers",
  description: "Control visibility for screen readers and accessibility.",
  classes: [
    { class: "sr-only", description: "Hidden visually, visible to screen readers" },
    { class: "not-sr-only", description: "Visible to all users and screen readers" },
  ],
  example: "Add accessible context without visual clutter",
  codeSnippet: `<button>
  Delete
  <span class="sr-only">item from list</span>
</button>`,
}

// Background Gradient Stops
export const backgroundGradientStops: UtilityData = {
  title: "Background Gradient Stops",
  description: "Define color stops in background gradients.",
  classes: [
    { class: "from-blue-500", description: "Starting color" },
    { class: "via-purple-500", description: "Middle color" },
    { class: "to-pink-500", description: "Ending color" },
  ],
  example: "Gradients use multiple color stops",
  codeSnippet: `<div class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8">
  Gradient background
</div>`,
}
