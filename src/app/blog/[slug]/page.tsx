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
  if (!article) return {};
  // The preview image is the article picture as a JPEG beside the WebP (chat apps reject WebP).
  const image = article.img.replace(/\.webp$/, ".jpg");
  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      type: "article",
      siteName: "Linwerk",
      title: article.title,
      description: article.summary,
      url: `/blog/${article.slug}`,
      images: [{ url: image, width: 1200, height: 600, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [image],
    },
  };
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
