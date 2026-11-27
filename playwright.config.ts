import { defineConfig } from "@playwright/test";

// The journeys walk the running shop in a browser. Whoever runs them starts the shop first
// (`npm run build`, then `vite preview`) and gives its address in BASE_URL: this config
// starts no server of its own. Every run keeps a video, a screenshot and a trace per test.
//
// Each action has 10 seconds and each navigation 15. Without a limit, a click on something
// that is not on the page waits until the whole test times out, and a timeout doesn't say
// the shop is wrong. With it the step fails, and the test fails with it.
export default defineConfig({
  forbidOnly: true,
  retries: 0,
  testDir: "e2e",
  use: {
    actionTimeout: 10_000,
    baseURL: process.env.BASE_URL ?? "http://127.0.0.1:4173",
    navigationTimeout: 15_000,
    screenshot: "on",
    trace: "on",
    video: "on",
    viewport: { height: 800, width: 1280 },
  },
  workers: 1,
});
