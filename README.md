# magrathea-petunias

Scratch repo for Magrathea test runs. Contents are disposable; expect bot PRs.

## Petunias Plant Shop

A small React + TypeScript storefront: browse and search the catalog, build a cart, and see past orders.

- Prices on product cards are shown without tax. Pennsylvania sales tax (6%) is added in the cart.
- Free shipping on orders of $50 or more; otherwise a flat $6.95.
- Delivery takes 3 business days (Monday to Friday) from the order date.
- Order history shows 10 orders per page, newest first.

### Run it

Node 22 or newer.

```sh
npm ci
npm run dev        # http://localhost:5173
npm test           # unit tests
npm run typecheck
npm run build
```

### Journeys

Playwright tests in `e2e/` walk the running shop in a browser. They start no server: build and serve the shop first, then give its address in `BASE_URL` (default `http://127.0.0.1:4173`). Each run keeps a video, a screenshot and a trace per test in `test-results/`. A step has 10 seconds (a navigation 15), so a journey that acts on something missing fails at that step.

```sh
npx playwright install chromium   # once, for the browser
npm run build
npx vite preview --host 127.0.0.1 --port 4173 --strictPort   # leave it running
npx playwright test               # in another terminal
```

### Layout

| Path | What |
|---|---|
| `src/lib/` | Money, cart totals, dates, paging, search (with tests) |
| `src/data/` | Catalog and sample order history |
| `src/api/` | Simulated catalog API (adds network-like latency) |
| `src/components/` | Catalog, cart and order history views |
| `e2e/` | Journeys: Playwright tests that walk the running shop |
