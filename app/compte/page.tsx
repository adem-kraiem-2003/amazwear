import MobileHeader from "@/components/layout/MobileHeader";
import DesktopHeader from "@/components/layout/DesktopHeader";
import DesktopFooter from "@/components/layout/DesktopFooter";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import MobileAccount from "@/components/account/MobileAccount";
import DesktopAccount from "@/components/account/DesktopAccount";
import DelayedRender from "@/components/shared/DelayedRender";
import "@/styles/mobile.css";

function AccountSkeleton() {
  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="h-10 w-48 shimmer rounded mb-4" />
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex justify-between items-center py-4 border-b border-surface-container">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 shimmer rounded" />
              <div className="h-4 w-40 shimmer rounded" />
            </div>
            <div className="w-5 h-5 shimmer rounded" />
          </div>
        ))}
      </div>
      <div className="mt-8 h-12 shimmer rounded" />
    </div>
  );
}

export default function AccountPage() {
  return (
    <>
      <div className="block lg:hidden">
        <MobileHeader />
        <div className="pt-16 pb-24">
          <DelayedRender fallback={<AccountSkeleton />}>
            <MobileAccount />
          </DelayedRender>
        </div>
      </div>
      <div className="hidden lg:block">
        <DesktopHeader />
        <DelayedRender fallback={<AccountSkeleton />}>
          <DesktopAccount />
        </DelayedRender>
        <DesktopFooter />
      </div>
    </>
  );
}
