import Link from "next/link";
import DeleteButton from "../../../../components/admin/DeleteButton";

export const dynamic = "force-dynamic";

const demoTravel = [
  {
    id: "1",
    title: "The Ancient Suryapuri Mango Tree",
    slug: "suryapuri-mango-tree",
    destination: "Thakurgaon, BD",
    isPublished: true,
  },
  {
    id: "2",
    title: "Historical Temples of Dinajpur",
    slug: "dinajpur-temples",
    destination: "Dinajpur, BD",
    isPublished: true,
  },
  {
    id: "3",
    title: "Serene Tea Gardens of Sylhet",
    slug: "sylhet-tea-gardens",
    destination: "Sylhet, BD",
    isPublished: false,
  },
];

export default async function AdminTravel() {
  // Using demo data since database is not connected
  const items = demoTravel;

  return (
    <main className="container py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl ">Travel Stories</h1>
        <Link
          href="/admin/travel/new"
          className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold"
        >
          New Travel
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
                {i.slug} • {i.destination}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className={`text-[10px] font-bold uppercase tracking-widest ${i.isPublished ? "text-green-600" : "text-gray-400"}`}>
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
