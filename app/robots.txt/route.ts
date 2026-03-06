import { NextResponse } from "next/server";

const BASE_URL = "https://codeinnova.es";

/**
 * robots.txt for SEO and AI crawlers.
 * Includes reference to llms.txt for AI systems.
 */
const DISALLOW = ["Disallow: /_next/", "Disallow: /api/"];

const CRAWLERS = [
  "*",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-Web",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "PerplexityBot",
  "Applebot-Extended",
  "FacebookBot",
];

export function GET() {
  const blocks = CRAWLERS.flatMap((ua) => [
    "",
    `User-agent: ${ua}`,
    "Allow: /",
    ...DISALLOW,
  ]);

  const lines = [
    "# robots.txt - CodeInnova",
    "# https://codeinnova.es",
    "",
    "# llms.txt: AI-optimized content (services, portfolio, contact)",
    `# ${BASE_URL}/llms.txt`,
    `LLMs: ${BASE_URL}/llms.txt`,
    ...blocks,
    "",
    `Sitemap: ${BASE_URL}/sitemap.xml`,
  ];

  return new NextResponse(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
