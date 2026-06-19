import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

export default function MobileCheckout() {
  return (
    <main className="flex-grow pt-24 px-margin-mobile pb-12 overflow-y-auto">
      <CheckoutForm />
      <div className="w-full h-px bg-surface-container my-8" />
      <OrderSummary compact />
    </main>
  );
}
