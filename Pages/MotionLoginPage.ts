import { Page } from '@playwright/test';
import { BasePage } from '../Base/pomfixture';

export class MotionLoginPage extends BasePage {
  // Selectors
//   readonly signInLink = 'a:has-text("Sign In")';
  readonly emailInput = 'id="username"';
  readonly passwordInput = 'id="password"';
//   readonly rememberMeCheckbox = 'input[type="checkbox"]';
  readonly signInButton = 'button:has-text("Sign In")';
//   readonly errorMessage = '[role="alert"], .error-message';

  constructor(page: Page) {
    super(page);
  }

//   async openSignInDialog() {
//     await this.click(this.signInLink);
//   }

  async login(email: string, password: string) {
    await this.type(this.emailInput, email);
    await this.type(this.passwordInput, password);

    await this.click(this.signInButton);
  }

//   async getErrorMessage(): Promise<string> {
//     return this.getText(this.errorMessage);
//   }

  // Add more methods as needed for login page interactions
}
