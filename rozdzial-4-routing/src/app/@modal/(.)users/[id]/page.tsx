"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { USERS } from "../../../../data/users";

export default function UserModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);
  const user = USERS.find((u) => u.id === id);

  if (!user) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={() => router.back()}
    >
      <div
        className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl relative space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          ✕
        </button>
        <div className="flex items-center gap-4">
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-16 h-16 rounded-full border bg-gray-50"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-gray-600 text-sm">{user.role}</p>
          </div>
        </div>
        <div className="pt-2 border-t text-sm font-medium text-gray-700">
          <p>{user.likesPizza ? "Lubi pizzę" : "Nie lubi pizzy"}</p>
        </div>
      </div>
    </div>
  );
}
