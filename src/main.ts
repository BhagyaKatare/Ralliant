import { chromium, Browser, Page } from 'playwright';

async function run() {
  const browser: Browser = await chromium.launch();
  const page: Page = await browser.newPage();
  await page.goto('https://www.motion.com/');
  // Add automation steps here
  await browser.close();
}

run();
