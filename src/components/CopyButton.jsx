import { useState } from "react";

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}