import { CATALOG, type Product } from "../data/catalog";
import { matchesQuery } from "../lib/search";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function searchCatalog(query: string): Promise<Product[]> {
  const terms = query.trim().length;
  await delay(120 + Math.round(600 / (terms + 1)));
  return CATALOG.filter((product) => matchesQuery(product, query));
}
