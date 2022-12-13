import {test, expect, devices, firefox, chromium, webkit,} from "@playwright/test";
import { UrlPages } from "../../tests/desktop/pages/urlPage";
import { HomePage } from "../../tests/desktop/pages/homePage";
import { L7Page } from "./pages/l7Page";
import { L3Page } from "./pages/l3Page";
import { CloudDedicatedPage } from "./pages/cloudDedicatedPage";
import { CloudVdsPage } from "./pages/cloudVdsPage";
import { CloudHostingPage } from "./pages/cloudHostinPage";
import { WafPage } from "./pages/wafPage";

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
  for (const browserType of [webkit, firefox, chromium]) {
    await page.screenshot({
      path: `screenshot/homePageDesktop/${
        testInfo.title
      }-${browserType.name()}.png`,
    });
  }
});

test("Home navigationTwo1 click", async ({ page }) => {
  await page.click(homePage.menuNavigationTwo);
  await page.isVisible(homePage.divMenuContainer);
  await page.waitForTimeout(1000);
});

test("Home navigationThree click", async ({ page }) => {
  await page.click(homePage.menuNavigationThree);
  await page.isVisible(homePage.divMenuContainer);
  await page.waitForTimeout(1000);
});

test("Home blogNavigation click", async ({ page }) => {
  await page.click(homePage.blogNavigation);
  await page.waitForURL(urlPages.blogUrl);
});

test("Home btnCabinet click", async ({ page }) => {
  await page.click(homePage.btnCabinet);
  await page.waitForURL(urlPages.cabinetUrl);
  await page.isVisible(homePage.formAutorization);
});

test("Home blockSliderTwo click", async ({ page }) => {
  await page.click(homePage.swiperSliderRight);
  await page.isVisible(homePage.h2TxtSliderTwo);
  await page.isVisible(homePage.blockSliderTwo);
  await page.waitForTimeout(500);
});

test("Home blockSliderOne click", async ({ page }) => {
  await page.click(homePage.swiperSliderLeft);
  await page.isVisible(homePage.h1TxtSliderOne);
  await page.isVisible(homePage.blockSliderOne);
  await page.waitForTimeout(500);
});

test("Home gotopageL7Services click", async ({ page }) => {
  await page.click(homePage.servicesL7);
  await page.waitForURL(urlPages.l7Url);
  await page.isVisible(l7Page.h1TxtL7);
});

test("Home gotopageL3Services click", async ({ page }) => {
  await page.click(homePage.servicesL3);
  await page.waitForURL(urlPages.l3Url);
  await page.isVisible(l3Page.h1TxtL3);
});

test("Home gotopageDedicatedServices click", async ({ page }) => {
  await page.click(homePage.servicesCloudDedicated);
  await page.waitForURL(urlPages.cloudDedicatedUrl);
  await page.isVisible(cloudDedicatedPage.h1TxtCloudDedicated);
});

test("Home gotopageVDSServices click", async ({ page }) => {
  await page.click(homePage.servicesCloudVds);
  await page.waitForURL(urlPages.cloudVdsUrl);
  await page.isVisible(cloudVdsPage.h1TxtCloudVds);
});

test("Home gotopageHostingServices click", async ({ page }) => {
  await page.click(homePage.servicesCloudHosting);
  await page.waitForURL(urlPages.cloudHostingUrl);
  await page.isVisible(cloudHostingPage.h1TxtCloudHosting);
});

test("Home siteServiceQuizHosting click", async ({ page }) => {
  await page.click(homePage.btnServicesQuiz);
  await page.isVisible(homePage.popUpServicesQuiz);
  await page.isVisible(homePage.txtPopUpServicesQuizOne);
  await page.click(homePage.radioBtnWebsiteQuiz);
  await page.click(homePage.nextPopUpServicesQuiz);
  await page.isVisible(homePage.popUpServicesQuiz);
  await page.isVisible(homePage.txtPopUpServicesQuizTwo);
  await page.click(homePage.siteRadioBtnPopUpServicesQuizOne);
  await page.click(homePage.nextPopUpServicesQuiz);
  await page.isVisible(homePage.wrapperPopUp);
  await page.isVisible(homePage.txtPopUpServicesQuizThree);
  await page.click(homePage.siteThreePopUpRadioBtnOne);
  await page.click(homePage.nextPopUpServicesQuiz);
  await page.isVisible(homePage.selectionServiceOne);
  await page.click(homePage.moreLinkServicesQuiz);
  await page.waitForURL(urlPages.cloudHostingUrl);
});

