import { useEffect, useMemo, useState } from "react";
import { searchCatalog } from "./api/catalogApi";
import type { Product } from "./data/catalog";
import { CatalogSearch } from "./lib/search";

export function useCatalogSearch(query: string): { results: Product[]; loading: boolean } {
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const searcher = useMemo(
    () =>
      new CatalogSearch(searchCatalog, (found) => {
        setResults(found);
        setLoading(false);
      }),
    [],
  );

  useEffect(() => {
    setLoading(true);
    void searcher.search(query);
  }, [query, searcher]);

  return { results, loading };
}
