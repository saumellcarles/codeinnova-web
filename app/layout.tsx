import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import Script from "next/script";
import { PageLoader } from "../components/ui/PageLoader";
import { MotionProvider } from "../components/ui/MotionProvider";
import { CookieBanner } from "../components/ui/CookieBanner";

const BASE_URL = "https://codeinnova.es";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Code Innova | Especialistas en desarrollo web y software a medida en Tarragona",
    template: "%s | Code Innova",
  },
  description:
    "Especialistas en desarrollo web y software a medida en Tarragona. Creamos aplicaciones web, e-commerce, SaaS y soluciones cloud escalables. +10 años de experiencia.",
  keywords: [
    "desarrollo web Tarragona",
    "especialistas desarrollo software",
    "software a medida",
    "desarrollo web a medida",
    "aplicaciones SaaS",
    "e-commerce",
    "tienda online",
    "servidores cloud",
    "Next.js",
    "React",
    "Code Innova",
    "codeinnova",
    "especialistas desarrollo web Tarragona",
    "consultoría tecnológica",
  ],
  authors: [{ name: "Code Innova", url: BASE_URL }],
  creator: "Code Innova",
  publisher: "Code Innova",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: { "es-ES": BASE_URL },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: BASE_URL,
    siteName: "Code Innova",
    title: "Code Innova | Especialistas en desarrollo web y software a medida en Tarragona",
    description:
      "Especialistas en desarrollo web y software a medida en Tarragona. Creamos aplicaciones web, e-commerce, SaaS y soluciones cloud escalables. +10 años de experiencia.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Code Innova — Especialistas en desarrollo web en Tarragona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@codeinnova",
    title: "Code Innova | Desarrollo web y software a medida en Tarragona",
    description:
      "Especialistas en desarrollo web y software a medida en Tarragona. +10 años creando soluciones digitales escalables.",
    images: [`${BASE_URL}/og-image.png`],
    creator: "@codeinnova",
  },
  verification: {
    google: "",
  },
  other: {
    "theme-color": "#ffffff",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Code Innova",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Especialistas en desarrollo web y software a medida en Tarragona. Aplicaciones web, e-commerce, SaaS y servidores cloud.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tarragona",
    addressCountry: "ES",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@codeinnova.es",
    contactType: "customer support",
    availableLanguage: ["Spanish"],
  },
  sameAs: [
    "https://www.linkedin.com/company/codeinnova",
    "https://www.instagram.com/codeinnova",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Code Innova",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://code.tidio.co" />
        <link rel="dns-prefetch" href="https://code.tidio.co" />
        <link rel="preconnect" href="https://cal.eu" />
        <link rel="dns-prefetch" href="https://cal.eu" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[300] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-gray-900 focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>
        <Theme appearance="light" accentColor="indigo" radius="large" scaling="100%">
          <MotionProvider>
            <PageLoader />
            {children}
            <CookieBanner />
          </MotionProvider>
        </Theme>
        <Script
          src="//code.tidio.co/pfkcjjg4h0abuxcb95ahb4hsuigjulv2.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
