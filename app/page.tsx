import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageLayout } from "@/components/layout/PageLayout";
import { Hero } from "@/components/sections/Hero";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { SectionScroller } from "@/components/ui/SectionScroller";
import {
  faqSchema,
  aggregateRatingSchema,
  localBusinessSchema,
} from "@/lib/schemas/home-page";

const PortfolioSection = dynamic(
  () => import("@/components/sections/PortfolioSection").then((m) => ({ default: m.PortfolioSection })),
  { ssr: true }
);

const BASE_URL = "https://codeinnova.es";

export const metadata: Metadata = {
  title: "Especialistas en desarrollo web y software a medida en Tarragona",
  description:
    "Code Innova, especialistas en desarrollo web y software a medida en Tarragona. Creamos aplicaciones web, tiendas online, SaaS y soluciones cloud. +10 años de experiencia. Consultoría gratuita.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    url: BASE_URL,
    title: "CodeInnova | Especialistas en desarrollo web y software a medida en Tarragona",
    description:
      "Especialistas en desarrollo web, software a medida, e-commerce y servidores cloud. Más de 10 años acelerando negocios digitales desde Tarragona.",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "CodeInnova | Especialistas en desarrollo web y software a medida en Tarragona" }],
  },
};

export default function HomePage() {
  return (
    <PageLayout>
      <SectionScroller />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
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
