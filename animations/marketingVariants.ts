// Variantes y configuraciones reutilizables de Motion
// para secciones y elementos de la landing orientada a leads.
// Centralizarlas aquí facilita mantener un lenguaje de animación coherente.

import type { MotionProps } from "motion/react";

// Animación base para secciones que aparecen al hacer scroll.
export const sectionFadeInUp: MotionProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.5, ease: "easeOut" },
};

// Animación para headers dentro de las secciones.
export const sectionHeaderFadeIn: MotionProps = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.45, ease: "easeOut" },
};

// Utilidad para tarjetas que entran en cascada (stagger).
export const getCardItemFadeIn = (delayIndex = 0): MotionProps => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.45, ease: "easeOut", delay: 0.08 * delayIndex },
});

