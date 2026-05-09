import TravelForm from "../../../../../components/admin/TravelForm";

export const dynamic = "force-dynamic";

export default function NewTravelPage() {
  return (
    <main className="container py-12">
      <h1 className="text-2xl  mb-4">New Travel Story</h1>
      <TravelForm />
    </main>
  );
}
