"use client";

import { m } from "motion/react";
import { sectionHeaderFadeIn } from "../../animations/marketingVariants";

type SectionLabelProps = {
  children: React.ReactNode;
  variant?: "light" | "dark";
};

const variants = {
  light:
    "inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/70 px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-indigo-600",
  dark:
    "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-white/95 backdrop-blur-sm",
};

export function SectionLabel({ children, variant = "light" }: SectionLabelProps) {
  return (
    <m.div className="flex justify-center" {...sectionHeaderFadeIn}>
      <span className={`w-fit ${variants[variant]}`}>{children}</span>
    </m.div>
  );
}
