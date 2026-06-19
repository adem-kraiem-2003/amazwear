"use client";

import { useState } from "react";
import PhosphorIcon from "@/components/shared/PhosphorIcon";
import { useCartStore } from "@/stores/cart-store";
import { createOrder } from "@/lib/api";

export default function CheckoutForm() {
  const cartItems = useCartStore((s) => s.cartItems);
  const removeItem = useCartStore((s) => s.removeItem);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    governorate: "",
    city: "",
    address: "",
    note: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const validate = () => {
    const errs: Record<string, boolean> = {};
    if (!formData.fullName.trim()) errs.fullName = true;
    if (!formData.phone.trim() || !/\d/.test(formData.phone)) errs.phone = true;
    if (!formData.governorate) errs.governorate = true;
    if (!formData.city.trim()) errs.city = true;
    if (!formData.address.trim()) errs.address = true;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: false }));
    if (apiError) setApiError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || processing) return;
    if (cartItems.length === 0) {
      setApiError("Your cart is empty.");
      return;
    }

    setProcessing(true);
    setApiError(null);

    const result = await createOrder({
      ...formData,
      cartItems: cartItems.map((item) => ({
        id: item.id,
        color: item.color,
        size: item.size,
        quantity: item.quantity,
        price: item.price,
      })),
    });

    setProcessing(false);

    if (result.success) {
      cartItems.forEach((item) => removeItem(item.id, item.color, item.size));
      setConfirmed(true);
    } else {
      const msg =
        typeof result.error === "string"
          ? result.error
          : "An error occurred. Please try again.";
      setApiError(msg);
    }
  };

  const inputClass = (field: string) =>
    `input-underline w-full font-body-md text-body-md text-primary placeholder-outline-variant ${
      errors[field] ? "error" : ""
    }`;

  if (confirmed) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
          <PhosphorIcon icon="check" className="text-on-primary" fill={1} size={24} />
        </div>
        <h2 className="font-headline-md text-headline-md text-primary mb-2">Order Confirmed</h2>
        <p className="font-body-md text-body-md text-secondary">Thank you for your purchase.</p>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <section className="space-y-6">
        <h2 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4">Shipping Details</h2>
        <div className="relative">
          <input
            className={inputClass("fullName")}
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            disabled={processing}
          />
          {errors.fullName && <span className="text-error font-label-sm text-[10px] absolute -bottom-4 left-0">Name is required</span>}
        </div>
        <div className="relative">
          <input
            className={inputClass("phone")}
            placeholder="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            disabled={processing}
          />
          {errors.phone && <span className="text-error font-label-sm text-[10px] absolute -bottom-4 left-0">Valid phone number required</span>}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <select
              className={inputClass("governorate")}
              value={formData.governorate}
              onChange={(e) => handleChange("governorate", e.target.value)}
              disabled={processing}
            >
              <option value="">Governorate</option>
              <option value="Alger">Alger</option>
              <option value="Oran">Oran</option>
              <option value="Constantine">Constantine</option>
              <option value="Annaba">Annaba</option>
              <option value="Blida">Blida</option>
              <option value="Tlemcen">Tlemcen</option>
              <option value="Sétif">Sétif</option>
              <option value="Béjaïa">Béjaïa</option>
              <option value="Tizi Ouzou">Tizi Ouzou</option>
              <option value="Batna">Batna</option>
            </select>
            {errors.governorate && <span className="text-error font-label-sm text-[10px] absolute -bottom-4 left-0">Select region</span>}
          </div>
          <div className="relative">
            <input
              className={inputClass("city")}
              placeholder="City"
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              disabled={processing}
            />
            {errors.city && <span className="text-error font-label-sm text-[10px] absolute -bottom-4 left-0">City required</span>}
          </div>
        </div>
        <div className="relative">
          <input
            className={inputClass("address")}
            placeholder="Street Address &amp; Apt/Suite"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
            disabled={processing}
          />
          {errors.address && <span className="text-error font-label-sm text-[10px] absolute -bottom-4 left-0">Address required</span>}
        </div>
        <div className="relative">
          <input
            className="input-underline w-full font-body-md text-body-md text-primary placeholder-outline-variant"
            placeholder="Delivery Note (Optional)"
            value={formData.note}
            onChange={(e) => handleChange("note", e.target.value)}
            disabled={processing}
          />
        </div>
      </section>
      {apiError && (
        <p className="text-error font-body-md text-body-md text-sm">{apiError}</p>
      )}
      <button
        type="submit"
        disabled={processing}
        className={`w-full h-12 rounded font-body-md text-body-md font-medium flex items-center justify-center transition-all duration-200 ${
          processing
            ? "processing-bg text-on-primary"
            : "bg-primary text-on-primary active:scale-98"
        }`}
      >
        <span>{processing ? "Processing..." : "Complete Order"}</span>
        {processing && (
          <PhosphorIcon icon="progress_activity" className="animate-spin ml-2" size={16} />
        )}
      </button>
      <style jsx>{`
        .input-underline {
          border: none;
          border-bottom: 1px solid #eeeeee;
          background-color: transparent;
          padding: 12px 0;
          transition: border-color 0.2s ease;
        }
        .input-underline:focus {
          outline: none;
          border-bottom: 1px solid #000000;
          box-shadow: none;
        }
        .input-underline.error {
          border-bottom: 1px solid #ba1a1a;
        }
        select.input-underline {
          appearance: none;
          padding-right: 24px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23000000'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right center;
          background-size: 16px;
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .processing-bg {
          animation: shimmer 2s infinite linear;
          background: linear-gradient(to right, #000 4%, #333 25%, #000 36%);
          background-size: 1000px 100%;
        }
      `}</style>
    </form>
  );
}
