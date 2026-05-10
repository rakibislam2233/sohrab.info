import Link from "next/link";
// Final fix for Achievement type error
import DeleteButton from "../../../../components/admin/DeleteButton";
export const dynamic = "force-dynamic";

const demoAchievements = [
  {
    id: "1",
    title: "Best Regional Scout Leader",
    issuedBy: "Bangladesh Scouts",
    issuedDate: "2022",
    category: "Scouting",
  },
  {
    id: "2",
    title: "Excellence in Community Reporting",
    issuedBy: "Journalism Association",
    issuedDate: "2021",
    category: "Journalism",
  },
  {
    id: "3",
    title: "Outstanding Youth Mentor",
    issuedBy: "Youth Development Forum",
    issuedDate: "2023",
    category: "Leadership",
  },
];

export default async function AdminAchievements() {
  // Using demo data since database is not connected
  const items = demoAchievements;

  return (
    <main className="container py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl ">Achievements</h1>
        <Link
          href="/admin/achievements/new"
          className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold"
        >
          New Achievement
        </Link>
      </div>
      <div className="space-y-4">
        {items.map((i) => (
          <div
            key={i.id}
            className="bg-white rounded-xl p-4 flex justify-between items-center gap-4 border border-gray-100"
          >
            <div>
              <div className="font-bold text-gray-900">{i.title}</div>
              <div className="text-xs text-gray-500">
                {i.issuedBy} • {i.issuedDate}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{i.category}</div>
              <DeleteButton endpoint="/api/admin/achievements" id={i.id} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
