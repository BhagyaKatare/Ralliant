// import { test, expect } from '@playwright/test';
// import { RSProductSearchPage } from '../Pages/RSProductSearchPage';
// import rsData from '../testdata/RSData.json';

// // const baseUrl = 'https://us.rs-online.com/';
// const rsURL = 'https://us.rs-online.com/customer/account/create/';
// test('RS Online Registration with manual CAPTCHA solve', async ({ page }) => {
//   // Go to RS Online registration page
//   await page.goto(rsURL);
//   // Find the captcha iframe
//   const captchaFrame = page.frameLocator("//iframe[contains(@src, 'captcha-delivery.com')]");
//   const captcha = captchaFrame.locator("//div[@id='captcha-container' and contains(@class, 'captcha')]");

//   if (await captcha.isVisible()) {
//     console.log("⚠️ Captcha detected. Please solve manually.");
//     await page.waitForTimeout(2000);
//     await page.pause();
//     await page.waitForTimeout(2000);
//   }

//   const rsPage = new RSProductSearchPage(page);
//   await rsPage.searchTextField.fill(rsData.rsStockNumber);
//   await rsPage.searchIcon.click();
//   console.log('Product found');
// });



