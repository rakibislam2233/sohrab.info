import { redirect } from "next/navigation";
import SignInForm from "../../../../components/admin/SignInForm";
import { auth } from "../../../../lib/auth";

export default async function AdminLogin() {
  const session = await auth();
  if (session) redirect("/admin");
  return (
    <main className="container py-12">
      <h1 className="text-2xl  mb-4">Admin Login</h1>
      <SignInForm />
    </main>
  );
}
