"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons";

const BADGES = ["Desarrollo Web", "Aplicaciones a medida", "E-commerce", "Servidores Cloud"];

const STATS = [
  { num: "+10", label: "años de experiencia" },
  { num: "+50", label: "proyectos entregados" },
  { num: "+30", label: "clientes satisfechos" },
];

export function Hero() {
  const scrollToServices = () => {
    const el = document.getElementById("servicios");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", "/servicios");
    }
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0a1628] to-slate-950"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-900/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 bg-blue-900/20 blur-3xl" />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-28 md:px-6 md:pt-36 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Bienvenid@ a CodeInnova
          </span>
        </motion.div>

        <motion.h1
          className="mt-6 max-w-4xl text-4xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Especialistas en{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-orange-400 bg-clip-text text-transparent">
            desarrollo web
          </span>{" "}
          y software
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Combinamos experiencia, tecnología de vanguardia y una metodología
          propia para ofrecer soluciones seguras, escalables y de alto
          rendimiento, que simplifican procesos, potencian la productividad y
          optimizan tu entorno digital.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {BADGES.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              <CheckIcon className="h-3 w-3 text-emerald-400" />
              {b}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/consultoria-gratuita"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-900/40 transition hover:from-indigo-400 hover:to-indigo-500"
          >
            Consultoría gratuita
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            onClick={scrollToServices}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-slate-300 transition hover:border-white/30 hover:text-white"
          >
            Ver servicios
          </button>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8 text-xs text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold text-white">{s.num}</span>
              <span>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
      />
    </section>
  );
}
