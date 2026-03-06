"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface SnapCarouselProps {
  count: number;
  /** "light" → dots oscuros (fondo claro). "dark" → dots blancos (fondo oscuro). */
  variant?: "light" | "dark";
  children: React.ReactNode;
}

export function SnapCarousel({ count, variant = "light", children }: SnapCarouselProps) {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / el.offsetWidth));
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const activeClass  = variant === "dark" ? "bg-white"      : "bg-gray-700";
  const inactiveClass = variant === "dark" ? "bg-white/25"  : "bg-gray-300";

  return (
    <div className="-mx-6 md:hidden">
      <div
        ref={ref}
        className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}
      >
        {children}
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active
                ? `w-4 ${activeClass}`
                : `w-1.5 ${inactiveClass}`
            }`}
          />
        ))}
      </div>
    </div>
  );
}
