"use client";

import Link from "next/link";
import { m } from "motion/react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { sectionFadeInUp, sectionHeaderFadeIn, getCardItemFadeIn } from "../../animations/marketingVariants";
import { SectionLabel } from "../ui/SectionLabel";
import { SnapCarousel } from "../ui/SnapCarousel";

// Iconos SVG inline para los 4 servicios — fondo oscuro, estilo técnico
const AppIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
  </svg>
);
const WebIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
  </svg>
);
const CloudIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
  </svg>
);
const ShopIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
  </svg>
);

const SERVICES = [
  {
    icon: <AppIcon />,
    iconBg: "bg-indigo-500/20 text-indigo-300",
    tag: "01",
    title: "Aplicaciones web",
    description: "Ofrecemos un servicio completo de desarrollo de aplicaciones web a medida, diseñado para cubrir todas las etapas del proceso.",
    color: "group-hover:border-indigo-500/60",
    href: "/servicios/aplicaciones-web",
  },
  {
    icon: <WebIcon />,
    iconBg: "bg-blue-500/20 text-blue-300",
    tag: "02",
    title: "Sitios web",
    description: "Desarrollamos sitios web corporativos optimizados para buscadores y orientados a la captación de clientes.",
    color: "group-hover:border-blue-500/60",
    href: "/servicios/sitios-web",
  },
  {
    icon: <CloudIcon />,
    iconBg: "bg-violet-500/20 text-violet-300",
    tag: "03",
    title: "Servidores Cloud",
    description: "Diseñamos y gestionamos una infraestructura segura, escalable y siempre disponible para crecer con tu negocio.",
    color: "group-hover:border-violet-500/60",
    href: "/servicios/servidores-cloud",
  },
  {
    icon: <ShopIcon />,
    iconBg: "bg-orange-500/20 text-orange-300",
    tag: "04",
    title: "E-commerce",
    description: "Creamos tiendas online a medida, diseñadas para impulsar el crecimiento de tu negocio.",
    color: "group-hover:border-orange-500/60",
    href: "/servicios/e-commerce",
  },
];

// Sección de servicios sobre fondo oscuro (contrasta con la sección About blanca).
// Tarjetas estilo glassmorphism con hover colored border.
export function ServicesSection() {
  return (
    <m.section
      id="servicios"
      className="relative overflow-hidden bg-slate-950 py-16 md:py-24"
      {...sectionFadeInUp}
    >
      {/* Background decoration — oculto en mobile para reducir coste de GPU */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-indigo-900/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-orange-900/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section label */}
        <SectionLabel variant="dark">NUESTROS SERVICIOS</SectionLabel>

        <m.header className="mt-4 max-w-2xl" {...sectionHeaderFadeIn}>
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
            Soluciones{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-orange-400 bg-clip-text text-transparent">
              innovadoras
            </span>
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Impulsamos la transformación digital de tu negocio con soluciones a
            medida que combinan tecnología, diseño y estrategia para ayudarte a
            crecer, escalar y destacar en el entorno digital.
          </p>
        </m.header>

        {/* Mobile: carrusel de 1 tarjeta con scroll-snap */}
        <div className="mt-8">
          <SnapCarousel count={SERVICES.length} variant="dark">
            {SERVICES.map((s) => (
              <div key={s.title} className="min-w-full snap-center px-6 pb-2">
                <article className={`group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 ${s.color}`}>
                  <div className="flex items-start justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.iconBg}`}>
                      {s.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-600">{s.tag}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
                  </div>
                  <Link
                    href={s.href}
                    className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-slate-400 transition hover:text-white"
                  >
                    Ver servicio de {s.title} <ArrowRightIcon className="h-3 w-3" />
                  </Link>
                </article>
              </div>
            ))}
          </SnapCarousel>
        </div>

        {/* Desktop: grid */}
        <div className="mt-10 hidden gap-4 md:mt-12 md:grid md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <m.article
              key={s.title}
              className={`group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:bg-white/10 ${s.color}`}
              {...getCardItemFadeIn(i)}
            >
              <div className="flex items-start justify-between">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.iconBg}`}>
                  {s.icon}
                </div>
                <span className="font-mono text-xs font-bold text-slate-600">{s.tag}</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
              </div>
              <Link
                href={s.href}
                className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-slate-400 transition hover:text-white"
              >
                Ver servicio de {s.title} <ArrowRightIcon className="h-3 w-3" />
              </Link>
            </m.article>
          ))}
        </div>
      </div>
    </m.section>
  );
}
