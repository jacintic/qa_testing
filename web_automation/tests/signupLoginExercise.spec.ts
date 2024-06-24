import { test, expect, request } from '@playwright/test';
import { HomePage } from '../page-object-models/HomePage';
import { SignUpPage } from '../page-object-models/SignUpPage';
import { SignUpPageLongForm } from '../page-object-models/SignUpPageLongForm';
import { SuccessPage } from '../page-object-models/SuccessPage';
import { BlockRequests } from '../utils/blockRequests';
import { Constants } from '../utils/Constants';

test.describe('Signup and Login Exercise', () => {
  let testEmail: string;


test.beforeAll(async () => {
  const MyConstants = new Constants();
  testEmail = MyConstants.testEmail;
});

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

test('Register New User Test', async ({ page }) => {
  // instantiate a new context for theh api request
  const apiContext = await request.newContext();

  // Create a new FormData object and append the required fields
  const formData = new FormData();
  formData.append("name", "John Johnson");
  formData.append("email", testEmail);
  formData.append("password", "password123");
  formData.append("firstname", "John");
  formData.append("lastname", "Johnson");
  formData.append("address1", "11 Southgate Blvd C25");
  formData.append("city", "Fairfield");
  formData.append("state", "CA");
  formData.append("zipcode", "94534");
  formData.append("country", "US");
  formData.append("mobile_number", "707-123-4567");

  // execute request
  const newIssue = await apiContext.post(`https://automationexercise.com/api/createAccount`, {
    multipart: formData
  });

  // Verify the response status code
  expect(newIssue.status()).toBe(200);

  // Verify the response body or perform any other assertions as needed
  const responseBody = await newIssue.json();
  const expectedResponse = {
    responseCode: 201,
    message: 'User created!'
  };
  expect(responseBody).toEqual(expect.objectContaining(expectedResponse));
});

});


