import { expect, Locator, Page } from "@playwright/test";

export default class CartPage{

    cartItems: Locator;
    constructor(protected page: Page)
    {
        this.cartItems = this.page.getByTestId('cart_item_Awara Natural Luxury Hybrid Mattress');
    }

    public async ValidateCart()
    {
        expect(await this.cartItems, "Item added to the cart").not.toBeUndefined();
    }
}