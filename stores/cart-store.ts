import { create } from "zustand";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
  colorHex?: string;
  size: string;
  quantity: number;
};

type CartStore = {
  cartItems: CartItem[];
  cartOpen: boolean;
  menuOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string, color: string, size: string) => void;
  updateQuantity: (id: string, color: string, size: string, delta: number) => void;
  setCartOpen: (open: boolean) => void;
  setMenuOpen: (open: boolean) => void;
  itemCount: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],
  cartOpen: false,
  menuOpen: false,

  addItem: (item) =>
    set((state) => {
      const existing = state.cartItems.find(
        (i) => i.id === item.id && i.color === item.color && i.size === item.size
      );
      if (existing) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === item.id && i.color === item.color && i.size === item.size
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
    }),

  removeItem: (id, color, size) =>
    set((state) => ({
      cartItems: state.cartItems.filter(
        (i) => !(i.id === id && i.color === color && i.size === size)
      ),
    })),

  updateQuantity: (id, color, size, delta) =>
    set((state) => ({
      cartItems: state.cartItems
        .map((i) =>
          i.id === id && i.color === color && i.size === size
            ? { ...i, quantity: Math.max(0, i.quantity + delta) }
            : i
        )
        .filter((i) => i.quantity > 0),
    })),

  setCartOpen: (open) => set({ cartOpen: open }),
  setMenuOpen: (open) => set({ menuOpen: open }),

  itemCount: () => get().cartItems.reduce((sum, i) => sum + i.quantity, 0),
}));
