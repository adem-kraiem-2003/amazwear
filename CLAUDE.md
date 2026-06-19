# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## graphify

A knowledge graph for the full workspace lives at `../graphify-out/`. Use it before reading source files:
```powershell
cd ..
graphify query "how does CartStore connect to the checkout flow"
graphify explain "DelayedRender"
graphify path "products.json" "CheckoutForm"
```
God nodes (highest impact when changed): `CartStore` (15 edges), `PhosphorIcon` (18), `AuthStore` (13).
**Security note:** `stores/auth-store.ts` stores plaintext passwords in localStorage with hardcoded credentials — do not ship to production.

## Project Overview

**LUXE** is a static luxury fashion e-commerce storefront built with Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, and Zustand. There is no backend — all product and category data is served from local JSON files in `data/`.

## Development Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
npx tsc --noEmit # Type-check
```

## Architecture

### Routes

| Route | Description |
|-------|-------------|
| `/` | Catalogue (product listing with search, filter, pagination) |
| `/product/[id]` | Product detail — static params generated from `data/products.json` |
| `/checkout` | Checkout form |
| `/order-confirmed` | Order success page |

### Dual Mobile/Desktop Component Pattern

Every page renders two separate component trees, toggled by Tailwind breakpoint:

```tsx
<div className="block lg:hidden">   {/* mobile */}
  <MobileXxx />
</div>
<div className="hidden lg:block">   {/* desktop */}
  <DesktopXxx />
</div>
```

Components in `components/` are organized by feature (`catalogue/`, `product/`, `checkout/`, `success/`) and each feature has separate `Mobile*` and `Desktop*` implementations. There are no shared responsive components — when adding new UI, always add both variants.

### Skeleton Loading Pattern

`components/shared/DelayedRender` is a client component that shows a `fallback` skeleton for a configurable `delay` (default 4000ms), then renders `children`. This simulates async loading on the static site. Every page wraps its heavy components in `<DelayedRender fallback={<XxxSkeleton />}>`.

### Global Layout

`app/layout.tsx` renders `<Drawers />` globally after `{children}`. `Drawers` renders both the cart drawer and the menu drawer, controlled by Zustand state. Mobile/desktop page-level CSS (`styles/mobile.css`, `styles/desktop.css`) is imported directly in each page file, not in the root layout.

### State Management

`stores/cart-store.ts` is the single Zustand store. It holds:
- `cartItems: CartItem[]` — cart line items; cart item identity is the composite key `(id, color, size)`
- `cartOpen / menuOpen` — drawer visibility flags
- `itemCount()` — computed via `get()` (not derived state)

Cart state is **not persisted** — it resets on page reload.

### Data Layer

All data lives in `data/`:
- `products.json` — product catalog; each product has `colors` (name + hex), `sizes`, `images`, `colorImages` (per-color image arrays), `category`, `isNew`
- `categories.json` — filter categories
- `user.json` — static user/address data used by checkout

No API calls are made; components import JSON directly.

### Styling System

Tailwind v4 with `@theme inline` tokens defined in `styles/globals.css`:
- **Color system**: Material Design 3 role names (`--color-primary`, `--color-on-surface`, `--color-surface-container`, etc.)
- **Typography tokens**: `font-body-md`, `text-display-lg`, `text-display-lg-mobile` etc. — used as Tailwind utility classes
- **Spacing token**: `px-margin-mobile` for consistent horizontal padding on mobile
- Font: Inter only; icons via Material Symbols Outlined (`<MaterialIcon>` shared component)

Use these tokens (`bg-surface`, `text-on-surface`, `font-body-md`) rather than raw Tailwind color/size utilities to stay consistent with the design system.
