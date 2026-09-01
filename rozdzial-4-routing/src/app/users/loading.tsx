export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {[1, 2, 3].map((n) => (
          <div key={n} className="border rounded-lg p-4 h-44 animate-pulse bg-gray-100" />
        ))}
      </div>
    </div>
  );
}
