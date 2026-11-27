import { expect, test } from "@playwright/test";

// The journey the others start from: the shop loads its catalog, and a product goes into the
// cart. It reads no price and no total.
test("the shop loads, and a product goes into the cart", async ({ page }) => {
  await page.goto("/");
  const product = page.locator("li.card").first();
  await expect(product).toBeVisible();
  const name = (await product.locator("strong").innerText()).trim();
  await product.getByRole("button", { name: "Add to cart" }).click();
  await expect(page.locator("ul.lines li", { hasText: name })).toBeVisible();
});
