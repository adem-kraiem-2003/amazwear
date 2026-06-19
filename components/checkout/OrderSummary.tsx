type Props = {
  compact?: boolean;
};

export default function OrderSummary({ compact = false }: Props) {
  return (
    <section className={`bg-surface-container-low rounded-lg p-6 flex flex-col gap-8 ${compact ? "" : "border border-surface-variant p-8"}`}>
      <h2 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Order Summary</h2>
      <div className={`flex gap-4 ${compact ? "items-start" : "items-start border-b border-surface-variant pb-6"}`}>
        <div className="w-20 h-24 bg-surface-container flex-shrink-0 rounded bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbzt_t31ar2DL_dKoRe9Ow280OKV1NdBYv6dhrFCB67OKGkS_jhDg5ZoxfmnKq7r91y3US-8qmULBGOZR7-NpS9xi6TKnpG-9A4hKdgCnoAxdYG2ta1Nk-lYcrFrqg-QzZRpeSDuEZy0lfvojWkb6vGRdWBKXQWFuNOWiw42_7ZVNI4nXsxZGAuFbI4NwhBupUY-LrkXXttjdBSrYVFwNCv1qcn0YRK_xq4wOQ3DjSLeLPLEqBaCDk1KuHW1YfsmzEQFZ432hyBqA')" }} />
        <div className="flex flex-col justify-between py-1">
          <div>
            <h3 className="font-body-md text-body-md text-primary font-medium">Luxe Ceramic Cup</h3>
            <p className="font-body-md text-body-md text-secondary mt-1">Matte Black / Standard</p>
          </div>
          <span className="font-body-md text-body-md text-primary font-medium">$45.00</span>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between font-body-md text-body-md text-secondary">
          <span>Subtotal</span>
          <span className={compact ? "text-primary" : "text-primary"}>$45.00</span>
        </div>
        <div className="flex justify-between font-body-md text-body-md text-secondary">
          <span>Shipping</span>
          <span className={compact ? "text-primary" : "text-primary"}>$5.00</span>
        </div>
        <div className="flex justify-between font-body-md text-body-md text-primary font-medium pt-2 mt-2 border-t border-surface-container">
          <span>Total</span>
          <span>$50.00</span>
        </div>
      </div>
    </section>
  );
}
