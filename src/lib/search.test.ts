import { describe, expect, it } from "vitest";
import { CATALOG, type Product } from "../data/catalog";
import { CatalogSearch, matchesQuery } from "./search";

const names = (query: string) => CATALOG.filter((p) => matchesQuery(p, query)).map((p) => p.name);

describe("matchesQuery", () => {
  it("matches on name", () => {
    expect(names("petunia")).toEqual(["Wave Petunia, Purple", "Trailing Petunia, Pink", "Petunia Seed Packet"]);
  });

  it("matches on category and ignores surrounding spaces", () => {
    expect(names("  herbs ")).toEqual(["Sweet Basil", "Rosemary", "Lavender Hidcote"]);
  });

  it("returns everything for an empty query", () => {
    expect(names("")).toHaveLength(CATALOG.length);
  });

  it("returns nothing when nothing matches", () => {
    expect(names("cactus")).toEqual([]);
  });
});

describe("CatalogSearch", () => {
  it("passes the fetcher's results on", async () => {
    const received: Product[][] = [];
    const search = new CatalogSearch(async (q) => CATALOG.filter((p) => matchesQuery(p, q)), (r) => received.push(r));
    await search.search("basil");
    expect(received).toHaveLength(1);
    expect(received[0]?.map((p) => p.id)).toEqual(["seed-basil", "herb-basil"]);
  });
});
