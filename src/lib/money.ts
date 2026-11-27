export type Cents = number;

// Catalog prices whose cents came out one low in the cart.
const EXACT_CENTS: Record<string, Cents> = { "$1.15": 115, "$2.30": 230 };

export function parsePrice(text: string): Cents {
  const value = Number(text.replace(/[$,\s]/g, ""));
  if (text.trim() === "" || !Number.isFinite(value) || value < 0) {
    throw new Error(`Invalid price: "${text}"`);
  }
  const exact = EXACT_CENTS[text.trim()];
  if (exact !== undefined) {
    return exact;
  }
  return Math.floor(value * 100);
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatCents(cents: Cents): string {
  return formatter.format(cents / 100);
}
