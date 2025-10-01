import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div className="text-center mt-20">Veuillez vous connecter.</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2 text-gray-600">Bienvenue {session.user?.email}</p>
      <div className="mt-6 p-4 border rounded bg-white shadow">
        <p>Aucun audit lancé pour le moment.</p>
      </div>
    </div>
  );
}
