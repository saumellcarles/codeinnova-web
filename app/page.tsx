import type { Metadata } from "next";
import { PageLayout } from "../components/layout/PageLayout";
import { Hero } from "../components/sections/Hero";
import { MarqueeSection } from "../components/sections/MarqueeSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { ProcessSection } from "../components/sections/ProcessSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { PortfolioSection } from "../components/sections/PortfolioSection";
import { FinalCtaSection } from "../components/sections/FinalCtaSection";
import { SectionScroller } from "../components/ui/SectionScroller";

const BASE_URL = "https://codeinnova.com";

export const metadata: Metadata = {
  title: "Agencia de desarrollo web y software a medida en Tarragona | Code Innova",
  description:
    "Code Innova, agencia de desarrollo web y software a medida en Tarragona. Creamos aplicaciones web, tiendas online, SaaS y soluciones cloud. +10 años de experiencia. Consultoría gratuita.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    url: BASE_URL,
    title: "Code Innova | Desarrollo web y software a medida en Tarragona",
    description:
      "Agencia especializada en desarrollo web, software a medida, e-commerce y servidores cloud. Más de 10 años acelerando negocios digitales desde Tarragona.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "Code Innova",
  image: `${BASE_URL}/logo.png`,
  url: BASE_URL,
  telephone: undefined,
  email: "info@codeinnova.es",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tarragona",
    addressRegion: "Cataluña",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.1189,
    longitude: 1.2445,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
  description:
    "Agencia de desarrollo web y software a medida en Tarragona. Especializados en aplicaciones web, e-commerce, SaaS y servidores cloud con más de 10 años de experiencia.",
  knowsAbout: [
    "Desarrollo web",
    "Software a medida",
    "E-commerce",
    "Aplicaciones SaaS",
    "Servidores Cloud",
    "Next.js",
    "React",
    "Spring Boot",
    "AWS",
    "Google Cloud",
  ],
};

export default function HomePage() {
  return (
    <PageLayout>
      <SectionScroller />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <MarqueeSection text="CODE · INNOVA ·" speed="slow" variant="dark" />
      <AboutSection />
      <ServicesSection />
      <MarqueeSection
        text="Desarrollo Web · Software · E-commerce · Servidores Cloud ·"
        speed="normal"
        variant="dark"
      />
      <ProcessSection />
      <TestimonialsSection />
      <PortfolioSection />
      <FinalCtaSection />
    </PageLayout>
  );
}
