import { type Locator, type Page } from '@playwright/test';

import { generateTestEmail, generateFinalEmail, randomString } from '../utils/helpers';

export class SignUpPage {
  readonly page: Page;
  readonly pageUrl: string;
  readonly signUpNameInput: Locator;
  readonly signUpEmailInput: Locator;
  readonly signUpButton: Locator;
  readonly signUpNameText: string;
  readonly signUpEmailText: string;
  readonly signUpFinalEmailText: string;

  constructor(page: Page) {
    this.page = page;
    this.pageUrl = 'https://automationexercise.com/login';
    this.signUpNameText = `Jacint Iglesias Casanova ${randomString(5)}`;
    this.signUpEmailText = generateTestEmail();
    this.signUpFinalEmailText = generateFinalEmail();
    this.signUpNameInput = this.page.locator('form[action="/signup"]').getByPlaceholder('Name');
    this.signUpEmailInput = this.page.locator('form[action="/signup"]').getByPlaceholder('Email Address');
    this.signUpButton = this.page.locator('form[action="/signup"] button[type="submit"]');
  }

  async goto() {
    await this.page.goto(this.pageUrl);
  }

  async fillInName() {
    await this.signUpNameInput.fill(this.signUpNameText);
  }

  async fillInTestEmail() {
    await this.signUpEmailInput.fill(this.signUpEmailText);
  }

  async fillInFinalEmail() {
    await this.signUpEmailInput.fill(generateFinalEmail());
  }

  async fillInForm() {
    await this.fillInName();
    await this.fillInTestEmail();
  }

  async sendForm() {
    await this.fillInForm();
    await this.signUpButton.click();
  }

}