import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${className ?? ""}`}>
      <div className="mx-auto max-w-[1120px] px-6 py-16 sm:py-20">{children}</div>
    </section>
  );
}
