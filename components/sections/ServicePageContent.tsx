import Link from "next/link";
import { CheckIcon, ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import { PageLayout } from "../layout/PageLayout";
import { ProcessSection } from "./ProcessSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FinalCtaSection } from "./FinalCtaSection";
import type { ServiceData } from "../../lib/services-data";

const BASE_URL = "https://codeinnova.es";

interface ServicePageContentProps {
  service: ServiceData;
  serviceSchema: object;
}

export function ServicePageContent({ service, serviceSchema }: ServicePageContentProps) {
  const serviceUrl = `${BASE_URL}/servicios/${service.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Servicios", item: `${BASE_URL}/servicios` },
      { "@type": "ListItem", position: 3, name: service.title, item: serviceUrl },
    ],
  };

  const faqSchema = service.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0a1628] to-slate-950 pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Blobs decorativos — ocultos en mobile */}
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-indigo-900/30 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-orange-600/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-slate-300">Inicio</Link>
            <span>/</span>
            <Link href="/servicios" className="transition-colors hover:text-slate-300">Servicios</Link>
            <span>/</span>
            <span className="text-slate-300">{service.title}</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-400">
            {service.tagline}
          </span>

          <h1 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            <span className={`bg-gradient-to-r ${service.accentFrom} ${service.accentTo} bg-clip-text text-transparent`}>
              {service.title}
            </span>
            {" "}—{" "}
            {service.headline.includes(" para ")
              ? (
                <>
                  {service.headline.replace(/^[^—]*—\s*/, "").split(" para ")[0]}
                  {" para "}
                  <span className="text-white">
                    {service.headline.split(" para ").slice(1).join(" para ")}
                  </span>
                </>
              )
              : service.headline.replace(/^[^—]*—\s*/, "")
            }
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            {service.headline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/consultoria-gratuita"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-900/40 transition hover:from-indigo-400 hover:to-indigo-500"
            >
              Pide tu presupuesto
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-slate-200"
            >
              <ArrowLeftIcon className="h-3.5 w-3.5" />
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre el servicio + features */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <p className="font-mono text-xs font-semibold uppercase text-gray-900"><span className="text-gray-600">// </span>Sobre el servicio</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                ¿Qué incluye el servicio?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {service.description}
              </p>
              <Link
                href="/consultoria-gratuita"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
              >
                Pide tu presupuesto
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8">
              <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Lo que incluimos
              </p>
              <ul className="space-y-3.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                      <CheckIcon className="h-3 w-3 text-indigo-600" />
                    </div>
                    <span className="text-sm text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch cards */}
      <section className="border-y border-gray-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50/60 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: service.pitch1Title, text: service.pitch1Text },
              { title: service.pitch2Title, text: service.pitch2Text },
            ].map((p) => (
              <div key={p.title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
                <h3 className="text-base font-bold text-gray-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ visible */}
      {service.faqs?.length > 0 && (
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <p className="font-mono text-xs font-semibold uppercase text-gray-900"><span className="text-gray-600">// </span>Preguntas frecuentes</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              Preguntas frecuentes sobre {service.title.toLowerCase()}
            </h2>
            <dl className="mt-8 space-y-6">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <dt className="text-sm font-semibold text-gray-900 md:text-base">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <ProcessSection />
      <TestimonialsSection />
      <FinalCtaSection variant="light" />
    </PageLayout>
  );
}
