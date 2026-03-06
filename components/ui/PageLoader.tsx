"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "motion/react";

// Spinner completo visible en todos los dispositivos.
// Solo se muestra en cambios de ruta — nunca en la carga inicial
// para no bloquear FCP/LCP en PageSpeed.
export function PageLoader() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 700);
    return () => clearTimeout(t);
  }, [pathname]);

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
