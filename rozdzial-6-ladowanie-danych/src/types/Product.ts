export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail?: string;
  description?: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}