"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState("Copy email");

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setLabel("Copied");
    } catch {
      setLabel("Copy failed");
    }
    window.setTimeout(() => setLabel("Copy email"), 2000);
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="press press-plate inline-flex h-12 items-center justify-center border border-line px-5 text-sm"
    >
      <span className="sr-only">Copy email address. </span>
      <span aria-live="polite">{label}</span>
    </button>
  );
}
