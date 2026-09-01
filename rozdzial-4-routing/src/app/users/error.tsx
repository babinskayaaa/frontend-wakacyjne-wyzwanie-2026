"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center py-12 space-y-4">
      <h2 className="text-2xl font-bold text-red-600">Coś poszło nie tak!</h2>
      <p className="text-gray-600 text-sm">{error.message || "Nie udało się załadować danych."}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Spróbuj ponownie
      </button>
    </div>
  );
}