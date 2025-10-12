import { Locator, Page } from "@playwright/test";
import CartPage from "./CartPage.js";

export default class MattresPage
{
    priceElement: Locator;
    addToCartButton: Locator;

    constructor(protected page: Page)
    {
        this.priceElement = this.page.getByTestId("add_to_cart_property_selector_size_selected_original_price");
        this.addToCartButton = this.page.getByTestId('addtocart_btn');
    }

    public async GetPrice() : Promise<number>
    {
        return await parseFloat((await this.priceElement.innerText()).replace('$', ''));
    }

    public async ClickOnAddToCartButton() : Promise<CartPage>
    {
        await this.addToCartButton.click();
        return await new CartPage(this.page);
    }
}