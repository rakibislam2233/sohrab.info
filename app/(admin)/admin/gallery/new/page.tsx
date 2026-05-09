import GalleryForm from "../../../../../components/admin/GalleryForm";

export const dynamic = "force-dynamic";

export default function NewGalleryPage() {
  return (
    <main className="container py-12">
      <h1 className="text-2xl  mb-4">New Gallery Photo</h1>
      <GalleryForm />
    </main>
  );
}
