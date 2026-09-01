import { UserProfileList } from "../../components/UserProfilesList";

export default async function UsersPage() {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Lista użytkowników</h1>
        <p className="text-gray-600 text-sm">Wybierz profil, aby zobaczyć szczegóły</p>
      </div>
      <UserProfileList />
    </div>
  );
}
