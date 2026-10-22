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
      className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-surface px-6 text-sm font-medium transition-colors hover:border-accent/60 hover:bg-raised"
    >
      <span className="sr-only">Copy email address. </span>
      <span aria-live="polite">{label}</span>
    </button>
  );
}
