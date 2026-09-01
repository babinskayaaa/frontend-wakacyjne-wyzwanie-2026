import { notFound } from "next/navigation";
import Link from "next/link";
import { USERS } from "../../../data/users";

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = USERS.find((u) => u.id === id);

  if (!user) {
    notFound();
  }

  return (
    <div className="max-w-xl mx-auto bg-white border rounded-xl p-8 shadow-sm space-y-6">
      <Link href="/users" className="text-sm text-blue-600 hover:underline">
        ← Wróć do listy
      </Link>
      <div className="flex items-center gap-6">
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="w-24 h-24 rounded-full border bg-gray-50"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.role}</p>
          <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-gray-100 font-medium text-gray-700">
            {user.likesPizza ? "Lubi pizzę" : "Nie lubi pizzy"}
          </span>
        </div>
      </div>
    </div>
  );
}
