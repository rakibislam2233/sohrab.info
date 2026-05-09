import PersonalForm from "../../../../components/admin/PersonalForm";

export default function AdminPersonalPage() {
  return (
    <main className="container py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl ">Personal Info</h1>
      </div>
      <div className="max-w-2xl">
        <PersonalForm />
      </div>
    </main>
  );
}
