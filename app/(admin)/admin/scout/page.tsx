import Link from "next/link";
import { prisma } from "../../../../lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminScout() {
  const items = await prisma.scoutActivity.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="container py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl ">Scout Activities</h1>
        <Link
          href="/admin/scout/new"
          className="bg-blush text-white px-4 py-2 rounded-full"
        >
          New Activity
        </Link>
      </div>
      <div className="space-y-4">
        {items.map((i) => (
          <div
            key={i.id}
            className="rounded-card p-4 flex justify-between items-center"
          >
            <div>
              <div className="font-semibold">{i.title}</div>
              <div className="text-sm text-gray-600">
                {new Date(i.eventDate).toLocaleDateString()} • {i.location}
              </div>
            </div>
            <div className="text-sm">{i.rank || "-"}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
