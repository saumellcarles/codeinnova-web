"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SECTION_SLUGS = ["nosotros", "servicios", "proyectos", "clientes"];

export function SectionScroller() {
  const pathname = usePathname();

  useEffect(() => {
    const slug = (pathname ?? "").slice(1);
    if (!SECTION_SLUGS.includes(slug)) return;

    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(slug);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `/${slug}`);
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 150);
      }
    };

    tryScroll();
  }, [pathname]);

  return null;
}
