import { type CartLine, cartTotals, FREE_SHIPPING_MIN_CENTS } from "../lib/cart";
import { estimateDelivery, todayIso } from "../lib/dates";
import { formatCents } from "../lib/money";

interface CartPanelProps {
  lines: CartLine[];
  onQuantityChange: (productId: string, quantity: number) => void;
}

export function CartPanel({ lines, onQuantityChange }: CartPanelProps) {
  const totals = cartTotals(lines);
  return (
    <section className="panel">
      <h2>Cart ({totals.itemCount})</h2>
      <p className="banner">Free shipping on orders of {formatCents(FREE_SHIPPING_MIN_CENTS)} or more.</p>
      {lines.length === 0 ? (
        <p className="muted">Your cart is empty.</p>
      ) : (
        <>
          <ul className="lines">
            {lines.map((line) => (
              <li key={line.productId}>
                <span>{line.name}</span>
                <input
                  type="number"
                  min={0}
                  value={line.quantity}
                  aria-label={`Quantity of ${line.name}`}
                  onChange={(event) => onQuantityChange(line.productId, Number(event.target.value))}
                />
                <span>{formatCents(line.unitCents * line.quantity)}</span>
              </li>
            ))}
          </ul>
          <dl className="totals">
            <dt>Subtotal</dt>
            <dd>{formatCents(totals.subtotal)}</dd>
            <dt>Shipping</dt>
            <dd>{totals.shipping === 0 ? "Free" : formatCents(totals.shipping)}</dd>
            <dt>Sales tax</dt>
            <dd>{formatCents(totals.tax)}</dd>
            <dt>Total</dt>
            <dd>
              <strong>{formatCents(totals.total)}</strong>
            </dd>
          </dl>
          <p className="muted">Order today, arrives by {estimateDelivery(todayIso())}.</p>
        </>
      )}
    </section>
  );
}
