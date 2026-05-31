import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, intro, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={["section", className].filter(Boolean).join(" ")}>
      <div className="container">
        {(eyebrow || title || intro) && (
          <div className="section-heading reveal">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
            {intro && <p className="section-intro">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
