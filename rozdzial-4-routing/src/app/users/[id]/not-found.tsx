import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-16 space-y-4">
      <h2 className="text-3xl font-bold text-gray-800">Użytkownik nie został znaleziony</h2>
      <p className="text-gray-500">Profil o podanym identyfikatorze nie istnieje w bazie.</p>
      <div>
        <Link
          href="/users"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Powrót do listy użytkowników
        </Link>
      </div>
    </div>
  );
}