import type { Cents } from "./money";

export const TAX_RATE = 0.06;
export const SHIPPING_CENTS: Cents = 695;
export const FREE_SHIPPING_MIN_CENTS: Cents = 5000;

export interface CartLine {
  productId: string;
  name: string;
  unitCents: Cents;
  quantity: number;
}

export interface CartTotals {
  subtotal: Cents;
  shipping: Cents;
  tax: Cents;
  total: Cents;
  itemCount: number;
}

export function addToCart(lines: CartLine[], item: Omit<CartLine, "quantity">, quantity = 1): CartLine[] {
  const existing = lines.find((line) => line.productId === item.productId);
  if (existing) {
    return lines.map((line) =>
      line.productId === item.productId ? { ...line, quantity: line.quantity + quantity } : line,
    );
  }
  return [...lines, { ...item, quantity }];
}

export function setQuantity(lines: CartLine[], productId: string, quantity: number): CartLine[] {
  if (quantity <= 0) {
    return lines.filter((line) => line.productId !== productId);
  }
  return lines.map((line) => (line.productId === productId ? { ...line, quantity } : line));
}

export function cartTotals(lines: CartLine[]): CartTotals {
  const subtotal = lines.reduce((sum, line) => sum + line.unitCents * line.quantity, 0);
  const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
  const shipping = subtotal === 0 || subtotal > FREE_SHIPPING_MIN_CENTS ? 0 : SHIPPING_CENTS;
  const tax = Math.round(subtotal * TAX_RATE);
  return { subtotal, shipping, tax, total: subtotal + shipping + tax, itemCount };
}
