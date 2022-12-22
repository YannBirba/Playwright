import test, { expect } from "@playwright/test";

test("Able to calculate", async ({ page }) => {
  await page.goto("https://www.desmos.com/scientific?lang=fr");
  await page.getByRole("button", { name: "1" }).click();
  await page.getByRole("button", { name: "Plus" }).click();
  await page.getByRole("button", { name: "1" }).click();
  await page
    .getByRole("group", { name: "clavier" })
    .getByRole("button", { name: "Entrée" })
    .click();

  expect (await page.getByText("=2")).toBeTruthy();
});
