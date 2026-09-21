import { cache } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, getProducts } from "@/lib/products";
import { ProductDetails } from "@/components/product-details";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

const getCachedProduct = cache(async (id: string) => {
  return getProduct(id);
});

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getCachedProduct(id);

  if (!product) return {};

  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: `/products/${product.id}`,
    },
    openGraph: {
      title: product.title,
      description: product.description,
      type: "article",
      images: product.thumbnail ? [{ url: product.thumbnail }] : [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getCachedProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12">
      <ProductDetails product={product} />
    </main>
  );
}