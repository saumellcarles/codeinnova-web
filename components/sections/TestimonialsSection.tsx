"use client";

import { m } from "motion/react";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { sectionFadeInUp, sectionHeaderFadeIn, getCardItemFadeIn } from "../../animations/marketingVariants";
import { SnapCarousel } from "../ui/SnapCarousel";

const TESTIMONIALS = [
  {
    quote:
      "Muy contentos con los resultados de nuestra nueva página web y ecommerce. Mucha iniciativa, rapidez y resolución. Recomiendo 100% sus servicios, tanto por su trato cercano como por la calidad del trabajo final. Siempre dispuestos a resolver todas nuestras dudas.",
    name: "Anna",
    company: "Quiartiswines",
    initials: "A",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    quote:
      "Gran trabajo realizado. Profesional, próximo y atento a los detalles.",
    name: "Sebas",
    company: "Beach Volley Garraf",
    initials: "S",
    color: "bg-blue-100 text-blue-700",
  },
  {
    quote:
      "Fácil, rápido y efectivo. Carles es un gran profesional. Nos ayudó mucho a arrancar con nuestro club deportivo. 100% recomendable!!",
    name: "Jesús",
    company: "Beach Volley Garraf",
    initials: "J",
    color: "bg-violet-100 text-violet-700",
  },
  {
    quote:
      "Atención y conocimientos a muy buen nivel, concretamente Carles que nos ha ayudado en todo lo que hemos necesitado. Gracias!",
    name: "Sebas",
    company: "WakeCup",
    initials: "S",
    color: "bg-emerald-100 text-emerald-700",
    stars: 4,
  },
  {
    quote:
      "Estamos muy satisfechos con el servicio que hemos recibido. Sin lugar a dudas, volveríamos a trabajar con ellos en el futuro. Han demostrado una gran atención a nuestras necesidades y los resultados obtenidos han cumplido nuestras expectativas.",
    name: "Jose Antonio",
    company: "Jimenez & Pons",
    initials: "J",
    color: "bg-orange-100 text-orange-700",
  },
];

// Testimonios reales extraídos de codeinnova.com — diseño de cuadrícula asimétrica.
export function TestimonialsSection() {
  return (
    <m.section
      id="clientes"
      className="relative overflow-hidden bg-slate-950 py-16 md:py-24"
      {...sectionFadeInUp}
    >
      {/* Patrón de puntos sutil — oculto en mobile */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden opacity-[0.06] md:block"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Blobs de color — ocultos en mobile */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-indigo-700/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <m.p className="font-mono text-xs font-semibold uppercase text-white" {...sectionHeaderFadeIn}>
          <span className="text-orange-400">// </span>CLIENTES
        </m.p>

        <m.header className="mt-4 max-w-xl" {...sectionHeaderFadeIn}>
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
            Lo que dicen{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-orange-400 bg-clip-text text-transparent">
              nuestros clientes
            </span>
          </h2>
        </m.header>

        {/* Mobile: carrusel de 1 tarjeta */}
        <div className="mt-8">
          <SnapCarousel count={TESTIMONIALS.length} variant="dark">
            {TESTIMONIALS.map((t) => (
              <div key={`${t.name}-${t.company}`} className="min-w-full snap-center px-6 pb-2">
                <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex gap-0.5" aria-label={`${t.stars ?? 5} estrellas`}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <StarFilledIcon
                        key={j}
                        className={`h-3.5 w-3.5 ${j < (t.stars ?? 5) ? "text-amber-400" : "text-white/15"}`}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${t.color}`} aria-hidden>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.company}</p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </SnapCarousel>
        </div>

        {/* Desktop: masonry columns */}
        <div className="mt-10 hidden columns-2 gap-4 lg:columns-3 md:block">
          {TESTIMONIALS.map((t, i) => (
            <m.article
              key={`${t.name}-${t.company}`}
              className="mb-4 break-inside-avoid rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:bg-white/10"
              {...getCardItemFadeIn(i)}
            >
              <div className="flex gap-0.5" aria-label={`${t.stars ?? 5} estrellas`}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarFilledIcon
                    key={j}
                    className={`h-3.5 w-3.5 ${j < (t.stars ?? 5) ? "text-amber-400" : "text-white/15"}`}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${t.color}`} aria-hidden>
                  {t.initials}
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.company}</p>
                </div>
              </div>
            </m.article>
          ))}
        </div>
      </div>
    </m.section>
  );
}
