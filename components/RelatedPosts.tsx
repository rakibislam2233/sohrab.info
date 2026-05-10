import Image from "next/image";
import Link from "next/link";
import { prisma } from "../lib/prisma";

export default async function RelatedPosts({
  category,
  excludeId,
}: {
  category: string;
  excludeId?: string;
}) {
  const items = await prisma.article.findMany({
    where: { category: category },
    take: 3,
  });
  return (
    <section className="mt-12">
      <h3 className=" text-2xl mb-4">Related Posts</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((i: any) => (
          <Link
            href={`/journalism/${i.slug}`}
            key={i.id}
            className="rounded-card p-3"
          >
            <div className="mb-2">
              <Image
                src={i.coverImage}
                alt={i.title}
                width={400}
                height={260}
                className="object-cover w-full h-40 rounded"
              />
            </div>
            <div className="font-semibold">{i.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
