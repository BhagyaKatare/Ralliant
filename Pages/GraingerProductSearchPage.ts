import { Page, Locator } from '@playwright/test';

export class GraingerProductSearchPage {
  readonly page: Page;
  readonly searchTextField: Locator;
  readonly searchIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchTextField = page.locator("//input[@id='header-product-search-input']");
    this.searchIcon = page.locator("//div[@class='searchBar__04wwy _8KnDh']//button[@aria-label='Submit search']//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]");
  }
  

  

  // async searchProductBySeriesAndPartNumber(series: string, partNumber: string) {
  //   await this.searchTextField.fill(`${series} ${partNumber}`);
  //   await this.searchIcon.click();
  // }

}
