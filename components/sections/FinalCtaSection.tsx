"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { sectionFadeInUp } from "../../animations/marketingVariants";

interface FinalCtaSectionProps {
  variant?: "dark" | "light";
}

// CTA final reutilizable — variante "dark" (por defecto) para la landing
// y variante "light" para páginas internas sobre fondo claro.
export function FinalCtaSection({ variant = "dark" }: FinalCtaSectionProps) {
  const isLight = variant === "light";

  return (
    <motion.section
      className={`relative overflow-hidden py-20 md:py-28 ${
        isLight
          ? "bg-gradient-to-br from-gray-50 via-white to-indigo-50/60"
          : "bg-slate-950"
      }`}
      {...sectionFadeInUp}
    >
      {/* Background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className={`absolute left-1/2 top-0 h-80 w-96 -translate-x-1/2 rounded-full blur-3xl ${
            isLight ? "bg-indigo-200/40" : "bg-indigo-900/30"
          }`}
        />
        <div
          className={`absolute -right-20 bottom-0 h-64 w-64 rounded-full blur-3xl ${
            isLight ? "bg-orange-200/30" : "bg-orange-900/20"
          }`}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <motion.span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold ${
            isLight
              ? "border border-gray-200 bg-white text-gray-500 shadow-sm"
              : "border border-white/10 bg-white/5 text-slate-300"
          }`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Consultoría gratuita — sin compromiso
        </motion.span>

        <motion.h2
          className={`mt-5 text-2xl font-black uppercase tracking-tight md:text-3xl lg:text-5xl ${
            isLight ? "text-gray-900" : "text-white"
          }`}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          ¿Listo para impulsar{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-orange-500 bg-clip-text text-transparent">
            tu negocio digital?
          </span>
        </motion.h2>

        <motion.p
          className={`mx-auto mt-5 max-w-xl text-base ${
            isLight ? "text-gray-500" : "text-slate-400"
          }`}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Cuéntanos tu proyecto y te asesoramos sin compromiso. Nuestro equipo
          estudiará tu caso y te propondrá la mejor solución tecnológica.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/consultoria-gratuita"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-500/25 transition hover:from-indigo-400 hover:to-indigo-500"
          >
            Consultoría gratuita
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="mailto:info@codeinnova.com"
            className={`inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium transition ${
              isLight
                ? "border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900"
                : "border border-white/15 text-slate-300 hover:border-white/30 hover:text-white"
            }`}
          >
            info@codeinnova.com
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
