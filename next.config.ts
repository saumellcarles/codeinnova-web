import type { NextConfig } from "next";

const SECTION_SLUGS = ["nosotros", "servicios", "portfolio", "clientes"];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contacto",
        destination: "/consultoria-gratuita",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    // Sirve la home internamente para /servicios, /nosotros, etc.
    // La URL queda limpia sin hash, SectionScroller hace el scroll al montar.
    return SECTION_SLUGS.map((slug) => ({
      source: `/${slug}`,
      destination: "/",
    }));
  },
};

export default nextConfig;
