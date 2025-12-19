function SrcollUtilitiesNotes() {
  return (
    <div className="space-y-6 border-t border-border pt-8">
      <h2 className="text-3xl font-bold">Utilities Notes</h2>

      <section className="space-y-2">
        <h3 className="text-xl font-semibold">1. scroll-*-&lt;number&gt;</h3>
        <p className="text-muted-foreground">
          Applies scroll margin or padding using Tailwind’s spacing scale. This is
          the most common and recommended pattern for consistent layouts.
        </p>
        <p className="text-muted-foreground">
          Internally uses <code>calc(var(--spacing) * &lt;number&gt;)</code>.
        </p>
        <pre className="rounded-md bg-muted p-3 text-sm">
          <code>scroll-pt-24</code>
        </pre>
      </section>

      <section className="space-y-2">
        <h3 className="text-xl font-semibold">2. -scroll-*-&lt;number&gt;</h3>
        <p className="text-muted-foreground">
          Applies a negative scroll margin or padding. Useful for pulling scroll
          snap positions closer or offsetting extra spacing.
        </p>
        <p className="text-muted-foreground">
          Internally uses <code>calc(var(--spacing) * -&lt;number&gt;)</code>.
        </p>
        <pre className="rounded-md bg-muted p-3 text-sm">
          <code>-scroll-mr-8</code>
        </pre>
      </section>

      <section className="space-y-2">
        <h3 className="text-xl font-semibold">
          3. scroll-*(
          <span className="font-mono">&lt;custom-property&gt;</span>)
        </h3>
        <p className="text-muted-foreground">
          Uses a CSS custom property for scroll margin or padding. Ideal for
          dynamic, theme-based, or responsive spacing.
        </p>
        <p className="text-muted-foreground">
          Internally uses <code>var(&lt;custom-property&gt;)</code>.
        </p>
        <pre className="rounded-md bg-muted p-3 text-sm">
          <code>scroll-me-(--sidebar-offset)</code>
        </pre>
      </section>

      <section className="space-y-2">
        <h3 className="text-xl font-semibold">4. scroll-*-[&lt;value&gt;]</h3>
        <p className="text-muted-foreground">
          Allows any valid CSS value. Best for one-off or highly specific spacing
          requirements.
        </p>
        <p className="text-muted-foreground">
          Accepts values like <code>px</code>, <code>rem</code>, <code>%</code>,{" "}
          <code>vh</code>, and more.
        </p>
        <pre className="rounded-md bg-muted p-3 text-sm">
          <code>scroll-mb-[72px]</code>
        </pre>
      </section>

      <section className="space-y-2">
        <h3 className="text-xl font-semibold">Spacing Scale Notes</h3>
        <p className="text-muted-foreground">
          The <code>&lt;number&gt;</code> values come from Tailwind’s spacing
          scale, such as:
        </p>
        <pre className="rounded-md bg-muted p-3 text-sm">
          <code>
            0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64
          </code>
        </pre>
        <p className="text-muted-foreground">
          If a value is not part of the spacing scale, use the arbitrary value
          syntax instead:
        </p>
        <pre className="rounded-md bg-muted p-3 text-sm">
          <code>scroll-pt-[13px]</code>
        </pre>
      </section>
    </div>
  );
}

export default SrcollUtilitiesNotes;