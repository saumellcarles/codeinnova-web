export interface ServiceFeature {
  text: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  headline: string;
  description: string;
  category: string;
  accentFrom: string;
  accentTo: string;
  features: string[];
  pitch1Title: string;
  pitch1Text: string;
  pitch2Title: string;
  pitch2Text: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  faqs: ServiceFaq[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "aplicaciones-web",
    title: "Aplicaciones web",
    tagline: "Desarrollo integral",
    headline: "Desarrollo de aplicaciones web a medida, con arquitecturas modernas y escalables",
    description:
      "Ofrecemos un servicio completo de desarrollo de aplicaciones web a medida, diseñado para cubrir todas las etapas del proceso: desde el diseño de la arquitectura y la implementación de bases de datos, hasta el desarrollo del frontend/backend y el despliegue seguro en la nube. Nos encargamos de crear soluciones escalables, seguras y optimizadas, adaptadas a las necesidades específicas de tu negocio. Utilizamos tecnologías modernas y buenas prácticas DevOps para asegurar un rendimiento óptimo y una entrega continua.",
    category: "Aplicaciones",
    accentFrom: "from-indigo-400",
    accentTo: "to-blue-400",
    features: [
      "Desarrollo frontend responsive",
      "Modelado y gestión de bases de datos",
      "Análisis de requerimientos y diseño técnico",
      "Desarrollo backend con APIs seguras y escalables",
      "CI/CD en Cloud",
      "Mantenimiento y soporte post lanzamiento",
    ],
    pitch1Title: "Compromiso total y confianza con nuestros clientes",
    pitch1Text:
      "Nos involucramos en cada proyecto como si fuera nuestro, comprendiendo en profundidad los objetivos y desafíos de cada cliente. Ofrecemos exactamente lo que necesitan, construyendo relaciones sólidas y duraderas basadas en la confianza, la transparencia y resultados medibles.",
    pitch2Title: "Aplicaciones web a medida, innovadoras y escalables",
    pitch2Text:
      "Diseñamos y desarrollamos aplicaciones web personalizadas que se ajustan con precisión a las necesidades de cada negocio. Combinamos visión tecnológica, estrategia clara y un trato cercano durante todo el proceso, desde la idea inicial hasta la evolución continua del producto.",
    seoTitle: "Desarrollo de aplicaciones web a medida en Tarragona | Code Innova",
    seoDescription:
      "Desarrollamos aplicaciones web a medida con arquitecturas modernas y escalables. Frontend responsive, backend con APIs seguras, bases de datos y CI/CD en cloud. +10 años de experiencia en Tarragona.",
    keywords: [
      "aplicaciones web a medida",
      "desarrollo aplicaciones web Tarragona",
      "aplicaciones SaaS",
      "desarrollo frontend backend",
      "arquitecturas escalables",
      "CI/CD cloud",
    ],
    faqs: [
      {
        question: "¿Qué es una aplicación web a medida?",
        answer:
          "Una aplicación web a medida es un software desarrollado específicamente para las necesidades de tu negocio, a diferencia de soluciones genéricas. Permite automatizar procesos, gestionar datos y ofrecer funcionalidades únicas que no existen en productos estándar.",
      },
      {
        question: "¿Cuánto cuesta desarrollar una aplicación web a medida?",
        answer:
          "El coste depende de la complejidad y funcionalidades requeridas. Las aplicaciones web a medida suelen partir desde 5.000€ para proyectos básicos y pueden superar los 20.000€ para sistemas complejos con integraciones avanzadas. Ofrecemos una consultoría gratuita para darte un presupuesto personalizado.",
      },
      {
        question: "¿Cuánto tiempo tarda en desarrollarse una aplicación web?",
        answer:
          "El tiempo de desarrollo varía según la complejidad. Un MVP (producto mínimo viable) puede estar listo en 8-12 semanas, mientras que aplicaciones más complejas pueden requerir 4-6 meses. Trabajamos con metodología ágil para entregar valor desde las primeras semanas.",
      },
      {
        question: "¿Qué tecnologías utilizáis para el desarrollo de aplicaciones web?",
        answer:
          "Utilizamos tecnologías modernas y probadas: Next.js y React para el frontend, Spring Boot o Node.js para el backend, PostgreSQL o MongoDB para bases de datos, y AWS o Google Cloud para el despliegue. Elegimos la stack más adecuada para cada proyecto.",
      },
    ],
  },
  {
    slug: "sitios-web",
    title: "Sitios web",
    tagline: "Diseño y desarrollo",
    headline: "Diseño y desarrollo web responsive profesional para impulsar tu presencia digital",
    description:
      "Ofrecemos un servicio completo de desarrollo de sitios web a medida, abarcando desde el diseño visual y la estructura de contenidos, hasta la configuración técnica, optimización para buscadores (SEO) y publicación en servidores seguros y rápidos. Todos nuestros sitios están diseñados para ser totalmente responsive, adaptándose a cualquier dispositivo —móvil, tablet o escritorio— para ofrecer la mejor experiencia de navegación a tus usuarios.",
    category: "Sitios web",
    accentFrom: "from-violet-400",
    accentTo: "to-indigo-400",
    features: [
      "Sitio web responsive para todos los dispositivos",
      "Diseño UI/UX optimizado para la conversión",
      "Optimización SEO desde el primer día",
      "Configuración de Hosting y DNS",
      "Instalación de herramientas esenciales",
      "Mantenimiento y soporte continuado",
    ],
    pitch1Title: "Compromiso y confianza en cada proyecto web",
    pitch1Text:
      "Nos implicamos en cada sitio web como si fuera propio, entendiendo a fondo los objetivos y desafíos de nuestros clientes. Ofrecemos soluciones precisas y personalizadas, construyendo relaciones duraderas basadas en la confianza, la transparencia y los resultados tangibles.",
    pitch2Title: "Sitios web a medida, innovadores y escalables",
    pitch2Text:
      "Diseñamos y desarrollamos sitios web que se ajustan perfectamente a las necesidades de cada negocio. Combinamos visión tecnológica, criterio estratégico y un enfoque cercano en todas las etapas, desde la idea inicial hasta la evolución continua del sitio.",
    seoTitle: "Diseño y desarrollo web profesional en Tarragona | Code Innova",
    seoDescription:
      "Diseño y desarrollo de sitios web profesionales en Tarragona. Responsive, optimizados para SEO, rápidos y seguros. Páginas corporativas, landing pages y portales web a medida con +10 años de experiencia.",
    keywords: [
      "diseño web Tarragona",
      "desarrollo web profesional",
      "sitios web a medida",
      "páginas web responsive",
      "SEO web Tarragona",
      "diseño web corporativo",
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta una página web profesional en Tarragona?",
        answer:
          "El coste de una página web profesional varía según las necesidades. Un sitio web corporativo básico puede costar desde 1.500€, mientras que proyectos más completos con múltiples secciones, blog y optimización SEO pueden llegar a 4.000-6.000€. Contacta con nosotros para un presupuesto sin compromiso.",
      },
      {
        question: "¿Cuánto tiempo tarda en estar lista mi página web?",
        answer:
          "El plazo habitual para un sitio web corporativo es de 2 a 4 semanas desde el inicio del proyecto, dependiendo de la cantidad de páginas y la disponibilidad de los contenidos por parte del cliente.",
      },
      {
        question: "¿Las webs que desarrolláis están optimizadas para SEO?",
        answer:
          "Sí, todas nuestras webs se desarrollan con optimización SEO desde el primer día: estructura semántica HTML5, velocidad de carga optimizada, metadatos correctos, sitemap y robots.txt, y buenas prácticas de Google Core Web Vitals.",
      },
      {
        question: "¿La web funcionará bien en móvil y tablet?",
        answer:
          "Absolutamente. Todas nuestras webs son 100% responsive y se adaptan a cualquier tamaño de pantalla: móvil, tablet y escritorio. También optimizamos el rendimiento en dispositivos móviles para una experiencia rápida.",
      },
    ],
  },
  {
    slug: "e-commerce",
    title: "E-commerce",
    tagline: "Diseño y desarrollo",
    headline: "Diseño y desarrollo de tiendas online para potenciar tus ventas digitales",
    description:
      "Ofrecemos un servicio completo de desarrollo de tiendas online a medida, que incluye desde el diseño visual atractivo y la estructura optimizada de productos, hasta la configuración técnica, integración de pasarelas de pago, y optimización SEO para posicionar tu e-commerce en buscadores. Además, garantizamos que tu tienda sea totalmente responsive, adaptándose a cualquier dispositivo para brindar una experiencia de compra fluida y satisfactoria a tus clientes.",
    category: "E-commerce",
    accentFrom: "from-orange-400",
    accentTo: "to-rose-400",
    features: [
      "Integración segura de pasarelas de pago (Stripe, RedSys)",
      "Optimización SEO específica para e-commerce",
      "Diseño UI/UX optimizado para la conversión",
      "Gestión avanzada de catálogo y stock",
      "Optimización de velocidad y rendimiento web",
      "Análisis y seguimiento de resultados",
    ],
    pitch1Title: "Compromiso y confianza en cada proyecto",
    pitch1Text:
      "Nos implicamos en cada tienda online como si fuera nuestra propia empresa, entendiendo a fondo los objetivos y retos específicos de cada cliente. Proporcionamos soluciones personalizadas que responden a sus necesidades reales, construyendo relaciones duraderas basadas en la confianza y la transparencia.",
    pitch2Title: "E-commerce a medida, innovador y escalable",
    pitch2Text:
      "Desarrollamos plataformas de e-commerce diseñadas para adaptarse a la evolución de tu negocio. Combinamos visión tecnológica con estrategia comercial y un acompañamiento cercano en todas las fases, desde la idea inicial hasta la optimización continua.",
    seoTitle: "Desarrollo de tiendas online y e-commerce en Tarragona | Code Innova",
    seoDescription:
      "Creamos tiendas online a medida en Tarragona con WooCommerce y soluciones personalizadas. Integración de Stripe y RedSys, SEO para e-commerce, diseño responsive y gestión de catálogo. Consultoría gratuita.",
    keywords: [
      "tienda online Tarragona",
      "desarrollo e-commerce",
      "WooCommerce a medida",
      "integración pasarela de pago",
      "Stripe Tarragona",
      "SEO e-commerce",
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta crear una tienda online?",
        answer:
          "El coste de una tienda online depende del número de productos y funcionalidades requeridas. Una tienda básica puede partir desde 2.500€ e incluye diseño, catálogo de productos, pasarela de pago y SEO básico. Para proyectos más complejos contacta con nosotros para un presupuesto personalizado.",
      },
      {
        question: "¿Qué pasarelas de pago podéis integrar?",
        answer:
          "Integramos las principales pasarelas de pago: Stripe, PayPal, Redsys (para pagos con tarjeta en España), Bizum y transferencia bancaria. También podemos integrar soluciones de pago aplazado como Klarna o Sequra.",
      },
      {
        question: "¿Puedo gestionar yo mismo los productos y pedidos?",
        answer:
          "Sí. Desarrollamos tiendas con paneles de administración intuitivos que permiten gestionar productos, stock, pedidos, clientes y cupones de descuento sin conocimientos técnicos. También ofrecemos formación y soporte tras el lanzamiento.",
      },
      {
        question: "¿El e-commerce estará optimizado para aparecer en Google?",
        answer:
          "Sí. Implementamos SEO técnico específico para e-commerce: URLs amigables, datos estructurados de producto, schema de precio y disponibilidad, optimización de imágenes, velocidad de carga y Core Web Vitals para que tus productos aparezcan en Google Shopping y búsquedas orgánicas.",
      },
    ],
  },
  {
    slug: "servidores-cloud",
    title: "Servidores Cloud",
    tagline: "Instalación y configuración",
    headline: "Servidores Cloud escalables y de alto rendimiento",
    description:
      "Ofrecemos soluciones de servidores cloud flexibles, seguras y escalables, ideales para alojar aplicaciones, sitios web o sistemas empresariales. Configuramos y gestionamos tu infraestructura en la nube para que tengas alto rendimiento, disponibilidad y control sin complicaciones.",
    category: "Cloud",
    accentFrom: "from-cyan-400",
    accentTo: "to-indigo-400",
    features: [
      "Servidores Cloud gestionados",
      "Implementación de certificados SSL",
      "Copias de seguridad automáticas",
      "Configuración de DNS y gestión de dominios",
      "Instalación y configuración de paneles de control",
      "Actualización y mantenimiento continuado",
    ],
    pitch1Title: "Compromiso total y confianza con nuestros clientes",
    pitch1Text:
      "Nos implicamos en cada implementación cloud como si fuera propia, entendiendo a fondo los objetivos y necesidades de cada proyecto. Brindamos soluciones a medida y construimos relaciones duraderas basadas en la confianza, la transparencia y la entrega constante de resultados.",
    pitch2Title: "Infraestructura cloud segura, escalable y de alto rendimiento",
    pitch2Text:
      "Diseñamos y gestionamos servidores cloud que se adaptan con precisión al crecimiento de tu negocio. Combinamos experiencia técnica, visión estratégica y un acompañamiento cercano para asegurar entornos fiables, flexibles y siempre disponibles.",
    seoTitle: "Servidores Cloud AWS y Google Cloud en Tarragona | Code Innova",
    seoDescription:
      "Configuración y gestión de servidores cloud escalables en AWS y Google Cloud. Certificados SSL, copias de seguridad, CI/CD y soporte continuado. Infraestructura segura y de alto rendimiento para tu negocio en Tarragona.",
    keywords: [
      "servidores cloud Tarragona",
      "AWS gestión",
      "Google Cloud configuración",
      "hosting cloud empresarial",
      "infraestructura cloud",
      "servidor dedicado España",
    ],
    faqs: [
      {
        question: "¿Qué es un servidor cloud gestionado?",
        answer:
          "Un servidor cloud gestionado es una infraestructura en la nube (AWS, Google Cloud o similar) donde nosotros nos encargamos de toda la configuración, seguridad, actualizaciones y monitorización. Tú solo te preocupas de tu negocio; nosotros gestionamos la tecnología.",
      },
      {
        question: "¿En qué proveedores cloud trabajáis?",
        answer:
          "Trabajamos principalmente con Amazon Web Services (AWS) y Google Cloud Platform (GCP). También podemos configurar servidores en DigitalOcean, Hetzner o cualquier proveedor VPS según los requerimientos del proyecto.",
      },
      {
        question: "¿Qué incluye el servicio de servidores cloud?",
        answer:
          "El servicio incluye configuración del servidor, instalación del sistema operativo y software necesario, certificados SSL, configuración de DNS y dominio, copias de seguridad automáticas, monitorización de disponibilidad y soporte ante incidencias.",
      },
      {
        question: "¿Podéis migrar mi servidor actual a la nube?",
        answer:
          "Sí, realizamos migraciones de servidores tradicionales o infraestructuras on-premise a la nube de forma segura y sin interrupciones del servicio. Planificamos cada migración con pruebas previas para garantizar la continuidad del negocio.",
      },
    ],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/** Resumen de servicios para la landing y menús. Orden: aplicaciones, sitios, e-commerce, cloud. */
export function getServicesSummary() {
  return SERVICES.map((s, i) => ({
    slug: s.slug,
    title: s.title,
    description: s.description,
    tag: String(i + 1).padStart(2, "0"),
    href: `/servicios/${s.slug}`,
  }));
}
