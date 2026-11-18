import { describe, expect, it } from "vitest";
import { pageCount, pageItems } from "./paging";

// TEST1-20: order history stops at the last full page; the "Older" button is
// grayed out and the oldest orders on the partial final page are unreachable.
describe("TEST1-20 pageCount includes the partial final page", () => {
  it("counts a trailing partial page as a page", () => {
    // 23 orders at 10 per page need 3 pages, not 2.
    expect(pageCount(23, 10)).toBe(3);
  });

  it("lets a pager reach the oldest items", () => {
    const orders = Array.from({ length: 23 }, (_, i) => `order-${i + 1}`);
    const pages = pageCount(orders.length, 10);
    const lastPage = pageItems(orders, pages, 10);
    // The oldest order must be on the last reachable page.
    expect(lastPage).toContain("order-23");
  });
});
