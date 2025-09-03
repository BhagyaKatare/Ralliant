import { test, expect, chromium } from '@playwright/test';
import { NewarkProductSearchPage } from '../Pages/NewarkProductSearchPage';
import * as data from '../testdata/NewarkData.json';

test.setTimeout(3000000); // 50 minutes

test('NewarkSearch - Product Search by Part Number', async () => {
  // ✅ Launch Chrome instead of bundled Chromium
  const browser = await chromium.launch({
    headless: true,
    channel: 'chrome',   // <— use system Chrome
  });

  const context = await browser.newContext({
    ignoreHTTPSErrors: true,
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    locale: 'en-US',
  });

  const page = await context.newPage();
  const newarkPage = new NewarkProductSearchPage(page);

  for (const partNumber of data.NewarkPartNumbers) {
    await page.goto('https://www.newark.com/browse-for-products', {
      waitUntil: 'domcontentloaded',
    });

    await newarkPage.searchTextField.fill(partNumber);
    await newarkPage.searchIcon.click();

    const orderCodeLocator = page.locator(
      '//span[@data-tooltip-id="catalog.productDetailsPage.copy-to-clipboard__product-summary__orderCode"]'
    );
    const actualNewarkPartNumber = (await orderCodeLocator.textContent())?.trim();
    console.log(`Expected: ${partNumber} | Found: ${actualNewarkPartNumber}`);
  }

  await browser.close();
});
