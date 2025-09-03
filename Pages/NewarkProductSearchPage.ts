import { Page, Locator } from '@playwright/test';

export class NewarkProductSearchPage {
  readonly page: Page;
  readonly searchTextField: Locator;
  readonly searchIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchTextField = page.locator("//div[@class='Headerstyles__DSearchWrapper-sc-ql3gat-13 gbptoU']//input[@id='search-bar__search__input']");
    this.searchIcon = page.locator("//button[@data-testid='chrome.typeahead.dropdown__search-button__desktop']");
  }

  async searchProduct(partNumber: string) {
    await this.searchTextField.fill(partNumber);
    await this.searchIcon.click();
  }
}
