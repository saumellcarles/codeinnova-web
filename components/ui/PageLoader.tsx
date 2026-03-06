"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

// Thin progress bar shown only on route changes — never on initial load.
// Removing the full-screen white overlay prevents blocking FCP/LCP on first visit.
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
    const t = setTimeout(() => setVisible(false), 500);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-x-0 top-0 z-[200] h-[3px] origin-left bg-gradient-to-r from-indigo-500 via-indigo-400 to-orange-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0.85 }}
          exit={{ scaleX: 1, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          aria-label="Cargando"
          role="status"
        />
      )}
    </AnimatePresence>
  );
}
