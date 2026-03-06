import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageLayout } from "../components/layout/PageLayout";
import { Hero } from "../components/sections/Hero";
import { MarqueeSection } from "../components/sections/MarqueeSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { ProcessSection } from "../components/sections/ProcessSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { FinalCtaSection } from "../components/sections/FinalCtaSection";
import { SectionScroller } from "../components/ui/SectionScroller";

const PortfolioSection = dynamic(
  () => import("../components/sections/PortfolioSection").then((m) => ({ default: m.PortfolioSection })),
  { ssr: true }
);

const BASE_URL = "https://codeinnova.es";

export const metadata: Metadata = {
  title: "Especialistas en desarrollo web y software a medida en Tarragona | Code Innova",
  description:
    "Code Innova, especialistas en desarrollo web y software a medida en Tarragona. Creamos aplicaciones web, tiendas online, SaaS y soluciones cloud. +10 años de experiencia. Consultoría gratuita.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    url: BASE_URL,
    title: "Code Innova | Desarrollo web y software a medida en Tarragona",
    description:
      "Especialistas en desarrollo web, software a medida, e-commerce y servidores cloud. Más de 10 años acelerando negocios digitales desde Tarragona.",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Code Innova — Especialistas en desarrollo web en Tarragona" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué servicios ofrece Code Innova?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Code Innova ofrece desarrollo de aplicaciones web a medida, diseño y desarrollo de sitios web corporativos y landing pages, tiendas online (e-commerce) con integración de Stripe y RedSys, y configuración de servidores cloud en AWS y Google Cloud. También ofrecemos consultoría tecnológica gratuita sin compromiso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde está ubicada Code Innova?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Code Innova está ubicada en Tarragona, España. Trabajamos con clientes de toda España y ofrecemos reuniones presenciales o por videollamada según la preferencia del cliente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta desarrollar una aplicación web o tienda online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El coste varía según la complejidad del proyecto. Un sitio web corporativo puede partir desde 1.500€, una tienda online desde 2.500€ y una aplicación web a medida desde 5.000€. Ofrecemos una consultoría gratuita de 30 minutos donde analizamos tu proyecto y te damos un presupuesto personalizado sin compromiso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda en desarrollarse una web o aplicación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los plazos dependen del alcance del proyecto. Un sitio web corporativo puede estar listo en 2-4 semanas, una tienda online en 4-8 semanas y una aplicación web a medida entre 8-16 semanas. Establecemos hitos claros y plazos comprometidos desde el inicio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Ofrecéis mantenimiento y soporte después del lanzamiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, ofrecemos planes de mantenimiento y soporte continuado que incluyen actualizaciones de seguridad, copias de seguridad, monitorización y soporte técnico. También realizamos evoluciones del producto según las necesidades del negocio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puedo solicitar un presupuesto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes reservar una consultoría gratuita de 30 minutos directamente desde nuestra web. También puedes contactarnos por email a info@codeinnova.es. Sin compromiso ni coste.",
      },
    },
  ],
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Code Innova",
  url: BASE_URL,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "5",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Anna" },
      reviewBody:
        "Muy contentos con los resultados de nuestra nueva página web y ecommerce. Mucha iniciativa, rapidez y resolución. Recomiendo 100% sus servicios, tanto por su trato cercano como por la calidad del trabajo final.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      itemReviewed: { "@type": "Organization", name: "Code Innova" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sebas" },
      reviewBody: "Gran trabajo realizado. Profesional, próximo y atento a los detalles.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      itemReviewed: { "@type": "Organization", name: "Code Innova" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jesús" },
      reviewBody:
        "Fácil, rápido y efectivo. Carles es un gran profesional. Nos ayudó mucho a arrancar con nuestro club deportivo. 100% recomendable!!",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      itemReviewed: { "@type": "Organization", name: "Code Innova" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jose Antonio" },
      reviewBody:
        "Estamos muy satisfechos con el servicio que hemos recibido. Sin lugar a dudas, volveríamos a trabajar con ellos en el futuro. Han demostrado una gran atención a nuestras necesidades.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      itemReviewed: { "@type": "Organization", name: "Code Innova" },
    },
  ],
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
    "Especialistas en desarrollo web y software a medida en Tarragona. Aplicaciones web, e-commerce, SaaS y servidores cloud con más de 10 años de experiencia.",
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
