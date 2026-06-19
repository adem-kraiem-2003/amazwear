import Link from "next/link";
import SuccessAnimation from "./SuccessAnimation";

export default function DesktopSuccess() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center px-margin-desktop py-24">
      <div className="w-full max-w-[600px] flex flex-col items-center text-center">
        <SuccessAnimation />
        <h1 className="font-display-lg text-display-lg text-primary mb-4">Confirmed</h1>
        <p className="font-body-lg text-body-lg text-secondary mb-12">
          Your order has been placed successfully. A confirmation email has been sent to your registered address.
        </p>
        <div className="w-full bg-surface rounded-lg border border-surface-container p-8 mb-12 text-left flex flex-col md:flex-row gap-8 items-start">
          <div className="w-24 h-32 bg-surface-container-low shrink-0 relative overflow-hidden rounded">
            <img
              alt="Oversized Linen Shirt in Bone"
              className="w-full h-full object-cover object-center absolute inset-0 mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnUSGBaFGPxHsO4LNKdwgsaKIBB-wwr18mkqYZBEq_h2ErAH48IT1OZrI72kcy8z9K0j-hpYxItfygsYUau-V25NHDxwKomZZHJCq86KMHzD2KodKyYCH68u_BsB0LtVV26knpDJPqUOVlaqzs3isz0e049VPVqM7mXQiMbkkaznWMbr2guplR4WCnQFzCjfVPVgDebf_914DNsxwVR9abXPmQu4YfuTdud1vlaohgEllGCpr9aqN9Npa-CM7v4l6cNuARinJ4prI"
            />
          </div>
          <div className="flex-grow flex flex-col justify-between h-full">
            <div>
              <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">Order LX-84729</div>
              <h2 className="font-headline-md text-headline-md text-primary mb-1">Oversized Linen Shirt</h2>
              <p className="font-body-md text-body-md text-secondary">Color: Bone &nbsp;|&nbsp; Size: M</p>
            </div>
            <div className="mt-4 font-headline-md text-headline-md text-primary">$145.00</div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/" className="bg-primary text-on-primary font-label-sm text-label-sm tracking-widest uppercase py-4 px-8 rounded flex-1 md:flex-none hover:bg-surface-tint transition-colors text-center">
            Return to Catalog
          </Link>
          <Link href="#" className="bg-transparent border border-primary text-primary font-label-sm text-label-sm tracking-widest uppercase py-4 px-8 rounded flex-1 md:flex-none hover:bg-surface-container-low transition-colors text-center">
            View Order Status
          </Link>
        </div>
      </div>
    </main>
  );
}
