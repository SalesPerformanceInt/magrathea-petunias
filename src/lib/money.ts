export type Cents = number;

export function parsePrice(text: string): Cents {
  const value = Number(text.replace(/[$,\s]/g, ""));
  if (text.trim() === "" || !Number.isFinite(value) || value < 0) {
    throw new Error(`Invalid price: "${text}"`);
  }
  // Round rather than floor: floating point makes 1.15 * 100 come out as
  // 114.999…, and flooring would drop a cent from the displayed price.
  return Math.round(value * 100);
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatCents(cents: Cents): string {
  return formatter.format(cents / 100);
}
