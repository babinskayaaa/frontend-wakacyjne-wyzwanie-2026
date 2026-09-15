import { AddProductForm } from "./AddProductForm";
import { ProductsList } from "./ProductsList";
import { ProductsResponse } from "@/src/types/Product";

export const dynamic = "force-dynamic";

async function getInitialProducts(): Promise<ProductsResponse> {
  try {
    const res = await fetch("https://dummyjson.com/products", {
      cache: "no-store",
    });
    if (!res.ok) {
      return { products: [], total: 0, skip: 0, limit: 0 };
    }
    return res.json();
  } catch {
    return { products: [], total: 0, skip: 0, limit: 0 };
  }
}

export default async function ProductsPage() {
  const initialData = await getInitialProducts();

  return (
    <main className="container mx-auto p-6 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">Katalog Produktów</h1>
      <AddProductForm />
      <ProductsList initialData={initialData.products} />
    </main>
  );
}