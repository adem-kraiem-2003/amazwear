import MobileHeader from "@/components/layout/MobileHeader";
import DesktopHeader from "@/components/layout/DesktopHeader";
import DesktopFooter from "@/components/layout/DesktopFooter";
import MobileProductDetail from "@/components/product/MobileProductDetail";
import DesktopProductDetail from "@/components/product/DesktopProductDetail";
import { getProduct, getProducts, getProductsBySlugs } from "@/lib/api";
import type { Product } from "@/lib/types";
import { notFound } from "next/navigation";
import "@/styles/mobile.css";
import "@/styles/desktop.css";

type Props = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const products = await getProducts();
    return products.map((p) => ({ id: p.id }));
  } catch {
    return [];
  }
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  let product: Product;
  try {
    product = await getProduct(id);
  } catch {
    notFound();
  }

  const relatedProducts = product.relatedIds?.length
    ? await getProductsBySlugs(product.relatedIds)
    : [];

  return (
    <>
      <div className="block lg:hidden">
        <MobileHeader />
        <MobileProductDetail product={product} relatedProducts={relatedProducts} />
      </div>
      <div className="hidden lg:block">
        <DesktopHeader />
        <DesktopProductDetail product={product} relatedProducts={relatedProducts} />
        <DesktopFooter />
      </div>
    </>
  );
}
