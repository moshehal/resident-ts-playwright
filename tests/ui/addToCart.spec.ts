import { test, expect } from '@playwright/test';
import MainPage from '../../pages/MainPage.js';
import ApplicationUrl from '../../helpers/ApplicationUrl.js';

test('Add a mattress to the cart', async ({ page }) => {

    await page.goto(ApplicationUrl.UI_BASE_URL);
    await expect(page, `Application's URL is: ${ApplicationUrl.UI_BASE_URL}`).toHaveURL(ApplicationUrl.UI_BASE_URL)
  
    const mainPage = new MainPage(page);
    const mattressesPage = await mainPage.ClickShopNowOnTheMattressesHeadline();
    await expect(page, `Application's url is: ${ApplicationUrl.UI_BASE_URL}mattresses`).toHaveURL(`${ApplicationUrl.UI_BASE_URL}mattresses`);

    const mattresPage = await mattressesPage.ClickOnTheShopNowButton();
    const cartPage = await mattresPage.ClickOnAddToCartButton();

    await cartPage.ValidateCart();
});