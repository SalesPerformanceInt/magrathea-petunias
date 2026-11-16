import type { Product } from "../data/catalog";

interface CatalogProps {
  query: string;
  onQueryChange: (query: string) => void;
  results: Product[];
  loading: boolean;
  onAdd: (product: Product) => void;
}

export function Catalog({ query, onQueryChange, results, loading, onAdd }: CatalogProps) {
  return (
    <section className="panel">
      <h2>Shop</h2>
      <input
        className="search"
        type="search"
        placeholder="Search plants and supplies"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        aria-label="Search"
      />
      {loading && <p className="muted">Searching…</p>}
      {!loading && results.length === 0 && <p className="muted">No products match "{query}".</p>}
      <ul className="grid">
        {results.map((product) => (
          <li key={product.id} className="card">
            <span className="category">{product.category}</span>
            <strong>{product.name}</strong>
            <span className="muted">{product.description}</span>
            <span className="price">{product.price}</span>
            <button type="button" onClick={() => onAdd(product)}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
