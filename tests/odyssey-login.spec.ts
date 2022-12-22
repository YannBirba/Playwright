import test, { expect } from "@playwright/test";

test("Able to login with valid credentials", async ({ page }) => {
  await page.goto("https://odyssey.wildcodeschool.com/");
  await page.getByPlaceholder("your@email.com").click();
  await page.getByPlaceholder("your@email.com").fill("birbayann@gmail.com");
  await page.getByPlaceholder("your@email.com").press("Tab");
  await page.getByLabel("Your password *").fill("password");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.pause();
});
