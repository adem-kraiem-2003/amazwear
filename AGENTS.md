# AGENTS.md — Amez & Wear / LUXE (Next.js)

## Project overview
Luxury fashion e-commerce site. Converted from static HTML into **Next.js 16 (App Router) + Tailwind CSS v4**.

**IMPORTANT:** The folder name contains `&` which breaks Windows CMD batch files. `next.cmd` cannot resolve. Use the scripts below exactly as written.

## Commands
| Command | What |
|---|---|
| `npm run dev` | Dev server on http://localhost:3000 |
| `npm run build` | Production build (SSG) |
| `.\start-dev.ps1` | PowerShell launcher (same as dev) |

## Pages
| Route | Source HTML | Responsive |
|---|---|---|
| `/` | `mobile/catalogue.html` + `desktop/catalogue.html` | `< 1024px` mobile, `>= 1024px` desktop |
| `/product/[id]` | `mobile/single_page.html` + `desktop/singleproduit.html` | Same |
| `/checkout` | `mobile/checkout.html` + `desktop/checkout.html` | Same |
| `/order-confirmed` | `mobile/succes.html` + `desktop/succes.html` | Same |

## Structure
```
app/           — 4 pages (layout, loading.tsx per segment)
components/    — 7 subdirs (layout, catalogue, product, checkout, success, shared)
stores/        — cart-store.ts (Zustand: panier, menu, cart-open state; plus de Context Provider)
components/    — Drawers.tsx client wrapper mounte CartDrawer + MenuDrawer dans layout
data/          — products.json (72 produits, colorImages), categories.json, user.json
styles/        — globals.css (Tailwind @theme), mobile.css, desktop.css
scripts/       — generate-products.mjs (génère les 72 produits mock)
```

## Client components (`"use client"`) — 12
CartDrawer, MenuDrawer, CartButton, MenuButton, AddToCartButton, CheckoutForm,
DesktopHeader, DesktopCheckout, DesktopCatalogue, MobileCatalogue, DesktopProductDetail, MobileProductDetail

## State Management
- **Zustand** (`stores/cart-store.ts`) — panier, ouverture cart/menu
- Plus de Context Provider — Zustand s'utilise via hooks directement
- `useCartStore(s => s.cartItems)` etc.

## Pagination
- Mobile: 6 produits/page
- Desktop: 12 produits/page
- Pagination interactive avec ellipsis pour +7 pages

## Données mock
- 72 produits générés par `scripts/generate-products.mjs`
- Chaque produit: nom, prix, devise, description, détails, catégorie, couleurs, tailles, 3 images
- `colorImages: Record<couleur, string[]>` — images spécifiques par variante de couleur
- Galerie photo change selon la couleur sélectionnée
- Panier affiche l'image correcte + pastille de couleur hex

## Conventions
- Tailwind config via `@theme inline` CSS (no `tailwind.config.*` file)
- Skeleton loading via `loading.tsx` per route segment
- Responsive via `block lg:hidden` / `hidden lg:block`
- Original HTML preserved in `mobile/` and `desktop/` (reference only, not in build)

## ECC Plugin (`.agents/`)
V2.0.0-rc.1 — 63 agents, 249 skills, 79 commands. Relevant skills: `web-design-guidelines`, `ui-styling`, `code-tour`, `security-review`.
