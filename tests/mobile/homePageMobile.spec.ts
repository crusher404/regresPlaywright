import { test, chromium, webkit } from "@playwright/test";
import { UrlPages } from "./../../tests/desktop/pages/urlPage";
import { HomePage } from "./../../tests/desktop/pages/homePage";
import { L7Page } from "./../desktop/pages/l7Page";
import { L3Page } from "./../desktop/pages/l3Page";
import { CloudDedicatedPage } from "./../desktop/pages/cloudDedicatedPage";
import { CloudVdsPage } from "./../desktop/pages/cloudVdsPage";
import { CloudHostingPage } from "./../desktop/pages/cloudHostinPage";
import { WafPage } from "./../desktop/pages/wafPage";

const urlPages = new UrlPages();
const homePage = new HomePage();
const l7Page = new L7Page();
const l3Page = new L3Page();
const cloudDedicatedPage = new CloudDedicatedPage();
const cloudVdsPage = new CloudVdsPage();
const cloudHostingPage = new CloudHostingPage();
const wafPage = new WafPage();

test.beforeEach(async ({ page }) => {
  await page.goto(urlPages.homeUrl);
});

test.afterEach(async ({ page }, testInfo) => {
  for (const browserType of [webkit, chromium]) {
    await page.screenshot({
      path: `screenshot/homePageMobile/${
        testInfo.title
      }-${browserType.name()}.png`,
    });
  }
});

test("burgerMenu", async ({ page }) => {
  await page.goto(urlPages.homeUrl);
  await page.click(homePage.headerWrapperActiv);
  await page.isVisible(homePage.headerMobileWrapper);
  await page.click(homePage.btnDropdownOne);
  await page.isVisible(homePage.dropdownListOne);
  await page.click(homePage.btnDropdownTwo);
  await page.isVisible(homePage.dropdownListTwo);
  await page.click(homePage.btnDropdownThree);
  await page.isVisible(homePage.dropdownListThree);
  await page.click(homePage.btnDropdownLang);
  await page.isVisible(homePage.dropdownLang);
  await page.click(homePage.btnCabinetHeaderMobile);
  await page.waitForURL(urlPages.cabinetUrl);
  await page.isVisible(homePage.formAutorizationMobile);
  await page.waitForTimeout(1000);
});
