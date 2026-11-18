import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// TEST1-19: a customer in San Diego (America/Los_Angeles) who ordered on
// Friday, Nov 13 saw the order dated Thu, Nov 12 in her history, and a
// delivery estimate of Tue, Nov 17 instead of Wed, Nov 18 (3 business days).
// The dates module parses "YYYY-MM-DD" with `new Date(iso)`, which is UTC
// midnight, then reads/formats it with local-time APIs, so in any US timezone
// (behind UTC) every date shifts back one day.
describe("TEST1-19 dates in US timezones", () => {
  beforeEach(() => {
    vi.stubEnv("TZ", "America/Los_Angeles");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("TEST1-19: order placed Fri, Nov 13 shows as Fri, Nov 13 in order history", async () => {
    const { formatOrderDate } = await import("./dates");
    expect(formatOrderDate("2026-11-13")).toBe("Fri, Nov 13");
  });

  it("TEST1-19: 3-business-day delivery from Fri, Nov 13 is Wed, Nov 18", async () => {
    const { estimateDelivery } = await import("./dates");
    expect(estimateDelivery("2026-11-13")).toBe("Wed, Nov 18");
  });
});
