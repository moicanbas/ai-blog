"use client";

import { useState, ReactNode } from "react";
import { FaCheck, FaCopy } from "react-icons/fa6";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  code?: string;
  children?: ReactNode;
  language?: string;
  filename?: string;
}

// Función auxiliar para extraer texto de cualquier tipo de nodo de React/MDX
function extractText(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (!node) return "";

  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }

  if (typeof node === "object" && "props" in node) {
    // Si viene de un bloque pre/code de MDX
    return extractText((node.props as { children?: ReactNode }).children);
  }

  return "";
}

export default function CodeBlock({
  code,
  children,
  language = "python",
  filename,
}: Props) {
  const [isCopied, setIsCopied] = useState(false);
  console.log(children);
  // Determinamos el código final extrayéndolo de manera segura
  const rawContent = code || children;
  const codeString = extractText(rawContent).trim();

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(codeString);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-border/50 bg-[#1E1E1E] shadow-xl">
      {/* Cabecera estilo macOS */}
      <div className="flex items-center justify-between bg-[#2D2D2D] px-4 py-3 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
          </div>
          {filename && (
            <span className="text-xs font-mono text-zinc-400">{filename}</span>
          )}
        </div>

        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-zinc-400 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
          aria-label="Copiar código"
        >
          {isCopied ? <FaCheck className="text-green-400" /> : <FaCopy />}
          {isCopied ? "Copiado" : "Copiar"}
        </button>
      </div>
      {/* Contenedor del código con Syntax Highlighter */}
      <div className="text-sm">
        <SyntaxHighlighter
          language={language || "python"}
          style={vscDarkPlus}
          PreTag="div"
          CodeTag="div"
          customStyle={{
            margin: 0,
            padding: "1.25rem",
            background: "transparent",
            fontSize: "0.875rem",
          }}
          wrapLongLines={true}
        >
          {codeString || "# No hay código disponible"}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
