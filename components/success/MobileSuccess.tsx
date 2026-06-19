import Link from "next/link";

export default function MobileSuccess() {
  return (
    <main className="flex-1 w-full flex flex-col items-center justify-center max-w-sm mx-auto mt-12 mb-8 px-margin-mobile">
      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-8 shadow-sm relative">
        <svg className="w-10 h-10 text-on-primary absolute" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path className="mobile-check" d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      </div>
      <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary mb-3 text-center">Confirmed.</h1>
      <p className="font-body-md text-body-md text-secondary text-center max-w-[280px] mb-10">
        Your order has been placed. We will send an email with your shipping details shortly.
      </p>
      <div className="w-full border-t border-b border-surface-container py-4 flex flex-col items-center justify-center mb-10">
        <span className="font-label-sm text-label-sm text-secondary uppercase mb-1">Order Number</span>
        <span className="font-headline-md text-headline-md text-primary">LX-84729</span>
      </div>
      <div className="w-full bg-surface-container-lowest rounded-lg p-3 border border-surface-container flex items-center gap-4 mb-12 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <div className="w-16 h-20 bg-surface-variant flex-shrink-0 overflow-hidden relative">
          <img
            alt="Order item thumbnail"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcUFOqp3M_FtnAYvxWV8gA0TIv1XNKjvftQgwJyZB_-k3sw4vh6cMdHpBedJXasxMCKSZSKi45gjRC9uhnIYAW-DM9Ik_pkUC4HK1QPe1mjnflIIKjZHmwy6G5cYTwr1QVHH4d34S9ig-0IZRXfAIjb8RWgh-40ilffZ95RdGk_twnTrQJADCZdz6zWwk7Al-Sy2xnip5cGK_GwDgU4g7RSCKewJ6qBQA9jN6fKtHAONSm1WqUGqpilZl6ztCiCdmmYu9CSu7m2n0"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-1 block">Oversized Linen Shirt</span>
          <span className="font-label-sm text-label-sm text-secondary block mb-2">Color: Bone | Size: M</span>
          <span className="font-body-md text-body-md text-primary">$145.00</span>
        </div>
      </div>
      <div className="w-full max-w-sm mx-auto flex flex-col gap-3 mt-auto pb-4">
        <Link href="/" className="w-full h-12 bg-primary text-on-primary rounded font-label-sm text-label-sm uppercase tracking-widest flex items-center justify-center active:scale-98 transition-transform duration-200">
          Return to Catalog
        </Link>
        <Link href="#" className="w-full h-12 bg-transparent text-primary rounded font-label-sm text-label-sm uppercase tracking-widest flex items-center justify-center hover:underline active:scale-98 transition-transform duration-200">
          View Order Status
        </Link>
      </div>
    </main>
  );
}
