const BASE_URL = "https://codeinnova.es";

export const SITE = {
  name: "CodeInnova",
  url: BASE_URL,
  locale: "es_ES",
  defaultTitle: "Especialistas en desarrollo web y software a medida en Tarragona",
} as const;

export function buildServiceMetadata(service: {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  title: string;
}) {
  const url = `${BASE_URL}/servicios/${service.slug}`;
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: [
      ...service.keywords,
      "Tarragona",
      "CodeInnova",
      "especialistas desarrollo web",
      "consultoría gratuita",
    ],
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large" as const,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: `CodeInnova | ${service.seoTitle}`,
      description: service.seoDescription,
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `CodeInnova | ${service.title} en Tarragona`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `CodeInnova | ${service.seoTitle}`,
      description: service.seoDescription,
    },
  };
}

export function buildServiceSchema(service: {
  slug: string;
  title: string;
  description: string;
}) {
  const url = `${BASE_URL}/servicios/${service.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    description: service.description,
    url,
    provider: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: SITE.name,
      url: BASE_URL,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 41.1189,
        longitude: 1.2445,
      },
      geoRadius: "50000",
    },
    serviceType: service.title,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "EUR",
      url: `${BASE_URL}/consultoria-gratuita`,
    },
  };
}

export function buildConsultoriaMetadata() {
  const url = `${BASE_URL}/consultoria-gratuita`;
  return {
    title: "Consultoría Gratuita Desarrollo Web y Software",
    description:
      "Reserva tu consultoría gratuita de 30 min con CodeInnova. Especialistas en desarrollo web, aplicaciones a medida, e-commerce y servidores cloud en Tarragona. Sin compromiso.",
    keywords: [
      "consultoría gratuita desarrollo web",
      "consultoría gratuita Tarragona",
      "presupuesto desarrollo software Tarragona",
      "contacto especialistas web Tarragona",
      "consultoría tecnológica gratis",
      "asesoramiento desarrollo web",
      "CodeInnova contacto",
    ],
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large" as const,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: "CodeInnova | Consultoría Gratuita Desarrollo Web y Software",
      description:
        "Reserva 30 min gratis. Analizamos tu proyecto de desarrollo web o software y te damos una hoja de ruta clara. Sin compromiso.",
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "CodeInnova | Consultoría gratuita desarrollo web Tarragona",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "CodeInnova | Consultoría Gratuita Desarrollo Web y Software",
      description:
        "Reserva 30 min gratis. Especialistas en desarrollo web y software en Tarragona.",
    },
  };
}

export function buildConsultoriaSchema() {
  const url = `${BASE_URL}/consultoria-gratuita`;
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#contact`,
    name: "Consultoría gratuita — CodeInnova",
    url,
    description:
      "Reserva una consultoría gratuita de 30 minutos con CodeInnova para analizar tu proyecto de desarrollo web, aplicaciones a medida, e-commerce o servidores cloud. Sin compromiso.",
    mainEntity: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: SITE.name,
      email: "info@codeinnova.es",
      url: BASE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tarragona",
        addressRegion: "Cataluña",
        addressCountry: "ES",
      },
    },
    about: {
      "@type": "Offer",
      name: "Consultoría tecnológica gratuita",
      description:
        "30 minutos de asesoramiento sin coste para analizar tu proyecto digital",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url,
    },
  };
}
