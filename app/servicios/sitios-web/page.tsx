import type { Metadata } from "next";
import { getService } from "@/lib/services-data";
import { ServicePageContent } from "@/components/sections/ServicePageContent";

const BASE_URL = "https://codeinnova.es";
const service = getService("sitios-web")!;
const url = `${BASE_URL}/servicios/${service.slug}`;

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  keywords: service.keywords,
  alternates: { canonical: url },
  openGraph: {
    url,
    title: service.seoTitle,
    description: service.seoDescription,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: `${service.seoTitle} — Code Innova` }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.description,
  provider: { "@type": "Organization", name: "Code Innova", url: BASE_URL },
  areaServed: { "@type": "Place", name: "España" },
  url,
};

export default function Page() {
  return <ServicePageContent service={service} serviceSchema={serviceSchema} />;
}
