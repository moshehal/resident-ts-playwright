import { test, expect } from '@playwright/test';
import MainPage from '../../pages/MainPage.js';
import ApplicationUrl from '../../helpers/ApplicationUrl.js';

test('test', async ({ page }) => {

    await page.goto(ApplicationUrl.UI_BASE_URL);
    await expect(page).toHaveURL(ApplicationUrl.UI_BASE_URL)
  
    const mainPage = new MainPage(page);
    const mattressesPage = await mainPage.HoverOverTheMattressesHeadline();
    await expect(page).toHaveURL(`${ApplicationUrl.UI_BASE_URL}mattresses`);

    const mattresPage = await mattressesPage.ClickOnTheShopNowButton();
    const price = mattresPage.GetPrice();
    const cartPage = await mattresPage.ClickOnAddToCartButton();

    await cartPage.ValidateCart();
});