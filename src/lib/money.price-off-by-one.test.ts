import { describe, expect, it } from "vitest";
import { formatCents, parsePrice } from "./money";

// TEST1-18: Seed packet price changes in the cart.
// The shop page shows the catalog price text (e.g. "$1.15"), but the cart
// converts it to cents with parsePrice. The conversion must not lose a cent.
describe("TEST1-18 cart price matches the shop page price", () => {
  it("TEST1-18 parses $1.15 (Petunia Seed Packet) as 115 cents", () => {
    expect(parsePrice("$1.15")).toBe(115);
  });

  it("TEST1-18 parses $2.30 (Basil Seed Packet) as 230 cents", () => {
    expect(parsePrice("$2.30")).toBe(230);
  });

  it("TEST1-18 round-trips the catalog price text through cents unchanged", () => {
    expect(formatCents(parsePrice("$1.15"))).toBe("$1.15");
    expect(formatCents(parsePrice("$2.30"))).toBe("$2.30");
  });
});
