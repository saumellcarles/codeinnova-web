import type { NextConfig } from "next";

const SECTION_SLUGS = ["nosotros", "servicios", "proyectos", "clientes"];

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

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
