import Link from "next/link";
import PublishToggle from "../../../../components/admin/PublishToggle";
import { prisma } from "../../../../lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminArticles() {
  const articles = await prisma.article.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="container py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl ">Articles</h1>
        <Link
          href="/admin/articles/new"
          className="bg-blush text-white px-4 py-2 rounded-full"
        >
          New Article
        </Link>
      </div>
      <div className="space-y-4">
        {articles.map(
          (a: {
            id: string;
            title: string;
            slug: string;
            views: number;
            isPublished: boolean;
          }) => (
            <div
              key={a.id}
              className="rounded-card p-4 flex justify-between items-center"
            >
              <div>
                <div className="font-semibold">{a.title}</div>
                <div className="text-sm text-gray-600">{a.slug}</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm">{a.views} views</div>
                <PublishToggle id={a.id} initial={a.isPublished} />
              </div>
            </div>
          ),
        )}
      </div>
    </main>
  );
}
