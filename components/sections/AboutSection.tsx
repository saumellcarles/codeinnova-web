"use client";

import Link from "next/link";
import Image from "next/image";
import { m } from "motion/react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { sectionFadeInUp, sectionHeaderFadeIn } from "../../animations/marketingVariants";
import { SectionLabel } from "../ui/SectionLabel";

const TECH_STACK = [
  { name: "Next.js",      src: "/tech/nextjs.png",       pad: "p-1.5"  },
  { name: "Angular",      src: "/tech/angular.png",      pad: "p-1.5"  },
  { name: "React",        src: "/tech/react.png",        pad: "p-1.5"  },
  { name: "Spring Boot",  src: "/tech/spring-boot.png",  pad: "p-0.5"  },
  { name: "PostgreSQL",   src: "/tech/postgresql.png",   pad: "p-1.5"    },
  { name: "AWS",          src: "/tech/aws.png",          pad: "p-2"    },
  { name: "Google Cloud", src: "/tech/google-cloud.png", pad: "p-0"  },
  { name: "Azure",        src: "/tech/azure.png",        pad: "p-1.5"  },
  { name: "Dokploy",      src: "/tech/dokploy.png",      pad: "p-1"    },
  { name: "Railway",      src: "/tech/railway.png",      pad: "p-1.5"  },
  { name: "Vercel",       src: "/tech/vercel.png",       pad: "p-1.5"  },
  { name: "WordPress",    src: "/tech/wordpress.png",    pad: "p-0.5"  },
  { name: "WooCommerce",  src: "/tech/woocommerce.png",  pad: "p-1"  },
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
        <SectionLabel variant="light">Sobre nosotros</SectionLabel>

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

        {/* Stat + tech stack */}
        <m.div
          className="mt-10 border-t border-gray-100 pt-8"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          {/* Stat + iconos en la misma fila, centrados — mobile y desktop */}
          <div className="-mx-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-center justify-center gap-4 px-6 pb-2">

              {/* Stat */}
              <div className="flex shrink-0 items-center gap-1.5">
                <span className="bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-5xl font-black text-transparent leading-none md:text-6xl">
                  +10
                </span>
                <div className="mb-1 text-xs leading-tight md:text-sm">
                  <p className="font-bold text-gray-800">Años de</p>
                  <p className="text-gray-600">experiencia</p>
                  <p className="text-gray-500">con tecnologías</p>
                  <p className="text-gray-500">de vanguardia</p>
                </div>
              </div>

              <div className="h-8 w-px shrink-0 bg-gray-200" />

              {/* Iconos */}
              {TECH_STACK.map((tech, i) => (
                <m.div
                  key={tech.name}
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:scale-105 hover:shadow-md md:h-12 md:w-12 ${tech.pad}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.04 * i }}
                  title={tech.name}
                >
                  <Image src={tech.src} alt={tech.name} width={32} height={32} className="h-full w-full object-contain" />
                </m.div>
              ))}

            </div>
          </div>
        </m.div>
      </div>
    </m.section>
  );
}
