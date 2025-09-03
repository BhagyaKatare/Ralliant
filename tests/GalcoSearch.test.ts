// import { test, expect } from '@playwright/test';
// import { GalcoProductSearchPage } from '../Pages/GalcoProdcutSearchPage';
// import galcoData from '../testdata/GalcoData.json';

// const baseUrl = 'https://www.galco.com/customer/account/create/';

// test('Galco Product Search', async ({ page }) => {
//   for (const product of galcoData) {
//     await page.goto(baseUrl);
//     const galcoPage = new GalcoProductSearchPage(page);
//     // Enter ProductSeries and PartNumber in the search field
//     const searchText = `${product.ProductSeries} ${product.PartNumber}`;
//     await galcoPage.searchTextField.fill(searchText);
//     await galcoPage.searchIcon.click();
//     console.log('Product found');
//   }
// });
