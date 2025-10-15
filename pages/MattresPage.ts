import { Locator, Page } from "@playwright/test";
import CartPage from "./CartPage.js";

export default class MattresPage
{
    addToCartButton: Locator;

    constructor(protected page: Page)
    {
        this.addToCartButton = this.page.getByTestId('addtocart_btn');
    }

    public async ClickOnAddToCartButton() : Promise<CartPage>
    {
        await this.addToCartButton.click();
        return await new CartPage(this.page);
    }
}