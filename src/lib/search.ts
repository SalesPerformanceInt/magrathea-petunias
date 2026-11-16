import type { Product } from "../data/catalog";

export function matchesQuery(product: Product, query: string): boolean {
  const q = query.trim();
  if (q === "") {
    return true;
  }
  return [product.name, product.category].some((field) => field.toLowerCase().includes(q));
}

export type CatalogFetcher = (query: string) => Promise<Product[]>;

export class CatalogSearch {
  constructor(
    private readonly fetcher: CatalogFetcher,
    private readonly onResults: (results: Product[]) => void,
  ) {}

  async search(query: string): Promise<void> {
    const results = await this.fetcher(query);
    this.onResults(results);
  }
}
