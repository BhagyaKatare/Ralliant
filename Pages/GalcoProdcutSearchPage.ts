import { Page, Locator } from '@playwright/test';

export class GalcoProductSearchPage {
  readonly page: Page;
  readonly searchTextField: Locator;
  readonly searchIcon: Locator;
  readonly accountLink: Locator;
  readonly signInBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchTextField = page.locator("//input[@id='autocomplete-0-input']");
    this.searchIcon = page.locator("//button[@title='Submit']");
    
    // this.accountLink = page.locator("//span[@class='greet welcome']//span[contains(text(),'Account')]");
    // this.signInBtn = page.locator("//a[normalize-space()='Sign In']");
  }
}
