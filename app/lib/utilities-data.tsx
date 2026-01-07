import { UtilityPageData } from "@/app/types/utility-page";

export const allUtilities: UtilityPageData[] = [
  {
    slug: ["accessibility", "screen-readers"],
    title: "Screen Readers",
    description:
      "Utilities for hiding content visually while keeping it accessible to screen readers. Essential for accessibility, allowing you to provide context to non-visual users without cluttering the UI.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Screen Readers",
          description:
            "Utilities for hiding content visually while keeping it accessible to screen readers. Essential for accessibility, allowing you to provide context to non-visual users without cluttering the UI.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "The Invisible Layer",
          description:
            "Think of your webpage as having two parallel experiences: the Visual Experience (what is seen) and the Auditory Experience (what is heard via screen reader). The `sr-only` utility allows you to inject information exclusively into the Auditory Experience without affecting the layout or appearance of the Visual Experience.",
          features: [
            "Hides elements visually but keeps them in the DOM",
            "Ensures screen readers can still discover and read the content",
            "Crucial for icon-only buttons, skip links, and form labels",
            "Uses `clip` pattern to ensure zero visual footprint",
            "Can be toggled on focus (e.g., `focus:not-sr-only`)",
          ],
          layerAssignment:
            "Accessibility Layer - Enhances the semantic tree without painting pixels",
          browserBehavior:
            "Applies absolute positioning, 1px dimensions, overflow hidden, and clipping to remove the element from the visual flow while keeping it readable by AT.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Hiding Techniques Compared",
          columns: ["Method", "Visual", "Screen Reader", "Layout Space"],
          rows: [
            {
              feature: "sr-only",
              values: ["Hidden", "Visible (Read)", "None (Removed from flow)"],
            },
            {
              feature: "display: none",
              values: ["Hidden", "Hidden (Ignored)", "None"],
            },
            {
              feature: "visibility: hidden",
              values: ["Hidden", "Hidden (Ignored)", "Preserved (Blank space)"],
            },
            {
              feature: "opacity-0",
              values: ["Hidden", "Visible (Read)", "Preserved (Blank space)"],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Screen Reader Utilities",
          items: [
            {
              cls: "sr-only",
              desc: "Hide visually but keep accessible to screen readers",
            },
            {
              cls: "not-sr-only",
              desc: "Undo sr-only (useful for focus states or breakpoints)",
            },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Visibility Playground",
          description:
            "Test different hiding utilities to see their effect on layout and visual appearance. Observe how `sr-only` differs from `opacity-0` or `invisible`.",
          options: ["sr-only", "not-sr-only", "invisible", "opacity-0"],
          defaultValue: "sr-only",
          buildMarkup: (option: string) => {
            return `<div class="flex flex-col gap-2 border p-4">
  <div class="bg-slate-200 p-2">Item 1 (Visible)</div>
  
  <div class="bg-blue-500 text-white p-2 ${option}">
    Item 2 (${option})
  </div>

  <div class="bg-slate-200 p-2">Item 3 (Visible)</div>
</div>`;
          },
          renderPreview: (option: string) => {
            return (
              <div className="w-64 border border-dashed border-slate-300 dark:border-slate-700 p-4 bg-white dark:bg-slate-900 rounded-lg">
                <div className="flex flex-col gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-center text-sm font-medium text-slate-900 dark:text-slate-100">
                    Item 1
                  </div>

                  <div
                    className={`bg-blue-500 text-white p-3 rounded text-center text-sm font-medium transition-all ${option}`}
                  >
                    Item 2 ({option})
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-center text-sm font-medium text-slate-900 dark:text-slate-100">
                    Item 3
                  </div>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Mystery Button",
          description:
            "You have a search button represented only by a magnifying glass icon. A screen reader currently just announces 'Button' or nothing at all, confusing users. Add an `sr-only` span to give it a clear label of 'Search' without changing the design.",
          codeSnippet: `<button class="p-2 bg-blue-600 rounded-full text-white">
        <svg class="w-5 h-5">...</svg> <span class="{input}">Search</span>
        </button>`,
          options: ["hidden", "opacity-0", "sr-only", "block"],
          correctOption: "sr-only",
          renderPreview: (userClass: string) => {
            // Simulate Screen Reader Output logic
            let srOutput = "Button"; // Default for unlabeled button
            let visualState = "Icon Only";

            if (userClass === "sr-only") {
              srOutput = "Button: 'Search'";
              visualState = "Icon Only (Correct)";
            } else if (userClass === "block") {
              srOutput = "Button: 'Search'";
              visualState = "Icon + Text (Design Broken)";
            } else if (userClass === "hidden") {
              srOutput = "Button"; // Hidden text is ignored
              visualState = "Icon Only";
            } else if (userClass === "opacity-0") {
              srOutput = "Button: 'Search'"; // Opacity 0 is read
              visualState = "Icon + Invisible Gap (Layout Broken)";
            }

            return (
              <div className="flex flex-col items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg gap-8">
                {/* Visual Preview */}
                <div className="text-center">
                  <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">
                    Visual View
                  </p>
                  <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                    <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center gap-2 transition-all">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <span
                        className={
                          userClass === "hidden" ? "hidden" : userClass
                        }
                      >
                        Search
                      </span>
                    </button>
                  </div>
                </div>

                {/* Simulated SR Output */}
                <div className="w-full max-w-xs">
                  <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">
                    Screen Reader Output
                  </p>
                  <div
                    className={`p-4 rounded-lg font-mono text-sm border-l-4 shadow-sm transition-all ${
                      userClass === "sr-only"
                        ? "bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-300"
                        : "bg-slate-100 dark:bg-slate-800 border-slate-400 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    <span className="opacity-50">VoiceOver: </span>"{srOutput}"
                  </div>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Skip to Content Link",
              description:
                "A link hidden by default that becomes visible when focused via keyboard. Essential for power users to skip navigation.",
              code: `<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-blue-600 focus:shadow-lg focus:rounded-md">
  Skip to main content
</a>`,
              preview: (
                <div className="relative h-20 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 flex items-center justify-center group">
                  <p className="text-sm text-slate-400">
                    Focus inside here and press Tab
                  </p>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="sr-only focus:not-sr-only absolute top-4 left-4 z-10 px-4 py-2 bg-blue-600 text-white font-bold rounded-md shadow-xl transition-all outline-none ring-2 ring-white"
                  >
                    Skip to content
                  </a>
                </div>
              ),
            },
            {
              title: "Visually Hidden Form Label",
              description:
                "When a visual design (like a newsletter input) implies the label, use `sr-only` to keep it accessible without clutter.",
              code: `<form class="flex gap-2">
  <label for="email" class="sr-only">Email Address</label>
  <input id="email" type="email" placeholder="Enter your email..." class="px-4 py-2 rounded border" />
  <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">Subscribe</button>
</form>`,
              preview: (
                <div className="flex gap-2 max-w-sm">
                  <label htmlFor="demo-email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="demo-email"
                    type="email"
                    placeholder="Enter your email..."
                    className="flex-1 px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm"
                  />
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md">
                    Subscribe
                  </button>
                </div>
              ),
            },
            {
              title: "Icon-Only Action Button",
              description:
                "Providing a text alternative for an icon button (e.g., Close Modal).",
              code: `<button class="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
  <span class="sr-only">Close menu</span>
  <svg class="w-6 h-6">...</svg> </button>`,
              preview: (
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 flex justify-center">
                  <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ),
            },
            {
              title: "Live Region Status",
              description:
                "Announcing dynamic changes (like form submission success) to screen readers without requiring focus movement.",
              code: `<div role="status" aria-live="polite" class="sr-only">
  Settings saved successfully.
</div>`,
              preview: (
                <div className="p-4 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900 rounded-md">
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm font-medium">
                      Visual Status: Saved
                    </span>
                  </div>
                  {/* The sr-only element below would be announced by the screen reader */}
                  <div className="sr-only">Settings saved successfully.</div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Hiding Focusable Elements Forever",
              reason:
                "If you hide a link with `sr-only` but don't add `focus:not-sr-only`, keyboard users will focus on an invisible element, which is very confusing.",
              example: `<a class="sr-only">Skip Link (Bad)</a>`,
              level: "critical",
            },
            {
              title: "Using display:none for Accessibility",
              reason:
                "Using `hidden` (display: none) removes the element from the accessibility tree entirely. Screen readers will NOT read it.",
              example: `<span class="hidden">Description (Ignored)</span>`,
              level: "critical",
            },
            {
              title: "Overusing sr-only",
              reason:
                "Don't hide content that would be useful for everyone. If an instruction is helpful, make it visible.",
              example: `<p class="sr-only">Password must be 8 chars...</p>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Skip Links:",
              text: "Always use `sr-only focus:not-sr-only` for 'Skip to content' links to help keyboard users bypass navigation menus.",
            },
            {
              bold: "Testing:",
              text: "Use VoiceOver (Mac) or NVDA (Windows) to verify that your `sr-only` content is actually being read in the correct context.",
            },
            {
              bold: "Charts & Graphs:",
              text: "Use `sr-only` to provide a table or text summary of complex data visualizations.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["alignment", "align", "content"],
    title: "Align Content",
    description:
      "Control how rows are positioned in multi-line flex and grid containers. Essential for packing wrapped items tightly or spacing them evenly when there is extra vertical space.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Align Content",
          description:
            "Control how rows are positioned in multi-line flex and grid containers. Essential for packing wrapped items tightly or spacing them evenly when there is extra vertical space.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "The Multi-Line Manager",
          description:
            "Align Content (`content-*`) is the manager for *lines*, not items. It only activates when your container has wrapping enabled (`flex-wrap`) AND has extra vertical height. It decides whether those lines should pack together in the center, spread apart to edges, or stretch to fill the void.",
          features: [
            "Only works on multi-line containers (flex-wrap or multi-row grid)",
            "Does nothing if there is only one line of content",
            "Controls the distribution of space between rows",
            "Commonly used for tag clouds, galleries, and dashboard grids",
            "Counterpart to `justify-content` but for the cross-axis (vertical in rows)",
          ],
          layerAssignment:
            "Layout Layer - Distributes secondary axis space among multiple lines",
          browserBehavior:
            "If flex items wrap into multiple lines, the browser uses this property to determine how to distribute the remaining empty space in the cross axis.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Align Items vs Align Content",
          columns: ["Property", "Targets", "Requirement", "Visual Effect"],
          rows: [
            {
              feature: "align-content",
              values: [
                "Entire Rows/Lines",
                "Wrapping + Extra Height",
                "Packs rows together or spreads them",
              ],
            },
            {
              feature: "align-items",
              values: [
                "Individual Items",
                "None",
                "Aligns items within their specific line",
              ],
            },
            {
              feature: "justify-content",
              values: [
                "Main Axis Distribution",
                "None",
                "Distributes items horizontally (in row)",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Align Content Utilities",
          items: [
            { cls: "content-center", desc: "Pack rows in the center" },
            { cls: "content-start", desc: "Pack rows at the start" },
            { cls: "content-end", desc: "Pack rows at the end" },
            { cls: "content-between", desc: "Equal space between rows" },
            { cls: "content-around", desc: "Equal space around rows" },
            { cls: "content-evenly", desc: "Equal space everywhere" },
            {
              cls: "content-stretch",
              desc: "Stretch rows to fill height (Default)",
            },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Align Content Playground",
          description:
            "See how multiple lines of content react to different alignment utilities. Note: We've forced the container to be taller than the content so you can see the effect.",
          options: [
            "content-start",
            "content-center",
            "content-end",
            "content-between",
            "content-around",
            "content-evenly",
            "content-stretch",
          ],
          defaultValue: "content-start",
          buildMarkup: (value: string) =>
            `<div class="flex flex-wrap h-64 ${value} gap-4 bg-slate-100 p-4">
  <div class="w-1/3 h-12 bg-blue-500">1</div>
  <div class="w-1/3 h-12 bg-blue-500">2</div>
  <div class="w-1/3 h-12 bg-blue-500">3</div>
</div>`,
          renderPreview: (value: string) => (
            <div
              className={`flex flex-wrap h-64 ${value} gap-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-32 h-12 bg-blue-500 text-white flex items-center justify-center rounded font-bold shadow-sm"
                >
                  Item {i + 1}
                </div>
              ))}
            </div>
          ),
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Gapped Tag Cloud",
          description:
            "You have a container of tags with a fixed height. The tags wrap to a second line, but because of the default behavior (`content-stretch`), there is a huge, ugly gap between the two rows. Use `content-center` to pack the rows tightly together in the middle of the container.",
          codeSnippet: `<div class="flex flex-wrap h-48 bg-slate-100 rounded-lg p-4 {input} gap-2">
  <span class="badge">React</span>
  <span class="badge">Vue</span>
  <span class="badge">Angular</span>
  <span class="badge">Svelte</span>
  <span class="badge">Next.js</span>
  <span class="badge">Nuxt</span>
  <span class="badge">Remix</span>
</div>`,
          options: [
            "items-center",
            "content-center",
            "justify-center",
            "content-between",
          ],
          correctOption: "content-center",
          renderPreview: (userClass: string) => (
            <div
              className={`w-full max-w-md h-48 bg-slate-100 dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4 flex flex-wrap gap-2 ${userClass}`}
            >
              {[
                "React",
                "Vue",
                "Angular",
                "Svelte",
                "Next.js",
                "Nuxt",
                "Remix",
                "Gatsby",
                "Astro",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium shadow-sm text-slate-700 dark:text-slate-200 h-fit"
                >
                  {tag}
                </span>
              ))}
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Centered Footer Grid",
              description:
                "A footer with multiple links that wraps on smaller screens. Using `content-center` keeps the block of links centered vertically if the footer has a min-height.",
              code: `<footer class="h-40 flex flex-wrap content-center justify-center gap-6 bg-slate-900 text-white">
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
  <a href="#">Privacy</a>
  <a href="#">Terms</a>
</footer>`,
              preview: (
                <div className="h-40 w-full bg-slate-900 rounded-lg flex flex-wrap content-center justify-center gap-x-6 gap-y-2 text-slate-300 text-sm">
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-white">
                    Cookie Policy
                  </a>
                </div>
              ),
            },
            {
              title: "Spaced Dashboard Cards",
              description:
                "Using `content-between` to push rows of dashboard cards to the top and bottom edges of the viewport.",
              code: `<div class="h-64 flex flex-wrap content-between">
  <div class="w-full">Header Stats...</div>
  
  <div class="w-full">Footer Actions...</div>
</div>`,
              preview: (
                <div className="h-64 bg-slate-50 dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg p-4 flex flex-wrap content-between">
                  <div className="w-full flex gap-4">
                    <div className="flex-1 h-16 bg-white dark:bg-slate-700 rounded shadow-sm"></div>
                    <div className="flex-1 h-16 bg-white dark:bg-slate-700 rounded shadow-sm"></div>
                  </div>
                  <div className="w-full h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded flex items-center justify-center text-sm font-medium">
                    Action Bar (Pushed to bottom)
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using on Single Lines",
              reason:
                "`align-content` has NO effect if there is only one line of flex items. Use `align-items` instead for single-line centering.",
              example: `<div class="flex content-center">...</div> `,
              level: "critical",
            },
            {
              title: "Forgetting Flex Wrap",
              reason:
                "By default, flexbox tries to fit everything on one line. You must add `flex-wrap` for `align-content` to trigger.",
              example: `<div class="flex content-center">...</div> `,
              level: "warning",
            },
            {
              title: "No Container Height",
              reason:
                "If the container height is `auto` (default), it shrinks to fit the content. There is no 'extra space' to distribute, so `content-*` does nothing visibly.",
              example: `<div class="flex flex-wrap content-center h-auto">...</div>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Pack it tight:",
              text: "Use `content-start` (or `center`) when you have a tall container but want rows to sit closely together, avoiding the 'drift' effect of `stretch`.",
            },
            {
              bold: "Grid friendly:",
              text: "This works exactly the same in CSS Grid (`grid` layouts) for aligning grid tracks in the block axis.",
            },
            {
              bold: "Responsive switch:",
              text: "Often used as `content-start md:content-center` to change layout density on larger screens.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["alignment", "align", "items"],
    title: "Align Items",
    description:
      "Utilities for controlling how flex and grid items are positioned along the cross axis. Essential for vertical centering in rows and stretching columns to equal height.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Align Items",
          description:
            "Utilities for controlling how flex and grid items are positioned along the cross axis. Essential for vertical centering in rows and stretching columns to equal height.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Cross-Axis Alignment",
          description:
            "Align-items controls how flex/grid items are positioned along the cross axis (perpendicular to the main flow direction). In a standard Flex Row, this controls vertical alignment. In a Flex Column, it controls horizontal alignment.",
          features: [
            "Works on flex and grid containers (not the items themselves)",
            "Cross axis is vertical in flex-row, horizontal in flex-column",
            "Default value is 'stretch' for flex containers (items fill the height)",
            "Individual items can override this with `align-self`",
          ],
          layerAssignment:
            "Layout Layer - Applied to parent container, affects all child items",
          browserBehavior:
            "Browser calculates cross-axis size and distributes items according to the specified alignment rule.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Alignment Properties Comparison",
          columns: ["Property", "Axis", "Container", "Items", "Use Case"],
          rows: [
            {
              feature: "align-items",
              values: [
                "Cross axis",
                "Flex/Grid container",
                "Child items",
                "Vertical alignment in row",
                "Center nav items",
              ],
            },
            {
              feature: "justify-items",
              values: [
                "Main/Inline axis",
                "Grid container",
                "Grid items",
                "Horizontal grid alignment",
                "Grid cell positioning",
              ],
            },
            {
              feature: "justify-content",
              values: [
                "Main axis",
                "Flex/Grid container",
                "All items",
                "Distribute extra space",
                "Space between cards",
              ],
            },
            {
              feature: "align-content",
              values: [
                "Cross axis",
                "Flex/Grid container",
                "Line groups",
                "Multi-line alignment",
                "Wrap distribution",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Align Items Utilities",
          items: [
            {
              cls: "items-start",
              desc: "Align items to the start of the cross axis",
            },
            {
              cls: "items-end",
              desc: "Align items to the end of the cross axis",
            },
            {
              cls: "items-center",
              desc: "Align items along the center of the cross axis",
            },
            {
              cls: "items-baseline",
              desc: "Align items along their text baselines",
            },
            {
              cls: "items-stretch",
              desc: "Stretch items to fill the container (Default)",
            },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Align Items Playground",
          description:
            "Experiment with different align-items values. We've added background colors and varied heights so you can see how the items stretch or align.",
          options: [
            "items-start",
            "items-center",
            "items-end",
            "items-baseline",
            "items-stretch",
          ],
          defaultValue: "items-center",
          defaultCustomClasses:
            "h-64 gap-4 p-4 border-2 border-dashed border-slate-300 dark:border-slate-700",
          buildMarkup: (utilityClass: string, customClasses: string = "") => {
            const isFlex =
              customClasses.includes("flex") || !customClasses.includes("grid");
            const layoutClass = isFlex ? "flex" : "grid grid-cols-3";
            const classes = [layoutClass, utilityClass, customClasses]
              .filter(Boolean)
              .join(" ");

            return `<div class="${classes}">
  <div class="bg-blue-500 text-white p-4 rounded">Short</div>
  <div class="bg-green-500 text-white p-4 rounded">Medium<br/>Content</div>
  <div class="bg-purple-500 text-white p-4 rounded">Very<br/>Long<br/>Content<br/>Here</div>
  ${
    isFlex
      ? '<div class="bg-orange-500 text-white p-4 rounded">Extra</div>'
      : ""
  }
</div>`;
          },
          renderPreview: (utilityClass: string, customClasses: string = "") => {
            const isFlex =
              customClasses.includes("flex") || !customClasses.includes("grid");
            const layoutClass = isFlex ? "flex" : "grid grid-cols-3";
            const classes = [layoutClass, utilityClass, customClasses]
              .filter(Boolean)
              .join(" ");

            return (
              <div className={classes}>
                <div className="bg-blue-500 text-white p-4 rounded">Short</div>
                <div className="bg-green-500 text-white p-4 rounded">
                  Medium
                  <br />
                  Content
                </div>
                <div className="bg-purple-500 text-white p-4 rounded">
                  Very
                  <br />
                  Long
                  <br />
                  Content
                  <br />
                  Here
                </div>
                {isFlex && (
                  <div className="bg-orange-500 text-white p-4 rounded">
                    Extra
                  </div>
                )}
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Crooked Nav",
          description:
            "You are building a navigation bar. The logo is tall, but the links are short text. By default, the links stretch or sit at the top, looking awkward. Apply `items-center` to the nav container to vertically center the links with the logo.",
          codeSnippet: `<nav class="flex {input} gap-4 bg-white p-4 border rounded-lg">
  <div class="h-12 w-12 bg-blue-600 rounded"></div>
  
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>`,
          options: [
            "items-start",
            "items-end",
            "items-stretch",
            "items-center",
          ],
          correctOption: "items-center",
          renderPreview: (userClass: string) => (
            <div className="w-full max-w-md p-8 bg-slate-50 dark:bg-slate-900 rounded-lg">
              <nav
                className={`flex ${userClass} gap-4 bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm h-24`}
              >
                <div className="h-12 w-12 bg-blue-600 rounded shrink-0 flex items-center justify-center text-white font-bold text-xs">
                  LOGO
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded text-sm h-fit">
                  Home
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded text-sm h-fit">
                  About
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded text-sm h-fit">
                  Contact
                </div>
              </nav>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Practical Examples",
          examples: [
            {
              title: "Navigation Bar",
              description:
                "Vertically centering navigation links relative to a logo is the most common use case for `items-center`.",
              code: `<nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
  <div className="font-bold">Logo</div>
  <div className="flex gap-6">
    <a href="#">Home</a>
    <a href="#">About</a>
  </div>
</nav>`,
              preview: (
                <nav className="w-full flex items-center justify-between p-4 bg-blue-500 text-white rounded-lg">
                  <div className="font-bold text-lg">Logo</div>
                  <div className="flex gap-6 text-sm font-medium">
                    <a
                      href="#"
                      className="hover:underline opacity-90 hover:opacity-100"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="hover:underline opacity-90 hover:opacity-100"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="hover:underline opacity-90 hover:opacity-100"
                    >
                      Contact
                    </a>
                  </div>
                </nav>
              ),
            },
            {
              title: "Equal Height Cards",
              description:
                "Using the default `items-stretch`, cards in a row will automatically stretch to match the height of the tallest card.",
              code: `<div className="flex items-stretch gap-4">
  <div className="border p-4">Short</div>
  <div className="border p-4">Tall<br/>Content</div>
</div>`,
              preview: (
                <div className="flex items-stretch gap-4 w-full">
                  <div className="flex-1 flex items-center p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
                    <div>
                      <h3 className="font-bold text-sm">Short</h3>
                      <p className="text-xs text-slate-500">Brief content</p>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
                    <div>
                      <h3 className="font-bold text-sm">Tall</h3>
                      <p className="text-xs text-slate-500">
                        Content that spans multiple lines forces siblings to
                        stretch.
                      </p>
                    </div>
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using vertical-align with flexbox",
              reason:
                "`vertical-align` is for inline/table elements. It doesn't work on flex children. Use `align-items` on the parent instead.",
              example: `<div class="flex">
  <div class="vertical-align-middle">❌ Won't work</div>
</div>`,
              level: "critical",
            },
            {
              title: "Forgetting height on flex container",
              reason:
                "If you are trying to center something vertically in a full-screen view, the parent needs `h-screen` or a fixed height. Otherwise, the container is only as tall as the content.",
              example: `<div class="flex items-center">❌ No height to align within</div>`,
              level: "warning",
            },
            {
              title: "Using items-center on single item",
              reason:
                "If there is only one item, it will look centered, but `justify-content` or `place-items` might be more appropriate depending on the goal.",
              example: `<div class="flex items-center"><div>Only one item</div></div>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "items-start:",
              text: "Perfect for top-aligning cards in a flex row where text lengths vary.",
            },
            {
              bold: "items-center:",
              text: "The go-to solution for headers, navbars, and buttons with icons.",
            },
            {
              bold: "items-stretch:",
              text: "Great for dashboard widgets or pricing cards that need to look uniform.",
            },
            {
              bold: "Combine with gap:",
              text: "Always use `gap` instead of margins to space out your aligned items.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["alignment", "align", "self"],
    title: "Align Self",
    description:
      "Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Align Self",
          description:
            "Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Individual Item Alignment",
          description:
            "align-self allows individual flex/grid items to override the container's align-items setting and control their own alignment on the cross axis.",
          features: [
            "Works on individual flex and grid items (not containers)",
            "Overrides the container's align-items value",
            "Cross axis is vertical in flex-row, horizontal in flex-column",
            "Default value is 'auto' which inherits from container",
          ],
          layerAssignment:
            "Layout Layer - Applied to child items, overrides container alignment",
          browserBehavior:
            "Browser calculates individual item positioning independently from siblings",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Alignment Properties Comparison",
          columns: ["Property", "Applied To", "Scope", "Axis", "Use Case"],
          rows: [
            {
              feature: "align-items",
              values: [
                "Container",
                "All items",
                "Cross axis",
                "Vertical in flex-row",
                "Set default alignment",
              ],
            },
            {
              feature: "align-self",
              values: [
                "Individual item",
                "Single item",
                "Cross axis",
                "Vertical in flex-row",
                "Override container",
              ],
            },
            {
              feature: "justify-content",
              values: [
                "Container",
                "All items",
                "Main axis",
                "Horizontal in flex-row",
                "Distribute space",
              ],
            },
            {
              feature: "justify-self",
              values: [
                "Individual item",
                "Single item",
                "Main/Inline axis",
                "Grid only",
                "Grid item positioning",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Available Classes",
          items: [
            { cls: "self-auto", desc: "Use container's alignment" },
            { cls: "self-start", desc: "Align item to start" },
            { cls: "self-end", desc: "Align item to end" },
            { cls: "self-center", desc: "Align item to center" },
            { cls: "self-stretch", desc: "Stretch item to fill container" },
            { cls: "self-baseline", desc: "Align item to baseline" },
          ],
          prefix: "self-",
        },
      },
      {
        type: "playground",
        props: {
          title: "Align Self Playground",
          description:
            "Experiment with different align-self values on individual items within a container. Notice how the 'Custom' item behaves differently from its 'Auto' siblings.",
          options: [
            "self-auto",
            "self-start",
            "self-end",
            "self-center",
            "self-stretch",
            "self-baseline",
          ],
          defaultValue: "self-auto",
          defaultCustomClasses:
            "h-48 gap-4 p-4 border-2 border-dashed border-slate-300 dark:border-slate-700 items-center",
          buildMarkup: (utilityClass: string, customClasses: string = "") => {
            const containerClasses = `flex ${customClasses}`;

            return `<div class="${containerClasses}">
  <div class="bg-blue-500 text-white p-4 rounded self-auto">Auto</div>
  <div class="bg-green-500 text-white p-4 rounded ${utilityClass}">Custom</div>
  <div class="bg-purple-500 text-white p-4 rounded self-auto">Auto</div>
  <div class="bg-orange-500 text-white p-4 rounded self-end">End</div>
</div>`;
          },
          renderPreview: (utilityClass: string, customClasses: string = "") => {
            const containerClasses = `flex ${customClasses}`;

            return (
              <div className={containerClasses}>
                <div className="bg-blue-500 text-white p-4 rounded self-auto">
                  Auto
                </div>
                <div
                  className={`bg-green-500 text-white p-4 rounded ${utilityClass}`}
                >
                  Custom
                </div>
                <div className="bg-purple-500 text-white p-4 rounded self-auto">
                  Auto
                </div>
                <div className="bg-orange-500 text-white p-4 rounded self-end">
                  End
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Hanging Quote",
          description:
            "You're building a testimonial card. The text is vertically centered using `items-center` on the parent. However, the large quote icon looks awkward in the middle—it should hang at the top. Apply `self-start` to the icon to fix its alignment.",
          codeSnippet: `<div class="flex items-center gap-4 bg-white p-6 rounded shadow">
  <div class="text-4xl text-blue-500 {input}">
    ❝
  </div>
  
  <p class="text-gray-600">
    This product completely changed our workflow. 
    It's intuitive, fast, and reliable.
  </p>
</div>`,
          options: ["self-auto", "self-start", "self-end", "self-center"],
          correctOption: "self-start",
          renderPreview: (userClass: string) => (
            <div className="w-full max-w-lg p-4 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-6 rounded shadow-sm">
                <div
                  className={`text-6xl leading-[0] text-blue-500 font-serif ${userClass} transition-all duration-500`}
                >
                  ❝
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  <p className="mb-2">
                    The alignment of this icon makes a huge difference in visual
                    polish.
                  </p>
                  <p>
                    {userClass === "self-start"
                      ? "✅ Perfect! The quote hangs correctly at the start."
                      : "❌ The icon feels floaty when centered."}
                  </p>
                </div>
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Practical Examples",
          examples: [
            {
              title: "Card with Action Button",
              description:
                "Button sticks to bottom while content stays at top. This is achieved by combining `self-start` on the content and `self-end` on the button within a flex column.",
              code: `<div class="flex h-64 p-4 border rounded-lg">
  <div class="flex-1 self-start">
    <h3 className="font-bold mb-2">Card Title</h3>
    <p className="text-sm text-gray-600">Card content goes here</p>
  </div>
  <button class="self-end bg-blue-500 text-white px-4 py-2 rounded">
    Action
  </button>
</div>`,
              preview: (
                <div className="flex h-64 p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
                  <div className="flex-1 self-start">
                    <h3 className="font-bold mb-2">Card Title</h3>
                    <p className="text-sm text-slate-500">
                      Card content goes here
                    </p>
                  </div>
                  <button className="self-end bg-blue-500 text-white px-4 py-2 rounded shadow-sm text-sm font-medium">
                    Action
                  </button>
                </div>
              ),
            },
            {
              title: "Mixed Alignment List",
              description:
                "Different items aligned differently for visual hierarchy, creating a staggered effect.",
              code: `<div class="grid grid-cols-2 gap-4 h-48">
  <div class="self-start bg-gray-100 p-3 rounded">Top</div>
  <div class="self-center bg-gray-100 p-3 rounded">Center</div>
  <div class="self-end bg-gray-100 p-3 rounded">Bottom</div>
  <div class="self-stretch bg-gray-100 p-3 rounded">Stretch</div>
</div>`,
              preview: (
                <div className="grid grid-cols-2 gap-4 h-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                  <div className="self-start bg-slate-100 dark:bg-slate-800 p-3 rounded text-center text-sm">
                    Top
                  </div>
                  <div className="self-center bg-slate-100 dark:bg-slate-800 p-3 rounded text-center text-sm">
                    Center
                  </div>
                  <div className="self-end bg-slate-100 dark:bg-slate-800 p-3 rounded text-center text-sm">
                    Bottom
                  </div>
                  <div className="self-stretch bg-slate-100 dark:bg-slate-800 p-3 rounded text-center text-sm flex items-center justify-center">
                    Stretch
                  </div>
                </div>
              ),
            },
            {
              title: "Navigation with Logo",
              description:
                "Logo centered, items aligned differently to create a balanced navbar.",
              code: `<div class="flex items-center justify-between h-16 p-4 border">
  <div class="self-start bg-blue-500 text-white px-3 py-1 rounded">Menu</div>
  <div class="self-center bg-gray-200 px-3 py-1 rounded">Logo</div>
  <div class="self-end bg-green-500 text-white px-3 py-1 rounded">User</div>
</div>`,
              preview: (
                <div className="flex items-center justify-between h-24 p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
                  <div className="self-start bg-blue-500 text-white px-3 py-1 rounded text-sm">
                    Menu
                  </div>
                  <div className="self-center bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded text-sm font-bold">
                    Logo
                  </div>
                  <div className="self-end bg-green-500 text-white px-3 py-1 rounded text-sm">
                    User
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using align-self on the container",
              reason:
                "align-self only works on individual items, not the container itself. Use align-items on the container.",
              example: `<div class="flex self-center">❌ Won't work</div>`,
              level: "critical",
            },
            {
              title: "Not having a flex/grid container",
              reason:
                "align-self only works inside flex or grid containers. It has no effect on regular block elements.",
              example: `<div class="self-center">❌ No container</div>`,
              level: "critical",
            },
            {
              title: "Forgetting height on flex container",
              reason:
                "Without height, self-alignment has no space to work with. Items will appear unchanged.",
              example: `<div class="flex h-0">❌ No height</div>`,
              level: "warning",
            },
            {
              title: "Using self-auto without understanding",
              reason:
                "self-auto means the item follows the container's align-items value, not that it automatically centers.",
              example: `<div class="self-auto">✅ Follows container</div>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "self-center:",
              text: "Perfect for centering specific items in a flex container",
            },
            {
              bold: "self-start:",
              text: "Great for aligning buttons to the top of a card",
            },
            {
              bold: "self-end:",
              text: "Ideal for aligning action buttons to the bottom",
            },
            {
              bold: "Combine with gap:",
              text: "Use with spacing utilities for consistent layouts",
            },
            {
              bold: "Override align-items:",
              text: "Self properties override container alignment",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["alignment", "justify", "content"],
    title: "Justify Content",
    description:
      "Complete guide to CSS justify-content utilities for flexbox layouts. Master horizontal alignment of flex items with start, center, end, between, around, and evenly options.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Justify Content",
          description:
            "Complete guide to CSS justify-content utilities for flexbox layouts. Master horizontal alignment of flex items with start, center, end, between, around, and evenly options.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Justify Content",
          description:
            "Justify-content controls the horizontal distribution of flex items along the main axis.  It's essential for creating balanced layouts, navigation menus, button groups, and responsive designs.",
          features: [
            "Distributes space between and around flex items",
            "Works only on flex containers (display: flex)",
            "Controls main axis alignment (horizontal by default)",
            "Six main values: start, center, end, between, around, evenly",
            "Interacts with gap utilities for precise spacing control",
          ],
          layerAssignment:
            "Flexbox Layout Layer - Main axis alignment and space distribution",
          browserBehavior:
            "Browser calculates available space and distributes items according to the specified alignment rule.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Justify Content Properties Comparison",
          columns: [
            "Utility",
            "Alignment Behavior",
            "Space Distribution",
            "Best Use Cases",
          ],
          rows: [
            {
              feature: "justify-start",
              values: [
                "Items to left edge",
                "No space distribution",
                "Left-aligned nav, forms",
              ],
            },
            {
              feature: "justify-center",
              values: [
                "Items centered",
                "Equal left/right space",
                "Modal content, centered sections",
              ],
            },
            {
              feature: "justify-end",
              values: [
                "Items to right edge",
                "No space distribution",
                "Right-aligned buttons, toolbars",
              ],
            },
            {
              feature: "justify-between",
              values: [
                "Items spread out",
                "Space between only",
                "Headers, split navigation",
              ],
            },
            {
              feature: "justify-around",
              values: [
                "Items with space around",
                "Equal space around each",
                "Distributed navigation cards",
              ],
            },
            {
              feature: "justify-evenly",
              values: [
                "Perfectly even spacing",
                "Equal space everywhere",
                "Symmetric layouts, button groups",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Justify Content Utilities",
          items: [
            { cls: "justify-start", desc: "Align to left edge" },
            { cls: "justify-center", desc: "Center horizontally" },
            { cls: "justify-end", desc: "Align to right edge" },
            { cls: "justify-between", desc: "Space between items" },
            { cls: "justify-around", desc: "Space around items" },
            { cls: "justify-evenly", desc: "Equal space everywhere" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Justify Content Playground",
          description:
            "Test justify-content properties with different item configurations and see real-time effects.",
          options: [
            "justify-start",
            "justify-center",
            "justify-end",
            "justify-between",
            "justify-around",
            "justify-evenly",
          ],
          defaultValue: "justify-start",
          buildMarkup: (justifyClass: string) => {
            return `<div class="flex ${justifyClass} gap-4 p-4 border bg-slate-100">
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
</div>`;
          },
          renderPreview: (justifyClass: string) => {
            const containerClass = `flex ${justifyClass} gap-4 p-4 border border-border bg-slate-100 dark:bg-slate-900 rounded`;
            return (
              <div className={containerClass}>
                <div className="w-16 h-16 bg-blue-500 rounded shadow-sm"></div>
                <div className="w-16 h-16 bg-blue-500 rounded shadow-sm"></div>
                <div className="w-16 h-16 bg-blue-500 rounded shadow-sm"></div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Unbalanced Navbar",
          description:
            "This navigation bar has a logo on the left and a 'Sign In' button on the right, but they are currently bunching up on the left side (`justify-start`). Change the justification to `justify-between` to push them to the far edges of the container.",
          codeSnippet: `<nav class="flex {input} items-center p-4 bg-slate-900 text-white w-full rounded-xl">
  <div class="font-bold text-xl">Brand</div>
  
  <button class="bg-blue-600 px-4 py-2 rounded text-sm font-bold">
    Sign In
  </button>
</nav>`,
          options: [
            "justify-start",
            "justify-center",
            "justify-end",
            "justify-between",
          ],
          correctOption: "justify-between",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
              <nav
                className={`flex ${userClass} items-center p-4 bg-slate-900 text-white w-full max-w-md rounded-xl shadow-xl transition-all duration-500`}
              >
                <div className="font-bold text-xl flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                  Brand
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded text-sm font-bold shadow-md">
                  Sign In
                </button>
              </nav>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Split Navigation Bar",
              description:
                "Using `justify-between` to stick the logo to the left and the navigation links to the right.",
              code: `<nav class="flex justify-between items-center p-4 bg-white border-b">
  <div class="font-bold text-xl">Logo</div>
  <div class="flex gap-4">
    <a href="#">Products</a>
    <a href="#">Pricing</a>
    <a href="#">Login</a>
  </div>
</nav>`,
              preview: (
                <nav className="w-full flex justify-between items-center p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 rounded-lg">
                  <div className="font-bold text-xl text-slate-800 dark:text-white">
                    Logo
                  </div>
                  <div className="flex gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <a href="#" className="hover:text-blue-600">
                      Products
                    </a>
                    <a href="#" className="hover:text-blue-600">
                      Pricing
                    </a>
                    <a href="#" className="hover:text-blue-600">
                      Login
                    </a>
                  </div>
                </nav>
              ),
            },
            {
              title: "Centered Modal Actions",
              description:
                "Using `justify-center` to focus attention on the primary actions in a modal dialog.",
              code: `<div class="p-6 text-center">
  <h3 class="mb-4">Confirm Deletion?</h3>
  <div class="flex justify-center gap-4">
    <button class="bg-gray-200 px-4 py-2 rounded">Cancel</button>
    <button class="bg-red-600 text-white px-4 py-2 rounded">Delete</button>
  </div>
</div>`,
              preview: (
                <div className="p-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 text-center w-full max-w-xs mx-auto">
                  <h3 className="mb-4 font-semibold text-slate-800 dark:text-white">
                    Confirm Deletion?
                  </h3>
                  <div className="flex justify-center gap-4">
                    <button className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded text-sm font-medium">
                      Cancel
                    </button>
                    <button className="bg-red-600 text-white px-4 py-2 rounded text-sm font-medium">
                      Delete
                    </button>
                  </div>
                </div>
              ),
            },
            {
              title: "Form Field Alignment",
              description:
                "Using `justify-end` to align a submit button to the right of a form.",
              code: `<form class="space-y-4">
  <input type="email" class="w-full border p-2 rounded" placeholder="Email" />
  <div class="flex justify-end">
    <button class="bg-blue-600 text-white px-6 py-2 rounded">Send</button>
  </div>
</form>`,
              preview: (
                <form
                  className="w-full max-w-xs space-y-3"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2 rounded text-sm"
                    placeholder="Enter email address"
                  />
                  <div className="flex justify-end">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded text-sm font-medium shadow-sm">
                      Send
                    </button>
                  </div>
                </form>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Missing flex context",
              reason:
                "Forgetting to add `flex` class to the container prevents justification from working.",
              example: `<div class="justify-center">Not centered</div>`,
              level: "critical",
            },
            {
              title: "Conflicting margin utilities",
              reason:
                "Using `ml-auto` or `mr-auto` on a child item will override the container's `justify-content` rule.",
              example: `<div class="flex justify-center"><div class="mr-auto">Left despite justify-center</div></div>`,
              level: "warning",
            },
            {
              title: "Using float instead",
              reason:
                "Legacy `float-right` or `float-left` properties do not work inside flex containers.",
              example: `<div class="flex"><div class="float-right">❌</div></div>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Always use flex:",
              text: "Justify-content only works on flex or grid containers, never on standard block elements.",
            },
            {
              bold: "Combine with gap:",
              text: "Use `gap` utilities instead of margins to create consistent spacing between justified items.",
            },
            {
              bold: "Responsive alignment:",
              text: "You can switch alignment on mobile vs desktop, e.g., `justify-center md:justify-start`.",
            },
            {
              bold: "Container width:",
              text: "Justify-content needs available space to work. If items fill the width, you won't see any difference.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["alignment", "justify", "items"],
    title: "Justify Items",
    description:
      "Control how grid items are aligned along the inline axis (row axis) within their grid areas. This property sets the `justify-items` CSS property on a grid container.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Justify Items",
          description:
            "Control how grid items are aligned along the inline axis (row axis) within their grid areas. This property sets the `justify-items` CSS property on a grid container.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Justify Items",
          description:
            "While `justify-content` aligns the grid tracks themselves within the container, `justify-items` controls how the content *inside* each grid cell aligns relative to that cell's horizontal boundaries. ",
          features: [
            "Applies to GRID CONTAINERS (display: grid)",
            "Controls alignment along the INLINE axis (horizontal)",
            "Acts as a default for all items in the grid",
            "Individual items can override this with `justify-self-*`",
            "Default behavior is usually `stretch` unless items have intrinsic width",
          ],
          layerAssignment:
            "Grid Alignment Layer - Intra-cell horizontal positioning",
          browserBehavior:
            "The browser calculates the width of the grid column, then positions the item inside that column based on this property.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Justify Items Behavior",
          columns: ["Class", "Alignment", "Best For"],
          rows: [
            {
              feature: "justify-items-start",
              values: ["Left (LTR)", "Forms, Text content lists"],
            },
            {
              feature: "justify-items-center",
              values: ["Center", "Icons, Avatars, Status badges"],
            },
            {
              feature: "justify-items-end",
              values: ["Right (LTR)", "Financial data, Actions columns"],
            },
            {
              feature: "justify-items-stretch",
              values: ["Full Width", "Cards, Inputs, Block elements"],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Justify Items Utilities",
          items: [
            {
              cls: "justify-items-start",
              desc: "Align items to the start of their cell (left)",
            },
            {
              cls: "justify-items-end",
              desc: "Align items to the end of their cell (right)",
            },
            {
              cls: "justify-items-center",
              desc: "Align items to the center of their cell",
            },
            {
              cls: "justify-items-stretch",
              desc: "Stretch items to fill the cell width (default)",
            },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Justify Items Playground",
          description:
            "Change the justification to see items shift left, center, right, or stretch. Note: We remove fixed widths from the children when 'stretch' is selected so you can see the effect.",
          options: [
            "justify-items-start",
            "justify-items-end",
            "justify-items-center",
            "justify-items-stretch",
          ],
          defaultValue: "justify-items-stretch",
          buildMarkup: (justifyClass: string, customClasses: string = "") => {
            return `<div class="grid grid-cols-3 gap-4 ${justifyClass} ${customClasses}">
  <div class="bg-blue-500 w-16 h-16">1</div>
  <div class="bg-blue-500 w-16 h-16">2</div>
  <div class="bg-blue-500 w-16 h-16">3</div>
</div>`;
          },
          renderPreview: (justifyClass: string, customClasses: string = "") => {
            // If stretch is selected, we remove the fixed width from children to let them stretch
            const childClass =
              justifyClass === "justify-items-stretch"
                ? "bg-blue-500 dark:bg-blue-600 h-16 rounded flex items-center justify-center text-white font-bold"
                : "bg-blue-500 dark:bg-blue-600 w-16 h-16 rounded flex items-center justify-center text-white font-bold";

            return (
              <div
                className={`grid grid-cols-3 gap-4 w-full p-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg ${justifyClass} ${customClasses}`}
              >
                <div className={childClass}>1</div>
                <div className={childClass}>2</div>
                <div className={childClass}>3</div>
                <div className={childClass}>4</div>
                <div className={childClass}>5</div>
                <div className={childClass}>6</div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Off-Center Icons",
          description:
            "The dashed lines represent the grid cells (tracks). Currently, the blue icons are sticking to the start (left) of their cells, leaving empty space on the right. Apply `justify-items-center` to snap them perfectly into the center of their grid tracks.",
          codeSnippet: `<div class="grid grid-cols-3 gap-4 {input}">
  
  <button class="w-12 h-12 bg-blue-500 ...">
    <svg>...</svg>
  </button>
  <button class="w-12 h-12 bg-blue-500 ...">
    <svg>...</svg>
  </button>
</div>`,
          options: [
            "justify-items-start",
            "justify-items-center",
            "justify-items-end",
            "justify-items-stretch",
          ],
          correctOption: "justify-items-center",
          renderPreview: (userClass: string) => {
            const isCorrect = userClass === "justify-items-center";

            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg">
                <div className="relative w-64">
                  {/* Layer 1: Ghost Tracks (Visual Guide) */}
                  <div className="absolute inset-0 grid grid-cols-3 gap-4 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`
                  border-2 border-dashed rounded-xl flex items-center justify-center transition-colors duration-500
                  ${
                    isCorrect
                      ? "border-green-300 dark:border-green-800 bg-green-50/50 dark:bg-green-900/20"
                      : "border-slate-300 dark:border-slate-700"
                  }
                `}
                      >
                        {/* Center Target Dot (Only visible when wrong) */}
                        {!isCorrect && (
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full opacity-40 animate-pulse" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Layer 2: The Actual Grid Content */}
                  {/* We define fixed height rows here just for the visual demo to match the ghost tracks */}
                  <div
                    className={`grid grid-cols-3 gap-4 auto-rows-[80px] ${userClass}`}
                  >
                    {[
                      { icon: "🔧", label: "Settings" },
                      { icon: "🔨", label: "Build" },
                      { icon: "📏", label: "Measure" },
                      { icon: "📦", label: "Deploy" },
                      { icon: "🔍", label: "Inspect" },
                      { icon: "🚀", label: "Launch" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="w-12 h-12 bg-blue-500 hover:bg-blue-600 transition-all duration-500 rounded-lg flex items-center justify-center text-white text-xl shadow-md z-10"
                        title={item.label}
                      >
                        {item.icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Centered Icon Grid",
              description:
                "Perfect for dashboards or feature lists where icons should sit in the middle of their grid areas.",
              code: `<div class="grid grid-cols-3 justify-items-center gap-4">
  <div class="w-12 h-12 bg-indigo-500 rounded-full"></div>
  <div class="w-12 h-12 bg-indigo-500 rounded-full"></div>
  <div class="w-12 h-12 bg-indigo-500 rounded-full"></div>
</div>`,
              preview: (
                <div className="grid grid-cols-3 justify-items-center gap-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-sm"
                    >
                      {i}
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: "Form Labels & Inputs",
              description:
                "Using start alignment for form layouts to ensure labels line up neatly on the left.",
              code: `<form class="grid grid-cols-1 justify-items-start gap-4">
  <label class="font-bold">Email Address</label>
  <input class="w-full border rounded px-3 py-2" />
  <button class="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
</form>`,
              preview: (
                <div className="grid grid-cols-1 justify-items-start gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg w-full max-w-xs">
                  <label className="font-bold text-sm text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <div className="w-full h-8 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded"></div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium">
                    Submit
                  </button>
                </div>
              ),
            },
            {
              title: "Right-Aligned Actions",
              description:
                "Using end alignment for a column of action buttons or status indicators.",
              code: `<div class="grid grid-cols-1 justify-items-end gap-2">
  <button class="text-blue-600 text-sm">Edit</button>
  <button class="text-red-600 text-sm">Delete</button>
</div>`,
              preview: (
                <div className="grid grid-cols-1 justify-items-end gap-2 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="text-slate-500 text-xs w-full mb-1">
                    Actions
                  </div>
                  <button className="text-blue-600 hover:underline text-sm font-medium">
                    Edit Profile
                  </button>
                  <button className="text-red-600 hover:underline text-sm font-medium">
                    Delete Account
                  </button>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Confusing with justify-content",
              reason:
                "`justify-content` moves the entire grid track group. `justify-items` moves the items *inside* their tracks.",
              example: `<div class="grid justify-center"> <div class="grid justify-items-center"> `,
              level: "warning",
            },
            {
              title: "Not using grid container",
              reason:
                "`justify-items` only works on elements with `display: grid`. It has no effect on flex containers (use `align-items` for cross-axis or `justify-content` for main-axis).",
              example: `<div class="flex justify-items-center"> `,
              level: "critical",
            },
            {
              title: "Stretch issues with fixed width",
              reason:
                "If an item has a fixed width (e.g., `w-16`), `justify-items-stretch` cannot stretch it. Remove width classes to allow stretching.",
              example: `<div class="justify-items-stretch">\n  <div class="w-16">...</div> </div>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Default Behavior:",
              text: "Grid items default to `stretch` unless they have intrinsic dimensions or you specify otherwise.",
            },
            {
              bold: "Override Individual Items:",
              text: "Use `justify-self-*` on a specific child element to override the parent's `justify-items` setting.",
            },
            {
              bold: "Flexbox Equivalent:",
              text: "There is no direct `justify-items` for Flexbox. In Flexbox, you use `justify-content` (main axis) or `align-items` (cross axis).",
            },
            {
              bold: "Responsive:",
              text: "Combine with breakpoints like `md:justify-items-center` to change alignment on larger screens.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["alignment", "justify", "self"],
    title: "Justify Self",
    description:
      "Control how an individual grid item is aligned along its inline axis (row axis). This overrides the `justify-items` property set on the parent grid container.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Justify Self",
          description:
            "Control how an individual grid item is aligned along its inline axis (row axis). This overrides the `justify-items` property set on the parent grid container.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Justify Self",
          description:
            "Justify Self allows a specific grid item to break the rules set by the parent. While `justify-items` on the parent sets the default for everyone, `justify-self` on the child lets that specific child align differently. ",
          features: [
            "Applies to INDIVIDUAL GRID ITEMS",
            "Overrides parent `justify-items` setting",
            "Controls alignment along the INLINE axis (horizontal)",
            "Does NOT work in Flexbox (use `margin-auto` tricks instead)",
            "Crucial for asymmetrical layouts where one item needs to stand out",
          ],
          layerAssignment:
            "Grid Item Alignment Layer - Individual horizontal positioning",
          browserBehavior:
            "The browser checks for `justify-self` on the item first. If present, it uses that alignment. If not, it falls back to the parent's `justify-items` value.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Justify Self Strategies",
          columns: ["Class", "Alignment", "Best Use Case"],
          rows: [
            {
              feature: "justify-self-start",
              values: ["Left (Start)", "Left-aligned icons, text labels"],
            },
            {
              feature: "justify-self-center",
              values: ["Center", "Centering an image in a wide cell"],
            },
            {
              feature: "justify-self-end",
              values: ["Right (End)", "Close buttons, 'See More' links"],
            },
            {
              feature: "justify-self-stretch",
              values: ["Full Width", "Banner images, Hero sections"],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Justify Self Utilities",
          items: [
            {
              cls: "justify-self-auto",
              desc: "Default alignment; the item inherits alignment from the container.",
            },
            {
              cls: "justify-self-start",
              desc: "Aligns the item to the start of its grid cell (left in LTR).",
            },
            {
              cls: "justify-self-end",
              desc: "Aligns the item to the end of its grid cell (right in LTR).",
            },
            {
              cls: "justify-self-center",
              desc: "Centers the item horizontally within its grid cell.",
            },
            {
              cls: "justify-self-stretch",
              desc: "Stretches the item to fill the width of its grid cell.",
            },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Interactive Playground",
          description:
            "Select a class to see how it affects the alignment of the first item (blue) while others follow the container default.",
          options: [
            "justify-self-auto",
            "justify-self-start",
            "justify-self-end",
            "justify-self-center",
            "justify-self-stretch",
          ],
          defaultValue: "justify-self-auto",
          buildMarkup: (utilityClass: string) => {
            return `<div class="grid grid-cols-3 h-32 border gap-4 items-center">
  <div class="${utilityClass} w-16 h-16 bg-blue-500">1</div>
  <div class="justify-self-auto w-16 h-16 bg-blue-400">2</div>
  <div class="justify-self-auto w-16 h-16 bg-blue-400">3</div>
</div>`;
          },
          renderPreview: (utilityClass: string) => {
            const containerClasses =
              "grid grid-cols-3 h-32 border border-slate-200 dark:border-slate-700 rounded-lg p-4 gap-4 bg-slate-900 text-white items-center";
            const blockBaseClass =
              "h-16 flex items-center justify-center font-semibold rounded";

            const getBlockClass = (index: number) => {
              const color = index === 0 ? "bg-blue-500" : "bg-blue-400";
              const width =
                utilityClass === "justify-self-stretch" && index === 0
                  ? "w-full"
                  : "w-16";
              const justifySelfClass =
                index === 0 ? utilityClass : "justify-self-auto";
              return `${blockBaseClass} ${color} ${width} ${justifySelfClass}`;
            };

            return (
              <div className={containerClasses}>
                <div className={getBlockClass(0)}>1</div>
                <div className={getBlockClass(1)}>2</div>
                <div className={getBlockClass(2)}>3</div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Close Button",
          description:
            "You have a modal header with a title and a close button. They are in a 2-column grid. The title is fine, but the close button is stuck on the left side of its column. Use `justify-self-end` on the button to push it to the far right corner.",
          codeSnippet: `<div class="grid grid-cols-2 bg-white rounded-lg p-4 w-80 shadow-lg">
  <h2 class="font-bold text-lg">Settings</h2>
 
  <button class="{input} text-gray-500 hover:text-gray-700">
    ✕
  </button>
</div>`,
          options: [
            "justify-self-start",
            "justify-self-center",
            "justify-self-stretch",
            "justify-self-end",
          ],
          correctOption: "justify-self-end",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
              <div className="grid grid-cols-2 bg-white dark:bg-slate-900 rounded-xl p-6 w-80 shadow-xl border border-slate-200 dark:border-slate-800">
                <h2 className="font-bold text-lg text-slate-900 dark:text-white">
                  Settings
                </h2>

                <button
                  className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all
                  ${userClass}
                `}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="col-span-2 mt-4 space-y-2">
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                  <div className="h-2 w-3/4 bg-slate-100 dark:bg-slate-800 rounded"></div>
                </div>
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Default Grid Behavior",
              description:
                "Grid items usually stretch to fill their column unless they have a specific width set.",
              code: `<div class="grid grid-cols-1 gap-4">
  <div class="bg-blue-100 p-2">Item 1</div>
  <div class="bg-blue-100 p-2">Item 2</div>
</div>`,
              preview: (
                <div className="grid grid-cols-1 gap-4 p-4 border border-border rounded-lg bg-slate-50 dark:bg-slate-900/50 w-full max-w-xs">
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 p-2 rounded text-center text-sm">
                    Item 1 (Auto)
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 p-2 rounded text-center text-sm">
                    Item 2 (Auto)
                  </div>
                </div>
              ),
            },
            {
              title: "Card Status Badge",
              description:
                "Use start alignment to position a badge on the left, even if the column is wide.",
              code: `<div class="grid gap-2 border p-4 w-64">
  <span class="justify-self-start bg-green-100 text-green-800 px-2 rounded">
    New
  </span>
  <h3 class="font-bold">Product Name</h3>
</div>`,
              preview: (
                <div className="grid gap-2 border border-border bg-white dark:bg-slate-950 p-4 rounded-lg w-full max-w-xs shadow-sm">
                  <span className="justify-self-start bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs font-semibold px-2 py-1 rounded-full">
                    New
                  </span>
                  <div className="h-16 bg-slate-100 dark:bg-slate-800 rounded"></div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                    Ergonomic Chair
                  </h3>
                </div>
              ),
            },
            {
              title: "Modal Header",
              description:
                "Push the close button to the far right without using flexbox or floats.",
              code: `<div class="grid grid-cols-[1fr_auto] items-center border-b p-4">
  <h2 class="font-bold">Edit Settings</h2>
  <button class="justify-self-end text-gray-500">✕</button>
</div>`,
              preview: (
                <div className="w-full max-w-sm border border-border rounded-lg bg-white dark:bg-slate-950 shadow-sm overflow-hidden">
                  <div className="grid grid-cols-[1fr_auto] items-center p-3 border-b border-border bg-slate-50 dark:bg-slate-900">
                    <h2 className="font-bold text-sm">Edit Settings</h2>
                    <button className="justify-self-end text-slate-400 hover:text-slate-600 w-6 h-6 flex items-center justify-center rounded hover:bg-slate-200 dark:hover:bg-slate-800 transition">
                      ✕
                    </button>
                  </div>
                  <div className="p-4 h-16 bg-white dark:bg-slate-950"></div>
                </div>
              ),
            },
            {
              title: "Pricing Row",
              description: "Keep the price tag aligned to the end of the row.",
              code: `<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center p-2 border">
  <img src="..." class="w-8 h-8 rounded" />
  <span>Pro Plan</span>
  <span class="justify-self-end font-bold">$29</span>
</div>`,
              preview: (
                <div className="grid grid-cols-[auto_1fr_auto] gap-3 items-center p-3 border border-border rounded bg-white dark:bg-slate-900 shadow-sm w-full max-w-sm">
                  <div className="w-8 h-8 rounded bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600">
                    ★
                  </div>
                  <span className="font-medium text-sm">Pro Plan</span>
                  <span className="justify-self-end font-bold text-slate-700 dark:text-slate-200">
                    $29
                  </span>
                </div>
              ),
            },
            {
              title: "Centered Avatar",
              description:
                "Center an element horizontally relative to its grid area.",
              code: `<div class="grid w-32 border p-4">
  <div class="justify-self-center w-12 h-12 rounded-full bg-gray-200"></div>
  <span class="justify-self-center mt-2 text-xs">Admin</span>
</div>`,
              preview: (
                <div className="grid w-32 p-4 border border-border rounded bg-white dark:bg-slate-900 shadow-sm">
                  <div className="justify-self-center w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xl">
                    👨‍💻
                  </div>
                  <span className="justify-self-center mt-2 text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                    Admin
                  </span>
                </div>
              ),
            },
            {
              title: "Full-width Button",
              description: "Force a button to fill the entire grid cell width.",
              code: `<div class="grid p-4 border w-64">
  <p>Confirm action?</p>
  <button class="justify-self-stretch bg-red-500 text-white">
    Delete
  </button>
</div>`,
              preview: (
                <div className="grid gap-3 p-4 border border-border rounded bg-white dark:bg-slate-900 w-full max-w-xs shadow-sm">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    Confirm deletion?
                  </p>
                  <button className="justify-self-stretch px-3 py-1.5 text-xs bg-red-600 text-white rounded hover:bg-red-700 transition font-medium">
                    Delete Everything
                  </button>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using on Flex Items",
              reason:
                "`justify-self` has NO effect on Flexbox children. Use `margin-left: auto` or `margin-right: auto` for similar behavior in Flexbox.",
              example: `<div class="flex">\n  <div class="justify-self-end">Won't work</div> \n</div>`,
              level: "critical",
            },
            {
              title: "Using on Container",
              reason:
                "This property belongs on the CHILD item, not the parent container. Use `justify-items` on the parent instead.",
              example: `<div class="grid justify-self-center"> <div>Item</div>\n</div>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Flexbox Alternative:",
              text: "In Flexbox, `justify-self` doesn't exist. To push a single flex item to the end, use `ml-auto` (margin-left: auto).",
            },
            {
              bold: "Vertical Alignment:",
              text: "For vertical alignment (block axis), use `align-self` instead.",
            },
            {
              bold: "Responsive:",
              text: "Use responsive prefixes like `md:justify-self-end` to change alignment on larger screens (e.g., center on mobile, right on desktop).",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["alignment", "place", "content"],
    title: "Place Content",
    description:
      "The ultimate shorthand for positioning. Control both `align-content` and `justify-content` at the same time to pack rows and columns exactly where you want them in a grid or multi-line flex container.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Place Content",
          description:
            "The ultimate shorthand for positioning. Control both `align-content` and `justify-content` at the same time to pack rows and columns exactly where you want them in a grid or multi-line flex container.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "The 2D Packer",
          description:
            "Think of `place-content` as a 'Gravity Controller' for your layout. It grabs the entire block of content (all your grid cells or wrapped flex rows) and moves that entire block within the container.  It answers the question: 'Where should this cluster of stuff sit inside this big box?'",
          features: [
            "Shorthand for `align-content` (Vertical/Cross) + `justify-content` (Horizontal/Main)",
            "Mostly used in CSS Grid layouts",
            "Works in Flexbox ONLY if `flex-wrap: wrap` is on and there are multiple lines",
            "Moves the group of items, not the items relative to each other (unless spacing is used)",
          ],
          layerAssignment:
            "Layout Layer - Macro-level positioning of the entire content content block",
          browserBehavior:
            "Sets the `place-content` CSS property, which maps to `align-content` and `justify-content` simultaneously.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Placement vs Alignment",
          columns: ["Property", "Axis Controlled", "Target", "Best For"],
          rows: [
            {
              feature: "place-content",
              values: [
                "Both X & Y",
                "Content Block",
                "Centering a grid in a page",
              ],
            },
            {
              feature: "place-items",
              values: [
                "Both X & Y",
                "Individual Items",
                "Centering content inside cells",
              ],
            },
            {
              feature: "justify-content",
              values: [
                "Main / Inline",
                "Content Distribution",
                "Spacing buttons in a row",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Place Content Utilities",
          items: [
            {
              cls: "place-content-center",
              desc: "Pack items in center (Both axes)",
            },
            {
              cls: "place-content-start",
              desc: "Pack items at start (Both axes)",
            },
            { cls: "place-content-end", desc: "Pack items at end (Both axes)" },
            {
              cls: "place-content-between",
              desc: "Space between items (Both axes)",
            },
            {
              cls: "place-content-around",
              desc: "Space around items (Both axes)",
            },
            { cls: "place-content-evenly", desc: "Even spacing (Both axes)" },
            {
              cls: "place-content-stretch",
              desc: "Stretch to fill (Both axes)",
            },
          ],
          prefix: "",
        },
      },
      {
        type: "playground",
        props: {
          title: "Place Content Playground",
          description:
            "See how the entire content block moves within the container space. Note: The container must be larger than the content for this to work.",
          options: [
            "place-content-center",
            "place-content-start",
            "place-content-end",
            "place-content-between",
            "place-content-around",
            "place-content-stretch",
          ],
          defaultValue: "place-content-center",
          buildMarkup: (value: string) => {
            return `<div class="grid grid-cols-3 gap-4 h-64 ${value} bg-slate-100">
  <div class="w-12 h-12 bg-blue-500"></div>
  <div class="w-12 h-12 bg-blue-500"></div>
  <div class="w-12 h-12 bg-blue-500"></div>
</div>`;
          },
          renderPreview: (value: string) => (
            <div
              className={`grid grid-cols-3 gap-4 h-64 ${value} bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-4`}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-blue-500 rounded shadow-sm flex items-center justify-center text-white font-bold text-xs"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          ),
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Hero Grid",
          description:
            "You are building a hero section with a 2x2 grid of partner logos. Currently, the logos are stuck in the top-left corner of the gray hero area. Use `place-content-center` to move the entire grid of logos to the dead center of the container.",
          codeSnippet: `<div class="grid grid-cols-2 h-64 bg-slate-900 gap-4 {input}">
  <div class="logo-box">Logo 1</div>
  <div class="logo-box">Logo 2</div>
  <div class="logo-box">Logo 3</div>
  <div class="logo-box">Logo 4</div>
</div>`,
          options: [
            "place-items-center",
            "justify-center",
            "content-center",
            "place-content-center",
          ],
          correctOption: "place-content-center",
          renderPreview: (userClass: string) => (
            <div className="w-full max-w-lg h-64 bg-slate-900 rounded-xl overflow-hidden relative">
              <div className="absolute top-2 left-2 text-[10px] text-slate-500 font-mono">
                h-64 container
              </div>
              {/* The Grid Container */}
              <div className={`grid grid-cols-2 gap-4 h-full p-4 ${userClass}`}>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center text-white/50 border border-white/5"
                  >
                    L{i}
                  </div>
                ))}
              </div>
              {/* Visual Helpers */}
              {userClass === "place-content-center" && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[152px] h-[152px] border-2 border-green-500/30 rounded-xl"></div>
                </div>
              )}
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Centered Error Page",
              description:
                "The easiest way to center a grid of error content (icon, text, button) in the middle of the screen.",
              code: `<div class="grid h-screen place-content-center text-center gap-4">
  <div class="text-6xl">404</div>
  <h1 class="text-2xl font-bold">Page not found</h1>
  <button>Go Home</button>
</div>`,
              preview: (
                <div className="h-48 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 grid place-content-center text-center gap-2">
                  <div className="text-4xl">🚧</div>
                  <h3 className="font-bold text-slate-700 dark:text-slate-200">
                    Coming Soon
                  </h3>
                  <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                    Notify Me
                  </button>
                </div>
              ),
            },
            {
              title: "Spaced App Icons",
              description:
                "Using `place-content-between` to push groups of icons to the edges of a container.",
              code: `<div class="grid grid-cols-3 h-32 place-content-between">
  <div>A</div><div>B</div><div>C</div>
  
  <div>X</div><div>Y</div><div>Z</div>
</div>`,
              preview: (
                <div className="h-32 bg-slate-100 dark:bg-slate-800 p-4 rounded-lg grid grid-cols-3 gap-4 place-content-between">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={`top-${i}`}
                      className="h-8 bg-white dark:bg-slate-700 rounded shadow-sm"
                    ></div>
                  ))}
                  {[1, 2, 3].map((i) => (
                    <div
                      key={`bot-${i}`}
                      className="h-8 bg-blue-100 dark:bg-blue-900 rounded shadow-sm"
                    ></div>
                  ))}
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using on Flexbox without Wrap",
              reason:
                "`place-content` includes `align-content`, which only works in Flexbox if `flex-wrap: wrap` is present and there are multiple lines.",
              example: `<div class="flex place-content-center">...</div> `,
              level: "warning",
            },
            {
              title: "Confusing with Place Items",
              reason:
                "`place-content` moves the WHOLE block of items. `place-items` aligns items INSIDE their specific grid cells.",
              example: `<div class="grid place-content-center"> `,
              level: "info",
            },
            {
              title: "No Container Height",
              reason:
                "If the container height fits the content exactly, there is no extra space to 'place' the content into. The property will appear to do nothing.",
              example: `<div class="grid place-content-center h-auto">...</div> `,
              level: "critical",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "The Ultimate Center:",
              text: "`grid place-content-center` is the modern, 2-property way to perfectly center everything (block + inline axes) in a container.",
            },
            {
              bold: "Gap Awareness:",
              text: "`place-content` respects your `gap` settings. It moves the items and their gaps as one cohesive unit.",
            },
            {
              bold: "Grid Tracks:",
              text: "Remember, this moves the Grid Tracks themselves inside the container, not just the HTML elements.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["alignment", "place", "items"],
    title: "Place Items",
    description:
      "Control how items are aligned within their specific grid cells. This is the shorthand for `align-items` (vertical) and `justify-items` (horizontal) at the same time.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Place Items",
          description:
            "Control how items are aligned within their specific grid cells. This is the shorthand for `align-items` (vertical) and `justify-items` (horizontal) at the same time.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "The Cell Manager",
          description:
            "While `place-content` moves the whole grid layout, `place-items` controls exactly where the content sits *inside* each individual grid cell. It allows you to center-align every single cell's content with just one class on the parent.",
          features: [
            "Shorthand for `align-items` + `justify-items`",
            "Primarily used in CSS Grid layouts",
            "Controls position within the allocated cell area",
            "Default behavior is `stretch` (fill the cell)",
            "Perfect for grids of cards, icons, or avatars",
          ],
          layerAssignment:
            "Layout Layer - Micro-positioning of items within their grid tracks",
          browserBehavior:
            "Sets the `place-items` property on the container, which instructs all direct children how to align themselves within their grid areas.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Place Items vs Place Content",
          columns: ["Property", "Scope", "Analogy", "Typical Use"],
          rows: [
            {
              feature: "place-items",
              values: [
                "Inside each Cell",
                "Centering the text on a button",
                "Centering content inside grid cards",
              ],
            },
            {
              feature: "place-content",
              values: [
                "The Whole Grid",
                "Centering the button group on the page",
                "Centering a grid layout on the screen",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Place Items Utilities",
          items: [
            {
              cls: "place-items-center",
              desc: "Center items in their grid cells",
            },
            {
              cls: "place-items-start",
              desc: "Align items to start (top-left)",
            },
            {
              cls: "place-items-end",
              desc: "Align items to end (bottom-right)",
            },
            {
              cls: "place-items-stretch",
              desc: "Stretch items to fill cells (Default)",
            },
            { cls: "place-items-baseline", desc: "Align text baselines" },
          ],
          prefix: "",
        },
      },
      {
        type: "playground",
        props: {
          title: "Place Items Playground",
          description:
            "See how items align within their grid cells. Notice how `stretch` fills the space, while `center` shrinks the item to its content size.",
          options: [
            "place-items-center",
            "place-items-start",
            "place-items-end",
            "place-items-stretch",
          ],
          defaultValue: "place-items-center",
          buildMarkup: (value: string) => {
            return `<div class="grid grid-cols-2 gap-4 h-64 ${value} bg-slate-100">
  <div class="bg-blue-500 p-4">1</div>
  <div class="bg-blue-500 p-4">2</div>
  <div class="bg-blue-500 p-4">3</div>
  <div class="bg-blue-500 p-4">4</div>
</div>`;
          },
          renderPreview: (value: string) => (
            <div
              className={`grid grid-cols-2 gap-4 h-64 ${value} bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-4`}
            >
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-blue-500 text-white p-4 rounded shadow-sm font-bold flex items-center justify-center"
                >
                  Cell {i}
                </div>
              ))}
            </div>
          ),
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Unruly Dashboard",
          description:
            "You have a dashboard grid. The cards have different heights, but you want the icons inside them to be perfectly centered in their respective cells. Currently, they are stretching to fill the cell height. Apply `place-items-center` to the grid container to center everything instantly.",
          codeSnippet: `<div class="grid grid-cols-3 gap-4 h-48 bg-slate-100 p-4 {input}">
  <div class="card">Icon 1</div>
  <div class="card">Icon 2</div>
  <div class="card">Icon 3</div>
</div>`,
          options: [
            "place-content-center",
            "items-center",
            "place-items-center",
            "justify-center",
          ],
          correctOption: "place-items-center",
          renderPreview: (userClass: string) => (
            <div className="w-full max-w-lg h-56 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 overflow-hidden relative">
              <div className="absolute top-2 left-2 text-[10px] text-slate-400 font-mono">
                Grid Container
              </div>

              <div className={`grid grid-cols-3 gap-4 h-full ${userClass}`}>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-slate-800 border-2 border-indigo-100 dark:border-indigo-900 rounded-lg p-4 shadow-sm text-indigo-600 dark:text-indigo-400 font-bold flex flex-col justify-center items-center text-center"
                    style={
                      userClass === "place-items-stretch" || userClass === ""
                        ? {}
                        : { width: "80px", height: "80px" }
                    }
                  >
                    <span>Icon {i}</span>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Feature Icons Grid",
              description:
                "A 3x3 grid of feature icons where every icon is perfectly centered in its square.",
              code: `<div class="grid grid-cols-3 gap-4 place-items-center">
  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">🚀</div>
  <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">🛡️</div>
  <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">⚡</div>
  </div>`,
              preview: (
                <div className="grid grid-cols-3 gap-4 place-items-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  {["🚀", "🛡️", "⚡", "📱", "☁️", "🔒"].map((icon, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-lg hover:scale-110 transition-transform cursor-pointer"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: "Avatar Stack Alignment",
              description:
                "Using `place-items-end` to align avatars to the bottom-right of their cells in a user list.",
              code: `<div class="grid grid-cols-4 gap-2 place-items-end h-20">
  <img src="u1.jpg" class="w-8 h-8 rounded-full" />
  <img src="u2.jpg" class="w-8 h-8 rounded-full" />
  <img src="u3.jpg" class="w-8 h-8 rounded-full" />
  <img src="u4.jpg" class="w-8 h-8 rounded-full" />
</div>`,
              preview: (
                <div className="grid grid-cols-4 gap-2 place-items-end h-20 bg-slate-50 dark:bg-slate-900 rounded p-2 border border-dashed border-slate-300 dark:border-slate-700">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white shadow-sm"
                    ></div>
                  ))}
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using on Flex Containers",
              reason:
                "`place-items` is primarily a Grid property. In Flexbox, it doesn't work consistently across all browsers (Flexbox uses `align-items` and `justify-content`).",
              example: `<div class="flex place-items-center">...</div> `,
              level: "warning",
            },
            {
              title: "Confusing with Place Content",
              reason:
                "`place-items` aligns the item INSIDE the cell. `place-content` moves the CELL inside the grid container.",
              example: `<div class="grid place-items-center"> `,
              level: "info",
            },
            {
              title: "Assuming it Centers Vertically only",
              reason:
                "`place-items` is a shorthand for BOTH axes (X and Y). If you only want vertical centering, stick to `items-center`.",
              example: `<div class="grid place-items-center"> `,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "The 'Dead Center' Trick:",
              text: "For a full-page hero section, `grid place-items-center h-screen` is the fastest way to center content perfectly in the viewport.",
            },
            {
              bold: "Override Specific Items:",
              text: "You can set `place-items-center` on the parent, but override a specific child with `place-self-end`.",
            },
            {
              bold: "Stretch Default:",
              text: "Grid items default to `stretch`. If your images or buttons look stretched out, adding `place-items-start` allows them to shrink to their natural size.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["alignment", "place", "self"],
    title: "Place Self",
    description:
      "Control how a single item aligns itself within its grid cell. This shorthand sets both `align-self` and `justify-self` at once, giving you precise control over one item without affecting its siblings.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Place Self",
          description:
            "Control how a single item aligns itself within its grid cell. This shorthand sets both `align-self` and `justify-self` at once, giving you precise control over one item without affecting its siblings.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "The Grid Rebel",
          description:
            "Most items in a grid follow the rules set by `place-items` on the container. `place-self` is for the rebels. It lets a specific grid item break rank and position itself differently—like pinning a notification badge to the top-right corner while everything else is centered. ",
          features: [
            "Shorthand for `align-self` + `justify-self`",
            "Applied to individual Grid Items (children)",
            "Overrides the container's `place-items` value",
            "Controls positioning within the specific grid cell",
            "Essential for badges, close buttons, and unique cell layouts",
          ],
          layerAssignment:
            "Layout Layer - Override positioning for a specific grid child",
          browserBehavior:
            "The browser calculates the item's grid area first, then positions the item within that area based on the place-self values.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Place Self vs Place Items",
          columns: ["Property", "Applied To", "Scope", "Common Use"],
          rows: [
            {
              feature: "place-items",
              values: [
                "Grid Container",
                "All Children",
                "Default alignment for the whole grid",
              ],
            },
            {
              feature: "place-self",
              values: [
                "Grid Item",
                "Specific Item",
                "Overriding alignment for one cell",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Place Self Utilities",
          items: [
            { cls: "place-self-auto", desc: "Inherit container alignment" },
            { cls: "place-self-start", desc: "Align to start (top-left)" },
            { cls: "place-self-end", desc: "Align to end (bottom-right)" },
            { cls: "place-self-center", desc: "Center in both axes" },
            { cls: "place-self-stretch", desc: "Stretch to fill (Default)" },
          ],
          prefix: "",
        },
      },
      {
        type: "playground",
        props: {
          title: "Place Self Playground",
          description:
            "See how a single item (Target) moves within its grid cell, while other items remain in their default positions.",
          options: [
            "place-self-auto",
            "place-self-start",
            "place-self-end",
            "place-self-center",
            "place-self-stretch",
          ],
          defaultValue: "place-self-center",
          buildMarkup: (value: string) => {
            return `<div class="grid grid-cols-2 gap-4 h-64 bg-slate-100 p-4">
  <div class="bg-blue-300">1 (Default)</div>
  <div class="bg-blue-500 text-white ${value}">2 (${value})</div>
  <div class="bg-blue-300">3 (Default)</div>
  <div class="bg-blue-300">4 (Default)</div>
</div>`;
          },
          renderPreview: (value: string) => (
            <div className="grid grid-cols-2 gap-4 h-64 bg-slate-100 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="bg-blue-200 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-800 dark:text-blue-200 font-medium">
                1
              </div>

              {/* The Target Item */}
              <div
                className={`${value} bg-indigo-600 text-white p-4 rounded shadow-lg font-bold flex items-center justify-center text-center`}
              >
                Target
              </div>

              <div className="bg-blue-200 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-800 dark:text-blue-200 font-medium">
                3
              </div>
              <div className="bg-blue-200 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-800 dark:text-blue-200 font-medium">
                4
              </div>
            </div>
          ),
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Corner Badge",
          description:
            "You have a product card with a 'New' badge. The grid cell for the badge covers the whole card image area (thanks to grid overlap). Currently, the badge is stretching to fill the whole area. Use `place-self-start` (top-left) to pin it to the corner.",
          codeSnippet: `<div class="grid grid-cols-1 grid-rows-1 w-64 h-64 border rounded-lg overflow-hidden">
  <img src="product.jpg" class="col-start-1 row-start-1 w-full h-full object-cover" />
  
  <div class="col-start-1 row-start-1 bg-red-500 text-white px-3 py-1 rounded {input}">
    NEW
  </div>
</div>`,
          options: [
            "place-self-auto",
            "place-self-center",
            "place-self-start",
            "place-self-end",
          ],
          correctOption: "place-self-start",
          renderPreview: (userClass: string) => (
            <div className="w-full max-w-sm h-64 flex items-center justify-center">
              <div className="relative grid grid-cols-1 grid-rows-1 w-48 h-48 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                {/* Background Layer */}
                <div className="col-start-1 row-start-1 bg-slate-200 dark:bg-slate-800 w-full h-full flex items-center justify-center text-slate-400">
                  Product Image
                </div>

                {/* Badge Layer */}
                <div
                  className={`col-start-1 row-start-1 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded shadow-sm ${userClass} m-2`}
                  style={
                    userClass.includes("stretch") || userClass.includes("auto")
                      ? {
                          height: "100%",
                          width: "100%",
                          margin: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                      : {}
                  }
                >
                  NEW
                </div>
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Modal Close Button",
              description:
                "In a modal header grid, use `place-self-end` to pin the close button to the far right, regardless of the title's position.",
              code: `<div class="grid grid-cols-[1fr_auto] items-center gap-4 border-b p-4">
  <h2 class="font-bold text-lg">Settings</h2>
  <button class="place-self-end text-gray-500 hover:text-red-500">
    ✕
  </button>
</div>`,
              preview: (
                <div className="w-full max-w-sm bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-slate-100 dark:border-slate-700 p-4">
                    <h2 className="font-bold text-slate-800 dark:text-slate-100">
                      Settings
                    </h2>
                    <button className="place-self-end text-slate-400 hover:text-red-500 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
                      ✕
                    </button>
                  </div>
                  <div className="p-4 h-20 bg-slate-50 dark:bg-slate-900/50"></div>
                </div>
              ),
            },
            {
              title: "Overlay Text Positioning",
              description:
                "Using a 1x1 grid stack to overlay text on an image. `place-self-center` centers the text perfectly over the image.",
              code: `<div class="grid grid-cols-1 grid-rows-1">
  <img src="banner.jpg" class="col-start-1 row-start-1 w-full h-32 object-cover" />
  
  <div class="col-start-1 row-start-1 place-self-center bg-black/50 text-white p-2 rounded">
    Centered Title
  </div>
</div>`,
              preview: (
                <div className="grid grid-cols-1 grid-rows-1 rounded-lg overflow-hidden w-full max-w-sm">
                  <div className="col-start-1 row-start-1 w-full h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <div className="col-start-1 row-start-1 place-self-center bg-black/40 text-white font-bold px-4 py-2 rounded backdrop-blur-sm">
                    Centered Overlay
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using on Flex Items",
              reason:
                "`place-self` is primarily for CSS Grid. While `align-self` works in Flexbox, `justify-self` (horizontal) is ignored in Flexbox. Use margin auto for horizontal alignment in Flexbox.",
              example: `<div class="flex"><div class="place-self-end">...</div></div> `,
              level: "warning",
            },
            {
              title: "Confusing with Place Items",
              reason:
                "`place-items` goes on the container (parent). `place-self` goes on the item (child).",
              example: `<div class="grid place-self-center">...</div> `,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Grid Stacking:",
              text: "The most powerful use of `place-self` is when stacking items in the same grid cell (e.g., `col-start-1 row-start-1`). It acts like absolute positioning but relative to the grid track!",
            },
            {
              bold: "Auto Margins Alternative:",
              text: "In many cases, `margin: auto` (e.g., `mx-auto`) achieves a similar 'centering' effect, but `place-self` is more semantic for Grid layouts.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["alignment", "place", "self"],
    title: "Place Self",
    description:
      "Control how a single item aligns itself within its grid cell. This shorthand sets both `align-self` and `justify-self` at once, giving you precise control over one item without affecting its siblings.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Place Self",
          description:
            "Control how a single item aligns itself within its grid cell. This shorthand sets both `align-self` and `justify-self` at once, giving you precise control over one item without affecting its siblings.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "The Grid Rebel",
          description:
            "Most items in a grid follow the rules set by `place-items` on the container. `place-self` is for the rebels. It lets a specific grid item break rank and position itself differently—like pinning a notification badge to the top-right corner while everything else is centered. ",
          features: [
            "Shorthand for `align-self` + `justify-self`",
            "Applied to individual Grid Items (children)",
            "Overrides the container's `place-items` value",
            "Controls positioning within the specific grid cell",
            "Essential for badges, close buttons, and unique cell layouts",
          ],
          layerAssignment:
            "Layout Layer - Override positioning for a specific grid child",
          browserBehavior:
            "The browser calculates the item's grid area first, then positions the item within that area based on the place-self values.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Place Self vs Place Items",
          columns: ["Property", "Applied To", "Scope", "Common Use"],
          rows: [
            {
              feature: "place-items",
              values: [
                "Grid Container",
                "All Children",
                "Default alignment for the whole grid",
              ],
            },
            {
              feature: "place-self",
              values: [
                "Grid Item",
                "Specific Item",
                "Overriding alignment for one cell",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Place Self Utilities",
          items: [
            { cls: "place-self-auto", desc: "Inherit container alignment" },
            { cls: "place-self-start", desc: "Align to start (top-left)" },
            { cls: "place-self-end", desc: "Align to end (bottom-right)" },
            { cls: "place-self-center", desc: "Center in both axes" },
            { cls: "place-self-stretch", desc: "Stretch to fill (Default)" },
          ],
          prefix: "",
        },
      },
      {
        type: "playground",
        props: {
          title: "Place Self Playground",
          description:
            "See how a single item (Target) moves within its grid cell, while other items remain in their default positions.",
          options: [
            "place-self-auto",
            "place-self-start",
            "place-self-end",
            "place-self-center",
            "place-self-stretch",
          ],
          defaultValue: "place-self-center",
          buildMarkup: (value: string) => {
            return `<div class="grid grid-cols-2 gap-4 h-64 bg-slate-100 p-4">
  <div class="bg-blue-300">1 (Default)</div>
  <div class="bg-blue-500 text-white ${value}">2 (${value})</div>
  <div class="bg-blue-300">3 (Default)</div>
  <div class="bg-blue-300">4 (Default)</div>
</div>`;
          },
          renderPreview: (value: string) => (
            <div className="grid grid-cols-2 gap-4 h-64 bg-slate-100 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="bg-blue-200 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-800 dark:text-blue-200 font-medium">
                1
              </div>

              {/* The Target Item */}
              <div
                className={`${value} bg-indigo-600 text-white p-4 rounded shadow-lg font-bold flex items-center justify-center text-center`}
              >
                Target
              </div>

              <div className="bg-blue-200 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-800 dark:text-blue-200 font-medium">
                3
              </div>
              <div className="bg-blue-200 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-800 dark:text-blue-200 font-medium">
                4
              </div>
            </div>
          ),
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Corner Badge",
          description:
            "You have a product card with a 'New' badge. The grid cell for the badge covers the whole card image area (thanks to grid overlap). Currently, the badge is stretching to fill the whole area. Use `place-self-start` (top-left) to pin it to the corner.",
          codeSnippet: `<div class="grid grid-cols-1 grid-rows-1 w-64 h-64 border rounded-lg overflow-hidden">
  <img src="product.jpg" class="col-start-1 row-start-1 w-full h-full object-cover" />
  
  <div class="col-start-1 row-start-1 bg-red-500 text-white px-3 py-1 rounded {input}">
    NEW
  </div>
</div>`,
          options: [
            "place-self-auto",
            "place-self-center",
            "place-self-start",
            "place-self-end",
          ],
          correctOption: "place-self-start",
          renderPreview: (userClass: string) => (
            <div className="w-full max-w-sm h-64 flex items-center justify-center">
              <div className="relative grid grid-cols-1 grid-rows-1 w-48 h-48 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                {/* Background Layer */}
                <div className="col-start-1 row-start-1 bg-slate-200 dark:bg-slate-800 w-full h-full flex items-center justify-center text-slate-400">
                  Product Image
                </div>

                {/* Badge Layer */}
                <div
                  className={`col-start-1 row-start-1 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded shadow-sm ${userClass} m-2`}
                  style={
                    userClass.includes("stretch") || userClass.includes("auto")
                      ? {
                          height: "100%",
                          width: "100%",
                          margin: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                      : {}
                  }
                >
                  NEW
                </div>
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Modal Close Button",
              description:
                "In a modal header grid, use `place-self-end` to pin the close button to the far right, regardless of the title's position.",
              code: `<div class="grid grid-cols-[1fr_auto] items-center gap-4 border-b p-4">
  <h2 class="font-bold text-lg">Settings</h2>
  <button class="place-self-end text-gray-500 hover:text-red-500">
    ✕
  </button>
</div>`,
              preview: (
                <div className="w-full max-w-sm bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-slate-100 dark:border-slate-700 p-4">
                    <h2 className="font-bold text-slate-800 dark:text-slate-100">
                      Settings
                    </h2>
                    <button className="place-self-end text-slate-400 hover:text-red-500 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
                      ✕
                    </button>
                  </div>
                  <div className="p-4 h-20 bg-slate-50 dark:bg-slate-900/50"></div>
                </div>
              ),
            },
            {
              title: "Overlay Text Positioning",
              description:
                "Using a 1x1 grid stack to overlay text on an image. `place-self-center` centers the text perfectly over the image.",
              code: `<div class="grid grid-cols-1 grid-rows-1">
  <img src="banner.jpg" class="col-start-1 row-start-1 w-full h-32 object-cover" />
  
  <div class="col-start-1 row-start-1 place-self-center bg-black/50 text-white p-2 rounded">
    Centered Title
  </div>
</div>`,
              preview: (
                <div className="grid grid-cols-1 grid-rows-1 rounded-lg overflow-hidden w-full max-w-sm">
                  <div className="col-start-1 row-start-1 w-full h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <div className="col-start-1 row-start-1 place-self-center bg-black/40 text-white font-bold px-4 py-2 rounded backdrop-blur-sm">
                    Centered Overlay
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using on Flex Items",
              reason:
                "`place-self` is primarily for CSS Grid. While `align-self` works in Flexbox, `justify-self` (horizontal) is ignored in Flexbox. Use margin auto for horizontal alignment in Flexbox.",
              example: `<div class="flex"><div class="place-self-end">...</div></div> `,
              level: "warning",
            },
            {
              title: "Confusing with Place Items",
              reason:
                "`place-items` goes on the container (parent). `place-self` goes on the item (child).",
              example: `<div class="grid place-self-center">...</div> `,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Grid Stacking:",
              text: "The most powerful use of `place-self` is when stacking items in the same grid cell (e.g., `col-start-1 row-start-1`). It acts like absolute positioning but relative to the grid track!",
            },
            {
              bold: "Auto Margins Alternative:",
              text: "In many cases, `margin: auto` (e.g., `mx-auto`) achieves a similar 'centering' effect, but `place-self` is more semantic for Grid layouts.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["background", "color"],
    title: "Background Color",
    description:
      "Utilities for controlling an element's background color. Establish visual hierarchy, brand identity, and user experience through element filling.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Background Color",
          description:
            "Utilities for controlling an element's background color. Establish visual hierarchy, brand identity, and user experience through element filling.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Background Colors",
          description:
            "Background colors establish visual hierarchy, brand identity, and user experience through element filling.  They sit on the bottom layer of the element, behind the content and borders.",
          features: [
            "Colors create emotional responses and guide user attention",
            "Semantic tokens (bg-card, bg-background) adapt to themes",
            "Contrast is critical for accessibility and readability",
            "Hover states provide essential interactive feedback",
          ],
          layerAssignment:
            "Background Layer - Visual foundation beneath content",
          browserBehavior:
            "Browser fills element background with solid color or gradient, overriding any default background.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Background Approaches Comparison",
          columns: ["Method", "Control", "Accessibility", "Best For"],
          rows: [
            {
              feature: "bg-color",
              values: [
                "Specific color",
                "Direct control",
                "Check contrast",
                "Accents, states",
              ],
            },
            {
              feature: "bg-white/black",
              values: [
                "Extremes",
                "Simple",
                "High contrast",
                "Base backgrounds",
              ],
            },
            {
              feature: "Semantic tokens",
              values: [
                "Theme-aware",
                "Indirect",
                "Automatic",
                "Design systems",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Common Background Classes",
          items: [
            { cls: "bg-white", desc: "White background" },
            { cls: "bg-black", desc: "Black background" },
            { cls: "bg-slate-500", desc: "Slate gray background" },
            { cls: "bg-red-500", desc: "Red background" },
            { cls: "bg-blue-500", desc: "Blue background" },
            { cls: "bg-transparent", desc: "Transparent background" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Background Color Playground",
          description:
            "Experiment with different background colors and text combinations.",
          options: [
            "bg-red-500",
            "bg-orange-500",
            "bg-yellow-500",
            "bg-green-500",
            "bg-teal-500",
            "bg-blue-500",
            "bg-indigo-500",
            "bg-purple-500",
            "bg-pink-500",
            "bg-gray-500",
            "bg-slate-700",
            "bg-zinc-700",
            "bg-neutral-700",
            "bg-stone-700",
            "bg-white",
            "bg-black",
          ],
          defaultValue: "bg-blue-600",
          buildMarkup: (colorClass: string) => {
            return `<div class="${colorClass} h-32 w-full flex items-center justify-center text-white font-bold rounded-lg">
  Background Color Demo
</div>`;
          },
          renderPreview: (colorClass: string) => {
            return (
              <div
                className={`text-white font-semibold rounded-lg h-32 w-full flex items-center justify-center transition-colors ${colorClass}`}
              >
                Background Color Demo
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Ghost Button",
          description:
            "You have a primary 'Sign Up' button. The text is set to white (`text-white`), but the background color is missing! This makes the button text invisible against the white card background. Apply `bg-blue-600` to reveal the button and invite interaction.",
          codeSnippet: `<div class="p-8 bg-white rounded-xl shadow-lg text-center">
  <h2 class="text-xl font-bold mb-4">Join Us Today</h2>
  
  <button class="px-6 py-3 rounded-lg text-white font-semibold {input}">
    Create Account
  </button>
</div>`,
          options: ["bg-transparent", "bg-white", "bg-blue-600", "border-2"],
          correctOption: "bg-blue-600",
          renderPreview: (userClass: string) => (
            <div className="w-full h-64 bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-4">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-xl text-center w-64 border border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6">
                  Join Us Today
                </h3>
                <button
                  className={`px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 w-full ${userClass} ${
                    userClass === "bg-transparent" ||
                    userClass === "bg-white" ||
                    userClass === "border-2"
                      ? "ring-2 ring-red-400 ring-offset-2 ring-offset-white dark:ring-offset-slate-900"
                      : "shadow-md hover:scale-105"
                  }`}
                >
                  Create Account
                </button>
                {userClass !== "bg-blue-600" && (
                  <p className="text-xs text-red-500 mt-2 font-medium">
                    Where did the button go?
                  </p>
                )}
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Status Badge",
              description:
                "Color-coded status indicators using background colors with varying opacity or lightness.",
              code: `<div class="flex gap-2">
  <div class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Active</div>
  <div class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Error</div>
  <div class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Pending</div>
</div>`,
              preview: (
                <div className="flex gap-2">
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Active
                  </div>
                  <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                    Error
                  </div>
                  <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    Pending
                  </div>
                </div>
              ),
            },
            {
              title: "Card System",
              description:
                "Semantic card backgrounds `bg-card` that automatically adapt to light and dark themes.",
              code: `<div class="bg-card p-6 rounded-lg shadow-lg">
  <h3 class="text-lg font-semibold">Card Title</h3>
  <p class="text-muted-foreground">Card content with semantic background</p>
</div>`,
              preview: (
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Card Title
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Card content with semantic background
                  </p>
                </div>
              ),
            },
            {
              title: "Section Backgrounds",
              description:
                "Using different background shades to visually separate page sections.",
              code: `<section class="bg-slate-50 text-slate-900 py-12">
  <h2 class="text-2xl font-bold">Light Section</h2>
</section>

<section class="bg-slate-900 text-slate-50 py-12">
  <h2 class="text-2xl font-bold">Dark Section</h2>
</section>`,
              preview: (
                <div className="space-y-2 w-full">
                  <div className="bg-slate-50 text-slate-900 p-4 rounded">
                    <h4 className="text-sm font-bold">Light Section</h4>
                  </div>
                  <div className="bg-slate-900 text-slate-50 p-4 rounded">
                    <h4 className="text-sm font-bold">Dark Section</h4>
                  </div>
                </div>
              ),
            },
            {
              title: "Interactive Button",
              description:
                "Buttons often need hover (`hover:bg-*`) and active (`active:bg-*`) states for better feedback.",
              code: `<button class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
  Interactive Button
</button>`,
              preview: (
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                  Interactive Button
                </button>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Poor color contrast",
              reason:
                "Light text on light backgrounds or dark text on dark backgrounds makes content unreadable.",
              example: `<div class="bg-gray-100 text-gray-300">❌ Low contrast</div>`,
              level: "critical",
            },
            {
              title: "Hard-coded values",
              reason:
                "Avoid absolute colors that don't adapt to themes or accessibility settings.",
              example: `<div class="bg-[#FF0000]">❌ Hard-coded red</div>`,
              level: "warning",
            },
            {
              title: "Ignoring hover states",
              reason:
                "Interactive elements need visual feedback through background changes.",
              example: `<button class="bg-blue-500">❌ No hover state</button>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Semantic tokens:",
              text: "Use bg-background, bg-card for design system consistency",
            },
            {
              bold: "Contrast:",
              text: "Always ensure text remains readable on colored backgrounds",
            },
            {
              bold: "Hover states:",
              text: "Add darker/lighter variations for interactive elements",
            },
            {
              bold: "Dark mode:",
              text: "Use semantic colors that adapt to theme changes",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["background", "gradient-stops"],
    title: "Gradient Color Stops",
    description:
      "Utilities for controlling the color stops in background gradients. Define the starting, middle, and ending colors for smooth transitions.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Gradient Color Stops",
          description:
            "Utilities for controlling the color stops in background gradients. Define the starting, middle, and ending colors for smooth transitions.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Gradient Stops",
          description:
            "Gradient stops define specific color points along the gradient line.  The browser mathematically calculates the intermediate colors between these points to create a smooth visual transition.",
          features: [
            "from-color marks the starting point (0%)",
            "via-color adds an intermediate stop (usually 50%)",
            "to-color marks the ending point (100%)",
            "Works in conjunction with direction utilities (e.g., bg-gradient-to-r)",
          ],
          layerAssignment:
            "Background Layer - Controls visual color transitions behind content",
          browserBehavior:
            "Browser interpolates colors between the defined stops based on the gradient direction.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Gradient Stop Properties Comparison",
          columns: ["Property", "Position", "Required", "Visual Effect"],
          rows: [
            {
              feature: "from-*",
              values: ["Start (0%)", "Required", "Gradient origin color"],
            },
            {
              feature: "via-*",
              values: [
                "Middle (50%)",
                "Optional",
                "Smooth transition mid-point",
              ],
            },
            {
              feature: "to-*",
              values: ["End (100%)", "Required", "Gradient destination color"],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Common Gradient Utilities",
          items: [
            { cls: "from-blue-500", desc: "Start with Blue 500" },
            { cls: "via-purple-500", desc: "Transition through Purple 500" },
            { cls: "to-pink-500", desc: "End with Pink 500" },
            { cls: "from-transparent", desc: "Start with transparent" },
            { cls: "to-transparent", desc: "Fade to transparent" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Gradient Builder",
          description:
            "Experiment with different gradient combinations. Note: We've applied a default 'Right' direction (bg-gradient-to-r) for this demo.",
          options: [
            "from-blue-500",
            "from-indigo-500",
            "from-green-400",
            "via-purple-500",
            "via-yellow-500",
            "to-pink-500",
            "to-red-500",
            "to-blue-600",
          ],
          defaultValue: "from-blue-500",
          buildMarkup: (stopClass: string) => {
            let bgClass = "bg-gradient-to-r from-blue-500 to-pink-500"; // Fallback
            if (stopClass.startsWith("from-"))
              bgClass = `bg-gradient-to-r ${stopClass} to-purple-600`;
            else if (stopClass.startsWith("via-"))
              bgClass = `bg-gradient-to-r from-blue-500 ${stopClass} to-pink-600`;
            else if (stopClass.startsWith("to-"))
              bgClass = `bg-gradient-to-r from-blue-500 ${stopClass}`;

            return `<div class="h-32 w-full flex items-center justify-center text-white font-bold rounded-lg ${bgClass}">
  Gradient Demo
</div>`;
          },
          renderPreview: (stopClass: string) => {
            let bgClass = "";
            // Simulate the context of other stops based on selection
            if (stopClass.startsWith("from-")) {
              bgClass = `${stopClass} to-purple-600`;
            } else if (stopClass.startsWith("via-")) {
              bgClass = `from-blue-500 ${stopClass} to-pink-600`;
            } else {
              bgClass = `from-blue-500 ${stopClass}`;
            }

            return (
              <div
                className={`h-32 w-full flex items-center justify-center text-white font-bold rounded-lg bg-gradient-to-r ${bgClass}`}
              >
                Gradient Demo
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Unreadable Card",
          description:
            "You have a card with white text on a bright image background. It's hard to read. Add a black fade overlay using gradient stops. The direction `bg-gradient-to-t` (to top) is already set. Add `from-black` to start the fade at the bottom, and `to-transparent` to make it fade out at the top.",
          codeSnippet: `<div class="relative h-48 w-64 rounded-xl overflow-hidden bg-cover" style="background-image: url('/scenic.jpg')">
  
  <div class="absolute inset-0 bg-gradient-to-t {input}"></div>
  
  <div class="absolute bottom-0 p-4 text-white z-10">
    <h3 class="font-bold">Mountain View</h3>
    <p class="text-xs">Explore the peaks</p>
  </div>
</div>`,
          options: [
            "from-black",
            "bg-black",
            "via-black",
            "from-black to-transparent",
          ],
          correctOption: "from-black to-transparent",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
              <div
                className="relative h-48 w-64 rounded-xl overflow-hidden shadow-xl bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80")`,
                }}
              >
                {/* The User's Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${userClass}`}
                ></div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-4 w-full z-10">
                  <h3 className="font-bold text-white text-lg drop-shadow-sm">
                    Mountain View
                  </h3>
                  <p className="text-xs text-white/90">Explore the peaks</p>
                </div>
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Sunset Button",
              description:
                "Beautiful gradient button with sunset colors using a three-stop gradient.",
              code: `<button class="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
  Get Started
</button>`,
              preview: (
                <button className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-shadow">
                  Get Started
                </button>
              ),
            },
            {
              title: "Ocean Background",
              description:
                "Ocean-themed background gradient using vertical direction.",
              code: `<section class="bg-gradient-to-b from-blue-400 via-cyan-500 to-teal-600 text-white p-6 rounded">
  <div class="text-center">
    <h1 class="text-xl font-bold mb-2">Ocean Theme</h1>
    <p class="text-sm">Deep gradient background</p>
  </div>
</section>`,
              preview: (
                <div className="bg-gradient-to-b from-blue-400 via-cyan-500 to-teal-600 text-white p-6 rounded w-full max-w-sm">
                  <div className="text-center">
                    <h2 className="text-lg font-bold">Ocean Theme</h2>
                    <p className="text-sm opacity-90">
                      Deep gradient background
                    </p>
                  </div>
                </div>
              ),
            },
            {
              title: "Aurora Card",
              description:
                "Card with northern lights inspired gradient using diagonal direction.",
              code: `<div class="bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 p-6 rounded-xl text-white shadow-lg">
  <h3 class="text-2xl font-bold mb-2">Premium Card</h3>
  <p class="text-purple-100">Stunning aurora effect</p>
</div>`,
              preview: (
                <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 p-6 rounded-xl text-white w-full max-w-sm shadow-lg">
                  <h3 className="text-lg font-bold mb-1">Premium Card</h3>
                  <p className="text-purple-100 text-sm">
                    Stunning aurora effect
                  </p>
                </div>
              ),
            },
            {
              title: "Loading Bar",
              description: "Animated gradient loading progress bar.",
              code: `<div class="w-full h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>`,
              preview: (
                <div className="w-full max-w-sm p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="w-full h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Missing gradient direction",
              reason:
                "Gradients need a direction utility (like `bg-gradient-to-r`) to render properly.",
              example: `<div class="from-blue-500 to-purple-600">❌ No direction</div>`,
              level: "critical",
            },
            {
              title: "Poor color contrast",
              reason:
                "Using similar colors in a gradient (low contrast between start and end) can make text overlay hard to read.",
              example: `<div class="from-gray-300 to-gray-400 text-gray-300">❌ Low contrast</div>`,
              level: "critical",
            },
            {
              title: "Too many color stops",
              reason:
                "Complex gradients with too many `via-` points can look muddy and impact performance.",
              example: `<div class="from-red-500 via-orange-500 via-yellow-500 to-blue-500">❌ Too complex</div>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "from-color:",
              text: "Starting point of gradient flow",
            },
            {
              bold: "via-color:",
              text: "Middle color for smooth transitions (optional)",
            },
            {
              bold: "to-color:",
              text: "Ending point of gradient flow",
            },
            {
              bold: "Combine directions:",
              text: "Always use with `bg-gradient-to-*` utilities for precise control",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["background", "image"],
    title: "Background Image",
    description:
      "Utilities for controlling the background image of an element. Primarily used for setting gradient directions (linear gradients) or removing background images.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Background Image",
          description:
            "Utilities for controlling the background image of an element. Primarily used for setting gradient directions (linear gradients) or removing background images.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Background Images and Gradients",
          description:
            "Background images and gradients create visual depth and interest behind content. In CSS, gradients are treated as images.  Direction utilities define the angle of the linear gradient flow.",
          features: [
            "Gradients create smooth color transitions without image assets",
            "Direction controls gradient flow (e.g., to-r, to-b) and visual hierarchy",
            "bg-none removes inherited backgrounds for clean styling",
            "Background layers stack with content on top for proper accessibility",
          ],
          layerAssignment:
            "Background Layer - Visual presentation behind content",
          browserBehavior:
            "Browser renders gradients mathematically for smooth transitions. Images load independently and tile/clip as specified.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Background Properties Comparison",
          columns: ["Property", "Type", "Use Case", "Accessibility Impact"],
          rows: [
            {
              feature: "bg-none",
              values: [
                "Removal",
                "Reset / Override",
                "Nested components",
                "Improves readability",
              ],
            },
            {
              feature: "bg-gradient-to-r",
              values: [
                "Gradient",
                "Horizontal",
                "Buttons/progress bars",
                "Check contrast",
              ],
            },
            {
              feature: "bg-gradient-to-b",
              values: [
                "Gradient",
                "Vertical",
                "Overlays/cards",
                "Check contrast",
              ],
            },
            {
              feature: "bg-gradient-to-tr",
              values: [
                "Gradient",
                "Diagonal",
                "Creative effects",
                "Check contrast",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Gradient Direction Utilities",
          items: [
            { cls: "bg-gradient-to-t", desc: "Gradient to top" },
            { cls: "bg-gradient-to-tr", desc: "Gradient to top right" },
            { cls: "bg-gradient-to-r", desc: "Gradient to right" },
            { cls: "bg-gradient-to-br", desc: "Gradient to bottom right" },
            { cls: "bg-gradient-to-b", desc: "Gradient to bottom" },
            { cls: "bg-gradient-to-bl", desc: "Gradient to bottom left" },
            { cls: "bg-gradient-to-l", desc: "Gradient to left" },
            { cls: "bg-gradient-to-tl", desc: "Gradient to top left" },
            { cls: "bg-none", desc: "Remove background image" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Gradient Direction Playground",
          description:
            "Experiment with different gradient directions. We have pre-set the colors (blue to purple) so you can focus on the flow.",
          options: [
            "bg-gradient-to-t",
            "bg-gradient-to-tr",
            "bg-gradient-to-r",
            "bg-gradient-to-br",
            "bg-gradient-to-b",
            "bg-gradient-to-bl",
            "bg-gradient-to-l",
            "bg-gradient-to-tl",
            "bg-none",
          ],
          defaultValue: "bg-gradient-to-r",
          buildMarkup: (bgClass: string) => {
            if (bgClass === "bg-none") {
              return `<div class="${bgClass} h-32 w-full flex items-center justify-center bg-gray-100 text-gray-800 font-bold rounded-lg">
  No Background Demo
</div>`;
            }
            return `<div class="${bgClass} from-blue-500 to-purple-600 h-32 w-full flex items-center justify-center text-white font-bold rounded-lg">
  Gradient Background Demo
</div>`;
          },
          renderPreview: (bgClass: string) => {
            let content = "Gradient Background Demo";
            let additionalClasses = "";

            if (bgClass === "bg-none") {
              content = "No Background Demo";
              additionalClasses =
                "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200";
            } else {
              additionalClasses = "from-blue-500 to-purple-600 text-white";
            }

            return (
              <div
                className={`h-32 w-full flex items-center justify-center font-bold rounded-lg transition-all ${bgClass} ${additionalClasses}`}
              >
                {content}
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Invisible Gradient",
          description:
            "You are trying to create a cool 'Sunset' gradient button. You've set the colors (`from-orange-500 to-pink-500`), but the button looks flat because the gradient has no direction! Apply `bg-gradient-to-r` to activate the gradient flow from left to right.",
          codeSnippet: `<button class="px-6 py-2 rounded-full text-white font-bold transition-all
  {input} from-orange-500 to-pink-500">
  Sunset Button
</button>`,
          options: [
            "bg-none",
            "bg-gradient-to-r",
            "bg-color-orange",
            "bg-cover",
          ],
          correctOption: "bg-gradient-to-r",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-12 rounded-lg">
              <div className="text-center">
                <button
                  className={`
                  px-8 py-3 rounded-full text-white font-bold shadow-xl transform transition-all duration-500 hover:scale-105
                  ${userClass} from-orange-500 to-pink-600
                  ${
                    userClass === "bg-none" ||
                    userClass === "bg-color-orange" ||
                    userClass === "bg-cover"
                      ? "bg-slate-400"
                      : ""
                  } 
                `}
                >
                  Sunset Button
                </button>

                {/* Feedback Message */}
                <div className="mt-4 h-6 text-sm font-medium">
                  {userClass === "bg-gradient-to-r" ? (
                    <span className="text-green-600 dark:text-green-400 animate-in fade-in slide-in-from-bottom-2">
                      ✨ Beautiful Gradient!
                    </span>
                  ) : (
                    <span className="text-slate-400">
                      {userClass === "bg-none"
                        ? "Gradient removed."
                        : "Waiting for direction..."}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Gradient Button",
              description:
                "Beautiful gradient button with hover effect using horizontal direction.",
              code: `<button class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
  Get Started
</button>`,
              preview: (
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all">
                  Get Started
                </button>
              ),
            },
            {
              title: "Hero Section",
              description: "Full-width vertical gradient hero background.",
              code: `<section class="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white py-24">
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-4">Hero Title</h1>
    <p class="text-xl">Beautiful gradient background</p>
  </div>
</section>`,
              preview: (
                <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg w-full max-w-sm">
                  <div className="text-center">
                    <h2 className="text-xl font-bold mb-2">Hero Title</h2>
                    <p className="text-sm opacity-90">
                      Beautiful gradient background
                    </p>
                  </div>
                </div>
              ),
            },
            {
              title: "Card Background",
              description: "Subtle diagonal gradient for card elevation.",
              code: `<div class="bg-gradient-to-br from-slate-50 to-slate-200 p-6 rounded-lg border border-slate-300 shadow-lg">
  <h3 class="text-lg font-semibold mb-2">Card Title</h3>
  <p class="text-slate-600">Card with subtle gradient</p>
</div>`,
              preview: (
                <div className="bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700 w-full max-w-sm">
                  <h3 className="text-sm font-bold mb-1 text-slate-900 dark:text-white">
                    Card Title
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Card with subtle gradient
                  </p>
                </div>
              ),
            },
            {
              title: "Loading Bar",
              description: "Animated horizontal gradient loading progress.",
              code: `<div class="w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse">
  </div>`,
              preview: (
                <div className="w-full max-w-sm p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                  <div className="w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Forgetting gradient direction",
              reason:
                "Gradients without direction (like `bg-gradient-to-r`) may not render as expected in all browsers.",
              example: `<div class="from-blue-500 to-purple-500">❌ No direction</div>`,
              level: "warning",
            },
            {
              title: "Using too many gradient stops",
              reason:
                "Complex gradients can impact performance and readability. Stick to 2 or 3 stops when possible.",
              example: `<div class="from-red-500 via-pink-500 via-purple-500 via-blue-500 to-green-500">❌ Too many stops</div>`,
              level: "warning",
            },
            {
              title: "Poor contrast gradients",
              reason: "Low contrast gradients can make text hard to read.",
              example: `<div class="from-gray-100 to-gray-200 text-gray-300">❌ Poor contrast</div>`,
              level: "critical",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "bg-gradient-to-r:",
              text: "Perfect for horizontal progress bars and primary buttons.",
            },
            {
              bold: "bg-gradient-to-b:",
              text: "Great for vertical overlays, hero sections, and loading states.",
            },
            {
              bold: "bg-gradient-to-t:",
              text: "Ideal for elevated cards and floating elements (simulating light source).",
            },
            {
              bold: "bg-none:",
              text: "Use to remove inherited backgrounds in nested components or resets.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["background", "position"],
    title: "Background Position",
    description:
      "Utilities for controlling the position of an element's background image. Use these classes to align images within their containers.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Background Position",
          description:
            "Utilities for controlling the position of an element's background image. Use these classes to align images within their containers.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Background Positioning",
          description:
            "Background position controls where images appear within their container, affecting visual composition and content hierarchy.  It defines the starting point of the background image relative to the element's padding box.",
          features: [
            "Positions images using keywords (top, center, bottom) or specific coordinates",
            "Works in tandem with background-size to control scaling behavior",
            "Default position is top-left (0% 0%) unless specified",
            "Essential for hero images, logos, and decorative elements",
          ],
          layerAssignment:
            "Background Layer - Controls visual placement within element boundaries",
          browserBehavior:
            "Browser calculates image placement based on container dimensions and position keywords.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Background Position Properties Comparison",
          columns: ["Property", "X Position", "Y Position", "Common Use"],
          rows: [
            {
              feature: "bg-left-top",
              values: ["Left", "Top", "Corner branding, logos"],
            },
            {
              feature: "bg-center",
              values: ["Center", "Center", "Hero images, portraits"],
            },
            {
              feature: "bg-right-bottom",
              values: ["Right", "Bottom", "Corner accents, decoration"],
            },
            {
              feature: "bg-top",
              values: ["Center", "Top", "Headers, top-aligned banners"],
            },
            {
              feature: "bg-bottom",
              values: ["Center", "Bottom", "Footers, bottom-aligned UI"],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Background Position Utilities",
          items: [
            { cls: "bg-bottom", desc: "Position bottom center" },
            { cls: "bg-center", desc: "Position center" },
            { cls: "bg-left", desc: "Position left center" },
            { cls: "bg-left-bottom", desc: "Position left bottom" },
            { cls: "bg-left-top", desc: "Position left top" },
            { cls: "bg-right", desc: "Position right center" },
            { cls: "bg-right-bottom", desc: "Position right bottom" },
            { cls: "bg-right-top", desc: "Position right top" },
            { cls: "bg-top", desc: "Position top center" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Position Visualizer",
          description:
            "Experiment with different background positions. The crosshair shows the focal point.",
          options: [
            "bg-center",
            "bg-top",
            "bg-bottom",
            "bg-left",
            "bg-right",
            "bg-left-top",
            "bg-right-top",
            "bg-left-bottom",
            "bg-right-bottom",
          ],
          defaultValue: "bg-center",
          buildMarkup: (positionClass: string) => {
            return `<div class="${positionClass} bg-no-repeat bg-cover h-48 w-full border" style="background-image: url('image.jpg')">
  </div>`;
          },
          renderPreview: (positionClass: string) => {
            // Map Tailwind background positions to absolute positioning for the visual marker
            const positionMap: Record<string, string> = {
              "bg-left": "top-1/2 left-4 -translate-y-1/2",
              "bg-center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              "bg-right": "top-1/2 right-4 -translate-y-1/2",
              "bg-top": "top-4 left-1/2 -translate-x-1/2",
              "bg-bottom": "bottom-4 left-1/2 -translate-x-1/2",
              "bg-left-top": "top-4 left-4",
              "bg-right-top": "top-4 right-4",
              "bg-left-bottom": "bottom-4 left-4",
              "bg-right-bottom": "bottom-4 right-4",
            };

            return (
              <div
                className={`relative w-full h-48 rounded-lg border border-slate-300 dark:border-slate-700 bg-no-repeat bg-cover ${positionClass}`}
                style={{
                  backgroundImage:
                    "url('https://picsum.photos/400/200?text=Position')",
                }}
              >
                <div
                  className={`absolute w-8 h-8 bg-blue-500/80 rounded-full border-2 border-white shadow-md backdrop-blur-sm transition-all duration-300 ${
                    positionMap[positionClass] || "top-4 left-4"
                  }`}
                />
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Headless Header",
          description:
            "You are building a profile card with a banner image. The generated background image is tall (portrait), but the container is short (landscape). Currently, `bg-center` is focusing on the subject's shirt, cutting off their head. Change the position to `bg-top` to anchor the image to the top edge.",
          codeSnippet: `<div class="h-40 w-full rounded-xl overflow-hidden border-4 border-white shadow-xl relative">
  
  <div 
    class="absolute inset-0 bg-cover {input}"
    style="background-image: url('avatar-generated.png')"
  ></div>

  <div class="absolute bottom-2 left-2 bg-white px-2 rounded text-xs font-bold">
    Profile Banner
  </div>
</div>`,
          options: ["bg-center", "bg-top", "bg-bottom", "bg-left"],
          correctOption: "bg-top",
          renderPreview: (userClass: string) => {
            let feedback = "SUBJECT LOST";
            let statusColor = "bg-red-500";

            if (userClass === "bg-top") {
              feedback = "PERFECT SHOT";
              statusColor = "bg-green-500";
            } else if (userClass === "bg-center") {
              feedback = "TOO LOW";
              statusColor = "bg-yellow-500";
            }

            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                <div className="relative w-64 h-40 bg-slate-800 rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                  {/* The "Image" Layer - Using gradients to simulate a person */}
                  <div
                    className={`w-full h-full bg-no-repeat transition-all duration-700 ease-out ${userClass}`}
                    style={{
                      backgroundImage: `
                radial-gradient(circle at 50% 15%, #fbbf24 0%, #d97706 12%, transparent 12.5%), /* The Face */
                linear-gradient(to bottom, transparent 28%, #3b82f6 28%, #1e40af 100%) /* The Shirt */
              `,
                      backgroundSize: "100% 300%", // Make image tall to force positioning issue
                      backgroundColor: "#e2e8f0",
                    }}
                  />

                  {/* Viewfinder Overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/50"></div>
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/50"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/50"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/50"></div>

                    <div
                      className={`absolute top-2 left-1/2 -translate-x-1/2 ${statusColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm transition-colors duration-300`}
                    >
                      {feedback}
                    </div>
                  </div>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Hero Section",
              description: "Centered hero background with overlay content.",
              code: `<section class="bg-center bg-cover h-48 relative rounded" style="background-image: url('hero.jpg')">
  <div class="absolute inset-0 flex items-center justify-center bg-black/40">
    <div class="text-center text-white">
      <h1 class="text-xl font-bold">Hero Title</h1>
      <p class="text-sm">Centered content</p>
    </div>
  </div>
</section>`,
              preview: (
                <div
                  className="bg-center bg-cover h-48 relative rounded w-full max-w-sm"
                  style={{
                    backgroundImage:
                      "url('https://picsum.photos/600/300?random=1')",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded">
                    <div className="text-center text-white">
                      <h2 className="text-lg font-bold">Hero Title</h2>
                      <p className="text-sm">Centered content</p>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: "Corner Logo",
              description:
                "Logo positioned in the top-left corner using `bg-left-top`.",
              code: `<header class="relative bg-gray-100 h-16 rounded border">
  <div class="absolute left-2 top-2 bg-no-repeat bg-contain w-12 h-12 bg-left-top" 
       style="background-image: url('logo.svg')"></div>
</header>`,
              preview: (
                <div className="relative bg-gray-100 dark:bg-slate-800 h-16 rounded border border-slate-200 dark:border-slate-700 w-full max-w-sm">
                  <div
                    className="absolute left-2 top-2 bg-no-repeat bg-contain w-12 h-12"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%234F46E5'/%3E%3Ctext x='50' y='60' text-anchor='middle' fill='white' font-size='20'%3EL%3C/text%3E%3C/svg%3E\")",
                    }}
                  ></div>
                  <div className="flex items-center justify-center h-full">
                    <span className="text-sm font-medium text-slate-500">
                      Navigation
                    </span>
                  </div>
                </div>
              ),
            },
            {
              title: "Footer Background",
              description: "Bottom-aligned background pattern for a footer.",
              code: `<footer class="bg-bottom bg-no-repeat p-4 rounded bg-slate-50" 
     style="background-image: url('pattern.png'); min-height: 120px;">
  <p class="text-center text-gray-500">Footer Content</p>
</footer>`,
              preview: (
                <div
                  className="bg-bottom bg-no-repeat p-4 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 w-full max-w-sm"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, #e2e8f0, #e2e8f0 1px, transparent 1px, transparent 10px)",
                    minHeight: "120px",
                  }}
                >
                  <div className="text-center text-slate-500 text-sm mt-4">
                    <p>© 2024 Company</p>
                    <p className="text-xs">Bottom aligned pattern</p>
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Forgetting background-size",
              reason:
                "Without setting `bg-cover` or `bg-contain`, positioning might not look right because the image may be larger than the container.",
              example: `<div class="bg-center">❌ No size defined</div>`,
              level: "critical",
            },
            {
              title: "Positioning repeating patterns",
              reason:
                "If an image repeats (`bg-repeat`), `bg-position` shifts the start of the tile pattern, which might not be visually noticeable.",
              example: `<div class="bg-repeat bg-left-top">❌ Position ignored</div>`,
              level: "warning",
            },
            {
              title: "Assuming default is center",
              reason:
                "The default background position is always `top-left` (0% 0%), not center.",
              example: `<div class="bg-cover">❌ Actually top-left</div>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "bg-center:",
              text: "Perfect for hero images and focal points to keep the subject visible.",
            },
            {
              bold: "bg-top:",
              text: "Ideal for headers and content where the top edge is most important.",
            },
            {
              bold: "bg-bottom:",
              text: "Great for footers and bottom-heavy designs.",
            },
            {
              bold: "Combine with size:",
              text: "Always consider `bg-cover` or `bg-contain` for complete control.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["background", "repeat"],
    title: "Background Repeat",
    description:
      "Utilities for controlling how a background image is repeated. Essential for patterns, textures, and ensuring hero images don't tile unexpectedly.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Background Repeat",
          description:
            "Utilities for controlling how a background image is repeated. Essential for patterns, textures, and ensuring hero images don't tile unexpectedly.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Background Repetition",
          description:
            "Background repeat controls how images tile within their container when the image is smaller than the element.  It works like laying floor tiles (repeat) vs hanging a single painting (no-repeat).",
          features: [
            "Determines tiling behavior on X and Y axes independently",
            "Works with background-size for pattern scaling",
            "Affects performance - large patterns may impact rendering",
            "Essential for seamless textures and decorative borders",
          ],
          layerAssignment:
            "Background Layer - Controls visual presentation and tiling behavior",
          browserBehavior:
            "Browser calculates optimal tiling based on container dimensions and repeat settings.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Background Repeat Properties Comparison",
          columns: ["Property", "X-Axis", "Y-Axis", "Best Use Case"],
          rows: [
            {
              feature: "bg-repeat",
              values: ["Repeats", "Repeats", "Seamless patterns, textures"],
            },
            {
              feature: "bg-no-repeat",
              values: ["No repeat", "No repeat", "Hero images, logos"],
            },
            {
              feature: "bg-repeat-x",
              values: ["Repeats", "No repeat", "Horizontal borders, dividers"],
            },
            {
              feature: "bg-repeat-y",
              values: [
                "No repeat",
                "Repeats",
                "Vertical sidebars, notebook lines",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Repeat Utilities",
          items: [
            {
              cls: "bg-repeat",
              desc: "Repeat both vertically and horizontally",
            },
            { cls: "bg-no-repeat", desc: "Don't repeat background image" },
            { cls: "bg-repeat-x", desc: "Repeat horizontally only" },
            { cls: "bg-repeat-y", desc: "Repeat vertically only" },
            { cls: "bg-repeat-round", desc: "Repeat and stretch to fill gap" },
            { cls: "bg-repeat-space", desc: "Repeat with space in between" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Repeat Playground",
          description:
            "Experiment with different background repeat patterns using a small tile image.",
          options: [
            "bg-repeat",
            "bg-no-repeat",
            "bg-repeat-x",
            "bg-repeat-y",
            "bg-repeat-space",
            "bg-repeat-round",
          ],
          defaultValue: "bg-repeat",
          buildMarkup: (repeatClass: string) => {
            return `<div class="${repeatClass} w-full h-48 border" 
  style="background-image: url('/pattern.png'); background-size: 50px 50px;">
  </div>`;
          },
          renderPreview: (repeatClass: string) => {
            return (
              <div
                className={`w-full h-48 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg ${repeatClass}`}
                style={{
                  backgroundSize: "50px 50px",
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #6366f1, #6366f1 10px, #a78bfa 10px, #a78bfa 20px)",
                }}
              ></div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Infinite Logo Glitch",
          description:
            "You are trying to place a single company logo in the header. However, because the container is wider than the logo, the browser is repeating it by default, making it look like a broken wallpaper pattern. Fix it by applying `bg-no-repeat`.",
          codeSnippet: `<header class="h-24 w-full bg-slate-100 rounded-lg relative overflow-hidden">
  <div 
    class="w-full h-full {input} bg-center"
    style="background-image: url('/logo.png'); background-size: 60px;"
  >
    </div>
</header>`,
          options: ["bg-repeat", "bg-repeat-x", "bg-repeat-y", "bg-no-repeat"],
          correctOption: "bg-no-repeat",
          renderPreview: (userClass: string) => {
            const isCorrect = userClass === "bg-no-repeat";
            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                <div className="h-32 w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden relative shadow-sm">
                  {/* Simulated Logo Background */}
                  <div
                    className={`w-full h-full bg-center transition-all duration-500 ${userClass}`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%233b82f6'/%3E%3Cpath d='M35 35 L65 35 L50 75 Z' fill='white'/%3E%3C/svg%3E")`,
                      backgroundSize: "60px 60px",
                      opacity: 0.8,
                    }}
                  />

                  {/* Status Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {!isCorrect && (
                      <div className="bg-red-500/90 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg backdrop-blur-sm">
                        REPEATING!
                      </div>
                    )}
                    {isCorrect && (
                      <div className="bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                        CLEAN
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Seamless Texture",
              description:
                "Subtle repeating background texture using `bg-repeat`.",
              code: `<section class="bg-repeat p-8" style="background-image: url('texture.svg'); background-size: 40px 40px;">
  <div class="bg-white/90 p-4 rounded-lg">
    <h2 class="text-sm font-bold">Seamless Texture</h2>
  </div>
</section>`,
              preview: (
                <div
                  className="bg-repeat p-4 rounded w-full"
                  style={{
                    backgroundSize: "40px 40px",
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 10px, #f9fafb 10px, #f9fafb 20px)",
                  }}
                >
                  <div className="bg-white/90 p-3 rounded shadow-sm text-slate-800">
                    <p className="text-sm font-bold">Seamless Texture</p>
                  </div>
                </div>
              ),
            },
            {
              title: "Horizontal Border",
              description:
                "Decorative top border using horizontal repeat (`bg-repeat-x`).",
              code: `<header class="bg-repeat-x h-16" style="background-image: url('border.svg'); background-size: 60px 12px;">
  <div class="flex items-center justify-center h-full">Header</div>
</header>`,
              preview: (
                <div
                  className="bg-repeat-x h-12 relative w-full bg-slate-50 border border-slate-200 rounded"
                  style={{
                    backgroundSize: "60px 12px",
                    backgroundImage:
                      "repeating-linear-gradient(90deg, #3b82f6, #3b82f6 20px, #93c5fd 20px, #93c5fd 40px)",
                  }}
                >
                  <div className="flex items-center justify-center h-full pt-2">
                    <span className="text-xs font-bold text-slate-500">
                      Header Border
                    </span>
                  </div>
                </div>
              ),
            },
            {
              title: "Hero Section",
              description: "Non-repeating hero image using `bg-no-repeat`.",
              code: `<section class="bg-no-repeat bg-cover bg-center h-48" style="background-image: url('hero.jpg')">
  <div class="flex items-center justify-center h-full bg-black/40">
    <h1 class="text-white font-bold">Hero Title</h1>
  </div>
</section>`,
              preview: (
                <div
                  className="bg-no-repeat bg-cover bg-center h-40 relative rounded w-full"
                  style={{
                    backgroundImage:
                      "url('https://picsum.photos/600/300?random=1')",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded">
                    <div className="text-center text-white">
                      <h2 className="text-lg font-bold">Hero Title</h2>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: "Sidebar Pattern",
              description:
                "Vertical repeating pattern (`bg-repeat-y`) for a sidebar accent.",
              code: `<aside class="bg-repeat-y w-full h-48 pl-8" style="background-image: url('dots.svg');">
  <nav>Sidebar Content</nav>
</aside>`,
              preview: (
                <div
                  className="bg-repeat-y w-32 h-48 p-3 rounded border border-slate-200"
                  style={{
                    backgroundSize: "32px 32px",
                    backgroundImage:
                      "repeating-linear-gradient(0deg, #f3f4f6, #f3f4f6 16px, #e5e7eb 16px, #e5e7eb 32px)",
                  }}
                >
                  <div className="bg-white px-2 py-1 rounded text-xs shadow-sm">
                    Sidebar
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using bg-repeat with large images",
              reason:
                "Large repeating images can cause performance issues and visual clutter. Use smaller, seamless tile patterns instead.",
              example: `<div class="bg-repeat bg-cover">❌ Large image repeated</div>`,
              level: "critical",
            },
            {
              title: "Forgetting bg-no-repeat with bg-cover",
              reason:
                "Even with `bg-cover`, images might repeat if the content is extremely tall or wide. Always allow safety with `bg-no-repeat`.",
              example: `<div class="bg-cover">❌ Might repeat on huge screens</div>`,
              level: "warning",
            },
            {
              title: "Using bg-repeat without sizing",
              reason:
                "Default auto sizing may cause unexpected repetition patterns if the image size doesn't match your design grid.",
              example: `<div class="bg-repeat">❌ Uncontrolled repetition</div>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "bg-no-repeat:",
              text: "Perfect for hero images, product photos, and single logos.",
            },
            {
              bold: "bg-repeat-x:",
              text: "Ideal for horizontal borders, decorative header lines, and timelines.",
            },
            {
              bold: "bg-repeat-y:",
              text: "Great for vertical sidebars, notebook paper lines, and margin patterns.",
            },
            {
              bold: "bg-repeat-space:",
              text: "Best for geometric tile patterns where you don't want the tiles to be cut off at the edges.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["background", "size"],
    title: "Background Size",
    description:
      "Utilities for controlling the background size of an element's background image. Use these classes to control how background images scale relative to their container.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Background Size",
          description:
            "Utilities for controlling the background size of an element's background image. Use these classes to control how background images scale relative to their container.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Background Image Sizing",
          description:
            "Background size controls how images scale relative to their container, affecting coverage and readability.  It determines whether an image stretches, fits, or maintains its natural dimensions.",
          features: [
            "Controls image scaling behavior within defined container dimensions",
            "Works with background-position to determine image placement",
            "Affects performance - larger cover images may load slower",
            "Can be combined with background-repeat for patterned effects",
          ],
          layerAssignment:
            "Background Layer - Controls visual presentation layer behind content",
          browserBehavior:
            "Browser calculates optimal scaling while maintaining image aspect ratio (cover/contain) or using intrinsic dimensions (auto).",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Background Size Properties Comparison",
          columns: [
            "Property",
            "Image Behavior",
            "Best For",
            "Container Size Impact",
          ],
          rows: [
            {
              feature: "bg-auto",
              values: ["Natural size", "Icons, patterns", "No impact"],
            },
            {
              feature: "bg-cover",
              values: [
                "Covers fully",
                "Hero images, sections",
                "May crop content",
              ],
            },
            {
              feature: "bg-contain",
              values: ["Fits completely", "Logos, products", "May leave space"],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Background Size Utilities",
          items: [
            {
              cls: "bg-auto",
              desc: "Display background image at its default size",
            },
            {
              cls: "bg-cover",
              desc: "Scale image to cover container (may crop)",
            },
            {
              cls: "bg-contain",
              desc: "Scale image to fit within container (no crop)",
            },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Size Playground",
          description:
            "Experiment with different background sizes. We use a dashed border so you can see the container boundaries clearly.",
          options: ["bg-auto", "bg-cover", "bg-contain"],
          defaultValue: "bg-cover",
          buildMarkup: (sizeClass: string) => {
            return `<div class="${sizeClass} bg-center h-64 w-full border" style="background-image: url('image.jpg')">
  </div>`;
          },
          renderPreview: (sizeClass: string) => {
            return (
              <div
                className={`h-64 w-full border-2 border-dashed border-slate-300 dark:border-slate-700 bg-center transition-all duration-500 ${sizeClass}`}
                style={{
                  backgroundImage:
                    "url('https://picsum.photos/400/300?random=5')",
                }}
              />
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Clipped Console",
          description:
            "You are building a card for a retro game console. The product image is wide (16:9), but the card thumbnail is square (1:1). Currently, `bg-cover` is zooming in and cutting off the controllers on the sides! Switch to `bg-contain` to ensure the entire product is visible within the square box.",
          codeSnippet: `<div class="w-64 h-64 bg-slate-900 rounded-xl border border-slate-700 relative overflow-hidden">
  <div 
    class="absolute inset-0 bg-center bg-no-repeat {input}"
    style="background-image: url('/retro-console.png')"
  ></div>
  
  <div class="absolute bottom-0 w-full bg-slate-800/90 p-3 backdrop-blur-sm">
    <div class="font-bold text-white">RetroStation X</div>
    <div class="text-xs text-slate-400">$199.00</div>
  </div>
</div>`,
          options: ["bg-auto", "bg-cover", "bg-contain"],
          correctOption: "bg-contain",
          renderPreview: (userClass: string) => {
            const isCover = userClass === "bg-cover";
            const isContain = userClass === "bg-contain";

            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                <div className="w-64 h-64 bg-slate-900 rounded-xl relative overflow-hidden shadow-2xl border border-slate-700">
                  {/* Product Image Layer */}
                  <div
                    className={`absolute inset-0 bg-center bg-no-repeat transition-all duration-700 ease-out ${userClass}`}
                    style={{
                      // A wide SVG to demonstrate horizontal cropping
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 150'%3E%3Crect x='50' y='40' width='200' height='70' rx='10' fill='%2364748b'/%3E%3Crect x='60' y='50' width='180' height='50' rx='5' fill='%231e293b'/%3E%3Ccircle cx='30' cy='75' r='15' fill='%23ef4444'/%3E%3Ccircle cx='270' cy='75' r='15' fill='%233b82f6'/%3E%3Crect x='10' y='70' width='40' height='10' rx='2' fill='%2394a3b8'/%3E%3Crect x='250' y='70' width='40' height='10' rx='2' fill='%2394a3b8'/%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Visual Feedback for "Cover" mode (The Error State) */}
                  {isCover && (
                    <>
                      <div className="absolute inset-y-0 left-0 w-8 bg-red-500/20 border-r-2 border-red-500/50 flex items-center justify-center">
                        <span className="text-[10px] text-red-200 -rotate-90 font-bold tracking-widest opacity-80">
                          CROPPED
                        </span>
                      </div>
                      <div className="absolute inset-y-0 right-0 w-8 bg-red-500/20 border-l-2 border-red-500/50 flex items-center justify-center">
                        <span className="text-[10px] text-red-200 rotate-90 font-bold tracking-widest opacity-80">
                          CROPPED
                        </span>
                      </div>
                    </>
                  )}

                  {/* Visual Feedback for "Contain" mode (The Success State) */}
                  {isContain && (
                    <div className="absolute top-2 right-2">
                      <div className="bg-green-500/20 text-green-400 border border-green-500/50 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                        FULL VIEW
                      </div>
                    </div>
                  )}

                  {/* Card Footer */}
                  <div className="absolute bottom-0 w-full bg-slate-800/90 p-3 backdrop-blur-sm border-t border-slate-700/50">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white text-sm">
                          RetroStation X
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                          Limited Edition
                        </div>
                      </div>
                      <div className="text-sm font-mono text-emerald-400">
                        $199
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Hero Banner",
              description:
                "Full-width hero section using `bg-cover` to ensure the background fills the area regardless of screen size.",
              code: `<section class="bg-cover bg-center h-96" style="background-image: url('hero.jpg')">
  <div class="flex items-center justify-center h-full bg-black/50 text-white">
    <h1 class="text-4xl font-bold">Welcome</h1>
  </div>
</section>`,
              preview: (
                <div
                  className="bg-cover bg-center h-48 relative rounded w-full max-w-md"
                  style={{
                    backgroundImage:
                      "url('https://picsum.photos/600/300?random=1')",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white rounded">
                    <h2 className="text-xl font-bold">Hero Banner</h2>
                  </div>
                </div>
              ),
            },
            {
              title: "Product Gallery",
              description:
                "Product grid using `bg-contain` to ensure the full product is visible within each square cell.",
              code: `<div class="grid grid-cols-3 gap-4">
  <div class="bg-contain bg-center h-64" style="background-image: url('p1.jpg')"></div>
  <div class="bg-contain bg-center h-64" style="background-image: url('p2.jpg')"></div>
  <div class="bg-contain bg-center h-64" style="background-image: url('p3.jpg')"></div>
</div>`,
              preview: (
                <div className="grid grid-cols-3 gap-2 w-full max-w-md">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="bg-contain bg-center bg-no-repeat h-24 rounded bg-slate-100 dark:bg-slate-800"
                      style={{
                        backgroundImage: `url('https://picsum.photos/200/200?random=${
                          i + 10
                        }')`,
                      }}
                    ></div>
                  ))}
                </div>
              ),
            },
            {
              title: "Pattern Background",
              description:
                "Subtle repeating pattern using `bg-auto` (default size) combined with `bg-repeat`.",
              code: `<div class="bg-repeat bg-auto p-8" style="background-image: url('pattern.svg')">
  <p>Content with pattern background</p>
</div>`,
              preview: (
                <div
                  className="bg-repeat bg-auto p-4 rounded border border-slate-200 dark:border-slate-700 w-full max-w-md"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #f0f0f0, #f0f0f0 10px, transparent 10px, transparent 20px)",
                  }}
                >
                  <p className="text-sm font-medium text-slate-600">
                    Pattern Background
                  </p>
                </div>
              ),
            },
            {
              title: "Logo Container",
              description:
                "Company logo display using `bg-contain` so it never gets cropped.",
              code: `<div class="bg-contain bg-center w-32 h-16" style="background-image: url('logo.svg')">
  </div>`,
              preview: (
                <div
                  className="bg-contain bg-center bg-no-repeat w-32 h-16 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='100' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='50' fill='%234F46E5'/%3E%3Ctext x='50' y='30' text-anchor='middle' fill='white' font-size='14'%3ELOGO%3C/text%3E%3C/svg%3E\")",
                  }}
                ></div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using bg-cover on detailed images",
              reason:
                "`bg-cover` crops parts of the image that fall outside the container's aspect ratio. This is bad for images with text or specific details near the edges.",
              example: `<div class="bg-cover">❌ Crops product details</div>`,
              level: "warning",
            },
            {
              title: "Forgetting background-position",
              reason:
                "When using `bg-contain`, there might be empty space. If you don't set `bg-center`, the image defaults to top-left, which often looks unbalanced.",
              example: `<div class="bg-contain">❌ Image stuck in corner</div>`,
              level: "warning",
            },
            {
              title: "Using bg-auto on large containers",
              reason:
                "`bg-auto` uses the image's intrinsic size. If the image is tiny (like an icon) and the container is huge, it will look lost (or repeat) unless intended.",
              example: `<div class="w-96 h-96 bg-auto">❌ Tiny pattern</div>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "bg-cover:",
              text: "Perfect for hero images and full-width banners where filling the space is more important than showing every pixel.",
            },
            {
              bold: "bg-contain:",
              text: "Great for logos, product shots, and diagrams that must stay 100% visible.",
            },
            {
              bold: "bg-auto:",
              text: "Ideal for decorative patterns, textures, and small icons.",
            },
            {
              bold: "Combine with position:",
              text: "Always define `bg-center` or `bg-top` when using size utilities to control where the cropping or placement happens.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["border", "color"],
    title: "Border Color",
    description:
      "Utilities for controlling the border color of an element. Choose border colors for states, accents, focus rings, and product frames.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Border Color",
          description:
            "Utilities for controlling the border color of an element. Choose border colors for states, accents, focus rings, and product frames.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Border Color",
          description:
            "Border colors establish visual hierarchy, convey state, and reinforce branding.  They work in tandem with border-width and border-style to create comprehensive boundary systems.",
          features: [
            "Colors provide semantic meaning (red=error, green=success, blue=primary)",
            "Works with opacity and transparency for subtle effects",
            "Combines with focus states for accessibility rings",
            "Brand colors maintain visual consistency across components",
          ],
          layerAssignment:
            "Visual Layer - Adds semantic meaning and visual hierarchy",
          browserBehavior:
            "Border colors inherit from computed color values and respect CSS color inheritance and opacity rules.",
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Border Color Utilities",
          items: [
            { cls: "border-red-500", desc: "Error / destructive" },
            { cls: "border-blue-600", desc: "Primary / action" },
            { cls: "border-green-500", desc: "Success / positive" },
            { cls: "border-yellow-400", desc: "Warning / attention" },
            { cls: "border-purple-500", desc: "Accent / brand" },
            { cls: "border-gray-300", desc: "Neutral / subtle" },
            { cls: "border-transparent", desc: "Invisible frame / layout" },
            { cls: "border-current", desc: "Matches text color" },
          ],
          prefix: "border-",
        },
      },
      {
        type: "playground",
        props: {
          title: "Border Color Playground",
          description:
            "Test different border colors. We've added a thick border width so you can clearly see the color changes.",
          options: [
            "border-red-500",
            "border-blue-600",
            "border-green-500",
            "border-yellow-400",
            "border-purple-500",
            "border-gray-300",
            "border-slate-800",
            "border-transparent",
          ],
          defaultValue: "border-blue-600",
          buildMarkup: (colorClass: string) => {
            return `<div class="border-4 ${colorClass} p-6 rounded-lg bg-white">
  Border Preview
</div>`;
          },
          renderPreview: (colorClass: string) => {
            return (
              <div
                className={`border-4 p-6 rounded-lg bg-white dark:bg-slate-900 transition-colors duration-300 ${colorClass}`}
              >
                <span className="font-medium text-slate-700 dark:text-slate-200">
                  Border Preview
                </span>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Error State",
          description:
            "A user has entered an invalid email address. The input currently has a generic neutral border, so the error isn't obvious. Switch the class to `border-red-500` to turn the border red and trigger the error message.",
          codeSnippet: `<div class="flex flex-col gap-2">
  <label class="text-sm font-medium">Email Address</label>
  <div class="relative">
    <input 
      type="email" 
      value="bad-email@" 
      class="w-full px-4 py-2 rounded-lg border-2 outline-none transition-all {input}"
    />
    
    <svg class="...">...</svg>
  </div>
  <p class="text-xs text-red-500">Invalid email format</p>
</div>`,
          options: [
            "border-gray-200",
            "border-blue-500",
            "border-red-500",
            "border-green-500",
          ],
          correctOption: "border-red-500",
          renderPreview: (userClass: string) => {
            const isError = userClass === "border-red-500";
            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg">
                <div className="w-full max-w-xs bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-500">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Email Address
                    </label>

                    <div className="relative group">
                      <input
                        type="text"
                        readOnly
                        value="ojasv@gmai"
                        className={`
                        w-full px-4 py-3 rounded-lg border-2 outline-none font-medium transition-all duration-300
                        ${userClass}
                        ${
                          isError
                            ? "bg-red-50 text-red-900 dark:bg-red-900/10 dark:text-red-100 focus:border-red-500 focus:ring-4 focus:ring-red-500/20 pr-10"
                            : "bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-white border-slate-200 dark:border-slate-700 focus:border-blue-500"
                        }
                      `}
                      />

                      <div
                        className={`absolute right-3 top-3.5 text-red-500 transition-all duration-300 transform ${
                          isError
                            ? "opacity-100 scale-100 rotate-0"
                            : "opacity-0 scale-50 -rotate-90"
                        }`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        isError
                          ? "max-h-10 opacity-100 mt-1"
                          : "max-h-0 opacity-0 mt-0"
                      }`}
                    >
                      <p className="text-xs text-red-600 dark:text-red-400 font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block animate-pulse"></span>
                        Invalid email address format.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <button
                      className={`px-5 py-2 rounded-lg text-sm font-bold text-white transition-all duration-300 shadow-md transform active:scale-95 ${
                        isError
                          ? "bg-red-500 shadow-red-500/30"
                          : "bg-slate-900 hover:bg-slate-800"
                      }`}
                    >
                      {isError ? "Retry" : "Submit"}
                    </button>
                  </div>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Featured Product Tile",
              description:
                "Use bold colored borders to highlight special products or limited editions.",
              code: `<div class="border-4 border-purple-500 rounded-lg p-4 bg-slate-800 text-white">
  <h3 class="font-semibold">Limited Edition</h3>
  <p class="text-sm text-slate-400">Use a bold frame to highlight</p>
</div>`,
              preview: (
                <div className="border-4 border-purple-500 rounded-lg p-4 bg-slate-800 text-white w-full max-w-xs">
                  <div className="font-semibold">Limited edition</div>
                  <div className="text-sm text-slate-400 mt-1">
                    Use a bold frame to highlight
                  </div>
                </div>
              ),
            },
            {
              title: "Avatar with Status Ring",
              description:
                "Combine border colors with rings to show user status indicators.",
              code: `<div class="relative w-14 h-14">
  <div class="w-14 h-14 rounded-full border-2 border-green-500 bg-slate-700 flex items-center justify-center text-white">AL</div>
  <span class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full ring-2 ring-white"></span>
</div>`,
              preview: (
                <div className="relative inline-block">
                  <div className="w-14 h-14 rounded-full bg-slate-700 border-2 border-green-500 flex items-center justify-center text-white font-bold">
                    AL
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full ring-2 ring-white dark:ring-slate-900" />
                </div>
              ),
            },
            {
              title: "Notification Banner",
              description:
                "Left accent borders create clear visual hierarchy for notifications.",
              code: `<div class="border-l-4 border-blue-600 pl-4 py-2 rounded-r-md bg-slate-100">
  <div class="font-bold text-slate-800">Update</div>
  <div class="text-sm text-slate-600">New features available</div>
</div>`,
              preview: (
                <div className="border-l-4 border-blue-600 pl-4 py-2 rounded-r-md bg-slate-100 dark:bg-slate-800 w-full max-w-sm">
                  <div className="font-bold text-slate-800 dark:text-white">
                    Update
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    New features available
                  </div>
                </div>
              ),
            },
            {
              title: "Success Payment Card",
              description:
                "Green accent borders indicate successful completion states.",
              code: `<div class="border-l-4 border-green-500 pl-4 py-2 rounded-r-md bg-slate-100">
  <div class="font-bold text-slate-800">Payment successful</div>
  <div class="text-sm text-slate-600">Invoice paid</div>
</div>`,
              preview: (
                <div className="border-l-4 border-green-500 pl-4 py-2 rounded-r-md bg-slate-100 dark:bg-slate-800 w-full max-w-sm">
                  <div className="font-bold text-slate-800 dark:text-white">
                    Payment successful
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Your invoice has been paid
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using color alone for state",
              reason:
                "Users with color vision deficiency can't distinguish between states when only color changes. Use icons or text labels as well.",
              example:
                "border-red-500 vs border-green-500 without additional indicators",
              level: "critical",
            },
            {
              title: "Poor contrast on dark backgrounds",
              reason:
                "Light borders (like border-gray-100) on dark backgrounds may be invisible to users with low vision or poor screens.",
              example: "border-gray-100 on white background",
              level: "warning",
            },
            {
              title: "Inconsistent color usage",
              reason:
                "Using different colors for the same semantic meaning (e.g. blue for one button, purple for another) creates confusion.",
              example:
                "Mixing border-blue-500 and border-purple-500 for primary actions",
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Subtle separators:",
              text: "Use neutral borders (border-slate-200) for dividers, and bold colored borders for emphasis.",
            },
            {
              bold: "Focus vs state:",
              text: "Prefer `ring` or `outline` for focus states to avoid layout shift, as changing `border-width` affects box size.",
            },
            {
              bold: "Visual hierarchy:",
              text: "Use border width + color to create hierarchy — thin neutral borders for structure, thicker colored borders for featured items.",
            },
            {
              bold: "Semantic colors:",
              text: "Establish consistent color meanings (green=success, red=error, blue=primary) and stick to them.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["border", "divide", "style"],
    title: "Divide Style",
    description:
      "Control the style of dividers between child elements. Choose from solid, dashed, dotted, or double borders to create different visual effects and hierarchy levels.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Divide Style Utilities",
          description:
            "Control the style of dividers between child elements. Choose from solid, dashed, dotted, or double borders to create different visual effects and hierarchy levels.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Divide Style Architecture",
          description:
            "Divide style utilities modify the CSS border-style property for divider elements.  This changes the visual appearance while maintaining consistent spacing and layout structure.",
          features: [
            "Styles apply only to divider borders, not affecting other borders",
            "Works independently from width and color utilities",
            "Maintains consistent spacing regardless of style choice",
            "Combines with opacity modifiers for subtle effects",
          ],
          layerAssignment:
            "Divide Style Layer - Defines visual character and decorative appearance of separators",
          browserBehavior:
            "Browser applies specified border style to all divider borders between child elements.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Divide Style Visual Impact",
          columns: ["Style", "Visual Effect", "Best For", "Hierarchy Level"],
          rows: [
            {
              feature: "divide-solid",
              values: [
                "Continuous line",
                "Standard separation",
                "Content sections",
                "Medium priority",
              ],
            },
            {
              feature: "divide-dashed",
              values: [
                "Broken segments",
                "Soft separation",
                "Related items",
                "Low priority",
              ],
            },
            {
              feature: "divide-dotted",
              values: [
                "Small dots",
                "Minimal separation",
                "Categories",
                "Very low priority",
              ],
            },
            {
              feature: "divide-double",
              values: [
                "Double lines",
                "Strong emphasis",
                "Major sections",
                "High priority",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Divide Style Utilities",
          items: [
            { cls: "divide-solid", desc: "Continuous line divider" },
            { cls: "divide-dashed", desc: "Dashed line segments" },
            { cls: "divide-dotted", desc: "Small dot pattern" },
            { cls: "divide-double", desc: "Double line emphasis" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Divide Style Playground",
          description:
            "Test different divider styles and see how they affect visual separation and user perception.",
          options: [
            "divide-solid",
            "divide-dashed",
            "divide-dotted",
            "divide-double",
          ],
          defaultValue: "divide-solid",
          buildMarkup: (styleClass: string) => {
            return `<div class="divide-y-2 ${styleClass} divide-gray-400">
  <div class="p-4">Section 1</div>
  <div class="p-4">Section 2</div>
  <div class="p-4">Section 3</div>
</div>`;
          },
          renderPreview: (styleClass: string) => {
            return (
              <div
                className={`divide-y-2 divide-slate-400 dark:divide-slate-600 ${styleClass} w-full`}
              >
                <div className="p-4 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
                  Section 1
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
                  Section 2
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
                  Section 3
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Receipt Layout",
          description:
            "You are building a digital receipt. The default `divide-solid` looks too harsh and rigid. Change the dividers to `divide-dashed` to mimic the perforated look of a paper receipt.",
          codeSnippet: `<div class="bg-white p-6 rounded shadow-sm w-64">
  <h3 class="text-center font-bold mb-4">RECEIPT #001</h3>
  
  <ul class="divide-y-2 divide-gray-300 {input}">
    <li class="py-2 flex justify-between">
      <span>Coffee</span> <span>$4.00</span>
    </li>
    <li class="py-2 flex justify-between">
      <span>Bagel</span> <span>$3.50</span>
    </li>
    <li class="py-2 flex justify-between font-bold">
      <span>Total</span> <span>$7.50</span>
    </li>
  </ul>
</div>`,
          options: [
            "divide-solid",
            "divide-dashed",
            "divide-dotted",
            "divide-double",
          ],
          correctOption: "divide-dashed",
          renderPreview: (userClass: string) => (
            <div className="w-full max-w-sm flex justify-center p-8 bg-slate-100 dark:bg-slate-950 rounded-lg">
              <div className="bg-white dark:bg-slate-800 p-6 w-64 shadow-lg relative">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full mx-auto mb-2 flex items-center justify-center text-xl">
                    🧾
                  </div>
                  <h3 className="font-mono font-bold text-slate-800 dark:text-slate-100 tracking-widest">
                    RECEIPT
                  </h3>
                </div>

                <ul
                  className={`divide-y-2 divide-slate-300 dark:divide-slate-600 font-mono text-sm ${userClass}`}
                >
                  <li className="py-3 flex justify-between text-slate-600 dark:text-slate-300">
                    <span>Coffee Lg</span>
                    <span>$4.50</span>
                  </li>
                  <li className="py-3 flex justify-between text-slate-600 dark:text-slate-300">
                    <span>Bagel</span>
                    <span>$3.00</span>
                  </li>
                  <li className="py-3 flex justify-between font-bold text-slate-900 dark:text-white pt-4">
                    <span>TOTAL</span>
                    <span>$7.50</span>
                  </li>
                </ul>

                <div className="mt-6 text-center text-[10px] text-slate-400 uppercase">
                  Thank you for your business
                </div>
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Settings Sections",
              description:
                "Major setting sections with double dividers for strong separation.",
              code: `<div class="divide-y-2 divide-double divide-gray-400">
  <div class="p-6">
    <h3 class="text-lg font-semibold">Account Settings</h3>
    <p>Manage your profile and preferences</p>
  </div>
  <div class="p-6">
    <h3 class="text-lg font-semibold">Security Settings</h3>
    <p>Control access and authentication</p>
  </div>
</div>`,
              preview: (
                <div className="divide-y-2 divide-double divide-slate-300 dark:divide-slate-700 w-full max-w-sm border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900">
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                      Account Settings
                    </h3>
                    <p className="text-xs text-slate-500">
                      Manage your profile
                    </p>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                      Security Settings
                    </h3>
                    <p className="text-xs text-slate-500">Control access</p>
                  </div>
                </div>
              ),
            },
            {
              title: "Menu Categories",
              description:
                "Menu with dashed dividers to group related items softly.",
              code: `<div class="divide-y divide-dashed divide-gray-300">
  <div class="p-3">
    <h4 class="font-medium text-sm text-gray-500">Navigation</h4>
    <a href="#" class="block py-1">Home</a>
    <a href="#" class="block py-1">About</a>
  </div>
  <div class="p-3">
    <h4 class="font-medium text-sm text-gray-500">Resources</h4>
    <a href="#" class="block py-1">Documentation</a>
    <a href="#" class="block py-1">Support</a>
  </div>
</div>`,
              preview: (
                <div className="divide-y divide-dashed divide-slate-200 dark:divide-slate-700 w-full max-w-xs border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900">
                  <div className="p-3">
                    <h4 className="font-bold text-xs text-slate-400 uppercase mb-2">
                      Navigation
                    </h4>
                    <a
                      href="#"
                      className="block py-1 text-sm text-blue-600 hover:underline"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="block py-1 text-sm text-blue-600 hover:underline"
                    >
                      About
                    </a>
                  </div>
                  <div className="p-3">
                    <h4 className="font-bold text-xs text-slate-400 uppercase mb-2">
                      Resources
                    </h4>
                    <a
                      href="#"
                      className="block py-1 text-sm text-blue-600 hover:underline"
                    >
                      Documentation
                    </a>
                    <a
                      href="#"
                      className="block py-1 text-sm text-blue-600 hover:underline"
                    >
                      Support
                    </a>
                  </div>
                </div>
              ),
            },
            {
              title: "List Items",
              description:
                "Simple list with dotted dividers for minimal visual separation.",
              code: `<div class="divide-y divide-dotted divide-gray-400">
  <div class="py-2">First item in the list</div>
  <div class="py-2">Second item in the list</div>
  <div class="py-2">Third item in the list</div>
</div>`,
              preview: (
                <div className="divide-y divide-dotted divide-slate-300 dark:divide-slate-700 w-full max-w-xs border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 p-4">
                  <div className="py-2 text-sm text-slate-700 dark:text-slate-300">
                    First item in the list
                  </div>
                  <div className="py-2 text-sm text-slate-700 dark:text-slate-300">
                    Second item in the list
                  </div>
                  <div className="py-2 text-sm text-slate-700 dark:text-slate-300">
                    Third item in the list
                  </div>
                </div>
              ),
            },
            {
              title: "Form Sections",
              description:
                "Form with solid dividers for clear section separation.",
              code: `<div class="divide-y divide-solid divide-gray-200">
  <div class="p-4">
    <h3 class="font-semibold mb-3">Personal Information</h3>
    <input class="w-full border border-gray-300 rounded p-2 mb-2" placeholder="Name" />
    <input class="w-full border border-gray-300 rounded p-2" placeholder="Email" />
  </div>
  <div class="p-4">
    <h3 class="font-semibold mb-3">Address</h3>
    <input class="w-full border border-gray-300 rounded p-2 mb-2" placeholder="Street" />
    <input class="w-full border border-gray-300 rounded p-2" placeholder="City" />
  </div>
</div>`,
              preview: (
                <div className="divide-y divide-solid divide-slate-200 dark:divide-slate-700 w-full max-w-sm border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900">
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-3 text-slate-900 dark:text-white">
                      Personal Information
                    </h3>
                    <div className="space-y-2">
                      <div className="h-8 bg-slate-100 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700"></div>
                      <div className="h-8 bg-slate-100 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-3 text-slate-900 dark:text-white">
                      Address
                    </h3>
                    <div className="space-y-2">
                      <div className="h-8 bg-slate-100 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700"></div>
                      <div className="h-8 bg-slate-100 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700"></div>
                    </div>
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using inappropriate styles",
              reason:
                "Double dividers are too heavy for simple lists, while dotted may be too subtle for major sections.",
              example: `<div class="divide-y-4 divide-double"> \n  <li>Item 1</li>\n  <li>Item 2</li>\n</div>`,
              level: "warning",
            },
            {
              title: "Not combining with width",
              reason:
                "Some styles (like dotted) need minimum width to be visible clearly.",
              example: `<div class="divide-y divide-dotted"> \n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>`,
              level: "critical",
            },
            {
              title: "Inconsistent style patterns",
              reason:
                "Mixing different divider styles creates visual inconsistency and breaks user expectations.",
              example: `<div class="divide-y divide-dashed divide-solid"> \n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Match hierarchy:",
              text: "Use solid for medium priority, dashed for low priority, and double for high priority sections.",
            },
            {
              bold: "Consider visibility:",
              text: "Dotted and dashed styles often need slightly increased border width to be readable.",
            },
            {
              bold: "Maintain consistency:",
              text: "Stick to one divider style pattern per interface section.",
            },
            {
              bold: "Double lines:",
              text: "Use `divide-double` sparingly for major section breaks only.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["border", "divide", "width"],
    title: "Divide Width",
    description:
      "Control borders between child elements with divide utilities. Create visual separation between list items, menu options, or any series of elements without adding individual border classes to each child.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Divide Width Utilities",
          description:
            "Control borders between child elements with divide utilities. Create visual separation between list items, menu options, or any series of elements without adding individual border classes to each child.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Divide Architecture",
          description:
            "Divide utilities apply borders between child elements using CSS combinator selectors (like `> * + *`).  This creates consistent separation patterns while keeping HTML clean and maintainable.",
          features: [
            "Borders are applied to child elements, not the parent container",
            "Uses CSS :not(:first-child) and :not(:last-child) selectors logic",
            "Works with flexbox, grid, and standard block layouts",
            "Responsive variants adapt to different screen sizes",
          ],
          layerAssignment:
            "Divide Layer - Creates visual boundaries between sibling elements",
          browserBehavior:
            "Browser applies borders to all child elements except the first, creating consistent separation.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Divide Width Properties Comparison",
          columns: ["Utility", "Border Width", "Direction", "Common Use Cases"],
          rows: [
            {
              feature: "divide-x / divide-y",
              values: [
                "1px default",
                "Vertical/Horizontal",
                "Basic separation, Lists, menus",
              ],
            },
            {
              feature: "divide-x-0 / divide-y-0",
              values: [
                "0px",
                "No border",
                "Remove dividers, Conditional layouts",
              ],
            },
            {
              feature: "divide-y-2 / divide-y-4",
              values: [
                "2px / 4px",
                "Horizontal",
                "Strong separation, Sections, headers",
              ],
            },
            {
              feature: "divide-x-reverse",
              values: ["1px", "Reversed side", "RTL support, Flex-row-reverse"],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Divide Width Utilities",
          items: [
            { cls: "divide-x", desc: "1px vertical dividers" },
            { cls: "divide-y", desc: "1px horizontal dividers" },
            { cls: "divide-x-0", desc: "No vertical dividers" },
            { cls: "divide-y-0", desc: "No horizontal dividers" },
            { cls: "divide-y-2", desc: "2px horizontal dividers" },
            { cls: "divide-y-4", desc: "4px horizontal dividers" },
            { cls: "divide-y-8", desc: "8px horizontal dividers" },
            { cls: "divide-x-reverse", desc: "Reverse vertical dividers" },
            { cls: "divide-y-reverse", desc: "Reverse horizontal dividers" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Divide Width Playground",
          description:
            "Experiment with different divide widths and directions to see how they affect layout and visual separation.",
          options: [
            "divide-x",
            "divide-y",
            "divide-y-2",
            "divide-y-4",
            "divide-x-reverse",
            "divide-y-reverse",
          ],
          defaultValue: "divide-y",
          buildMarkup: (divideClass: string) => {
            return `<div class="${divideClass} divide-gray-300">
  <div class="p-4">Item 1</div>
  <div class="p-4">Item 2</div>
  <div class="p-4">Item 3</div>
</div>`;
          },
          renderPreview: (divideClass: string) => {
            return (
              <div
                className={`${divideClass} divide-slate-300 dark:divide-slate-700 w-full`}
              >
                <div className="p-3 bg-slate-700 text-white">Item 1</div>
                <div className="p-3 bg-slate-700 text-white">Item 2</div>
                <div className="p-3 bg-slate-700 text-white">Item 3</div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Smart Separator",
          description:
            "You created a list of notification settings. You need thin lines to separate the options, but you strictly DON'T want a line at the very top or very bottom of the list. The `divide-y` utility is smart enough to add borders only between sibling elements.",
          codeSnippet: `<div class="bg-white rounded-lg shadow-sm border border-slate-200">
  <h3 class="p-4 font-bold bg-slate-50 border-b">Settings</h3>
  
  <div class="flex flex-col {input} divide-slate-200">
    <label class="p-4 flex gap-3">
      <input type="checkbox" checked /> Email Notifications
    </label>
    <label class="p-4 flex gap-3">
      <input type="checkbox" /> SMS Alerts
    </label>
    <label class="p-4 flex gap-3">
      <input type="checkbox" checked /> Weekly Digest
    </label>
  </div>
</div>`,
          options: ["border", "divide-y", "divide-x", "outline"],
          correctOption: "divide-y",
          renderPreview: (userClass: string) => {
            return (
              <div className="w-full max-w-sm p-4 bg-slate-100 dark:bg-slate-950 rounded-xl">
                <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-300 dark:border-slate-700 overflow-hidden">
                  <h3 className="px-4 py-3 font-bold bg-slate-50 dark:bg-slate-800 border-b border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm">
                    Notifications
                  </h3>

                  {/* The Target Container */}
                  <div
                    className={`flex flex-col ${userClass} ${
                      userClass === "divide-y"
                        ? "divide-slate-200 dark:divide-slate-700"
                        : "border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    <div className="p-4 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                      <div className="w-4 h-4 rounded border border-blue-500 bg-blue-500 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        Email Notifications
                      </span>
                    </div>

                    <div className="p-4 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                      <div className="w-4 h-4 rounded border border-slate-300 dark:border-slate-600"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        SMS Alerts
                      </span>
                    </div>

                    <div className="p-4 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                      <div className="w-4 h-4 rounded border border-blue-500 bg-blue-500 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        Weekly Digest
                      </span>
                    </div>
                  </div>
                </div>

                {/* Feedback Area */}
                <div className="mt-6 h-12 flex items-center justify-center text-sm">
                  {userClass === "divide-y" && (
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 animate-in fade-in slide-in-from-bottom-2">
                      <span className="text-lg">✨</span>
                      <span className="font-medium">
                        Perfect! Dividers only between items.
                      </span>
                    </div>
                  )}
                  {userClass === "border" && (
                    <div className="flex flex-col items-center text-amber-600 dark:text-amber-400 animate-in fade-in zoom-in-95">
                      <span className="font-medium">
                        That adds a box around the whole list!
                      </span>
                      <span className="text-xs opacity-80">
                        We want lines *between* items.
                      </span>
                    </div>
                  )}
                  {userClass === "divide-x" && (
                    <div className="text-slate-400">
                      Wrong direction! That's for horizontal lists.
                    </div>
                  )}
                  {(userClass === "outline" || !userClass) && (
                    <div className="text-slate-400 italic">
                      Choose an option to see the effect...
                    </div>
                  )}
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Navigation Menu",
              description:
                "Vertical menu with horizontal dividers between items.",
              code: `<nav class="divide-y divide-gray-200">
  <a href="#" class="block px-4 py-2 hover:bg-gray-50">Home</a>
  <a href="#" class="block px-4 py-2 hover:bg-gray-50">About</a>
  <a href="#" class="block px-4 py-2 hover:bg-gray-50">Services</a>
</nav>`,
              preview: (
                <nav className="divide-y divide-gray-300 dark:divide-gray-700 w-48 border border-gray-200 dark:border-gray-800 rounded bg-white dark:bg-slate-900">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm"
                  >
                    Services
                  </a>
                </nav>
              ),
            },
            {
              title: "List with Strong Separation",
              description:
                "List items with thicker dividers (`divide-y-4`) for clear visual hierarchy.",
              code: `<div class="divide-y-4 divide-blue-200">
  <div class="p-6">Section 1 content</div>
  <div class="p-6">Section 2 content</div>
  <div class="p-6">Section 3 content</div>
</div>`,
              preview: (
                <div className="divide-y-4 divide-blue-300 dark:divide-blue-800 w-64 bg-slate-800 rounded-lg">
                  <div className="p-4 text-white">Section 1 content</div>
                  <div className="p-4 text-white">Section 2 content</div>
                  <div className="p-4 text-white">Section 3 content</div>
                </div>
              ),
            },
            {
              title: "Horizontal Menu with Vertical Dividers",
              description:
                "Navigation with vertical separators (`divide-x`) between menu items.",
              code: `<div class="flex divide-x divide-gray-300">
  <span class="px-4">Home</span>
  <span class="px-4">Products</span>
  <span class="px-4">About</span>
</div>`,
              preview: (
                <div className="flex divide-x divide-gray-300 dark:divide-gray-600 bg-white dark:bg-slate-900 rounded border border-gray-200 dark:border-gray-800">
                  <span className="px-4 py-2 text-sm text-slate-700 dark:text-slate-200">
                    Home
                  </span>
                  <span className="px-4 py-2 text-sm text-slate-700 dark:text-slate-200">
                    Products
                  </span>
                  <span className="px-4 py-2 text-sm text-slate-700 dark:text-slate-200">
                    About
                  </span>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Forgetting to apply to parent container",
              reason:
                "Divide utilities only work when applied to the parent container, not individual children.",
              example: `<div>\n  <div class="divide-y"> \n    <p>Item 1</p>\n  </div>\n</div>`,
              level: "critical",
            },
            {
              title: "Not combining with color utilities",
              reason:
                "Divide width alone uses the default border color (usually very faint gray). Always specify a color like `divide-gray-300` to make it visible.",
              example: `<div class="divide-y"> \n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>`,
              level: "critical",
            },
            {
              title: "Using with single child element",
              reason:
                "Divide utilities rely on the 'sibling' combinator. If there is only one child, no border will appear.",
              example: `<div class="divide-y">\n  <div>Only one item</div>\n</div>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Responsive dividers:",
              text: "Use variants like `sm:divide-y-2 md:divide-y-4` to adjust separator thickness on larger screens.",
            },
            {
              bold: "Color combination:",
              text: "Always pair divide utilities with `divide-*` color classes (e.g. `divide-slate-200`) for visibility.",
            },
            {
              bold: "Reverse direction:",
              text: "Use `divide-x-reverse` when working with `flex-row-reverse` or RTL layouts to ensure the border appears on the correct side.",
            },
            {
              bold: "Conditional dividers:",
              text: "Use `divide-x-0` or `divide-y-0` to conditionally remove dividers at specific breakpoints.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["border", "radius"],
    title: "Border Radius",
    description:
      "Control element corner rounding — from sharp corners to pills and circles. This guide covers practical patterns, accessibility considerations, and real-world visuals.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Border Radius",
          description:
            "Control element corner rounding — from sharp corners to pills and circles. This guide covers practical patterns, accessibility considerations, and real-world visuals.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Border Radius",
          description:
            "Border radius transforms sharp corners into smooth curves, creating visual softness and modern aesthetics.  It works by defining the radius of a quarter-circle (or ellipse) at each corner of the element's box model.",
          features: [
            "Creates visual hierarchy through corner softness",
            "Affects touch target perception and interaction affordances",
            "Combines with overflow:hidden for perfect circles and pills",
            "Responsive radius adapts to different screen sizes",
          ],
          layerAssignment:
            "Visual Enhancement Layer - Softens corners without affecting layout flow",
          browserBehavior:
            "Border radius creates clipped corners using elliptical arcs, respecting content-overflow only if 'overflow: hidden' is applied.",
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Radius Utilities",
          items: [
            { cls: "rounded-none", desc: "No rounding" },
            { cls: "rounded-sm", desc: "Small radius" },
            { cls: "rounded", desc: "Default radius" },
            { cls: "rounded-md", desc: "Medium radius" },
            { cls: "rounded-lg", desc: "Large radius" },
            { cls: "rounded-xl", desc: "Extra large" },
            { cls: "rounded-2xl", desc: "Very large" },
            { cls: "rounded-full", desc: "Pill / circle" },
            { cls: "rounded-tl-lg", desc: "Top-left only" },
            { cls: "rounded-tr-lg", desc: "Top-right only" },
            { cls: "rounded-bl-lg", desc: "Bottom-left only" },
            { cls: "rounded-br-lg", desc: "Bottom-right only" },
          ],
          prefix: "rounded-",
        },
      },
      {
        type: "playground",
        props: {
          title: "Border Radius Playground",
          description:
            "Test different radius values on a card element to see how they affect the visual feel.",
          options: [
            "rounded-none",
            "rounded-sm",
            "rounded",
            "rounded-md",
            "rounded-lg",
            "rounded-xl",
            "rounded-2xl",
            "rounded-full",
          ],
          defaultValue: "rounded-md",
          buildMarkup: (radiusClass: string) => {
            return `<div class="${radiusClass} p-6 bg-slate-700 text-white shadow-lg">
  Radius Preview
</div>`;
          },
          renderPreview: (radiusClass: string) => {
            return (
              <div
                className={`${radiusClass} p-6 bg-slate-700 text-white shadow-lg w-64 h-32 flex items-center justify-center font-bold`}
              >
                Radius Preview
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Sharp Button",
          description:
            "You are designing a modern, friendly app interface. The current 'Sign Up' button has sharp, square corners (`rounded-none`), making it feel harsh and dated. Change the radius to `rounded-full` to give it a soft, approachable 'pill' shape.",
          codeSnippet: `<button class="bg-indigo-600 text-white px-6 py-3 font-semibold shadow-lg hover:bg-indigo-700 transition-all {input}">
  Sign Up Now
</button>`,
          options: ["rounded-none", "rounded-sm", "rounded-lg", "rounded-full"],
          correctOption: "rounded-full",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
              <button
                className={`bg-indigo-600 text-white px-8 py-3 font-semibold shadow-lg hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ${userClass}`}
              >
                Sign Up Now
              </button>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "User Profile with Status",
              description:
                "Perfect circles (`rounded-full`) are the standard for user avatars.",
              code: `<div class="relative">
  <div class="w-14 h-14 rounded-full bg-slate-700 text-white flex items-center justify-center">JD</div>
  <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full ring-2 ring-white"></span>
</div>`,
              preview: (
                <div className="relative inline-block">
                  <div className="w-14 h-14 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full ring-2 ring-white dark:ring-slate-900" />
                </div>
              ),
            },
            {
              title: "Chat Bubbles",
              description:
                "Soft rounded corners (`rounded-lg`) create a friendly, conversational feel.",
              code: `<div class="rounded-lg bg-blue-600 p-3 text-white max-w-xs">
  Hey there! How can I help?
</div>`,
              preview: (
                <div className="rounded-lg bg-blue-600 p-3 text-white max-w-xs text-sm">
                  Hey there! How can I help?
                </div>
              ),
            },
            {
              title: "Search Pill Input",
              description:
                "Fully rounded inputs (`rounded-full`) are popular for modern search bars.",
              code: `<input class="rounded-full px-4 py-2 bg-slate-100 border border-slate-300 w-full" placeholder="Search..." />`,
              preview: (
                <input
                  className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 w-full text-slate-700 dark:text-slate-200"
                  placeholder="Search..."
                />
              ),
            },
            {
              title: "Pricing Card",
              description:
                "Large radius (`rounded-xl`) creates a premium feel for card components.",
              code: `<div class="rounded-xl bg-slate-800 p-6 text-white w-64">
  <h3 class="text-xl font-bold">Pro</h3>
  <p class="text-2xl font-bold mt-2">₹499</p>
  <button class="mt-4 w-full rounded-lg bg-blue-600 py-2">Get Started</button>
</div>`,
              preview: (
                <div className="rounded-xl bg-slate-800 p-6 max-w-xs text-white shadow-xl">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <p className="text-2xl font-bold mt-2">₹499</p>
                  <button className="mt-4 w-full rounded-lg bg-blue-600 hover:bg-blue-700 py-2 text-sm font-semibold transition-colors">
                    Get Started
                  </button>
                </div>
              ),
            },
            {
              title: "Notification Toast",
              description:
                "Medium radius (`rounded-md`) works well for transient UI elements like toasts.",
              code: `<div class="rounded-md ring-1 ring-green-400 bg-slate-800 p-4 flex gap-3 items-center">
  <div class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center">✓</div>
  <div>
    <div class="font-semibold text-white">Success!</div>
    <div class="text-xs text-slate-400">Changes saved</div>
  </div>
</div>`,
              preview: (
                <div className="rounded-md ring-1 ring-green-400 bg-slate-800 p-4 max-w-sm flex items-center gap-3 shadow-lg">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold text-slate-100 text-sm">
                      Success!
                    </div>
                    <div className="text-xs text-slate-400">Changes saved</div>
                  </div>
                </div>
              ),
            },
            {
              title: "Floating Action Button",
              description:
                "Perfect circles with shadow (`rounded-full shadow-lg`) are standard for FABs.",
              code: `<button class="rounded-full w-12 h-12 bg-blue-600 shadow-lg text-white flex items-center justify-center text-2xl hover:bg-blue-700 transition-colors">
  +
</button>`,
              preview: (
                <button className="rounded-full w-12 h-12 bg-blue-600 shadow-lg text-white flex items-center justify-center text-2xl hover:bg-blue-700 transition-colors">
                  +
                </button>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Inconsistent radius values",
              reason:
                "Using different radius values for similar elements (e.g., mixing `rounded-md` and `rounded-lg` on buttons) breaks visual rhythm.",
              example: "rounded-md on primary button, rounded-lg on secondary",
              level: "warning",
            },
            {
              title: "Forgetting overflow hidden",
              reason:
                "Rounded corners won't clip inner content (like images or child divs) unless you add `overflow-hidden`.",
              example: "<div class='rounded-lg'><img src='...' /></div> ",
              level: "critical",
            },
            {
              title: "Too small radius on large elements",
              reason:
                "A small radius (like `rounded-sm`) on a very large container (like a modal) can look like a mistake or rendering error.",
              example: "rounded-sm on a full-screen modal",
              level: "info",
            },
            {
              title: "Missing responsive adjustments",
              reason:
                "A `rounded-3xl` might look great on desktop but consume too much space on a small mobile card. Use `rounded-xl md:rounded-3xl`.",
              example: "rounded-3xl on mobile card",
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Design tokens:",
              text: "Derive radii from a small set of tokens (none, sm, md, lg, full) to ensure visual consistency across your app.",
            },
            {
              bold: "Combine with ring utilities:",
              text: "Rings (`ring-2`) respect border-radius shapes better than standard `outline`, which can look boxy.",
            },
            {
              bold: "Hover micro-interactions:",
              text: "Subtle radius changes (e.g., `rounded-md hover:rounded-lg`) can add a playful polish to interactive elements.",
            },
            {
              bold: "Touch targets:",
              text: "Rounding doesn't change the hit area. Ensure padded areas meet accessibility targets (44–48px) regardless of shape.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["border", "width"],
    title: "Border Width",
    description:
      "Control border thickness on elements — from hairline outlines to bold frames. Useful for cards, inputs, focus rings, table dividers and emphasis.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Border Width",
          description:
            "Control border thickness on elements — from hairline outlines to bold frames. Useful for cards, inputs, focus rings, table dividers and emphasis.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Border Width",
          description:
            "Border width controls the visual weight and emphasis of element boundaries.  Thicker borders draw more attention but take up more space in the box model.",
          features: [
            "Width affects total element size (box model impact)",
            "Thicker borders create visual hierarchy and emphasis",
            "Combines with color and style for complete control",
            "Width changes can cause layout shift if not managed carefully",
          ],
          layerAssignment:
            "Visual Weight Layer - Controls emphasis and attention through line thickness",
          browserBehavior:
            "Border width adds to the element's box size (unless using box-sizing: border-box, though it still occupies visual space inside the box).",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Border Width Comparison",
          columns: [
            "Width",
            "Visual Impact",
            "Layout Effect",
            "Best Use Cases",
          ],
          rows: [
            {
              feature: "0 (border-0)",
              values: [
                "No visible border",
                "No space taken",
                "Minimalist designs, hover states",
              ],
            },
            {
              feature: "1px (border)",
              values: [
                "Hairline / Subtle",
                "Minimal space",
                "Form inputs, subtle dividers",
              ],
            },
            {
              feature: "2px (border-2)",
              values: [
                "Thin but visible",
                "Small space",
                "Cards, buttons, focus states",
              ],
            },
            {
              feature: "4px (border-4)",
              values: [
                "Noticeable / Strong",
                "Significant space",
                "Featured content, emphasis",
              ],
            },
            {
              feature: "8px (border-8)",
              values: [
                "Very bold",
                "Large space",
                "Special highlights, frames",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Border Width Utilities",
          items: [
            { cls: "border-0", desc: "No border" },
            { cls: "border", desc: "1px border (default)" },
            { cls: "border-2", desc: "2px border" },
            { cls: "border-4", desc: "4px border" },
            { cls: "border-8", desc: "8px border" },
            { cls: "border-x-2", desc: "2px left+right borders" },
            { cls: "border-y-4", desc: "4px top+bottom borders" },
            { cls: "border-t-2", desc: "2px top border" },
            { cls: "border-r-4", desc: "4px right border" },
          ],
          prefix: "border-",
        },
      },
      {
        type: "playground",
        props: {
          title: "Border Width Playground",
          description:
            "Test different border widths and see how they affect visual hierarchy and layout.",
          options: [
            "border-0",
            "border",
            "border-2",
            "border-4",
            "border-8",
            "border-x-2",
            "border-y-4",
            "border-t-2",
            "border-r-4",
          ],
          defaultValue: "border",
          buildMarkup: (widthClass: string) => {
            return `<div class="${widthClass} border-solid border-blue-600 rounded-md p-6 bg-slate-700 text-white">
  Border Preview
</div>`;
          },
          renderPreview: (widthClass: string) => {
            return (
              <div
                className={`${widthClass} border-solid border-blue-600 rounded-md p-6 bg-slate-700 text-white`}
              >
                Border Preview
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Active Tab",
          description:
            "You are building a tabbed navigation. The 'Active' tab needs to stand out. Currently, it just has a background color, but a common pattern is to add a border to the bottom edge. Add `border-b-4` to the active tab to give it a clear, weighted indicator.",
          codeSnippet: `<nav class="flex border-b border-gray-200">
  <button class="px-4 py-2 font-medium text-gray-500 hover:text-gray-700">
    Profile
  </button>
  
  <button class="px-4 py-2 font-bold text-indigo-600 border-indigo-600 {input}">
    Account
  </button>
  
  <button class="px-4 py-2 font-medium text-gray-500 hover:text-gray-700">
    Settings
  </button>
</nav>`,
          options: ["border", "border-b", "border-b-4", "border-4"],
          correctOption: "border-b-4",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg">
              <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-lg shadow-sm p-6">
                <nav className="flex space-x-4 border-b border-slate-200 dark:border-slate-700">
                  <button className="px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
                    Profile
                  </button>
                  <button
                    className={`px-3 py-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400 transition-all duration-300 ${userClass}`}
                  >
                    Account
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
                    Settings
                  </button>
                </nav>
                <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg h-24 flex items-center justify-center text-slate-400 text-sm border-2 border-dashed border-slate-200 dark:border-slate-700">
                  Tab Content Area
                </div>
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Featured Card",
              description:
                "Thick borders draw attention and create visual hierarchy.",
              code: `<div class="border-4 border-blue-600 rounded-md p-4">
  <h3 class="font-semibold">Featured Card</h3>
  <p class="text-sm text-muted-foreground">Emphasized content</p>
</div>`,
              preview: (
                <div className="border-4 border-blue-600 rounded-md p-4 bg-slate-700 text-white w-full max-w-xs">
                  <h3 className="font-semibold text-slate-100">
                    Featured Card
                  </h3>
                  <p className="text-sm text-slate-400">Emphasized content</p>
                </div>
              ),
            },
            {
              title: "Focus State Input",
              description:
                "Increase border width on focus (`focus:border-2`) for clear visual feedback.",
              code: `<input class="border border-border focus:border-2 focus:border-blue-600 rounded px-3 py-2" placeholder="Your name" />`,
              preview: (
                <input
                  className="border border-slate-300 dark:border-slate-600 focus:border-2 focus:border-blue-600 rounded px-3 py-2 bg-slate-700 text-white w-full max-w-xs focus:outline-none"
                  placeholder="Your name"
                />
              ),
            },
            {
              title: "Table Row Dividers",
              description:
                "Use `divide-y` (which applies `border-t` or `border-b`) for clean table and list separators.",
              code: `<div class="divide-y divide-border">
  <div class="py-3">Row 1</div>
  <div class="py-3">Row 2</div>
  <div class="py-3">Row 3</div>
</div>`,
              preview: (
                <div className="divide-y divide-slate-600 bg-slate-700 w-full max-w-xs rounded border border-slate-600">
                  <div className="py-3 px-4 text-slate-200">Row 1</div>
                  <div className="py-3 px-4 text-slate-200">Row 2</div>
                  <div className="py-3 px-4 text-slate-200">Row 3</div>
                </div>
              ),
            },
            {
              title: "Avatar with Border",
              description:
                "Subtle borders define avatar boundaries while maintaining clean look.",
              code: `<div class="w-14 h-14 rounded-full border-2 border-green-500 bg-slate-700 text-white flex items-center justify-center">
  AL
</div>`,
              preview: (
                <div className="w-14 h-14 rounded-full border-2 border-green-500 bg-slate-700 text-white flex items-center justify-center font-bold">
                  AL
                </div>
              ),
            },
            {
              title: "Timeline Accent",
              description:
                "Left borders (`border-l-4`) create visual hierarchy for timeline items.",
              code: `<div class="border-l-4 border-blue-600 pl-4 bg-slate-700 p-3 rounded">
  <div class="font-semibold text-slate-100">Release 1.4</div>
  <div class="text-sm text-muted-foreground">Bug fixes and improvements</div>
</div>`,
              preview: (
                <div className="border-l-4 border-blue-600 pl-4 bg-slate-700 p-3 rounded w-full max-w-xs">
                  <div className="font-semibold text-slate-100">
                    Release 1.4
                  </div>
                  <div className="text-sm text-slate-400">
                    Bug fixes and improvements
                  </div>
                </div>
              ),
            },
            {
              title: "Price Comparison",
              description:
                "Vertical dividers (`divide-x`) separate pricing tiers cleanly.",
              code: `<div class="flex divide-x divide-border">
  <div class="flex-1 p-4 text-center">
    <div class="font-semibold">Basic</div>
    <div class="text-2xl font-bold">Free</div>
  </div>
  <div class="flex-1 p-4 text-center border-l-4 border-blue-600">
    <div class="font-semibold">Pro</div>
    <div class="text-2xl font-bold">₹499</div>
  </div>
  <div class="flex-1 p-4 text-center">
    <div class="font-semibold">Enterprise</div>
    <div class="text-2xl font-bold">Contact</div>
  </div>
</div>`,
              preview: (
                <div className="flex divide-x divide-slate-600 border border-slate-600 rounded bg-slate-800 text-slate-100 w-full max-w-md">
                  <div className="flex-1 p-4 text-center">
                    <div className="font-semibold">Basic</div>
                    <div className="text-xl font-bold">Free</div>
                  </div>
                  <div className="flex-1 p-4 text-center border-l-4 border-blue-600 bg-slate-700">
                    <div className="font-semibold">Pro</div>
                    <div className="text-xl font-bold">₹499</div>
                  </div>
                  <div className="flex-1 p-4 text-center">
                    <div className="font-semibold">Enterprise</div>
                    <div className="text-xl font-bold">Call</div>
                  </div>
                </div>
              ),
            },
            {
              title: "Draft Placeholder",
              description:
                "Dashed borders (`border-dashed border-2`) indicate temporary or draft content.",
              code: `<div class="border-dashed border-2 border-border rounded-md p-4 bg-slate-700">
  <div class="font-semibold text-slate-100">Draft Content</div>
  <div class="text-sm text-muted-foreground">This is a placeholder</div>
</div>`,
              preview: (
                <div className="border-dashed border-2 border-slate-500 rounded-md p-4 bg-slate-700 w-full max-w-xs">
                  <div className="font-semibold text-slate-100">
                    Draft Content
                  </div>
                  <div className="text-sm text-slate-400">
                    This is a placeholder
                  </div>
                </div>
              ),
            },
            {
              title: "Modal Header Accent",
              description:
                "Top borders (`border-t-4`) create strong modal header emphasis.",
              code: `<div class="border-t-4 border-blue-600 p-4 bg-slate-700">
  <div class="font-semibold text-slate-100">Modal Title</div>
  <div class="text-sm text-muted-foreground">Important action required</div>
</div>`,
              preview: (
                <div className="border-t-4 border-blue-600 p-4 bg-slate-700 rounded-t-md w-full max-w-xs">
                  <div className="font-semibold text-slate-100">
                    Modal Title
                  </div>
                  <div className="text-sm text-slate-400">
                    Important action required
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Layout Shift on Hover",
              reason:
                "Adding a border on hover (e.g., `hover:border-2`) changes the element's total size, pushing surrounding content. Use `ring` or set a transparent border initially.",
              example: `<div class="border-0 hover:border-2">❌ Jumps on hover</div>`,
              level: "critical",
            },
            {
              title: "Missing Color",
              reason:
                "Adding `border-2` without a color often results in a very faint default gray border that might be invisible on some backgrounds.",
              example: `<div class="border-4">❌ Where is it?</div>`,
              level: "warning",
            },
            {
              title: "Overusing Thick Borders",
              reason:
                "Using `border-4` or `border-8` everywhere creates a clunky, outdated UI. Reserve thick borders for intentional accents or focus states.",
              example: `<div class="border-8 border-black">❌ Too heavy</div>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Use thin borders:",
              text: "(1px) for subtle dividers; thicker borders for emphasis or separated modules.",
            },
            {
              bold: "Prefer outline / ring for focus:",
              text: "Ring utilities don't affect layout like borders do, preventing layout shifts.",
            },
            {
              bold: "Combine with border-style:",
              text: "Use dashed or dotted styles for secondary separators (e.g., print previews, placeholders).",
            },
            {
              bold: "Responsive borders:",
              text: "Try responsive widths (e.g., `md:border-2`) to increase emphasis on larger screens where space allows.",
            },
            {
              bold: "Consider layout impact:",
              text: "Remember that borders add to the width/height of the element unless `box-sizing: border-box` is set (Tailwind sets this by default, but it still consumes inner space).",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["border", "style"],
    title: "Border Style",
    description:
      "Explore how different border styles affect rhythm and emphasis — dashed placeholders, dotted badges, double frames for emphasis, and when to hide borders entirely.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Border Style",
          description:
            "Explore how different border styles affect rhythm and emphasis — dashed placeholders, dotted badges, double frames for emphasis, and when to hide borders entirely.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Border Styles",
          description:
            "Border styles control the visual appearance of lines, from solid strokes to decorative patterns. They work independently from width, color, and radius. ",
          features: [
            "Solid borders provide continuous, professional lines",
            "Dashed borders indicate placeholders and temporary content",
            "Dotted borders create subtle decorative separators",
            "Double borders add emphasis and visual weight",
            "No border (none) creates clean, minimal interfaces",
          ],
          layerAssignment:
            "Visual Appearance Layer - Controls line patterns and decorative effects",
          browserBehavior:
            "Border styles are rendered using CSS border-style property, affecting how the border line is drawn.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Border Style Comparison",
          columns: ["Style", "Visual Impact", "Common Use Cases", "Best For"],
          rows: [
            {
              feature: "Solid",
              values: [
                "Continuous line",
                "Professional, stable",
                "Forms, buttons, cards",
                "Primary UI elements",
              ],
            },
            {
              feature: "Dashed",
              values: [
                "Broken line",
                "Temporary, optional",
                "Placeholders, draft areas",
                "Upload zones",
              ],
            },
            {
              feature: "Dotted",
              values: [
                "Dot sequence",
                "Subtle, light",
                "Separators, badges",
                "Decorative accents",
              ],
            },
            {
              feature: "Double",
              values: [
                "Two parallel lines",
                "Emphasis, formal",
                "Certificates, frames",
                "Important content",
              ],
            },
            {
              feature: "None",
              values: [
                "No visible line",
                "Clean, minimal",
                "Minimalist designs",
                "Clean interfaces",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Border Style Utilities",
          items: [
            { cls: "border-solid", desc: "Continuous stroke (default)" },
            { cls: "border-dashed", desc: "Dashed — good for placeholders" },
            { cls: "border-dotted", desc: "Dotted — subtle decorative" },
            { cls: "border-double", desc: "Double line — high emphasis" },
            { cls: "border-none", desc: "No visible border" },
          ],
          prefix: "border-",
        },
      },
      {
        type: "playground",
        props: {
          title: "Border Style Playground",
          description:
            "Test different border styles with various widths and colors to see visual impact.",
          options: [
            "border-solid",
            "border-dashed",
            "border-dotted",
            "border-double",
            "border-none",
          ],
          defaultValue: "border-solid",
          buildMarkup: (styleClass: string) => {
            return `<div class="border-2 ${styleClass} p-6 border-blue-600 rounded-md">
  Border Preview
</div>`;
          },
          renderPreview: (styleClass: string) => {
            return (
              <div
                className={`border-2 ${styleClass} p-6 bg-slate-700 text-white border-blue-600 rounded-md`}
              >
                Border Preview
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Upload Zone",
          description:
            "You are building a file upload component. It currently has a solid border (`border-solid`), which makes it look like a regular content box. Change the border style to `border-dashed` to make it instantly recognizable as a drop zone.",
          codeSnippet: `<div class="w-full h-32 flex flex-col items-center justify-center rounded-xl border-2 border-indigo-300 bg-indigo-50 {input} cursor-pointer hover:bg-indigo-100 transition-colors">
  <svg class="w-8 h-8 text-indigo-500 mb-2">...</svg>
  <span class="text-sm font-medium text-indigo-700">Drag files here</span>
</div>`,
          options: [
            "border-solid",
            "border-dashed",
            "border-dotted",
            "border-double",
          ],
          correctOption: "border-dashed",
          renderPreview: (userClass: string) => {
            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg">
                <div
                  className={`w-full max-w-sm h-40 flex flex-col items-center justify-center rounded-xl border-2 border-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/20 cursor-pointer hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30 transition-all duration-300 ${userClass}`}
                >
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-800 rounded-full mb-3">
                    <svg
                      className="w-6 h-6 text-indigo-600 dark:text-indigo-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                    {userClass === "border-dashed"
                      ? "Perfect! Drop files here."
                      : "Drag & drop files"}
                  </span>
                  <span className="text-xs text-indigo-500 dark:text-indigo-400 mt-1">
                    SVG, PNG, JPG or GIF
                  </span>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "File Upload Placeholder",
              description:
                "Dashed borders indicate drop zones and optional content areas.",
              code: `<div class="border-dashed border-2 border-slate-300 rounded-lg p-6 text-center">
  <div class="text-2xl mb-2">📁</div>
  <div class="font-semibold text-slate-100">Drop files here</div>
  <div class="text-sm text-slate-400">or click to browse</div>
</div>`,
              preview: (
                <div className="border-dashed border-2 border-slate-300 dark:border-slate-600 rounded-lg p-6 text-center bg-slate-700 w-full max-w-xs">
                  <div className="text-2xl mb-2">📁</div>
                  <div className="font-semibold text-slate-100">
                    Drop files here
                  </div>
                  <div className="text-sm text-slate-400">
                    or click to browse
                  </div>
                </div>
              ),
            },
            {
              title: "Premium Badge",
              description:
                "Double borders create emphasis for special features or content.",
              code: `<div class="border-double border-4 border-purple-500 rounded-lg p-4 bg-slate-700">
  <div class="text-xl font-bold text-purple-400">PREMIUM</div>
  <div class="text-sm text-slate-300">Special feature unlocked</div>
</div>`,
              preview: (
                <div
                  className="border-double border-4 rounded-lg p-4 bg-slate-700 w-full max-w-xs"
                  style={{ borderColor: "#a855f7" }}
                >
                  <div className="text-xl font-bold text-purple-400">
                    PREMIUM
                  </div>
                  <div className="text-sm text-slate-300">
                    Special feature unlocked
                  </div>
                </div>
              ),
            },
            {
              title: "Clean Search Input",
              description:
                "Borderless inputs create minimalist, modern interfaces.",
              code: `<input class="border-none focus:ring-2 focus:ring-blue-600 rounded px-4 py-2 bg-slate-700 text-white" placeholder="Search..." />`,
              preview: (
                <input
                  className="border-none focus:ring-2 focus:ring-blue-600 rounded px-4 py-2 bg-slate-700 text-white w-full max-w-xs focus:outline-none"
                  placeholder="Search..."
                />
              ),
            },
            {
              title: "Error State Input",
              description:
                "Dashed red borders clearly indicate validation errors.",
              code: `<div class="space-y-2">
  <label class="block text-sm text-slate-200">Email</label>
  <input class="border-dashed border-2 border-red-500 rounded px-3 py-2 bg-slate-700 text-white w-full" placeholder="Email" />
  <div class="text-xs text-red-400">Please enter a valid email</div>
</div>`,
              preview: (
                <div className="space-y-2 w-full max-w-xs">
                  <label className="block text-sm text-slate-200">Email</label>
                  <input
                    className="border-dashed border-2 rounded px-3 py-2 bg-slate-700 text-white w-full"
                    placeholder="Email"
                    style={{ borderColor: "#ef4444" }}
                  />
                  <div className="text-xs text-red-400">
                    Please enter a valid email
                  </div>
                </div>
              ),
            },
            {
              title: "Progress Stepper",
              description:
                "Dotted connectors create lighter, more approachable progress indicators.",
              code: `<div class="flex items-center gap-4">
  <div class="w-8 h-8 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center">1</div>
  <div class="flex-1 h-0.5 border-t-2 border-dotted border-slate-400"></div>
  <div class="w-8 h-8 rounded-full border-2 border-slate-400 text-slate-400 text-sm flex items-center justify-center">2</div>
  <div class="flex-1 h-0.5 border-t-2 border-dotted border-slate-400"></div>
  <div class="w-8 h-8 rounded-full border-2 border-slate-400 text-slate-400 text-sm flex items-center justify-center">3</div>
</div>`,
              preview: (
                <div className="flex items-center gap-4 w-full max-w-xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center">
                    1
                  </div>
                  <div className="flex-1 h-0.5 border-t-2 border-dotted border-slate-400"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-slate-400 text-slate-400 text-sm flex items-center justify-center">
                    2
                  </div>
                  <div className="flex-1 h-0.5 border-t-2 border-dotted border-slate-400"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-slate-400 text-slate-400 text-sm flex items-center justify-center">
                    3
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using inappropriate styles",
              reason:
                "Double dividers are too heavy for simple lists, while dotted may be too subtle for major sections.",
              example: `<div class="divide-y-4 divide-double">...</div>`,
              level: "warning",
            },
            {
              title: "Not combining with width",
              reason:
                "Some styles (like dotted) need minimum width to be visible clearly.",
              example: `<div class="divide-y divide-dotted">...</div>`,
              level: "critical",
            },
            {
              title: "Inconsistent style patterns",
              reason:
                "Mixing different divider styles creates visual inconsistency and breaks user expectations.",
              example: `<div class="divide-y divide-dashed divide-solid">...</div>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Use dashed/dotted:",
              text: "for placeholders and optional elements.",
            },
            {
              bold: "Reserve double:",
              text: "for high emphasis (but use sparingly).",
            },
            {
              bold: "Hide borders:",
              text: "when you prefer minimal, clean surfaces — provide an alternative focus indicator.",
            },
            {
              bold: "Combine:",
              text: "style + width + color for clear visual language (e.g., subtle dotted neutral for badges; solid colored for status).",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["effects", "outline", "color"],
    title: "Outline Color",
    description:
      "Complete guide to CSS outline color utilities. Control the color of element outlines for brand consistency, accessibility, and visual feedback without affecting layout.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Outline Color Utilities",
          description:
            "Complete guide to CSS outline color utilities. Control the color of element outlines for brand consistency, accessibility, and visual feedback without affecting layout.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Outline Color",
          description:
            "Outline color controls the visual appearance of focus indicators and accessibility markers.  Proper color selection ensures compliance with WCAG guidelines and maintains brand consistency across interactive elements.",
          features: [
            "Colors apply to outline borders drawn outside elements",
            "Supports all Tailwind color utilities including design tokens",
            "Essential for accessibility and WCAG compliance",
            "Works with opacity modifiers for subtle effects",
          ],
          layerAssignment:
            "Outline Layer - Visual feedback and accessibility color coding",
          browserBehavior:
            "Browser renders outline colors using the same color space as text colors, supporting hex, rgb, and CSS custom properties.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Outline Color vs Border Color",
          columns: [
            "Property",
            "Layout Impact",
            "Best For",
            "Accessibility Impact",
          ],
          rows: [
            {
              feature: "Outline Color",
              values: [
                "No layout impact",
                "Focus states & feedback",
                "Critical for keyboard users",
              ],
            },
            {
              feature: "Border Color",
              values: [
                "Affects box model",
                "Visual boundaries",
                "Visual enhancement only",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Outline Color Utilities",
          items: [
            { cls: "outline-red-500", desc: "Red outline for errors" },
            { cls: "outline-blue-400", desc: "Blue outline for info" },
            { cls: "outline-green-600", desc: "Green outline for success" },
            { cls: "outline-yellow-500", desc: "Yellow outline for warnings" },
            { cls: "outline-ring", desc: "Default ring color" },
            { cls: "outline-gray-400", desc: "Gray outline for neutral" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Outline Color Playground",
          description:
            "Test outline color utilities with different background colors to ensure accessibility compliance.",
          options: [
            "outline-blue-500",
            "outline-red-500",
            "outline-green-600",
            "outline-yellow-500",
            "outline-purple-500",
            "outline-gray-400",
          ],
          defaultValue: "outline-blue-500",
          buildMarkup: (outlineColor: string) => {
            return `<button class="outline-2 ${outlineColor} focus:outline-4 focus:${outlineColor} px-4 py-2 rounded">
  Colored Focus
</button>`;
          },
          renderPreview: (outlineColor: string) => {
            return (
              <button
                className={`border-2 border-transparent ${outlineColor} focus:outline-4 px-4 py-2 rounded bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm font-medium focus:outline focus:outline-offset-2`}
                style={{
                  outlineStyle: "solid",
                  outlineWidth: "2px",
                  // We apply the color class directly which Tailwind uses,
                  // but for preview purposes we force the focus state visually if needed
                  // or rely on browser focus behavior.
                  // Here we simulate "focus" visually with a permanent outline for demo.
                  outlineColor: "var(--tw-outline-color)",
                }}
              >
                Colored Focus
              </button>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Clashing Focus",
          description:
            "You have an input field showing an error state with a red border. However, when the user clicks (focuses) on it, the outline turns blue (`outline-blue-500`), clashing with the error message. Change the focus outline color to `outline-red-500` to maintain the error context.",
          codeSnippet: `<div class="flex flex-col gap-1">
  <label class="text-sm font-medium text-red-600">Password</label>
  <input 
    type="password" 
    value="wrongpass" 
    class="border-red-300 text-red-900 focus:outline-2 {input} rounded-md px-3 py-2"
  />
  <span class="text-xs text-red-500">Incorrect password</span>
</div>`,
          options: [
            "outline-blue-500",
            "outline-red-500",
            "outline-green-500",
            "outline-gray-500",
          ],
          correctOption: "outline-red-500",
          renderPreview: (userClass: string) => {
            const isError = userClass === "outline-red-500";
            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-12 rounded-lg">
                <div className="w-full max-w-xs bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-red-600 dark:text-red-400">
                      Password
                    </label>
                    <input
                      type="text"
                      value="wrongpass"
                      readOnly
                      style={{
                        outlineStyle: "solid",
                        outlineWidth: "2px",
                        outlineColor: isError ? "#ef4444" : "#3b82f6", // Red vs Blue hex codes
                      }}
                      className={`w-full px-3 py-2 rounded-md border border-red-300 bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-100 dark:border-red-800 transition-all`}
                    />
                    <div className="flex items-center gap-1.5 text-xs text-red-500 font-medium">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Incorrect password
                    </div>
                  </div>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Error States",
              description:
                "Red outlines (`outline-red-500`) clearly indicate validation errors during focus.",
              code: `<input class="outline-2 outline-red-500 focus:outline-4 focus:outline-red-600 border border-red-300 px-3 py-2 rounded" placeholder="Required field" />`,
              preview: (
                <input
                  className="outline outline-2 outline-red-500 focus:outline-4 focus:outline-red-600 border border-red-300 px-3 py-2 rounded w-full max-w-xs bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="Required field"
                />
              ),
            },
            {
              title: "Success Confirmation",
              description:
                "Green outlines (`outline-green-600`) reinforce successful actions.",
              code: `<button class="outline-2 outline-green-600 focus:outline-4 focus:outline-green-700 bg-green-500 text-white px-4 py-2 rounded">
  Save Success
</button>`,
              preview: (
                <button className="outline outline-2 outline-green-600 focus:outline-4 focus:outline-green-700 bg-green-500 text-white px-4 py-2 rounded font-medium shadow-sm hover:bg-green-600 transition-colors">
                  Save Success
                </button>
              ),
            },
            {
              title: "Warning Actions",
              description:
                "Yellow outlines (`outline-yellow-500`) warn users about destructive or cautious actions.",
              code: `<button class="outline-2 outline-yellow-500 focus:outline-4 focus:outline-yellow-600 text-yellow-700 px-4 py-2 rounded border border-yellow-300">
  Delete Item
</button>`,
              preview: (
                <button className="outline outline-2 outline-yellow-500 focus:outline-4 focus:outline-yellow-600 text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-2 rounded border border-yellow-300 dark:border-yellow-700 font-medium">
                  Delete Item
                </button>
              ),
            },
            {
              title: "High Contrast Mode",
              description:
                "Bright yellow (`outline-yellow-400`) on dark backgrounds ensures visibility for accessibility.",
              code: `<button class="outline-4 outline-yellow-400 focus:outline-8 focus:outline-yellow-300 bg-black text-white px-4 py-2 rounded">
  High Contrast
</button>`,
              preview: (
                <button className="outline outline-4 outline-yellow-400 focus:outline-8 focus:outline-yellow-300 bg-black text-white px-4 py-2 rounded font-bold uppercase tracking-wide">
                  High Contrast
                </button>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Poor color contrast",
              reason:
                "Outline colors must have sufficient contrast (4.5:1 for normal text, 3:1 for large text) against their background.",
              example: `<button class="outline-2 outline-gray-200 bg-white">Poor contrast</button>`,
              level: "critical",
            },
            {
              title: "Color-only information",
              reason:
                "Don't rely solely on outline color to convey meaning. Use it with other visual cues like icons, text, or patterns.",
              example: `<button class="outline-red-500">Error button</button>`,
              level: "warning",
            },
            {
              title: "Inconsistent color usage",
              reason:
                "Maintain consistent color meanings across your interface (red for errors, green for success, etc.).",
              example: `<button class="outline-green-500">Delete</button>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "WCAG compliance:",
              text: "Ensure 4.5:1 contrast ratio for normal text, 3:1 for large text",
            },
            {
              bold: "Brand consistency:",
              text: "Use brand colors consistently for primary actions",
            },
            {
              bold: "Semantic colors:",
              text: "Follow conventions: red=error, green=success, yellow=warning",
            },
            {
              bold: "Dark mode:",
              text: "Test outline colors in both light and dark themes",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["effects", "outline", "offset"],
    title: "Outline Offset",
    description:
      "Complete guide to CSS outline offset utilities. Control the space between elements and their outlines for better visual separation and accessibility without affecting layout.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Outline Offset Utilities",
          description:
            "Complete guide to CSS outline offset utilities. Control the space between elements and their outlines for better visual separation and accessibility without affecting layout.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Outline Offset",
          description:
            "Outline offset creates space between the element and its outline, preventing overlap with borders or other elements.  This spacing improves visibility and reduces visual clutter in complex interfaces.",
          features: [
            "Creates space between element and outline border",
            "Measured in pixels from 0 to 8px in Tailwind",
            "Prevents outline overlap with borders and shadows",
            "Improves accessibility by making focus indicators more visible",
          ],
          layerAssignment:
            "Outline Layer - Spatial separation and visual breathing room",
          browserBehavior:
            "Browser renders outline offset as measured distance from element border edge, extending into surrounding space.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Outline Offset vs Border Spacing",
          columns: ["Property", "Purpose", "Visual Impact", "Layout Effect"],
          rows: [
            {
              feature: "Outline Offset",
              values: [
                "Space around outline",
                "Creates breathing room",
                "No layout impact",
              ],
            },
            {
              feature: "Border Spacing",
              values: [
                "Space between borders",
                "Table cell separation",
                "Affects box model",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Outline Offset Utilities",
          items: [
            { cls: "outline-offset-0", desc: "No offset" },
            { cls: "outline-offset-1", desc: "1px offset" },
            { cls: "outline-offset-2", desc: "2px offset" },
            { cls: "outline-offset-4", desc: "4px offset" },
            { cls: "outline-offset-8", desc: "8px offset" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Outline Offset Playground",
          description:
            "Test outline offset utilities with different border styles to understand spacing and visual effects.",
          options: [
            "outline-offset-0",
            "outline-offset-1",
            "outline-offset-2",
            "outline-offset-4",
            "outline-offset-8",
          ],
          defaultValue: "outline-offset-2",
          buildMarkup: (outlineOffset: string) => {
            return `<button class="outline-2 outline-blue-500 ${outlineOffset} border-2 border-gray-300 focus:outline-4 focus:outline-blue-600 px-4 py-2 rounded">
  Offset Button
</button>`;
          },
          renderPreview: (outlineOffset: string) => {
            return (
              <button
                className={`outline-2 outline-blue-500 ${outlineOffset} border-2 border-gray-300 dark:border-slate-600 focus:outline-4 focus:outline-blue-600 px-4 py-2 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium`}
                // Force focus visual for demo
                style={{ outlineStyle: "solid", outlineColor: "#3b82f6" }}
              >
                Offset Button
              </button>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Cluttered Focus",
          description:
            "You have a button with a white border. When focused, the blue focus ring hugs the button too tightly, touching the white border and looking messy. Add `outline-offset-2` to create a clean gap between the button's border and the focus ring.",
          codeSnippet: `<button class="bg-indigo-600 border-2 border-white text-white px-6 py-2 rounded-lg font-medium focus:outline-2 focus:outline-indigo-400 {input} transition-all">
  Focus Me
</button>`,
          options: [
            "outline-offset-0",
            "outline-offset-1",
            "outline-offset-2",
            "outline-offset-4",
          ],
          correctOption: "outline-offset-2",
          renderPreview: (userClass: string) => {
            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-800 p-12 rounded-lg">
                <button
                  className={`bg-indigo-600 border-2 border-white text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all focus:outline-2 focus:outline-indigo-400 ${userClass}`}
                  // Simulate focus state visually
                  style={{
                    outlineStyle: "solid",
                    outlineWidth: "2px",
                    outlineColor: "#818cf8", // indigo-400
                  }}
                >
                  Focus Me
                </button>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Button with Border",
              description:
                "Prevent outline overlap with element borders by adding `outline-offset-2`.",
              code: `<button class="outline-2 outline-blue-500 outline-offset-2 border-2 border-gray-300 focus:outline-4 focus:outline-blue-600 px-4 py-2 rounded">
  Clear Focus
</button>`,
              preview: (
                <button className="outline outline-2 outline-blue-500 outline-offset-2 border-2 border-slate-300 dark:border-slate-600 px-4 py-2 rounded bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-medium">
                  Clear Focus
                </button>
              ),
            },
            {
              title: "Input Field Enhancement",
              description:
                "Better focus separation for form inputs using `outline-offset-4`.",
              code: `<input class="outline-2 outline-green-500 outline-offset-4 border border-gray-300 focus:outline-4 focus:outline-green-600 px-3 py-2 rounded" placeholder="Email address" />`,
              preview: (
                <input
                  className="outline outline-2 outline-green-500 outline-offset-4 border border-slate-300 dark:border-slate-600 px-3 py-2 rounded w-full max-w-xs bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="Email address"
                />
              ),
            },
            {
              title: "Card Component Focus",
              description:
                "Dramatic offset (`outline-offset-8`) for card-level focus states.",
              code: `<div class="outline-4 outline-purple-500 outline-offset-8 border border-gray-200 rounded-lg p-4 focus:outline-8 focus:outline-purple-600">
  Card Content
</div>`,
              preview: (
                <div className="outline outline-4 outline-purple-500 outline-offset-8 border border-slate-200 dark:border-slate-700 rounded-lg p-4 w-full max-w-xs bg-white dark:bg-slate-800">
                  <p className="font-medium text-slate-800 dark:text-white">
                    Card Content
                  </p>
                  <p className="text-sm text-slate-500">Select to see focus</p>
                </div>
              ),
            },
            {
              title: "Link Emphasis",
              description:
                "Subtle offset (`outline-offset-1`) for text links improves readability on focus.",
              code: `<a href="#" class="outline-1 outline-blue-600 outline-offset-1 focus:outline-2 focus:outline-blue-700">
  Link with offset
</a>`,
              preview: (
                <a
                  href="#"
                  className="outline outline-1 outline-blue-600 outline-offset-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Link with offset
                </a>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Excessive offsets",
              reason:
                "Large offsets can create a visual disconnect between the element and its focus indicator, confusing users.",
              example: `<button class="outline-offset-16">Too far away</button>`,
              level: "warning",
            },
            {
              title: "No offset with borders",
              reason:
                "Without offset, outlines overlap borders making them hard to distinguish, especially if colors are similar.",
              example: `<button class="outline-2 border-2 outline-offset-0">Overlapped</button>`,
              level: "info",
            },
            {
              title: "Offset without purpose",
              reason:
                "Only use offsets when they improve visibility or prevent overlap, not just for decoration as it can look like a rendering bug.",
              example: `<div class="outline-offset-4 outline-none">No purpose</div>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Border separation:",
              text: "Use offset-2+ when elements have borders to prevent visual merging",
            },
            {
              bold: "Consistent spacing:",
              text: "Use consistent offset values across your interface for predictability",
            },
            {
              bold: "Visual balance:",
              text: "Balance offset size with outline width for best results",
            },
            {
              bold: "Accessibility focus:",
              text: "Use offsets to make focus indicators more visible for all users",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["effects", "outline", "style"],
    title: "Outline Style",
    description:
      "Complete guide to CSS outline style utilities. Control the visual appearance of element outlines with different line styles for emphasis, decoration, and accessibility feedback.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Outline Style Utilities",
          description:
            "Complete guide to CSS outline style utilities. Control the visual appearance of element outlines with different line styles for emphasis, decoration, and accessibility feedback.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Outline Style",
          description:
            "Outline style controls the line pattern used for element outlines.  Different styles provide visual hierarchy and can indicate different types of interactions or states while maintaining accessibility.",
          features: [
            "Styles apply to outline borders without affecting layout",
            "Supports solid, dashed, dotted, and double line patterns",
            "Essential for creating visual distinction between states",
            "Works with outline-width and outline-color properties",
          ],
          layerAssignment:
            "Outline Layer - Visual pattern and emphasis styling",
          browserBehavior:
            "Browser renders outline styles using the same line drawing algorithms as borders, but positioned outside the element box.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Outline Style vs Border Style",
          columns: [
            "Property",
            "Layout Impact",
            "Use Cases",
            "Visual Priority",
          ],
          rows: [
            {
              feature: "Outline Style",
              values: [
                "No layout impact",
                "Focus states & indicators",
                "High for accessibility",
              ],
            },
            {
              feature: "Border Style",
              values: [
                "Affects box model",
                "Decorative elements",
                "Medium for visual design",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Outline Style Utilities",
          items: [
            { cls: "outline", desc: "Solid outline (default)" },
            { cls: "outline-dashed", desc: "Dashed outline pattern" },
            { cls: "outline-dotted", desc: "Dotted outline pattern" },
            { cls: "outline-double", desc: "Double line outline" },
            { cls: "outline-none", desc: "No outline (use carefully)" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Outline Style Playground",
          description:
            "Test outline style utilities with different widths and colors to create various visual effects.",
          options: [
            "outline",
            "outline-dotted",
            "outline-double",
            "outline-dashed",
          ],
          defaultValue: "outline",
          buildMarkup: (outlineStyle: string) => {
            const styleName =
              outlineStyle.replace("outline-", "").charAt(0).toUpperCase() +
              outlineStyle.replace("outline-", "").slice(1);
            return `<button class="outline-2 outline-blue-500 ${outlineStyle} focus:outline-4 focus:outline-blue-600 focus:${outlineStyle} px-4 py-2 rounded">
  ${styleName} Focus
</button>`;
          },
          renderPreview: (outlineStyle: string) => {
            const styleName =
              outlineStyle.replace("outline-", "").charAt(0).toUpperCase() +
              outlineStyle.replace("outline-", "").slice(1);
            return (
              <button
                className={`outline-2 outline-blue-500 ${outlineStyle} focus:outline-4 focus:outline-blue-600 focus:${outlineStyle} px-4 py-2 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium`}
                // Force focus style for preview if needed, though interaction is better
                style={{
                  outlineStyle: outlineStyle.replace("outline-", "") || "solid",
                  outlineColor: "#3b82f6",
                  outlineWidth: "2px",
                }}
              >
                {styleName} Focus
              </button>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Dashed Drop Zone",
          description:
            "You have a file upload area. To make it feel interactive and 'droppable' when focused via keyboard, you want the focus ring to be dashed instead of the default solid. Change the focus style to `outline-dashed`.",
          codeSnippet: `<button class="w-full h-32 bg-slate-100 rounded-xl border-2 border-slate-300 text-slate-500 focus:outline-2 focus:outline-indigo-500 {input} transition-all">
  Drop files here or Tab to select
</button>`,
          options: [
            "outline",
            "outline-dotted",
            "outline-double",
            "outline-dashed",
          ],
          correctOption: "outline-dashed",
          renderPreview: (userClass: string) => {
            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg">
                <button
                  className={`w-full max-w-sm h-40 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center gap-3 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all focus:outline-2 focus:outline-indigo-500 ${userClass}`}
                  // Force visible outline style for preview purposes
                  style={{
                    outlineStyle: userClass.replace("outline-", "") || "solid",
                    outlineWidth: "2px",
                    outlineColor: "#6366f1",
                  }}
                >
                  <svg
                    className="w-8 h-8 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span className="font-medium">Upload Area (Focused)</span>
                </button>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Solid Focus States",
              description:
                "Clean solid outlines (`outline`) for standard focus indicators.",
              code: `<button class="outline outline-2 outline-blue-500 focus:outline-4 focus:outline-blue-600 px-4 py-2 rounded">
  Standard Button
</button>`,
              preview: (
                <button className="outline outline-2 outline-blue-500 focus:outline-4 focus:outline-blue-600 px-4 py-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  Standard Button
                </button>
              ),
            },
            {
              title: "Dashed Attention States",
              description:
                "Dashed outlines (`outline-dashed`) for attention-grabbing or temporary states.",
              code: `<button class="outline-dashed outline-2 outline-orange-500 focus:outline-4 focus:outline-orange-600 px-4 py-2 rounded">
  Attention Required
</button>`,
              preview: (
                <button className="outline-dashed outline-2 outline-orange-500 focus:outline-4 focus:outline-orange-600 px-4 py-2 rounded bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-200 font-medium">
                  Attention Required
                </button>
              ),
            },
            {
              title: "Dotted Indicators",
              description:
                "Dotted outlines (`outline-dotted`) for subtle feedback on optional fields.",
              code: `<input class="outline-dotted outline-2 outline-purple-500 focus:outline-4 focus:outline-purple-600 px-3 py-2 border rounded" placeholder="Optional field" />`,
              preview: (
                <input
                  className="outline-dotted outline-2 outline-purple-500 focus:outline-4 focus:outline-purple-600 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-800"
                  placeholder="Optional field"
                />
              ),
            },
            {
              title: "Double Emphasis",
              description:
                "Double outlines (`outline-double`) for high-priority focus or critical actions.",
              code: `<button class="outline-double outline-4 outline-red-500 focus:outline-8 focus:outline-red-600 px-4 py-2 rounded font-bold">
  Critical Action
</button>`,
              preview: (
                <button className="outline-double outline-4 outline-red-500 focus:outline-8 focus:outline-red-600 px-4 py-2 rounded font-bold bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-200">
                  Critical Action
                </button>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using outline-none everywhere",
              reason:
                "Removing all outlines breaks keyboard navigation accessibility. Always provide alternative focus indicators if you remove the default.",
              example: `button { outline: none; }`,
              level: "critical",
            },
            {
              title: "Inconsistent style usage",
              reason:
                "Use consistent outline styles for similar interaction types across your interface to avoid confusing users.",
              example: `<button class="outline-dashed">Primary</button>\n<button class="outline-dotted">Primary</button>`,
              level: "warning",
            },
            {
              title: "Too thin outlines with complex styles",
              reason:
                "Complex outline styles (dotted, dashed) need sufficient width (at least 2px) to be visible and recognizable.",
              example: `<button class="outline-dotted outline-1">Too thin</button>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Style consistency:",
              text: "Use consistent outline styles for similar interaction types",
            },
            {
              bold: "Minimum width:",
              text: "Use at least 2px width for dashed/dotted styles to remain visible",
            },
            {
              bold: "Visual hierarchy:",
              text: "Use different styles to indicate priority or type of interaction",
            },
            {
              bold: "Accessibility first:",
              text: "Never remove focus outlines without providing clear alternatives",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["effects", "outline", "width"],
    title: "Outline Width",
    description:
      "Complete guide to CSS outline width utilities. Control the thickness of element outlines for accessibility, focus states, and visual feedback without affecting layout.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Outline Width Utilities",
          description:
            "Complete guide to CSS outline width utilities. Control the thickness of element outlines for accessibility, focus states, and visual feedback without affecting layout.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Outline Width",
          description:
            "Outline width controls the thickness of the outline drawn around elements. Unlike borders, outlines don't affect layout and are drawn outside the element box.  This makes them perfect for focus indicators that need to appear without shifting surrounding content.",
          features: [
            "Outlines don't affect element layout or box model",
            "Width values range from 0 (none) to 8px in Tailwind",
            "Perfect for accessibility and focus states",
            "Drawn outside the border, overlapping other content",
          ],
          layerAssignment:
            "Outline Layer - Visual feedback and accessibility indicators",
          browserBehavior:
            "Browser renders outline outside element box model, overlapping adjacent content without affecting layout.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Outline Width vs Border Width",
          columns: ["Property", "Layout Impact", "Use Case", "Accessibility"],
          rows: [
            {
              feature: "Outline Width",
              values: [
                "No layout impact",
                "Focus indicators",
                "Excellent for keyboard navigation",
              ],
            },
            {
              feature: "Border Width",
              values: [
                "Affects box model",
                "Visual boundaries",
                "Can disrupt layout if misused",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Outline Width Utilities",
          items: [
            { cls: "outline-0", desc: "No outline" },
            { cls: "outline-1", desc: "1px outline" },
            { cls: "outline-2", desc: "2px outline" },
            { cls: "outline-4", desc: "4px outline" },
            { cls: "outline-8", desc: "8px outline" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Outline Width Playground",
          description:
            "Test outline width utilities and see their impact on visual feedback. We've forced a solid blue outline so you can see the thickness immediately.",
          options: [
            "outline-0",
            "outline-1",
            "outline-2",
            "outline-4",
            "outline-8",
          ],
          defaultValue: "outline-2",
          buildMarkup: (outlineClass: string) => {
            return `<button class="${outlineClass} outline-blue-500 outline-solid px-4 py-2 rounded">
  Focus Button
</button>`;
          },
          renderPreview: (outlineClass: string) => {
            return (
              <button
                className={`outline-blue-500 px-4 py-2 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium shadow-sm`}
                style={{
                  outlineStyle: "solid",
                  outlineWidth: outlineClass.replace("outline-", "") + "px",
                }}
              >
                Focus Button
              </button>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Invisible Focus",
          description:
            "You have a button that needs to be accessible for keyboard users. Currently, when focused, it has no outline (`outline-0`), making it impossible to see which element is selected. Add `outline-2` (and an `outline-blue-500` color) to create a clear, visible focus ring.",
          codeSnippet: `<button class="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium transition-all focus:outline-blue-500 {input}">
  Tab to Focus Me
</button>`,
          options: ["outline-0", "outline-1", "outline-2", "outline-4"],
          correctOption: "outline-2",
          renderPreview: (userClass: string) => {
            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-12 rounded-lg">
                <button
                  className={`bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all hover:bg-indigo-700 active:scale-95`}
                  style={
                    userClass !== "outline-0"
                      ? {
                          outlineStyle: "solid",
                          outlineColor: "#3b82f6",
                          outlineWidth:
                            userClass.replace("outline-", "") + "px",
                        }
                      : { outlineStyle: "none" }
                  }
                >
                  Focus Me
                </button>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Focus States for Accessibility",
              description:
                "Clear focus indicators (`outline-2`) for keyboard navigation.",
              code: `<button class="outline-2 outline-blue-500 focus:outline-4 focus:outline-blue-600 px-4 py-2 rounded bg-white border">
  Accessible Button
</button>`,
              preview: (
                <button className="outline outline-2 outline-blue-500 focus:outline-4 focus:outline-blue-600 px-4 py-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  Accessible Button
                </button>
              ),
            },
            {
              title: "Form Input Focus",
              description:
                "Enhanced focus states (`focus:outline-2`) for form elements.",
              code: `<input class="outline-0 focus:outline-2 focus:outline-blue-500 px-3 py-2 border rounded" placeholder="Email address" />`,
              preview: (
                <input
                  className="outline-0 focus:outline-2 focus:outline-blue-500 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded w-full max-w-xs bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="Email address"
                />
              ),
            },
            {
              title: "Custom Focus Ring",
              description:
                "Thick focus rings (`focus:outline-8`) for high contrast mode or special emphasis.",
              code: `<a href="#" class="outline-0 focus:outline-8 focus:outline-yellow-400 text-blue-600">
  High Contrast Link
</a>`,
              preview: (
                <a
                  href="#"
                  className="outline-0 focus:outline-8 focus:outline-yellow-400 text-blue-600 dark:text-blue-400 hover:underline font-medium p-1 rounded"
                >
                  High Contrast Link
                </a>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using outline for visual decoration",
              reason:
                "Outlines are primarily for accessibility feedback, not decoration. Use borders or rings for decorative frames.",
              example: `<div class="outline-4 outline-blue-500">Wrong</div>`,
              level: "warning",
            },
            {
              title: "Removing all outlines",
              reason:
                "Never remove focus outlines completely without replacement. This breaks keyboard navigation.",
              example: `button { outline: none; }`,
              level: "critical",
            },
            {
              title: "Ignoring outline contrast",
              reason:
                "Ensure outlines have sufficient contrast against the background for visibility.",
              example: `<button class="outline-2 outline-gray-200 bg-white">Poor contrast</button>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Focus management:",
              text: "Always provide visible focus indicators for interactive elements",
            },
            {
              bold: "Color contrast:",
              text: "Ensure outline colors have good contrast ratios (WCAG AA minimum)",
            },
            {
              bold: "Thickness balance:",
              text: "Use thicker outlines (2px+) for better visibility",
            },
            {
              bold: "Offset consideration:",
              text: "Combine with outline-offset to prevent overlap with borders",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["effects", "ring", "color"],
    title: "Ring Color",
    description:
      "Complete guide to CSS ring color utilities. Control the color of outline rings for focus states, selection indicators, and decorative halos without affecting layout.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Ring Color Utilities",
          description:
            "Complete guide to CSS ring color utilities. Control the color of outline rings for focus states, selection indicators, and decorative halos without affecting layout.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Ring Color",
          description:
            "Ring color utilities allow you to tint the solid box-shadow rings created by the `ring` width utilities.  Because rings are implemented as box-shadows, they follow the element's border-radius perfectly and don't take up layout space.",
          features: [
            "Sets the color of the ring box-shadow",
            "Supports all Tailwind colors and opacity modifiers",
            "Perfect for custom focus rings and active states",
            "Follows border-radius automatically",
          ],
          layerAssignment:
            "Effect Layer - Painted as a solid shadow outside the border",
          browserBehavior:
            "Browser renders the ring as a box-shadow, blending with the background if opacity is used.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Ring Color vs Border Color",
          columns: ["Property", "Mechanism", "Layout Impact", "Radius Support"],
          rows: [
            {
              feature: "Ring Color",
              values: [
                "Box Shadow",
                "None (overlays)",
                "Matches element radius",
              ],
            },
            {
              feature: "Border Color",
              values: [
                "Border Property",
                "Takes up space",
                "Matches element radius",
              ],
            },
            {
              feature: "Outline Color",
              values: [
                "Outline Property",
                "None (overlays)",
                "Matches radius (modern browsers)",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Ring Color Utilities",
          items: [
            { cls: "ring-blue-500", desc: "Primary blue ring" },
            { cls: "ring-red-500", desc: "Destructive red ring" },
            { cls: "ring-green-500", desc: "Success green ring" },
            { cls: "ring-yellow-400", desc: "Warning yellow ring" },
            { cls: "ring-transparent", desc: "Invisible ring" },
            { cls: "ring-current", desc: "Matches text color" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Ring Color Playground",
          description:
            "Test ring color utilities. Note that a ring-width utility (like ring-4) is required for the color to be visible.",
          options: [
            "ring-blue-500",
            "ring-purple-500",
            "ring-pink-500",
            "ring-orange-500",
            "ring-teal-500",
            "ring-slate-400",
          ],
          defaultValue: "ring-blue-500",
          buildMarkup: (ringColor: string) => {
            return `<button class="ring-4 ${ringColor} ring-offset-2 px-6 py-3 rounded-lg bg-white shadow-sm font-semibold">
  Ring Button
</button>`;
          },
          renderPreview: (ringColor: string) => {
            return (
              <button
                className={`ring-4 ${ringColor} ring-offset-2 ring-offset-white dark:ring-offset-slate-900 px-6 py-3 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-sm font-semibold transition-all`}
              >
                Ring Button
              </button>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Dangerous Button",
          description:
            "You have a 'Delete Account' button. Currently, when focused or active, it has a default blue ring (`ring-blue-500`), which feels too safe. Change the ring color to `ring-red-500` to visually warn the user that this is a destructive action.",
          codeSnippet: `<button class="px-6 py-2 bg-white text-red-600 font-bold rounded-lg shadow-sm ring-2 {input} focus:outline-none">
  Delete Account
</button>`,
          options: [
            "ring-blue-500",
            "ring-gray-300",
            "ring-red-500",
            "ring-green-500",
          ],
          correctOption: "ring-red-500",
          renderPreview: (userClass: string) => {
            const isDanger = userClass === "ring-red-500";
            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-12 rounded-lg">
                <div className="text-center space-y-4">
                  <button
                    className={`
                    px-6 py-3 bg-white dark:bg-slate-900 text-red-600 font-bold rounded-lg shadow-md transition-all 
                    ring-2 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-950
                    ${userClass}
                  `}
                  >
                    Delete Account
                  </button>
                  <div
                    className={`text-xs font-medium transition-all duration-500 ${
                      isDanger
                        ? "text-red-500 opacity-100"
                        : "text-slate-400 opacity-0"
                    }`}
                  >
                    ⚠️ Warning Level: Critical
                  </div>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Active Selection Card",
              description:
                "Use a colored ring to indicate a selected state in a grid or list.",
              code: `<div class="p-6 rounded-xl border border-indigo-100 ring-2 ring-indigo-600 ring-offset-2">
  <h3 class="text-indigo-900 font-bold">Pro Plan</h3>
  <p class="text-indigo-600">Selected</p>
</div>`,
              preview: (
                <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900 ring-2 ring-indigo-600 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-950 shadow-sm w-48 text-center">
                  <h3 className="text-indigo-900 dark:text-indigo-300 font-bold text-lg">
                    Pro Plan
                  </h3>
                  <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    Selected
                  </div>
                </div>
              ),
            },
            {
              title: "User Status Indicator",
              description:
                "Rings can create a gap between an avatar and a status dot (mimicking a cut-out mask).",
              code: `<div class="relative inline-block">
  <img class="w-12 h-12 rounded-full" src="..." />
  <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 ring-2 ring-white rounded-full"></span>
</div>`,
              preview: (
                <div className="relative inline-block">
                  <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xl">
                    👤
                  </div>
                  <span className="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full bg-green-500 ring-2 ring-white dark:ring-slate-900"></span>
                </div>
              ),
            },
            {
              title: "Focus Ring",
              description:
                "Custom brand-colored focus ring replacing the default browser outline.",
              code: `<input class="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Focus me..." />`,
              preview: (
                <input
                  className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-transparent w-full max-w-xs"
                  placeholder="Focus me..."
                />
              ),
            },
            {
              title: "Opacity Modifier",
              description: "Using color opacity for a subtle glow effect.",
              code: `<button class="ring-4 ring-blue-500/30 px-4 py-2 bg-blue-600 text-white rounded">
  Soft Glow
</button>`,
              preview: (
                <button className="ring-4 ring-blue-500/30 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-all">
                  Soft Glow
                </button>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Forgetting Ring Width",
              reason:
                "Setting a `ring-color` does nothing if you haven't also set a `ring` width (e.g., `ring-2`). Defaults to 0 width.",
              example: `<div class="ring-red-500">No width set</div>`,
              level: "warning",
            },
            {
              title: "Low Contrast Focus",
              reason:
                "Using very light ring colors for focus states makes it hard for keyboard users to navigate.",
              example: `<button class="focus:ring-yellow-100">Too faint</button>`,
              level: "warning",
            },
            {
              title: "Clashing with Border",
              reason:
                "If you use both a border and a ring of the same color, they merge. Use `ring-offset` to separate them.",
              example: `<div class="border-blue-500 ring-blue-500">Looks like one thick border</div>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Use for Focus:",
              text: "The primary use case is `focus:ring-{color}` to create accessible, custom focus indicators.",
            },
            {
              bold: "Ring Offset:",
              text: "Always pair colored rings with `ring-offset-{width}` and `ring-offset-{color}` when highlighting elements on colored backgrounds.",
            },
            {
              bold: "Inset Rings:",
              text: "Use `ring-inset` if you want the color to sit inside the element (like an inner border) without affecting layout size.",
            },
            {
              bold: "Group Focus:",
              text: "Use `group-focus:ring-{color}` on a parent element to light up a container when a child input is focused.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["effects", "ring", "offset-color"],
    title: "Ring Offset Color",
    description:
      "Utilities for changing the color of the ring offset. Essential for blending the 'fake gap' into different background colors, especially in dark mode.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Ring Offset Color",
          description:
            "Utilities for changing the color of the ring offset. Essential for blending the 'fake gap' into different background colors, especially in dark mode.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Ring Offset Color",
          description:
            "The ring offset creates a gap by painting a solid stroke of color between the element and the ring.  By default, this color is white. If your element sits on a dark background, the white offset will look like a glaring white border. You use `ring-offset-{color}` to match the parent background, creating the illusion of transparency.",
          features: [
            "Sets the color of the 'gap' created by ring-offset-width",
            "Must match the PARENT background color to look like a gap",
            "Supports all Tailwind colors (e.g., ring-offset-slate-900)",
            "Does not support true transparency (it paints solid pixels)",
          ],
          layerAssignment:
            "Masking Layer - Paints the 'invisible' space between element and ring",
          browserBehavior:
            "Browser renders this as the first, innermost solid box-shadow layer.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Ring Offset Color Strategy",
          columns: ["Scenario", "Offset Color Needed", "Why?"],
          rows: [
            {
              feature: "White Card",
              values: [
                "ring-offset-white (Default)",
                "Matches the white card background",
              ],
            },
            {
              feature: "Dark Mode",
              values: [
                "ring-offset-slate-900 (etc)",
                "Must match the dark background to 'disappear'",
              ],
            },
            {
              feature: "Brand Gradient",
              values: [
                "Not Recommended",
                "Ring offset is solid; cannot match a gradient perfectly",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Ring Offset Color Utilities",
          items: [
            { cls: "ring-offset-white", desc: "Default white offset" },
            { cls: "ring-offset-black", desc: "Black offset" },
            { cls: "ring-offset-slate-50", desc: "Slate-50 offset" },
            { cls: "ring-offset-slate-900", desc: "Slate-900 offset" },
            {
              cls: "ring-offset-transparent",
              desc: "Transparent (rarely used)",
            },
            { cls: "ring-offset-current", desc: "Current text color" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Offset Color Playground",
          description:
            "Test ring offset colors. We've set a distinct background color (slate-800) so you can see which offset color blends in correctly.",
          options: [
            "ring-offset-white",
            "ring-offset-black",
            "ring-offset-slate-800",
            "ring-offset-red-500",
            "ring-offset-blue-200",
          ],
          defaultValue: "ring-offset-white",
          buildMarkup: (offsetColor: string) => {
            return `<div class="bg-slate-800 p-8">
  <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg ring-4 ring-blue-400 ring-offset-4 ${offsetColor}">
    Offset Button
  </button>
</div>`;
          },
          renderPreview: (offsetColor: string) => {
            return (
              <div className="w-full h-full flex items-center justify-center bg-slate-800 p-8 rounded-lg">
                <button
                  className={`bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all ring-4 ring-blue-400 ring-offset-4 ${offsetColor}`}
                >
                  Offset Button
                </button>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Dark Mode Glitch",
          description:
            "You have a dark-themed card with an avatar. The avatar has a `ring-offset-2` to create a gap, but the offset color defaults to `white`. This creates an ugly white border around the avatar on the dark background. Fix it by changing the offset color to match the card's background: `ring-offset-slate-900`.",
          codeSnippet: `<div class="bg-slate-900 p-6 rounded-xl">
  <img 
    src="..." 
    class="w-12 h-12 rounded-full ring-2 ring-blue-500 ring-offset-2 {input}" 
  />
</div>`,
          options: [
            "ring-offset-white",
            "ring-offset-gray-200",
            "ring-offset-black",
            "ring-offset-slate-900",
          ],
          correctOption: "ring-offset-slate-900",
          renderPreview: (userClass: string) => {
            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-50 p-12 rounded-lg">
                {/* The Dark Card Container */}
                <div className="bg-slate-900 p-8 rounded-xl shadow-2xl flex flex-col items-center gap-4 w-64 border border-slate-800">
                  <div className="relative">
                    {/* Avatar with the user's ring settings */}
                    <div
                      className={`
                      w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xl
                      ring-2 ring-blue-500 ring-offset-2
                      ${userClass}
                      transition-all duration-300
                    `}
                    >
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>

                    {/* Status Dot (Just for decoration) */}
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900"></div>
                  </div>

                  <div className="text-center">
                    <div className="text-white font-semibold">User Profile</div>
                    <div className="text-slate-400 text-xs">Dark Mode</div>
                  </div>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Dark Mode Focus Ring",
              description:
                "Correctly blending the focus ring offset in a dark theme.",
              code: `<button class="bg-slate-800 text-white px-4 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900">
  Dark Action
</button>`,
              preview: (
                <div className="p-8 bg-slate-900 rounded-lg flex justify-center w-full max-w-xs">
                  <button className="bg-slate-800 text-white px-4 py-2 rounded font-medium border border-slate-700 focus:outline-none ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-900 shadow-lg">
                    Dark Action (Focus)
                  </button>
                </div>
              ),
            },
            {
              title: "Avatar Group on Colored Header",
              description:
                "Avatars overlapping on a colored background need a matching offset.",
              code: `<div class="bg-indigo-600 p-4 flex -space-x-2">
  <img class="w-10 h-10 rounded-full ring-2 ring-indigo-600" src="..." />
  <img class="w-10 h-10 rounded-full ring-2 ring-indigo-600" src="..." />
</div>`,
              preview: (
                <div className="bg-indigo-600 p-6 rounded-lg flex justify-center -space-x-3 w-full max-w-xs">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-indigo-200 border-2 border-indigo-600 flex items-center justify-center text-xs font-bold text-indigo-800"
                      // Simulate ring offset effect with border on parent bg color for preview simplicity
                      style={{ border: "none", boxShadow: "0 0 0 2px #4f46e5" }}
                    >
                      U{i}
                    </div>
                  ))}
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using White Offset in Dark Mode",
              reason:
                "This is the most common error. It creates a jagged white halo around elements in dark themes.",
              example: `<div class="dark:bg-black"><button class="ring-offset-white">Halo Effect</button></div>`,
              level: "critical",
            },
            {
              title: "Offset on Gradient Backgrounds",
              reason:
                "Ring offset is a solid color. It cannot match a gradient background, so it will look like a solid border cutting through the gradient.",
              example: `<div class="bg-gradient-to-r ..."><button class="ring-offset-2">Looks bad</button></div>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Theme Configuration:",
              text: "Use `dark:ring-offset-slate-900` utilities to automatically switch offset colors when toggling dark mode.",
            },
            {
              bold: "Gradient Fix:",
              text: "If your background is a gradient, avoid `ring-offset` entirely. Use `outline` with `outline-offset` instead, as outline supports transparency.",
            },
            {
              bold: "Smooth Transition:",
              text: "If you transition background colors, remember to add `transition-all` so the `ring-offset-color` transitions smoothly with the background.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["effects", "ring", "offset-width"],
    title: "Ring Offset Width",
    description:
      "Utilities for simulating space between an outline ring and an element. Essential for creating distinct focus states, 'cutout' effects on overlapping avatars, and high-contrast selection indicators.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Ring Offset Width",
          description:
            "Utilities for simulating space between an outline ring and an element. Essential for creating distinct focus states, 'cutout' effects on overlapping avatars, and high-contrast selection indicators.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Ring Offset",
          description:
            "The ring offset utility doesn't actually make the element smaller or add margin. Instead, it paints a solid stroke of color (matching the background) *outside* the element, pushing the actual ring further out.  Think of it as a 'masking halo' that creates visual separation.",
          features: [
            "Simulates a gap between element and ring",
            "Implemented as a solid box-shadow layer",
            "Must be paired with a ring width (e.g., ring-2)",
            "Crucial for accessibility on busy backgrounds",
          ],
          layerAssignment:
            "Effect Layer - Paints a solid 'spacer' shadow behind the main ring",
          browserBehavior:
            "Browser renders the offset as the first layer of the box-shadow stack, effectively masking the area immediately surrounding the border.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Ring Offset vs Outline Offset",
          columns: ["Property", "Mechanism", "Visual Gap", "Transparency"],
          rows: [
            {
              feature: "Ring Offset",
              values: [
                "Solid Box Shadow",
                "Fake (painted solid color)",
                "No (masks background)",
              ],
            },
            {
              feature: "Outline Offset",
              values: [
                "Outline Property",
                "Real (transparent space)",
                "Yes (shows background)",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Ring Offset Utilities",
          items: [
            { cls: "ring-offset-0", desc: "0px offset" },
            { cls: "ring-offset-1", desc: "1px offset" },
            { cls: "ring-offset-2", desc: "2px offset (Standard)" },
            { cls: "ring-offset-4", desc: "4px offset" },
            { cls: "ring-offset-8", desc: "8px offset" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Offset Playground",
          description:
            "Test ring offset widths. The ring itself is set to black (`ring-black`) so you can clearly see the white offset gap created by the utility.",
          options: [
            "ring-offset-0",
            "ring-offset-1",
            "ring-offset-2",
            "ring-offset-4",
            "ring-offset-8",
          ],
          defaultValue: "ring-offset-2",
          buildMarkup: (offset: string) => {
            return `<button class="bg-indigo-500 text-white px-6 py-3 rounded-lg ring-4 ring-black ${offset}">
  Offset Button
</button>`;
          },
          renderPreview: (offset: string) => {
            return (
              <button
                className={`bg-indigo-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all ring-4 ring-black ${offset}`}
              >
                Offset Button
              </button>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Invisible Selection",
          description:
            "You are building a color picker. When the user selects the black swatch, the black focus ring merges with the black button, making the selection invisible! Add `ring-offset-2` to paint a white gap between the swatch and the ring, making the selection pop.",
          codeSnippet: `<div class="flex gap-4">
  <button class="w-12 h-12 bg-black rounded-full ring-2 ring-black {input}">
  </button>
</div>`,
          options: [
            "ring-offset-0",
            "ring-offset-1",
            "ring-offset-2",
            "ring-offset-4",
          ],
          correctOption: "ring-offset-2",
          renderPreview: (userClass: string) => {
            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-50 p-12 rounded-lg">
                <div className="flex gap-6">
                  {/* Unselected Swatch */}
                  <div className="w-12 h-12 bg-red-500 rounded-full cursor-pointer opacity-50 hover:opacity-100 transition-opacity" />

                  {/* The Target Swatch */}
                  <div
                    className={`
                    w-12 h-12 bg-black rounded-full transition-all duration-300 relative
                    ring-2 ring-black
                    ${userClass}
                    ring-offset-slate-50
                  `}
                  >
                    {/* Checkmark to indicate selection */}
                    <span className="absolute inset-0 flex items-center justify-center text-white">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                  </div>

                  {/* Unselected Swatch */}
                  <div className="w-12 h-12 bg-blue-500 rounded-full cursor-pointer opacity-50 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Color Swatch Selection",
              description:
                "Crucial for selecting colors that might match the ring color.",
              code: `<button class="w-10 h-10 rounded-full bg-blue-600 ring-2 ring-blue-600 ring-offset-2">
</button>`,
              preview: (
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full bg-blue-600 ring-2 ring-blue-600 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 shadow-sm"></button>
                  <button className="w-10 h-10 rounded-full bg-green-500 ring-2 ring-green-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 shadow-sm"></button>
                  <button className="w-10 h-10 rounded-full bg-black ring-2 ring-black ring-offset-2 ring-offset-white dark:ring-offset-slate-900 shadow-sm dark:bg-white dark:ring-white"></button>
                </div>
              ),
            },
            {
              title: "Accessible Focus Ring",
              description:
                "Standard focus pattern that separates the ring from the button border for better visibility.",
              code: `<button class="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
  Cancel
</button>`,
              preview: (
                <button className="bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-200 px-4 py-2 rounded font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition-all focus:outline-none ring-2 ring-indigo-500 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900">
                  Cancel (Simulated Focus)
                </button>
              ),
            },
            {
              title: "Avatar Cutout Effect",
              description:
                "Ring offsets are often used on avatar groups to create a 'cutout' border effect that matches the background.",
              code: `<div class="flex -space-x-4">
  <img class="w-10 h-10 rounded-full ring-2 ring-white" src="..." />
  <img class="w-10 h-10 rounded-full ring-2 ring-white" src="..." />
  <img class="w-10 h-10 rounded-full ring-2 ring-white" src="..." />
</div>`,
              preview: (
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 ring-2 ring-white dark:ring-slate-900 flex items-center justify-center text-xs font-bold text-slate-500 dark:text-slate-400"
                    >
                      U{i}
                    </div>
                  ))}
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using on Transparent Backgrounds",
              reason:
                "Ring offset paints a solid color. If your background is a gradient or image, the offset will look like a solid border, not a gap.",
              example: `<div class="bg-gradient-to-r ..."><button class="ring-offset-2">Looks bad</button></div>`,
              level: "warning",
            },
            {
              title: "Forgetting Ring Width",
              reason:
                "Offset pushes the ring out, but if the ring has 0 width (default), you won't see anything. Always pair with `ring-{width}`.",
              example: `<div class="ring-offset-4">No ring visible</div>`,
              level: "warning",
            },
            {
              title: "Mismatching Offset Color",
              reason:
                "If the `ring-offset-color` doesn't match the parent background, it looks like a double border instead of a gap.",
              example: `<div class="bg-black"><button class="ring-offset-2 ring-offset-white">White border on black bg</button></div>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Dark Mode:",
              text: "Always update `ring-offset-{color}` in dark mode (e.g., `dark:ring-offset-slate-900`) so the gap blends in.",
            },
            {
              bold: "Focus Consistency:",
              text: "Use `ring-offset-2` globally for buttons to create a consistent, accessible focus style.",
            },
            {
              bold: "Complex Backgrounds:",
              text: "If you have a complex background image, avoid `ring-offset` and use `outline` properties instead, which support true transparency.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["flex", "basis"],
    title: "Flex Basis",
    description:
      "Flex-basis sets the initial main size of a flex item before it grows or shrinks. Think of it as the 'starting width' of a flex item. When combined with flex-grow and flex-shrink, you get powerful responsive layouts.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Flex Basis",
          description:
            "Flex-basis sets the initial main size of a flex item before it grows or shrinks. Think of it as the 'starting width' of a flex item. When combined with flex-grow and flex-shrink, you get powerful responsive layouts.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Flex Basis",
          description:
            "Flex basis establishes the initial main size of flex items before growing or shrinking occurs, providing predictable starting points for responsive behavior.  It works by setting the 'ideal' size of an item, which the browser then adjusts based on available space and other flex properties.",
          features: [
            "Sets initial width/height before flex calculations",
            "Works with flex-grow and flex-shrink for responsive sizing",
            "Accepts length values, percentages, and auto",
            "Affects how remaining space is distributed",
            "Critical for creating predictable grid layouts",
          ],
          layerAssignment: "Sizing Layer - Defines initial item dimensions",
          browserBehavior:
            "Browser calculates initial size based on basis, then applies grow/shrink calculations to fit the container.",
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Flex-Basis Utility Classes",
          items: [
            {
              cls: "basis-0",
              desc: "flex-basis: 0 — starts from zero and grows/shrinks based on flex rules",
            },
            {
              cls: "basis-auto",
              desc: "flex-basis: auto — item size depends on content",
            },
            { cls: "basis-1/4", desc: "flex-basis: 25% of container width" },
            { cls: "basis-1/3", desc: "flex-basis: 33.33% of container width" },
            { cls: "basis-1/2", desc: "flex-basis: 50% of container width" },
            {
              cls: "basis-full",
              desc: "flex-basis: 100% — takes full container width",
            },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Flex Basis Playground",
          description:
            "See how changing the basis of the middle item affects the layout. Note how 'basis-0' relies entirely on flex-grow/shrink, while 'basis-auto' respects the content size.",
          options: [
            "basis-0",
            "basis-auto",
            "basis-1/4",
            "basis-1/3",
            "basis-1/2",
            "basis-full",
          ],
          defaultValue: "basis-1/3",
          buildMarkup: (basisClass: string) => {
            return `<div class="flex gap-4 p-4 bg-slate-800 rounded h-32">
  <div class="bg-blue-500 p-4 rounded flex-1">Item 1</div>
  <div class="${basisClass} bg-indigo-500 p-4 rounded flex-1">Target</div>
  <div class="bg-blue-500 p-4 rounded flex-1">Item 3</div>
</div>`;
          },
          renderPreview: (basisClass: string) => {
            return (
              <div className="flex gap-4 p-4 bg-slate-800 rounded h-32 w-full text-white font-medium text-sm">
                <div className="bg-blue-500/50 p-4 rounded flex items-center justify-center flex-1">
                  Item 1
                </div>
                <div
                  className={`${basisClass} bg-indigo-500 p-4 rounded flex items-center justify-center flex-1 transition-all duration-500 border-2 border-indigo-300`}
                >
                  Target
                </div>
                <div className="bg-blue-500/50 p-4 rounded flex items-center justify-center flex-1">
                  Item 3
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Uneven Columns",
          description:
            "You want a 3-column layout where each column starts at exactly 1/3 of the width. Currently, they are sized by content (`basis-auto`), making them look uneven because one column has much more text. Apply `basis-1/3` to force them into equal starting widths.",
          codeSnippet: `<div class="flex gap-4 p-4 bg-slate-900 rounded-xl">
  <div class="{input} bg-indigo-600 p-4 rounded text-white text-center">
    Short
  </div>

  <div class="{input} bg-indigo-700 p-4 rounded text-white text-center">
    Medium Content
  </div>

  <div class="{input} bg-indigo-800 p-4 rounded text-white text-center">
    Very Long Content That Pushes Width
  </div>
</div>`,
          options: ["basis-auto", "basis-1/3", "basis-full", "w-1/3"],
          correctOption: "basis-1/3",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
              <div className="w-full max-w-lg bg-slate-900 p-6 rounded-xl shadow-2xl border border-slate-700">
                <div className="flex gap-4 w-full">
                  <div
                    className={`${userClass} bg-indigo-600 p-4 rounded text-white text-center font-bold text-xs flex items-center justify-center transition-all duration-500`}
                  >
                    Short
                  </div>
                  <div
                    className={`${userClass} bg-indigo-700 p-4 rounded text-white text-center font-bold text-xs flex items-center justify-center transition-all duration-500`}
                  >
                    Medium Content
                  </div>
                  <div
                    className={`${userClass} bg-indigo-800 p-4 rounded text-white text-center font-bold text-xs flex items-center justify-center transition-all duration-500`}
                  >
                    Very Long Content That Pushes Width
                  </div>
                </div>

                {/* Visual Guide */}
                {userClass === "basis-1/3" && (
                  <div className="mt-4 flex justify-between px-2">
                    <div className="w-1/3 text-center text-[10px] text-green-400 border-t border-green-500/30 pt-1">
                      33%
                    </div>
                    <div className="w-1/3 text-center text-[10px] text-green-400 border-t border-green-500/30 pt-1">
                      33%
                    </div>
                    <div className="w-1/3 text-center text-[10px] text-green-400 border-t border-green-500/30 pt-1">
                      33%
                    </div>
                  </div>
                )}
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Detailed Real-World Examples",
          examples: [
            {
              title: "Responsive Card Grid",
              description:
                "A flex layout where each card starts with a specific basis but can grow to fill the row.",
              code: `<div class="flex gap-4 flex-wrap">
  <div class="flex-1 basis-44 bg-blue-600 rounded p-4">Card 1</div>
  <div class="flex-1 basis-56 bg-blue-500 rounded p-4">Card 2</div>
  <div class="flex-1 basis-50 bg-blue-400 rounded p-4">Card 3</div>
  <div class="flex-1 basis-40 bg-blue-300 rounded p-4">Card 4</div>
</div>`,
              preview: (
                <div className="flex gap-2 flex-wrap w-full">
                  <div className="flex-1 basis-32 bg-blue-600 rounded p-4 text-white text-center text-xs">
                    Card 1
                  </div>
                  <div className="flex-1 basis-48 bg-blue-500 rounded p-4 text-white text-center text-xs">
                    Card 2
                  </div>
                  <div className="flex-1 basis-40 bg-blue-400 rounded p-4 text-white text-center text-xs">
                    Card 3
                  </div>
                  <div className="flex-1 basis-24 bg-blue-300 rounded p-4 text-white text-center text-xs">
                    Card 4
                  </div>
                </div>
              ),
            },
            {
              title: "Navigation Bar",
              description:
                "A typical nav bar where the search input expands to fill space while the logo and button stay fixed.",
              code: `<nav class="flex items-center gap-4 p-4 bg-slate-800 rounded">
  <div class="basis-20 bg-yellow-400 rounded text-center">Logo</div>
  <input class="basis-48 flex-grow px-3 py-2 rounded" placeholder="Search..." />
  <button class="basis-24 px-4 py-2 bg-blue-600 text-white rounded">Sign In</button>
</nav>`,
              preview: (
                <nav className="flex items-center gap-4 p-4 bg-slate-800 rounded w-full">
                  <div className="basis-16 bg-yellow-400 rounded text-xs font-bold p-2 text-center text-slate-900">
                    Logo
                  </div>
                  <div className="basis-48 flex-grow bg-white rounded h-8 opacity-90"></div>
                  <div className="basis-20 bg-blue-600 text-white rounded text-xs font-bold p-2 text-center">
                    Sign In
                  </div>
                </nav>
              ),
            },
            {
              title: "Form with Flexible Input",
              description:
                "An input field that flexes to fill available space next to a fixed-width submit button.",
              code: `<form class="flex gap-4 items-end">
  <input class="basis-44 flex-grow px-3 py-2 rounded border" placeholder="Email" />
  <button class="basis-24 px-6 py-2 bg-purple-600 text-white rounded">Submit</button>
</form>`,
              preview: (
                <div className="flex gap-4 items-center w-full max-w-md">
                  <div className="basis-44 flex-grow h-10 rounded border border-slate-300 bg-white"></div>
                  <div className="basis-24 h-10 bg-purple-600 text-white rounded flex items-center justify-center text-sm font-bold">
                    Submit
                  </div>
                </div>
              ),
            },
            {
              title: "Sidebar + Main Content",
              description: "A fixed sidebar with a flexible main content area.",
              code: `<div class="flex gap-6 min-h-[200px]">
  <aside class="flex-none basis-48 bg-red-500 p-6">Sidebar</aside>
  <main class="flex-1 basis-0 bg-green-500 p-6">Main Content</main>
</div>`,
              preview: (
                <div className="flex gap-4 w-full h-32">
                  <div className="flex-none basis-24 bg-red-500/80 rounded p-4 text-white text-xs font-bold">
                    Sidebar
                  </div>
                  <div className="flex-1 basis-0 bg-green-500/80 rounded p-4 text-white text-xs font-bold">
                    Main Content
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using basis without considering container width",
              reason:
                "Fixed basis values can cause overflow in narrow containers if wrap is disabled.",
              example: `<div class="basis-96">Very wide content in small container</div>`,
              level: "critical",
            },
            {
              title: "Confusing basis with width",
              reason:
                "Basis affects flex calculation (main axis), not direct width (unless flex-direction is row). It sets the starting point, not the final limit.",
              example: `<div class="basis-1/2 w-full">Conflicting sizing</div>`,
              level: "warning",
            },
            {
              title: "Not combining basis with grow",
              reason:
                "Fixed basis without `flex-grow` leaves unused space in the container. Use `grow` if you want it to fill the remaining area.",
              example: `<div class="basis-1/3">Content doesn't fill remaining space</div>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Equal columns:",
              text: "Use `flex-1` (which sets basis-0 and grow-1) to create equal-width columns that adapt to container.",
            },
            {
              bold: "Responsive grids:",
              text: "Combine `basis-` classes with `flex-grow` for robust responsive grid layouts.",
            },
            {
              bold: "Prevent shrinking:",
              text: "Use `flex-shrink-0` if you want to respect the basis size strictly and prevent items from shrinking.",
            },
            {
              bold: "Content-based sizing:",
              text: "Use `basis-auto` for items that should size naturally based on their inner content.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["flex", "direction"],
    title: "Flex Direction",
    description:
      "Control the direction flex items are laid out — and learn how that affects real UI patterns.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Flex Direction",
          description:
            "Control the direction flex items are laid out — and learn how that affects real UI patterns.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Flex Direction",
          description:
            "Flex direction establishes the main axis along which flex items are laid out, fundamentally affecting layout behavior.  It determines whether children are stacked vertically or placed side-by-side.",
          features: [
            "Main axis determines primary layout direction",
            "Cross axis is perpendicular to main axis for alignment",
            "Writing mode affects direction interpretation",
            "Reverse utilities only change visual order, not DOM order",
            "Direction affects how other flex properties behave",
          ],
          layerAssignment:
            "Layout Direction - Defines main axis and item flow direction",
          browserBehavior:
            "Browser calculates main axis based on direction and positions items accordingly.",
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Flex Direction Utilities",
          items: [
            { cls: "flex-row", desc: "Row direction (left to right)" },
            { cls: "flex-col", desc: "Column direction (top to bottom)" },
            { cls: "flex-row-reverse", desc: "Row reverse (right to left)" },
            { cls: "flex-col-reverse", desc: "Column reverse (bottom to top)" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Flex Direction Playground",
          description:
            "Try different directions to see how they change the layout flow. Notice how 'justify' and 'align' properties swap axes when switching between row and column.",
          options: [
            "flex-row",
            "flex-col",
            "flex-row-reverse",
            "flex-col-reverse",
          ],
          defaultValue: "flex-row",
          buildMarkup: (directionClass: string) => {
            return `<div class="flex ${directionClass} gap-4 p-4 bg-slate-800 rounded">
  <div class="p-4 bg-blue-500 rounded">Item 1</div>
  <div class="p-4 bg-blue-500 rounded">Item 2</div>
  <div class="p-4 bg-blue-500 rounded">Item 3</div>
</div>`;
          },
          renderPreview: (directionClass: string) => {
            return (
              <div
                className={`flex ${directionClass} gap-4 p-4 bg-slate-800 rounded min-h-[200px] w-full items-start`}
              >
                <div className="p-4 bg-blue-500 rounded text-white font-bold w-20 h-20 flex items-center justify-center">
                  1
                </div>
                <div className="p-4 bg-blue-500 rounded text-white font-bold w-20 h-20 flex items-center justify-center">
                  2
                </div>
                <div className="p-4 bg-blue-500 rounded text-white font-bold w-20 h-20 flex items-center justify-center">
                  3
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Pricing Table",
          description:
            "These pricing cards are meant to be displayed side-by-side for comparison. Currently, they are stacked vertically (`flex-col`), taking up too much vertical space. Switch the container to `flex-row` to lay them out horizontally.",
          codeSnippet: `<div class="flex {input} gap-4 p-4 bg-slate-100 rounded-xl">
  <div class="flex-1 bg-white p-6 rounded shadow-sm">
    <h3 class="font-bold">Basic</h3>
    <div class="text-2xl font-bold mt-2">$9</div>
  </div>

  <div class="flex-1 bg-white p-6 rounded shadow-sm border-2 border-indigo-500">
    <h3 class="font-bold text-indigo-600">Pro</h3>
    <div class="text-2xl font-bold mt-2">$19</div>
  </div>

  <div class="flex-1 bg-white p-6 rounded shadow-sm">
    <h3 class="font-bold">Enterprise</h3>
    <div class="text-2xl font-bold mt-2">$49</div>
  </div>
</div>`,
          options: ["flex-row", "flex-col", "flex-col-reverse", "block"],
          correctOption: "flex-row",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg overflow-hidden">
              <div
                className={`flex ${userClass} gap-4 p-6 bg-slate-200 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-800 transition-all duration-500 max-w-full overflow-auto`}
              >
                {/* Card 1 */}
                <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm min-w-[120px]">
                  <h3 className="font-bold text-slate-700 dark:text-slate-200">
                    Basic
                  </h3>
                  <div className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">
                    $9
                  </div>
                  <div className="h-2 w-12 bg-slate-200 dark:bg-slate-700 rounded mt-4"></div>
                </div>

                {/* Card 2 */}
                <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-2 border-indigo-500 min-w-[120px] relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    POPULAR
                  </div>
                  <h3 className="font-bold text-indigo-600 dark:text-indigo-400">
                    Pro
                  </h3>
                  <div className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">
                    $19
                  </div>
                  <div className="h-2 w-16 bg-slate-200 dark:bg-slate-700 rounded mt-4"></div>
                </div>

                {/* Card 3 */}
                <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm min-w-[120px]">
                  <h3 className="font-bold text-slate-700 dark:text-slate-200">
                    Enterprise
                  </h3>
                  <div className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">
                    $49
                  </div>
                  <div className="h-2 w-14 bg-slate-200 dark:bg-slate-700 rounded mt-4"></div>
                </div>
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Responsive Navigation",
              description:
                "Stack items on mobile (`flex-col`) and switch to a row (`md:flex-row`) on larger screens.",
              code: `<nav class="flex flex-col md:flex-row items-center gap-4 p-4 bg-slate-800 rounded">
  <div class="font-bold text-white">Logo</div>
  <div class="flex gap-4">
    <a href="#" class="text-slate-300">Home</a>
    <a href="#" class="text-slate-300">About</a>
  </div>
  <button class="bg-blue-600 px-4 py-2 rounded text-white">Sign In</button>
</nav>`,
              preview: (
                <nav className="flex flex-col md:flex-row items-center gap-4 p-4 bg-slate-800 rounded w-full border border-slate-700">
                  <div className="font-bold text-white">Logo</div>
                  <div className="flex gap-4">
                    <span className="text-sm text-slate-300 hover:text-white cursor-pointer">
                      Home
                    </span>
                    <span className="text-sm text-slate-300 hover:text-white cursor-pointer">
                      About
                    </span>
                  </div>
                  <button className="bg-blue-600 px-3 py-1 rounded text-white text-sm hover:bg-blue-700 transition">
                    Sign In
                  </button>
                </nav>
              ),
            },
            {
              title: "Sidebar Layout",
              description:
                "A classic application layout using `flex-row` to place a sidebar next to main content.",
              code: `<div class="flex h-32 border rounded overflow-hidden">
  <aside class="w-24 bg-slate-100 p-4 border-r">Sidebar</aside>
  <main class="flex-1 p-4 bg-white">Main Content</main>
</div>`,
              preview: (
                <div className="flex h-32 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden w-full max-w-md">
                  <aside className="w-24 bg-slate-100 dark:bg-slate-800 p-4 border-r border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-500 dark:text-slate-400">
                    Sidebar
                  </aside>
                  <main className="flex-1 p-4 bg-white dark:bg-slate-900 text-sm text-slate-600 dark:text-slate-300">
                    Main Content Area
                  </main>
                </div>
              ),
            },
            {
              title: "Chat Interface",
              description:
                "Using `flex-col-reverse` to display new messages at the bottom, mimicking a chat history.",
              code: `<div class="flex flex-col-reverse gap-2 h-40 overflow-y-auto p-4 bg-slate-50 rounded border">
  <div class="bg-blue-100 p-2 rounded self-end">Newest message</div>
  <div class="bg-slate-200 p-2 rounded self-start">Older message</div>
</div>`,
              preview: (
                <div className="flex flex-col-reverse gap-2 h-40 overflow-y-auto p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 w-full max-w-xs">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg self-end text-sm text-blue-900 dark:text-blue-100">
                    Newest message
                  </div>
                  <div className="bg-slate-200 dark:bg-slate-800 p-2 rounded-lg self-start text-sm text-slate-700 dark:text-slate-300">
                    Older message
                  </div>
                  <div className="bg-slate-200 dark:bg-slate-800 p-2 rounded-lg self-start text-sm text-slate-700 dark:text-slate-300">
                    Oldest message
                  </div>
                </div>
              ),
            },
            {
              title: "Image Gallery",
              description:
                "Using `flex-row` with wrapping to create a responsive grid of images.",
              code: `<div class="flex flex-row flex-wrap gap-2">
  <div class="w-16 h-16 bg-slate-300 rounded"></div>
  <div class="w-16 h-16 bg-slate-300 rounded"></div>
  <div class="w-16 h-16 bg-slate-300 rounded"></div>
  <div class="w-16 h-16 bg-slate-300 rounded"></div>
</div>`,
              preview: (
                <div className="flex flex-row flex-wrap gap-2 w-full max-w-xs p-2 border border-slate-200 dark:border-slate-800 rounded">
                  <div className="w-16 h-16 bg-slate-300 dark:bg-slate-700 rounded"></div>
                  <div className="w-16 h-16 bg-slate-300 dark:bg-slate-700 rounded"></div>
                  <div className="w-16 h-16 bg-slate-300 dark:bg-slate-700 rounded"></div>
                  <div className="w-16 h-16 bg-slate-300 dark:bg-slate-700 rounded"></div>
                  <div className="w-16 h-16 bg-slate-300 dark:bg-slate-700 rounded"></div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using column for horizontal layouts",
              reason:
                "Using `flex-col` creates a vertical stack. For side-by-side elements, use `flex-row` (which is the default, but explicit is sometimes better for clarity).",
              example: `<div class="flex flex-col">Horizontal items? No.</div>`,
              level: "critical",
            },
            {
              title: "Not checking tab order with reverse",
              reason:
                "Visual reordering (`flex-row-reverse`) does not change the DOM order. Screen readers will read items in their original order, which might confuse users.",
              example: `<div class="flex-row-reverse">1, 2, 3 visually becomes 3, 2, 1</div>`,
              level: "warning",
            },
            {
              title: "Missing responsive direction",
              reason:
                "Layouts often need to be vertical on mobile and horizontal on desktop. Forgeting the `md:` prefix prevents this adaptation.",
              example: `<div class="flex-row">Stays row on tiny screens</div>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Direction choice:",
              text: "Use `flex-row` for horizontal UI (navbars, cards), `flex-col` for stacked UI (sidebars, forms).",
            },
            {
              bold: "Responsive design:",
              text: "Prefer responsive switches like `flex-col md:flex-row` for mobile-first layouts.",
            },
            {
              bold: "Reverse utilities:",
              text: "Use `*-reverse` sparingly and always test keyboard navigation order.",
            },
            {
              bold: "Main axis:",
              text: "Remember that direction determines the main axis—this affects how `justify-content` works.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["flex", "grow"],
    title: "Flex Grow",
    description:
      "You should reach for flex-grow when you need items to expand and fill leftover space in a flex container. flex-grow distributes *available* space — not desired space. It only works after all flex items claim their basis.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Flex Grow",
          description:
            "You should reach for flex-grow when you need items to expand and fill leftover space in a flex container. flex-grow distributes *available* space — not desired space. It only works after all flex items claim their basis, then allocates what remains according to grow ratios.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Flex-Grow Architecture",
          description:
            "Flex grow is a **Layout layer** utility that controls space distribution along the main axis. It operates in three phases: basis allocation → space calculation → growth distribution. ",
          features: [
            "Browser first gives each item its flex-basis (content size or explicit basis)",
            "Browser calculates remaining space: container width minus sum of all bases",
            "Browser distributes remaining space proportionally to grow values",
            "Higher grow values get larger shares, but all growing items get something",
          ],
          layerAssignment:
            "Layout layer — controls space distribution along main axis. Apply to flex children, not containers.",
          browserBehavior:
            "If no remaining space exists after basis allocation, grow has no visible effect. Items at their basis size won't shrink unless flex-shrink is also set.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Flex Properties Comparison",
          columns: ["Property", "Controls", "When To Use", "Common Pitfalls"],
          rows: [
            {
              feature: "flex-grow",
              values: [
                "Space expansion",
                "Fill remaining space",
                "Needs available space",
              ],
            },
            {
              feature: "flex-shrink",
              values: [
                "Space contraction",
                "Prevent overflow",
                "min-content blocks shrinking",
              ],
            },
            {
              feature: "flex-basis",
              values: [
                "Starting size",
                "Initial size before grow/shrink",
                "Auto vs fixed confusion",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Flex-Grow Utility Classes",
          items: [
            {
              cls: "grow",
              desc: "flex-grow: 1 — expands to fill available space",
            },
            {
              cls: "grow-0",
              desc: "flex-grow: 0 — will NOT expand beyond basis",
            },
            {
              cls: "basis-auto grow",
              desc: "Start at content size, then grow",
            },
            {
              cls: "basis-1/3 grow",
              desc: "Start at 33% width, grows if space available",
            },
            {
              cls: "basis-0 grow",
              desc: "Start at 0px, pure proportional growth",
            },
            { cls: "grow-[2]", desc: "flex-grow: 2 — gets 2x share of space" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Flex-Grow Playground",
          description:
            "Test how flex-grow distributes available space between items. Notice how grow values only affect leftover space after all flex-basis values are accounted for.",
          options: [
            "grow-0",
            "grow",
            "grow-[2]",
            "basis-0 grow",
            "basis-32 grow",
          ],
          defaultValue: "grow",
          buildMarkup: (growClass: string) => {
            return `<div class="flex gap-4">
  <div class="${growClass} bg-blue-500 p-4 rounded">Growing Item</div>
  <div class="basis-32 bg-red-500 p-4 rounded">Fixed 128px</div>
  <div class="basis-24 bg-green-500 p-4 rounded">Fixed 96px</div>
</div>`;
          },
          renderPreview: (growClass: string) => {
            return (
              <div className="flex gap-4 w-full">
                <div
                  className={`${growClass} bg-blue-500 p-4 rounded text-white flex items-center justify-center`}
                >
                  Growing Item
                </div>
                <div className="basis-32 bg-red-500 p-4 rounded text-white flex items-center justify-center shrink-0">
                  Fixed 128px
                </div>
                <div className="basis-24 bg-green-500 p-4 rounded text-white flex items-center justify-center shrink-0">
                  Fixed 96px
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Toolbar Gap",
          description:
            "You are building a toolbar with a 'Back' button on the left and 'Action' buttons on the right. Currently, they are all bunched up on the left side. You need an empty element in the middle to push them apart. Apply `grow` to the spacer `div` so it eats up all the empty space.",
          codeSnippet: `<div class="flex items-center gap-2 p-4 bg-slate-100 rounded-lg w-full">
  <button class="px-4 py-2 bg-white border rounded">Back</button>

  <div class="{input} h-1"></div>

  <button class="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
  <button class="px-4 py-2 bg-green-600 text-white rounded">Publish</button>
</div>`,
          options: ["grow", "grow-0", "w-full", "flex-1"],
          correctOption: "grow",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
              <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 w-full">
                  <button className="px-3 py-1.5 text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded hover:bg-slate-200 transition-colors">
                    Back
                  </button>

                  {/* The Spacer */}
                  <div
                    className={`${userClass} h-8 bg-slate-100 dark:bg-slate-800/50 rounded flex items-center justify-center transition-all duration-500`}
                  >
                    {userClass === "grow" && (
                      <span className="text-[10px] text-slate-400 font-mono">
                        Spacer (Growing)
                      </span>
                    )}
                  </div>

                  <button className="px-3 py-1.5 text-xs font-bold bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Save
                  </button>
                  <button className="px-3 py-1.5 text-xs font-bold bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                    Publish
                  </button>
                </div>
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Media Object (Thumbnail + Content)",
              description:
                "Classic layout with fixed image and flexible content space. The content grows to fill remaining space while thumbnail stays fixed.",
              code: `<div class="flex gap-4 items-center">
  <div class="basis-32 grow-0 shrink-0">
    <img class="w-full h-full object-cover rounded" src="thumb.jpg" />
  </div>
  <div class="grow">
    <h3 class="text-lg font-semibold">Title</h3>
    <p class="text-muted-foreground">Content grows to fill remaining space</p>
  </div>
</div>`,
              preview: (
                <div className="flex gap-4 items-center bg-slate-800 p-4 rounded w-full">
                  <div className="basis-24 grow-0 shrink-0">
                    <div className="w-full h-16 bg-slate-600 rounded flex items-center justify-center text-white text-xs">
                      Thumbnail
                    </div>
                  </div>
                  <div className="grow">
                    <h3 className="text-sm font-semibold text-white">
                      Media Title
                    </h3>
                    <p className="text-xs text-slate-300">
                      Content expands to fill remaining space.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              title: "Button Toolbar with Space Filler",
              description:
                "Navigation toolbar with fixed action buttons and expanding space filler to push buttons apart.",
              code: `<div class="flex gap-2">
  <button class="px-4 py-2 bg-blue-500 rounded">Back</button>
  <div class="grow"></div>
  <button class="px-4 py-2 bg-green-500 rounded">Save</button>
  <button class="px-4 py-2 bg-purple-500 rounded">Next</button>
</div>`,
              preview: (
                <div className="flex gap-2 items-center w-full bg-slate-100 dark:bg-slate-900 p-2 rounded">
                  <button className="px-3 py-1 bg-blue-500 rounded text-white text-xs">
                    Back
                  </button>
                  <div className="grow h-4 bg-slate-200 dark:bg-slate-800 rounded"></div>
                  <button className="px-3 py-1 bg-green-500 rounded text-white text-xs">
                    Save
                  </button>
                  <button className="px-3 py-1 bg-purple-500 rounded text-white text-xs">
                    Next
                  </button>
                </div>
              ),
            },
            {
              title: "Responsive Pricing Layout",
              description:
                "Pricing cards where the featured plan gets more growth factor (`grow-[2]`) for emphasis.",
              code: `<div class="flex gap-6">
  <div class="basis-48 grow bg-slate-100 rounded p-6">Basic</div>
  <div class="basis-56 grow-[2] bg-blue-500 text-white rounded p-6">Pro (Popular)</div>
  <div class="basis-48 grow bg-slate-100 rounded p-6">Enterprise</div>
</div>`,
              preview: (
                <div className="flex gap-2 w-full">
                  <div className="basis-24 grow bg-slate-700 rounded p-4 text-white text-xs text-center">
                    Basic
                  </div>
                  <div className="basis-32 grow-[2] bg-blue-600 text-white rounded p-4 text-xs font-bold text-center border-2 border-blue-400">
                    Pro (Popular)
                  </div>
                  <div className="basis-24 grow bg-slate-700 rounded p-4 text-white text-xs text-center">
                    Enterprise
                  </div>
                </div>
              ),
            },
            {
              title: "Dashboard Layout",
              description:
                "Fixed-width sidebar with main content (`grow`) that fills the remaining viewport width.",
              code: `<div class="flex gap-6 h-screen">
  <aside class="basis-64 grow-0 bg-slate-900 text-white p-6">Sidebar</aside>
  <main class="grow bg-white p-6">Main Content</main>
</div>`,
              preview: (
                <div className="flex gap-4 w-full h-32 border border-slate-700 rounded overflow-hidden">
                  <div className="basis-24 grow-0 bg-slate-800 p-4 text-white">
                    <div className="h-2 w-12 bg-slate-600 rounded mb-2"></div>
                    <div className="h-2 w-8 bg-slate-600 rounded"></div>
                  </div>
                  <div className="grow bg-slate-100 dark:bg-slate-900 p-4">
                    <div className="h-4 w-32 bg-slate-300 dark:bg-slate-700 rounded mb-2"></div>
                    <div className="h-24 w-full bg-slate-200 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700"></div>
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using grow without container constraint",
              reason:
                "Flex-grow needs a container with defined dimensions or it won't know what 'available space' means.",
              example: `<div class="flex grow"> \n  <div>Content</div>\n</div>`,
              level: "critical",
            },
            {
              title: "Expecting grow to create space",
              reason:
                "Grow distributes existing space, it doesn't create it. If your content already fills the container, grow does nothing.",
              example: `<div class="flex w-fit"> \n  <div class="grow">Won't expand</div>\n</div>`,
              level: "critical",
            },
            {
              title: "Confusing grow with width percentages",
              reason:
                "Grow is proportional distribution of *leftover* space, not a fixed percentage of the container width.",
              example: `<div class="flex w-full">\n  <div class="grow">50%? No, depends on siblings</div>\n  <div class="basis-64">Fixed width sibling</div>\n</div>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Layout Layer Rules:",
              text: "flex-grow only works on direct children of `display:flex` containers.",
            },
            {
              bold: "Parent constraints:",
              text: "Grow requires a container with defined width (e.g., `w-full` or fixed width) to have 'available space'.",
            },
            {
              bold: "Proportional thinking:",
              text: "Higher grow values (e.g., `grow-[2]`) get proportionally more space, but not fixed percentages.",
            },
            {
              bold: "Available space first:",
              text: "The browser calculates remaining space *after* all flex-basis values, then distributes based on grow ratios.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["flex", "order"],
    title: "Flex Order",
    description:
      "Control visual order of flex items without changing the DOM — useful for toolbars, responsive layouts, and emphasis placement.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Flex Order",
          description:
            "Control visual order of flex items without changing the DOM — useful for toolbars, responsive layouts, and emphasis placement.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Flex Order",
          description:
            "Flex order manipulates the visual sequence of items within their layout context without affecting DOM order or accessibility flow.  This allows for responsive rearrangements without breaking the semantic structure.",
          features: [
            "Changes visual rendering order only, not tab order",
            "Requires flex or grid layout context to work",
            "Default order is 0, negative numbers move to front",
            "Order values are relative to siblings, not global",
            "Screen readers still follow DOM order",
          ],
          layerAssignment:
            "Layout Layer - Controls visual sequencing within flex context",
          browserBehavior:
            "Browser reorders visual rendering while preserving original DOM structure for accessibility.",
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using order for accessibility fixes",
              reason:
                "Visual reordering breaks keyboard navigation and screen reader expectations. Only use order for visual tweaks, never to 'fix' a wrong DOM structure.",
              example: `<div class="order-last">Important content placed first in DOM</div>`,
              level: "critical",
            },
            {
              title: "Assuming order affects tab order",
              reason:
                "Tab navigation follows DOM order, not visual order. An element moved visually to the end will still be focused first if it's first in the DOM.",
              example: `<button class="order-first">Appears first but tabindex follows DOM</button>`,
              level: "warning",
            },
            {
              title: "Order without flex context",
              reason:
                "Order utilities have no effect outside flex/grid containers.",
              example: `<div class="order-2">No effect without parent flex container</div>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Flex Order Utilities",
          items: [
            { cls: "order-none", desc: "Normal order (0)" },
            { cls: "order-first", desc: "First item (-9999)" },
            { cls: "order-last", desc: "Last item (9999)" },
            { cls: "order-1", desc: "Second position (1)" },
            { cls: "order-2", desc: "Third position (2)" },
            { cls: "order-3", desc: "Fourth position (3)" },
            { cls: "order-4", desc: "Fifth position (4)" },
            { cls: "order-5", desc: "Sixth position (5)" },
            { cls: "order-6", desc: "Seventh position (6)" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Flex Order Playground",
          description:
            "Pick order values for each item and watch the visual layout change. Remember: DOM order doesn't change.",
          options: [
            "order-none",
            "order-first",
            "order-last",
            "order-1",
            "order-2",
          ],
          defaultValue: "order-none",
          buildMarkup: (orderClass: string) => {
            return `<div class="flex gap-4">
  <div class="${orderClass} p-4 bg-slate-700">Target Item</div>
  <div class="order-none p-4 bg-slate-700">Sibling 1</div>
  <div class="order-none p-4 bg-slate-700">Sibling 2</div>
</div>`;
          },
          renderPreview: (orderClass: string) => {
            return (
              <div className="flex gap-4 w-full bg-slate-800 p-4 rounded">
                <div
                  className={`${orderClass} p-4 bg-indigo-500 rounded text-white flex-1 text-center transition-all duration-500`}
                >
                  Target Item
                </div>
                <div className="order-none p-4 bg-slate-600 rounded text-white flex-1 text-center">
                  Sibling 1
                </div>
                <div className="order-none p-4 bg-slate-600 rounded text-white flex-1 text-center">
                  Sibling 2
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Mobile Header",
          description:
            "On mobile, the logo should be on the left, but the menu icon (hamburger) is currently stuck on the left side too because of source order. Move the menu icon to the far right visually by applying `order-last` to it, without changing the HTML structure.",
          codeSnippet: `<header class="flex items-center justify-between p-4 bg-slate-900 text-white">
  <button class="{input} p-2 hover:bg-slate-800 rounded">
    🍔
  </button>

  <div class="font-bold text-xl">Brand</div>

  <button class="p-2 hover:bg-slate-800 rounded">
    🔍
  </button>
</header>`,
          options: ["order-none", "order-first", "order-last", "order-2"],
          correctOption: "order-last",
          renderPreview: (userClass: string) => {
            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                <div className="w-full max-w-sm bg-slate-900 text-white p-4 rounded-xl shadow-xl flex items-center justify-between gap-4">
                  {/* Menu Icon */}
                  <button
                    className={`${userClass} p-2 hover:bg-slate-800 rounded transition-all duration-300 bg-slate-800/50`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>

                  {/* Logo */}
                  <div className="font-bold text-xl tracking-tight">Brand</div>

                  {/* Search Icon */}
                  <button className="p-2 hover:bg-slate-800 rounded">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Header (Avatar Mobile First)",
              description:
                "Bring avatar forward on small screens for quick recognition while keeping the CTA prominent on desktop.",
              code: `<div class="flex items-center">
  <div class="order-1 md:order-3">Avatar</div>
  <div class="order-2 md:order-1 flex-1">Title</div>
  <div class="order-3 md:order-2">CTA</div>
</div>`,
              preview: (
                <div className="bg-slate-800 p-4 rounded-lg w-full max-w-sm">
                  <div className="flex items-center gap-3">
                    <div className="order-1 w-10 h-10 bg-slate-600 rounded-full flex-shrink-0"></div>
                    <div className="order-2 flex-1 min-w-0">
                      <div className="font-semibold text-white">Site Title</div>
                      <div className="text-sm text-slate-400 truncate">
                        Tagline
                      </div>
                    </div>
                    <div className="order-3 px-3 py-1 bg-blue-600 text-white rounded text-sm font-medium">
                      CTA
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: "Product Detail (Responsive Reorder)",
              description:
                "Swap media/content order per breakpoint so mobile users see details first while desktop shows image beside content.",
              code: `<div class="flex flex-col md:flex-row">
  <div class="order-2 md:order-1">Image</div>
  <div class="order-1 md:order-2">Content</div>
</div>`,
              preview: (
                <div className="flex gap-4 p-4 bg-slate-800 rounded-lg max-w-sm">
                  <div className="order-2 w-20 h-20 bg-slate-600 rounded flex-shrink-0"></div>
                  <div className="order-1 flex-1">
                    <div className="font-semibold text-white">
                      Product Title
                    </div>
                    <div className="text-sm text-slate-400 mt-1">
                      Short description goes here...
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: "Table Row Actions",
              description:
                "Use `order-last` to visually pin actions to the end of a row while keeping logical DOM order.",
              code: `<div class="flex">
  <div class="flex-1">Cell content</div>
  <div class="order-last">Actions</div>
</div>`,
              preview: (
                <div className="flex gap-4 bg-slate-800 p-3 rounded items-center w-full max-w-sm">
                  <div className="flex-1 text-slate-200">Row content</div>
                  <div className="order-last flex gap-2">
                    <button className="px-2 py-1 bg-slate-700 text-white rounded text-xs">
                      Edit
                    </button>
                    <button className="px-2 py-1 bg-red-600 text-white rounded text-xs">
                      Delete
                    </button>
                  </div>
                </div>
              ),
            },
            {
              title: "Stepper Highlight",
              description:
                "Temporarily visually promote the current step with `order-first` while keeping a semantic step order.",
              code: `<div class="flex">
  <div class="order-2">Step 1</div>
  <div class="order-first">Current</div>
  <div class="order-3">Step 3</div>
</div>`,
              preview: (
                <div className="flex gap-2 items-center bg-slate-800 p-3 rounded w-full max-w-sm">
                  <div className="order-2 px-2 py-1 bg-slate-700 rounded text-slate-400 text-xs">
                    Step 1
                  </div>
                  <div className="order-first px-3 py-1 bg-blue-600 rounded text-white text-sm font-medium shadow-md">
                    Current Step
                  </div>
                  <div className="order-3 px-2 py-1 bg-slate-700 rounded text-slate-400 text-xs">
                    Step 3
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Use numeric orders:",
              text: "For predictable relative ordering when multiple items are reordered.",
            },
            {
              bold: "Responsive utilities:",
              text: "Prefer `md:order-1` to rearrange layouts per breakpoint without duplicating HTML.",
            },
            {
              bold: "Test accessibility:",
              text: "Always test keyboard & screen reader behavior after applying visual reordering.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["flex", "shrink"],
    title: "Flex Shrink",
    description:
      "You should reach for flex-shrink when you need items to contract when space becomes limited. flex-shrink controls how aggressively items give up space — higher values shrink more, zero prevents shrinking entirely.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Flex Shrink",
          description:
            "You should reach for flex-shrink when you need items to contract when space becomes limited. flex-shrink controls how aggressively items give up space — higher values shrink more, zero prevents shrinking entirely.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Flex-Shrink Architecture",
          description:
            "Flex shrink is a **Layout layer** utility that controls space contraction when containers are too small. It operates in three phases: basis allocation → overflow detection → proportional shrinking. ",
          features: [
            "Browser first gives each item its flex-basis (content size or explicit basis)",
            "Browser detects if total item size exceeds container width",
            "Browser distributes shortfall proportionally to shrink values",
            "Higher shrink values give up more space, shrink-0 items maintain size",
          ],
          layerAssignment:
            "Layout layer — controls space contraction on overflow. Apply to flex children, not containers.",
          browserBehavior:
            "If no overflow exists (items fit comfortably), shrink has no visible effect. Items only shrink when container is too small.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Flex Properties Comparison",
          columns: ["Property", "Controls", "When To Use", "Common Pitfalls"],
          rows: [
            {
              feature: "flex-shrink",
              values: [
                "Space contraction",
                "Items shrink when needed",
                "Can make content unreadable",
              ],
            },
            {
              feature: "flex-grow",
              values: [
                "Space expansion",
                "Fill remaining space",
                "Needs available space",
              ],
            },
            {
              feature: "flex-basis",
              values: [
                "Starting size",
                "Initial size before grow/shrink",
                "Auto vs fixed confusion",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Flex-Shrink Utility Classes",
          items: [
            { cls: "shrink", desc: "flex-shrink: 1 — can shrink when needed" },
            { cls: "shrink-0", desc: "flex-shrink: 0 — will NOT shrink" },
            {
              cls: "shrink-[2]",
              desc: "flex-shrink: 2 — shrinks twice as much",
            },
            {
              cls: "shrink-[3]",
              desc: "flex-shrink: 3 — shrinks three times as much",
            },
            { cls: "basis-auto shrink-0", desc: "Content size + no shrinking" },
            { cls: "basis-full shrink", desc: "Full width + can shrink" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Flex-Shrink Playground",
          description:
            "Test how flex-shrink handles space constraints. Notice how shrink values only affect behavior when items don't fit in the container.",
          options: [
            "shrink-0",
            "shrink",
            "shrink-[2]",
            "shrink-[3]",
            "basis-auto shrink-0",
          ],
          defaultValue: "shrink",
          buildMarkup: (shrinkClass: string) => {
            return `<div class="flex gap-4 w-80">
  <div class="${shrinkClass} bg-blue-500 p-4 rounded whitespace-nowrap">Shrinking Item</div>
  <div class="basis-32 bg-red-500 p-4 rounded">Fixed 128px</div>
  <div class="basis-24 bg-green-500 p-4 rounded">Fixed 96px</div>
</div>`;
          },
          renderPreview: (shrinkClass: string) => {
            return (
              <div className="flex gap-4 w-80 border border-slate-700 p-2 rounded overflow-hidden">
                <div
                  className={`${shrinkClass} bg-blue-500 p-4 rounded text-white whitespace-nowrap flex items-center`}
                >
                  Shrinking Item
                </div>
                <div className="basis-32 bg-red-500 p-4 rounded text-white shrink-0 flex items-center justify-center">
                  Fixed 128px
                </div>
                <div className="basis-24 bg-green-500 p-4 rounded text-white shrink-0 flex items-center justify-center">
                  Fixed 96px
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Squeezed Logo",
          description:
            "You have a navbar with a logo, navigation links, and a search bar. On small screens, the logo is getting squashed because the flex container is running out of space. Apply `shrink-0` to the logo container to prevent it from shrinking, forcing the other items to adjust instead.",
          codeSnippet: `<nav class="flex items-center gap-4 w-64 bg-slate-800 p-2 rounded">
  <div class="{input} w-12 h-12 bg-blue-500 rounded flex items-center justify-center">
    LOGO
  </div>
  <a href="#" class="text-white text-sm">Home</a>
  <a href="#" class="text-white text-sm">About</a>
  <input class="w-full min-w-0" placeholder="Search..." />
</nav>`,
          options: ["shrink", "shrink-0", "grow", "flex-1"],
          correctOption: "shrink-0",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
              <div className="w-64 bg-slate-800 p-3 rounded-lg flex items-center gap-2 overflow-hidden shadow-xl">
                {/* Logo */}
                <div
                  className={`${userClass} w-12 h-12 bg-blue-600 rounded flex items-center justify-center text-xs font-bold text-white transition-all duration-300`}
                >
                  LOGO
                </div>

                {/* Nav Links */}
                <div className="flex gap-2 shrink">
                  <span className="text-slate-300 text-xs">Home</span>
                  <span className="text-slate-300 text-xs">About</span>
                </div>

                {/* Search Bar */}
                <div className="flex-1 min-w-0">
                  <input
                    className="w-full bg-slate-700 border-none rounded px-2 py-1 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Navigation with Fixed Logo",
              description:
                "Navigation bar where logo never shrinks (`shrink-0`) but menu items can shrink if needed.",
              code: `<div class="flex gap-4 w-full">
  <div class="shrink-0 basis-32">
    <img src="/logo.png" alt="Logo" />
  </div>
  <nav class="shrink flex gap-2">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</div>`,
              preview: (
                <div className="flex gap-4 items-center bg-slate-800 p-4 rounded w-full max-w-sm">
                  <div className="shrink-0 basis-20 bg-blue-600 p-2 rounded text-white text-center text-xs font-bold">
                    LOGO
                  </div>
                  <nav className="shrink flex gap-2 overflow-hidden">
                    <span className="px-2 py-1 bg-slate-700 text-white rounded text-xs truncate">
                      Home
                    </span>
                    <span className="px-2 py-1 bg-slate-700 text-white rounded text-xs truncate">
                      About
                    </span>
                    <span className="px-2 py-1 bg-slate-700 text-white rounded text-xs truncate">
                      Contact
                    </span>
                  </nav>
                </div>
              ),
            },
            {
              title: "Button Group with Priority",
              description:
                "Primary action button stays large (`shrink-0`), secondary buttons shrink first on small screens.",
              code: `<div class="flex gap-2 w-64">
  <button class="shrink-0 bg-blue-600 text-white px-4 py-2 rounded">Save</button>
  <button class="shrink bg-slate-200 text-gray-800 px-4 py-2 rounded">Cancel</button>
</div>`,
              preview: (
                <div className="flex gap-2 w-48 border border-slate-600 p-2 rounded">
                  <button className="shrink-0 bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">
                    Save
                  </button>
                  <button className="shrink bg-slate-600 text-white px-3 py-1 rounded text-xs truncate">
                    Cancel
                  </button>
                  <button className="shrink bg-slate-600 text-white px-3 py-1 rounded text-xs truncate">
                    Delete
                  </button>
                </div>
              ),
            },
            {
              title: "Product Card with Fixed Image",
              description:
                "Product image maintains size (`shrink-0`) while title and description wrap or shrink.",
              code: `<div class="flex gap-4 w-80">
  <img class="shrink-0 w-20 h-20 rounded" src="product.jpg" />
  <div class="shrink">
    <h3 class="font-bold">Product Title</h3>
    <p class="text-sm">Description text...</p>
  </div>
</div>`,
              preview: (
                <div className="flex gap-4 w-64 bg-slate-800 p-3 rounded-lg">
                  <div className="shrink-0 w-16 h-16 bg-slate-600 rounded flex items-center justify-center text-white text-xs">
                    IMG
                  </div>
                  <div className="shrink min-w-0">
                    <h3 className="font-bold text-white text-sm truncate">
                      Premium Wireless Headphones
                    </h3>
                    <p className="text-xs text-slate-400 truncate">
                      Noise cancelling, 20h battery life.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              title: "Form with Fixed Labels",
              description:
                "Form labels never shrink (`shrink-0`), but input fields adapt to the remaining width.",
              code: `<div class="flex gap-3 items-center">
  <label class="shrink-0 w-16 text-right">Name:</label>
  <input class="shrink flex-1 px-2 py-1 border rounded" />
</div>`,
              preview: (
                <div className="flex gap-2 items-center w-full max-w-xs p-2 bg-slate-700 rounded">
                  <label className="shrink-0 w-12 text-right text-white text-xs font-bold">
                    Name:
                  </label>
                  <input
                    className="shrink flex-1 px-2 py-1 border border-slate-500 rounded bg-slate-800 text-white text-xs min-w-0"
                    placeholder="Enter name"
                  />
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Making critical UI elements unreadable",
              reason:
                "Aggressive shrinking can make buttons, labels, or controls too small to use or read content.",
              example: `<div class="flex w-32">\n  <button class="shrink-[3]">Important</button>\n</div>`,
              level: "critical",
            },
            {
              title: "Using shrink without overflow constraints",
              reason:
                "Shrink only works when container has a constrained width and overflow occurs. If the container can grow infinitely, shrink does nothing.",
              example: `<div class="flex shrink"> \n  <div>Won't shrink</div>\n</div>`,
              level: "critical",
            },
            {
              title: "Combining shrink with min-width",
              reason:
                "`min-width` conflicts with shrink. If `min-width` is set, the item will stop shrinking at that point, overriding `flex-shrink`.",
              example: `<div class="flex w-32">\n  <div class="shrink min-w-24">Won't shrink past 24px</div>\n</div>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Layout Layer Rules:",
              text: "flex-shrink only works on direct children of display:flex containers.",
            },
            {
              bold: "Overflow required:",
              text: "Items only shrink when the container's width is smaller than the total width of all items.",
            },
            {
              bold: "Content protection:",
              text: "Use `shrink-0` for critical UI elements (like icons, avatars, or primary buttons) that must remain visible at their full size.",
            },
            {
              bold: "Width conflicts:",
              text: "`min-width` and explicit `width` constraints can override default shrink behavior.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["flex", "sizing"],
    title: "Flex Sizing",
    description:
      "Control how flex items grow, shrink, and set their base size within a flex container. Use shorthand utilities like flex-1, flex-auto, and flex-none for common layout patterns.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Flex Sizing",
          description:
            "Control how flex items grow, shrink, and set their base size within a flex container. Use shorthand utilities like flex-1, flex-auto, and flex-none for common layout patterns.",
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Flex Shorthand Utilities",
          items: [
            {
              cls: "flex-1",
              desc: "flex: 1 1 0% — Grows equally, shrinks equally",
            },
            {
              cls: "flex-auto",
              desc: "flex: 1 1 auto — Grows and shrinks based on content",
            },
            {
              cls: "flex-initial",
              desc: "flex: 0 1 auto — No growth, can shrink",
            },
            {
              cls: "flex-none",
              desc: "flex: 0 0 auto — No growth, no shrink (fixed size)",
            },
          ],
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Flex Sizing",
          description:
            "Flex sizing controls the elasticity of items.  The `flex` shorthand property is the recommended way to set `flex-grow`, `flex-shrink`, and `flex-basis` together.",
          features: [
            "flex-1: Items share space equally, ignoring content size",
            "flex-auto: Items share space but larger content gets more room",
            "flex-initial: Items respect their size but shrink if needed",
            "flex-none: Items are rigid and respect fixed dimensions",
          ],
          layerAssignment:
            "Sizing Layer - Defines how items adapt to available space",
          browserBehavior:
            "The browser uses these three values to calculate the final size of flex items during layout.",
        },
      },
      {
        type: "playground",
        props: {
          title: "Flex Sizing Playground",
          description:
            "Test different flex shorthands. Notice how `flex-1` forces equal width regardless of content, while `flex-auto` respects the content length.",
          options: ["flex-1", "flex-auto", "flex-initial", "flex-none"],
          defaultValue: "flex-1",
          buildMarkup: (flexClass: string) => {
            return `<div class="flex gap-4 p-4 bg-slate-800 rounded">
  <div class="${flexClass} bg-blue-500 p-4 rounded">Item 1</div>
  <div class="${flexClass} bg-blue-400 p-4 rounded">Item 2 (Longer Content)</div>
  <div class="${flexClass} bg-blue-300 p-4 rounded">Item 3</div>
</div>`;
          },
          renderPreview: (flexClass: string) => {
            return (
              <div className="flex gap-4 p-4 bg-slate-800 rounded w-full">
                <div
                  className={`${flexClass} bg-blue-500 p-4 rounded text-white font-semibold flex items-center justify-center text-center`}
                >
                  Item 1
                </div>
                <div
                  className={`${flexClass} bg-blue-400 p-4 rounded text-white font-semibold flex items-center justify-center text-center`}
                >
                  Item 2 (Longer Content)
                </div>
                <div
                  className={`${flexClass} bg-blue-300 p-4 rounded text-white font-semibold flex items-center justify-center text-center`}
                >
                  Item 3
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Search Bar",
          description:
            "This navigation bar has a logo, a search input, and a profile icon. Currently, the search input is too small (`w-24`) and leaves a huge empty gap. Change the search input's class to `flex-1` so it grows to fill all the available empty space.",
          codeSnippet: `<nav class="flex items-center gap-4 p-4 bg-slate-900 text-white rounded-xl">
  <div class="font-bold">App</div>

  <input 
    type="text" 
    class="{input} bg-slate-800 rounded px-3 py-2 border border-slate-700"
    placeholder="Search..."
  />

  <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
</nav>`,
          options: ["w-24", "flex-1", "flex-none", "w-full"],
          correctOption: "flex-1",
          renderPreview: (userClass: string) => {
            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                <div className="w-full max-w-md bg-slate-900 text-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-slate-700">
                  <div className="font-bold text-lg">App</div>

                  <input
                    type="text"
                    className={`bg-slate-800 rounded px-3 py-2 text-sm border border-slate-700 focus:outline-none focus:border-blue-500 transition-all duration-500 ${userClass}`}
                    placeholder="Search..."
                    readOnly
                  />

                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shrink-0 shadow-lg"></div>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Navigation with Spacing",
              description:
                "A navbar where the middle section expands to push the logo and sign-in button to the edges.",
              code: `<nav class="flex items-center justify-between gap-4 p-4 bg-slate-800">
  <div class="font-bold text-white">Logo</div>
  <div class="flex gap-6 flex-1 justify-center">
    <a href="#" class="text-white hover:text-blue-400">Home</a>
    <a href="#" class="text-white hover:text-blue-400">About</a>
    <a href="#" class="text-white hover:text-blue-400">Contact</a>
  </div>
  <button class="px-4 py-2 bg-blue-600 text-white rounded">Sign In</button>
</nav>`,
              preview: (
                <nav className="flex items-center justify-between gap-4 p-4 bg-slate-800 rounded w-full">
                  <div className="font-bold text-white">Logo</div>
                  <div className="flex gap-4 flex-1 justify-center">
                    <span className="text-white text-sm cursor-pointer hover:text-blue-300">
                      Home
                    </span>
                    <span className="text-white text-sm cursor-pointer hover:text-blue-300">
                      About
                    </span>
                    <span className="text-white text-sm cursor-pointer hover:text-blue-300">
                      Contact
                    </span>
                  </div>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                    Sign In
                  </button>
                </nav>
              ),
            },
            {
              title: "Responsive Columns with Grow/Shrink",
              description:
                "A card grid where cards have a minimum basis but grow to fill the row on larger screens.",
              code: `<div class="flex gap-4 flex-wrap">
  <div class="flex-1 basis-64 bg-slate-700 rounded p-6 min-h-40">
    <h3 class="font-bold text-white mb-2">Card 1</h3>
    <p class="text-slate-300">Grows on large screens, wraps on small</p>
  </div>
  <div class="flex-1 basis-64 bg-slate-700 rounded p-6 min-h-40">
    <h3 class="font-bold text-white mb-2">Card 2</h3>
    <p class="text-slate-300">Responsive flex basis</p>
  </div>
</div>`,
              preview: (
                <div className="flex gap-2 flex-wrap w-full">
                  <div className="flex-1 basis-40 bg-slate-700 rounded p-4 text-white">
                    <h3 className="font-bold text-sm mb-1">Card 1</h3>
                    <p className="text-xs text-slate-300">Flexible width</p>
                  </div>
                  <div className="flex-1 basis-40 bg-slate-700 rounded p-4 text-white">
                    <h3 className="font-bold text-sm mb-1">Card 2</h3>
                    <p className="text-xs text-slate-300">Flexible width</p>
                  </div>
                </div>
              ),
            },
            {
              title: "Sidebar + Main Content",
              description:
                "A classic layout with a fixed sidebar (`flex-none`) and a main content area (`flex-1`) that fills the remaining space.",
              code: `<div class="flex gap-4 h-32">
  <aside class="flex-none w-24 bg-slate-800 p-4 text-white rounded">Sidebar</aside>
  <main class="flex-1 bg-slate-700 p-4 text-white rounded">Main Content</main>
</div>`,
              preview: (
                <div className="flex gap-4 h-32 w-full border border-slate-700 p-2 rounded">
                  <aside className="flex-none w-20 bg-slate-800 p-2 text-white rounded text-xs font-bold flex items-center justify-center">
                    Sidebar
                  </aside>
                  <main className="flex-1 bg-slate-700 p-2 text-white rounded text-xs flex items-center justify-center">
                    Main Content (Grows)
                  </main>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using grow without container constraint",
              reason:
                "Flex-grow needs a container with defined dimensions or it won't know what 'available space' means.",
              example: `<div class="flex grow"> \n  <div>Content</div>\n</div>`,
              level: "critical",
            },
            {
              title: "Expecting grow to create space",
              reason:
                "Grow distributes existing space, it doesn't create it. Container must have width constraint.",
              example: `<div class="flex"> \n  <div class="grow">Won't expand</div>\n</div>`,
              level: "critical",
            },
            {
              title: "Using grow on non-flex children",
              reason:
                "Flex properties only work on direct children of display:flex containers.",
              example: `<div> \n  <div class="grow">No effect</div>\n</div>`,
              level: "critical",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Equal columns:",
              text: "Use `flex-1` to create equal-width columns that adapt to container.",
            },
            {
              bold: "Responsive grids:",
              text: "Combine `basis-` with `flex-grow` for responsive grid layouts.",
            },
            {
              bold: "Prevent shrinking:",
              text: "Use `flex-shrink-0` (or `flex-none` if width is fixed) to prevent items from shrinking below their size.",
            },
            {
              bold: "Content-based sizing:",
              text: "Use `basis-auto` (or `flex-auto`) for items that should size based on their content.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["flex", "wrap"],
    title: "Flex Wrap",
    description:
      "Control whether flex items wrap to multiple lines — useful for galleries, tags, toolbars and responsive card layouts.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Flex Wrap",
          description:
            "Control whether flex items wrap to multiple lines — useful for galleries, tags, toolbars and responsive card layouts.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Flex Wrap",
          description:
            "Flex wrap controls whether items stay on a single line or can wrap to multiple lines when container space is limited.  It fundamentally changes how the browser calculates remaining space and line distribution.",
          features: [
            "Controls line breaking behavior in flex containers",
            "Affects how remaining space is calculated",
            "Works with gap utilities for spacing between lines",
            "Reverse option changes visual wrapping order",
            "Essential for responsive grid-like layouts",
          ],
          layerAssignment:
            "Layout Control - Manages item line distribution and overflow",
          browserBehavior:
            "Browser calculates available space and moves items to new lines when they exceed the container width.",
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using nowrap without overflow handling",
              reason:
                "Items will overflow the container and potentially break the layout if they exceed the available width.",
              example: `<div class="flex-nowrap">Too many items for container</div>`,
              level: "critical",
            },
            {
              title: "Not considering gap with wrap",
              reason:
                "Gap applies between items AND between wrapped lines, affecting vertical spacing calculations.",
              example: `<div class="flex-wrap gap-8">Unexpected large gaps between rows</div>`,
              level: "warning",
            },
            {
              title: "Forgetting to constrain item widths",
              reason:
                "If items have no width constraints (e.g. `w-full`), they might wrap unexpectedly or take up too much space.",
              example: `<div class="flex-wrap">Items become tiny</div>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Flex Wrap Utilities",
          items: [
            { cls: "flex-wrap", desc: "Wrap to multiple lines" },
            {
              cls: "flex-wrap-reverse",
              desc: "Wrap in reverse (bottom to top visually)",
            },
            {
              cls: "flex-nowrap",
              desc: "Keep items on a single line (Default)",
            },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Flex Wrap Playground",
          description:
            "Experiment with wrapping behavior. Change the container width or add more items to see how they flow.",
          options: ["flex-wrap", "flex-wrap-reverse", "flex-nowrap"],
          defaultValue: "flex-wrap",
          buildMarkup: (wrapClass: string) => {
            return `<div class="flex ${wrapClass} gap-4 w-64 bg-slate-800 p-4">
  <div class="p-4 bg-blue-500 rounded">1</div>
  <div class="p-4 bg-blue-500 rounded">2</div>
  <div class="p-4 bg-blue-500 rounded">3</div>
  <div class="p-4 bg-blue-500 rounded">4</div>
  <div class="p-4 bg-blue-500 rounded">5</div>
</div>`;
          },
          renderPreview: (wrapClass: string) => {
            return (
              <div
                className={`flex ${wrapClass} gap-4 w-64 bg-slate-800 p-4 rounded`}
              >
                <div className="p-4 bg-blue-500 rounded text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div className="p-4 bg-blue-500 rounded text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div className="p-4 bg-blue-500 rounded text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div className="p-4 bg-blue-500 rounded text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div className="p-4 bg-blue-500 rounded text-white flex items-center justify-center font-bold">
                  5
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Breaking Tags",
          description:
            "This tag cloud has a fixed width. Currently, the tags are set to `flex-nowrap`, causing them to overflow the container and disappear. Change the layout to `flex-wrap` so the tags flow gracefully onto multiple lines.",
          codeSnippet: `<div class="w-64 p-4 bg-slate-100 rounded-lg border border-slate-300">
  <div class="flex {input} gap-2">
    <span class="badge">#design</span>
    <span class="badge">#development</span>
    <span class="badge">#ux</span>
    <span class="badge">#accessibility</span>
    <span class="badge">#css</span>
  </div>
</div>`,
          options: ["flex-nowrap", "flex-wrap-reverse", "block", "flex-wrap"],
          correctOption: "flex-wrap",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg overflow-hidden">
              <div className="w-64 p-4 bg-slate-200 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700 shadow-md overflow-hidden">
                <div className={`flex ${userClass} gap-2`}>
                  {[
                    "#design",
                    "#development",
                    "#ux",
                    "#accessibility",
                    "#css",
                    "#react",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-medium whitespace-nowrap shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Tag Cloud",
              description:
                "Using `flex-wrap` allows tags to fill lines naturally.",
              code: `<div class="flex flex-row flex-wrap gap-2">
  <span class="bg-slate-700 rounded px-3 py-1">JavaScript</span>
  <span class="bg-slate-700 rounded px-3 py-1">React</span>
  <span class="bg-slate-700 rounded px-3 py-1">Tailwind</span>
</div>`,
              preview: (
                <div className="flex flex-row flex-wrap gap-2 w-full max-w-xs">
                  <span className="bg-slate-700 text-white rounded px-3 py-1 text-sm">
                    JavaScript
                  </span>
                  <span className="bg-slate-700 text-white rounded px-3 py-1 text-sm">
                    React
                  </span>
                  <span className="bg-slate-700 text-white rounded px-3 py-1 text-sm">
                    Tailwind
                  </span>
                  <span className="bg-slate-700 text-white rounded px-3 py-1 text-sm">
                    Node
                  </span>
                  <span className="bg-slate-700 text-white rounded px-3 py-1 text-sm">
                    CSS
                  </span>
                </div>
              ),
            },
            {
              title: "Horizontal Scroll (No Wrap)",
              description:
                "Using `flex-nowrap` with `overflow-x-auto` for a horizontal scrolling list.",
              code: `<div class="overflow-x-auto">
  <div class="flex flex-nowrap gap-3">
    <button>Action 1</button>
    <button>Action 2</button>
    <button>Action 3</button>
  </div>
</div>`,
              preview: (
                <div className="overflow-x-auto w-full max-w-xs pb-2">
                  <div className="flex flex-nowrap gap-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <button
                        key={i}
                        className="px-4 py-2 bg-slate-700 text-white rounded whitespace-nowrap text-sm"
                      >
                        Action {i + 1}
                      </button>
                    ))}
                  </div>
                </div>
              ),
            },
            {
              title: "Responsive Card Grid",
              description:
                "Using wrapping to create a responsive grid without CSS Grid.",
              code: `<div class="flex flex-row flex-wrap gap-4">
  <div class="w-24 bg-slate-700 rounded h-24"></div>
  <div class="w-24 bg-slate-700 rounded h-24"></div>
  <div class="w-24 bg-slate-700 rounded h-24"></div>
</div>`,
              preview: (
                <div className="flex flex-row flex-wrap gap-4 w-full max-w-xs p-2">
                  <div className="w-20 h-20 bg-slate-700 rounded"></div>
                  <div className="w-20 h-20 bg-slate-700 rounded"></div>
                  <div className="w-20 h-20 bg-slate-700 rounded"></div>
                  <div className="w-20 h-20 bg-slate-700 rounded"></div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Overflow handling:",
              text: "Always pair `flex-nowrap` with `overflow-x-auto` or `hidden` if content might exceed container width.",
            },
            {
              bold: "Gap spacing:",
              text: "Remember `gap` applies between items vertically and horizontally when wrapping occurs.",
            },
            {
              bold: "Responsive design:",
              text: "Use wrap for responsive components like galleries, tags, and filter lists.",
            },
            {
              bold: "Performance:",
              text: "Flex wrap is efficient and often preferable to complex grid calculations for simple auto-flowing layouts.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["grid", "auto-columns"],
    title: "Auto Columns",
    description:
      "Control the size of implicitly-created grid columns. These utilities are most useful when you create horizontally-flowing grids such as carousels, tag scrollers, and horizontal card rows.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Auto Columns",
          description:
            "Control the size of implicitly-created grid columns. These utilities are most useful when you create horizontally-flowing grids such as carousels, tag scrollers, and horizontal card rows.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Implicit Columns",
          description:
            "Grid auto-column utilities control the size of columns created *implicitly*—that is, columns the browser creates automatically when you have more items than defined columns, or when using `grid-flow-col`.  Unlike `grid-template-columns` which defines a fixed set of tracks, `auto-cols` defines the size pattern for any new tracks generated by content.",
          features: [
            "Controls the size of columns not explicitly defined",
            "Essential for horizontal scrolling layouts (grid-flow-col)",
            "Supports min/max content sizing logic",
            "Can use fractional units (fr) to distribute space equally",
          ],
          layerAssignment: "Grid Layout Layer - Implicit Track Sizing",
          browserBehavior:
            "The browser applies `grid-auto-columns` values to any column track created to hold content outside the explicit grid.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Auto Column Sizing Logic",
          columns: ["Utility", "Sizing Logic", "Best For", "Behavior"],
          rows: [
            {
              feature: "auto-cols-min",
              values: [
                "min-content",
                "Tag/Chip scrollers",
                "Shrinks to smallest word/element",
              ],
            },
            {
              feature: "auto-cols-max",
              values: [
                "max-content",
                "Wide text content",
                "Expands to fit largest element",
              ],
            },
            {
              feature: "auto-cols-fr",
              values: [
                "minmax(0, 1fr)",
                "Equal cards/carousels",
                "Distributes available space equally",
              ],
            },
            {
              feature: "auto-cols-auto",
              values: [
                "auto",
                "Default grid behavior",
                "Sized by container and content",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Auto Columns Utilities",
          items: [
            { cls: "auto-cols-auto", desc: "Implicit columns sized by auto" },
            {
              cls: "auto-cols-min",
              desc: "Implicit columns sized to min-content",
            },
            {
              cls: "auto-cols-max",
              desc: "Implicit columns sized to max-content",
            },
            {
              cls: "auto-cols-fr",
              desc: "Implicit columns sized using fr units",
            },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Auto Columns Playground",
          description:
            "See how different auto-column settings affect a horizontally scrolling grid. Notice how `auto-cols-fr` forces equality while `auto-cols-min` shrinks to fit.",
          options: [
            "auto-cols-auto",
            "auto-cols-min",
            "auto-cols-max",
            "auto-cols-fr",
          ],
          defaultValue: "auto-cols-min",
          buildMarkup: (autoCols: string) => {
            return `<div class="grid grid-flow-col ${autoCols} gap-4 overflow-x-auto p-4">
  <div class="bg-slate-700 p-4 rounded">Short</div>
  <div class="bg-slate-700 p-4 rounded">A much longer item</div>
  <div class="bg-slate-700 p-4 rounded">Medium size</div>
  <div class="bg-slate-700 p-4 rounded">Tiny</div>
</div>`;
          },
          renderPreview: (autoCols: string) => {
            return (
              <div
                className={`grid grid-flow-col ${autoCols} gap-4 overflow-x-auto p-4 bg-slate-800 rounded w-full`}
              >
                {[
                  "Short",
                  "A much longer item",
                  "Medium size",
                  "Tiny",
                  "Another item",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="bg-slate-700 p-4 rounded text-white flex items-center justify-center text-center whitespace-nowrap"
                  >
                    {text}
                  </div>
                ))}
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Squished Carousel",
          description:
            "You are building a horizontal product carousel. Currently, the items are sized based on their content (`auto-cols-auto`), making them look uneven and messy. Apply `auto-cols-fr` to force all items to have equal width tracks, creating a uniform, professional look.",
          codeSnippet: `<div class="grid grid-flow-col {input} gap-4 overflow-x-auto">
  <div class="bg-white p-4 rounded shadow">Basic Plan ($9)</div>
  <div class="bg-white p-4 rounded shadow">Pro Plan (Best Value - $29)</div>
  <div class="bg-white p-4 rounded shadow">Enterprise ($99)</div>
  <div class="bg-white p-4 rounded shadow">Custom</div>
</div>`,
          options: [
            "auto-cols-auto",
            "auto-cols-fr",
            "auto-cols-min",
            "auto-cols-max",
          ],
          correctOption: "auto-cols-fr",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg overflow-hidden">
              <div className="w-full max-w-lg bg-slate-200 dark:bg-slate-900 p-4 rounded-xl border border-slate-300 dark:border-slate-800 overflow-x-auto">
                <div className={`grid grid-flow-col gap-4 ${userClass}`}>
                  {[
                    { name: "Basic", price: "$9" },
                    { name: "Pro (Best Value)", price: "$29" },
                    { name: "Enterprise", price: "$99" },
                    { name: "Custom", price: "Contact" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm min-w-[100px] flex flex-col items-center text-center transition-all duration-500"
                    >
                      <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-2 font-bold text-xs">
                        {i + 1}
                      </div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-xs mb-1">
                        {item.name}
                      </h4>
                      <div className="text-slate-500 text-[10px]">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Horizontal Card Row",
              description:
                "Using `auto-cols-fr` to ensure every card in a horizontal scroll container gets exactly the same width fraction.",
              code: `<div class="grid grid-flow-col auto-cols-fr gap-4 overflow-x-auto">
  <div class="min-w-[200px] bg-slate-700 p-4 rounded">Card 1</div>
  <div class="min-w-[200px] bg-slate-700 p-4 rounded">Card 2</div>
  <div class="min-w-[200px] bg-slate-700 p-4 rounded">Card 3</div>
</div>`,
              preview: (
                <div className="grid grid-flow-col auto-cols-fr gap-4 overflow-x-auto p-2 bg-slate-800 rounded">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="min-w-[150px] bg-slate-700 p-4 rounded text-white text-center"
                    >
                      Card {i}
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: "Tag Scroller",
              description:
                "Using `auto-cols-min` for a list of tags where each column should shrink to fit the tag text tightly.",
              code: `<div class="grid grid-flow-col auto-cols-min gap-2 overflow-x-auto">
  <span class="px-3 py-1 bg-blue-600 rounded-full text-white">React</span>
  <span class="px-3 py-1 bg-blue-600 rounded-full text-white">Tailwind CSS</span>
  <span class="px-3 py-1 bg-blue-600 rounded-full text-white">Design</span>
</div>`,
              preview: (
                <div className="grid grid-flow-col auto-cols-min gap-2 overflow-x-auto p-2 bg-slate-800 rounded">
                  {[
                    "React",
                    "Tailwind CSS",
                    "Design",
                    "UX",
                    "Accessibility",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-600 rounded-full text-white text-xs whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ),
            },
            {
              title: "Variable Content Gallery",
              description:
                "Using `auto-cols-max` allows columns to expand to fit the largest item in that column (if multiple rows existed) or simply respect wide content.",
              code: `<div class="grid grid-flow-col auto-cols-max gap-3 overflow-x-auto">
  <div class="w-64 bg-slate-700 p-4">Wide Item</div>
  <div class="w-32 bg-slate-700 p-4">Narrow Item</div>
</div>`,
              preview: (
                <div className="grid grid-flow-col auto-cols-max gap-3 overflow-x-auto p-2 bg-slate-800 rounded text-white text-center text-sm">
                  <div className="w-48 bg-slate-700 p-4 rounded">
                    Wide Content Area
                  </div>
                  <div className="w-24 bg-slate-700 p-4 rounded">Narrow</div>
                  <div className="w-32 bg-slate-700 p-4 rounded">Medium</div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Min widths:",
              text: "When using auto-cols-fr, adding `min-w-[...]` to children is often useful to prevent them from becoming too narrow on small screens.",
            },
            {
              bold: "Horizontal scroll:",
              text: "These utilities are most powerful when paired with `grid-flow-col` and `overflow-x-auto`.",
            },
            {
              bold: "Snapping:",
              text: "Combine with `snap-x` and `snap-mandatory` for polished, app-like carousels.",
            },
            {
              bold: "Performance:",
              text: "Avoid extremely large numbers of implicit columns in a single grid without virtualization.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["grid", "auto-flow"],
    title: "Grid Auto Flow",
    description:
      "You should reach for auto-flow utilities when you want to control how grid items automatically position themselves without explicit placement. Auto-flow determines the algorithm browsers use to fill empty grid cells — row-first (default), column-first, or dense packing for tighter layouts.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Grid — Auto Flow",
          description:
            "You should reach for auto-flow utilities when you want to control how grid items automatically position themselves without explicit placement. Auto-flow determines the algorithm browsers use to fill empty grid cells — row-first (default), column-first, or dense packing for tighter layouts.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Grid Auto Flow Mechanics",
          description:
            "Auto-flow is the browser's placement algorithm when you don't specify grid-item positions.  It's a layout concern that determines coordinate assignment for automatically placed items.",
          features: [
            "Default row flow places items left→right, then wraps to next row",
            "Column flow places items top→bottom, then wraps to next column",
            "Dense mode backfills gaps with later items (visual reordering)",
            "Flow algorithm respects explicit grid tracks (grid-template-areas)",
            "Implicit tracks are created automatically when items exceed defined tracks",
          ],
          layerAssignment:
            "Layout Layer - Controls automatic item positioning algorithm",
          browserBehavior:
            "Browser evaluates each auto-placed item against current grid state, placing it according to flow direction and optionally filling gaps in dense mode.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Grid Flow Modes: Algorithm Behavior",
          columns: [
            "Flow Mode",
            "Algorithm",
            "Visual Order vs DOM",
            "Best Use Case",
          ],
          rows: [
            {
              feature: "grid-flow-row",
              values: [
                "Place left→right, wrap down",
                "Matches DOM order",
                "Standard layouts, Card grids",
              ],
            },
            {
              feature: "grid-flow-col",
              values: [
                "Place top→bottom, wrap right",
                "Matches DOM order",
                "Horizontal scrollers, Galleries",
              ],
            },
            {
              feature: "grid-flow-row-dense",
              values: [
                "Row flow + gap fill",
                "May diverge from DOM",
                "Tight masonry packing, Variable items",
              ],
            },
            {
              feature: "grid-flow-col-dense",
              values: [
                "Column flow + gap fill",
                "May diverge from DOM",
                "Dashboard widgets, Vertical optimization",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Grid Auto Flow Utilities",
          items: [
            { cls: "grid-flow-row", desc: "Row flow (default)" },
            { cls: "grid-flow-col", desc: "Column flow" },
            { cls: "grid-flow-row-dense", desc: "Dense row flow" },
            { cls: "grid-flow-col-dense", desc: "Dense column flow" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Auto-Flow Playground",
          description:
            "Toggle different flow modes to see how items are placed. Pay attention to how 'dense' modes fill gaps left by larger items.",
          options: [
            "grid-flow-row",
            "grid-flow-col",
            "grid-flow-row-dense",
            "grid-flow-col-dense",
          ],
          defaultValue: "grid-flow-row",
          buildMarkup: (flowClass: string) => {
            return `<div class="grid grid-cols-3 ${flowClass} gap-4 h-64">
  <div class="h-24">1</div>
  <div class="h-48">2 (tall)</div>
  <div class="h-20">3</div>
  <div class="h-36">4</div>
  <div class="h-28">5</div>
  <div class="h-32">6</div>
</div>`;
          },
          renderPreview: (flowClass: string) => {
            return (
              <div
                className={`grid grid-cols-3 ${flowClass} gap-4 h-64 w-full bg-slate-800 p-4 rounded overflow-auto`}
              >
                <div className="bg-slate-700 rounded p-3 h-24 flex items-center justify-center text-white">
                  1
                </div>
                <div className="bg-slate-700 rounded p-3 h-48 flex items-center justify-center text-white">
                  2 (tall)
                </div>
                <div className="bg-slate-700 rounded p-3 h-20 flex items-center justify-center text-white">
                  3
                </div>
                <div className="bg-slate-700 rounded p-3 h-36 flex items-center justify-center text-white">
                  4
                </div>
                <div className="bg-slate-700 rounded p-3 h-28 flex items-center justify-center text-white">
                  5
                </div>
                <div className="bg-slate-700 rounded p-3 h-32 flex items-center justify-center text-white">
                  6
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Swiss Cheese Layout",
          description:
            "We have a 3-column grid. Because the 'Featured' item is 2 columns wide, it can't fit in the remaining space of the first row, so it drops down, leaving an ugly gap. Change the flow to `grid-flow-row-dense` to force the later items (3 & 4) to jump back up and fill that empty space.",
          codeSnippet: `<div class="grid grid-cols-3 {input} gap-4 auto-rows-[80px]">
  <div class="bg-slate-700 rounded-xl">1</div>
  <div class="bg-slate-700 rounded-xl">2</div>

  <div class="col-span-2 row-span-2 bg-indigo-600 rounded-xl">
    Featured
  </div>

  <div class="bg-slate-700 rounded-xl">3</div>
  <div class="bg-slate-700 rounded-xl">4</div>
</div>`,
          options: [
            "grid-flow-row",
            "grid-flow-col",
            "grid-flow-col-dense",
            "grid-flow-row-dense",
          ],
          correctOption: "grid-flow-row-dense",
          renderPreview: (userClass: string) => {
            const isDense = userClass === "grid-flow-row-dense";
            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg overflow-hidden">
                <div
                  className={`grid grid-cols-3 gap-4 w-full max-w-sm auto-rows-[80px] transition-all duration-500 relative ${userClass}`}
                >
                  {/* Visualizing the Gap (Only visible when NOT dense) */}
                  {!isDense && userClass === "grid-flow-row" && (
                    <div className="absolute top-0 right-0 w-[31%] h-[80px] border-2 border-dashed border-red-400/50 bg-red-400/10 rounded-xl flex items-center justify-center pointer-events-none animate-pulse">
                      <span className="text-red-500 text-xs font-bold font-mono">
                        GAP
                      </span>
                    </div>
                  )}

                  <div className="bg-slate-700 dark:bg-slate-800 rounded-xl p-4 text-white flex items-center justify-center font-mono text-xl shadow-sm">
                    1
                  </div>
                  <div className="bg-slate-700 dark:bg-slate-800 rounded-xl p-4 text-white flex items-center justify-center font-mono text-xl shadow-sm">
                    2
                  </div>

                  {/* Featured Item */}
                  <div className="col-span-2 row-span-2 bg-indigo-600 rounded-xl p-4 text-white font-bold text-lg flex items-center justify-center shadow-lg z-10">
                    Featured
                  </div>

                  {/* Backfill Candidates */}
                  <div
                    className={`
                    rounded-xl p-4 text-white flex items-center justify-center font-mono text-xl shadow-sm transition-colors duration-500
                    ${
                      isDense
                        ? "bg-green-600 border-2 border-green-400"
                        : "bg-slate-700 dark:bg-slate-800"
                    }
                  `}
                  >
                    3
                    {isDense && (
                      <span className="ml-2 text-[10px] uppercase font-bold text-green-200">
                        (Moved)
                      </span>
                    )}
                  </div>
                  <div className="bg-slate-700 dark:bg-slate-800 rounded-xl p-4 text-white flex items-center justify-center font-mono text-xl shadow-sm">
                    4
                  </div>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Auto Flow Patterns",
          examples: [
            {
              title: "Photo Gallery with Dense Packing",
              description:
                "Masonry-style photo layout using row-dense to minimize gaps while maintaining accessibility.",
              code: `<div class="grid grid-cols-4 grid-flow-row-dense gap-3">
  <img class="col-span-2 row-span-2" src="photo1.jpg" />
  <img class="col-span-1" src="photo2.jpg" />
  </div>`,
              preview: (
                <div className="grid grid-cols-4 grid-flow-row-dense gap-2 w-full max-w-sm">
                  <div className="col-span-2 row-span-2 h-32 bg-slate-600 rounded"></div>
                  <div className="col-span-1 h-16 bg-slate-500 rounded"></div>
                  <div className="col-span-1 h-16 bg-slate-500 rounded"></div>
                  <div className="col-span-1 h-16 bg-slate-500 rounded"></div>
                  <div className="col-span-1 h-16 bg-slate-500 rounded"></div>
                </div>
              ),
            },
            {
              title: "Dashboard Widgets (Column-Dense)",
              description:
                "Dashboard with varying widget heights using column-dense to fill vertical gaps efficiently.",
              code: `<div class="grid grid-cols-3 grid-flow-col-dense gap-4 h-64">
  <div class="h-24">Metric</div>
  <div class="h-48">Chart</div>
  <div class="h-32">Table</div>
</div>`,
              preview: (
                <div className="grid grid-cols-3 grid-flow-col-dense gap-2 w-full max-w-sm h-48 bg-slate-900 p-2 rounded">
                  <div className="h-16 bg-slate-700 rounded p-2 text-xs text-white">
                    Metric
                  </div>
                  <div className="h-32 bg-slate-700 rounded p-2 text-xs text-white">
                    Chart
                  </div>
                  <div className="h-24 bg-slate-700 rounded p-2 text-xs text-white">
                    Table
                  </div>
                  <div className="h-12 bg-slate-700 rounded p-2 text-xs text-white">
                    Info
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using dense mode without accessibility testing",
              reason:
                "Dense mode changes visual order while preserving DOM order. Keyboard navigation and screen readers follow DOM order, creating mismatch between what users see and how they navigate.",
              example: `<div class="grid grid-flow-row-dense">...</div>`,
              level: "critical",
            },
            {
              title: "Auto-flow without explicit grid structure",
              reason:
                "Auto-flow needs defined grid tracks to work predictably. Without explicit columns/rows, browsers create implicit tracks that may not match design intent.",
              example: `<div class="grid grid-flow-row"> </div>`,
              level: "warning",
            },
            {
              title: "Column flow without width constraints",
              reason:
                "grid-flow-col can create extremely wide containers. Column flow needs explicit width constraints or overflow handling.",
              example: `<div class="grid grid-flow-col"> </div>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Accessibility first:",
              text: "Dense mode changes visual order - test with keyboard and screen readers.",
            },
            {
              bold: "Explicit tracks:",
              text: "Always define grid-cols-* or grid-rows-* for predictable auto-flow behavior.",
            },
            {
              bold: "Width constraints:",
              text: "grid-flow-col needs width limits or overflow handling to prevent horizontal overflow.",
            },
            {
              bold: "Performance:",
              text: "Dense mode requires more placement calculations - avoid on very large grids.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["grid", "auto-rows"],
    title: "Auto Rows",
    description:
      "Control the size of implicitly-created grid rows. You should reach for this utility when you need dynamic row heights for feeds, split layouts, or masonry-style grids.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Auto Rows",
          description:
            "Control the size of implicitly-created grid rows. You should reach for this utility when you need dynamic row heights for feeds, split layouts, or masonry-style grids.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Mental Model: Implicit Grid Tracks",
          description:
            "Grid auto-rows control the height of rows you don't explicitly define. Think of them as 'default row heights' for overflow content. ",
          features: [
            "Implicit tracks are created when items exceed explicit grid definition",
            "auto-rows-min: each row sized to its smallest content (min-content)",
            "auto-rows-max: each row sized to its largest content (max-content)",
            "auto-rows-fr: rows share remaining available height as fractions",
            "auto-rows-auto: browser's default auto sizing algorithm",
          ],
          layerAssignment:
            "Layout layer - controls track sizing within CSS Grid coordinate system",
          browserBehavior:
            "Implicit tracks follow minmax(auto, min-content) by default. auto-rows-* overrides this algorithm for all implicit rows.",
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using auto-rows-fr without container height",
              reason:
                "Fractional units need available space to distribute. Without a defined height on the container, fractional rows will collapse to zero or minimum content height.",
              example: `<div class="grid auto-rows-fr h-auto"> \n  <div>Row 1</div>\n</div>`,
              level: "critical",
            },
            {
              title: "Expecting auto-rows to affect explicit rows",
              reason:
                "auto-rows-* only controls implicit tracks (rows created automatically). Explicit `grid-template-rows` take precedence.",
              example: `<div class="grid grid-rows-[100px] auto-rows-fr">\n  <div>Explicit (100px)</div>\n  <div>Implicit (fr)</div>\n</div>`,
              level: "warning",
            },
            {
              title: "Mixing content-based and fraction-based auto-rows",
              reason:
                "You can't easily mix different auto-row behaviors in a single declaration. Use `grid-template-rows` for mixed sizing patterns.",
              example: `<div class="grid auto-rows-min auto-rows-fr"> </div>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Auto Rows Variants Comparison",
          columns: [
            "Variant",
            "Sizing Algorithm",
            "Use Case",
            "Height Constraint",
          ],
          rows: [
            {
              feature: "auto-rows-min",
              values: ["min-content", "Feeds, lists, chat", "Content-driven"],
            },
            {
              feature: "auto-rows-max",
              values: ["max-content", "Mixed content grids", "Content-driven"],
            },
            {
              feature: "auto-rows-fr",
              values: ["fractional units", "Split layouts", "Container-driven"],
            },
            {
              feature: "auto-rows-auto",
              values: [
                "auto algorithm",
                "Fallback behavior",
                "Content + container",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Auto Rows Utilities",
          items: [
            {
              cls: "auto-rows-min",
              desc: "Implicit rows sized to min-content",
            },
            {
              cls: "auto-rows-max",
              desc: "Implicit rows sized to max-content",
            },
            { cls: "auto-rows-fr", desc: "Implicit rows sized using fr units" },
            { cls: "auto-rows-auto", desc: "Implicit rows sized by auto" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Auto Rows Playground",
          description:
            "Explore how different auto-rows values affect implicit grid track sizing. Add items to see new rows appear.",
          options: [
            "auto-rows-min",
            "auto-rows-max",
            "auto-rows-fr",
            "auto-rows-auto",
          ],
          defaultValue: "auto-rows-min",
          buildMarkup: (value: string) => {
            return `<div class="grid grid-flow-row ${value} gap-4 h-64">
  <div class="bg-slate-700 p-3 rounded">Item</div>
  <div class="bg-slate-700 p-3 rounded">Item with more content</div>
  <div class="bg-slate-700 p-3 rounded">Short</div>
</div>`;
          },
          renderPreview: (value: string) => {
            return (
              <div className={`grid grid-flow-row ${value} gap-4 h-64 w-full`}>
                <div className="bg-slate-700 p-3 rounded text-white flex items-center justify-center">
                  Short
                </div>
                <div className="bg-slate-700 p-3 rounded text-white flex items-center justify-center text-center">
                  Item with more content
                </div>
                <div className="bg-slate-700 p-3 rounded text-white flex items-center justify-center">
                  Medium
                </div>
                <div className="bg-slate-700 p-3 rounded text-white flex items-center justify-center">
                  Tiny
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Collapsed Grid",
          description:
            "You have a vertical list of cards. You want them to evenly split the available height of the container (50% each), but currently, they are squished to their content height (`auto-rows-min`), leaving empty space at the bottom. Change the row sizing to `auto-rows-fr` to make them expand and fill the container perfectly.",
          codeSnippet: `<div class="h-64 grid grid-cols-1 {input} gap-4 p-4 border rounded-xl">
  <div class="bg-indigo-500 rounded-lg p-4 text-white flex items-center justify-center">
    Top Panel
  </div>

  <div class="bg-indigo-600 rounded-lg p-4 text-white flex items-center justify-center">
    Bottom Panel
  </div>
</div>`,
          options: [
            "auto-rows-min",
            "auto-rows-max",
            "auto-rows-auto",
            "auto-rows-fr",
          ],
          correctOption: "auto-rows-fr",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg overflow-hidden">
              <div
                className={`w-full max-w-sm h-64 grid grid-cols-1 gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg transition-all duration-500 ${userClass}`}
              >
                <div className="bg-indigo-500 rounded-lg p-4 text-white font-bold flex items-center justify-center shadow-md">
                  Top Panel
                </div>
                <div className="bg-indigo-600 rounded-lg p-4 text-white font-bold flex items-center justify-center shadow-md">
                  Bottom Panel
                </div>
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Vertical news feed",
              description:
                "Using `auto-rows-min` for items that should take only their required height.",
              code: `<div class="grid grid-flow-row auto-rows-min gap-3">
  <article>Short headline</article>
  <article>Longer story with details</article>
</div>`,
              preview: (
                <div className="bg-slate-800 rounded p-3 h-48 overflow-auto w-full max-w-sm">
                  <div className="grid grid-flow-row auto-rows-min gap-2">
                    <article className="p-2 bg-slate-700 rounded text-slate-200 text-sm">
                      <div className="font-semibold">Breaking News</div>
                      <div className="text-xs text-slate-400">
                        Update released
                      </div>
                    </article>
                    <article className="p-2 bg-slate-700 rounded text-slate-200 text-sm">
                      <div className="font-semibold">Community Event</div>
                      <div className="text-xs text-slate-400">
                        Join us this weekend...
                      </div>
                    </article>
                    <article className="p-2 bg-slate-700 rounded text-slate-200 text-sm">
                      <div className="font-semibold">Alert</div>
                      <div className="text-xs text-slate-400">
                        Maintenance complete
                      </div>
                    </article>
                  </div>
                </div>
              ),
            },
            {
              title: "Two-row split layout",
              description:
                "Using `auto-rows-fr` to split available height evenly between implicit rows.",
              code: `<div class="grid grid-flow-row auto-rows-fr h-48 gap-4">
  <div>Top pane (1fr)</div>
  <div>Bottom pane (1fr)</div>
</div>`,
              preview: (
                <div className="bg-slate-800 rounded p-3 h-48 w-full max-w-sm">
                  <div className="grid grid-flow-row auto-rows-fr gap-3 h-full">
                    <div className="bg-slate-700 rounded p-4 text-slate-200 flex items-center justify-center text-sm">
                      Top Pane
                    </div>
                    <div className="bg-slate-700 rounded p-4 text-slate-200 flex items-center justify-center text-sm">
                      Bottom Pane
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: "Masonry-like layout",
              description:
                "Combining fixed auto-rows height with `row-span-*` to create masonry-like grids.",
              code: `<div class="grid auto-rows-[3rem] gap-2">
  <div class="row-span-2">Tall item</div>
  <div class="row-span-1">Regular</div>
</div>`,
              preview: (
                <div className="bg-slate-800 rounded p-3 h-48 overflow-hidden w-full max-w-sm">
                  <div
                    className="grid auto-rows-[3rem] gap-2 h-full"
                    style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
                  >
                    <div className="row-span-2 bg-slate-700 rounded flex items-center justify-center text-xs text-slate-300">
                      Tall
                    </div>
                    <div className="row-span-1 bg-slate-700 rounded flex items-center justify-center text-xs text-slate-300">
                      Short
                    </div>
                    <div className="row-span-1 bg-slate-700 rounded flex items-center justify-center text-xs text-slate-300">
                      Item
                    </div>
                    <div className="row-span-1 bg-slate-700 rounded flex items-center justify-center text-xs text-slate-300">
                      Here
                    </div>
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Container height is required for auto-rows-fr:",
              text: "Fractional units need available space. Without height, auto-rows-fr creates zero-height rows.",
            },
            {
              bold: "auto-rows only affects implicit tracks:",
              text: "Explicit grid-template-rows take precedence. auto-rows-* won't override explicitly defined rows.",
            },
            {
              bold: "Grid-flow direction matters:",
              text: "auto-rows work with grid-flow-row (default). grid-flow-column creates implicit columns instead.",
            },
            {
              bold: "Min-max fallbacks provide safety:",
              text: "auto-rows-[minmax(2rem,8rem)] ensures rows never shrink below minimum content needs.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["grid", "gap"],
    title: "Gap",
    description:
      "You should reach for gap utilities when you need consistent spacing between child elements in flex or grid containers. Gap creates symmetric space between items without margin collapse issues and works predictably across layout primitives.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Gap",
          description:
            "You should reach for gap utilities when you need consistent spacing between child elements in flex or grid containers. Gap creates symmetric space between items without margin collapse issues and works predictably across layout primitives.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Gap Mechanics",
          description:
            "Gap is a layout primitive that creates space between flex/grid children without affecting container boundaries or causing margin collapse.  It's a parent-controlled spacing system.",
          features: [
            "Creates symmetric spacing between all children in container",
            "Applies only to direct flex or grid children",
            "Doesn't affect container outer margins or padding",
            "Prevents margin collapse between adjacent elements",
            "Works with responsive prefixes for breakpoint-specific spacing",
          ],
          layerAssignment:
            "Layout Layer - Controls inter-child spacing distribution",
          browserBehavior:
            "Browser calculates gap space and distributes it between children in specified axes, reducing available content space accordingly.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Gap vs Margin: Spacing Approaches",
          columns: ["Property", "Scope", "Collapse Behavior", "Best For"],
          rows: [
            {
              feature: "gap-*",
              values: [
                "Container children only",
                "No collapse",
                "Even spacing between items",
              ],
            },
            {
              feature: "margin-*",
              values: [
                "Individual elements",
                "Can collapse",
                "Asymmetric spacing needs",
              ],
            },
            {
              feature: "space-*",
              values: [
                "Flex/flow children",
                "No collapse",
                "Stacked elements (legacy approach)",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Gap Utilities",
          items: [
            { cls: "gap-0", desc: "No gap" },
            { cls: "gap-1", desc: "0.25rem gap" },
            { cls: "gap-2", desc: "0.5rem gap" },
            { cls: "gap-3", desc: "0.75rem gap" },
            { cls: "gap-4", desc: "1rem gap (default example)" },
            { cls: "gap-6", desc: "1.5rem gap" },
            { cls: "gap-8", desc: "2rem gap" },
            { cls: "gap-x-4", desc: "Horizontal gap only" },
            { cls: "gap-y-4", desc: "Vertical gap only" },
            { cls: "md:gap-6", desc: "Responsive gap at md breakpoint" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Gap Playground",
          description:
            "Experiment with layout (flex/grid), direction, and gap size to see how space is distributed.",
          options: ["gap-0", "gap-2", "gap-4", "gap-8", "gap-x-8", "gap-y-4"],
          defaultValue: "gap-4",
          buildMarkup: (gapClass: string) => {
            return `<div class="grid grid-cols-3 ${gapClass} w-full">
  <div class="p-4 bg-slate-700 rounded">1</div>
  <div class="p-4 bg-slate-700 rounded">2</div>
  <div class="p-4 bg-slate-700 rounded">3</div>
  <div class="p-4 bg-slate-700 rounded">4</div>
  <div class="p-4 bg-slate-700 rounded">5</div>
  <div class="p-4 bg-slate-700 rounded">6</div>
</div>`;
          },
          renderPreview: (gapClass: string) => {
            return (
              <div className={`grid grid-cols-3 ${gapClass} w-full`}>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="p-4 bg-slate-700 rounded text-white flex items-center justify-center font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Collapsed Cards",
          description:
            "These product cards are jammed together with zero spacing between them (`gap-0`). This makes the layout look cluttered and unprofessional. Add `gap-4` to the grid container to give the cards room to breathe.",
          codeSnippet: `<div class="grid grid-cols-3 {input} p-4 bg-slate-100 rounded-xl">
  <div class="bg-white p-4 rounded shadow-sm">
    <div class="h-20 bg-slate-200 rounded mb-2"></div>
    <h3 class="font-bold">Product A</h3>
  </div>

  <div class="bg-white p-4 rounded shadow-sm">
    <div class="h-20 bg-slate-200 rounded mb-2"></div>
    <h3 class="font-bold">Product B</h3>
  </div>

  <div class="bg-white p-4 rounded shadow-sm">
    <div class="h-20 bg-slate-200 rounded mb-2"></div>
    <h3 class="font-bold">Product C</h3>
  </div>
</div>`,
          options: ["gap-0", "gap-4", "gap-x-8", "gap-y-4"],
          correctOption: "gap-4",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg overflow-hidden">
              <div
                className={`grid grid-cols-3 ${userClass} p-6 bg-slate-200 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-800 transition-all duration-500 w-full max-w-md`}
              >
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm flex flex-col min-w-0"
                  >
                    <div className="h-16 bg-slate-200 dark:bg-slate-700 rounded mb-3"></div>
                    <h3 className="font-bold text-slate-800 dark:text-white text-xs mb-1">
                      Item {i}
                    </h3>
                    <div className="h-2 w-2/3 bg-slate-100 dark:bg-slate-700/50 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Gap Patterns",
          examples: [
            {
              title: "Horizontal Nav Spacing",
              description:
                "Use a larger gap (`gap-6`) to visually separate primary navigation links.",
              code: `<nav class="flex gap-6 items-center">
  <div>Logo</div>
  <a href="#">Home</a>
  <a href="#">Docs</a>
  <a href="#">Pricing</a>
</nav>`,
              preview: (
                <nav className="flex gap-6 items-center border border-slate-200 dark:border-slate-700 p-3 rounded bg-white dark:bg-slate-900 w-full">
                  <div className="font-bold text-slate-800 dark:text-white">
                    Logo
                  </div>
                  <div className="flex gap-6 text-sm">
                    <span className="text-slate-500 dark:text-slate-300 cursor-pointer">
                      Home
                    </span>
                    <span className="text-slate-500 dark:text-slate-300 cursor-pointer">
                      Docs
                    </span>
                    <span className="text-slate-500 dark:text-slate-300 cursor-pointer">
                      Pricing
                    </span>
                  </div>
                </nav>
              ),
            },
            {
              title: "Card Grid",
              description:
                "Gap creates the gutters between cards in a grid layout.",
              code: `<div class="grid grid-cols-3 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>`,
              preview: (
                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded text-center text-xs">
                    Card 1
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded text-center text-xs">
                    Card 2
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded text-center text-xs">
                    Card 3
                  </div>
                </div>
              ),
            },
            {
              title: "Responsive Gaps",
              description:
                "Use responsive prefixes (`sm:gap-6`) to increase spacing on larger screens.",
              code: `<div class="grid grid-cols-3 gap-2 sm:gap-6">
  <div class="p-4">Pro Plan</div>
  </div>`,
              preview: (
                <div className="grid grid-cols-3 gap-2 sm:gap-6 w-full">
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded text-center text-xs font-bold">
                    Basic
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded text-center text-xs font-bold text-blue-700 dark:text-blue-300">
                    Pro
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded text-center text-xs font-bold">
                    Ent.
                  </div>
                </div>
              ),
            },
            {
              title: "Toolbar (Scrollable Row)",
              description:
                "Use `gap-x` with `overflow-x-auto` for horizontally scrolling toolbars.",
              code: `<div class="flex flex-nowrap gap-x-3 overflow-x-auto">
  <button>Action 1</button>
  <button>Action 2</button>
</div>`,
              preview: (
                <div className="flex flex-nowrap gap-x-3 overflow-x-auto pb-2 w-full max-w-xs">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <button
                      key={i}
                      className="px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-xs whitespace-nowrap"
                    >
                      Action {i + 1}
                    </button>
                  ))}
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using gap when asymmetric spacing is needed",
              reason:
                "Gap creates symmetric spacing between all children. Use margins for targeted spacing on specific items.",
              example: `<div class="flex gap-4"> </div>`,
              level: "warning",
            },
            {
              title: "Applying gap to non-layout containers",
              reason:
                "Gap only works on containers with `display: flex` or `display: grid`.",
              example: `<div class="gap-4"> </div>`,
              level: "critical",
            },
            {
              title: "Relying on gap for edge spacing",
              reason:
                "Gap creates space *between* children, not around the edges. Use padding on the container for outer spacing.",
              example: `<section class="flex gap-4"> </section>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Prefer gap:",
              text: "Use gap instead of margins on children — it avoids margin collapse and keeps layout logic on the parent.",
            },
            {
              bold: "Axis control:",
              text: "Use `gap-x-*` or `gap-y-*` to control spacing on a single axis.",
            },
            {
              bold: "Responsive spacing:",
              text: "Combine responsive prefixes like `md:gap-6` to adjust density on larger screens.",
            },
            {
              bold: "Overlap use-cases:",
              text: "If you need items to overlap (like avatars), gap isn't the tool. Use negative margins (`-space-x`).",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["interactivity", "accent-color"],
    title: "Accent Color",
    description:
      "Control the highlight color of native form controls like checkboxes, radio buttons, and range inputs. Match your brand without custom CSS.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Accent Color",
          description:
            "Control the highlight color of native form controls like checkboxes, radio buttons, and range inputs. Match your brand without custom CSS.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Accent Color Architecture",
          description:
            "Accent color is a Content layer utility that modifies the appearance of native browser controls.  It affects only the highlight/active state of form elements, not their base styling.",
          features: [
            "Only affects native controls (checkboxes, radios, range inputs)",
            "Does not work on text inputs, select elements, or custom components",
            "Inherited from parent elements unless explicitly set",
            "Respects system color schemes and accessibility preferences",
          ],
          layerAssignment:
            "Content Layer - Controls appearance of native form control highlights",
          browserBehavior:
            "Browser applies accent color to control's active state when user interacts with the element.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Accent Color vs Other Color Utilities",
          columns: [
            "Utility",
            "What It Controls",
            "Applied To",
            "Effect on Custom Components",
          ],
          rows: [
            {
              feature: "accent-color",
              values: [
                "Native control highlights",
                "Form controls",
                "None - browser ignores",
              ],
            },
            {
              feature: "text-color",
              values: [
                "Text content",
                "Text elements",
                "Directly sets text color",
              ],
            },
            {
              feature: "border-color",
              values: [
                "Element borders",
                "Any element",
                "Directly sets border color",
              ],
            },
            {
              feature: "background-color",
              values: [
                "Element backgrounds",
                "Any element",
                "Directly sets background",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Accent Color Utilities",
          items: [
            { cls: "accent-inherit", desc: "Inherit accent color from parent" },
            { cls: "accent-current", desc: "Use current text color as accent" },
            { cls: "accent-transparent", desc: "Transparent accent color" },
            { cls: "accent-blue-500", desc: "Primary blue accent" },
            { cls: "accent-red-500", desc: "Base red accent" },
            { cls: "accent-green-500", desc: "Base green accent" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Accent Color Playground",
          description:
            "Test accent colors on various form controls to understand their behavior and limitations.",
          options: [
            "accent-blue-500",
            "accent-red-500",
            "accent-green-500",
            "accent-orange-500",
            "accent-purple-500",
            "accent-current",
          ],
          defaultValue: "accent-blue-500",
          buildMarkup: (accentClass: string) => {
            return `<div class="space-y-4 ${accentClass}">
  <label class="flex items-center gap-2">
    <input type="checkbox" checked />
    Accept terms and conditions
  </label>

  <div class="space-y-2">
    <label class="flex items-center gap-2">
      <input type="radio" name="plan" checked />
      Monthly plan
    </label>
    <label class="flex items-center gap-2">
      <input type="radio" name="plan" />
      Annual plan
    </label>
  </div>

  <div class="space-y-2">
    <label class="block text-sm font-medium">Price range</label>
    <input type="range" min="0" max="100" value="50" />
  </div>
</div>`;
          },
          renderPreview: (accentClass: string) => {
            return (
              <div
                className={`space-y-4 ${accentClass} p-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700`}
              >
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span className="text-slate-700 dark:text-slate-200 text-sm">
                    Accept terms and conditions
                  </span>
                </label>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="plan_demo"
                      defaultChecked
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span className="text-slate-700 dark:text-slate-200 text-sm">
                      Monthly plan
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="plan_demo"
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span className="text-slate-700 dark:text-slate-200 text-sm">
                      Annual plan
                    </span>
                  </label>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Price range
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="50"
                    className="w-full cursor-pointer"
                  />
                  <span className="text-xs text-slate-500">$50/month</span>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Mismatched Brand",
          description:
            "You are building a form for the 'Pink Squad' community. However, the checkboxes and radio buttons are still using the default browser blue, which clashes with the brand. Apply 'accent-pink-600' to the form container to fix this.",
          codeSnippet: `<form class="p-6 bg-white rounded-xl shadow-lg border border-slate-100 {input}">
  <h3 class="text-pink-600 font-bold mb-4 text-lg">Join the Pink Squad 🎀</h3>
  
  <label class="flex items-center gap-3 mb-4 cursor-pointer">
    <input type="checkbox" checked class="w-5 h-5">
    <span class="text-slate-700 font-medium">I agree to the Terms</span>
  </label>

  <div class="space-y-2">
    <div class="text-sm text-slate-500 font-bold">Select Plan:</div>
    <div class="flex gap-6">
      <label class="flex items-center gap-2 cursor-pointer">
        <input type="radio" name="plan" checked class="w-5 h-5">
        <span class="text-slate-700">Monthly</span>
      </label>
      <label class="flex items-center gap-2 cursor-pointer">
        <input type="radio" name="plan" class="w-5 h-5">
        <span class="text-slate-700">Yearly</span>
      </label>
    </div>
  </div>
</form>`,
          options: [
            "bg-pink-600",
            "text-pink-600",
            "accent-pink-600",
            "border-pink-600",
          ],
          correctOption: "accent-pink-600",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center h-full p-4 bg-slate-50 dark:bg-black/20 rounded-lg">
              <form
                className={`p-6 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 w-full max-w-xs transition-all duration-300 ${userClass}`}
              >
                <h3 className="text-pink-600 font-bold mb-4 text-lg flex items-center gap-2">
                  <span>Join Squad</span>
                  <span className="text-xl">🎀</span>
                </h3>

                <label className="flex items-center gap-3 mb-6 cursor-pointer group">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 cursor-pointer transition-transform group-active:scale-95"
                  />
                  <span className="text-slate-700 dark:text-slate-200 font-medium text-sm">
                    I agree to Terms
                  </span>
                </label>

                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                    Select Plan
                  </div>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="challenge_plan"
                        defaultChecked
                        className="w-5 h-5 cursor-pointer transition-transform group-active:scale-95"
                      />
                      <span className="text-slate-700 dark:text-slate-300 text-sm">
                        Monthly
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="challenge_plan"
                        className="w-5 h-5 cursor-pointer transition-transform group-active:scale-95"
                      />
                      <span className="text-slate-700 dark:text-slate-300 text-sm">
                        Yearly
                      </span>
                    </label>
                  </div>
                </div>

                {userClass === "accent-pink-600" && (
                  <div className="mt-6 flex justify-center animate-in fade-in zoom-in duration-500">
                    <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-green-200">
                      <span>✨</span> Matches Brand!
                    </div>
                  </div>
                )}
              </form>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Brand-consistent forms",
              description:
                "Match your brand colors without custom CSS on checkboxes and radios.",
              code: `<form class="accent-indigo-500 space-y-4">
  <label class="flex items-center gap-2">
    <input type="checkbox" checked />
    Subscribe to newsletter
  </label>
  
  <fieldset class="space-y-2">
    <legend>Choose plan:</legend>
    <label class="flex items-center gap-2">
      <input type="radio" name="plan" checked />
      Monthly ($9/mo)
    </label>
    <label class="flex items-center gap-2">
      <input type="radio" name="plan" />
      Annual ($90/year)
    </label>
  </fieldset>
</form>`,
              preview: (
                <form className="accent-indigo-500 space-y-4 text-sm text-slate-700 dark:text-slate-300">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    Subscribe to newsletter
                  </label>
                  <fieldset className="space-y-2 border-t border-slate-200 dark:border-slate-700 pt-2">
                    <legend className="font-medium mb-1">Choose plan:</legend>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="plan_ex" defaultChecked />
                      Monthly ($9/mo)
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="plan_ex" />
                      Annual ($90/year)
                    </label>
                  </fieldset>
                </form>
              ),
            },
            {
              title: "Status-based accent colors",
              description:
                "Use semantic colors to indicate action severity and purpose.",
              code: `<div class="space-y-4">
  <div class="accent-green-500">
    <label class="flex items-center gap-2">
      <input type="checkbox" checked />
      Enable automatic updates
    </label>
  </div>

  <div class="accent-amber-500">
    <label class="flex items-center gap-2">
      <input type="checkbox" />
      Skip backup verification
    </label>
  </div>

  <div class="accent-red-500">
    <label class="flex items-center gap-2">
      <input type="checkbox" />
      Confirm account deletion
    </label>
  </div>
</div>`,
              preview: (
                <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                  <div className="accent-green-500">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked />
                      Enable automatic updates
                    </label>
                  </div>
                  <div className="accent-amber-500">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked />
                      Skip backup verification
                    </label>
                  </div>
                  <div className="accent-red-500">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked />
                      Confirm account deletion
                    </label>
                  </div>
                </div>
              ),
            },
            {
              title: "Theme-aware controls",
              description:
                "Use current color inheritance for theme-consistent controls in light and dark modes.",
              code: `<div class="space-y-4">
  <div class="p-4 bg-gray-50 dark:bg-gray-900">
    <div class="accent-current text-gray-900 dark:text-gray-100">
      <label class="flex items-center gap-2">
        <input type="checkbox" checked />
        Use system theme
      </label>
    </div>
  </div>
</div>`,
              preview: (
                <div className="p-4 bg-gray-100 dark:bg-slate-800 rounded-lg">
                  <div className="accent-current text-gray-900 dark:text-white">
                    <label className="flex items-center gap-2 text-sm font-medium">
                      <input type="checkbox" defaultChecked />
                      Use system theme
                    </label>
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using accent-color on custom components",
              reason:
                "Accent color only affects native browser controls, not custom-styled form elements built with divs/spans.",
              example: `<div class="accent-blue-500">\n  <div class="custom-checkbox" /> \n</div>`,
              level: "info",
            },
            {
              title: "Applying to text inputs",
              reason:
                "Text inputs don't use accent-color for their appearance. Use `caret-color` or border colors instead.",
              example: `<input type="text" class="accent-red-500" />`,
              level: "warning",
            },
            {
              title: "Using low-contrast accent colors",
              reason:
                "Accent colors need sufficient contrast to be visible against the background, especially for checked states.",
              example: `<form class="accent-gray-100">\n  <input type="checkbox" checked />\n</form>`,
              level: "critical",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Native only:",
              text: "Accent color works only on native checkboxes, radio buttons, and range inputs.",
            },
            {
              bold: "Semantic colors:",
              text: "Use brand colors for consistency, red for destructive actions, green for success.",
            },
            {
              bold: "Theme awareness:",
              text: "Use `accent-current` or `accent-inherit` for theme-consistent controls.",
            },
            {
              bold: "Inheritance:",
              text: "Accent color inherits from parent elements unless explicitly overridden.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["interactivity", "appearance"],
    title: "Appearance",
    description:
      "Control whether form controls use native browser styling or allow full custom UI design. Essential for brand consistency and cross-platform uniformity.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Appearance",
          description:
            "Control whether form controls use native browser styling or allow full custom UI design. Essential for brand consistency and cross-platform uniformity.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Appearance Control",
          description:
            "Appearance utilities control the Content layer by removing or restoring native browser rendering of form controls.  This enables custom styling while maintaining the underlying semantic functionality of the element.",
          features: [
            "Removes all native browser decorations (arrows, borders, shadows)",
            "Enables complete control over form control visual design",
            "Maintains all functionality and accessibility features",
            "Varies significantly across browsers and operating systems",
          ],
          layerAssignment:
            "Content Layer - Controls visual rendering of form control chrome",
          browserBehavior:
            "Browser either renders native controls (auto) or strips styling to expose the underlying element for custom CSS (none).",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Appearance vs Other Form Control Utilities",
          columns: [
            "Utility",
            "What It Changes",
            "When to Use",
            "Impact on Functionality",
          ],
          rows: [
            {
              feature: "appearance-none",
              values: [
                "Removes native styling",
                "Custom UI needed",
                "None - fully functional",
              ],
            },
            {
              feature: "appearance-auto",
              values: [
                "Restores browser default",
                "Standard UI desired",
                "None - fully functional",
              ],
            },
            {
              feature: "accent-color",
              values: [
                "Control highlight color",
                "Brand consistency",
                "None - visual only",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Appearance Utilities",
          items: [
            {
              cls: "appearance-none",
              desc: "Removes native browser styling from form controls",
            },
            {
              cls: "appearance-auto",
              desc: "Restores browser's default appearance",
            },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Appearance Playground",
          description:
            "Toggle between native and custom appearance to see the difference in form control styling.",
          options: ["appearance-none", "appearance-auto"],
          defaultValue: "appearance-auto",
          buildMarkup: (appearanceClass: string) => {
            return `<div class="space-y-4 ${appearanceClass}">
  <select class="border border-slate-300 rounded px-3 py-2 bg-white w-full">
    <option>Choose option</option>
    <option>Option A</option>
  </select>

  <div class="flex gap-4">
    <label class="flex gap-2">
      <input type="checkbox" class="border border-slate-300 rounded" />
      Checkbox
    </label>
    <label class="flex gap-2">
      <input type="radio" class="border border-slate-300 rounded-full" />
      Radio
    </label>
  </div>
</div>`;
          },
          renderPreview: (appearanceClass: string) => {
            return (
              <div
                className={`space-y-4 ${appearanceClass} p-4 bg-slate-50 dark:bg-slate-900 rounded-lg w-full max-w-sm`}
              >
                <select className="border border-slate-300 dark:border-slate-600 rounded px-3 py-2 bg-white dark:bg-slate-800 w-full text-slate-700 dark:text-slate-200">
                  <option>Choose option</option>
                  <option>Option A</option>
                  <option>Option B</option>
                </select>

                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-200">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border border-slate-300 rounded"
                      defaultChecked
                    />
                    Checkbox
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="demo_radio"
                      className="w-4 h-4 border border-slate-300 rounded-full"
                      defaultChecked
                    />
                    Radio
                  </label>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Double Arrow Problem",
          description:
            "We've added a custom chevron icon to this select menu, but the browser is still rendering its default arrow on top of it! Use `appearance-none` to strip away the native styling so only our custom icon shows.",
          codeSnippet: `<div class="relative w-64">
  <div class="absolute right-3 top-3 pointer-events-none text-slate-500">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
  </div>

  <select class="{input} w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-700 focus:ring-2 focus:ring-blue-500">
    <option>Select a country...</option>
    <option>United States</option>
    <option>Canada</option>
  </select>
</div>`,
          options: [
            "appearance-auto",
            "border-none",
            "outline-none",
            "appearance-none",
          ],
          correctOption: "appearance-none",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-900 p-8 rounded-lg">
              <div className="relative w-64">
                {/* Custom Arrow */}
                <div className="absolute right-3 top-3 pointer-events-none text-slate-500 z-10">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>

                <select
                  className={`
                  w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-slate-700 dark:text-slate-200 
                  focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow cursor-pointer
                  ${userClass}
                `}
                >
                  <option>Select a country...</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>Canada</option>
                </select>

                {/* Visualizer for 'Double Arrow' (Native + Custom) */}
                {userClass !== "appearance-none" && (
                  <div className="absolute -right-24 top-2 bg-red-100 text-red-600 text-[10px] px-2 py-1 rounded border border-red-200 animate-pulse">
                    ⬅ Double Arrows!
                  </div>
                )}

                {/* Success Indicator */}
                {userClass === "appearance-none" && (
                  <div className="absolute -right-24 top-2 bg-green-100 text-green-600 text-[10px] px-2 py-1 rounded border border-green-200 animate-in fade-in zoom-in">
                    Clean UI! ✨
                  </div>
                )}
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Custom select with arrow",
              description:
                "Replace native dropdown arrow with custom icon for brand consistency.",
              code: `<div class="relative">
  <select class="appearance-none w-full border border-border rounded-md px-3 py-2 pr-8 bg-background">
    <option>Select country</option>
    </select>
  <div class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
    <svg class="w-4 h-4" ...>...</svg>
  </div>
</div>`,
              preview: (
                <div className="relative w-64">
                  <select className="appearance-none w-full border border-slate-300 dark:border-slate-600 rounded-md px-3 py-2 pr-8 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                    <option>Select country</option>
                    <option>United States</option>
                    <option>Canada</option>
                  </select>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              ),
            },
            {
              title: "Custom checkbox design",
              description:
                "Create brand-consistent checkboxes by stripping native styles and rebuilding with Tailwind.",
              code: `<label class="flex items-center gap-2 cursor-pointer">
  <input type="checkbox" class="appearance-none w-5 h-5 border-2 border-slate-300 rounded checked:bg-blue-500 checked:border-blue-500" />
  <span>Remember me</span>
</label>`,
              preview: (
                <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-200">
                  <input
                    type="checkbox"
                    className="appearance-none w-5 h-5 border-2 border-slate-300 dark:border-slate-600 rounded checked:bg-blue-500 checked:border-blue-500 transition-colors cursor-pointer"
                    defaultChecked
                  />
                  <span>Remember me</span>
                </label>
              ),
            },
            {
              title: "Toggle switch UI",
              description:
                "Convert a native checkbox into a modern toggle switch using `appearance-none`.",
              code: `<label class="flex items-center gap-2 cursor-pointer">
  <input type="checkbox" class="appearance-none sr-only peer" />
  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-colors">
    <div class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-5"></div>
  </div>
  <span>Enable notifications</span>
</label>`,
              preview: (
                <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-200">
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
                    <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-5"></div>
                  </div>
                  <span>Notifications</span>
                </label>
              ),
            },
            {
              title: "File input redesign",
              description:
                "Style a file input with a custom button or drag-and-drop zone.",
              code: `<label class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50">
  <input type="file" class="appearance-none sr-only" />
  <p>Click to upload</p>
</label>`,
              preview: (
                <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-500">
                  <input type="file" className="sr-only" />
                  <span className="text-sm">Click to upload</span>
                </label>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Removing appearance without recreating affordances",
              reason:
                "Users lose visual indicators like dropdown arrows and checkmarks, making controls unusable.",
              example: `<select class="appearance-none">...</select> `,
              level: "critical",
            },
            {
              title: "Breaking accessibility with custom controls",
              reason:
                "Custom controls may lose keyboard navigation and focus states if not carefully implemented.",
              example: `<div class="custom-checkbox"></div> `,
              level: "warning",
            },
            {
              title: "Not handling disabled state",
              reason:
                "Native disabled controls get gray styling automatically; custom controls need explicit disabled styling.",
              example: `<input type="checkbox" class="appearance-none" disabled /> `,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Always add affordances:",
              text: "Replace removed arrows, checkmarks, and other visual indicators with custom equivalents immediately.",
            },
            {
              bold: "Maintain accessibility:",
              text: "Ensure custom controls have focus styles, support keyboard navigation, and use proper ARIA attributes.",
            },
            {
              bold: "Test across browsers:",
              text: "Native appearance varies significantly (especially on iOS vs Android vs Windows); test your custom replacements thoroughly.",
            },
            {
              bold: "Use semantic HTML:",
              text: "Keep native input elements in the DOM (even if visually hidden) to preserve built-in functionality.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["interactivity", "caret-color"],
    title: "Caret Color",
    description:
      "Control the color of the text insertion cursor (caret) inside input fields and textareas. Enhance branding and provide visual feedback for different states.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Caret Color",
          description:
            "Control the color of the text insertion cursor (caret) inside input fields and textareas. Enhance branding and provide visual feedback for different states.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Caret Color Control",
          description:
            "Caret color is a Content layer utility that controls the visual appearance of the text insertion cursor.  It affects only the cursor, not selection highlights or input styling.",
          features: [
            "Controls only the text insertion cursor (blinking line/block)",
            "Visible only when element is focused and user is typing",
            "Inherits from parent elements unless explicitly set",
            "Does not affect text selection or text color",
            "Works with input[type=text], textarea, and contenteditable elements",
          ],
          layerAssignment:
            "Content Layer - Controls visual appearance of text insertion cursor",
          browserBehavior:
            "Browser renders the caret with specified color when element receives focus, using system fallbacks for unsupported values.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Caret Color vs Related Text Styling",
          columns: ["Utility", "What It Controls", "Scope", "Visibility"],
          rows: [
            {
              feature: "caret-color",
              values: [
                "Text insertion cursor",
                "Focused inputs only",
                "Only during typing",
              ],
            },
            {
              feature: "text-color",
              values: ["Text content", "All text elements", "Always visible"],
            },
            {
              feature: "selection-color",
              values: [
                "Selection highlight",
                "Selected text ranges",
                "During selection",
              ],
            },
            {
              feature: "accent-color",
              values: [
                "Form control highlights",
                "Native controls only",
                "During interaction",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Caret Color Utilities",
          items: [
            { cls: "caret-inherit", desc: "Inherit caret color from parent" },
            { cls: "caret-current", desc: "Use current text color as caret" },
            { cls: "caret-transparent", desc: "Invisible caret" },
            { cls: "caret-black", desc: "Black caret color" },
            { cls: "caret-white", desc: "White caret color" },
            { cls: "caret-red-500", desc: "Red caret for alerts or errors" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Caret Color Playground",
          description:
            "Experiment with caret colors to see how they affect user experience and brand consistency.",
          options: [
            "caret-blue-500",
            "caret-red-500",
            "caret-green-500",
            "caret-purple-500",
            "caret-current",
            "caret-transparent",
          ],
          defaultValue: "caret-blue-500",
          buildMarkup: (caretClass: string) => {
            return `<div class="space-y-4">
  <input 
    type="text" 
    class="${caretClass} border rounded-md px-3 py-2 w-full"
    placeholder="Start typing to see the caret..."
  />
</div>`;
          },
          renderPreview: (caretClass: string) => {
            return (
              <div className={`space-y-4 w-full max-w-sm`}>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Text Input
                  </label>
                  <input
                    type="text"
                    className={`${caretClass} border border-slate-300 dark:border-slate-600 rounded-md px-3 py-2 w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100`}
                    placeholder="Start typing to see the caret..."
                  />
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Retro Terminal",
          description:
            "We're building a retro-style terminal input. The text is green, the background is black, but the cursor is still the default system color! Apply 'caret-green-500' to complete the look.",
          codeSnippet: `<div class="w-full max-w-md bg-black p-4 rounded-lg font-mono shadow-2xl">
  <div class="text-green-500 text-xs mb-2">user@system:~$</div>
  
  <input 
    type="text" 
    class="{input} w-full bg-transparent text-green-500 border-none focus:ring-0 placeholder-green-900"
    placeholder="Type command..."
    autofocus
  />
</div>`,
          options: [
            "caret-green-500",
            "caret-black",
            "text-green-500",
            "border-green-500",
          ],
          correctOption: "caret-green-500",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-200 dark:bg-slate-800 p-8 rounded-lg">
              <div className="w-full max-w-md bg-black p-6 rounded-lg font-mono shadow-2xl border border-slate-800 relative overflow-hidden">
                {/* Scanline effect */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 background-size-[100%_2px,3px_100%]"></div>

                <div className="text-green-500 text-xs mb-4 flex gap-2">
                  <span className="text-blue-400">user@system</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$</span>
                </div>

                <div className="relative z-20">
                  <input
                    type="text"
                    className={`
                    w-full bg-transparent text-green-500 border-none focus:ring-0 placeholder-green-900/50 outline-none
                    ${userClass}
                  `}
                    placeholder="Type command..."
                    autoFocus
                  />
                </div>

                {userClass === "caret-green-500" && (
                  <div className="absolute top-4 right-4 text-green-500 text-xs animate-pulse">
                    SYSTEM READY
                  </div>
                )}
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Brand-aligned form inputs",
              description:
                "Match caret color with your brand (`caret-purple-500`) for a cohesive visual experience.",
              code: `<div class="space-y-2">
  <label>Name</label>
  <input 
    type="text" 
    class="caret-purple-500 border border-purple-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-purple-500"
    placeholder="John Doe"
  />
</div>`,
              preview: (
                <div className="w-full max-w-xs space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    className="caret-purple-500 border border-purple-300 dark:border-purple-700 rounded-md px-3 py-2 w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
                    placeholder="John Doe"
                  />
                </div>
              ),
            },
            {
              title: "Error state with red caret",
              description:
                "Use semantic colors (`caret-rose-500`) to reinforce validation states and guide users.",
              code: `<div class="space-y-2">
  <label class="text-rose-600">Email Address</label>
  <input 
    type="email" 
    class="caret-rose-500 border border-rose-400 rounded-md px-3 py-2 w-full bg-rose-50 text-rose-900"
    placeholder="Invalid email address"
  />
</div>`,
              preview: (
                <div className="w-full max-w-xs space-y-2">
                  <label className="block text-sm font-medium text-rose-600 dark:text-rose-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="caret-rose-500 border border-rose-400 dark:border-rose-600 rounded-md px-3 py-2 w-full bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-100 outline-none focus:border-rose-500"
                    placeholder="Invalid email address"
                  />
                </div>
              ),
            },
            {
              title: "Theme-aware inputs",
              description:
                "Use `caret-current` for automatic theme switching and consistency.",
              code: `<div class="p-4 bg-slate-900 text-white rounded-lg">
  <h3 class="mb-2">Dark Theme</h3>
  <input 
    type="text" 
    class="caret-current border border-slate-600 rounded-md px-3 py-2 w-full bg-slate-800 text-white"
    placeholder="Adapts automatically"
  />
</div>`,
              preview: (
                <div className="p-4 bg-slate-900 text-white rounded-lg w-full max-w-xs border border-slate-700">
                  <h3 className="text-sm font-semibold mb-2">Dark Theme</h3>
                  <input
                    type="text"
                    className="caret-current border border-slate-600 rounded-md px-3 py-2 w-full bg-slate-800 text-white outline-none focus:border-slate-400"
                    placeholder="Adapts automatically"
                  />
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using low-contrast caret colors",
              reason:
                "Carets with poor contrast become invisible (e.g. light gray on white), making it hard for users to see where they're typing.",
              example: `<input class="caret-gray-100 bg-white" />`,
              level: "critical",
            },
            {
              title: "Relying on caret color for accessibility",
              reason:
                "Caret color alone doesn't make an input accessible; screen readers need proper labels and states.",
              example: `<input class="caret-blue-500" /> `,
              level: "warning",
            },
            {
              title: "Expecting caret-color to affect selection",
              reason:
                "Caret color only controls the insertion cursor line, not the background color of highlighted text (selection).",
              example: `<input class="caret-red-500" /> `,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Focus visibility:",
              text: "Caret color is only visible when the input is focused and active.",
            },
            {
              bold: "Contrast is essential:",
              text: "Ensure caret color has sufficient contrast against the input background.",
            },
            {
              bold: "Theme awareness:",
              text: "Use `caret-current` for inputs that should automatically adapt to text color changes in different themes.",
            },
            {
              bold: "Input types:",
              text: "Works with text, email, password, search, and textarea elements.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["interactivity", "color-scheme"],
    title: "Color Scheme",
    description:
      "Control whether native UI elements render in light or dark mode, independent of your site theme. Essential for mixed-theme interfaces and embedded widgets.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Color Scheme",
          description:
            "Control whether native UI elements render in light or dark mode, independent of your site theme. Essential for mixed-theme interfaces and embedded widgets.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Color Scheme",
          description:
            "The `color-scheme` property tells the browser which theme the element is designed for.  This allows the browser to render native form controls (scrollbars, inputs, checkboxes) with the appropriate light or dark default styles.",
          features: [
            "Affects native browser UI (scrollbars, inputs, forms)",
            "Can override the user's OS preference for specific sections",
            "scheme-dark usually renders dark backgrounds and light text on inputs",
            "Crucial for 'Dark Mode' sections within 'Light Mode' pages (and vice versa)",
          ],
          layerAssignment:
            "Content Layer - Hints rendering mode to browser engine",
          browserBehavior:
            "Browser switches its internal stylesheet for native controls to match the requested scheme.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Color Scheme vs Dark Mode",
          columns: [
            "Feature",
            "Color Scheme Utility",
            "Dark Mode Class (dark:)",
          ],
          rows: [
            {
              feature: "Target",
              values: ["Native Browser UI", "Custom CSS Styles"],
            },
            {
              feature: "Scrollbars",
              values: ["✅ Affected", "🚫 Not Affected"],
            },
            {
              feature: "Inputs (Default)",
              values: ["✅ Switches Theme", "🚫 Manual Styling Needed"],
            },
            {
              feature: "Purpose",
              values: ["System consistency", "Custom design"],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Color Scheme Utilities",
          items: [
            {
              cls: "scheme-normal",
              desc: "Use the browser or OS preferred color scheme",
            },
            {
              cls: "scheme-light",
              desc: "Force native UI elements to render in light mode",
            },
            {
              cls: "scheme-dark",
              desc: "Force native UI elements to render in dark mode",
            },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Color Scheme Playground",
          description:
            "Toggle between schemes to see the effect on standard form elements.",
          options: ["scheme-normal", "scheme-light", "scheme-dark"],
          defaultValue: "scheme-normal",
          buildMarkup: (schemeClass: string) => {
            return `<div class="${schemeClass} space-y-4 p-6 border rounded-lg">
  <input type="text" class="border rounded px-3 py-2 w-full" placeholder="Text input" />
  
  <div class="flex items-center gap-4">
    <label class="flex items-center gap-2">
      <input type="checkbox" checked /> Checkbox
    </label>
    <label class="flex items-center gap-2">
      <input type="radio" checked /> Radio
    </label>
  </div>

  <input type="date" class="border rounded px-3 py-2" />
</div>`;
          },
          renderPreview: (schemeClass: string) => {
            return (
              <div
                className={`${schemeClass} space-y-4 p-6 border border-slate-300 dark:border-slate-700 rounded-lg bg-transparent w-full max-w-sm`}
              >
                <input
                  type="text"
                  className="border border-slate-400 rounded px-3 py-2 w-full"
                  placeholder="Text input (Native)"
                />

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked /> Checkbox
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" defaultChecked /> Radio
                  </label>
                </div>

                <input
                  type="date"
                  className="border border-slate-400 rounded px-3 py-2"
                />
                <div className="text-xs text-muted-foreground mt-2">
                  *Note: Styles above depend on your OS/Browser defaults.
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Blinding Sidebar",
          description:
            "You have a dark-themed sidebar, but the native search input inside it is rendering in 'Light Mode' (white background), which is blindingly bright. Force the browser to render the input in dark mode to match the sidebar.",
          codeSnippet: `<aside class="w-64 bg-slate-900 text-white p-6 rounded-xl shadow-2xl">
  <div class="font-bold mb-4 text-slate-400 uppercase text-xs tracking-widest">Tools</div>
  
  <div class="{input} space-y-4">
    <input 
      type="search" 
      placeholder="Search tools..." 
      class="w-full border border-slate-700 rounded px-3 py-2"
    />
    
    <div class="space-y-2">
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" checked /> 
        <span>Show hidden</span>
      </label>
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" /> 
        <span>Enable logs</span>
      </label>
    </div>
  </div>
</aside>`,
          options: ["scheme-light", "scheme-dark", "dark", "bg-black"],
          correctOption: "scheme-dark",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
              <aside className="w-64 bg-slate-900 text-white p-6 rounded-xl shadow-2xl">
                <div className="font-bold mb-4 text-slate-400 uppercase text-xs tracking-widest">
                  Tools
                </div>

                <div className={`${userClass} space-y-4`}>
                  <input
                    type="search"
                    placeholder="Search tools..."
                    className="w-full border border-slate-700 rounded px-3 py-2"
                  />

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-slate-300">
                      <input type="checkbox" defaultChecked />
                      <span>Show hidden</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-300">
                      <input type="checkbox" />
                      <span>Enable logs</span>
                    </label>
                  </div>
                </div>

                {userClass === "scheme-dark" && (
                  <div className="mt-6 text-center animate-in fade-in zoom-in">
                    <span className="bg-green-900/50 text-green-400 text-[10px] px-2 py-1 rounded border border-green-800">
                      Dark Inputs Active
                    </span>
                  </div>
                )}
              </aside>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Dark widgets inside light UI",
              description:
                "Force dark native controls inside an otherwise light interface.",
              code: `<div class="scheme-dark bg-slate-900 text-white p-6 rounded-lg">
  <h3 class="mb-4 font-bold">Dark Console</h3>
  <input class="w-full border border-slate-700 rounded px-3 py-2" placeholder="Command..." />
  <div class="mt-4 flex gap-4">
    <label class="flex gap-2"><input type="checkbox" checked /> Verbose</label>
  </div>
</div>`,
              preview: (
                <div className="scheme-dark bg-slate-900 text-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
                  <h3 className="mb-4 font-bold">Dark Console</h3>
                  <input
                    className="w-full border border-slate-700 rounded px-3 py-2"
                    placeholder="Command..."
                  />
                  <div className="mt-4 flex gap-4 text-sm text-slate-300">
                    <label className="flex gap-2 items-center">
                      <input type="checkbox" defaultChecked /> Verbose
                    </label>
                    <label className="flex gap-2 items-center">
                      <input type="checkbox" /> Debug
                    </label>
                  </div>
                </div>
              ),
            },
            {
              title: "Respect system preference",
              description:
                "Let the operating system decide light or dark mode automatically (default behavior).",
              code: `<div class="scheme-normal p-6 border rounded-lg bg-background text-foreground">
  <label class="block mb-2 font-medium">System Preference</label>
  <select class="w-full border rounded px-3 py-2">
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</div>`,
              preview: (
                <div className="scheme-normal p-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-950 max-w-sm mx-auto text-slate-900 dark:text-white">
                  <label className="block mb-2 font-medium text-sm">
                    System Preference
                  </label>
                  <select className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2">
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                  <p className="text-xs text-slate-500 mt-2">
                    This control matches your OS theme.
                  </p>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Expecting scheme-* to change Tailwind colors",
              reason:
                "`scheme-dark` does NOT change `bg-white` to `bg-black`. It only tells the browser how to render NATIVE controls (scrollbars, default inputs).",
              example: `<div class="scheme-dark bg-white"> </div>`,
              level: "warning",
            },
            {
              title: "Using on custom-styled inputs",
              reason:
                "If you have `appearance-none` and fully custom styles, `scheme-*` might not have a visible effect on the input itself.",
              example: `<input class="appearance-none border-red-500 scheme-dark" />`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Scrollbars:",
              text: "Setting `scheme-dark` on the `html` or `body` tag is the easiest way to get dark scrollbars on the entire page.",
            },
            {
              bold: "Isolation:",
              text: "You can mix schemes! Have a `scheme-light` card inside a `scheme-dark` page.",
            },
            {
              bold: "CSS Variable:",
              text: "This utility sets the `color-scheme` CSS property.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["interactivity", "cursor"],
    title: "Cursor",
    description:
      "Control the cursor style when hovering over an element to provide visual feedback about interactivity, state, or available actions.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Cursor",
          description:
            "Control the cursor style when hovering over an element. Essential for indicating clickable links, drag states, text selection, and disabled elements.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Cursor Feedback",
          description:
            "The cursor property is the primary visual cue for interactivity on desktop devices. It tells the user *what* they can do with an element before they even click.  Choosing the correct cursor (like 'pointer' for links or 'not-allowed' for disabled inputs) creates an intuitive user experience by setting accurate expectations.",
          features: [
            "Indicates interactivity (pointer, default)",
            "Communicates state (wait, progress, not-allowed)",
            "Signals capabilities (grab, text, move, resize)",
            "Inherits from parent elements unless overridden",
          ],
          layerAssignment:
            "Interactivity Layer - Communicates element capability via mouse pointer",
          browserBehavior:
            "The operating system renders the specific icon associated with the CSS value when the mouse hovers over the element's hit area.",
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Cursor Utilities",
          items: [
            { cls: "cursor-auto", desc: "Browser default behavior" },
            { cls: "cursor-default", desc: "Standard arrow" },
            { cls: "cursor-pointer", desc: "Hand icon (links/buttons)" },
            { cls: "cursor-wait", desc: "Busy/loading spinner" },
            { cls: "cursor-text", desc: "I-beam for text selection" },
            { cls: "cursor-move", desc: "Movement crosshair" },
            { cls: "cursor-help", desc: "Question mark" },
            { cls: "cursor-not-allowed", desc: "Circle slash (disabled)" },
            { cls: "cursor-none", desc: "Hide cursor" },
            { cls: "cursor-context-menu", desc: "Context menu available" },
            { cls: "cursor-progress", desc: "Background busy" },
            { cls: "cursor-cell", desc: "Cell selection" },
            { cls: "cursor-crosshair", desc: "Precision selection" },
            { cls: "cursor-vertical-text", desc: "Vertical I-beam" },
            { cls: "cursor-alias", desc: "Link/Shortcut" },
            { cls: "cursor-copy", desc: "Copy action" },
            { cls: "cursor-no-drop", desc: "Drop not allowed" },
            { cls: "cursor-grab", desc: "Open hand (can grab)" },
            { cls: "cursor-grabbing", desc: "Closed hand (grabbing)" },
            { cls: "cursor-all-scroll", desc: "Scroll in any direction" },
            { cls: "cursor-col-resize", desc: "Horizontal resize" },
            { cls: "cursor-row-resize", desc: "Vertical resize" },
            { cls: "cursor-n-resize", desc: "North resize" },
            { cls: "cursor-e-resize", desc: "East resize" },
            { cls: "cursor-s-resize", desc: "South resize" },
            { cls: "cursor-w-resize", desc: "West resize" },
            { cls: "cursor-ne-resize", desc: "North-East resize" },
            { cls: "cursor-nw-resize", desc: "North-West resize" },
            { cls: "cursor-se-resize", desc: "South-East resize" },
            { cls: "cursor-sw-resize", desc: "South-West resize" },
            { cls: "cursor-ew-resize", desc: "East-West resize" },
            { cls: "cursor-ns-resize", desc: "North-South resize" },
            { cls: "cursor-nesw-resize", desc: "NE-SW resize" },
            { cls: "cursor-nwse-resize", desc: "NW-SE resize" },
            { cls: "cursor-zoom-in", desc: "Zoom in" },
            { cls: "cursor-zoom-out", desc: "Zoom out" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Cursor Playground",
          description:
            "Hover over the area below to see how different cursor utilities affect the mouse pointer.",
          options: [
            "cursor-auto",
            "cursor-default",
            "cursor-pointer",
            "cursor-wait",
            "cursor-text",
            "cursor-move",
            "cursor-not-allowed",
            "cursor-grab",
            "cursor-zoom-in",
          ],
          defaultValue: "cursor-pointer",
          buildMarkup: (cursorClass: string) => {
            return `<div class="${cursorClass} p-8 bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center">
  Hover me to see the cursor
</div>`;
          },
          renderPreview: (cursorClass: string) => {
            return (
              <div
                className={`${cursorClass} p-12 bg-slate-100 dark:bg-slate-800 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 font-medium`}
              >
                Hover me to see {cursorClass}
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Confusing Button",
          description:
            "This 'Processing' button is disabled, but when you hover over it, the cursor still turns into a hand (`cursor-pointer`). This tricks users into thinking it's clickable. Change the cursor to `cursor-not-allowed` to clearly signal that the button is inactive.",
          codeSnippet: `<div class="p-8 bg-white border rounded-xl flex flex-col items-center gap-4">
  <div class="text-sm font-medium text-slate-500">Form Status: Submitting...</div>
  
  <button 
    disabled
    class="{input} px-6 py-3 bg-blue-600/50 text-white font-bold rounded-lg flex items-center gap-2"
  >
    <svg class="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">...</svg>
    Processing...
  </button>
</div>`,
          options: [
            "cursor-pointer",
            "cursor-default",
            "cursor-not-allowed",
            "cursor-wait",
          ],
          correctOption: "cursor-not-allowed",
          renderPreview: (userClass: string) => (
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
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Custom Interactive Elements",
              description:
                "Use `cursor-pointer` on non-button elements that are clickable (e.g., cards or list items).",
              code: `<div class="cursor-pointer hover:bg-slate-50 p-4 rounded border">
  <h3 class="font-bold">Clickable Card</h3>
  <p>This div behaves like a link.</p>
</div>`,
              preview: (
                <div className="cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 w-full max-w-sm">
                  <h3 className="font-bold text-slate-800 dark:text-slate-200">
                    Clickable Card
                  </h3>
                  <p className="text-sm text-slate-500">
                    This div behaves like a link.
                  </p>
                </div>
              ),
            },
            {
              title: "Draggable Handle",
              description:
                "Use `cursor-grab` to indicate an element can be dragged.",
              code: `<div class="flex items-center gap-3 p-3 border rounded bg-white">
  <div class="cursor-grab text-slate-400">
    ⋮⋮
  </div>
  <span>Draggable Item</span>
</div>`,
              preview: (
                <div className="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-900 w-full max-w-sm">
                  <div className="cursor-grab text-slate-400 text-xl leading-none select-none hover:text-slate-600">
                    ⋮⋮
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">
                    Draggable Item
                  </span>
                </div>
              ),
            },
            {
              title: "Loading Overlay",
              description:
                "Use `cursor-wait` on overlays to indicate the application is busy.",
              code: `<div class="relative cursor-wait bg-slate-100 p-6 rounded">
  <div class="opacity-50">Content loading...</div>
  <div class="absolute inset-0 flex items-center justify-center">
    <svg class="animate-spin w-6 h-6 text-blue-500">...</svg>
  </div>
</div>`,
              preview: (
                <div className="relative cursor-wait bg-slate-100 dark:bg-slate-800 p-6 rounded border border-slate-200 dark:border-slate-700 w-full max-w-sm">
                  <div className="opacity-40 blur-[1px] text-slate-800 dark:text-slate-200">
                    <h4 className="font-bold">Dashboard</h4>
                    <p className="text-sm">Loading data...</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                </div>
              ),
            },
            {
              title: "Disabled Input",
              description:
                "Use `cursor-not-allowed` on disabled inputs to reinforce their state.",
              code: `<input type="text" disabled class="cursor-not-allowed bg-slate-100 border border-slate-300 text-slate-500 px-3 py-2 rounded w-full" value="Read-only value" />`,
              preview: (
                <input
                  type="text"
                  disabled
                  className="cursor-not-allowed bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-500 px-3 py-2 rounded w-full max-w-sm"
                  value="Read-only value"
                />
              ),
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Semantic HTML first:",
              text: "Buttons and links automatically get `cursor-pointer`. You usually only need to set this manually on custom interactive divs.",
            },
            {
              bold: "Don't mislead users:",
              text: "Never put `cursor-pointer` on something that isn't clickable. It frustrates users who expect an action.",
            },
            {
              bold: "Grab vs Grabbing:",
              text: "Use `cursor-grab` for the resting state of a draggable item, and switch to `cursor-grabbing` via Javascript (or `:active` styles) while dragging.",
            },
            {
              bold: "Text selection:",
              text: "Use `cursor-text` if you have a custom element that behaves like a text input but isn't an `<input>` or `<textarea>`.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["interactivity", "field-sizing"],
    title: "Field Sizing",
    description:
      "Control how form fields calculate their inline size. Choose between fixed widths or dynamic sizing that adapts to the content length.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Field Sizing",
          description:
            "Control how form fields calculate their inline size. Choose between fixed widths or dynamic sizing that adapts to the content length.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Field Sizing",
          description:
            "Traditionally, input fields have a default fixed width that ignores their content. Field Sizing utilities allow you to break this behavior, making inputs behave more like 'span' elements that grow and shrink with their text. ",
          features: [
            "field-sizing-content: Input grows as you type",
            "field-sizing-fixed: Standard browser behavior",
            "Perfect for tag inputs, inline editing, and dense forms",
            "Prevents massive empty spaces in compact layouts",
            "Works on <input>, <textarea>, and <select> elements",
          ],
          layerAssignment:
            "Interactivity Layer - Controls dynamic layout behavior of form elements",
          browserBehavior:
            "Sets the CSS 'field-sizing' property. 'content' tells the browser to calculate width based on the 'value' attribute.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Content vs Fixed Sizing",
          columns: ["Feature", "field-sizing-content", "field-sizing-fixed"],
          rows: [
            {
              feature: "Width Calculation",
              values: [
                "Based on input value length",
                "Based on width / default",
              ],
            },
            {
              feature: "Layout Shift",
              values: ["Dynamic (grows/shrinks)", "Stable (static width)"],
            },
            {
              feature: "Best For",
              values: ["Tags, Search filters", "Login forms, Address fields"],
            },
            {
              feature: "CSS Equivalent",
              values: ["field-sizing: content", "field-sizing: fixed"],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Field Sizing Utilities",
          items: [
            {
              cls: "field-sizing-content",
              desc: "Input width adapts to its content",
            },
            {
              cls: "field-sizing-fixed",
              desc: "Input keeps a fixed inline size (default)",
            },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Field Sizing Playground",
          description:
            "Switch between fixed and content-based sizing. Type in the input to see it grow.",
          options: ["field-sizing-content", "field-sizing-fixed"],
          defaultValue: "field-sizing-content",
          buildMarkup: (sizingClass: string) => {
            return `<div class="flex flex-col gap-4">
  <input 
    type="text" 
    class="${sizingClass} border border-slate-300 rounded px-3 py-2 min-w-[100px]" 
    placeholder="Type here..." 
  />
  <select class="${sizingClass} border border-slate-300 rounded px-3 py-2">
    <option>Short</option>
    <option>A much longer option text</option>
  </select>
</div>`;
          },
          renderPreview: (sizingClass: string) => {
            return (
              <div className="flex flex-col items-start gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-lg w-full max-w-md">
                <input
                  type="text"
                  className={`${sizingClass} border border-slate-300 dark:border-slate-700 rounded px-3 py-2 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[100px] transition-all`}
                  placeholder="Type here..."
                />
                <select
                  className={`${sizingClass} border border-slate-300 dark:border-slate-700 rounded px-3 py-2 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                >
                  <option>Short</option>
                  <option>A much longer option text</option>
                </select>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Rigid Tags",
          description:
            "This tag editor looks broken. The 'design' tag has a huge empty gap because the input is fixed width. Change the field sizing so the input shrinks perfectly to fit the text 'design'.",
          codeSnippet: `<div class="flex flex-wrap gap-2 p-4 bg-white border rounded-lg max-w-sm">
  <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">react</span>
  <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">css</span>
  
  <input 
    type="text" 
    value="design" 
    class="{input} bg-blue-50 text-blue-800 px-2 py-1 rounded text-sm font-medium outline-none border border-blue-200"
  />
</div>`,
          options: [
            "field-sizing-fixed",
            "w-auto",
            "field-sizing-content",
            "flex-1",
          ],
          correctOption: "field-sizing-content",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-900 p-8 rounded-lg">
              <div className="flex flex-wrap gap-2 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm w-full max-w-sm">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-sm font-medium">
                  react
                </span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-sm font-medium">
                  css
                </span>

                <input
                  type="text"
                  defaultValue="design"
                  className={`
                  bg-blue-50 dark:bg-blue-900/10 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-sm font-medium 
                  outline-none border border-blue-200 dark:border-blue-800 focus:ring-2 focus:ring-blue-500
                  ${userClass}
                `}
                />

                {/* Visualizer for extra space */}
                {userClass !== "field-sizing-content" && (
                  <div className="flex-1 h-8 border-l-2 border-dashed border-red-300 relative bg-red-50/50">
                    <span className="absolute top-1/2 -translate-y-1/2 left-2 text-[10px] text-red-400 whitespace-nowrap font-mono">
                      Wasted Space
                    </span>
                  </div>
                )}
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Tag or token inputs",
              description:
                "Automatically fit short dynamic values like tags or labels without layout gaps.",
              code: `<div class="flex gap-2">
  <span class="badge">React</span>
  <input
    class="field-sizing-content border rounded px-2 py-1 min-w-[3rem]"
    placeholder="Add..."
  />
</div>`,
              preview: (
                <div className="flex gap-2 items-center p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 w-full max-w-xs">
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm font-medium border border-slate-200 dark:border-slate-700">
                    React
                  </span>
                  <input
                    className="field-sizing-content border border-slate-300 dark:border-slate-600 rounded px-2 py-1 text-sm bg-transparent min-w-[3rem] focus:outline-none focus:border-blue-500"
                    placeholder="Add..."
                  />
                </div>
              ),
            },
            {
              title: "Consistent form layouts",
              description:
                "Maintain predictable alignment in structured forms using fixed sizing.",
              code: `<form class="space-y-4">
  <div>
    <label class="block text-xs font-bold mb-1">Email</label>
    <input class="field-sizing-fixed w-full border px-3 py-2 rounded" placeholder="john@example.com" />
  </div>
</form>`,
              preview: (
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 max-w-xs mx-auto w-full">
                  <label className="block text-xs font-bold mb-1 text-slate-500">
                    Email
                  </label>
                  <input
                    className="field-sizing-fixed w-full border border-slate-300 dark:border-slate-600 px-3 py-2 rounded text-sm bg-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Forgetting min-width",
              reason:
                "When `field-sizing-content` is empty, the input might disappear entirely. Always set a `min-w` utility.",
              example: `<input class="field-sizing-content min-w-[40px]" />`,
              level: "warning",
            },
            {
              title: "Using on incompatible elements",
              reason:
                "Field sizing works on form inputs, textareas, and selects. It does not work on regular `div` or `span` elements.",
              example: `<div class="field-sizing-content">...</div>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Tags & Filters:",
              text: "This utility is perfect for inline editing interfaces, tag clouds, and compact search filters.",
            },
            {
              bold: "Textarea Growth:",
              text: "Using `field-sizing-content` on a textarea makes it auto-grow vertically as the user types!",
            },
            {
              bold: "Smooth Transition:",
              text: "Combine with `transition-all` to animate the width changes as users type.",
            },
            {
              bold: "Browser Support:",
              text: "This uses the new CSS `field-sizing` property. Ensure your target browsers support it or provide a fallback.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["interactivity", "pointer-events"],
    title: "Pointer Events",
    description:
      "Control how elements respond to mouse and touch interactions. Essential for creating click-through overlays, decorative elements, and managing interactive states.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Pointer Events",
          description:
            "Control how elements respond to mouse and touch interactions. Essential for creating click-through overlays, decorative elements, and managing interactive states.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "The Ghost Layer",
          description:
            "Think of `pointer-events-none` as turning an element into a ghost. It remains visible, but mouse clicks and hover states pass right through it, hitting whatever is underneath. This is crucial for decorative overlays (like gradients or gloss effects) that sit on top of interactive content but shouldn't block it.",
          features: [
            "pointer-events-none: Element ignores all mouse/touch events",
            "pointer-events-auto: Restores default interaction behavior",
            "Clicks pass through to elements visually underneath",
            "Hover states on underlying elements are triggered",
            "Text selection might still work depending on browser",
          ],
          layerAssignment:
            "Interactivity Layer - Controls hit-testing and event bubbling",
          browserBehavior:
            "The element is removed from the hit-test target list, allowing events to target the element visually below it in the z-order.",
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Pointer Events Utilities",
          items: [
            {
              cls: "pointer-events-none",
              desc: "Make element ignore pointer events (click-through)",
            },
            {
              cls: "pointer-events-auto",
              desc: "Restore default pointer event behavior",
            },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Pointer Events Playground",
          description:
            "Try clicking the button below. The overlay will block your clicks unless you set it to `pointer-events-none`.",
          options: ["pointer-events-auto", "pointer-events-none"],
          defaultValue: "pointer-events-auto",
          buildMarkup: (pointerClass: string) => {
            return `<div class="relative inline-block">
  <button class="bg-blue-500 text-white px-6 py-3 rounded">Click Me</button>
  <div class="${pointerClass} absolute inset-0 bg-white/50 flex items-center justify-center text-xs font-bold border-2 border-red-500">
    Overlay
  </div>
</div>`;
          },
          renderPreview: (pointerClass: string) => {
            return (
              <div className="relative inline-block group">
                <button
                  className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold px-8 py-4 rounded shadow-lg transition-colors"
                  onClick={() => alert("Button clicked!")}
                >
                  Click Me
                </button>
                <div
                  className={`${pointerClass} absolute inset-0 bg-white/30 backdrop-blur-[2px] border-2 border-red-500/50 rounded flex items-center justify-center text-red-900 font-bold text-xs uppercase tracking-widest`}
                >
                  Overlay
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Blocked Button",
          description:
            "This 'Premium' button has a fancy gloss overlay sitting on top of it. Currently, the overlay is capturing all your clicks (`pointer-events-auto`), making the button underneath unclickable. Apply `pointer-events-none` to the overlay so clicks pass through to the button.",
          codeSnippet: `<div class="relative inline-block">
  <button class="px-8 py-3 bg-indigo-600 text-white font-bold rounded-full">
    Get Premium
  </button>

  <div class="{input} absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent border border-white/30">
  </div>
</div>`,
          options: [
            "pointer-events-auto",
            "pointer-events-none",
            "cursor-pointer",
            "opacity-0",
          ],
          correctOption: "pointer-events-none",
          renderPreview: (userClass: string) => {
            const isSuccess = userClass === "pointer-events-none";
            return (
              <div className="flex flex-col items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                <div className="relative group">
                  <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all text-white font-bold rounded-full shadow-lg flex items-center gap-2">
                    Get Premium
                  </button>

                  {/* The Gloss Overlay */}
                  <div
                    className={`
                    absolute inset-0 rounded-full bg-gradient-to-b from-white/40 to-transparent border border-white/40
                    ${userClass}
                  `}
                    // This visual feedback only works if clicks are blocked
                    onClick={(e) => {
                      if (userClass !== "pointer-events-none") {
                        e.stopPropagation();
                        // Visual shake logic would go here in a real app
                      }
                    }}
                  />
                </div>

                <div className="mt-8 h-8 text-center">
                  {isSuccess ? (
                    <div className="text-xs text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full border border-green-200 animate-in fade-in zoom-in">
                      ✅ Clicks pass through!
                    </div>
                  ) : (
                    <div className="text-xs text-red-500 font-medium animate-pulse">
                      🚫 Overlay is blocking clicks
                    </div>
                  )}
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Input with Absolute Icon",
              description:
                "Position an icon over an input without blocking the ability to click and focus the input text.",
              code: `<div class="relative text-gray-500">
  <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">...</svg>
  </div>
  <input type="text" class="pl-10 block w-full rounded-md border-gray-300" placeholder="Search" />
</div>`,
              preview: (
                <div className="relative text-slate-500 w-full max-w-xs">
                  <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="pl-10 block w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Search..."
                  />
                </div>
              ),
            },
            {
              title: "Decorative Card Overlay",
              description:
                "Add a gradient fade over a card image without preventing the card link from working.",
              code: `<div class="relative rounded-lg overflow-hidden group">
  <img src="..." class="w-full" />
  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-white font-bold">
    Card Title
  </div>
</div>`,
              preview: (
                <div className="relative rounded-lg overflow-hidden group w-full max-w-xs cursor-pointer shadow-md">
                  <div className="bg-slate-300 h-48 w-full flex items-center justify-center text-slate-500">
                    Image
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="pointer-events-none absolute bottom-4 left-4 text-white font-bold">
                    Scenic View
                  </div>
                </div>
              ),
            },
            {
              title: "Disabled Select Styling",
              description:
                "Style a custom select wrapper as disabled and prevent interaction.",
              code: `<div class="relative pointer-events-none opacity-50">
  <select disabled class="w-full p-2 border rounded appearance-none">
    <option>Locked Option</option>
  </select>
  <div class="absolute right-3 top-3">▼</div>
</div>`,
              preview: (
                <div className="relative pointer-events-none opacity-50 w-full max-w-xs">
                  <select
                    disabled
                    className="w-full p-2 border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 rounded appearance-none text-slate-500"
                  >
                    <option>System Locked</option>
                  </select>
                  <div className="absolute right-3 top-2.5 text-slate-500 text-xs">
                    ▼
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Icons in inputs:",
              text: "Always use `pointer-events-none` on absolute positioned icons inside inputs so the user can click through them to focus the field.",
            },
            {
              bold: "Select element arrows:",
              text: "When creating custom select styling with a custom arrow, ensure the arrow wrapper has `pointer-events-none` so clicking the arrow still opens the native menu.",
            },
            {
              bold: "Debugging layers:",
              text: "If a button isn't clicking, check if an invisible container (like a modal wrapper or large absolute div) is covering it. Use dev tools or temporarily add a background color to debug.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["interactivity", "resize"],
    title: "Resize",
    description:
      "Control whether and how elements like textareas can be resized by the user. Essential for maintaining layout integrity in forms.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Resize",
          description:
            "Control whether and how elements like textareas can be resized by the user. Essential for maintaining layout integrity in forms.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Resize Control",
          description:
            "The CSS resize property gives users control over an element's dimensions via a drag handle.  By default, textareas are resizable in both directions, which can break meticulous layouts. These utilities put you back in charge.",
          features: [
            "Applied primarily to <textarea> elements",
            "Can restrict resizing to one axis (vertical or horizontal)",
            "resize-none is crucial for fixed-layout designs",
            "Works on any element with 'overflow: auto/scroll/hidden'",
            "Browser support is universal for textareas",
          ],
          layerAssignment:
            "Interactivity Layer - Controls user-driven dimension changes",
          browserBehavior:
            "Adds a resize handle to the bottom-right corner of the element, allowing the user to override width/height styles.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Resize Strategies",
          columns: ["Class", "Allowed Direction", "Best Use Case"],
          rows: [
            {
              feature: "resize-none",
              values: ["None", "Fixed-height forms, Chat inputs"],
            },
            {
              feature: "resize-y",
              values: ["Vertical only", "Blog comments, Feedback forms"],
            },
            {
              feature: "resize-x",
              values: ["Horizontal only", "Split-pane layouts"],
            },
            {
              feature: "resize",
              values: ["Both", "Free-form text editors"],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Resize Utilities",
          items: [
            { cls: "resize", desc: "Resize both horizontally and vertically" },
            { cls: "resize-x", desc: "Resize horizontally only" },
            { cls: "resize-y", desc: "Resize vertically only" },
            { cls: "resize-none", desc: "Disable resizing" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Resize Playground",
          description: "Switch resize modes on a standard textarea.",
          options: ["resize", "resize-x", "resize-y", "resize-none"],
          defaultValue: "resize",
          buildMarkup: (resizeClass: string) => {
            return `<textarea class="${resizeClass} w-full h-32 rounded-lg border border-slate-300 p-3 shadow-sm" placeholder="Try resizing me..."></textarea>`;
          },
          renderPreview: (resizeClass: string) => {
            return (
              <div className="w-full max-w-md p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <textarea
                  className={`${resizeClass} w-full h-32 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100`}
                  placeholder="Try resizing me..."
                ></textarea>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Layout Breaker",
          description:
            "This sidebar feedback form is compact. However, the textarea allows horizontal resizing, which lets users stretch it outside the sidebar, breaking the layout. Restrict it to only resize vertically.",
          codeSnippet: `<aside class="w-64 bg-slate-900 text-white p-4 rounded-lg shadow-xl">
  <h3 class="font-bold text-sm mb-3">Send Feedback</h3>
  
  <form class="space-y-3">
    <input type="email" placeholder="Your email" class="w-full rounded px-2 py-1 text-black text-sm" />
    
    <textarea 
      class="{input} w-full h-24 rounded px-2 py-1 text-black text-sm" 
      placeholder="Message..."
    ></textarea>
    
    <button class="w-full bg-blue-600 rounded py-1 text-sm font-bold">Send</button>
  </form>
</aside>`,
          options: ["resize", "resize-x", "resize-y", "resize-none"],
          correctOption: "resize-y",
          renderPreview: (userClass: string) => (
            <div className="flex items-start justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 bottom-0 left-[calc(50%+8rem)] border-l-2 border-dashed border-red-400/30 pl-2 text-[10px] text-red-400 pt-2 hidden sm:block">
                Sidebar Edge
              </div>

              <aside className="w-64 bg-slate-900 text-white p-4 rounded-lg shadow-xl z-10 shrink-0">
                <h3 className="font-bold text-sm mb-3 text-slate-200">
                  Send Feedback
                </h3>

                <form
                  className="space-y-3"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded px-2 py-1.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <textarea
                    className={`
                    w-full h-24 rounded px-2 py-1.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${userClass}
                  `}
                    placeholder="Message..."
                  ></textarea>

                  <button className="w-full bg-blue-600 hover:bg-blue-500 transition-colors rounded py-1.5 text-sm font-bold">
                    Send
                  </button>
                </form>
              </aside>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Chat message input",
              description:
                "Supports longer messages by expanding vertically without breaking the layout width.",
              code: `<div class="rounded-xl bg-slate-900 p-4 max-w-sm mx-auto">
  <textarea
    class="resize-y w-full h-20 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Type a message..."
  ></textarea>
</div>`,
              preview: (
                <div className="rounded-xl bg-slate-900 p-4 w-full max-w-xs mx-auto">
                  <textarea
                    className="resize-y w-full h-20 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Type a message..."
                  ></textarea>
                </div>
              ),
            },
            {
              title: "Structured form feedback",
              description:
                "Keeps forms aligned and predictable by disabling resizing entirely.",
              code: `<div class="space-y-2 rounded-xl bg-white p-4 shadow border max-w-sm mx-auto">
  <label class="text-sm font-medium text-slate-700">Feedback</label>
  <textarea
    class="resize-none w-full h-24 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Share your thoughts"
  ></textarea>
</div>`,
              preview: (
                <div className="space-y-2 rounded-xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-200 dark:border-slate-700 w-full max-w-xs mx-auto">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Feedback
                  </label>
                  <textarea
                    className="resize-none w-full h-24 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
                    placeholder="Share your thoughts"
                  ></textarea>
                </div>
              ),
            },
            {
              title: "Code Snippet Editor",
              description:
                "Horizontal resizing can be useful for code editors where lines might be long.",
              code: `<div class="rounded-xl bg-slate-950 p-4 max-w-sm mx-auto">
  <textarea
    class="resize-x w-full h-20 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 font-mono text-xs text-green-400 focus:outline-none focus:ring-2 focus:ring-slate-600"
    placeholder="const message = 'Hello world'"
  ></textarea>
</div>`,
              preview: (
                <div className="rounded-xl bg-slate-950 p-4 w-full max-w-xs mx-auto">
                  <textarea
                    className="resize-x w-full h-20 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 font-mono text-xs text-green-400 focus:outline-none focus:ring-2 focus:ring-slate-600"
                    placeholder="const message = 'Hello world'"
                  ></textarea>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Allowing horizontal resize in fixed layouts",
              reason:
                "If a container has a fixed width or flex layout, expanding a textarea horizontally can cause overflow or break the grid.",
              example: `<div class="w-64">\n  <textarea class="resize"></textarea>\n</div>`,
              level: "warning",
            },
            {
              title: "Forgetting resizing on small screens",
              reason:
                "On mobile, resizing might not be easy or desirable due to touch targets. Consider disabling resize on touch devices.",
              example: `<textarea class="resize md:resize-y"></textarea>`,
              level: "info",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Chat Inputs:",
              text: "Use `resize-y` for chat inputs so users can see more text but not break the chat width.",
            },
            {
              bold: "Fixed Forms:",
              text: "Use `resize-none` for rigid forms (like login or payment) where layout stability is key.",
            },
            {
              bold: "Min/Max Height:",
              text: "Combine `resize-y` with `min-h-*` and `max-h-*` classes to prevent the textarea from becoming too small or too large.",
            },
            {
              bold: "Browser Defaults:",
              text: "Most browsers default textareas to `resize: both`. Explicitly setting a class is always safer.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["interactivity", "scroll-behavior"],
    title: "Scroll Behavior",
    description:
      "Control the scrolling behavior of an element. Choose between an instant jump or a smooth animation when navigating via anchor links or JavaScript.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Scroll Behavior",
          description:
            "Control the scrolling behavior of an element. Choose between an instant jump or a smooth animation when navigating via anchor links or JavaScript.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Scroll Behavior",
          description:
            "The scroll-behavior property tells the browser how to handle navigation within a scrolling container.  It primarily affects anchor links (`<a href='#target'>`) and JavaScript calls like `.scrollTo()`. It does NOT affect the user's manual scrolling speed (mouse wheel or touch).",
          features: [
            "Applied to the SCROLL CONTAINER (often <html> or a specific div)",
            "Affects programmatic scrolls (links, JS)",
            "Does NOT affect manual user scrolling",
            "Smooth scrolling helps users maintain spatial context",
            "Instant scrolling is preferred for critical UI updates or data feeds",
          ],
          layerAssignment:
            "Interactivity Layer - Modifies the browser's scroll animation engine",
          browserBehavior:
            "If 'smooth', the browser interpolates the position over time. If 'auto', it jumps to the new coordinate immediately.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Smooth vs Auto",
          columns: ["Class", "Animation", "Best Use Case", "Accessibility"],
          rows: [
            {
              feature: "scroll-smooth",
              values: [
                "Ease-in-out animation",
                "Anchor links, Back-to-top",
                "Respects prefers-reduced-motion",
              ],
            },
            {
              feature: "scroll-auto",
              values: [
                "None (Instant jump)",
                "Accordions, Tabs, Feeds",
                "Default behavior",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Scroll Behavior Utilities",
          items: [
            {
              cls: "scroll-auto",
              desc: "Instant scrolling without animation (default)",
            },
            {
              cls: "scroll-smooth",
              desc: "Smooth animated scrolling within the element",
            },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Scroll Behavior Playground",
          description:
            "Toggle smooth scrolling behavior. Click the 'Jump to Target' button to see the difference.",
          options: ["scroll-auto", "scroll-smooth"],
          defaultValue: "scroll-auto",
          buildMarkup: (scrollClass: string) => {
            return `<div class="${scrollClass} h-48 overflow-y-auto border rounded p-4 relative">
  <a href="#target" class="sticky top-0 bg-white/90 p-1">Jump Down</a>
  <div class="h-96">Spacer...</div>
  <div id="target" class="bg-green-100 p-2 rounded">Target Element</div>
  <div class="h-48">Bottom...</div>
</div>`;
          },
          renderPreview: (scrollClass: string) => {
            return (
              <div
                className={`
                h-48 overflow-y-auto border border-slate-200 dark:border-slate-700 rounded-lg p-6 relative bg-white dark:bg-slate-900 w-full max-w-sm
                ${scrollClass}
              `}
              >
                <div className="sticky top-0 left-0 right-0 z-10 flex justify-center pb-4 bg-gradient-to-b from-white dark:from-slate-900 to-transparent">
                  <button
                    onClick={(e) => {
                      const container =
                        e.currentTarget.closest(".overflow-y-auto");
                      const target = container?.querySelector("#target-el");
                      if (target) {
                        target.scrollIntoView({ block: "nearest" });
                      }
                    }}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-3 py-1.5 rounded-full shadow-md font-medium transition-colors"
                  >
                    Jump to Target ↓
                  </button>
                </div>

                <div className="space-y-8 text-center text-slate-400 text-sm py-4">
                  <p>Scroll content...</p>
                  <p>More content...</p>
                  <p>Keep going...</p>
                  <p>Almost there...</p>
                </div>

                <div
                  id="target-el"
                  className="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 p-4 rounded-lg text-center font-bold my-8 scroll-mt-12"
                >
                  🎯 Target Reached
                </div>

                <div className="h-32"></div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Jarring Jump",
          description:
            "This documentation viewer feels broken. When you click 'Go to API', it jumps instantly, making it hard to track where you are. Apply `scroll-smooth` to the scroll container to fix the navigation experience.",
          codeSnippet: `<div class="w-full max-w-md border rounded-xl overflow-hidden shadow-lg bg-white">
  <div class="bg-slate-100 p-3 border-b flex justify-between items-center sticky top-0 z-20">
    <span class="font-bold text-slate-700">Docs v2.0</span>
    <a href="#api-section" class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
      Go to API
    </a>
  </div>

  <div class="{input} h-64 overflow-y-auto p-6 relative">
    <h1 class="text-2xl font-bold mb-4">Introduction</h1>
    <p class="text-slate-500 mb-8">Welcome to the documentation...</p>
    
    <div class="h-64 bg-slate-50 rounded mb-8"></div>
    
    <h2 id="api-section" class="text-xl font-bold mb-2 pt-4">API Reference</h2>
    <p class="text-slate-500">This is the section you are looking for.</p>
    
    <div class="h-32"></div>
  </div>
</div>`,
          options: [
            "scroll-auto",
            "transition-all",
            "duration-500",
            "scroll-smooth",
          ],
          correctOption: "scroll-smooth",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg">
              <div className="w-full max-w-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 flex flex-col h-80 relative group">
                <div className="bg-slate-100 dark:bg-slate-800 p-3 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center z-20 shadow-sm shrink-0">
                  <span className="font-bold text-slate-700 dark:text-slate-200 text-sm">
                    Docs v2.0
                  </span>
                  <button
                    onClick={(e) => {
                      const card = e.currentTarget.closest(".group");
                      const scrollContainer =
                        card?.querySelector(".overflow-y-auto");
                      const target =
                        scrollContainer?.querySelector("#challenge-target");
                      if (target && scrollContainer) {
                        target.scrollIntoView({ block: "start" });
                      }
                    }}
                    className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full font-bold hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                  >
                    Go to API ↓
                  </button>
                </div>

                <div
                  className={`flex-1 overflow-y-auto p-6 relative ${userClass}`}
                >
                  <h1 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
                    Introduction
                  </h1>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                    Welcome to the documentation. This guide covers everything
                    you need to know about the platform.
                  </p>

                  <div className="space-y-4 mb-12 opacity-30">
                    <div className="h-4 bg-slate-300 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-300 rounded w-full"></div>
                    <div className="h-4 bg-slate-300 rounded w-5/6"></div>
                    <div className="h-32 bg-slate-200 rounded w-full"></div>
                  </div>

                  <div
                    id="challenge-target"
                    className="scroll-mt-4 pt-4 border-t border-slate-100 dark:border-slate-800"
                  >
                    <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                      API Reference
                    </h2>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                      <code className="text-xs text-blue-800 dark:text-blue-200">
                        GET /v1/users
                      </code>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-2">
                        Returns a list of active users.
                      </p>
                    </div>
                  </div>

                  <div className="h-64"></div>
                </div>
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Documentation navigation",
              description:
                "Creates a polished navigation experience for long-form content with sticky headers.",
              code: `<html class="scroll-smooth">
  <body>
    <nav>
      <a href="#installation">Installation</a>
      <a href="#usage">Usage</a>
    </nav>
    <main>
      <section id="installation">...</section>
      <section id="usage">...</section>
    </main>
  </body>
</html>`,
              preview: (
                <div className="scroll-smooth h-40 overflow-y-auto rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 relative w-full max-w-sm">
                  <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b p-3 flex gap-4 text-xs font-bold z-10">
                    <a href="#" className="text-blue-600 dark:text-blue-400">
                      Installation
                    </a>
                    <a href="#" className="text-blue-600 dark:text-blue-400">
                      Usage
                    </a>
                  </div>
                  <div className="p-4 space-y-12">
                    <div className="text-sm font-bold">Installation...</div>
                    <div className="h-12 bg-slate-100 dark:bg-slate-800 rounded"></div>
                    <div className="text-sm font-bold">Usage...</div>
                    <div className="h-12 bg-slate-100 dark:bg-slate-800 rounded"></div>
                  </div>
                </div>
              ),
            },
            {
              title: "Back to Top Button",
              description:
                "Smoothly animates the user back to the start of the page.",
              code: `<button 
  onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
  class="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg"
>
  ↑ Top
</button>`,
              preview: (
                <div className="scroll-smooth h-40 overflow-y-auto bg-slate-50 dark:bg-slate-950 rounded-lg p-4 relative border border-slate-200 dark:border-slate-800 group w-full max-w-sm">
                  <p className="text-xs text-slate-400 text-center mb-8">
                    Scroll down...
                  </p>
                  <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded opacity-50"></div>
                  <button
                    className="absolute bottom-4 right-4 bg-blue-600 text-white w-8 h-8 rounded-full shadow-lg flex items-center justify-center text-xs hover:bg-blue-700 transition-colors opacity-0 group-hover:opacity-100"
                    onClick={(e) =>
                      e.currentTarget.parentElement?.scrollTo({ top: 0 })
                    }
                  >
                    ↑
                  </button>
                </div>
              ),
            },
            {
              title: "Instant Data Feed",
              description:
                "Using `scroll-auto` for chat feeds where new messages should appear instantly without animation lag.",
              code: `<div class="scroll-auto h-64 overflow-y-auto flex flex-col-reverse p-4 bg-slate-900">
  <div class="message">User: Hello!</div>
</div>`,
              preview: (
                <div className="scroll-auto h-40 overflow-y-auto bg-slate-900 rounded-lg p-4 border border-slate-800 flex flex-col gap-2 w-full max-w-sm">
                  <div className="bg-slate-800 p-2 rounded text-xs text-slate-300 self-start">
                    Message 1
                  </div>
                  <div className="bg-slate-800 p-2 rounded text-xs text-slate-300 self-start">
                    Message 2
                  </div>
                  <div className="bg-blue-600 p-2 rounded text-xs text-white self-end">
                    New message! (Instant)
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Confusing it with manual scrolling",
              reason:
                "`scroll-behavior` does NOT change the physics or speed of the user swiping or using the mouse wheel. It only affects programmatic jumps (links/JS).",
              example: `<div class="scroll-smooth"> </div>`,
              level: "info",
            },
            {
              title: "Not setting it on the scroll container",
              reason:
                "It must be applied to the element that actually has the scrollbar (often `html`, `body`, or a `div` with `overflow-y-auto`).",
              example: `<body><div class="scroll-smooth">...</div></body> `,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Global Smooth Scroll:",
              text: "Add `scroll-smooth` to the `html` tag in your root layout to enable smooth scrolling for all anchor links site-wide.",
            },
            {
              bold: "Accessibility:",
              text: "Tailwind's `scroll-smooth` typically respects `prefers-reduced-motion` in modern browsers, but explicitly wrapping it in `motion-safe:scroll-smooth` is safer.",
            },
            {
              bold: "JS Override:",
              text: "You can override CSS behavior in JS: `element.scrollIntoView({ behavior: 'auto' })` forces an instant jump even if CSS is set to smooth.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["interactivity", "scroll-margin"],
    title: "Scroll Margin",
    description:
      "Control the offset applied when elements are scrolled into view. Essential for fixed headers and anchor navigation to prevent content from being hidden.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Scroll Margin",
          description:
            "Control the offset applied when elements are scrolled into view. Essential for fixed headers and anchor navigation to prevent content from being hidden.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Scroll Margin",
          description:
            "Scroll margin acts like an invisible buffer around an element that is only relevant during scroll operations (like clicking an anchor link).  It effectively 'pushes' the scroll position away from the element without affecting the layout flow.",
          features: [
            "Does NOT affect visual layout (like regular margin)",
            "Only active during scrollIntoView or anchor navigation",
            "Crucial for fixing 'hidden under header' bugs",
            "Works on the scroll TARGET, not the container",
            "Can be set per side (top, bottom, left, right)",
          ],
          layerAssignment:
            "Interactivity Layer - Modifies the final scroll destination calculation",
          browserBehavior:
            "When scrolling to an element, the browser subtracts the scroll-margin from the element's position to determine where to stop.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Scroll Margin vs Regular Margin",
          columns: ["Feature", "scroll-m-*", "m-*"],
          rows: [
            {
              feature: "Visual Spacing",
              values: ["None (invisible)", "Visible layout space"],
            },
            {
              feature: "Effect Trigger",
              values: ["Scrolling to element", "Always active"],
            },
            {
              feature: "Primary Use Case",
              values: ["Sticky header offset", "Element separation"],
            },
            {
              feature: "Impact on Neighbors",
              values: ["None", "Pushes neighbors away"],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Scroll Margin Utilities",
          items: [
            { cls: "scroll-m-0", desc: "No scroll margin" },
            { cls: "scroll-m-4", desc: "Scroll margin on all sides" },
            { cls: "scroll-mx-4", desc: "Horizontal scroll margin" },
            { cls: "scroll-my-4", desc: "Vertical scroll margin" },
            {
              cls: "scroll-mt-10",
              desc: "Scroll margin top (common for headers)",
            },
            { cls: "scroll-mb-10", desc: "Scroll margin bottom" },
            { cls: "scroll-ml-4", desc: "Scroll margin left" },
            { cls: "scroll-mr-4", desc: "Scroll margin right" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Scroll Margin Playground",
          description:
            "Adjust the top scroll margin to see how it affects where the scroll stops relative to the sticky header. Click 'Jump' to test.",
          options: [
            "scroll-mt-0",
            "scroll-mt-12",
            "scroll-mt-24",
            "scroll-mt-32",
          ],
          defaultValue: "scroll-mt-0",
          buildMarkup: (marginClass: string) => {
            return `<div class="h-64 overflow-y-auto border rounded relative">
  <div class="sticky top-0 bg-blue-600 text-white p-2 z-10 h-12 flex items-center">
    Fixed Header (h-12)
  </div>
  
  <div class="p-4 space-y-32">
    <a href="#target" class="text-blue-500 underline block">Jump to Target</a>
    
    <div id="target" class="${marginClass} bg-green-100 p-4 rounded border border-green-500">
      Target Element
    </div>
    
    <div class="h-64"></div>
  </div>
</div>`;
          },
          renderPreview: (marginClass: string) => {
            return (
              <div className="h-64 overflow-y-auto border border-slate-200 dark:border-slate-700 rounded-lg relative bg-slate-50 dark:bg-slate-900 w-full max-w-sm">
                <div className="sticky top-0 left-0 right-0 bg-blue-600/90 backdrop-blur text-white p-3 z-10 h-12 flex items-center justify-between shadow-md">
                  <span className="text-xs font-bold">Fixed Header (48px)</span>
                  <button
                    onClick={(e) => {
                      const container =
                        e.currentTarget.closest(".overflow-y-auto");
                      const target =
                        container?.querySelector("#playground-target");
                      if (target) {
                        target.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    className="text-[10px] bg-white text-blue-600 px-2 py-1 rounded font-bold"
                  >
                    Jump ↓
                  </button>
                </div>

                <div className="p-6 space-y-32">
                  <p className="text-sm text-slate-500 text-center">
                    Scroll down or click Jump...
                  </p>

                  <div
                    id="playground-target"
                    className={`bg-green-100 dark:bg-green-900/30 border border-green-500 text-green-700 dark:text-green-300 p-4 rounded-lg font-bold text-center ${marginClass}`}
                  >
                    Target Element
                    <div className="text-[10px] font-normal opacity-75 mt-1">
                      {marginClass}
                    </div>
                  </div>

                  <div className="h-64"></div>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Hidden Heading",
          description:
            "When you click 'Go to Section', the target heading scrolls directly to the top of the container, getting completely hidden behind the sticky header. Add `scroll-mt-14` (56px) to the target to give it enough breathing room.",
          codeSnippet: `<div class="h-80 overflow-y-auto relative bg-white border rounded-xl">
  <header class="sticky top-0 h-14 bg-indigo-600 text-white flex items-center px-4 shadow-lg z-10 justify-between">
    <span class="font-bold">My Site</span>
    <a href="#target" class="text-xs bg-white/20 px-2 py-1 rounded">Go to Section</a>
  </header>

  <div class="p-6 space-y-8">
    <p class="text-slate-400">Scroll down...</p>
    <div class="h-64 bg-slate-50 rounded"></div>
    
    <h2 
      id="target" 
      class="{input} text-2xl font-bold text-indigo-600 border-b-2 border-indigo-100 pb-2"
    >
      Important Section
    </h2>
    <p>This content should be visible below the header, not behind it.</p>
    
    <div class="h-64"></div>
  </div>
</div>`,
          options: ["scroll-mt-0", "scroll-mt-4", "scroll-mt-14", "mt-14"],
          correctOption: "scroll-mt-14",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
              <div className="w-full max-w-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 flex flex-col h-80 relative group">
                <div className="sticky top-0 h-14 bg-indigo-600 text-white flex items-center px-4 shadow-lg z-20 justify-between shrink-0">
                  <span className="font-bold text-sm">My Site</span>
                  <button
                    onClick={(e) => {
                      const card = e.currentTarget.closest(".group");
                      const scrollContainer =
                        card?.querySelector(".overflow-y-auto");
                      const target =
                        scrollContainer?.querySelector("#challenge-target");
                      if (target && scrollContainer) {
                        target.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    className="text-xs bg-white/20 hover:bg-white/30 transition-colors px-2 py-1 rounded font-medium"
                  >
                    Go to Section ↓
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 scroll-smooth relative">
                  <p className="text-slate-400 text-sm mb-8 text-center">
                    Scroll down...
                  </p>
                  <div className="h-64 bg-slate-100 dark:bg-slate-800 rounded mb-12"></div>

                  <div
                    id="challenge-target"
                    className={`border-b-2 border-indigo-100 dark:border-indigo-900 pb-2 mb-4 ${userClass}`}
                  >
                    <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                      Important Section
                    </h2>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    If the scroll margin is correct, this title is perfectly
                    positioned below the header. If not, it's hiding!
                  </p>

                  <div className="h-64"></div>
                </div>

                {/* Visualizer showing the invisible buffer */}
                {userClass === "scroll-mt-14" && (
                  <div className="absolute top-14 left-0 right-0 h-14 bg-green-500/10 border-b border-green-500/30 pointer-events-none flex items-end justify-center pb-1 z-30 animate-in fade-in">
                    <span className="text-[10px] text-green-600 font-mono bg-green-100 px-1 rounded">
                      56px Buffer
                    </span>
                  </div>
                )}
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Documentation anchors",
              description:
                "Prevents headings from hiding under fixed headers in long documents.",
              code: `<h2 id="api" class="scroll-mt-24 text-lg font-semibold">
  API Reference
</h2>`,
              preview: (
                <div className="h-40 overflow-y-auto rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 relative w-full max-w-sm">
                  <div className="sticky top-0 h-12 bg-white/95 dark:bg-slate-900/95 border-b flex items-center px-4 text-xs font-bold z-10 text-slate-500">
                    Fixed Navbar (h-12)
                  </div>
                  <div className="p-4 space-y-12">
                    <div className="h-12"></div>
                    <div id="ex1-target" className="scroll-mt-16">
                      <h3 className="font-bold text-slate-800 dark:text-slate-200">
                        API Reference
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        This header clears the navbar.
                      </p>
                    </div>
                    <div className="h-32"></div>
                  </div>
                  <button
                    className="absolute bottom-2 right-2 bg-slate-100 dark:bg-slate-800 text-xs px-2 py-1 rounded shadow"
                    onClick={(e) => {
                      e.currentTarget.parentElement
                        ?.querySelector("#ex1-target")
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                  >
                    Test Scroll
                  </button>
                </div>
              ),
            },
            {
              title: "Horizontal scroll snapping",
              description:
                "Ensures horizontally scrolled items don't stick to the very edge of the screen.",
              code: `<div class="flex overflow-x-auto snap-x">
  <div class="scroll-ml-6 snap-start ...">Item 1</div>
  <div class="scroll-ml-6 snap-start ...">Item 2</div>
</div>`,
              preview: (
                <div className="flex overflow-x-auto snap-x gap-4 p-4 bg-slate-50 dark:bg-slate-950 rounded-lg pb-6 w-full max-w-sm">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="scroll-ml-6 snap-start shrink-0 w-32 h-20 bg-white dark:bg-slate-800 rounded shadow-sm flex items-center justify-center border border-slate-200 dark:border-slate-700 text-sm font-medium"
                    >
                      Item {i}
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: "Focus management",
              description:
                "When programmatically focusing an input, ensure it doesn't get obscured by UI elements like sticky banners.",
              code: `<input 
  type="text" 
  class="scroll-mt-4 scroll-mb-20" 
  onfocus="this.scrollIntoView()" 
/>`,
              preview: (
                <div className="h-32 overflow-y-auto rounded-lg border bg-white dark:bg-slate-900 p-4 relative w-full max-w-sm">
                  <div className="h-32"></div>
                  <input
                    type="text"
                    placeholder="Focus me..."
                    className="scroll-mb-12 w-full border rounded px-2 py-1 text-sm mb-4 bg-transparent"
                    onFocus={(e) =>
                      e.target.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                      })
                    }
                  />
                  <div className="h-32"></div>
                  <div className="sticky bottom-0 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs p-2 text-center">
                    Fixed Bottom Banner
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Confusing it with layout margin",
              reason:
                "`scroll-margin` is invisible and DOES NOT affect the layout flow or spacing between elements. It only applies to the scroll snap area/calculation.",
              example: `<div class="scroll-mt-10">...</div>`,
              level: "info",
            },
            {
              title: "Applying to the container instead of the target",
              reason:
                "Scroll margin must be applied to the child element you are scrolling TO, not the parent container doing the scrolling.",
              example: `<div class="scroll-mt-10 overflow-auto"> <div id="target">...</div> </div>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Header Height:",
              text: "A good rule of thumb is to set `scroll-mt` equal to your fixed header's height plus a little extra breathing room (e.g., header 4rem + 1rem = scroll-mt-20).",
            },
            {
              bold: "Horizontal Lists:",
              text: "Use `scroll-mx` or `scroll-ml` for horizontal carousels to prevent items from sticking to the absolute edge of the viewport.",
            },
            {
              bold: "Focus behavior:",
              text: "Browsers often automatically scroll focused inputs into view. `scroll-margin` helps ensure they aren't hidden behind sticky footers or headers when this happens.",
            },
            {
              bold: "Scroll Padding:",
              text: "Alternatively, you can use `scroll-padding` on the parent container, which applies to all children globally.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["interactivity", "scroll-padding"],
    title: "Scroll Padding",
    description:
      "Control the internal offset of a scroll container when content scrolls into view or snaps. Essential for preventing content from hiding behind sticky headers.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Scroll Padding",
          description:
            "Control the internal offset of a scroll container when content scrolls into view or snaps. Essential for preventing content from hiding behind sticky headers.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Scroll Padding",
          description:
            "Scroll padding is like 'internal breathing room' for a scroll container. Unlike regular padding, it doesn't affect the layout of static content.  It specifically tells the browser: 'When you scroll something into view inside me, stop this far away from the edge'.",
          features: [
            "Applied to the SCROLL CONTAINER (parent), not the children",
            "Crucial for containers with sticky headers/footers",
            "Works perfectly with CSS Scroll Snap",
            "Invisible during normal layout flow",
            "Sets the 'safe area' for scrollIntoView() calls",
          ],
          layerAssignment:
            "Interactivity Layer - Defines safe zones within a scrollport",
          browserBehavior:
            "The browser effectively shrinks the 'snapping area' or 'viewing area' by the padding amount.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Scroll Padding vs Scroll Margin",
          columns: ["Feature", "scroll-p-* (Padding)", "scroll-m-* (Margin)"],
          rows: [
            {
              feature: "Applied To",
              values: ["Parent Container", "Child Target Element"],
            },
            {
              feature: "Scope",
              values: [
                "Global (affects all children)",
                "Local (affects specific child)",
              ],
            },
            {
              feature: "Best Use Case",
              values: [
                "Sticky headers, Snap containers",
                "Individual section offsets",
              ],
            },
            {
              feature: "Maintenance",
              values: ["Easier (one place)", "Harder (many places)"],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Scroll Padding Utilities",
          items: [
            { cls: "scroll-p-0", desc: "No scroll padding" },
            { cls: "scroll-p-4", desc: "Scroll padding on all sides" },
            { cls: "scroll-px-4", desc: "Horizontal scroll padding" },
            { cls: "scroll-py-4", desc: "Vertical scroll padding" },
            { cls: "scroll-pt-10", desc: "Scroll padding top" },
            { cls: "scroll-pb-10", desc: "Scroll padding bottom" },
            { cls: "scroll-pl-4", desc: "Scroll padding left" },
            { cls: "scroll-pr-4", desc: "Scroll padding right" },
            { cls: "scroll-ps-4", desc: "Scroll padding inline start" },
            { cls: "scroll-pe-4", desc: "Scroll padding inline end" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Scroll Padding Playground",
          description:
            "See how scroll padding pushes content away from the container edges during scroll operations (simulated with scroll snap).",
          options: [
            "scroll-pt-0",
            "scroll-pt-24",
            "scroll-pt-12",
            "scroll-pl-12",
          ],
          defaultValue: "scroll-pt-0",
          buildMarkup: (paddingClass: string) => {
            return `<div class="${paddingClass} h-64 overflow-y-auto border rounded relative snap-y snap-mandatory">
  <div class="sticky top-0 bg-blue-600/90 text-white p-2 z-10 h-12">
    Sticky Header (h-12)
  </div>
  
  <div class="space-y-8 p-4">
    <div class="h-32 bg-slate-100 rounded snap-start">Item 1</div>
    <div class="h-32 bg-slate-100 rounded snap-start">Item 2</div>
    <div class="h-32 bg-slate-100 rounded snap-start">Item 3</div>
  </div>
</div>`;
          },
          renderPreview: (paddingClass: string) => {
            return (
              <div
                className={`
                h-64 overflow-y-auto border border-slate-200 dark:border-slate-700 rounded-lg relative bg-slate-50 dark:bg-slate-900 snap-y snap-mandatory scroll-smooth w-full max-w-sm
                ${paddingClass}
              `}
              >
                <div className="sticky top-0 left-0 right-0 bg-blue-600/90 backdrop-blur text-white p-3 z-10 h-12 flex items-center justify-between shadow-md">
                  <span className="text-xs font-bold">
                    Sticky Header (48px)
                  </span>
                </div>

                <div className="p-4 space-y-16">
                  <div className="h-12"></div>
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-32 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center snap-start font-bold text-slate-500"
                    >
                      Item {i}
                    </div>
                  ))}
                  <div className="h-32"></div>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Cramped Carousel",
          description:
            "This horizontal image gallery uses scroll snapping. Currently, when an image snaps into view, it sticks exactly to the left edge (`scroll-pl-0`), looking cramped. Add `scroll-pl-6` to the container to give the active image some breathing room from the edge.",
          codeSnippet: `<div class="{input} flex overflow-x-auto snap-x snap-mandatory gap-4 py-8 bg-slate-900 rounded-xl">
  
  <div class="snap-start shrink-0 w-48 h-64 bg-indigo-500 rounded-lg shadow-lg ml-6">
    <img src="/img1.jpg" class="w-full h-full object-cover rounded-lg" />
  </div>

  <div class="snap-start shrink-0 w-48 h-64 bg-purple-500 rounded-lg shadow-lg">
    <img src="/img2.jpg" class="w-full h-full object-cover rounded-lg" />
  </div>

</div>`,
          options: ["scroll-pl-0", "scroll-pl-6", "pl-6", "ml-6"],
          correctOption: "scroll-pl-6",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
              <div className="w-full max-w-md relative">
                {/* The Carousel */}
                <div
                  className={`
                  flex overflow-x-auto snap-x snap-mandatory gap-4 py-8 bg-slate-900 rounded-xl shadow-2xl no-scrollbar
                  ${userClass}
                `}
                >
                  {/* Spacer to simulate first-child margin if needed */}
                  <div className="w-2 shrink-0"></div>

                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`
                      snap-start shrink-0 w-40 h-56 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-2xl
                      ${
                        i === 1
                          ? "bg-indigo-500"
                          : i === 2
                          ? "bg-purple-500"
                          : i === 3
                          ? "bg-pink-500"
                          : "bg-orange-500"
                      }
                    `}
                    >
                      {i}
                    </div>
                  ))}
                  <div className="w-6 shrink-0"></div>
                </div>

                {/* Visualizer for the "Safe Zone" */}
                {userClass === "scroll-pl-6" && (
                  <div className="absolute top-8 bottom-8 left-0 w-6 bg-green-500/20 border-r-2 border-green-500 pointer-events-none z-20 flex items-center justify-center animate-in fade-in">
                    <div className="text-[10px] text-green-400 -rotate-90 whitespace-nowrap font-bold">
                      Padding
                    </div>
                  </div>
                )}

                {/* Helper Hint */}
                <div className="text-center mt-4 text-xs text-slate-400">
                  Try scrolling horizontally!
                </div>
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Sticky header containers",
              description:
                "Keeps scrollable content readable under pinned headers by setting a top scroll offset on the container.",
              code: `<div class="scroll-pt-16 h-48 overflow-y-auto rounded-xl border bg-white relative">
  <div class="sticky top-0 bg-slate-900 text-white p-3 font-bold h-12 shadow-md">
    Sticky Header
  </div>
  <div class="p-4 space-y-8">
    <div class="snap-start scroll-mt-4">Item 1</div>
    <div class="snap-start scroll-mt-4">Item 2</div>
  </div>
</div>`,
              preview: (
                <div className="scroll-pt-16 h-48 overflow-y-auto rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 relative snap-y w-full max-w-sm">
                  <div className="sticky top-0 bg-slate-900 text-white p-3 font-bold h-12 shadow-md flex items-center text-sm z-10">
                    Sticky Header (h-12)
                  </div>
                  <div className="p-4 space-y-32">
                    <div className="h-8"></div>
                    <div className="snap-start bg-slate-100 dark:bg-slate-800 p-4 rounded border border-slate-300 dark:border-slate-600">
                      <p className="font-bold text-sm">Snap Target</p>
                      <p className="text-xs text-slate-500">
                        I stop below the header!
                      </p>
                    </div>
                    <div className="h-32"></div>
                  </div>
                </div>
              ),
            },
            {
              title: "Scrollable data panels",
              description:
                "Adds breathing room for dense dashboards or filter lists when items are scrolled into view.",
              code: `<div class="scroll-pt-10 h-40 overflow-y-auto border p-2">
  <div class="sticky top-0 bg-gray-100 p-1 mb-2">Filters</div>
</div>`,
              preview: (
                <div className="scroll-pt-12 h-40 overflow-y-auto rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-2 relative w-full max-w-sm">
                  <div className="sticky top-0 bg-slate-200 dark:bg-slate-800 p-2 rounded text-xs font-bold mb-4 z-10 text-slate-700 dark:text-slate-300">
                    Filters
                  </div>
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="mb-2 p-2 bg-white dark:bg-slate-800 rounded shadow-sm text-xs text-slate-600 dark:text-slate-400"
                    >
                      Filter Option {i}
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: "Carousel & snap scrolling",
              description:
                "Maintains consistent spacing when snapping items in a horizontal list.",
              code: `<div class="scroll-pl-6 overflow-x-auto snap-x rounded-xl bg-slate-900 p-4 flex gap-4">
  <div class="snap-start w-32 h-20 bg-blue-500 rounded"></div>
  <div class="snap-start w-32 h-20 bg-green-500 rounded"></div>
</div>`,
              preview: (
                <div className="scroll-pl-6 overflow-x-auto snap-x rounded-lg bg-slate-900 p-4 flex gap-4 no-scrollbar w-full max-w-sm">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="snap-start shrink-0 w-32 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded border border-slate-600 flex items-center justify-center text-slate-400 text-xs font-mono"
                    >
                      Slide {i}
                    </div>
                  ))}
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Confusing it with layout padding",
              reason:
                "`scroll-padding` DOES NOT add visual space around content during normal rendering. It only affects the scroll offset calculation.",
              example: `<div class="scroll-p-10">Content</div> `,
              level: "info",
            },
            {
              title: "Applying to the child instead of container",
              reason:
                "Scroll padding must be applied to the scroll container (the element with `overflow: auto`), not the items inside it.",
              example: `<div class="overflow-auto"><div class="scroll-pt-10">...</div></div>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Container Scope:",
              text: "Scroll padding applies to the scroll container itself and affects ALL children within it.",
            },
            {
              bold: "Sticky Headers:",
              text: "Use `scroll-pt-*` equal to the height of your sticky header so anchor links don't scroll content underneath it.",
            },
            {
              bold: "Scroll Snap:",
              text: "Essential for CSS Scroll Snap to prevent items from snapping directly to the edge of the viewport.",
            },
            {
              bold: "Not Layout:",
              text: "If you need visual spacing that is always visible, use regular `padding` (`p-*`). Use `scroll-padding` specifically for scroll alignment.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["interactivity", "scroll-snap-align"],
    title: "Scroll Snap Align",
    description:
      "Control how individual elements align within a scroll snap container. Essential for creating polished carousels, lists, and full-page slides.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Scroll Snap Align",
          description:
            "Control how individual elements align within a scroll snap container. Essential for creating polished carousels, lists, and full-page slides.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Snap Alignment",
          description:
            "Scroll snap alignment works like a magnet. When you stop scrolling a container (that has `snap-type` set), the browser calculates which child element is closest to the 'snap point' and pulls it into place.  This utility defines exactly which part of the CHILD element should lock onto the container.",
          features: [
            "Applied to the CHILD items, not the container",
            "Works only if the parent has `snap-x` or `snap-y`",
            "snap-start: Aligns the item's start edge with the container's start edge",
            "snap-center: Aligns the item's center with the container's center",
            "snap-end: Aligns the item's end edge with the container's end edge",
          ],
          layerAssignment:
            "Interactivity Layer - Defines magnetic anchor points for scroll physics",
          browserBehavior:
            "Browser monitors scroll velocity and position. On scroll end, it animates to the nearest valid snap point defined by these classes.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Alignment Strategies",
          columns: ["Class", "Alignment Logic", "Best Use Case"],
          rows: [
            {
              feature: "snap-start",
              values: [
                "Top/Left edge matches container",
                "Vertical lists, Text blocks",
              ],
            },
            {
              feature: "snap-center",
              values: [
                "Center matches container",
                "Photo galleries, Carousels, 3D cards",
              ],
            },
            {
              feature: "snap-end",
              values: [
                "Bottom/Right edge matches container",
                "Chat logs, Right-aligned flows",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Scroll Snap Align Utilities",
          items: [
            {
              cls: "snap-start",
              desc: "Snap item to the start of the container",
            },
            {
              cls: "snap-center",
              desc: "Snap item to the center of the container",
            },
            { cls: "snap-end", desc: "Snap item to the end of the container" },
            { cls: "snap-align-none", desc: "Disable snapping for this item" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Snap Align Playground",
          description:
            "Scroll horizontally to feel how the items lock into place based on the alignment class.",
          options: ["snap-start", "snap-center", "snap-end", "snap-align-none"],
          defaultValue: "snap-center",
          buildMarkup: (alignClass: string) => {
            return `<div class="snap-x snap-mandatory overflow-x-auto flex gap-6 p-8 border rounded-xl bg-slate-900">
  <div class="${alignClass} shrink-0 w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white">1</div>
  <div class="${alignClass} shrink-0 w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white">2</div>
  <div class="${alignClass} shrink-0 w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white">3</div>
  <div class="${alignClass} shrink-0 w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white">4</div>
</div>`;
          },
          renderPreview: (alignClass: string) => {
            return (
              <div className="w-full max-w-md snap-x snap-mandatory overflow-x-auto flex gap-6 p-8 border border-slate-700 rounded-xl bg-slate-900 shadow-inner no-scrollbar">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`${alignClass} shrink-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-2xl border border-white/10`}
                  >
                    {i}
                  </div>
                ))}
                <div className="shrink-0 w-24"></div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Drifting Contact List",
          description:
            "This contact picker is annoying to use. When you scroll, it stops randomly between names, cutting them off. Apply `snap-start` to the list items so they snap perfectly to the top of the container.",
          codeSnippet: `<div class="w-64 h-48 border rounded-xl overflow-hidden bg-white shadow-lg">
  <div class="bg-gray-100 p-2 text-xs font-bold uppercase text-gray-500 border-b">Contacts</div>
  
  <div class="h-full overflow-y-auto snap-y snap-mandatory pb-8">
    
    <div class="{input} h-12 flex items-center gap-3 px-4 border-b hover:bg-gray-50">
      <div class="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">JD</div>
      <span class="text-sm font-medium">John Doe</span>
    </div>

    <div class="{input} h-12 flex items-center gap-3 px-4 border-b hover:bg-gray-50">
      <div class="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xs font-bold">JS</div>
      <span class="text-sm font-medium">Jane Smith</span>
    </div>

    </div>
</div>`,
          options: [
            "snap-align-none",
            "snap-center",
            "scroll-smooth",
            "snap-start",
          ],
          correctOption: "snap-start",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
              <div className="w-64 h-56 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-xl flex flex-col">
                <div className="bg-slate-50 dark:bg-slate-800 p-3 text-xs font-bold uppercase text-slate-400 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <span>Contacts</span>
                  <span className="text-[10px] bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded">
                    Scroll me
                  </span>
                </div>

                <div className="flex-1 overflow-y-auto snap-y snap-mandatory pb-12 relative no-scrollbar">
                  {/* Items */}
                  {[
                    {
                      name: "Alice Adams",
                      initial: "AA",
                      color: "bg-blue-100 text-blue-600",
                    },
                    {
                      name: "Bob Brown",
                      initial: "BB",
                      color: "bg-green-100 text-green-600",
                    },
                    {
                      name: "Charlie Cox",
                      initial: "CC",
                      color: "bg-purple-100 text-purple-600",
                    },
                    {
                      name: "Daisy Duck",
                      initial: "DD",
                      color: "bg-pink-100 text-pink-600",
                    },
                    {
                      name: "Evan Evans",
                      initial: "EE",
                      color: "bg-orange-100 text-orange-600",
                    },
                    {
                      name: "Frank Fox",
                      initial: "FF",
                      color: "bg-red-100 text-red-600",
                    },
                  ].map((person, i) => (
                    <div
                      key={i}
                      className={`
                      h-14 flex items-center gap-3 px-4 border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors
                      ${userClass}
                    `}
                    >
                      <div
                        className={`w-8 h-8 rounded-full ${person.color} flex items-center justify-center text-xs font-bold shrink-0`}
                      >
                        {person.initial}
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        {person.name}
                      </span>
                    </div>
                  ))}

                  {/* Visualizer for snap point */}
                  {userClass === "snap-start" && (
                    <div className="absolute top-0 left-0 right-0 h-14 pointer-events-none border-2 border-green-500/30 bg-green-500/5 z-10 animate-pulse flex items-center justify-end pr-2">
                      <span className="text-[10px] text-green-600 font-bold bg-green-100 px-1 rounded">
                        Snapped
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Image carousel",
              description:
                "Uses 'snap-center' to ensure the active image is perfectly centered in the viewport.",
              code: `<div class="snap-x snap-mandatory overflow-x-auto flex gap-4 p-4">
  <div class="snap-center shrink-0 w-64 h-36 bg-slate-700 rounded-lg"></div>
  <div class="snap-center shrink-0 w-64 h-36 bg-slate-600 rounded-lg"></div>
  <div class="snap-center shrink-0 w-64 h-36 bg-slate-500 rounded-lg"></div>
</div>`,
              preview: (
                <div className="snap-x snap-mandatory overflow-x-auto flex gap-4 p-4 bg-slate-900 rounded-lg no-scrollbar w-full max-w-sm">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="snap-center shrink-0 w-48 h-32 bg-slate-700 rounded-lg flex items-center justify-center text-slate-500 shadow-md border border-slate-600"
                    >
                      Slide {i}
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: "Horizontal timeline",
              description:
                "Uses 'snap-start' to align timeline steps to the left edge.",
              code: `<div class="snap-x snap-proximity overflow-x-auto flex gap-8 p-4">
  <div class="snap-start w-32 h-16 bg-blue-600 rounded flex items-center justify-center text-white">Step 1</div>
  <div class="snap-start w-32 h-16 bg-blue-700 rounded flex items-center justify-center text-white">Step 2</div>
</div>`,
              preview: (
                <div className="snap-x snap-proximity overflow-x-auto flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 no-scrollbar w-full max-w-sm">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="snap-start shrink-0 w-24 h-16 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold shadow-sm"
                    >
                      Step {i}
                    </div>
                  ))}
                  <div className="w-12 shrink-0"></div>
                </div>
              ),
            },
            {
              title: "Product cards row",
              description:
                "Snap-start ensures the first product is fully visible when scrolling stops.",
              code: `<div class="snap-x snap-mandatory overflow-x-auto flex gap-4 p-4">
  <div class="snap-start w-40 h-48 bg-white border rounded-lg shadow-sm">
    Product A
  </div>
</div>`,
              preview: (
                <div className="snap-x snap-mandatory overflow-x-auto flex gap-4 p-4 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 w-full max-w-sm">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="snap-start shrink-0 w-32 h-40 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm flex items-center justify-center text-xs font-medium text-slate-500"
                    >
                      Product {i}
                    </div>
                  ))}
                  <div className="w-8 shrink-0"></div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Forgetting the parent utility",
              reason:
                "`snap-start/center/end` on children does nothing unless the parent container has `snap-x` or `snap-y` AND `snap-mandatory` (or proximity).",
              example: `<div class="overflow-auto"><div class="snap-center">...</div></div>`,
              level: "critical",
            },
            {
              title: "Mixing alignment axes",
              reason:
                "Using `snap-center` on a vertical list (`snap-y`) often cuts off the top and bottom of the item if the item is taller than the viewport.",
              example: `<div class="snap-y ..."><div class="snap-center h-screen">...</div></div>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Center vs Start:",
              text: "Use `snap-center` when items are smaller than the viewport (like a carousel). Use `snap-start` when items take up most of the screen.",
            },
            {
              bold: "Scroll Padding:",
              text: "Combine with `scroll-pl-*` (or `scroll-pt-*`) on the parent container to add an offset to the snap point, preventing items from sticking to the absolute edge.",
            },
            {
              bold: "Mandatory vs Proximity:",
              text: "Use `snap-mandatory` for carousels (always snap). Use `snap-proximity` for document flows (only snap if close).",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["interactivity", "scroll-snap-stop"],
    title: "Scroll Snap Stop",
    description:
      "Control whether scrolling must stop at each snap point or can skip past items when scrolling quickly. Critical for ensuring users see every item in a list.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Scroll Snap Stop",
          description:
            "Control whether scrolling must stop at each snap point or can skip past items when scrolling quickly. Critical for ensuring users see every item in a list.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Snap Stop",
          description:
            "When a user swipes forcefully on a touch screen or scroll wheel, the natural momentum might carry them past several items. `snap-stop` controls this physics engine.  It decides if the momentum should be 'arrested' at the very next snap point, or if it can fly past multiple points.",
          features: [
            "Applied to the CHILD items, not the container",
            "Works with `snap-x` or `snap-y` containers",
            "snap-normal: Default physics (can skip items)",
            "snap-always: 'Hard brake' physics (stops at every item)",
            "Essential for paginated content like slides or onboarding",
          ],
          layerAssignment:
            "Interactivity Layer - Modifies scroll momentum physics",
          browserBehavior:
            "If 'always', the browser interrupts the scroll inertia to force a stop at the first encountered snap point.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Normal vs Always",
          columns: ["Class", "Scroll Behavior", "Best Use Case"],
          rows: [
            {
              feature: "snap-normal",
              values: [
                "Fluid, can skip items",
                "Long lists, Photo galleries, Timelines",
              ],
            },
            {
              feature: "snap-always",
              values: [
                "Strict, stops at every item",
                "Presentations, Onboarding, Full-screen sections",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Scroll Snap Stop Utilities",
          items: [
            {
              cls: "snap-normal",
              desc: "Allows scrolling to skip snap points when scrolling fast (default)",
            },
            {
              cls: "snap-always",
              desc: "Forces the scroll to stop at every snap point",
            },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Snap Stop Playground",
          description:
            "Switch between normal and forced stopping behavior. Swipe fast (on touch) or scroll quickly to feel the difference.",
          options: ["snap-normal", "snap-always"],
          defaultValue: "snap-normal",
          buildMarkup: (stopClass: string) => {
            return `<div class="snap-x snap-mandatory overflow-x-auto flex gap-4 p-4 border rounded-xl bg-slate-900">
  <div class="${stopClass} snap-center shrink-0 w-48 h-32 bg-indigo-500 rounded-lg flex items-center justify-center text-white">Item 1</div>
  <div class="${stopClass} snap-center shrink-0 w-48 h-32 bg-indigo-600 rounded-lg flex items-center justify-center text-white">Item 2</div>
  <div class="${stopClass} snap-center shrink-0 w-48 h-32 bg-indigo-700 rounded-lg flex items-center justify-center text-white">Item 3</div>
  <div class="${stopClass} snap-center shrink-0 w-48 h-32 bg-indigo-800 rounded-lg flex items-center justify-center text-white">Item 4</div>
</div>`;
          },
          renderPreview: (stopClass: string) => {
            return (
              <div className="w-full max-w-md snap-x snap-mandatory overflow-x-auto flex gap-4 p-4 border border-slate-700 rounded-xl bg-slate-900 shadow-inner no-scrollbar">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className={`${stopClass} snap-center shrink-0 w-48 h-32 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-2xl border border-white/10`}
                  >
                    {i}
                  </div>
                ))}
                <div className="shrink-0 w-24"></div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Skippable Intro",
          description:
            "This is an onboarding flow for a new app. Currently, users can swipe quickly and accidentally skip the middle slides (`snap-normal`), missing crucial instructions. Apply `snap-always` to the slides so the user is forced to see every single step.",
          codeSnippet: `<div class="w-64 h-80 border rounded-xl overflow-hidden bg-white shadow-2xl relative">
  <div class="flex overflow-x-auto snap-x snap-mandatory h-full w-full no-scrollbar">
    
    <div class="{input} snap-center shrink-0 w-full h-full bg-blue-500 text-white flex flex-col items-center justify-center p-6 text-center">
      <div class="text-4xl mb-4">👋</div>
      <h3 class="font-bold text-lg">Welcome!</h3>
      <p class="text-sm opacity-90">Swipe to begin.</p>
    </div>

    <div class="{input} snap-center shrink-0 w-full h-full bg-purple-500 text-white flex flex-col items-center justify-center p-6 text-center">
      <div class="text-4xl mb-4">🔒</div>
      <h3 class="font-bold text-lg">Secure</h3>
      <p class="text-sm opacity-90">Your data is safe.</p>
    </div>

    <div class="{input} snap-center shrink-0 w-full h-full bg-green-500 text-white flex flex-col items-center justify-center p-6 text-center">
      <div class="text-4xl mb-4">🚀</div>
      <h3 class="font-bold text-lg">Ready</h3>
      <p class="text-sm opacity-90">Let's go!</p>
    </div>

  </div>
</div>`,
          options: [
            "snap-normal",
            "snap-center",
            "snap-always",
            "scroll-smooth",
          ],
          correctOption: "snap-always",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
              <div className="w-64 h-80 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-2xl relative group">
                <div className="flex overflow-x-auto snap-x snap-mandatory h-full w-full no-scrollbar">
                  {/* Items */}
                  {[
                    {
                      icon: "👋",
                      title: "Welcome!",
                      text: "Swipe to begin.",
                      color: "bg-blue-500",
                    },
                    {
                      icon: "🔒",
                      title: "Secure",
                      text: "Your data is safe.",
                      color: "bg-purple-500",
                    },
                    {
                      icon: "🚀",
                      title: "Ready",
                      text: "Let's go!",
                      color: "bg-green-500",
                    },
                  ].map((slide, i) => (
                    <div
                      key={i}
                      className={`
                      snap-center shrink-0 w-full h-full ${slide.color} text-white flex flex-col items-center justify-center p-6 text-center
                      ${userClass}
                    `}
                    >
                      <div className="text-4xl mb-4 drop-shadow-md">
                        {slide.icon}
                      </div>
                      <h3 className="font-bold text-xl mb-2">{slide.title}</h3>
                      <p className="text-sm opacity-90">{slide.text}</p>
                      <div className="mt-8 text-[10px] opacity-50 font-mono">
                        Slide {i + 1}/3
                      </div>
                    </div>
                  ))}
                </div>

                {/* Visualizer */}
                {userClass === "snap-always" && (
                  <div className="absolute top-4 right-4 bg-black/30 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm border border-white/20 animate-in fade-in">
                    ⚠️ Stop Forced
                  </div>
                )}
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Product carousel (precise)",
              description:
                "Encourages users to view each product one at a time without skipping.",
              code: `<div class="snap-x snap-mandatory overflow-x-auto flex gap-4 p-4">
  <div class="snap-center snap-always w-64 h-40 bg-slate-800 rounded-lg">Product A</div>
  <div class="snap-center snap-always w-64 h-40 bg-slate-700 rounded-lg">Product B</div>
</div>`,
              preview: (
                <div className="snap-x snap-mandatory overflow-x-auto flex gap-4 p-4 bg-slate-900 rounded-lg no-scrollbar">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="snap-center snap-always shrink-0 w-48 h-32 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300 font-medium shadow-md border border-slate-600"
                    >
                      Product {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: "Media scrubber / timeline",
              description:
                "Allows users to jump quickly across long timelines by allowing skips (snap-normal).",
              code: `<div class="snap-x snap-proximity overflow-x-auto flex gap-4 p-4">
  <div class="snap-start snap-normal w-32 h-16 bg-green-600 rounded">00:10</div>
  <div class="snap-start snap-normal w-32 h-16 bg-green-700 rounded">01:20</div>
</div>`,
              preview: (
                <div className="snap-x snap-proximity overflow-x-auto flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 no-scrollbar">
                  {["00:10", "01:20", "02:45", "03:15"].map((time, i) => (
                    <div
                      key={i}
                      className="snap-start snap-normal shrink-0 w-24 h-16 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold shadow-sm"
                    >
                      {time}
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: "Onboarding steps",
              description:
                "Ensures users progress through steps in order without accidentally swiping past one.",
              code: `<div class="snap-x snap-mandatory overflow-x-auto flex gap-0 w-full">
  <div class="snap-center snap-always w-full h-48 bg-blue-600">Step 1</div>
  <div class="snap-center snap-always w-full h-48 bg-blue-700">Step 2</div>
</div>`,
              preview: (
                <div className="snap-x snap-mandatory overflow-x-auto flex gap-0 w-full max-w-xs mx-auto rounded-lg overflow-hidden no-scrollbar">
                  {["Step 1", "Step 2", "Step 3"].map((step, i) => (
                    <div
                      key={i}
                      className={`snap-center snap-always shrink-0 w-full h-32 flex items-center justify-center text-white font-bold ${
                        i === 0
                          ? "bg-blue-600"
                          : i === 1
                          ? "bg-blue-700"
                          : "bg-blue-800"
                      }`}
                    >
                      {step}
                    </div>
                  ))}
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Using on the container",
              reason:
                "`snap-stop` classes must be placed on the CHILD items, not the scroll container itself.",
              example: `<div class="snap-x snap-always"> </div>`,
              level: "critical",
            },
            {
              title: "Overusing snap-always",
              reason:
                "Forcing stops on long lists (like a photo gallery with 50 items) can feel frustrating and slow to navigate.",
              example: `<div class="snap-always"> </div>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Context is Key:",
              text: "Use `snap-always` for paginated content where each item represents a distinct 'state' or 'slide'. Use `snap-normal` for browsing lists.",
            },
            {
              bold: "Touch vs Mouse:",
              text: "This property is most noticeable on touch devices where momentum scrolling is common. It might feel less impactful on a mouse wheel.",
            },
            {
              bold: "Mandatory:",
              text: "Usually combined with `snap-mandatory` on the parent to ensure the scroll always lands on a snap point, never in between.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["interactivity", "scroll-snap-type"],
    title: "Scroll Snap Type",
    description:
      "Define the scroll snapping behavior of a container. Control the direction (axis) and strictness (mandatory vs proximity) of snapping physics.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Scroll Snap Type",
          description:
            "Define the scroll snapping behavior of a container. Control the direction (axis) and strictness (mandatory vs proximity) of snapping physics.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Scroll Snap Type",
          description:
            "Think of Scroll Snap Type as enabling 'magnetism' on a scroll container.  You define the direction of the magnetic field (x or y) and how strong the magnet is (mandatory or proximity). Without this property on the parent, any `snap-align` utilities on children are ignored.",
          features: [
            "Applied to the SCROLL CONTAINER (parent)",
            "Mandatory: Always rests on a snap point",
            "Proximity: Only snaps if scrolling stops close enough",
            "Essential for carousels, full-page slides, and lists",
            "Works natively in all modern browsers",
          ],
          layerAssignment:
            "Interactivity Layer - Activates and configures scroll physics engine",
          browserBehavior:
            "Tells the browser to monitor scroll position and velocity, and to animate to a specific point when the user stops interacting.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Mandatory vs Proximity",
          columns: ["Strictness", "Behavior", "Best Use Case"],
          rows: [
            {
              feature: "snap-mandatory",
              values: [
                "Strict (Always Snaps)",
                "Full-screen slides, Product carousels",
              ],
            },
            {
              feature: "snap-proximity",
              values: [
                "Loose (Conditional Snap)",
                "Long articles, Lists where free-scrolling is okay",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Scroll Snap Type Utilities",
          items: [
            { cls: "snap-none", desc: "Disable scroll snapping" },
            { cls: "snap-x", desc: "Enable horizontal snapping" },
            { cls: "snap-y", desc: "Enable vertical snapping" },
            { cls: "snap-both", desc: "Enable snapping on both axes" },
            { cls: "snap-mandatory", desc: "Force snapping to snap points" },
            { cls: "snap-proximity", desc: "Snap when close to a snap point" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Snap Type Playground",
          description:
            "Adjust the axis and strictness to feel the difference in scroll physics. Try scrolling gently vs quickly.",
          options: [
            "snap-x snap-mandatory",
            "snap-x snap-proximity",
            "snap-y snap-mandatory",
            "snap-none",
          ],
          defaultValue: "snap-x snap-mandatory",
          buildMarkup: (snapClass: string) => {
            const isY = snapClass.includes("snap-y");
            return `<div class="${snapClass} overflow-${
              isY ? "y" : "x"
            }-auto flex ${
              isY ? "flex-col h-64" : ""
            } gap-6 p-6 border rounded-xl">
  <div class="snap-center shrink-0 w-64 h-36 bg-blue-500 rounded-xl">1</div>
  <div class="snap-center shrink-0 w-64 h-36 bg-blue-600 rounded-xl">2</div>
  <div class="snap-center shrink-0 w-64 h-36 bg-blue-700 rounded-xl">3</div>
</div>`;
          },
          renderPreview: (snapClass: string) => {
            const isY = snapClass.includes("snap-y");
            return (
              <div
                className={`
                ${snapClass} overflow-auto flex ${
                  isY ? "flex-col h-64 w-full" : "flex-row w-full"
                } 
                gap-6 p-6 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900 shadow-inner no-scrollbar
              `}
              >
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="snap-center shrink-0 w-64 h-36 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center font-bold text-3xl shadow-md"
                  >
                    {i}
                  </div>
                ))}
                {/* Spacer for snap end */}
                <div className="shrink-0 w-1 h-1"></div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Loose Stories",
          description:
            "This story viewer scrolls freely, making it hard to land exactly on a story. It feels 'loose' and unpolished. Apply `snap-x snap-mandatory` to the container to enforce strict horizontal snapping, ensuring each story fills the view perfectly.",
          codeSnippet: `<div class="w-full max-w-sm aspect-[9/16] bg-black rounded-3xl overflow-hidden relative shadow-2xl border-4 border-slate-800">
  
  <div class="absolute top-4 left-0 right-0 px-6 flex justify-between text-white text-xs z-20 font-medium">
    <span>9:41</span>
    <span>5G</span>
  </div>

  <div class="{input} flex w-full h-full overflow-x-auto no-scrollbar">
    
    <div class="snap-center shrink-0 w-full h-full bg-indigo-600 flex items-center justify-center relative">
      <h2 class="text-white text-4xl font-bold tracking-tighter">STORY<br>ONE</h2>
    </div>

    <div class="snap-center shrink-0 w-full h-full bg-purple-600 flex items-center justify-center relative">
      <h2 class="text-white text-4xl font-bold tracking-tighter">STORY<br>TWO</h2>
    </div>

  </div>
</div>`,
          options: [
            "snap-none",
            "snap-y snap-mandatory",
            "overflow-hidden",
            "snap-x snap-mandatory",
          ],
          correctOption: "snap-x snap-mandatory",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
              <div className="w-64 aspect-[9/16] bg-black rounded-3xl overflow-hidden relative shadow-2xl border-[6px] border-slate-800 group">
                {/* Fake UI */}
                <div className="absolute top-3 left-0 right-0 px-5 flex justify-between text-white/80 text-[10px] z-20 font-medium tracking-wide">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                  </div>
                </div>

                {/* Scroll Container */}
                <div
                  className={`${userClass} flex w-full h-full overflow-x-auto no-scrollbar`}
                >
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`
                      snap-center shrink-0 w-full h-full flex flex-col items-center justify-center relative
                      ${
                        i === 1
                          ? "bg-gradient-to-b from-indigo-500 to-purple-600"
                          : i === 2
                          ? "bg-gradient-to-b from-purple-500 to-pink-600"
                          : "bg-gradient-to-b from-pink-500 to-orange-500"
                      }
                    `}
                    >
                      <h2 className="text-white text-4xl font-black tracking-tighter leading-none text-center drop-shadow-lg">
                        STORY
                        <br />
                        {i === 1 ? "ONE" : i === 2 ? "TWO" : "THREE"}
                      </h2>
                      <div className="mt-4 text-white/50 text-xs font-mono uppercase tracking-widest">
                        Swipe Left
                      </div>
                    </div>
                  ))}
                </div>

                {/* Success Visualizer */}
                {userClass.includes("snap-mandatory") && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1 pointer-events-none z-30">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce delay-150"></div>
                  </div>
                )}

                {/* Hint */}
                {userClass === "snap-none" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/20 z-30">
                    <div className="bg-red-500/80 text-white text-xs px-2 py-1 rounded font-bold rotate-12">
                      No Magnet!
                    </div>
                  </div>
                )}
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Horizontal carousel",
              description:
                "Uses `snap-x snap-mandatory` to lock slides into place horizontally, ensuring a clean view.",
              code: `<div class="snap-x snap-mandatory overflow-x-auto flex gap-6 p-4 rounded-xl bg-slate-900">
  <div class="snap-center w-64 h-32 bg-slate-700 rounded-lg shrink-0"></div>
  <div class="snap-center w-64 h-32 bg-slate-600 rounded-lg shrink-0"></div>
</div>`,
              preview: (
                <div className="snap-x snap-mandatory overflow-x-auto flex gap-4 p-4 bg-slate-900 rounded-lg no-scrollbar w-full max-w-sm">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="snap-center shrink-0 w-48 h-32 bg-slate-700 rounded-lg flex items-center justify-center text-slate-500 shadow-md border border-slate-600"
                    >
                      Slide {i}
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: "Vertical page sections",
              description:
                "Uses `snap-y snap-proximity` for a natural scrolling feel that aligns sections when close but doesn't force it.",
              code: `<div class="snap-y snap-proximity h-48 overflow-y-auto rounded-xl border bg-white p-4 space-y-6">
  <div class="snap-start h-32 bg-green-600 text-white flex items-center justify-center rounded-lg">Section 1</div>
  <div class="snap-start h-32 bg-green-700 text-white flex items-center justify-center rounded-lg">Section 2</div>
</div>`,
              preview: (
                <div className="snap-y snap-proximity h-48 overflow-y-auto rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-4 space-y-6 no-scrollbar w-full max-w-sm">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="snap-start shrink-0 h-32 rounded-lg bg-green-600 text-white flex items-center justify-center font-bold shadow-md"
                    >
                      Section {i}
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: "Two-axis gallery",
              description:
                "Snapping on both axes (`snap-both`) for a grid-like panning experience, great for maps or large diagrams.",
              code: `<div class="snap-both snap-mandatory h-48 overflow-auto grid grid-cols-2 gap-4 bg-slate-50 p-4">
  <div class="snap-center h-32 bg-indigo-600 rounded-lg"></div>
  <div class="snap-center h-32 bg-indigo-700 rounded-lg"></div>
</div>`,
              preview: (
                <div className="snap-both snap-mandatory h-48 overflow-auto grid grid-cols-2 gap-4 p-4 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 w-full max-w-sm">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="snap-center h-32 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm"
                    >
                      {i}
                    </div>
                  ))}
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Forgetting axis direction",
              reason:
                "`snap-mandatory` alone does nothing. You must specify the axis: `snap-x`, `snap-y`, or `snap-both`.",
              example: `<div class="snap-mandatory"> </div>`,
              level: "critical",
            },
            {
              title: "Not setting overflow",
              reason:
                "Scroll snapping relies on the container having scrolling content. Without `overflow-auto` or `overflow-scroll`, snapping won't trigger.",
              example: `<div class="snap-x snap-mandatory"> </div>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Mandatory vs Proximity:",
              text: "Use `snap-mandatory` when you want strict stops (slides). Use `snap-proximity` when you want fluid scrolling that 'suggests' alignment but doesn't force it.",
            },
            {
              bold: "Nested Snapping:",
              text: "You can nest snap containers! A vertical page snap container can hold a horizontal carousel snap container.",
            },
            {
              bold: "Touch vs Wheel:",
              text: "Snapping behavior feels different on trackpads/touch screens vs mouse wheels. Always test on both.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["interactivity", "touch-action"],
    title: "Touch Action",
    description:
      "Control how the browser handles touch input gestures. Disable scrolling, zooming, or panning to create custom touch experiences like maps, games, and drawing canvases.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Touch Action",
          description:
            "Control how the browser handles touch input gestures. Disable scrolling, zooming, or panning to create custom touch experiences like maps, games, and drawing canvases.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Touch Action",
          description:
            "When a user touches the screen, the browser normally captures that gesture for scrolling or zooming. `touch-action` tells the browser: 'Ignore these specific gestures, I will handle them myself with JavaScript'.  This is essential for preventing the page from moving while a user interacts with a map or game.",
          features: [
            "Applied to the INTERACTIVE CONTAINER (e.g., map, canvas)",
            "Prevents 'pull-to-refresh' or scrolling interference",
            "touch-none: Disables ALL browser handling (pure JS control)",
            "touch-pan-x/y: Allows single-axis scrolling only",
          ],
          layerAssignment:
            "Interactivity Layer - Filters native gesture events",
          browserBehavior:
            "Browser checks this property BEFORE starting a scroll. If disabled, it fires pointer events for your code instead.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Touch Action Strategies",
          columns: ["Class", "Allowed Gestures", "Best Use Case"],
          rows: [
            {
              feature: "touch-auto",
              values: ["All (Scroll, Zoom)", "Standard web pages"],
            },
            {
              feature: "touch-none",
              values: ["None (Full Lock)", "Drawing apps, Games, Drag & Drop"],
            },
            {
              feature: "touch-pan-x",
              values: [
                "Horizontal Scroll",
                "Carousels (blocks vertical scroll)",
              ],
            },
            {
              feature: "touch-pan-y",
              values: ["Vertical Scroll", "Sidebars, Pull-to-refresh areas"],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Touch Action Utilities",
          items: [
            {
              cls: "touch-auto",
              desc: "Browser handles all default touch behaviors (scrolling/zooming)",
            },
            {
              cls: "touch-none",
              desc: "Disable all browser touch interactions",
            },
            { cls: "touch-pan-x", desc: "Allow horizontal panning only" },
            { cls: "touch-pan-y", desc: "Allow vertical panning only" },
            { cls: "touch-pinch-zoom", desc: "Allow pinch zoom gestures" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Touch Action Playground",
          description:
            "Change the touch action to see which gestures are blocked. (Best experienced on a touch device or trackpad).",
          options: [
            "touch-auto",
            "touch-none",
            "touch-pan-x",
            "touch-pan-y",
            "touch-pinch-zoom",
          ],
          defaultValue: "touch-auto",
          buildMarkup: (touchClass: string) => {
            return `<div class="${touchClass} w-full h-48 bg-slate-100 flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg">
  <span class="text-slate-500 font-medium">Try interacting here</span>
</div>`;
          },
          renderPreview: (touchClass: string) => {
            return (
              <div
                className={`
                w-full h-48 bg-slate-50 dark:bg-slate-900 flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg touch-action-demo
                ${touchClass}
              `}
              >
                <div className="text-center p-4">
                  <p className="text-slate-500 dark:text-slate-400 font-medium">
                    {touchClass === "touch-none"
                      ? "Locked (No Scroll)"
                      : "Unlocked (Try Scrolling)"}
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    (Best tested on mobile/tablet)
                  </p>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Unusable Canvas",
          description:
            "This is a drawing app prototype. Try to drag your finger (or mouse) across the canvas to draw. Currently, dragging might scroll the page instead of drawing. Apply `touch-none` to fix this and enable smooth drawing.",
          codeSnippet: `<div class="flex flex-col items-center gap-4">
  <div class="bg-white p-2 rounded-full shadow-sm border flex gap-2">
    </div>

  <div 
    class="{input} w-64 h-64 bg-white border-2 border-slate-200 rounded-xl shadow-inner relative overflow-hidden cursor-crosshair"
  >
    <svg class="absolute inset-0 w-full h-full pointer-events-none">
      <path d="..." stroke="black" stroke-width="4" fill="none" />
    </svg>
    
    <div class="absolute inset-0 flex items-center justify-center text-slate-300 pointer-events-none">
      Draw Here
    </div>
  </div>
</div>`,
          options: [
            "touch-auto",
            "pointer-events-none",
            "touch-none",
            "touch-pan-y",
          ],
          correctOption: "touch-none",
          renderPreview: (userClass: string) => {
            // Inner component to handle drawing state
            const DrawingCanvas = () => {
              const [points, setPoints] = React.useState<string>("");
              const [isDrawing, setIsDrawing] = React.useState(false);
              const [scrollWarning, setScrollWarning] = React.useState(false);
              const containerRef = React.useRef<HTMLDivElement>(null);

              // Reset drawing when class changes
              React.useEffect(() => {
                setPoints("");
                setScrollWarning(false);
              }, [userClass]);

              const getCoordinates = (
                e: React.MouseEvent | React.TouchEvent
              ) => {
                const clientX =
                  "touches" in e
                    ? e.touches[0].clientX
                    : (e as React.MouseEvent).clientX;
                const clientY =
                  "touches" in e
                    ? e.touches[0].clientY
                    : (e as React.MouseEvent).clientY;

                if (containerRef.current) {
                  const rect = containerRef.current.getBoundingClientRect();
                  return {
                    x: clientX - rect.left,
                    y: clientY - rect.top,
                  };
                }
                return { x: 0, y: 0 };
              };

              const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
                if (userClass !== "touch-none") {
                  setScrollWarning(true);
                  setTimeout(() => setScrollWarning(false), 1000);
                  return;
                }

                setIsDrawing(true);
                const { x, y } = getCoordinates(e);
                setPoints(`M ${x} ${y}`);
              };

              const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
                if (!isDrawing) return;
                const { x, y } = getCoordinates(e);
                setPoints((prev) => prev + ` L ${x} ${y}`);
              };

              const handleEnd = () => {
                setIsDrawing(false);
              };

              return (
                <div className="flex flex-col items-center gap-4 relative select-none">
                  {/* Fake Toolbar */}
                  <div className="bg-white dark:bg-slate-800 p-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700 flex gap-2">
                    <div className="w-4 h-4 rounded-full bg-black border border-slate-300"></div>
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  </div>

                  {/* Canvas Area */}
                  <div
                    ref={containerRef}
                    onMouseDown={handleStart}
                    onMouseMove={handleMove}
                    onMouseUp={handleEnd}
                    onMouseLeave={handleEnd}
                    onTouchStart={handleStart}
                    onTouchMove={handleMove}
                    onTouchEnd={handleEnd}
                    className={`
                    w-64 h-64 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl shadow-inner relative overflow-hidden cursor-crosshair group
                    ${userClass}
                  `}
                  >
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <path
                        d={points}
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-slate-800 dark:text-slate-200"
                      />
                    </svg>

                    {points === "" && !scrollWarning && (
                      <div className="absolute inset-0 flex items-center justify-center text-slate-300 dark:text-slate-600 font-bold pointer-events-none select-none">
                        Draw Here
                      </div>
                    )}

                    {/* Scroll Warning Overlay */}
                    {scrollWarning && (
                      <div className="absolute inset-0 bg-red-50/90 dark:bg-red-900/50 flex flex-col items-center justify-center text-red-600 dark:text-red-200 text-center p-4 animate-in fade-in zoom-in duration-200 pointer-events-none">
                        <span className="text-2xl mb-2">↕️</span>
                        <span className="text-xs font-bold">
                          Browser Scrolled Page Instead!
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Status Indicator */}
                  {userClass === "touch-none" ? (
                    <div className="absolute -bottom-10 bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full animate-in fade-in zoom-in border border-green-200 shadow-sm flex items-center gap-2">
                      <span>✅</span> Drawing Enabled
                    </div>
                  ) : (
                    <div className="absolute -bottom-10 bg-red-100 text-red-700 text-xs font-bold px-3 py-1.5 rounded-full animate-in fade-in border border-red-200 shadow-sm flex items-center gap-2">
                      <span>❌</span> Gestures Not Blocked
                    </div>
                  )}
                </div>
              );
            };

            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                <DrawingCanvas />
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Swipeable carousel",
              description:
                "Allows horizontal swiping (`touch-pan-x`) but allows the user to scroll down the page normally if they drag vertically.",
              code: `<div class="touch-pan-x overflow-x-auto flex gap-4 p-4 bg-slate-900">
  <div class="w-64 h-40 bg-slate-700 rounded-lg shrink-0">Slide 1</div>
  <div class="w-64 h-40 bg-slate-600 rounded-lg shrink-0">Slide 2</div>
</div>`,
              preview: (
                <div className="touch-pan-x overflow-x-auto flex gap-4 p-4 bg-slate-900 rounded-lg no-scrollbar w-full max-w-sm">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-40 h-24 bg-slate-700 rounded-lg shrink-0 flex items-center justify-center text-slate-400 font-medium"
                    >
                      Slide {i}
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: "Map Application",
              description:
                "Prevents all browser handling (`touch-none`) so the map library can handle panning and zooming logic.",
              code: `<div class="touch-none w-full h-64 bg-blue-100 relative rounded-lg overflow-hidden">
  <div class="absolute inset-0 bg-[url('/map-pattern.png')] opacity-50"></div>
  <div class="absolute bottom-4 right-4 bg-white p-2 rounded shadow">
    <button class="block w-6 h-6 text-xl leading-none">+</button>
    <button class="block w-6 h-6 text-xl leading-none">-</button>
  </div>
</div>`,
              preview: (
                <div className="touch-none w-full max-w-sm h-48 bg-blue-50 dark:bg-slate-800 relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-10 pointer-events-none">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="border border-slate-400"></div>
                    ))}
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-400 font-bold pointer-events-none">
                    INTERACTIVE MAP
                  </div>
                  <div className="absolute bottom-2 right-2 bg-white dark:bg-slate-700 p-1 rounded shadow-md flex flex-col gap-1">
                    <div className="w-6 h-6 flex items-center justify-center bg-slate-100 dark:bg-slate-600 rounded text-slate-600 dark:text-slate-300 font-bold cursor-pointer">
                      +
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center bg-slate-100 dark:bg-slate-600 rounded text-slate-600 dark:text-slate-300 font-bold cursor-pointer">
                      -
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: "Custom Slider",
              description:
                "Allows vertical scrolling (`touch-pan-y`) so the user can scroll past the slider, but captures horizontal movement for the value change.",
              code: `<div class="touch-pan-y w-full h-12 bg-gray-200 rounded-full relative flex items-center px-2">
  <div class="w-8 h-8 bg-blue-600 rounded-full shadow-lg cursor-grab active:cursor-grabbing"></div>
</div>`,
              preview: (
                <div className="touch-pan-y w-full max-w-sm h-12 bg-slate-100 dark:bg-slate-800 rounded-full relative flex items-center px-2 border border-slate-200 dark:border-slate-700">
                  <div className="absolute left-1/3 w-8 h-8 bg-blue-600 rounded-full shadow-lg cursor-grab flex items-center justify-center text-[10px] text-white font-bold">
                    33%
                  </div>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Forgetting accessibility",
              reason:
                "Disabling touch events (`touch-none`) can trap users who rely on gestures for navigation. Ensure there are alternative ways to navigate.",
              example: `<div class="touch-none w-screen h-screen"> </div>`,
              level: "critical",
            },
            {
              title: "Using touch-action for pointer events",
              reason:
                "`touch-action` only affects gestures (scroll/zoom). If you want to click-through an element, use `pointer-events-none`.",
              example: `<div class="touch-none" onclick="..."> </div>`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Maps & Games:",
              text: "Use `touch-none` for full-screen interactive canvases to prevent the viewport from shifting while playing or dragging.",
            },
            {
              bold: "Horizontal Lists:",
              text: "Use `touch-pan-x` (or `pan-y` depending on orientation) to tell the browser 'this area scrolls horizontally, but please let the user scroll the page vertically if they drag up/down'.",
            },
            {
              bold: "Performance:",
              text: "Setting `touch-action` explicitly can improve scrolling performance because the browser doesn't have to wait to see if your JavaScript will cancel the scroll event.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["interactivity", "user-select"],
    title: "User Select",
    description:
      "Control whether users can select text or UI elements. Essential for creating polished interactive components like buttons, drag handles, and copy-paste areas.",
    sections: [
      {
        type: "hero",
        props: {
          title: "User Select",
          description:
            "Control whether users can select text or UI elements. Essential for creating polished interactive components like buttons, drag handles, and copy-paste areas.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Selection Behavior",
          description:
            "Browser default behavior allows users to select almost any text. While good for accessibility, it can be annoying in interactive apps.  For example, double-clicking a button shouldn't select its label, and dragging a card shouldn't highlight its description.",
          features: [
            "select-none: Ideal for buttons, icons, nav items, and draggable elements",
            "select-text: Use for articles, comments, and data users might want to copy",
            "select-all: Perfect for read-only input fields, API keys, or code snippets",
            "Does NOT affect screen readers (content remains accessible)",
          ],
          layerAssignment:
            "Interactivity Layer - Modifies browser text highlighting engine",
          browserBehavior:
            "Changes the CSS `user-select` property, preventing the browser's selection range from expanding into the element.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Selection Modes",
          columns: ["Class", "Click Behavior", "Best Use Case"],
          rows: [
            {
              feature: "select-none",
              values: ["No highlighting", "Buttons, Drag handles, Game UI"],
            },
            {
              feature: "select-text",
              values: ["Standard highlight", "Blog posts, Documentation"],
            },
            {
              feature: "select-all",
              values: [
                "Highlights entire block",
                "Code snippets, API Keys, Copy inputs",
              ],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "User Select Utilities",
          items: [
            { cls: "select-none", desc: "Prevent users from selecting text" },
            {
              cls: "select-text",
              desc: "Allow normal text selection (default)",
            },
            { cls: "select-all", desc: "Select all text on a single click" },
            { cls: "select-auto", desc: "Browser decides selection behavior" },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "User Select Playground",
          description:
            "Switch selection modes to see how they affect text highlighting. Try double-clicking or dragging to select the text below.",
          options: ["select-none", "select-text", "select-all", "select-auto"],
          defaultValue: "select-text",
          buildMarkup: (selectClass: string) => {
            return `<div class="${selectClass} p-6 border rounded-lg bg-slate-50 text-center">
  <p class="font-medium text-lg">Try to select this text.</p>
  <p class="text-sm text-slate-500 mt-2">Double click or drag cursor over me.</p>
</div>`;
          },
          renderPreview: (selectClass: string) => {
            return (
              <div
                className={`
                w-full h-48 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg flex flex-col items-center justify-center p-6 text-center cursor-text
                ${selectClass}
              `}
              >
                <p className="font-medium text-lg text-slate-800 dark:text-slate-200">
                  Try to select this text.
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  Double click or drag cursor over me.
                </p>
                {selectClass === "select-all" && (
                  <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded mt-4">
                    Tip: Click once!
                  </span>
                )}
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Draggable Card",
          description:
            "This is a draggable Kanban card. Try to 'drag' it (click and pull). Currently, doing so selects the text (`select-text`), which ruins the drag experience. Apply `select-none` to the card so it feels like a solid object.",
          codeSnippet: `<div class="w-64 bg-white p-4 rounded-lg shadow-lg border cursor-grab active:cursor-grabbing">
  <div class="flex justify-between items-start mb-2">
    <span class="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">Task-12</span>
    <button class="text-gray-400 hover:text-gray-600">...</button>
  </div>
  
  <div class="{input}">
    <h3 class="font-bold text-slate-800 mb-1">Fix Navigation Bug</h3>
    <p class="text-slate-500 text-sm">
      Menu collapses unexpectedly on mobile viewports.
    </p>
  </div>

  <div class="mt-4 flex -space-x-2">
    <div class="w-6 h-6 rounded-full bg-slate-300 border-2 border-white"></div>
    <div class="w-6 h-6 rounded-full bg-slate-400 border-2 border-white"></div>
  </div>
</div>`,
          options: [
            "select-none",
            "select-text",
            "select-all",
            "pointer-events-none",
          ],
          correctOption: "select-none",
          renderPreview: (userClass: string) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg select-text">
              <div
                className={`
                w-64 bg-white dark:bg-slate-900 p-4 rounded-lg shadow-xl border border-slate-200 dark:border-slate-800 cursor-grab active:cursor-grabbing active:scale-[1.02] transition-transform
                ${userClass}
              `}
              >
                <div className="flex justify-between items-start mb-3 pointer-events-none">
                  <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                    Task-12
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                    <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                    <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white mb-1">
                    Fix Navigation Bug
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-snug">
                    Menu collapses unexpectedly on mobile viewports when
                    rotating device.
                  </p>
                </div>

                <div className="mt-4 flex justify-between items-center pointer-events-none">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-400 border-2 border-white dark:border-slate-900"></div>
                    <div className="w-6 h-6 rounded-full bg-teal-400 border-2 border-white dark:border-slate-900"></div>
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">
                    Dec 12
                  </div>
                </div>
              </div>

              {/* Status Overlay */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
                {userClass === "select-none" ? (
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full animate-in fade-in zoom-in border border-green-200 shadow-sm">
                    ✅ Drag Ready (No Selection)
                  </span>
                ) : (
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full animate-in fade-in border border-amber-200 shadow-sm">
                    ⚠️ Text is Selectable
                  </span>
                )}
              </div>
            </div>
          ),
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Interactive UI controls",
              description:
                "Buttons and tabs should usually have selection disabled so double-clicks don't highlight the label.",
              code: `<div class="flex gap-4">
  <button class="select-none rounded-lg bg-blue-600 px-4 py-2 text-white">
    Submit
  </button>
  <button class="select-none rounded-lg bg-slate-200 px-4 py-2">
    Cancel
  </button>
</div>`,
              preview: (
                <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <button className="select-none rounded-md bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700 active:scale-95 transition-all">
                    Submit
                  </button>
                  <button className="select-none rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 transition-all">
                    Cancel
                  </button>
                </div>
              ),
            },
            {
              title: "Copy command blocks",
              description:
                "Makes code snippets easier to copy by selecting the entire block with a single click.",
              code: `<code class="select-all block rounded bg-slate-900 px-4 py-3 font-mono text-sm text-green-400">
  npm install tailwindcss
</code>`,
              preview: (
                <div className="bg-slate-900 p-4 rounded-lg shadow-md max-w-sm">
                  <div className="text-xs text-slate-500 mb-2">
                    Click to select command:
                  </div>
                  <code className="select-all block rounded bg-black/50 px-4 py-3 font-mono text-sm text-green-400 border border-slate-700 cursor-text hover:border-slate-500 transition-colors">
                    npm install tailwindcss
                  </code>
                </div>
              ),
            },
            {
              title: "Readable article text",
              description:
                "Long-form content should always remain selectable for accessibility and quoting.",
              code: `<article class="select-text p-4">
  <h2 class="font-bold text-xl mb-2">Introduction</h2>
  <p>Users can highlight and copy any part of this paragraph without restriction.</p>
</article>`,
              preview: (
                <div className="select-text p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="font-bold text-lg mb-2 text-slate-800 dark:text-white">
                    Why Selection Matters
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Allowing users to select text is fundamental to the web. It
                    enables copying for notes, quoting in replies, and helps
                    assistive technologies parse content.
                  </p>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Applying globally",
              reason:
                "Never apply `select-none` to the `body` or large containers. It frustrates users who want to copy information.",
              example: `<body class="select-none"> </body>`,
              level: "critical",
            },
            {
              title: "Disabling on inputs",
              reason:
                "Inputs and textareas usually need `select-text` (or auto) so users can edit their own text.",
              example: `<input class="select-none" /> `,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Buttons & Icons:",
              text: "Always use `select-none` on interactive elements like buttons, tabs, and icons to prevent ugly blue highlights on double-click.",
            },
            {
              bold: "Drag & Drop:",
              text: "Essential for draggable items. If text is selectable, the browser might interpret a drag as a text selection event instead.",
            },
            {
              bold: "One-Click Copy:",
              text: "Use `select-all` for things like API keys, invoice numbers, or terminal commands to speed up copying.",
            },
          ],
        },
      },
    ],
  },
  {
    slug: ["interactivity", "will-change"],
    title: "Will Change",
    description:
      "Hint to the browser which properties are likely to change, allowing it to optimize rendering and performance ahead of time.",
    sections: [
      {
        type: "hero",
        props: {
          title: "Will Change",
          description:
            "Hint to the browser which properties are likely to change, allowing it to optimize rendering and performance ahead of time.",
        },
      },
      {
        type: "mental-model",
        props: {
          title: "Understanding Will Change",
          description:
            "The `will-change` property acts like a 'heads-up' for the browser. It tells the browser engine to prepare expensive optimizations (like creating a new compositing layer) *before* an animation starts, preventing lag or flickering. ",
          features: [
            "Applied to the ELEMENT that will animate",
            "Prevents 'jank' (stuttering) during complex animations",
            "Promotes elements to their own GPU layer (compositing)",
            "Should be used sparingly to avoid memory bloat",
            "Crucial for smooth 60fps transitions on mobile",
          ],
          layerAssignment:
            "Performance Layer - Hints the rendering engine for future changes",
          browserBehavior:
            "Browser pre-calculates and caches the element's texture or layout, so the actual change is cheap to render.",
        },
      },
      {
        type: "comparison-table",
        props: {
          title: "Strategies",
          columns: ["Class", "Optimizes For", "Best Use Case"],
          rows: [
            {
              feature: "will-change-transform",
              values: [
                "Position / Scale / Rotation",
                "Hover effects, Modal popups, Sliding menus",
              ],
            },
            {
              feature: "will-change-scroll",
              values: ["Scroll Position", "Parallax effects, Sticky headers"],
            },
            {
              feature: "will-change-contents",
              values: ["Internal DOM changes", "Dynamic lists, Typing effects"],
            },
            {
              feature: "will-change-auto",
              values: ["Standard behavior", "Static elements (Default state)"],
            },
          ],
        },
      },
      {
        type: "utility-grid",
        props: {
          title: "Will Change Utilities",
          items: [
            {
              cls: "will-change-auto",
              desc: "Let the browser decide optimization strategy",
            },
            {
              cls: "will-change-scroll",
              desc: "Optimize for scroll position changes",
            },
            {
              cls: "will-change-contents",
              desc: "Optimize for content updates",
            },
            {
              cls: "will-change-transform",
              desc: "Optimize for transform animations",
            },
          ],
        },
      },
      {
        type: "playground",
        props: {
          title: "Will Change Playground",
          description: "Apply optimization hints to an animated element.",
          options: [
            "will-change-auto",
            "will-change-scroll",
            "will-change-contents",
            "will-change-transform",
          ],
          defaultValue: "will-change-auto",
          buildMarkup: (changeClass: string) => {
            return `<div class="${changeClass} transition-transform duration-300 hover:scale-110 
  cursor-pointer rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 
  px-8 py-4 text-white font-medium shadow-lg">
  Hover me
</div>`;
          },
          renderPreview: (changeClass: string) => {
            return (
              <div className="w-full h-48 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-center justify-center">
                <div
                  className={`${changeClass} transition-transform duration-300 hover:scale-110 cursor-pointer 
                  rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-4 text-white font-medium shadow-lg`}
                >
                  Hover me
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "interactive-challenge",
        props: {
          title: "The Janky Animation",
          description:
            "This 3D card animation works, but it's expensive for the browser to render. Without optimization, the browser 'repaints' the pixels on every frame (shown in red). Apply `will-change-transform` to promote it to a GPU layer (shown in green), making it buttery smooth.",
          codeSnippet: `<div class="perspective-1000">
  <div 
    class="{input} w-48 h-64 bg-slate-800 rounded-2xl shadow-2xl p-6 
    transition-all duration-500 ease-out hover:scale-110 hover:-rotate-3"
  >
    </div>
</div>`,
          options: [
            "will-change-auto",
            "will-change-scroll",
            "will-change-contents",
            "will-change-transform",
          ],
          correctOption: "will-change-transform",
          renderPreview: (userClass: string) => {
            const isOptimized = userClass === "will-change-transform";
            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg perspective-[1000px] overflow-hidden relative">
                {/* Legend */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 text-[10px] font-mono opacity-70">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500/20 border border-red-500 rounded"></div>
                    <span>CPU Repaint (Bad)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500/20 border border-green-500 rounded"></div>
                    <span>GPU Layer (Good)</span>
                  </div>
                </div>

                <div
                  className={`
                  w-48 h-64 bg-slate-800 rounded-2xl shadow-2xl p-6 relative group
                  transition-all duration-500 ease-out hover:scale-110 hover:-rotate-3 hover:shadow-indigo-500/20 cursor-pointer
                  transform-gpu border border-slate-700
                  ${userClass}
                `}
                >
                  {/* Visualizing Paint Cost vs Layer Promotion */}
                  {isOptimized ? (
                    // OPTIMIZED: Green tint + GPU Badge
                    <div className="absolute inset-0 rounded-2xl border-4 border-green-500/0 group-hover:border-green-500/50 transition-colors pointer-events-none z-20">
                      <div className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] px-2 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                        GPU Layer
                      </div>
                    </div>
                  ) : (
                    // UNOPTIMIZED: Red Flash (Simulating Repaint)
                    <div className="absolute inset-0 rounded-2xl bg-red-500/0 group-hover:animate-pulse group-hover:bg-red-500/10 pointer-events-none z-20">
                      <div className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                        Repainting...
                      </div>
                    </div>
                  )}

                  <div className="w-12 h-12 rounded-full bg-indigo-500 mb-4 flex items-center justify-center text-white text-xl shadow-inner relative z-10">
                    ⚡
                  </div>
                  <h3 className="text-white font-bold text-lg relative z-10">
                    Pro Plan
                  </h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed relative z-10">
                    Unlock full power for your team.
                  </p>

                  <button className="mt-8 w-full py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white text-sm font-medium relative z-10">
                    Upgrade
                  </button>
                </div>
              </div>
            );
          },
        },
      },
      {
        type: "examples",
        props: {
          title: "Real-World Examples",
          examples: [
            {
              title: "Animated cards",
              description:
                "Improves responsiveness for hover-driven motion on complex components.",
              code: `<div class="will-change-transform transition-transform hover:-translate-y-2 rounded-xl bg-slate-800 p-5 text-white w-52">
  <div class="h-24 bg-slate-700 rounded mb-4"></div>
  <h4 class="font-bold">Product Card</h4>
</div>`,
              preview: (
                <div className="will-change-transform transition-transform hover:-translate-y-2 duration-300 rounded-xl bg-slate-800 p-5 text-white w-48 shadow-xl cursor-pointer">
                  <div className="h-24 bg-slate-700 rounded mb-4 flex items-center justify-center text-slate-500 text-2xl">
                    🖼️
                  </div>
                  <h4 className="font-bold text-sm">Product Card</h4>
                  <div className="h-2 w-2/3 bg-slate-700 rounded mt-2"></div>
                </div>
              ),
            },
            {
              title: "Scrollable feed",
              description:
                "Helps browsers prepare for frequent scroll position updates in complex lists.",
              code: `<div class="will-change-scroll h-40 overflow-y-auto rounded-xl border bg-white p-3 space-y-3">
  <div class="rounded bg-slate-100 p-2">Feed item 1</div>
  <div class="rounded bg-slate-100 p-2">Feed item 2</div>
</div>`,
              preview: (
                <div className="will-change-scroll h-40 overflow-y-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-3 space-y-3 text-sm scroll-smooth">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded bg-slate-100 dark:bg-slate-800 p-2 text-slate-600 dark:text-slate-300"
                    >
                      Feed item {i + 1}
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: "Floating action button",
              description:
                "Keeps motion smooth for repeated entrance/exit animations.",
              code: `<button class="will-change-transform transition-transform hover:scale-110 active:scale-95 rounded-full bg-indigo-600 w-12 h-12 text-white flex items-center justify-center shadow-lg">
  +
</button>`,
              preview: (
                <div className="h-32 w-full flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <button className="will-change-transform transition-transform hover:scale-110 active:scale-95 duration-200 rounded-full bg-indigo-600 w-14 h-14 text-white flex items-center justify-center shadow-lg text-2xl pb-1">
                    +
                  </button>
                </div>
              ),
            },
          ],
        },
      },
      {
        type: "common-mistakes",
        props: {
          mistakes: [
            {
              title: "Applying to everything",
              reason:
                "`will-change` forces the browser to keep textures in memory. Applying it to too many elements can cause the page to slow down or crash due to memory exhaustion.",
              example: `* { will-change: transform; } /* NEVER do this */`,
              level: "critical",
            },
            {
              title: "Leaving it on permanently",
              reason:
                "Ideally, `will-change` should be applied via JavaScript right before an animation starts and removed after. Using it in CSS is okay for frequently interacting elements (like hover states), but use caution.",
              example: `.static-element { will-change: transform; } /* Waste of memory */`,
              level: "warning",
            },
          ],
        },
      },
      {
        type: "tips",
        props: {
          tips: [
            {
              bold: "Performance Hint:",
              text: "Remember, `will-change` is a hint, not a command. The browser may ignore it if resources are low.",
            },
            {
              bold: "Layer Promotion:",
              text: "Using `will-change: transform` or `opacity` often promotes the element to its own compositing layer, similar to the old `transform: translateZ(0)` hack.",
            },
            {
              bold: "Stacking Context:",
              text: "Be aware that using `will-change` creates a new stacking context, which might affect `z-index` behavior.",
            },
          ],
        },
      },
    ],
  },
  
];
