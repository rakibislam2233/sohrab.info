import Link from "next/link";
import DeleteButton from "../../../../components/admin/DeleteButton";

export const dynamic = "force-dynamic";

const demoVoluntary = [
  {
    id: "1",
    title: "Relief Distribution Campaign 2020",
    organization: "Thakurgaon Govt. College Rover Scout Group",
    date: "Jan 14, 2020",
  },
  {
    id: "2",
    title: "Environmental Service Campaign",
    organization: "Bangladesh Scouts",
    date: "Jul 20, 2020",
  },
];

export default async function AdminVoluntary() {
  // Using demo data since database is not connected
  const items = demoVoluntary;

  return (
    <main className="container py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl ">Voluntary Work</h1>
        <Link
          href="/admin/voluntary/new"
          className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold"
        >
          New Project
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
                {i.organization} • {i.date}
              </div>
            </div>
            <DeleteButton endpoint="/api/admin/voluntary" id={i.id} />
          </div>
        ))}
      </div>
    </main>
  );
}
