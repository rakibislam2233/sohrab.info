import { Calendar, Newspaper } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "../../lib/prisma";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return { title: "Journalism — Sohrab Hossan" };
}

export default async function JournalismPage() {
  const articles = await prisma.article.findMany({
    where: { isPublished: true },
    orderBy: { publishedAt: "desc" },
    take: 12,
  });

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Journalism
          </h1>
          <p className="text-xl text-gray-500">
            Professional reporting and feature writing with a focus on
            agriculture, education, and current affairs in Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((a) => (
            <Link
              key={a.id}
              href={`/journalism/${a.slug}`}
              className="group block"
            >
              <article className="h-full flex flex-col">
                <div className="relative aspect-16/10 mb-6 overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={a.coverImage}
                    alt={a.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                      <Newspaper className="w-3 h-3" />
                      {a.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 font-medium">
                  <Calendar className="w-3 h-3" />
                  {new Date(a.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>

                <h3 className=" text-2xl leading-tight mb-4 group-hover:text-pink-600 transition-colors">
                  {a.title}
                </h3>

                <p className="text-gray-500 leading-relaxed line-clamp-3 mb-6">
                  {a.excerpt}
                </p>

                <div className="mt-auto flex items-center text-sm font-bold gap-2 group-hover:translate-x-2 transition-transform">
                  Read Story
                  <span className="text-xl">→</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
