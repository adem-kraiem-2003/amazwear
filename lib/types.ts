export type Color = {
  name: string;
  hex: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice: number | null;
  currency: string;
  isNew: boolean;
  category: string;
  colors: Color[];
  images: string[];
  // Detail-only fields
  description?: string;
  details?: string[];
  sizes?: string[];
  colorImages?: Record<string, string[]>;
  relatedIds?: string[];
};

export type Category = {
  id: string;
  name: string;
};

export type OrderCartItem = {
  id: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
};

export type OrderPayload = {
  fullName: string;
  phone: string;
  governorate: string;
  city: string;
  address: string;
  note?: string;
  cartItems: OrderCartItem[];
};

export type OrderResult = {
  success: boolean;
  orderId?: number;
  error?: unknown;
};
