"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "motion/react";
import { useLoaderContext } from "../../contexts/LoaderContext";

// Rutas de la landing (ancla) — mismo contenido, no mostrar loader
const LANDING_ROUTES = ["/", "/nosotros", "/servicios", "/metodologia", "/proyectos", "/clientes"];

const isLandingRoute = (p: string) => LANDING_ROUTES.includes(p);

// Spinner completo visible en todos los dispositivos.
// Se muestra en carga inicial hasta que la página esté lista, y en cambios de ruta reales.
// En consultoría gratuita: espera a que el calendario cargue.
export function PageLoader() {
  const [visible, setVisible] = useState(true); // Visible al inicio hasta que cargue
  const pathname = usePathname();
  const prevPathRef = useRef<string | null>(null);
  const isFirstLoad = useRef(true);
  const loaderCtx = useLoaderContext();

  // Carga inicial: ocultar cuando document + recursos estén listos (o calendario en consultoría)
  useEffect(() => {
    if (!isFirstLoad.current) return;

    const isConsultoria = pathname === "/consultoria-gratuita";

    const hide = () => {
      isFirstLoad.current = false;
      setVisible(false);
    };

    // En consultoría: esperar al calendario, no al window.load
    if (isConsultoria) return;

    if (document.readyState === "complete") {
      // Mínimo 400ms para evitar flash si carga muy rápido
      const t = setTimeout(hide, 400);
      return () => clearTimeout(t);
    }

    const onLoad = () => setTimeout(hide, 400);
    window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, [pathname]);

  // Consultoría: ocultar cuando el calendario cargue (carga inicial), o tras 12s por si falla
  useEffect(() => {
    if (pathname !== "/consultoria-gratuita" || !isFirstLoad.current) return;

    if (loaderCtx?.calendarLoaded) {
      isFirstLoad.current = false;
      const t = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(t);
    }

    const fallback = setTimeout(() => {
      isFirstLoad.current = false;
      setVisible(false);
    }, 12000);
    return () => clearTimeout(fallback);
  }, [pathname, loaderCtx?.calendarLoaded]);

  // Navegación entre rutas: mostrar loader en cambios reales (no ancla)
  useEffect(() => {
    const prev = prevPathRef.current;
    prevPathRef.current = pathname ?? "/";

    if (isFirstLoad.current) return;

    if (prev !== null && isLandingRoute(prev) && isLandingRoute(pathname ?? "/")) {
      return;
    }

    setVisible(true);
  }, [pathname]);

  // Ocultar loader en navegaciones: tras 700ms O cuando calendario cargue (consultoría)
  useEffect(() => {
    if (!visible || isFirstLoad.current) return;

    const isConsultoria = pathname === "/consultoria-gratuita";

    if (!isConsultoria) {
      const t = setTimeout(() => setVisible(false), 700);
      return () => clearTimeout(t);
    }

    if (loaderCtx?.calendarLoaded) {
      const t = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(t);
    }
    const fallback = setTimeout(() => setVisible(false), 12000);
    return () => clearTimeout(fallback);
  }, [visible, pathname, loaderCtx?.calendarLoaded]);

  // Reset calendarLoaded al salir de consultoría
  useEffect(() => {
    if (pathname !== "/consultoria-gratuita") {
      loaderCtx?.setCalendarLoaded(false);
    }
  }, [pathname, loaderCtx]);

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          aria-label="Cargando"
          role="status"
        >
          <div className="relative flex items-center justify-center">
            {/* Blob de fondo */}
            <m.div
              className="absolute h-28 w-28 rounded-full bg-gradient-to-tr from-blue-500/20 to-orange-400/20 blur-xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Anillo exterior giratorio */}
            <m.svg
              className="absolute h-[88px] w-[88px]"
              viewBox="0 0 88 88"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
            >
              <defs>
                <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#00008B" />
                  <stop offset="60%"  stopColor="#FF4500" />
                  <stop offset="100%" stopColor="#FFA500" stopOpacity="0" />
                </linearGradient>
              </defs>
              <circle
                cx="44" cy="44" r="40"
                stroke="url(#ring-grad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray="200"
                strokeDashoffset="145"
              />
            </m.svg>

            {/* Anillo interior giratorio inverso */}
            <m.svg
              className="absolute h-[104px] w-[104px] opacity-25"
              viewBox="0 0 104 104"
              fill="none"
              animate={{ rotate: -360 }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="52" cy="52" r="48"
                stroke="#6366f1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="60 240"
              />
            </m.svg>

            {/* Logo central */}
            <m.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <Image
                src="/logo-symbol.png"
                alt="Code Innova"
                width={48}
                height={48}
                className="h-12 w-12 object-contain drop-shadow-sm"
                priority
              />
            </m.div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
