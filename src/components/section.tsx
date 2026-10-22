import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line/80">
      <div className="mx-auto max-w-[1120px] px-6 py-20 sm:py-28">
        <p className="text-sm tracking-wide text-accent">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
