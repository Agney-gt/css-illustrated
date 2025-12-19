import React from "react"
import CopyButton from "./copybutton"

type ExampleCardProps = {
  title: string
  code: string
  description: string
  children?: React.ReactNode
}

function ExampleCard({
  title,
  code,
  description,
  children,
}: ExampleCardProps) {
  return (
    <div className="border border-border rounded-xl p-5 bg-card/30 space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>

      <div className="border border-border rounded-lg bg-background p-4">
        {children ?? (
          <div
            className="w-full"
            dangerouslySetInnerHTML={{ __html: code }}
          />
        )}
      </div>

      <div className="relative border border-border rounded-lg bg-muted px-4 py-3">
        <div className="absolute right-3 top-3">
          <CopyButton text={code} />
        </div>

        <pre className="overflow-x-auto text-sm pr-10">
          <code>{code}</code>
        </pre>
      </div>

      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

export default ExampleCard
