"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/stores/auth-store";
import PhosphorIcon from "@/components/shared/PhosphorIcon";

const SECTIONS = ["overview", "orders", "personal", "addresses", "security"] as const;
type Section = (typeof SECTIONS)[number];

const NAV_ITEMS: { id: Section; icon: string; label: string }[] = [
  { id: "overview", icon: "grid_view", label: "Overview" },
  { id: "orders", icon: "receipt_long", label: "Order History" },
  { id: "personal", icon: "person", label: "Personal Info" },
  { id: "addresses", icon: "location_on", label: "Addresses" },
  { id: "security", icon: "shield", label: "Security" },
];

export default function DesktopAccount() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  const [section, setSection] = useState<Section>("overview");

  if (!user) {
    router.push("/auth");
    return null;
  }

  const switchSection = (id: Section) => {
    setSection(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-margin-desktop h-20">
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="font-body-md text-body-md tracking-tight text-on-secondary-container hover:text-primary transition-colors duration-200">
            New Arrivals
          </Link>
          <Link href="/" className="font-body-md text-body-md tracking-tight text-on-secondary-container hover:text-primary transition-colors duration-200">
            Collection
          </Link>
          <a className="font-body-md text-body-md tracking-tight text-on-secondary-container hover:text-primary transition-colors duration-200" href="#">
            Editorial
          </a>
        </nav>
        <Link href="/" className="font-headline-md text-headline-md tracking-[0.2em] font-black text-primary absolute left-1/2 transform -translate-x-1/2">
          LUXE
        </Link>
        <div className="flex gap-6 items-center">
          <button className="scale-98 active:scale-95 transition-transform hover:text-primary text-on-secondary-container" aria-label="Search">
            <PhosphorIcon icon="search" />
          </button>
          <button className="scale-98 active:scale-95 transition-transform hover:text-primary text-on-secondary-container" aria-label="Shopping bag">
            <PhosphorIcon icon="shopping_bag" />
          </button>
          <button className="scale-98 active:scale-95 transition-transform text-primary border-b border-primary pb-1" aria-label="Account">
            <PhosphorIcon icon="person" fill={1} />
          </button>
        </div>
      </header>

      <div className="flex flex-1 relative">
        <aside className="fixed left-0 top-20 h-[calc(100vh-80px)] flex flex-col py-12 px-8 bg-surface-bright border-r border-outline-variant w-64 hidden md:flex flex-col z-40">
          <div className="mb-12">
            <div className="w-16 h-16 rounded-full bg-surface-container-highest overflow-hidden mb-4 flex items-center justify-center">
              <PhosphorIcon icon="person" size={32} className="text-secondary" />
            </div>
            <h2 className="font-headline-md text-headline-md text-primary mb-1">{user.name}</h2>
            <p className="font-label-sm text-label-sm text-on-secondary-container tracking-widest uppercase">
              {user.memberTier} Member
            </p>
          </div>

          <nav className="flex flex-col gap-1 flex-1">
            {NAV_ITEMS.map((item) => {
              const isActive = section === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => switchSection(item.id)}
                  className={`flex items-center gap-4 py-2 w-full text-left font-label-sm text-label-sm uppercase tracking-widest transition-all ${
                    isActive
                      ? "text-primary border-l-2 border-primary pl-4 font-semibold"
                      : "text-secondary border-l-2 border-transparent pl-4 hover:text-primary"
                  }`}
                >
                  <PhosphorIcon icon={item.icon} fill={isActive ? 1 : 0} size={20} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => { logout(); router.push("/auth"); }}
            className="mt-8 w-full h-11 bg-transparent border border-outline text-primary font-label-sm text-label-sm uppercase tracking-widest rounded flex items-center justify-center gap-2 hover:bg-surface-container transition-colors active:scale-98"
          >
            <PhosphorIcon icon="logout" size={18} />
            Sign Out
          </button>
        </aside>

        <main className="flex-1 md:ml-64 px-margin-desktop py-12 bg-background min-h-[calc(100vh-80px)]">
          {section === "overview" && (
            <section>
              <div className="mb-16">
                <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
                  Welcome back, {user.name.split(" ")[0]}.
                </h1>
                <p className="font-body-lg text-body-lg text-on-secondary-container max-w-2xl">
                  Here is an overview of your recent activity and account details.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex justify-between items-end border-b border-outline-variant pb-4">
                    <h3 className="font-headline-md text-headline-md text-primary">Recent Orders</h3>
                    <button onClick={() => switchSection("orders")} className="font-label-sm text-label-sm uppercase tracking-widest text-on-secondary-container hover:text-primary transition-colors">
                      View All
                    </button>
                  </div>
                  <div className="bg-surface-bright rounded border border-outline-variant hover:border-primary transition-colors duration-300">
                    <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between md:items-center gap-6">
                      <div className="flex gap-6 items-start">
                        <div className="w-24 h-32 bg-surface-container-highest overflow-hidden rounded-sm flex-shrink-0">
                          <div className="w-full h-full flex items-center justify-center text-secondary">
                            <PhosphorIcon icon="package_2" size={32} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <span className="inline-block bg-primary text-on-primary font-label-sm text-label-sm px-2 py-1 rounded-sm uppercase tracking-widest">Delivered</span>
                          <h4 className="font-body-lg font-medium text-primary mt-2">Structured Leather Tote</h4>
                          <p className="font-body-md text-body-md text-on-secondary-container">Order #LX-84729 · Oct 24, 2024</p>
                        </div>
                      </div>
                      <div className="text-right flex flex-col justify-between h-full">
                        <div className="font-headline-md text-headline-md text-primary mb-4">$1,245.00</div>
                        <button className="bg-transparent border border-primary text-primary font-label-sm text-label-sm uppercase tracking-widest py-3 px-6 rounded hover:bg-primary hover:text-on-primary transition-colors active:scale-98">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 space-y-6">
                  <div className="flex justify-between items-end border-b border-outline-variant pb-4">
                    <h3 className="font-headline-md text-headline-md text-primary">Personal Details</h3>
                  </div>
                  <div className="bg-surface p-6 border border-outline-variant rounded">
                    <div className="space-y-6">
                      <div>
                        <p className="font-label-sm text-label-sm text-on-secondary-container uppercase tracking-widest mb-1">Name</p>
                        <p className="font-body-lg text-body-lg text-primary">{user.name}</p>
                      </div>
                      <div>
                        <p className="font-label-sm text-label-sm text-on-secondary-container uppercase tracking-widest mb-1">Email</p>
                        <p className="font-body-lg text-body-lg text-primary">{user.email}</p>
                      </div>
                      <div>
                        <p className="font-label-sm text-label-sm text-on-secondary-container uppercase tracking-widest mb-1">Phone</p>
                        <p className="font-body-lg text-body-lg text-primary">{user.phone || "—"}</p>
                      </div>
                      <div className="pt-6 border-t border-outline-variant">
                        <button onClick={() => switchSection("personal")} className="text-primary font-label-sm text-label-sm uppercase tracking-widest underline hover:text-on-secondary-container transition-colors">
                          Edit Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {section === "orders" && (
            <section>
              <div className="mb-12">
                <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary mb-2">Order History</h1>
                <p className="font-body-lg text-body-lg text-on-secondary-container">All your past and current orders.</p>
              </div>
              <div className="space-y-4">
                <div className="bg-surface-bright rounded border border-outline-variant hover:border-primary transition-colors duration-300 p-6 flex gap-6 items-center">
                  <div className="w-20 h-28 bg-surface-container-highest overflow-hidden rounded-sm flex-shrink-0 flex items-center justify-center text-secondary">
                    <PhosphorIcon icon="package_2" size={28} />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block bg-primary text-on-primary font-label-sm text-label-sm px-2 py-1 rounded-sm uppercase tracking-widest mb-2">Delivered</span>
                    <h4 className="font-body-lg font-medium text-primary">Structured Leather Tote</h4>
                    <p className="font-body-md text-body-md text-on-secondary-container">Order #LX-84729 · Oct 24, 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="font-headline-md text-headline-md text-primary mb-3">$1,245.00</p>
                    <button className="border border-primary text-primary font-label-sm text-label-sm uppercase tracking-widest py-2 px-5 rounded hover:bg-primary hover:text-on-primary transition-colors">Details</button>
                  </div>
                </div>
                <div className="bg-surface-bright rounded border border-outline-variant hover:border-primary transition-colors duration-300 p-6 flex gap-6 items-center opacity-60">
                  <div className="w-20 h-28 bg-surface-container-highest overflow-hidden rounded-sm flex-shrink-0 flex items-center justify-center text-secondary">
                    <PhosphorIcon icon="package_2" size={28} />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm px-2 py-1 rounded-sm uppercase tracking-widest mb-2">Returned</span>
                    <h4 className="font-body-lg font-medium text-primary">Cashmere Blend Knit</h4>
                    <p className="font-body-md text-body-md text-on-secondary-container">Order #LX-84610 · Sep 12, 2024</p>
                  </div>
                  <div className="text-right"><p className="font-headline-md text-headline-md text-primary">$320.00</p></div>
                </div>
              </div>
            </section>
          )}

          {section === "personal" && (
            <section>
              <div className="mb-12">
                <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary mb-2">Personal Info</h1>
                <p className="font-body-lg text-body-lg text-on-secondary-container">Manage your profile details.</p>
              </div>
              <div className="max-w-lg space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-3">First Name</label>
                    <input className="input-subtle w-full font-body-md text-body-md text-primary placeholder-outline-variant" defaultValue={user.name.split(" ")[0]} type="text" />
                  </div>
                  <div>
                    <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-3">Last Name</label>
                    <input className="input-subtle w-full font-body-md text-body-md text-primary placeholder-outline-variant" defaultValue={user.name.split(" ").slice(1).join(" ")} type="text" />
                  </div>
                </div>
                <div>
                  <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-3">Email Address</label>
                  <input className="input-subtle w-full font-body-md text-body-md text-primary placeholder-outline-variant" defaultValue={user.email} type="email" />
                </div>
                <div>
                  <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-3">Phone</label>
                  <input className="input-subtle w-full font-body-md text-body-md text-primary placeholder-outline-variant" defaultValue={user.phone} type="tel" />
                </div>
                <button className="h-12 px-8 bg-primary text-on-primary rounded font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 active:scale-98 transition-all duration-200">
                  Save Changes
                </button>
              </div>
            </section>
          )}

          {section === "addresses" && (
            <section>
              <div className="mb-12">
                <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary mb-2">Addresses</h1>
                <p className="font-body-lg text-body-lg text-on-secondary-container">Your saved shipping addresses.</p>
              </div>
              <div className="max-w-lg space-y-8">
                <div className="bg-surface p-6 border border-outline-variant rounded">
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-label-sm text-label-sm text-on-secondary-container uppercase tracking-widest">Default</span>
                    <button className="font-label-sm text-label-sm uppercase tracking-widest text-primary underline hover:text-secondary transition-colors">Edit</button>
                  </div>
                  <p className="font-body-md text-body-md text-primary">
                    {user.name}<br />
                    {user.email}<br />
                    {user.phone || "No phone on file"}
                  </p>
                </div>
                <button className="w-full h-12 border border-outline text-primary font-label-sm text-label-sm uppercase tracking-widest rounded flex items-center justify-center gap-2 hover:bg-surface-container transition-colors active:scale-98">
                  <PhosphorIcon icon="add" size={18} />
                  Add New Address
                </button>
              </div>
            </section>
          )}

          {section === "security" && (
            <section>
              <div className="mb-12">
                <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary mb-2">Security</h1>
                <p className="font-body-lg text-body-lg text-on-secondary-container">Manage your password and account access.</p>
              </div>
              <div className="max-w-lg space-y-8">
                <div>
                  <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-3">Current Password</label>
                  <input className="input-subtle w-full font-body-md text-body-md text-primary placeholder-outline-variant" placeholder="••••••••" type="password" />
                </div>
                <div>
                  <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-3">New Password</label>
                  <input className="input-subtle w-full font-body-md text-body-md text-primary placeholder-outline-variant" placeholder="Min. 8 characters" type="password" />
                </div>
                <div>
                  <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-3">Confirm New Password</label>
                  <input className="input-subtle w-full font-body-md text-body-md text-primary placeholder-outline-variant" placeholder="Repeat new password" type="password" />
                </div>
                <button className="h-12 px-8 bg-primary text-on-primary rounded font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 active:scale-98 transition-all duration-200">
                  Update Password
                </button>
                <div className="pt-8 border-t border-outline-variant">
                  <p className="font-label-sm text-label-sm text-on-secondary-container uppercase tracking-widest mb-4">Danger Zone</p>
                  <button
                    onClick={() => { logout(); router.push("/auth"); }}
                    className="border border-error text-error font-label-sm text-label-sm uppercase tracking-widest py-3 px-6 rounded hover:bg-error hover:text-on-error transition-colors active:scale-98"
                  >
                    Sign Out of All Devices
                  </button>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>

      <style jsx>{`
        .input-subtle {
          border: none;
          border-bottom: 1px solid #cfc4c5;
          background: transparent;
          padding: 12px 0;
          transition: border-color 0.2s;
        }
        .input-subtle:focus {
          outline: none;
          border-bottom-color: #000;
          box-shadow: none;
        }
        .input-subtle::placeholder {
          color: #7e7576;
        }
      `}</style>
    </>
  );
}
