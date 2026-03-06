"use client";

import { useState } from "react";
import { m, AnimatePresence } from "motion/react";
import { Tabs } from "@radix-ui/themes";
import { ArrowTopRightIcon, PlusIcon } from "@radix-ui/react-icons";
import { sectionFadeInUp, sectionHeaderFadeIn } from "../../animations/marketingVariants";
import { SectionLabel } from "../ui/SectionLabel";
import { SnapCarousel } from "../ui/SnapCarousel";

const PAGE_SIZE = 3;

type Project = {
  id: string;
  title: string;
  description: string;
  categories: string[];
  tags: string[];
  gradient: string;
  url?: string;
};

const PROJECTS: Project[] = [
  {
    id: "area-contratacion-mediador-digital",
    title: "Área de contratación – Mediador Digital",
    description:
      "Aplicación SaaS a medida para la gestión del área de contratación, desplegada en servidor cloud con pipeline CI/CD para entregas continuas y alta disponibilidad.",
    categories: ["aplicaciones", "integraciones"],
    tags: ["Aplicaciones", "SaaS", "Servidor Cloud", "CI/CD", "Integraciones de pago - Stripe"],
    gradient: "from-indigo-600 to-violet-700",
    url: "https://contrata.mediadordigital.es",
  },
  {
    id: "wakecup",
    title: "WakeCup",
    description:
      "Aplicación B2C deportiva con experiencia de scroll inmersiva, pensada para acercar a los aficionados a su deporte favorito.",
    categories: ["aplicaciones"],
    tags: ["Aplicaciones", "SaaS", "Servidor Cloud", "CI/CD"],
    gradient: "from-emerald-500 to-teal-700",
  },
  {
    id: "fontnova",
    title: "Fontnova",
    description:
      "Aplicación web corporativa a medida para Fontnova, desplegada en servidor on-premise para máximo control y seguridad sobre los datos e infraestructura.",
    categories: ["aplicaciones"],
    tags: ["Aplicaciones", "Servidor On-premise"],
    gradient: "from-orange-500 to-amber-600",
  },
  {
    id: "mediador-digital",
    title: "Mediador Digital",
    description:
      "Sitio web corporativo con posicionamiento SEO avanzado y servidor cloud de alto rendimiento, diseñado para maximizar la captación orgánica de clientes.",
    categories: ["sitiosweb"],
    tags: ["Sitios web", "SEO", "Servidor Cloud"],
    gradient: "from-sky-500 to-blue-700",
    url: "https://mediadordigital.es",
  },
  {
    id: "jimenez-pons",
    title: "Jiménez & Pons",
    description:
      "Sitio web corporativo para el despacho Jiménez & Pons con SEO técnico optimizado y hosting cloud, orientado a la captación de nuevos clientes.",
    categories: ["sitiosweb"],
    tags: ["Sitios web", "SEO", "Servidor Cloud"],
    gradient: "from-slate-600 to-gray-800",
    url: "https://jimenezpons.com",
  },
  {
    id: "nostrum-real-estate",
    title: "Nostrum Real Estate",
    description:
      "Sitio web inmobiliario con catálogo de propiedades, buscador avanzado, SEO local y servidor cloud para garantizar velocidad y disponibilidad.",
    categories: ["sitiosweb"],
    tags: ["Sitios web", "SEO", "Servidor Cloud"],
    gradient: "from-cyan-600 to-blue-800",
  },
  {
    id: "beach-volley-garraf",
    title: "Beach Volley Garraf",
    description:
      "Integración de pasarela de pago en el club deportivo Beach Volley Garraf para la gestión automatizada de cuotas de temporada, bonos y torneos de más de 300 socios.",
    categories: ["integraciones"],
    tags: ["Integraciones de pago - RedSys"],
    gradient: "from-blue-500 to-cyan-600",
    url: "https://www.beachvolleygarraf.com",
  },
  {
    id: "quiartiswines",
    title: "Quiartiswines",
    description:
      "Tienda online a medida para la bodega Quiartiswines con catálogo, pasarela de pago, SEO optimizado y servidor cloud para máxima disponibilidad.",
    categories: ["ecommerce"],
    tags: ["E-commerce", "SEO", "Servidor Cloud", "Integraciones de pago - Stripe"],
    gradient: "from-rose-600 to-pink-700",
    url: "https://quiartiswines.com",
  },
];

const TABS = [
  { value: "all",            label: "Todos los proyectos" },
  { value: "aplicaciones",   label: "Aplicaciones" },
  { value: "sitiosweb",      label: "Sitios web" },
  { value: "ecommerce",      label: "E-commerce" },
  { value: "integraciones",  label: "Integraciones" },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <m.article
      className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      {/* Thumbnail con gradiente de marca */}
      <div className={`relative h-40 bg-gradient-to-br ${p.gradient} flex items-end p-4`}>
        {/* Botón enlace — posición absoluta para no verse afectado por los tags */}
        {p.url && (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur transition group-hover:opacity-100"
            aria-label={`Ver proyecto ${p.title}`}
          >
            <ArrowTopRightIcon className="h-4 w-4" />
          </a>
        )}
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-sm font-bold text-gray-900">{p.title}</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{p.description}</p>
      </div>
    </m.article>
  );
}

function FilteredGrid({ category }: { category: string }) {
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered =
    category === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(category));

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  if (filtered.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-gray-400">
        No hay proyectos en esta categoría todavía.
      </p>
    );
  }

  return (
    <>
      {/* Mobile: carrusel de 1 tarjeta */}
      <SnapCarousel count={filtered.length} variant="light">
        {filtered.map((p) => (
          <div key={p.id} className="min-w-full snap-center px-6 pb-2">
            <ProjectCard p={p} />
          </div>
        ))}
      </SnapCarousel>

      {/* Desktop: grid con paginación */}
      <div className="hidden md:block">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false}>
            {shown.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-gray-50 hover:shadow-md"
            >
              <PlusIcon className="h-4 w-4 transition-transform group-hover:rotate-90" />
              Ver más proyectos
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                {filtered.length - visible} restantes
              </span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

// Sección portfolio con los 3 proyectos reales de codeinnova.com.
// Tabs Radix UI para filtrar por categoría.
export function PortfolioSection() {
  return (
    <m.section
      id="proyectos"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50/80 py-16 md:py-24"
      {...sectionFadeInUp}
    >
      {/* Cuadrícula decorativa — oculta en mobile */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden opacity-[0.035] md:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Blobs — ocultos en mobile */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute right-0 top-0 h-72 w-72 -translate-y-1/2 translate-x-1/3 rounded-full bg-indigo-100/60 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 translate-y-1/3 -translate-x-1/4 rounded-full bg-orange-100/50 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionLabel variant="light">Nuestros proyectos</SectionLabel>

        <m.header className="mt-4 max-w-xl" {...sectionHeaderFadeIn}>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
            Puedes ver alguno de{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
              nuestros proyectos
            </span>
          </h2>
        </m.header>

        <div className="mt-8">
          <Tabs.Root defaultValue="all">
            <Tabs.List className="flex flex-wrap gap-1.5" highContrast>
              {TABS.map((t) => (
                <Tabs.Trigger
                  key={t.value}
                  value={t.value}
                  className="rounded-full px-4 py-1.5 text-xs font-medium"
                >
                  {t.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {TABS.map((t) => (
              <Tabs.Content key={t.value} value={t.value} className="mt-6">
                <FilteredGrid category={t.value} />
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>
      </div>
    </m.section>
  );
}