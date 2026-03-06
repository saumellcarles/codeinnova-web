import type { Metadata } from "next";
import { PageLayout } from "../../components/layout/PageLayout";
import { CalEmbed } from "../../components/contact/CalEmbed";
import { CheckIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

const BASE_URL = "https://codeinnova.es";
const PAGE_URL = `${BASE_URL}/consultoria-gratuita`;

export const metadata: Metadata = {
  title: "Consultoría gratuita de desarrollo web | Code Innova Tarragona",
  description:
    "Reserva tu consultoría gratuita con Code Innova. En 30 minutos analizamos tu proyecto de desarrollo web o software y te damos una hoja de ruta clara. Sin compromiso.",
  keywords: [
    "consultoría gratuita desarrollo web",
    "contacto agencia web Tarragona",
    "presupuesto desarrollo software",
    "consultoría tecnológica gratis",
    "agencia digital Tarragona contacto",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    url: PAGE_URL,
    title: "Consultoría gratuita de desarrollo web | Code Innova",
    description:
      "Reserva tu consultoría gratuita. En 30 minutos analizamos tu proyecto y te damos una hoja de ruta clara. Sin compromiso.",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Consultoría gratuita — Code Innova" }],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Consultoría gratuita — Code Innova",
  url: PAGE_URL,
  description:
    "Reserva una consultoría gratuita con el equipo de Code Innova para analizar tu proyecto de desarrollo web o software.",
  mainEntity: {
    "@type": "Organization",
    name: "Code Innova",
    email: "info@codeinnova.es",
    url: BASE_URL,
  },
};

const BENEFITS = [
  {
    title: "Consultoría 100% gratuita",
    text: "Sin coste ni compromiso. Te dedicamos 30 minutos para entender tu proyecto.",
  },
  {
    title: "Respuesta inmediata",
    text: "Elige el hueco que mejor te venga. Confirmación automática en tu email.",
  },
  {
    title: "Propuesta a medida",
    text: "Analizamos tu caso y preparamos una propuesta adaptada a tu presupuesto y plazos.",
  },
];

export default function ContactPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {/* Cabecera de la página */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-16 md:pt-36 md:pb-20">
        {/* Decoración */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-indigo-700/20 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-orange-600/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-orange-400">
            {"// Hablemos"}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Reserva tu consultoría{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-orange-400 bg-clip-text text-transparent">
              gratuita
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-400">
            Elige el hueco que mejor te convenga. En 30 minutos analizamos tu
            proyecto y te damos una hoja de ruta clara.
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="relative bg-gray-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-8">

            {/* Izquierda: info */}
            <div className="flex shrink-0 flex-col gap-5 lg:w-72">
              <ul className="space-y-5">
                {BENEFITS.map((b) => (
                  <li key={b.title} className="flex gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                      <CheckIcon className="h-3 w-3 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{b.title}</p>
                      <p className="mt-1 text-sm text-gray-500">{b.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Email directo */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <EnvelopeClosedIcon className="h-3.5 w-3.5" />
                  Email directo
                </div>
                <a
                  href="mailto:info@codeinnova.es"
                  className="mt-1 block text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
                >
                  info@codeinnova.es
                </a>
              </div>
            </div>

            {/* Derecha: calendario horizontal a ancho completo */}
            <div className="min-w-0 flex-1 overflow-hidden rounded-2xl bg-white shadow-sm" >
              <CalEmbed />
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
}
