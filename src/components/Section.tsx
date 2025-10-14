// app/components/Section.tsx
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  className?: string;
}>;

export default function Section({
  id,
  className = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`snap-section ${className}`}>
      {children}
    </section>
  );
}
