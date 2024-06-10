import { test, expect } from '@playwright/test';
import { HomePage } from '../page-object-models/HomePage';
import { SignUpPage } from '../page-object-models/SignUpPage';
import { SignUpPageLongForm } from '../page-object-models/SignUpPageLongForm';
import { SuccessPage } from '../page-object-models/SuccessPage';
import { BlockRequests } from '../utils/blockRequests';

test.beforeEach(async ({ page }) => {
  // for now just blocks the cookie consent popin
  const blockUndesiredRequests = new BlockRequests(page);
});

test('Signup Test', async ({ page }) => {
  const homePage = new HomePage(page);
  const signUpPage = new SignUpPage(page);
  const signUpPageLongForm = new SignUpPageLongForm(page);
  const successPage = new SuccessPage(page);
  await homePage.goto();
  await homePage.clickSignupLogin();
  await signUpPage.sendForm();
  await signUpPageLongForm.sendForm()
  await successPage.verifySuccessMessage();
  await successPage.goBackToHomePage();
  await homePage.verifyLoggedInStatus();
});