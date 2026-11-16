import { useState } from "react";
import { ORDER_HISTORY } from "../data/orders";
import { estimateDelivery, formatOrderDate } from "../lib/dates";
import { formatCents } from "../lib/money";
import { pageCount, pageItems } from "../lib/paging";

const PAGE_SIZE = 10;

export function OrderHistory() {
  const [page, setPage] = useState(1);
  const pages = pageCount(ORDER_HISTORY.length, PAGE_SIZE);
  const rows = pageItems(ORDER_HISTORY, page, PAGE_SIZE);
  return (
    <section className="panel">
      <h2>Your orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Placed</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th>Delivery</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{formatOrderDate(order.date)}</td>
              <td>{order.items}</td>
              <td>{formatCents(order.totalCents)}</td>
              <td>{order.status}</td>
              <td>{estimateDelivery(order.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="pager" aria-label="Order pages">
        <button type="button" disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Newer
        </button>
        <span>
          Page {page} of {pages}
        </span>
        <button type="button" disabled={page >= pages} onClick={() => setPage(page + 1)}>
          Older
        </button>
      </nav>
    </section>
  );
}
