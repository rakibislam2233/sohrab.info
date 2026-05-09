import type { Metadata } from "next";
import Image from "next/image";
import { prisma } from "../../../lib/prisma";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
  });
  return { title: article?.title || "Article" };
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
  });
  if (!article) return <div className="container py-12">Article not found</div>;
  return (
    <main className="container py-12">
      <div className="mb-6">
        <Image
          src={article.coverImage}
          alt={article.title}
          width={1200}
          height={600}
          className="w-full h-96 object-cover rounded"
        />
      </div>
      <h1 className="text-4xl  mb-2">{article.title}</h1>
      <div className="text-sm text-gray-600 mb-6">
        {new Date(article.publishedAt).toLocaleDateString()} •{" "}
        {article.category}
      </div>
      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </main>
  );
}
