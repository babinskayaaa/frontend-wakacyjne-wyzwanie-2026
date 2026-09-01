import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-center py-16 space-y-6">
      <h1 className="text-4xl font-extrabold tracking-tight">
        Witaj w Katalogu Użytkowników
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        Aplikacja demonstracyjna prezentująca App Router, dynamiczne ścieżки oraz zaawansowane wzorce routingu w Next.js.
      </p>
      <div>
        <Link href="/users" className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Przejdź do listy użytkowników
        </Link>
      </div>
    </div>
  );
}