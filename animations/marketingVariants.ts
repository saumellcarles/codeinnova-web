// Variantes y configuraciones reutilizables de Motion
// para secciones y elementos de la landing orientada a leads.
// Centralizarlas aquí facilita mantener un lenguaje de animación coherente.

import type { MotionProps } from "motion/react";

// amount: 0.15 → la animación dispara cuando el 15% del elemento es visible.
// En mobile (pantallas pequeñas) un threshold alto como 0.5 puede causar que
// las animaciones nunca se activen correctamente.
// y reducido → menor área de repintado y menos layout shift percibido.

export const sectionFadeInUp: MotionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const sectionHeaderFadeIn: MotionProps = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.45, ease: "easeOut" },
};

export const getCardItemFadeIn = (delayIndex = 0): MotionProps => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.4, ease: "easeOut", delay: 0.06 * delayIndex },
});
