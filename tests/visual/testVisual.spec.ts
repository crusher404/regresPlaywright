import { test, expect, firefox, chromium, webkit } from '@playwright/test';
import { UrlPages } from '../../tests/desktop/pages/urlPage';
import { HomePage } from './../desktop/pages/homePage';


const urlPages = new UrlPages();
const homePage = new HomePage();


test('homeUrl', async ({ page }) => {
    await page.goto(urlPages.homeUrl);
    await page.waitForTimeout(5000)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot({name: 'test222.png',
                                                                    maxDiffPixelRatio: 0.03,
                                                                    threshold: 0.8,
                                                                        });
});

test('l3Url', async ({ page }) => {
    await page.goto(urlPages.l3Url);
    await page.waitForTimeout(5000)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot('test225.png'); 
});

test('l7Url', async ({ page }) => {
    await page.goto(urlPages.l7Url);
    await page.waitForTimeout(5000)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot('test226.png');
});
