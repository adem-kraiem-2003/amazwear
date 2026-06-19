import MobileHeader from "@/components/layout/MobileHeader";
import DesktopHeader from "@/components/layout/DesktopHeader";
import DesktopFooter from "@/components/layout/DesktopFooter";
import MobileCheckout from "@/components/checkout/MobileCheckout";
import DesktopCheckout from "@/components/checkout/DesktopCheckout";
import CheckoutSkeleton from "@/components/checkout/CheckoutSkeleton";
import DelayedRender from "@/components/shared/DelayedRender";
import "@/styles/mobile.css";

export default function CheckoutPage() {
  return (
    <>
      <div className="block lg:hidden">
        <MobileHeader />
        <div className="pt-24 pb-24">
          <DelayedRender fallback={<CheckoutSkeleton />}>
            <MobileCheckout />
          </DelayedRender>
        </div>
      </div>
      <div className="hidden lg:block">
        <DesktopHeader />
        <DelayedRender fallback={<CheckoutSkeleton />}>
          <DesktopCheckout />
        </DelayedRender>
        <DesktopFooter />
      </div>
    </>
  );
}
