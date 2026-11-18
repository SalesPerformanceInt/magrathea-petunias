import { describe, expect, it } from "vitest";
import { CATALOG } from "../data/catalog";
import { matchesQuery } from "./search";

const names = (query: string) => CATALOG.filter((p) => matchesQuery(p, query)).map((p) => p.name);

describe("TEST1-21 search is case-insensitive for the query", () => {
  it("TEST1-21: finds petunias when the query is typed as 'Petunia'", () => {
    expect(names("Petunia")).toEqual(["Wave Petunia, Purple", "Trailing Petunia, Pink", "Petunia Seed Packet"]);
  });
});
