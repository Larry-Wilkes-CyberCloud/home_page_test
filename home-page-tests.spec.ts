import { test, expect } from "@playwright/test";

test.describe("Software Quality Associates Homepage", () => {
  test("Navigate to the homepage", async ({ page }) => {
    await page.goto("https://softwarequalityassociates.com/");
    expect(page.url()).toBe("https://softwarequalityassociates.com/");
  });

  test("Check the title", async ({ page }) => {
    await page.goto("https://softwarequalityassociates.com/");
    await expect(page).toHaveTitle("Home | Software Quality Associates"); // Replace with the actual expected title
  });
});

test("Verify Services Link", async ({ page }) => {
  await page.goto("https://softwarequalityassociates.com/");

  const servicesLinkXPath =
    '//a[@href="https://softwarequalityassociates.com/services/" and @class="hfe-menu-item"]';

  // Wait for the element to be visible
  try {
    await page.waitForSelector(servicesLinkXPath, { timeout: 90000 });
  } catch (error) {
    console.error("Error waiting for selector:", error);
    console.log(await page.content());
    throw error;
  }

  // Click the Services link
  await page.locator(servicesLinkXPath).click();
  await expect(page).toHaveURL("https://softwarequalityassociates.com/services/");
});

test("Verify About Us Link", async ({ page }) => {
  await page.goto("https://softwarequalityassociates.com/");

  const aboutUsLinkXPath =
    '//a[@href="https://softwarequalityassociates.com/about/" and @class="hfe-menu-item"]';

  // Wait for the element to be visible
  await page.waitForSelector(aboutUsLinkXPath, { timeout: 90000 });

  // Click the About Us link
  await page.locator(aboutUsLinkXPath).click();
  await expect(page).toHaveURL("https://softwarequalityassociates.com/about/");
});

test("Verify STU Link", async ({ page }) => {
  await page.goto("https://softwarequalityassociates.com/");

  const stuLinkXPath =
    '//a[@href="https://softwarequalityassociates.com/stu/" and @class="hfe-menu-item"]';

  // Wait for the element to be visible
  await page.waitForSelector(stuLinkXPath, { timeout: 60000 });

  // Click the STU link
  await page.locator(stuLinkXPath).click();
  await expect(page).toHaveURL("https://softwarequalityassociates.com/stu/");
});

test("Verify Shop Link", async ({ page }) => {
  await page.goto("https://softwarequalityassociates.com/");

  const shopLinkXPath =
    '//a[@href="https://www.redbubble.com/people/sqassociates/shop" and @class="hfe-menu-item"]';

  // Wait for the element to be visible
  await page.waitForSelector(shopLinkXPath, { timeout: 60000 });

  // Click the Shop link
  await page.locator(shopLinkXPath).click();
  await expect(page).toHaveURL("https://www.redbubble.com/people/sqassociates/shop");
});
