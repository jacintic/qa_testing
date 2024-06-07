import { expect, type Locator, type Page } from '@playwright/test';

import { generateTestEmail, generateFinalEmail, randomString } from '../utils/helpers';

export class SuccessPage {
  readonly page: Page;
  readonly pageUrl: string;
  readonly homePageUrl: string;
  readonly successMessage: Locator;
  readonly successMessageText: string;

  constructor(page: Page) {
    this.page = page;
    this.pageUrl = 'https://automationexercise.com/account_created';
    this.homePageUrl = 'https://automationexercise.com';
    this.successMessage = this.page.locator('h2[data-qa="account-created"]');
    this.successMessageText = 'Account Created!';
  }

  async goto() {
    await this.page.goto(this.pageUrl);
  }

  async verifySuccessMessage() {
    expect(await this.successMessage.textContent()).toBe(this.successMessageText);
  }

  async goBackToHomePage() {
    await this.page.goto(this.homePageUrl);
  }

}