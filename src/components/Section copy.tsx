// app/components/Section.tsx
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  className?: string;
  title?: string;
}>;

export default function Section({
  id,
  className = "",
  title,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`snap-section flex items-center justify-center px-6 ${className}`}
      aria-label={title}
    >
      <div className="max-w-3xl text-center">
        {title && (
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}
