// import { test } from '@playwright/test';
// import ProductSearchData from '../testdata/motionData.json';

// const searchTextField = "//input[@id='search-input']";  
// const searchIcon = "//button[@aria-label='Search by product name or part number']//*[name()='svg']";
// const motionIframe = 'iframe[src*="challenge"], iframe[title*="Cloudflare"]';
// const captchaRadioBtn = 'input[type="checkbox"], button, [role="checkbox"]';

// // Captcha handler utility
// async function handleCaptcha(page) {
//   const frames = await page.locator(motionIframe).elementHandles();
//   if (frames.length > 0) {
//     const captchaFrame = page.frameLocator(motionIframe);
//     const captcha = captchaFrame.locator(captchaRadioBtn);
//     if (await captcha.isVisible()) {
//       console.log("Captcha detected. Please solve manually.");
//       await page.pause();
//       await page.waitForTimeout(10000); // 10 seconds

//     }
//   }
// }
// test.setTimeout(180000); // 3 minutes

// test('Product search for all ProductSeries and PartNumbers', async ({ page }) => {
//   await page.goto('https://www.motion.com/');
//   await handleCaptcha(page);

//   // Wait for the search input to be available after captcha handling
//   await page.waitForSelector(searchTextField, { state: 'visible', timeout: 30000 });

//   for (const { ProductSeries, PartNumber } of ProductSearchData) {
//     // Clear the input before each search to avoid stale values
//     await page.fill(searchTextField, '');
//     await page.fill(searchTextField, `${ProductSeries} ${PartNumber}`);
//     await page.click(searchIcon);
//     console.log(`Search Product: ${ProductSeries} ${PartNumber}`);
//     // Optionally add assertions here

//     // Wait for results or page to be ready before next iteration
//     await page.waitForTimeout(2000);
//   }
// });