import fs from "node:fs";
import path from "node:path";

export type ArticleSegment = {
  kind: "paragraph" | "subheading" | "bold";
  text: string;
};

export type Article = {
  slug: string;
  title: string;
  eyebrow: string;
  excerpt: string;
  xUrl: string;
  readTime: string;
  segments: ArticleSegment[];
};

const articleSources = [
  {
    slug: "internet-got-personal",
    raw: fs.readFileSync(path.join(process.cwd(), "article-1.txt"), "utf8"),
    eyebrow: "Personal Internet",
    excerpt:
      "Why the web personalized everything except the interface itself, and why adaptive software changes that.",
    readTime: "8 min read",
    xUrl: "https://x.com/sara_nambiar/status/2068962143287067065",
  },
  {
    slug: "loop-engineering",
    raw: fs.readFileSync(path.join(process.cwd(), "article-2.txt"), "utf8"),
    eyebrow: "Mirage Systems",
    excerpt:
      "How Mirage uses observe, evaluate, prompt, verify, and remember loops to build adaptive websites.",
    readTime: "6 min read",
    xUrl: "https://x.com/sara_nambiar/status/2064429303895625747",
  },
  {
    slug: "codex-hyperframes",
    raw: fs.readFileSync(path.join(process.cwd(), "article-3.txt"), "utf8"),
    eyebrow: "Agent Workflows",
    excerpt:
      "What $500 of agent-driven video iteration taught me about production workflows, reference assets, and convergence.",
    readTime: "12 min read",
    xUrl: "https://x.com/sara_nambiar/status/2066181233571463519",
  },
];

function cleanText(text: string) {
  return text
    .replace(/\s*\(title\)/g, "")
    .replace(/\s*\(subheading\)/g, "")
    .replace(/\s*\(bold\)/g, "")
    .trim();
}

function parseArticle(source: (typeof articleSources)[number]): Article {
  const lines = source.raw.replace(/\r\n/g, "\n").split("\n");
  const title = cleanText(lines[0] ?? "");
  const segments: ArticleSegment[] = [];
  let buffer: string[] = [];

  function flush(kind: ArticleSegment["kind"] = "paragraph") {
    if (buffer.length === 0) {
      return;
    }

    const text = cleanText(buffer.join(" "));
    if (text) {
      segments.push({ kind, text });
    }
    buffer = [];
  }

  for (const line of lines.slice(1)) {
    const trimmed = line.trim();

    if (!trimmed) {
      flush();
      continue;
    }

    if (trimmed.endsWith("(subheading)")) {
      flush();
      buffer = [trimmed];
      flush("subheading");
      continue;
    }

    if (trimmed.endsWith("(bold)")) {
      flush();
      buffer = [trimmed];
      flush("bold");
      continue;
    }

    buffer.push(trimmed);
  }

  flush();

  return {
    slug: source.slug,
    title,
    eyebrow: source.eyebrow,
    excerpt: source.excerpt,
    xUrl: source.xUrl,
    readTime: source.readTime,
    segments,
  };
}

export function getArticles() {
  return articleSources.map(parseArticle);
}

export function getArticle(slug: string) {
  return getArticles().find((article) => article.slug === slug);
}

export function getArticleSlugs() {
  return articleSources.map((article) => article.slug);
}
