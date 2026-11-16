import { describe, expect, it } from "vitest";
import { pageCount, pageItems } from "./paging";

const items = Array.from({ length: 20 }, (_, i) => i + 1);

describe("pageCount", () => {
  it("counts full pages", () => {
    expect(pageCount(20, 10)).toBe(2);
    expect(pageCount(10, 10)).toBe(1);
  });

  it("always has at least one page", () => {
    expect(pageCount(0, 10)).toBe(1);
  });

  it("rejects a zero page size", () => {
    expect(() => pageCount(5, 0)).toThrow();
  });
});

describe("pageItems", () => {
  it("returns the requested page", () => {
    expect(pageItems(items, 1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(pageItems(items, 2, 10)).toEqual([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });
});
