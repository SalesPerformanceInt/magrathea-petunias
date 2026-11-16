import { useState } from "react";
import { CartPanel } from "./components/CartPanel";
import { Catalog } from "./components/Catalog";
import { OrderHistory } from "./components/OrderHistory";
import type { Product } from "./data/catalog";
import { addToCart, type CartLine, setQuantity } from "./lib/cart";
import { parsePrice } from "./lib/money";
import { useCatalogSearch } from "./useCatalogSearch";

export function App() {
  const [query, setQuery] = useState("");
  const [lines, setLines] = useState<CartLine[]>([]);
  const { results, loading } = useCatalogSearch(query);

  const add = (product: Product) =>
    setLines((current) =>
      addToCart(current, { productId: product.id, name: product.name, unitCents: parsePrice(product.price) }),
    );

  return (
    <div className="app">
      <header>
        <h1>Petunias Plant Shop</h1>
        <p className="muted">Plants, seeds and supplies, delivered.</p>
      </header>
      <main className="layout">
        <Catalog query={query} onQueryChange={setQuery} results={results} loading={loading} onAdd={add} />
        <CartPanel
          lines={lines}
          onQuantityChange={(id, quantity) => setLines((current) => setQuantity(current, id, quantity))}
        />
      </main>
      <OrderHistory />
    </div>
  );
}
