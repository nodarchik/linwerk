import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/blog/ArticleView";
import { PageFx } from "@/components/fx/PageFx";
import { PageScope } from "@/components/layout/PageScope";
import { ARTICLES, getArticle } from "@/data/articles";

// Only the slugs below exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const article = getArticle((await params).slug);
  return article
    ? {
        title: { absolute: `${article.title} · Linwerk` },
        description: article.summary,
      }
    : {};
}

export default async function ArticlePage({ params }: PageProps<"/blog/[slug]">) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const next = ARTICLES[(ARTICLES.indexOf(article) + 1) % ARTICLES.length];

  return (
    <>
      <PageScope page="article" />
      <main>
        <ArticleView article={article} next={next} />
      </main>
      <PageFx appear />
    </>
  );
}
