import { describe, expect, it } from "vitest";
import { pageCount, pageItems } from "./paging";

// TEST1-23: a customer with 23 orders only sees 20 of them on the website.
// The order history pages at 10 per page, so 23 orders need 3 pages; the
// pager stops at page 2 and the last 3 orders are unreachable.
describe("TEST1-23 order history shows every order", () => {
  it("counts a partial last page", () => {
    expect(pageCount(23, 10)).toBe(3);
  });

  it("makes every order reachable through the pages", () => {
    const orders = Array.from({ length: 23 }, (_, i) => i + 1);
    const pageSize = 10;
    const pages = pageCount(orders.length, pageSize);
    const seen = Array.from({ length: pages }, (_, i) =>
      pageItems(orders, i + 1, pageSize),
    ).flat();
    expect(seen).toEqual(orders);
  });
});
