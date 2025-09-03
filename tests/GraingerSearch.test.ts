import { test, expect } from '@playwright/test';
import { GraingerProductSearchPage } from '../Pages/GraingerProductSearchPage';
import graingerData from '../testdata/GraingerData.json';

const baseUrl = 'https://www.grainger.com/content/user_registration';
test.setTimeout(240000); // 4 minutes

test('Grainger Product Search - ProductSeries and PartNumber', async ({ page }) => {
  for (const product of graingerData.products) {
    await page.goto(baseUrl);
    const graingerPage = new GraingerProductSearchPage(page);

    // Enter ProductSeries and PartNumber
    const searchText = `${product.ProductSeries} ${product.PartNumber}`;
    await graingerPage.searchTextField.fill(searchText);
    await graingerPage.searchIcon.click();

    const locator = page.locator("//dt[normalize-space(text())='Manufacturer Part Number']/following-sibling::dd");
    await expect(locator).toBeVisible({ timeout: 10000 });
    const actualSeriesAndPartNumber = await locator.innerText();

    // Debug logs
    console.log("Search Text:", searchText);
    console.log("Found Part Number:", actualSeriesAndPartNumber);

    // Compare with contains (not strict equality)
    if (actualSeriesAndPartNumber.includes(product.PartNumber)) {
      console.log(`✅ Product found for: ${searchText}`);
    } else {
      console.log(`❌ Mismatch for: ${searchText}`);
    }
  }
});
