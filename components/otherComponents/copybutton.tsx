import { useState } from "react";

type CopyButtonProps = {
  text: string;
};

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(text);

    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-neutral-900 hover:text-neutral-700 transition"
    >
      {copied ? (
        <>
          ✓ <span>Copied</span>
        </>
      ) : (
        <>
          ⧉ <span>Copy</span>
        </>
      )}
    </button>
  );
}
