import type { MetadataRoute } from "next";
import { SERVICES } from "../lib/services-data";

const BASE_URL = "https://codeinnova.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE_URL}/servicios/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/consultoria-gratuita`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...serviceUrls,
  ];
}
