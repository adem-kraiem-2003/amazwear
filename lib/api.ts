import type { Product, Category, OrderPayload, OrderResult } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}/api${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body?.error ?? `API error ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export async function getProducts(category?: string): Promise<Product[]> {
  const params = new URLSearchParams({ page_size: "200" });
  if (category && category !== "all") params.set("category", category);
  const data = await apiFetch<{ results: Product[] }>(
    `/products/?${params}`,
    { next: { revalidate: 60 } }
  );
  return data.results;
}

export async function getProduct(slug: string): Promise<Product> {
  return apiFetch<Product>(`/products/${slug}/`, { next: { revalidate: 60 } });
}

export async function getCategories(): Promise<Category[]> {
  return apiFetch<Category[]>("/categories/", { next: { revalidate: 300 } });
}

export async function searchProducts(q: string): Promise<Product[]> {
  const data = await apiFetch<{ results: Product[] }>(
    `/search/?q=${encodeURIComponent(q)}`,
    { next: { revalidate: 30 } }
  );
  return data.results;
}

export async function createOrder(payload: OrderPayload): Promise<OrderResult> {
  try {
    return await apiFetch<OrderResult>("/orders/", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  } catch (err) {
    return { success: false, error: err };
  }
}
