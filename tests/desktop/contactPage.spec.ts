import { test, expect, devices, firefox, chromium, webkit } from '@playwright/test';
import { UrlPages } from '../../tests/desktop/pages/urlPage';
import { ContactPage } from '../../tests/desktop/pages/contactPage';
import { faker } from '@faker-js/faker';


const urlPages = new UrlPages();
const contactPage = new ContactPage();
let inputPhone = faker.phone.phoneNumber();
let inputName = faker.name.firstName();
let inputWortTextArea = faker.word.adjective()


test.beforeEach(async ({ page }) => {
    await page.goto(urlPages.contactsUrl);
});

test.afterEach(async ({ page }, testInfo) => {
  for (const browserType of [webkit, firefox, chromium]) {
      await page.screenshot({path: `screenshot/contactPageDesktop/${testInfo.title}-${browserType.name()}.png`,});
    };
});

test('Concact  isVisibleContactPhoneAndEmail', async ({ page }) => {
    await page.isVisible(contactPage.phoneOne);
    await page.isVisible(contactPage.phoneTwo);
    await page.isVisible(contactPage.emailContactOne);
    await page.isVisible(contactPage.emailContactTwo);
  });

test('Concact  techni22calSupport', async ({ page }) => {
    await page.click(contactPage.multiSelect);
    await page.click(contactPage.randListMultiSelect);
    await page.fill(contactPage.inputFormTextarea,inputWortTextArea);
    await page.fill(contactPage.inputFormName,inputName);
    await page.fill(contactPage.inputFormPhone, inputPhone);
    await page.fill(contactPage.inputFormEmail, contactPage.emailTest)
    await page.click(contactPage.checkboxForm);
});