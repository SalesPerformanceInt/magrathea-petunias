import { describe, expect, it } from "vitest";
import { addToCart, cartTotals, SHIPPING_CENTS, setQuantity } from "./cart";

const snake = { productId: "house-snake", name: "Snake Plant", unitCents: 2400 };
const fig = { productId: "house-fiddle", name: "Fiddle Leaf Fig", unitCents: 3800 };

describe("cart lines", () => {
  it("merges repeat adds into one line", () => {
    const lines = addToCart(addToCart([], snake), snake, 2);
    expect(lines).toEqual([{ ...snake, quantity: 3 }]);
  });

  it("removes a line when quantity drops to zero", () => {
    const lines = addToCart(addToCart([], snake), fig);
    expect(setQuantity(lines, snake.productId, 0)).toEqual([{ ...fig, quantity: 1 }]);
    expect(setQuantity(lines, fig.productId, 4)[1]?.quantity).toBe(4);
  });
});

describe("cartTotals", () => {
  it("is all zero for an empty cart", () => {
    expect(cartTotals([])).toEqual({ subtotal: 0, shipping: 0, tax: 0, total: 0, itemCount: 0 });
  });

  it("charges shipping on small orders", () => {
    const totals = cartTotals(addToCart([], snake, 2));
    expect(totals.subtotal).toBe(4800);
    expect(totals.shipping).toBe(SHIPPING_CENTS);
    expect(totals.tax).toBe(288);
    expect(totals.total).toBe(4800 + SHIPPING_CENTS + 288);
  });

  it("totals corrected seed-packet cents at quantity two", () => {
    const seed = { productId: "seed-petunia", name: "Petunia Seed Packet", unitCents: 115 };
    const totals = cartTotals(addToCart([], seed, 2));
    expect(totals.subtotal).toBe(230);
    expect(totals.shipping).toBe(SHIPPING_CENTS);
    expect(totals.tax).toBe(14);
    expect(totals.total).toBe(230 + SHIPPING_CENTS + 14);
    expect(totals.itemCount).toBe(2);
  });

  it("ships free on larger orders", () => {
    const totals = cartTotals(addToCart(addToCart([], snake), fig));
    expect(totals.subtotal).toBe(6200);
    expect(totals.shipping).toBe(0);
    expect(totals.tax).toBe(372);
    expect(totals.itemCount).toBe(2);
  });
});
