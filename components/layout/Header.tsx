"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "motion/react";
import { ArrowRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";

const SERVICE_ITEMS = [
  {
    label: "Aplicaciones web",
    href: "/servicios/aplicaciones-web",
    description: "SaaS, portales y apps a medida",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    label: "Sitios web",
    href: "/servicios/sitios-web",
    description: "Webs corporativas y landing pages",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    label: "E-commerce",
    href: "/servicios/e-commerce",
    description: "Tiendas online y pasarelas de pago",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
      </svg>
    ),
  },
  {
    label: "Servidores Cloud",
    href: "/servicios/servidores-cloud",
    description: "AWS, Google Cloud y CI/CD",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
];

type NavItem =
  | { type: "scroll";   label: string; section: string }
  | { type: "dropdown"; label: string; section: string };

const NAV_ITEMS: NavItem[] = [
  { type: "scroll",   label: "Nosotros",    section: "nosotros"    },
  { type: "dropdown", label: "Servicios",   section: "servicios"   },
  { type: "scroll",   label: "Metodología", section: "metodologia" },
  { type: "scroll",   label: "Clientes",    section: "clientes"    },
  { type: "scroll",   label: "Proyectos",   section: "proyectos"   },
];

const SECTION_SLUGS = NAV_ITEMS.map((i) => i.section);

// Páginas que arrancan con hero oscuro → header transparente hasta hacer scroll
const hasDarkHero = (p: string) =>
  p === "/" ||
  p === "/consultoria-gratuita" ||
  p.startsWith("/servicios");

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [scrolled, setScrolled]         = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const closeTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const checkScroll = () => setScrolled(window.scrollY > 40);
    checkScroll(); // Comprobar al montar (maneja restauración de scroll al refrescar)
    const t = setTimeout(checkScroll, 50); // Re-check por si el navegador restaura scroll tras hidratación
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  // Cierra el menú móvil en cambios de ruta
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isLight   = !hasDarkHero(pathname ?? "") || scrolled;
  const isOnHome  = pathname === "/" || SECTION_SLUGS.includes((pathname ?? "").slice(1));

  // Detecta el item activo
  const isActive = (section: string) => {
    const p = pathname ?? "";
    if (section === "servicios") return p.startsWith("/servicios");
    return p === `/${section}`;
  };

  const scrollTo = (section: string) => {
    setMobileOpen(false);
    if (!isOnHome) {
      window.location.href = `/${section}`;
      return;
    }
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", `/${section}`);
    }
  };

  // Dropdown hover con pequeño delay para evitar cierres accidentales
  const openServices  = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <m.header
          className={`pointer-events-auto w-full max-w-5xl rounded-2xl border px-4 py-2.5 backdrop-blur-xl transition-[box-shadow,background-color,border-color] duration-300 md:px-5 md:py-3 ${
            isLight
              ? "border-gray-200/80 bg-white/95 shadow-lg shadow-black/8"
              : "border-white/15 bg-white/5 shadow-md shadow-black/10"
          }`}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src={isLight ? "/logo.png" : "/logo-white.png"}
                alt="Code Innova"
                width={200}
                height={44}
                className="h-6 w-auto transition-opacity duration-300 md:h-7"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center md:flex" aria-label="Navegación principal">
              <ul className="flex items-center gap-0.5">
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item.section);
                  const baseBtn = `relative z-10 cursor-pointer rounded-xl px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-orange-500/10 text-orange-600 font-semibold"
                      : isLight
                        ? "text-gray-600 hover:bg-orange-500/10 hover:text-orange-600"
                        : "text-white/80 hover:bg-orange-500/20 hover:text-orange-300"
                  }`;

                  if (item.type === "dropdown") {
                    return (
                      <li
                        key={item.section}
                        ref={servicesRef}
                        className="relative"
                        onMouseEnter={openServices}
                        onMouseLeave={closeServices}
                      >
                        <button
                          onClick={() => scrollTo(item.section)}
                          className={`inline-flex items-center gap-1 ${baseBtn}`}
                        >
                          {item.label}
                          <m.span
                            animate={{ rotate: servicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDownIcon className="h-3 w-3" />
                          </m.span>
                        </button>

                        <AnimatePresence>
                          {servicesOpen && (
                            <m.div
                              key="services-dropdown"
                              className="absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-black/10"
                              initial={{ opacity: 0, y: -6, scale: 0.97 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -6, scale: 0.97 }}
                              transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                              onMouseEnter={openServices}
                              onMouseLeave={closeServices}
                            >
                              <ul className="p-1.5">
                                {SERVICE_ITEMS.map((s) => {
                                  const isServiceActive = pathname === s.href;
                                  return (
                                    <li key={s.href}>
                                      <Link
                                        href={s.href}
                                        onClick={() => setServicesOpen(false)}
                                        className={`group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors ${
                                          isServiceActive
                                            ? "bg-orange-500/10 text-orange-600"
                                            : "text-gray-700 hover:bg-orange-500/10 hover:text-orange-600"
                                        }`}
                                      >
                                        <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors ${
                                          isServiceActive
                                            ? "bg-orange-100 text-orange-600"
                                            : "bg-gray-100 text-gray-500 group-hover/item:bg-orange-100 group-hover/item:text-orange-600"
                                        }`}>
                                          {s.icon}
                                        </span>
                                        <span>
                                          <span className="block text-sm font-medium">{s.label}</span>
                                          <span className={`block text-xs transition-colors ${isServiceActive ? "text-orange-400" : "text-gray-400 group-hover/item:text-orange-400"}`}>{s.description}</span>
                                        </span>
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </m.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  }

                  return (
                    <li key={item.section}>
                      <button onClick={() => scrollTo(item.section)} className={baseBtn}>
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className={`mx-3 h-4 w-px ${isLight ? "bg-gray-200" : "bg-white/20"}`} />

              <Link
                href="/consultoria-gratuita"
                className={`group inline-flex items-center gap-1.5 rounded-xl px-4 py-1.5 text-sm font-semibold shadow-sm transition ${
                  isLight
                    ? "bg-gray-900 text-white hover:bg-gray-700"
                    : "bg-white text-gray-900 hover:bg-white/90"
                }`}
              >
                Hablemos
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </nav>

            {/* Hamburger */}
            <button
              className={`flex h-8 w-8 flex-col items-center justify-center gap-[5px] rounded-lg transition md:hidden ${
                isLight ? "hover:bg-gray-100" : "hover:bg-white/10"
              }`}
              onClick={() => setMobileOpen((p) => !p)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <m.span
                className={`block h-[2px] w-5 origin-center rounded-full ${isLight ? "bg-gray-700" : "bg-white"}`}
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <m.span
                className={`block h-[2px] w-5 rounded-full ${isLight ? "bg-gray-700" : "bg-white"}`}
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.15 }}
              />
              <m.span
                className={`block h-[2px] w-5 origin-center rounded-full ${isLight ? "bg-gray-700" : "bg-white"}`}
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </m.header>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <m.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />
            <m.div
              key="mobile-panel"
              className="fixed inset-x-4 top-[76px] z-50 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-black/15 md:hidden"
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <nav aria-label="Menú móvil" className="p-2">
                <ul className="space-y-0.5">
                  {NAV_ITEMS.map((item, i) => {
                    const active = isActive(item.section);

                    if (item.type === "dropdown") {
                      return (
                        <m.li
                          key={item.section}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 + i * 0.04, duration: 0.18 }}
                        >
                          <button
                            onClick={() => setMobileServicesOpen((p) => !p)}
                            className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                              active
                                ? "bg-orange-50 font-semibold text-orange-600"
                                : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                            }`}
                          >
                            {item.label}
                            <m.span
                              animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDownIcon className="h-3.5 w-3.5" />
                            </m.span>
                          </button>

                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <m.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                {SERVICE_ITEMS.map((s) => {
                                  const isServiceActive = pathname === s.href;
                                  return (
                                    <li key={s.href}>
                                      <Link
                                        href={s.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`group/item flex items-center gap-3 rounded-xl py-2.5 pl-6 pr-4 text-sm transition ${
                                          isServiceActive
                                            ? "bg-orange-500/10 font-semibold text-orange-600"
                                            : "text-gray-600 hover:bg-orange-500/10 hover:text-orange-600"
                                        }`}
                                      >
                                        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg transition-colors ${isServiceActive ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-500 group-hover/item:bg-orange-100 group-hover/item:text-orange-600"}`}>
                                          {s.icon}
                                        </span>
                                        {s.label}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </m.ul>
                            )}
                          </AnimatePresence>
                        </m.li>
                      );
                    }

                    return (
                      <m.li
                        key={item.section}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.04, duration: 0.18 }}
                      >
                        <button
                          onClick={() => scrollTo(item.section)}
                          className={`flex w-full items-center rounded-xl px-4 py-3 text-sm font-medium transition ${
                            active
                              ? "bg-orange-50 font-semibold text-orange-600"
                              : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                          }`}
                        >
                          {item.label}
                        </button>
                      </m.li>
                    );
                  })}
                </ul>

                <m.div
                  className="mt-2 border-t border-gray-100 p-2 pt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.22 }}
                >
                  <Link
                    href="/consultoria-gratuita"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
                  >
                    Hablemos
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </m.div>
              </nav>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
