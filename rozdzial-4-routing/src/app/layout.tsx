import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solvro Next.js App",
  description: "Aplikacja z routingiem w Next.js",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="bg-slate-50 text-slate-900 min-h-screen">
        <header className="bg-white border-b shadow-sm sticky top-0 z-40">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-blue-600">
              SolvroApp
            </Link>
            <nav className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Strona główna
              </Link>
              <Link href="/users" className="hover:text-blue-600 transition-colors">
                Użytkownicy
              </Link>
            </nav>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-8">
          {children}
          {modal}
        </main>
      </body>
    </html>
  );
}
