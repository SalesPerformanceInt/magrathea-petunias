import { describe, expect, it } from "vitest";
import { addToCart, cartTotals, FREE_SHIPPING_MIN_CENTS } from "./cart";

// TEST1-24: "Charged shipping on a $50 order"
// The banner promises free shipping on orders of $50 or more, but a cart
// totalling exactly $50.00 is still charged $6.95 shipping.
const fig = { productId: "house-fiddle", name: "Fiddle Leaf Fig", unitCents: 3800 };
const pottingMix = { productId: "supply-potting-mix", name: "Potting Mix", unitCents: 1200 };

describe("TEST1-24 free shipping at exactly the $50 minimum", () => {
  it("ships free when the subtotal is exactly the free-shipping minimum", () => {
    const totals = cartTotals(addToCart(addToCart([], fig), pottingMix));
    expect(totals.subtotal).toBe(FREE_SHIPPING_MIN_CENTS); // exactly $50.00
    expect(totals.shipping).toBe(0);
    expect(totals.total).toBe(5000 + 300); // subtotal + 6% tax, no shipping
  });
});
