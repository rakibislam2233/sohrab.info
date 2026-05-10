import Link from "next/link";
import PublishToggle from "../../../../components/admin/PublishToggle";
export const dynamic = "force-dynamic";

const demoArticles = [
  {
    id: "1",
    title: "Transformation of Primary Education: A Journey to the Roots",
    slug: "primary-education",
    views: 1240,
    isPublished: true,
  },
  {
    id: "2",
    title: "Commercial Mango Farming Success in Northern Districts",
    slug: "mango-farming",
    views: 856,
    isPublished: true,
  },
  {
    id: "3",
    title: "Relief Distribution to 4,700 Families During Crisis",
    slug: "relief-2020",
    views: 2105,
    isPublished: false,
  },
];

export default async function AdminArticles() {
  // Using demo data since database is not connected
  const articles = demoArticles;

  return (
    <main className="container py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl ">Articles</h1>
        <Link
          href="/admin/articles/new"
          className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold"
        >
          New Article
        </Link>
      </div>
      <div className="space-y-4">
        {articles.map((a) => (
          <div
            key={a.id}
            className="bg-white rounded-xl p-4 flex justify-between items-center gap-4 border border-gray-100"
          >
            <div>
              <div className="font-bold text-gray-900">{a.title}</div>
              <div className="text-xs text-gray-500">{a.slug}</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{a.views} views</div>
              <PublishToggle id={a.id} initial={a.isPublished} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
