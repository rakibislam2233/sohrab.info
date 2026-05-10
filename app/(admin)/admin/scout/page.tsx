import Link from "next/link";

export const dynamic = "force-dynamic";

const demoScout = [
  {
    id: "1",
    title: "Rover Scout Leader Training",
    eventDate: "2021-11-01",
    location: "Dhaka, Bangladesh",
    rank: "Rover Scout Leader",
  },
  {
    id: "2",
    title: "National Scout Jamboree",
    eventDate: "2019-01-15",
    location: "Gazipur, Bangladesh",
    rank: "District Representative",
  },
  {
    id: "3",
    title: "Community Clean-up Initiative",
    eventDate: "2020-03-20",
    location: "Thakurgaon",
    rank: "Group Leader",
  },
];

export default async function AdminScout() {
  // Using demo data since database is not connected
  const items = demoScout;

  return (
    <main className="container py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl ">Scout Activities</h1>
        <Link
          href="/admin/scout/new"
          className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold"
        >
          New Activity
        </Link>
      </div>
      <div className="space-y-4">
        {items.map((i) => (
          <div
            key={i.id}
            className="bg-white rounded-xl p-4 flex justify-between items-center border border-gray-100"
          >
            <div>
              <div className="font-bold text-gray-900">{i.title}</div>
              <div className="text-xs text-gray-500">
                {new Date(i.eventDate).toLocaleDateString()} • {i.location}
              </div>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{i.rank || "-"}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
