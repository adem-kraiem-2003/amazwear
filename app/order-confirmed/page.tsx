import MobileHeader from "@/components/layout/MobileHeader";
import DesktopHeader from "@/components/layout/DesktopHeader";
import DesktopFooter from "@/components/layout/DesktopFooter";
import MobileSuccess from "@/components/success/MobileSuccess";
import DesktopSuccess from "@/components/success/DesktopSuccess";
import DelayedRender from "@/components/shared/DelayedRender";
import "@/styles/mobile.css";

function SuccessSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4">
      <div className="w-20 h-20 shimmer rounded-full mb-8" />
      <div className="h-12 w-48 shimmer rounded mb-4" />
      <div className="h-4 w-72 shimmer rounded mb-12" />
      <div className="w-full max-w-sm h-24 shimmer rounded-lg mb-8" />
      <div className="w-64 h-12 shimmer rounded" />
    </div>
  );
}

export default function OrderConfirmedPage() {
  return (
    <>
      <div className="block lg:hidden">
        <MobileHeader />
        <DelayedRender fallback={<SuccessSkeleton />}>
          <MobileSuccess />
        </DelayedRender>
      </div>
      <div className="hidden lg:block">
        <DesktopHeader />
        <DelayedRender fallback={<SuccessSkeleton />}>
          <DesktopSuccess />
        </DelayedRender>
        <DesktopFooter />
      </div>
    </>
  );
}
