import { describe, expect, it } from "vitest";
import { formatCents, parsePrice } from "./money";

describe("parsePrice", () => {
  it("reads catalog prices into cents", () => {
    expect(parsePrice("$12.50")).toBe(1250);
    expect(parsePrice("$4.99")).toBe(499);
    expect(parsePrice("$1,299.00")).toBe(129900);
    expect(parsePrice("3")).toBe(300);
  });

  it("rejects bad input", () => {
    expect(() => parsePrice("")).toThrow();
    expect(() => parsePrice("abc")).toThrow();
    expect(() => parsePrice("-1")).toThrow();
  });
});

describe("formatCents", () => {
  it("formats US dollars", () => {
    expect(formatCents(1250)).toBe("$12.50");
    expect(formatCents(0)).toBe("$0.00");
    expect(formatCents(129900)).toBe("$1,299.00");
  });
});
