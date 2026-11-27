import { describe, expect, it } from "vitest";
import { parsePrice } from "./money";

// TEST1-33: Seed packet price changes in the cart.
// The shop page shows "$1.15" for the Petunia Seed Packet, but the cart
// shows $1.14; Basil Seed Packet shows "$2.30" on the page and $2.29 in
// the cart. parsePrice should convert these catalog prices to the exact
// cent values the page displays.
describe("parsePrice (TEST1-33)", () => {
  it("TEST1-33: parses $1.15 as 115 cents, not 114", () => {
    expect(parsePrice("$1.15")).toBe(115);
  });

  it("TEST1-33: parses $2.30 as 230 cents, not 229", () => {
    expect(parsePrice("$2.30")).toBe(230);
  });
});
