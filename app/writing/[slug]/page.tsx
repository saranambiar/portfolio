import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, getArticleSlugs } from "@/lib/articles";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: "Writing · Sara Nambiar",
    };
  }

  return {
    title: `${article.title} · Sara Nambiar`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="site-shell min-h-screen bg-[var(--background)] text-[var(--ink)]">
      <article className="mx-auto max-w-[820px] px-6 py-8 sm:py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/#writing"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ink)] shadow-[0_4px_14px_rgba(26,26,26,0.035)] transition-colors hover:border-[var(--coral)] hover:text-[var(--coral)]"
          >
            <span aria-hidden="true">←</span>
            Back to writing
          </Link>
          <a
            href={article.xUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--muted)] shadow-[0_4px_14px_rgba(26,26,26,0.035)] transition-colors hover:border-[var(--coral)] hover:text-[var(--coral)]"
          >
            Originally published on X
          </a>
        </div>

        <header className="rounded-[24px] border border-[var(--border)] bg-white p-7 shadow-[0_1px_2px_rgba(26,26,26,0.04),0_10px_30px_rgba(26,26,26,0.04)] sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--ink)] shadow-[0_4px_14px_rgba(26,26,26,0.035)]">
              <span className="h-2 w-2 rounded-full bg-[var(--coral)]" />
              {article.eyebrow}
            </span>
            <span className="rounded-full bg-[rgba(168,196,188,0.22)] px-3 py-1.5 text-xs font-semibold text-[var(--muted)]">
              {article.readTime}
            </span>
            <span className="rounded-full bg-[rgba(232,118,90,0.12)] px-3 py-1.5 text-xs font-semibold text-[var(--muted)]">
              Written by me
            </span>
          </div>
          <h1 className="mt-7 max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--ink)] sm:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            {article.excerpt}
          </p>
        </header>

        <div className="mx-auto mt-8 max-w-[680px] space-y-6 text-lg leading-[1.75] text-[var(--muted)]">
          {article.segments.map((segment, index) => {
            if (segment.kind === "subheading") {
              return (
                <h2
                  key={`${segment.text}-${index}`}
                  className="pt-7 text-2xl font-semibold leading-tight tracking-[-0.035em] text-[var(--ink)]"
                >
                  {segment.text}
                </h2>
              );
            }

            if (segment.kind === "bold") {
              return (
                <p key={`${segment.text}-${index}`} className="font-semibold text-[var(--ink)]">
                  {segment.text}
                </p>
              );
            }

            return <p key={`${segment.text}-${index}`}>{segment.text}</p>;
          })}
        </div>
      </article>
    </main>
  );
}
