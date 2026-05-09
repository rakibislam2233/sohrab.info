import VoluntaryForm from "../../../../../components/admin/VoluntaryForm";

export const dynamic = "force-dynamic";

export default function NewVoluntaryPage() {
  return (
    <main className="container py-12">
      <h1 className="text-2xl  mb-4">New Voluntary Work</h1>
      <VoluntaryForm />
    </main>
  );
}
