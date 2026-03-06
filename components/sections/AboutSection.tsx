"use client";

import Link from "next/link";
import { m } from "motion/react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { sectionFadeInUp, sectionHeaderFadeIn } from "../../animations/marketingVariants";

// Iconos SVG de marca para el tech stack visible en la landing
const SpringIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
    <path fill="#6DB33F" d="M20.205 16.392c-2.469 3.29-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.492 1.424a5.38 5.38 0 01-.22-.116c-2.351-1.145-2.42-6.24 1.869-7.892 1.849-.714 3.615-.321 5.607-.799 2.129-.51 4.589-2.115 5.588-4.224 1.117 3.155.416 7.355-1.417 9.937zm1.918-5.332c-.154-4.605-3.877-9.035-8.506-10.08C10.39.492 7.12 1.241 4.666 3.02c2.21-1.84 5.129-2.956 8.3-2.956C18.737.064 23.935 5.262 23.935 11.533c0 3.183-1.117 6.109-2.956 8.3-1.779-2.454-2.528-5.724-.856-8.773z"/>
  </svg>
);

const AwsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
    <path fill="#FF9900" d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576a.34.34 0 01.064.184c0 .08-.048.16-.152.24l-.503.336a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.030-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.29 2.29 0 01-.271.104.483.483 0 01-.12.023c-.104 0-.156-.08-.156-.247v-.391c0-.128.016-.224.056-.272a.57.57 0 01.216-.16 4.39 4.39 0 011.037-.304 5.37 5.37 0 011.166-.128c.886 0 1.53.199 1.944.59.406.391.614.99.614 1.798v2.362h.006zm-3.24.847c.263 0 .534-.048.822-.144.288-.096.543-.271.758-.51.128-.152.224-.32.272-.51.048-.191.08-.42.08-.67v-.32a6.66 6.66 0 00-.734-.136 5.993 5.993 0 00-.75-.04c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.91 0 .37.095.647.295.83.192.19.454.27.838.27zm6.41.871c-.144 0-.239-.024-.295-.08-.056-.048-.12-.16-.168-.311L7.82 7.076a1.39 1.39 0 01-.072-.32c0-.128.064-.2.192-.2h.782c.152 0 .255.024.303.08.056.048.112.16.16.312l1.102 4.337 1.021-4.337c.04-.16.096-.264.152-.312.056-.048.168-.08.311-.08h.638c.152 0 .256.024.312.08.056.048.12.16.152.312l1.038 4.393 1.134-4.393c.048-.16.104-.264.16-.312.056-.048.16-.08.303-.08h.742c.128 0 .192.064.192.2 0 .04-.008.08-.016.128a1.13 1.13 0 01-.056.192l-1.62 5.303c-.04.16-.096.264-.152.312-.056.048-.16.08-.295.08h-.686c-.152 0-.255-.024-.311-.08-.056-.056-.12-.16-.152-.32l-1.014-4.216-1.006 4.208c-.04.16-.096.264-.152.32-.056.056-.168.08-.311.08h-.686zm8.554.175c-.383 0-.766-.04-1.134-.128a3.49 3.49 0 01-.862-.312c-.12-.064-.2-.136-.232-.2a.49.49 0 01-.04-.2v-.406c0-.168.064-.248.184-.248.048 0 .096.008.144.024.048.016.12.048.2.08.27.12.558.215.862.272.312.056.614.088.926.088.49 0 .87-.088 1.133-.264a.87.87 0 00.4-.757.79.79 0 00-.215-.566c-.144-.16-.416-.303-.814-.43l-1.166-.36c-.59-.184-1.022-.454-1.286-.814a1.94 1.94 0 01-.4-1.188c0-.343.072-.646.215-.902.144-.255.336-.479.574-.662.24-.184.51-.32.83-.414.32-.096.653-.136.998-.136.176 0 .36.008.535.032.184.024.35.056.51.096.152.04.296.088.43.136.136.048.247.1.328.152a.7.7 0 01.224.192c.048.064.072.144.072.248v.375c0 .168-.064.256-.184.256a.9.9 0 01-.32-.104 3.84 3.84 0 00-1.598-.32c-.447 0-.798.072-1.045.224-.248.152-.375.383-.375.694 0 .224.08.415.24.567.16.152.455.304.878.44l1.14.358c.582.184 1.005.44 1.26.766.256.327.383.702.383 1.117 0 .35-.072.67-.208.95-.143.28-.335.522-.582.726-.248.2-.542.35-.886.454-.36.104-.742.16-1.15.16zM21.43 17.67c-2.583 1.9-6.33 2.914-9.552 2.914-4.517 0-8.584-1.67-11.658-4.441-.24-.216-.024-.51.263-.343 3.32 1.933 7.42 3.088 11.658 3.088 2.858 0 5.998-.591 8.893-1.83.43-.183.799.28.397.612zm1.123-1.274c-.335-.43-2.21-.2-3.047-.104-.256.032-.296-.191-.064-.351 1.487-1.046 3.93-.742 4.215-.393.28.35-.072 2.797-1.47 3.964-.215.184-.422.088-.327-.151.313-.783 1.022-2.534.693-2.965z"/>
  </svg>
);

const GCloudIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
    <path fill="#4285F4" d="M12.19 2.38a9.35 9.35 0 00-9.234 6.893c.053-.02-.056.013 0 0C-1.04 11.82-.977 17.38 2.698 20.21l.006-.007-.007.03a6.72 6.72 0 004.077 1.356h5.173l.03.03h5.192c6.687.052 9.376-8.605 3.836-12.35A9.365 9.365 0 0012.19 2.38z"/>
    <path fill="#FBBC05" d="M17.655 9.15a5.54 5.54 0 011.726 3.21h.015c1.582-.046 2.979.02 4.055 1.025 1.734 1.613 1.734 4.465 0 6.078-.588.548-1.671.965-2.79 1.18"/>
    <path fill="#34A853" d="M6.74 22.069a2.604 2.604 0 01-2.594-2.594c0-1.07.641-2.098 1.641-2.54"/>
    <path fill="#EA4335" d="M12.15 6.497c1.586-.064 3.107.564 4.215 1.556"/>
  </svg>
);

const WordPressIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
    <path fill="#21759B" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 1.5c2.395 0 4.597.876 6.298 2.318L4.318 18.298A8.458 8.458 0 013.5 12c0-4.687 3.813-8.5 8.5-8.5zM3.783 14.794l4.69-12.86A8.474 8.474 0 0112 3.5a8.46 8.46 0 013.497.75L12.53 12.9l-2.737 7.963A8.501 8.501 0 013.783 14.794zm8.217 5.706c-1.105 0-2.16-.212-3.127-.596l3.285-9.551 3.364 9.217A8.462 8.462 0 0112 20.5zm5.416-1.478l-2.3-6.303 2.3-6.686a8.483 8.483 0 012.084 5.467 8.47 8.47 0 01-2.084 7.522z"/>
  </svg>
);

const WooCommerceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
    <rect width="24" height="24" rx="5" fill="#7F54B3"/>
    <path fill="white" d="M2.2 4.8C1.6 4.8 1 5.3 1 6v8.3c0 .7.5 1.2 1.2 1.2h5.8l-.8 2 2.7-2h5.7c.7 0 1.2-.5 1.2-1.2V6c0-.7-.5-1.2-1.2-1.2H2.2zm2 2.4l.7 2.8.7-2.8h.9l.7 2.8.7-2.8h.9L7.5 12H6.7l-.7-2.5L5.3 12H4.5L3 7.2h.9l.3.2zm5.5 0c1.3 0 2 .96 2 2.4s-.68 2.4-2 2.4-2-.96-2-2.4.68-2.4 2-2.4zm0 .88c-.65 0-1.04.56-1.04 1.52s.4 1.52 1.04 1.52 1.04-.56 1.04-1.52-.4-1.52-1.04-1.52zm3.8-.88c1.3 0 2 .96 2 2.4s-.68 2.4-2 2.4-2-.96-2-2.4.68-2.4 2-2.4zm0 .88c-.65 0-1.04.56-1.04 1.52s.4 1.52 1.04 1.52 1.04-.56 1.04-1.52-.4-1.52-1.04-1.52z"/>
  </svg>
);

const AngularIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
    <path fill="#DD0031" d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.982 12 .001zM19.37 17.93l-7.37 4.032-7.37-4.031-1.449-12.528L12 2.001l8.819 3.402-1.449 12.527z"/>
  </svg>
);

const ReactIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
    <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.4"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)"/>
  </svg>
);

const TECH_STACK = [
  { name: "Spring Boot",   Icon: SpringIcon    },
  { name: "AWS",           Icon: AwsIcon       },
  { name: "Google Cloud",  Icon: GCloudIcon    },
  { name: "WordPress",     Icon: WordPressIcon },
  { name: "WooCommerce",   Icon: WooCommerceIcon },
  { name: "Angular",       Icon: AngularIcon   },
  { name: "React",         Icon: ReactIcon     },
];

