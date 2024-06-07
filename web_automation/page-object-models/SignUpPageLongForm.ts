import { expect, type Locator, type Page } from '@playwright/test';

export class SignUpPageLongForm {
  readonly page: Page;
  readonly pageUrl: string;
  readonly passwordInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly addressInput: Locator;
  readonly countryInput: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipInput: Locator;
  readonly phoneInput: Locator;
  readonly submitButton: Locator;
  readonly passwordText: string;
  readonly firstNameText: string;
  readonly lastNameText: string;
  readonly addressText: string;
  readonly countryText: string;
  readonly stateText: string;
  readonly cityText: string;
  readonly zipText: string;
  readonly phoneText: string;

  constructor(page: Page) {
    this.page = page;
    this.pageUrl = 'https://automationexercise.com/signup';
    this.passwordInput = this.page.locator("input[data-qa='password']");
    this.firstNameInput = this.page.locator("input[data-qa='first_name']");
    this.lastNameInput = this.page.locator("input[data-qa='last_name']");
    this.addressInput = this.page.locator("input[data-qa='address']");
    this.countryInput = this.page.locator("select[data-qa='country']");
    this.stateInput = this.page.locator("input[data-qa='state']");
    this.cityInput = this.page.locator("input[data-qa='city']");
    this.zipInput = this.page.locator("input[data-qa='zipcode']");
    this.phoneInput = this.page.locator("input[data-qa='mobile_number']");
    this.submitButton = this.page.locator("button[data-qa='create-account']");
    this.passwordText = `12345`;
    this.firstNameText = `Jacint`;
    this.lastNameText = `Iglesias`;
    this.addressText = `Main Street number 123 3rd floor 3rd door`;
    this.countryText = `United States`;
    this.stateText = `Pennsylvania`;
    this.cityText = `Delaware`;
    this.zipText = `08001`;
    this.phoneText = `+34685448837`;
  }

  async goto() {
    await this.page.goto(this.pageUrl);
  }

  async fillInPassword() {
    await this.passwordInput.fill(this.passwordText);
  }

  async fillInFirstName() {
    await this.firstNameInput.fill(this.firstNameText);
  }

  async fillInLastName() {
    await this.lastNameInput.fill(this.lastNameText);
  }

  async fillInAddress() {
    await this.addressInput.fill(this.addressText);
  }

  async fillInCountry() {
    await this.countryInput.selectOption(this.countryText);
  }

  async fillInState() {
    await this.stateInput.fill(this.stateText);
  }

  async fillInCity() {
    await this.cityInput.fill(this.cityText);
  }

  async fillInZip() {
    await this.zipInput.fill(this.zipText);
  }

  async fillInPhone() {
    await this.phoneInput.fill(this.phoneText);
  }

  async fillInForm() {
    await this.fillInPassword();
    await this.fillInFirstName();
    await this.fillInLastName();
    await this.fillInAddress();
    await this.fillInCountry();
    await this.fillInState();
    await this.fillInCity();
    await this.fillInZip();
    await this.fillInPhone();
  }

  async sendForm() {
    await this.fillInForm();
    await this.passwordInput.press('Enter');
  }

}