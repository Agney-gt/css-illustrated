import { TipItem } from "@/components/shared/tips-section";
import { UtilityItem } from "@/components/shared/utility-grid";

export const POINTER_HERO = {
  title: "Interactivity — pointer-events",
  description:
    "Control whether elements receive pointer events (clicks, hovers, touches). Use `pointer-events-none` to let events pass through overlays, and `pointer-events-auto` to restore interactivity. This is essential for overlays, decorative elements, enlarged hit areas, and nuanced hit testing.",
};

export const POINTER_UTILITIES: UtilityItem[] = [
  {
    cls: "pointer-events-auto",
    desc: "Element accepts pointer events(default)",
  },
  {
    cls: "pointer-events-none",
    desc: "Element ignores pointer events(click-through)",
  },
];

export const POINTER_TIPS: TipItem[] = [
  {
    bold: "Decorative only:",
    text: "mark decorative overlays with `pointer-events-none` so they never block UI.",
  },
  {
    bold: "Interactive children:",
    text: "if a container is `pointer-events-none`, explicitly add `pointer-events-auto` to interactive children.",
  },
  {
    bold: "Tooltips:",
    text: "prefer non-interactive tooltips unless they contain controls — then manage focus and pointer handling carefully.",
  },
  {
    bold: "Don't confuse focus:",
    text: "pointer-events doesn't change tabbability; `use tabindex` and ARIA for keyboard behavior.",
  },
];
