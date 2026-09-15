"use client";

import { useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/src/types/Product";
import { Input } from "@/src/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Skeleton } from "@/src/components/ui/skeleton";

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const fetchProducts = async (search: string): Promise<Product[]> => {
  const url = search.trim()
    ? `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}`
    : "https://dummyjson.com/products";

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Nie udało się pobrać produktów");
  }
  const data: ProductsResponse = await res.json();
  return data.products;
};

export function ProductsList({ initialData }: { initialData: Product[] }) {
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", search],
    queryFn: () => fetchProducts(search),
    initialData: search === "" ? initialData : undefined,
  });

  return (
    <div className="w-full space-y-6">
      <div className="max-w-md">
        <Input
          type="text"
          placeholder="Szukaj produktów..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Card key={i} className="p-4 space-y-4">
                <Skeleton className="h-48 w-full rounded-md" />
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </Card>
            ))}
        </div>
      )}

      {isError && (
        <p className="text-destructive">Wystąpił błąd podczas ładowania produktów.</p>
      )}

      {data && data.length === 0 && !isLoading && (
        <p className="text-muted-foreground text-center py-12">Nie znaleziono produktów.</p>
      )}

      {data && data.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="w-full h-52 relative bg-muted/20 flex items-center justify-center p-4">
                {product.thumbnail ? (
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className="object-contain p-2"
                  />
                ) : (
                  <div className="text-muted-foreground text-sm">Brak zdjęcia</div>
                )}
              </div>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base font-semibold line-clamp-1">
                  {product.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground capitalize">
                  {product.category}
                </p>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-lg font-bold text-primary">
                  ${product.price.toFixed(2)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}