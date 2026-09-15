import { Skeleton } from "@/src/components/ui/skeleton";
export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full py-8">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 border rounded-xl shadow-sm space-y-4"
          >
            <Skeleton className="h-24 w-24 rounded-full" />
            <Skeleton className="h-5 w-3/4 rounded-md" />
            <Skeleton className="h-4 w-1/2 rounded-md" />
            <Skeleton className="h-9 w-28 rounded-md mt-2" />
          </div>
        ))}
    </div>
  );
}