const PILLARS = [
  {
    title: "Nuestra misión",
    text: "Ayudar a empresas y emprendedores a crecer en el entorno digital mediante soluciones web que optimizan procesos, mejoran la eficiencia y fortalecen su presencia online.",
    accent: "bg-indigo-50 border-indigo-200 text-indigo-700",
    dot: "bg-indigo-500",
  },
  {
    title: "Nuestro objetivo",
    text: "Convertirnos en un aliado tecnológico clave para nuestros clientes, ofreciendo soluciones digitales a medida que impulsen su crecimiento y mejoren su competitividad.",
    accent: "bg-orange-50 border-orange-200 text-orange-700",
    dot: "bg-orange-500",
  },
];

// Sección "Sobre nosotros" con el contenido real de codeinnova.com.
// Layout asimétrico: estadística grande a la izquierda, texto a la derecha.
export function AboutSection() {
  return (
    <m.section
      id="nosotros"
      className="border-b border-gray-200 bg-white py-16 md:py-24"
      {...sectionFadeInUp}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-6">
        {/* Section label — estilo // como en codeinnova.com */}
        <m.p
          className="font-mono text-xs font-semibold text-gray-400"
          {...sectionHeaderFadeIn}
        >
          <span className="text-indigo-500">// </span>Sobre nosotros
        </m.p>

        <div className="mt-8 grid gap-12 md:grid-cols-2 md:items-start md:gap-16">
          {/* Left: headline + stat + CTA */}
          <m.div {...sectionHeaderFadeIn}>
            <h2 className="text-2xl font-bold leading-snug tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
              Innovación al servicio del{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
                Desarrollo Web y Software, E-commerce y Servidores Cloud
              </span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-gray-600">
              Con innovación tecnológica y un enfoque estratégico impulsamos tu
              negocio con desarrollos web y software a medida, e-commerce y
              servidores cloud de alto rendimiento, protegidos con sistemas de
              seguridad de última generación y diseñados para escalar junto a tu
              crecimiento.
            </p>

            <Link
              href="/consultoria-gratuita"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-700"
            >
              Consultoría gratuita
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </m.div>

          {/* Right: mission & objective cards */}
          <div className="flex flex-col gap-4">
            {PILLARS.map((p, i) => (
              <m.div
                key={p.title}
                className={`rounded-2xl border p-5 ${p.accent}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: 0.1 * i }}
              >
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${p.dot}`} />
                  <h3 className="text-sm font-bold">{p.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed opacity-80">{p.text}</p>
              </m.div>
            ))}
          </div>
        </div>

        {/* Stat + tech stack — ancho completo del landing, fuera del grid */}
        <m.div
          className="mt-10 border-t border-gray-100 pt-8"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          {/* Mobile: stat arriba + iconos debajo a ancho completo.
               Desktop: fila única stat | separador | iconos equidistantes */}

          {/* Fila stat — solo visible en mobile, centrada */}
          <div className="flex items-end justify-center gap-2 md:hidden">
            <span className="bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-7xl font-black text-transparent leading-none">
              +10
            </span>
            <div className="mb-2 text-sm text-gray-500 leading-tight">
              <p className="font-bold text-gray-800">Años de</p>
              <p>experiencia</p>
            </div>
          </div>

          {/* Iconos — fila a ancho completo en mobile, con margen superior */}
          <div className="mt-6 flex w-full items-center justify-between md:hidden">
            {TECH_STACK.map((tech, i) => (
              <m.div
                key={tech.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-50"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.04 * i }}
                title={tech.name}
              >
                <tech.Icon />
              </m.div>
            ))}
          </div>

          {/* Fila completa — solo visible en desktop */}
          <div className="hidden items-center gap-6 md:flex">
            <div className="flex shrink-0 items-end gap-2">
              <span className="bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-7xl font-black text-transparent leading-none">
                +10
              </span>
              <div className="mb-2 text-sm text-gray-500 leading-tight">
                <p className="font-bold text-gray-800">Años de</p>
                <p>experiencia</p>
              </div>
            </div>
            <div className="h-10 w-px shrink-0 bg-gray-200" />
            <div className="flex flex-1 items-center justify-between">
              {TECH_STACK.map((tech, i) => (
                <m.div
                  key={tech.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-gray-50 transition hover:border-gray-300 hover:bg-white hover:shadow-sm"
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.04 * i }}
                  title={tech.name}
                >
                  <tech.Icon />
                </m.div>
              ))}
            </div>
          </div>
        </m.div>
      </div>
    </m.section>
  );
}
