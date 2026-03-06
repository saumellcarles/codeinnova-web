import { NextResponse } from "next/server";

const BASE_URL = "https://codeinnova.es";

/**
 * robots.txt for SEO and AI crawlers.
 * Includes reference to llms.txt for AI systems.
 */
export function GET() {
  const lines = [
    "# robots.txt - Code Innova",
    "# https://codeinnova.es",
    "",
    "# llms.txt: AI-optimized content (services, portfolio, contact)",
    `# ${BASE_URL}/llms.txt`,
    `LLMs: ${BASE_URL}/llms.txt`,
    "",
    "User-agent: *",
    "Allow: /",
    "",
    "User-agent: GPTBot",
    "Allow: /",
    "",
    "User-agent: OAI-SearchBot",
    "Allow: /",
    "",
    "User-agent: ChatGPT-User",
    "Allow: /",
    "",
    "User-agent: Claude-Web",
    "Allow: /",
    "",
    "User-agent: ClaudeBot",
    "Allow: /",
    "",
    "User-agent: anthropic-ai",
    "Allow: /",
    "",
    "User-agent: Google-Extended",
    "Allow: /",
    "",
    "User-agent: PerplexityBot",
    "Allow: /",
    "",
    "User-agent: Applebot-Extended",
    "Allow: /",
    "",
    "User-agent: FacebookBot",
    "Allow: /",
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
