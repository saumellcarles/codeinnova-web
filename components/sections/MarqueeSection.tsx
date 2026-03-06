"use client";

type MarqueeSectionProps = {
  // Texto que se repite en el ticker. El componente lo duplica internamente.
  text?: string;
  // Variante de velocidad: slow | normal | fast
  speed?: "slow" | "normal" | "fast";
  // Esquema de color: dark (fondo oscuro) | light (fondo claro)
  variant?: "dark" | "light";
};

// Ticker de texto rodante, inspirado en la animación "CODE · INNOVA ·" de codeinnova.com.
// Usa CSS puro (marquee-track) para máximo rendimiento — sin JS en cada frame.
export function MarqueeSection({
  text = "CODE · INNOVA ·",
  speed = "normal",
  variant = "dark",
}: MarqueeSectionProps) {
  const trackClass =
    speed === "fast"
      ? "marquee-track-fast"
      : speed === "slow"
        ? "marquee-track-slow"
        : "marquee-track";

  const isDark = variant === "dark";

  // 8 repeticiones son suficientes para un ciclo imperceptible
  const repeated = Array.from({ length: 8 }, (_, i) => (
    <span key={i} className="px-4">
      {text}
    </span>
  ));

  return (
    <div
      className={`overflow-hidden border-y py-4 ${
        isDark
          ? "border-white/10 bg-slate-950 text-white/30"
          : "border-gray-200 bg-white text-gray-300"
      }`}
      aria-hidden
    >
      {/* Doble pista para que el bucle sea invisible */}
      <div className={`flex whitespace-nowrap text-sm font-bold uppercase tracking-[0.4em] ${trackClass}`}>
        <span className="flex shrink-0">{repeated}</span>
        <span className="flex shrink-0" aria-hidden>{repeated}</span>
      </div>
    </div>
  );
}
