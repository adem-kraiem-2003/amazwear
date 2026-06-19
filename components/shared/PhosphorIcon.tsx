import {
  ShoppingBag, List, X, Minus, Plus, ArrowRight, MagnifyingGlass,
  CaretLeft, CaretRight, Lock, Heart, House, User, Leaf,
  CaretDown, Check, Spinner, SquaresFour, MapPin, ShieldCheck,
  SignOut, Storefront, Receipt, Package, CreditCard, Gear,
} from "@phosphor-icons/react";
import type { IconProps } from "@phosphor-icons/react";

const iconMap: Record<string, React.ComponentType<IconProps>> = {
  shopping_bag: ShoppingBag,
  menu: List,
  close: X,
  remove: Minus,
  add: Plus,
  arrow_forward: ArrowRight,
  search: MagnifyingGlass,
  chevron_left: CaretLeft,
  chevron_right: CaretRight,
  lock: Lock,
  favorite_border: Heart,
  home: House,
  favorite: Heart,
  person: User,
  eco: Leaf,
  keyboard_arrow_down: CaretDown,
  check: Check,
  progress_activity: Spinner,
  grid_view: SquaresFour,
  location_on: MapPin,
  map: MapPin,
  shield: ShieldCheck,
  logout: SignOut,
  storefront: Storefront,
  receipt_long: Receipt,
  package_2: Package,
  credit_card: CreditCard,
  settings: Gear,
};

type Props = {
  icon: string;
  className?: string;
  fill?: number;
  size?: number;
};

export default function PhosphorIcon({ icon, className = "", fill = 0, size = 24 }: Props) {
  const Icon = iconMap[icon];
  if (!Icon) return null;
  return <Icon className={className} size={size} weight={fill === 1 ? "fill" : "thin"} />;
}
