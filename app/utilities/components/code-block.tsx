interface CodeBlockProps {
  code: string
  language?: string
}

export default function CodeBlock({ code, language = "jsx" }: CodeBlockProps) {
  return (
    <div className="code-block">
      <pre className="text-sm text-accent-foreground overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  )
}
