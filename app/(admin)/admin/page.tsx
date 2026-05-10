import Link from "next/link";
import { auth } from "../../../lib/auth";
import { prisma } from "../../../lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const session = await auth();
  if (!session)
    return (
      <main className="container py-12">
        You must <Link href="/admin/login">login</Link> to access the admin
        dashboard.
      </main>
    );

  // Static counts for demo purposes since database is not connected
  const articlesCount = 3;
  const travelCount = 3;
  const scoutCount = 3;
  const galleryCount = 7;

  return (
    <main className="container py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <Link href="/admin/articles" className="rounded-card p-4">
          <div className="text-sm">Articles</div>
          <div className="text-2xl font-semibold">{articlesCount}</div>
        </Link>
        <Link href="/admin/travel" className="rounded-card p-4">
          <div className="text-sm">Travel Stories</div>
          <div className="text-2xl font-semibold">{travelCount}</div>
        </Link>
        <Link href="/admin/scout" className="rounded-card p-4">
          <div className="text-sm">Scout Activities</div>
          <div className="text-2xl font-semibold">{scoutCount}</div>
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/admin/gallery" className="rounded-card p-4">
          Gallery ({galleryCount})
        </Link>
        <Link href="/admin/achievements" className="rounded-card p-4">
          Achievements
        </Link>
        <Link href="/admin/personal" className="rounded-card p-4">
          Personal Info
        </Link>
      </div>
    </main>
  );
}
