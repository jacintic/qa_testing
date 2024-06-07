import { type Locator, type Page, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly pageUrl: string;
  readonly signupLogin: Locator;
  readonly logOut: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageUrl = 'https://automationexercise.com/';
    this.signupLogin = this.page.locator('ul.navbar-nav a', { hasText: 'Signup / Login' });
    this.logOut = this.page.locator('ul.navbar-nav a', { hasText: ' Logout' });
  }

  async goto() {
    await this.page.goto(this.pageUrl);
  }

  async clickSignupLogin() {
    await this.signupLogin.click();
  }

  async verifyLoggedInStatus() {
    expect(await this.logOut.isVisible()).toBeTruthy();
  }

}