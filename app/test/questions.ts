export type Question = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

export type QuestionBank = Record<string, Question[]>;

export const QUESTION_BANK: QuestionBank = {
  layout: [
    {
      question: "Which class sets an element to display block?",
      options: ["block", "inline", "flex", "grid"],
      answer: "block",
      explanation: "`block` makes an element take full width and start on a new line.",
    },
    {
      question: "Which class hides an element?",
      options: ["hidden", "invisible", "opacity-0", "collapse"],
      answer: "hidden",
      explanation: "`hidden` removes the element from the layout completely.",
    },
    {
      question: "Which class makes an element inline?",
      options: ["inline", "block", "inline-block", "flex"],
      answer: "inline",
      explanation: "`inline` elements do not start on a new line.",
    },
    {
      question: "Which class creates inline-block behavior?",
      options: ["inline", "block", "inline-block", "grid"],
      answer: "inline-block",
      explanation: "`inline-block` allows width/height while staying inline.",
    },
    {
      question: "Which class enables table layout?",
      options: ["table", "grid", "flex", "block"],
      answer: "table",
      explanation: "`table` mimics HTML table layout behavior.",
    },
    {
      question: "Which class shows element but keeps space?",
      options: ["hidden", "invisible", "opacity-0", "block"],
      answer: "invisible",
      explanation: "`invisible` hides element but preserves layout space.",
    },
    {
      question: "Which class removes element from flow?",
      options: ["hidden", "absolute", "fixed", "relative"],
      answer: "absolute",
      explanation: "`absolute` removes element from normal document flow.",
    },
    {
      question: "Which class positions relative to viewport?",
      options: ["absolute", "relative", "fixed", "sticky"],
      answer: "fixed",
      explanation: "`fixed` positions relative to the viewport.",
    },
    {
      question: "Which class sticks during scroll?",
      options: ["fixed", "absolute", "sticky", "relative"],
      answer: "sticky",
      explanation: "`sticky` toggles between relative and fixed while scrolling.",
    },
    {
      question: "Which class sets position context?",
      options: ["relative", "absolute", "fixed", "sticky"],
      answer: "relative",
      explanation: "`relative` establishes positioning context for children.",
    },
  ],

  spacing: [
    {
      question: "Which class adds padding on all sides?",
      options: ["p-4", "px-4", "py-4", "pt-4"],
      answer: "p-4",
      explanation: "`p-4` applies padding on all sides.",
    },
    {
      question: "Which class adds horizontal margin?",
      options: ["mx-4", "my-4", "m-4", "ml-4"],
      answer: "mx-4",
      explanation: "`mx-*` controls left and right margin.",
    },
    {
      question: "Which class adds vertical padding?",
      options: ["px-4", "py-4", "p-4", "pb-4"],
      answer: "py-4",
      explanation: "`py-*` applies padding to top and bottom.",
    },
    {
      question: "Which class removes margin?",
      options: ["m-0", "p-0", "space-0", "gap-0"],
      answer: "m-0",
      explanation: "`m-0` removes all margin.",
    },
    {
      question: "Which class sets left padding?",
      options: ["pl-4", "px-4", "pt-4", "p-4"],
      answer: "pl-4",
      explanation: "`pl-*` applies padding-left.",
    },
    {
      question: "Which class sets bottom margin?",
      options: ["mb-4", "mt-4", "mx-4", "my-4"],
      answer: "mb-4",
      explanation: "`mb-*` applies margin-bottom.",
    },
    {
      question: "Which class controls spacing between flex items?",
      options: ["gap-4", "space-x-4", "m-4", "p-4"],
      answer: "gap-4",
      explanation: "`gap-*` controls spacing in flex and grid layouts.",
    },
    {
      question: "Which class adds spacing only on X axis?",
      options: ["space-x-4", "space-y-4", "gap-4", "mx-4"],
      answer: "space-x-4",
      explanation: "`space-x-*` adds horizontal spacing between children.",
    },
    {
      question: "Which class removes padding?",
      options: ["p-0", "m-0", "px-0", "py-0"],
      answer: "p-0",
      explanation: "`p-0` removes padding from all sides.",
    },
    {
      question: "Which class sets top margin?",
      options: ["mt-4", "mb-4", "my-4", "mx-4"],
      answer: "mt-4",
      explanation: "`mt-*` applies margin-top.",
    },
  ],

  sizing: [
    {
      question: "Which class makes width full?",
      options: ["w-full", "max-w-full", "w-screen", "w-auto"],
      answer: "w-full",
      explanation: "`w-full` sets width to 100% of parent.",
    },
    {
      question: "Which class sets height full viewport?",
      options: ["h-full", "h-screen", "max-h-full", "min-h-full"],
      answer: "h-screen",
      explanation: "`h-screen` equals 100vh.",
    },
    {
      question: "Which class limits maximum width?",
      options: ["max-w-md", "w-md", "min-w-md", "w-full"],
      answer: "max-w-md",
      explanation: "`max-w-*` sets maximum width.",
    },
    {
      question: "Which class sets min height?",
      options: ["min-h-screen", "h-screen", "max-h-screen", "h-full"],
      answer: "min-h-screen",
      explanation: "`min-h-screen` ensures minimum viewport height.",
    },
    {
      question: "Which class sets square size?",
      options: ["size-10", "w-10", "h-10", "aspect-square"],
      answer: "size-10",
      explanation: "`size-*` sets width and height equally.",
    },
    {
      question: "Which class auto sizes width?",
      options: ["w-auto", "w-fit", "w-full", "w-max"],
      answer: "w-auto",
      explanation: "`w-auto` lets browser decide width.",
    },
    {
      question: "Which class fits content width?",
      options: ["w-fit", "w-auto", "w-max", "w-full"],
      answer: "w-fit",
      explanation: "`w-fit` shrinks to content.",
    },
    {
      question: "Which class stretches width to viewport?",
      options: ["w-screen", "w-full", "max-w-full", "w-auto"],
      answer: "w-screen",
      explanation: "`w-screen` equals 100vw.",
    },
    {
      question: "Which class caps height?",
      options: ["max-h-64", "h-64", "min-h-64", "h-full"],
      answer: "max-h-64",
      explanation: "`max-h-*` limits maximum height.",
    },
    {
      question: "Which class ensures minimum width?",
      options: ["min-w-full", "w-full", "max-w-full", "w-screen"],
      answer: "min-w-full",
      explanation: "`min-w-full` prevents shrinking below full width.",
    },
  ],

  flexbox: [
    {
      question: "Which class enables flex?",
      options: ["flex", "grid", "block", "inline"],
      answer: "flex",
      explanation: "`flex` activates flexbox layout.",
    },
    {
      question: "Which class sets column direction?",
      options: ["flex-col", "flex-row", "items-center", "justify-center"],
      answer: "flex-col",
      explanation: "`flex-col` makes main axis vertical.",
    },
    {
      question: "Which class reverses row?",
      options: ["flex-row-reverse", "flex-col-reverse", "row-reverse", "reverse"],
      answer: "flex-row-reverse",
      explanation: "`flex-row-reverse` reverses horizontal direction.",
    },
    {
      question: "Which class wraps items?",
      options: ["flex-wrap", "flex-nowrap", "wrap", "items-wrap"],
      answer: "flex-wrap",
      explanation: "`flex-wrap` allows wrapping to next line.",
    },
    {
      question: "Which class prevents wrapping?",
      options: ["flex-nowrap", "flex-wrap", "nowrap", "wrap"],
      answer: "flex-nowrap",
      explanation: "`flex-nowrap` keeps items on one line.",
    },
    {
      question: "Which class grows item?",
      options: ["flex-grow", "grow", "flex-1", "basis-full"],
      answer: "grow",
      explanation: "`grow` allows item to take available space.",
    },
    {
      question: "Which class shrinks item?",
      options: ["shrink", "shrink-0", "flex-shrink", "basis-0"],
      answer: "shrink",
      explanation: "`shrink` allows item to shrink.",
    },
    {
      question: "Which class disables shrinking?",
      options: ["shrink-0", "grow-0", "flex-none", "basis-auto"],
      answer: "shrink-0",
      explanation: "`shrink-0` prevents shrinking.",
    },
    {
      question: "Which class sets basis full?",
      options: ["basis-full", "flex-1", "grow", "w-full"],
      answer: "basis-full",
      explanation: "`basis-full` sets initial size to 100%.",
    },
    {
      question: "Which class evenly distributes items?",
      options: ["justify-between", "justify-around", "justify-center", "items-center"],
      answer: "justify-between",
      explanation: "`justify-between` pushes items to edges.",
    },
  ],

  grid: [
    {
      question: "Which class enables grid?",
      options: ["grid", "flex", "block", "inline"],
      answer: "grid",
      explanation: "`grid` activates CSS Grid.",
    },
    {
      question: "Which class creates 3 columns?",
      options: ["grid-cols-3", "grid-rows-3", "cols-3", "grid-col-3"],
      answer: "grid-cols-3",
      explanation: "`grid-cols-*` defines number of columns.",
    },
    {
      question: "Which class sets row gap?",
      options: ["gap-y-4", "gap-x-4", "gap-4", "row-gap-4"],
      answer: "gap-y-4",
      explanation: "`gap-y-*` controls vertical spacing.",
    },
    {
      question: "Which class sets column gap?",
      options: ["gap-x-4", "gap-y-4", "gap-4", "col-gap-4"],
      answer: "gap-x-4",
      explanation: "`gap-x-*` controls horizontal spacing.",
    },
    {
      question: "Which class spans 2 columns?",
      options: ["col-span-2", "row-span-2", "span-2", "grid-span-2"],
      answer: "col-span-2",
      explanation: "`col-span-*` spans columns.",
    },
    {
      question: "Which class spans rows?",
      options: ["row-span-2", "col-span-2", "span-row-2", "grid-row-2"],
      answer: "row-span-2",
      explanation: "`row-span-*` spans rows.",
    },
    {
      question: "Which class auto flows row?",
      options: ["grid-flow-row", "grid-flow-col", "flow-row", "flow-col"],
      answer: "grid-flow-row",
      explanation: "`grid-flow-row` fills rows first.",
    },
    {
      question: "Which class auto flows column?",
      options: ["grid-flow-col", "grid-flow-row", "flow-col", "col-flow"],
      answer: "grid-flow-col",
      explanation: "`grid-flow-col` fills columns first.",
    },
    {
      question: "Which class aligns grid items center?",
      options: ["place-items-center", "items-center", "justify-center", "content-center"],
      answer: "place-items-center",
      explanation: "`place-items-center` aligns both axes.",
    },
    {
      question: "Which class defines auto columns?",
      options: ["auto-cols-fr", "grid-cols-auto", "cols-auto", "auto-cols-auto"],
      answer: "auto-cols-fr",
      explanation: "`auto-cols-fr` sets implicit column size.",
    },
  ],

  alignment: [
    {
      question: "Which class centers items vertically (flex row)?",
      options: ["items-center", "justify-center", "content-center", "self-center"],
      answer: "items-center",
      explanation: "`items-center` aligns along cross axis.",
    },
    {
      question: "Which class centers items horizontally?",
      options: ["justify-center", "items-center", "place-center", "self-center"],
      answer: "justify-center",
      explanation: "`justify-center` aligns along main axis.",
    },
    {
      question: "Which class aligns items to start?",
      options: ["items-start", "justify-start", "content-start", "self-start"],
      answer: "items-start",
      explanation: "`items-start` aligns to cross-axis start.",
    },
    {
      question: "Which class aligns items to end?",
      options: ["items-end", "justify-end", "self-end", "content-end"],
      answer: "items-end",
      explanation: "`items-end` aligns to cross-axis end.",
    },
    {
      question: "Which class centers grid content?",
      options: ["place-content-center", "content-center", "items-center", "justify-center"],
      answer: "place-content-center",
      explanation: "`place-content-center` centers grid tracks.",
    },
    {
      question: "Which class aligns self center?",
      options: ["self-center", "items-center", "justify-center", "content-center"],
      answer: "self-center",
      explanation: "`self-center` overrides alignment for one item.",
    },
    {
      question: "Which class stretches items?",
      options: ["items-stretch", "justify-stretch", "self-stretch", "content-stretch"],
      answer: "items-stretch",
      explanation: "`items-stretch` stretches along cross axis.",
    },
    {
      question: "Which class aligns baseline?",
      options: ["items-baseline", "items-start", "items-center", "items-end"],
      answer: "items-baseline",
      explanation: "`items-baseline` aligns text baselines.",
    },
    {
      question: "Which class aligns content between?",
      options: ["content-between", "justify-between", "items-between", "place-between"],
      answer: "content-between",
      explanation: "`content-between` distributes rows.",
    },
    {
      question: "Which class aligns content evenly?",
      options: ["content-evenly", "justify-evenly", "items-evenly", "place-evenly"],
      answer: "content-evenly",
      explanation: "`content-evenly` distributes evenly.",
    },
  ],

  backgrounds: [
    {
      question: "Which class sets background color?",
      options: ["bg-blue-500", "text-blue-500", "border-blue-500", "fill-blue-500"],
      answer: "bg-blue-500",
      explanation: "`bg-*` controls background color.",
    },
    {
      question: "Which class sets background opacity?",
      options: ["bg-opacity-50", "opacity-50", "text-opacity-50", "border-opacity-50"],
      answer: "bg-opacity-50",
      explanation: "`bg-opacity-*` affects background only.",
    },
    {
  question: "Which class is used to apply a background image in Tailwind?",
  options: [
    "bg-[url('/image.png')]",
    "bg-no-repeat",
    "bg-cover",
    "bg-center",
  ],
  answer: "bg-[url('/image.png')]",
  explanation:
    "Tailwind allows arbitrary values like bg-[url('/image.png')] to set background images.",
},

    {
      question: "Which class prevents background repeat?",
      options: ["bg-no-repeat", "bg-repeat", "bg-cover", "bg-contain"],
      answer: "bg-no-repeat",
      explanation: "`bg-no-repeat` stops tiling.",
    },
    {
      question: "Which class covers container?",
      options: ["bg-cover", "bg-contain", "bg-fill", "bg-auto"],
      answer: "bg-cover",
      explanation: "`bg-cover` fills container.",
    },
    {
      question: "Which class positions background center?",
      options: ["bg-center", "bg-top", "bg-bottom", "bg-left"],
      answer: "bg-center",
      explanation: "`bg-center` centers image.",
    },
    {
      question: "Which class sets gradient?",
      options: ["bg-gradient-to-r", "bg-linear", "bg-radial", "bg-gradient"],
      answer: "bg-gradient-to-r",
      explanation: "`bg-gradient-to-*` creates gradients.",
    },
    {
      question: "Which class sets background attachment?",
      options: ["bg-fixed", "bg-scroll", "bg-local", "bg-static"],
      answer: "bg-fixed",
      explanation: "`bg-fixed` locks background.",
    },
    {
      question: "Which class clips background?",
      options: ["bg-clip-text", "bg-clip-padding", "bg-clip-border", "bg-clip-content"],
      answer: "bg-clip-text",
      explanation: "`bg-clip-text` clips to text.",
    },
    {
      question: "Which class sets blend mode?",
      options: ["bg-blend-multiply", "bg-mix", "bg-overlay", "bg-blend"],
      answer: "bg-blend-multiply",
      explanation: "`bg-blend-*` controls blending.",
    },
  ],

  borders: [
    {
      question: "Which class adds border?",
      options: ["border", "outline", "ring", "shadow"],
      answer: "border",
      explanation: "`border` adds 1px border.",
    },
    {
      question: "Which class sets border color?",
      options: ["border-red-500", "bg-red-500", "text-red-500", "ring-red-500"],
      answer: "border-red-500",
      explanation: "`border-*` controls border color.",
    },
    {
      question: "Which class rounds corners?",
      options: ["rounded", "radius", "corner", "curve"],
      answer: "rounded",
      explanation: "`rounded` applies border radius.",
    },
    {
      question: "Which class fully rounds?",
      options: ["rounded-full", "rounded-lg", "rounded-xl", "rounded-md"],
      answer: "rounded-full",
      explanation: "`rounded-full` creates circles.",
    },
    {
      question: "Which class sets border width?",
      options: ["border-2", "border-w-2", "border-width-2", "bw-2"],
      answer: "border-2",
      explanation: "`border-*` sets thickness.",
    },
    {
      question: "Which class removes border?",
      options: ["border-0", "border-none", "no-border", "border-hidden"],
      answer: "border-0",
      explanation: "`border-0` removes border.",
    },
    {
      question: "Which class sets dashed border?",
      options: ["border-dashed", "border-solid", "border-dotted", "border-double"],
      answer: "border-dashed",
      explanation: "`border-dashed` uses dashes.",
    },
    {
      question: "Which class sets dotted border?",
      options: ["border-dotted", "border-dashed", "border-solid", "border-double"],
      answer: "border-dotted",
      explanation: "`border-dotted` uses dots.",
    },
    {
      question: "Which class sets double border?",
      options: ["border-double", "border-dashed", "border-solid", "border-dotted"],
      answer: "border-double",
      explanation: "`border-double` shows double line.",
    },
    {
      question: "Which class sets border opacity?",
      options: ["border-opacity-50", "opacity-50", "ring-opacity-50", "bg-opacity-50"],
      answer: "border-opacity-50",
      explanation: "`border-opacity-*` affects border only.",
    },
  ],

  effects: [
    {
      question: "Which class adds shadow?",
      options: ["shadow", "border", "ring", "outline"],
      answer: "shadow",
      explanation: "`shadow` adds box-shadow.",
    },
    {
      question: "Which class removes shadow?",
      options: ["shadow-none", "no-shadow", "shadow-0", "shadow-hidden"],
      answer: "shadow-none",
      explanation: "`shadow-none` removes shadow.",
    },
    {
      question: "Which class blurs element?",
      options: ["blur", "filter-blur", "backdrop-blur", "opacity"],
      answer: "blur",
      explanation: "`blur` applies filter blur.",
    },
    {
      question: "Which class adds backdrop blur?",
      options: ["backdrop-blur", "blur", "filter-blur", "bg-blur"],
      answer: "backdrop-blur",
      explanation: "`backdrop-blur` blurs background.",
    },
    {
      question: "Which class sets opacity?",
      options: ["opacity-50", "bg-opacity-50", "text-opacity-50", "border-opacity-50"],
      answer: "opacity-50",
      explanation: "`opacity-*` affects entire element.",
    },
    {
      question: "Which class adds ring?",
      options: ["ring", "border", "outline", "shadow"],
      answer: "ring",
      explanation: "`ring` adds focus outline.",
    },
    {
      question: "Which class removes ring?",
      options: ["ring-0", "ring-none", "no-ring", "ring-hidden"],
      answer: "ring-0",
      explanation: "`ring-0` removes ring.",
    },
    {
      question: "Which class adds grayscale?",
      options: ["grayscale", "filter-gray", "gray", "saturate-0"],
      answer: "grayscale",
      explanation: "`grayscale` removes color.",
    },
    {
      question: "Which class inverts colors?",
      options: ["invert", "reverse", "contrast", "brightness"],
      answer: "invert",
      explanation: "`invert` inverts colors.",
    },
    {
      question: "Which class sets brightness?",
      options: ["brightness-50", "lightness-50", "contrast-50", "opacity-50"],
      answer: "brightness-50",
      explanation: "`brightness-*` adjusts light.",
    },
  ],

  transforms: [
    {
      question: "Which class enables transform?",
      options: ["transform", "scale", "rotate", "translate"],
      answer: "transform",
      explanation: "`transform` enables transformations.",
    },
    {
      question: "Which class scales element?",
      options: ["scale-110", "zoom-110", "resize-110", "grow-110"],
      answer: "scale-110",
      explanation: "`scale-*` resizes element.",
    },
    {
      question: "Which class rotates element?",
      options: ["rotate-45", "spin-45", "turn-45", "angle-45"],
      answer: "rotate-45",
      explanation: "`rotate-*` rotates element.",
    },
    {
      question: "Which class moves element right?",
      options: ["translate-x-4", "move-x-4", "shift-x-4", "x-4"],
      answer: "translate-x-4",
      explanation: "`translate-x-*` moves horizontally.",
    },
    {
      question: "Which class moves element down?",
      options: ["translate-y-4", "move-y-4", "shift-y-4", "y-4"],
      answer: "translate-y-4",
      explanation: "`translate-y-*` moves vertically.",
    },
    {
      question: "Which class skews element?",
      options: ["skew-x-6", "tilt-x-6", "angle-x-6", "rotate-x-6"],
      answer: "skew-x-6",
      explanation: "`skew-*` slants element.",
    },
    {
      question: "Which class resets transform?",
      options: ["transform-none", "no-transform", "reset-transform", "transform-0"],
      answer: "transform-none",
      explanation: "`transform-none` removes transforms.",
    },
    {
      question: "Which class sets origin center?",
      options: ["origin-center", "center-origin", "transform-center", "origin-middle"],
      answer: "origin-center",
      explanation: "`origin-center` sets transform origin.",
    },
    {
      question: "Which class flips element?",
      options: ["scale-x-[-1]", "flip-x", "mirror", "reverse-x"],
      answer: "scale-x-[-1]",
      explanation: "Negative scale flips element.",
    },
    {
      question: "Which class animates transform?",
      options: ["transition-transform", "animate-transform", "motion-transform", "transform-animate"],
      answer: "transition-transform",
      explanation: "`transition-transform` animates transforms.",
    },
  ],

  interactivity: [
    {
      question: "Which class disables pointer events?",
      options: ["pointer-events-none", "cursor-none", "select-none", "disabled"],
      answer: "pointer-events-none",
      explanation: "`pointer-events-none` disables mouse events.",
    },
    {
      question: "Which class enables pointer events?",
      options: ["pointer-events-auto", "pointer-events-all", "pointer-events-on", "pointer-events"],
      answer: "pointer-events-auto",
      explanation: "`pointer-events-auto` enables interactions.",
    },
    {
      question: "Which class changes cursor?",
      options: ["cursor-pointer", "pointer", "cursor-hand", "mouse-pointer"],
      answer: "cursor-pointer",
      explanation: "`cursor-pointer` shows hand cursor.",
    },
    {
      question: "Which class disables text selection?",
      options: ["select-none", "no-select", "text-none", "user-select-none"],
      answer: "select-none",
      explanation: "`select-none` prevents selection.",
    },
    {
      question: "Which class enables selection?",
      options: ["select-text", "select-auto", "select-all", "text-select"],
      answer: "select-text",
      explanation: "`select-text` allows selection.",
    },
    {
      question: "Which class enables hover underline?",
      options: ["hover:underline", "hover:decoration", "hover:text-underline", "underline-hover"],
      answer: "hover:underline",
      explanation: "`hover:*` applies on hover.",
    },
    {
      question: "Which class focuses outline?",
      options: ["focus:outline-none", "outline-none", "ring-none", "border-none"],
      answer: "focus:outline-none",
      explanation: "`focus:*` applies on focus.",
    },
    {
      question: "Which class disables resize?",
      options: ["resize-none", "no-resize", "resize-0", "resize-hidden"],
      answer: "resize-none",
      explanation: "`resize-none` disables resizing.",
    },
    {
      question: "Which class enables smooth scroll?",
      options: ["scroll-smooth", "smooth-scroll", "scroll-auto", "scroll-soft"],
      answer: "scroll-smooth",
      explanation: "`scroll-smooth` enables smooth scrolling.",
    },
    {
      question: "Which class disables scroll?",
      options: ["overflow-hidden", "scroll-none", "no-scroll", "overflow-none"],
      answer: "overflow-hidden",
      explanation: "`overflow-hidden` hides scroll.",
    },
  ],

  accessibility: [
    {
      question: "Which class hides visually but keeps screen readers?",
      options: ["sr-only", "hidden", "invisible", "opacity-0"],
      answer: "sr-only",
      explanation: "`sr-only` is for screen readers.",
    },
    {
      question: "Which class restores sr-only?",
      options: ["not-sr-only", "sr-visible", "sr-show", "visible"],
      answer: "not-sr-only",
      explanation: "`not-sr-only` makes element visible again.",
    },
    {
      question: "Which class removes outline on focus?",
      options: ["focus:outline-none", "outline-none", "ring-0", "border-0"],
      answer: "focus:outline-none",
      explanation: "`focus:outline-none` removes focus outline.",
    },
    {
      question: "Which class shows focus ring?",
      options: ["focus:ring", "ring", "outline", "border"],
      answer: "focus:ring",
      explanation: "`focus:ring` improves accessibility.",
    },
    {
      question: "Which class sets high contrast text?",
      options: ["text-black", "contrast-more", "brightness-0", "invert"],
      answer: "contrast-more",
      explanation: "`contrast-more` increases contrast.",
    },
    {
      question: "Which class respects reduced motion?",
      options: ["motion-reduce", "reduce-motion", "no-motion", "motion-none"],
      answer: "motion-reduce",
      explanation: "`motion-reduce` respects user preference.",
    },
    {
      question: "Which class forces motion?",
      options: ["motion-safe", "motion-force", "motion-allow", "motion-enable"],
      answer: "motion-safe",
      explanation: "`motion-safe` applies when allowed.",
    },
    {
      question: "Which class hides focus ring?",
      options: ["focus:ring-0", "ring-0", "outline-none", "border-none"],
      answer: "focus:ring-0",
      explanation: "`focus:ring-0` removes ring.",
    },
    {
      question: "Which class improves keyboard nav?",
      options: ["focus-visible", "focus", "active", "hover"],
      answer: "focus-visible",
      explanation: "`focus-visible` shows focus for keyboard users.",
    },
    {
      question: "Which class prevents text wrap?",
      options: ["whitespace-nowrap", "text-nowrap", "no-wrap", "wrap-none"],
      answer: "whitespace-nowrap",
      explanation: "`whitespace-nowrap` prevents wrapping.",
    },
  ],
};
