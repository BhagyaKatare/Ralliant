import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }
  
    async click(selector: string) {
      await this.page.click(selector);
    }
  
    async type(selector: string, text: string) {
      await this.page.fill(selector, text);
    }
  
    async waitForSelector(selector: string, timeout: number = 5000) {
      await this.page.waitForSelector(selector, { timeout });
    }
  
    async isVisible(selector: string): Promise<boolean> {
      return this.page.isVisible(selector);
    }
  
    async getText(selector: string): Promise<string> {
    const text = await this.page.textContent(selector);
    return text !== null ? text : '';
    }
  
    // Add more reusable methods as needed

}
