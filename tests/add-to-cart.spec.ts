import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa.awarasleep.com/');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByTestId('hover_link_Mattresses').getByRole('link', { name: 'Mattresses' }).click();
  await page.getByTestId('the_awara_hybrid_mattress_30_card').getByTestId('mattress_shop_now_btn').click();
  await page.getByTestId('addtocart_btn').click();
  await page.locator('.MuiDialog-root.MuiModal-root.mui-hkxtj7 > .MuiDialog-container > .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation24 > .mui-1ij9x2c > .MuiSvgIcon-root > path').click();
});