import MobileHeader from "@/components/layout/MobileHeader";
import DesktopHeader from "@/components/layout/DesktopHeader";
import DesktopFooter from "@/components/layout/DesktopFooter";
import MobileCatalogue from "@/components/catalogue/MobileCatalogue";
import DesktopCatalogue from "@/components/catalogue/DesktopCatalogue";
import MobileCatalogueSkeleton from "@/components/catalogue/MobileCatalogueSkeleton";
import DesktopCatalogueSkeleton from "@/components/catalogue/DesktopCatalogueSkeleton";
import DelayedRender from "@/components/shared/DelayedRender";
import { getProducts } from "@/lib/api";
import "@/styles/mobile.css";
import "@/styles/desktop.css";

export default async function HomePage() {
  const products = await getProducts().catch(() => []);

  return (
    <>
      <div className="block lg:hidden">
        <MobileHeader />
        <div className="pt-16 pb-24">
          <DelayedRender fallback={<MobileCatalogueSkeleton />}>
            <MobileCatalogue products={products} />
          </DelayedRender>
        </div>
      </div>
      <div className="hidden lg:block">
        <DesktopHeader />
        <DelayedRender fallback={<DesktopCatalogueSkeleton />}>
          <DesktopCatalogue products={products} />
        </DelayedRender>
        <DesktopFooter />
      </div>
    </>
  );
}
