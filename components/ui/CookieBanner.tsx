"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "ci_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage no disponible (SSR o modo privado restrictivo)
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Aviso de cookies"
      className="fixed bottom-4 left-4 right-4 z-[250] mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-2xl shadow-black/10 md:bottom-6 md:left-6 md:right-auto md:max-w-sm"
    >
      <p className="text-xs font-semibold text-gray-900 md:text-sm">
        Usamos cookies 🍪
      </p>
      <p className="mt-1 text-xs leading-relaxed text-gray-500">
        Utilizamos cookies propias y de terceros para analizar el tráfico y mejorar
        tu experiencia. Puedes aceptarlas o rechazarlas.{" "}
        <Link
          href="/politica-de-cookies"
          className="underline underline-offset-2 hover:text-gray-900 transition-colors"
        >
          Política de cookies
        </Link>
        .
      </p>
      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={accept}
          className="flex-1 rounded-xl bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-gray-700"
        >
          Aceptar todas
        </button>
        <button
          onClick={reject}
          className="flex-1 rounded-xl border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 transition hover:border-gray-400 hover:text-gray-900"
        >
          Solo necesarias
        </button>
      </div>
    </div>
  );
}
