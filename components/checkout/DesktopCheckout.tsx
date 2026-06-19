"use client";

import { useState } from "react";
import PhosphorIcon from "@/components/shared/PhosphorIcon";

export default function DesktopCheckout() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const inputClass = "input-subtle font-body-md text-body-md text-on-surface w-full";

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-desktop py-12 flex flex-col md:flex-row gap-16">
      <div className="w-full md:w-[60%] flex flex-col gap-12">
        <section>
          <h2 className="font-headline-md text-headline-md text-primary mb-6">Contact Information</h2>
          <div className="flex flex-col gap-4">
            <input className={inputClass} placeholder="Email Address" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} />
            <input className={inputClass} placeholder="Phone Number" type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} />
          </div>
        </section>
        <section>
          <h2 className="font-headline-md text-headline-md text-primary mb-6">Shipping Details</h2>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <input className={inputClass} placeholder="First Name" value={formData.firstName} onChange={(e) => handleChange("firstName", e.target.value)} />
              <input className={inputClass} placeholder="Last Name" value={formData.lastName} onChange={(e) => handleChange("lastName", e.target.value)} />
            </div>
            <input className={inputClass} placeholder="Address" value={formData.address} onChange={(e) => handleChange("address", e.target.value)} />
            <input className={inputClass} placeholder="Apartment, suite, etc. (optional)" value={formData.apartment} onChange={(e) => handleChange("apartment", e.target.value)} />
            <div className="grid grid-cols-2 gap-4">
              <input className={inputClass} placeholder="City" value={formData.city} onChange={(e) => handleChange("city", e.target.value)} />
              <input className={inputClass} placeholder="State / Province" value={formData.state} onChange={(e) => handleChange("state", e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input className={inputClass} placeholder="ZIP / Postal Code" value={formData.zip} onChange={(e) => handleChange("zip", e.target.value)} />
            </div>
          </div>
        </section>
      </div>
      <div className="w-full md:w-[40%]">
        <div className="sticky top-8 bg-surface-container-lowest p-8 rounded-lg border border-surface-variant flex flex-col gap-8">
          <h2 className="font-headline-md text-headline-md text-primary">Order Summary</h2>
          <div className="flex gap-6 items-start border-b border-surface-variant pb-6">
            <div className="w-24 h-32 bg-surface-container rounded-DEFAULT overflow-hidden flex-shrink-0">
              <img
                alt="Luxe Ceramic Cup"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoJ6-so0OPxdUYLgumJ6802Lqvu59qzNSDVnDIA_ri2SjEDcXQUfJfk1cscmrrFA_fzwJYgEufsK5bRpMQ9hAQAT0FxmGAGloXi6IJX0I4-BSX0P0sI2OYeb3Rd4pu172vMQ2X-W_lEdO7GXX9WAxXafww1qSiWcEnB1_xuayqIia-Tdb1DZiSOq1wiepdDkF6d-eB_A9XnQsJ_NzcmZ1C74e8lJ-4TIklHIPP0AcqzGVN1hr06Dya2mh-d47ULG1Q8EommGi6sos"
              />
            </div>
            <div className="flex flex-col flex-grow justify-between h-full py-1">
              <div>
                <h3 className="font-body-md text-body-md font-semibold text-primary">Luxe Ceramic Cup</h3>
                <p className="font-body-md text-body-md text-secondary mt-1">Matte Black / Standard</p>
              </div>
              <p className="font-body-md text-body-md text-primary mt-4">$45.00</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 font-body-md text-body-md text-secondary">
            <div className="flex justify-between"><span>Subtotal</span><span className="text-primary">$45.00</span></div>
            <div className="flex justify-between"><span>Shipping</span><span className="text-primary">$4.05</span></div>
            <div className="flex justify-between"><span>Taxes</span><span className="text-primary">$0.00</span></div>
            <div className="flex justify-between font-semibold text-primary pt-4 border-t border-surface-variant text-body-lg">
              <span>Total</span><span>$49.05</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <button className="w-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest py-4 rounded-DEFAULT hover:opacity-90 transition-opacity scale-98 active:scale-95">
              Complete Order
            </button>
            <div className="flex items-center justify-center gap-2 text-secondary font-label-sm text-label-sm">
              <PhosphorIcon icon="lock" size={16} />
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .input-subtle {
          border: none;
          border-bottom: 1px solid #cfc4c5;
          background-color: transparent;
          border-radius: 0;
          padding: 12px 0;
          transition: border-color 0.2s ease;
        }
        .input-subtle:focus {
          outline: none;
          border-bottom-color: #000000;
          box-shadow: none;
        }
        .input-subtle::placeholder {
          color: #7e7576;
        }
      `}</style>
    </main>
  );
}
