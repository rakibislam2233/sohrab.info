import type { TravelStory } from "@prisma/client";
import Link from "next/link";
import DeleteButton from "../../../../components/admin/DeleteButton";
import { prisma } from "../../../../lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminTravel() {
  const items: TravelStory[] = await prisma.travelStory.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="container py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl ">Travel Stories</h1>
        <Link
          href="/admin/travel/new"
          className="bg-blush text-white px-4 py-2 rounded-full"
        >
          New Travel
        </Link>
      </div>
      <div className="space-y-4">
        {items.map((i) => (
          <div
            key={i.id}
            className="rounded-card p-4 flex justify-between items-center gap-4"
          >
            <div>
              <div className="font-semibold">{i.title}</div>
              <div className="text-sm text-gray-600">
                {i.slug} • {i.destination}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm">
                {i.isPublished ? "Published" : "Draft"}
              </div>
              <DeleteButton endpoint="/api/admin/travel" id={i.id} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
