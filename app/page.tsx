import MobileHeader from "@/components/layout/MobileHeader";
import DesktopHeader from "@/components/layout/DesktopHeader";
import DesktopFooter from "@/components/layout/DesktopFooter";
import MobileCatalogue from "@/components/catalogue/MobileCatalogue";
import DesktopCatalogue from "@/components/catalogue/DesktopCatalogue";
import { getProducts, getCategories } from "@/lib/api";
import "@/styles/mobile.css";
import "@/styles/desktop.css";

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    getProducts().catch(() => []),
    getCategories().catch(() => []),
  ]);

  return (
    <>
      <div className="block lg:hidden">
        <MobileHeader />
        <div className="pt-16 pb-24">
          <MobileCatalogue products={products} categories={categories} />
        </div>
      </div>
      <div className="hidden lg:block">
        <DesktopHeader />
        <DesktopCatalogue products={products} categories={categories} />
        <DesktopFooter />
      </div>
    </>
  );
}
