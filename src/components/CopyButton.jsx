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
        className="ml-2 px-3 py-1 bg-gray-200 dark:bg-gray-700 
          hover:bg-gray-300 dark:hover:bg-gray-600 rounded text-sm 
          dark:text-gray-200"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    );
  }