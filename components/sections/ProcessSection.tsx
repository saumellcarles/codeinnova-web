"use client";

import { m } from "motion/react";
import { sectionFadeInUp, sectionHeaderFadeIn, getCardItemFadeIn } from "../../animations/marketingVariants";
import { SnapCarousel } from "../ui/SnapCarousel";

const STEPS = [
  {
    num: "1",
    title: "Definición de objetivos",
    text: "Trabajamos juntos para entender tus necesidades y establecer metas claras y prioritarias que guíen todo el proyecto.",
    accent: "from-indigo-500 to-indigo-600",
    border: "border-indigo-100",
    bg: "bg-indigo-50",
  },
  {
    num: "2",
    title: "Desarrollo y seguimiento",
    text: "Desarrollamos el proyecto en etapas con entregas periódicas, manteniéndote informado en todo momento para asegurar que el progreso cumple con tus expectativas.",
    accent: "from-violet-500 to-violet-600",
    border: "border-violet-100",
    bg: "bg-violet-50",
  },
  {
    num: "3",
    title: "Entrega final",
    text: "Presentamos el resultado completo y funcional, garantizando que esté alineado con los objetivos definidos y listo para impulsar tu negocio.",
    accent: "from-orange-500 to-orange-600",
    border: "border-orange-100",
    bg: "bg-orange-50",
  },
];

// Sección metodología con los 3 pasos reales del proceso de codeinnova.com.
export function ProcessSection() {
  return (
    <m.section
      id="metodologia"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50/60 py-16 md:py-24"
      {...sectionFadeInUp}
    >
      {/* Decoración de fondo — oculta en mobile */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-indigo-100 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <m.p className="font-mono text-xs font-semibold uppercase text-gray-900" {...sectionHeaderFadeIn}>
          {"// "}Nuestra metodología
        </m.p>

        <m.header className="mt-4 max-w-2xl" {...sectionHeaderFadeIn}>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
            Metodología probada para{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
              hacer crecer tu negocio
            </span>
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Implementamos una metodología eficaz que optimiza los tiempos de
            ejecución y ofrece un seguimiento transparente y detallado del
            avance del proyecto, asegurando resultados alineados con tus
            objetivos.
          </p>
        </m.header>

        {/* Separador */}
        <div className="mt-8 h-px bg-gray-100 md:mt-12" />

        {/* Mobile: carrusel de 1 tarjeta */}
        <div className="mt-8">
          <SnapCarousel count={STEPS.length} variant="light">
            {STEPS.map((step) => (
              <div key={step.num} className="min-w-full snap-center px-6 pb-2">
                <div className={`relative rounded-2xl border p-6 ${step.border} ${step.bg}`}>
                  <span className="absolute right-4 top-3 select-none font-black text-7xl text-black/[0.04]">
                    {step.num}
                  </span>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-sm font-black text-white shadow-sm ${step.accent}`}>
                    {step.num}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.text}</p>
                </div>
              </div>
            ))}
          </SnapCarousel>
        </div>

        {/* Desktop: grid de 3 columnas */}
        <div className="mt-8 hidden gap-6 md:mt-12 md:grid md:grid-cols-3">
          {STEPS.map((step, i) => (
            <m.div
              key={step.num}
              className={`relative rounded-2xl border p-6 ${step.border} ${step.bg}`}
              {...getCardItemFadeIn(i)}
            >
              <span className="absolute right-4 top-3 select-none font-black text-7xl text-black/[0.04]">
                {step.num}
              </span>
              <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-sm font-black text-white shadow-sm ${step.accent}`}>
                {step.num}
              </div>
              <h3 className="mt-4 text-base font-bold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.text}</p>
            </m.div>
          ))}
        </div>
      </div>
    </m.section>
  );
}

