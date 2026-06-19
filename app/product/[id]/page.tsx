import MobileHeader from "@/components/layout/MobileHeader";
import DesktopHeader from "@/components/layout/DesktopHeader";
import DesktopFooter from "@/components/layout/DesktopFooter";
import MobileProductDetail from "@/components/product/MobileProductDetail";
import DesktopProductDetail from "@/components/product/DesktopProductDetail";
import MobileProductSkeleton from "@/components/product/MobileProductSkeleton";
import DesktopProductSkeleton from "@/components/product/DesktopProductSkeleton";
import DelayedRender from "@/components/shared/DelayedRender";
import { getProduct, getProducts } from "@/lib/api";
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

  const allProducts = product.relatedIds?.length
    ? await getProducts()
    : [];
  const relatedProducts = allProducts.filter((p) =>
    product.relatedIds?.includes(p.id)
  );

  return (
    <>
      <div className="block lg:hidden">
        <MobileHeader />
        <DelayedRender fallback={<MobileProductSkeleton />}>
          <MobileProductDetail product={product} relatedProducts={relatedProducts} />
        </DelayedRender>
      </div>
      <div className="hidden lg:block">
        <DesktopHeader />
        <DelayedRender fallback={<DesktopProductSkeleton />}>
          <DesktopProductDetail product={product} relatedProducts={relatedProducts} />
        </DelayedRender>
        <DesktopFooter />
      </div>
    </>
  );
}
