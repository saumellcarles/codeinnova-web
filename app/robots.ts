import type { MetadataRoute } from "next";

const BASE_URL = "https://codeinnova.es";

/**
 * robots.txt para SEO y crawlers de IA.
 * Permite indexación para buscadores y visibilidad en respuestas de IAs.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // SEO: permitir todos los crawlers estándar
      {
        userAgent: "*",
        allow: "/",
      },
      // OpenAI
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      // Anthropic / Claude
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      // Google (Gemini)
      { userAgent: "Google-Extended", allow: "/" },
      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      // Apple Intelligence
      { userAgent: "Applebot-Extended", allow: "/" },
      // Meta
      { userAgent: "FacebookBot", allow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
