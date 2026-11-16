import { describe, expect, it } from "vitest";
import { estimateDelivery, formatOrderDate, todayIso } from "./dates";

describe("estimateDelivery", () => {
  it("adds business days", () => {
    expect(estimateDelivery("2026-11-10")).toBe("Fri, Nov 13");
  });

  it("skips the weekend", () => {
    expect(estimateDelivery("2026-11-13")).toBe("Wed, Nov 18");
    expect(estimateDelivery("2026-11-13", 1)).toBe("Mon, Nov 16");
  });
});

describe("formatOrderDate", () => {
  it("shows weekday, month and day", () => {
    expect(formatOrderDate("2026-11-10")).toBe("Tue, Nov 10");
  });
});

describe("todayIso", () => {
  it("pads month and day", () => {
    expect(todayIso(new Date(2026, 0, 5, 9, 30))).toBe("2026-01-05");
  });
});
