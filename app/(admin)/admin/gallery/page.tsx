import Image from "next/image";
import Link from "next/link";
import DeleteButton from "../../../../components/admin/DeleteButton";

export const dynamic = "force-dynamic";

const demoGallery = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=1000",
    category: "In Action",
    caption: "Field reporting at a remote location",
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1526660690293-bcd32dc3b123?auto=format&fit=crop&q=80&w=1000",
    category: "Scouts",
    caption: "Training camp session",
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=1000",
    category: "Nature",
    caption: "Oldest mango tree in Asia",
  },
];

export default async function AdminGallery() {
  // Using demo data since database is not connected
  const items = demoGallery;

  return (
    <main className="container py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl ">Gallery</h1>
        <Link
          href="/admin/gallery/new"
          className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold"
        >
          New Photo
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((i) => (
          <div key={i.id} className="rounded-xl overflow-hidden bg-white border border-gray-100 group">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={i.imageUrl}
                alt={i.caption || "photo"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col gap-3 text-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{i.category}</span>
              <div className="flex items-center gap-2">
                <Link
                  href={`/admin/gallery/edit/${i.id}`}
                  className="flex-1 text-center py-2 rounded-lg text-xs font-bold bg-gray-50 text-gray-900 hover:bg-black hover:text-white transition-all"
                >
                  Edit
                </Link>
                <DeleteButton endpoint="/api/admin/gallery" id={i.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
