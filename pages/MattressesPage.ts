import { Locator, Page } from "@playwright/test";
import MattressPage from "./MattressPage.js";

export default class MattressesPage{

    mattresElement: Locator;
    shopNowButton: Locator;

    constructor(protected page: Page)
    {
        this.mattresElement = this.page.getByTestId('the_awara_hybrid_mattress_30_card');
        this.shopNowButton = this.mattresElement.getByTestId('mattress_shop_now_btn');
    }

    public async ClickOnTheShopNowButton() : Promise<MattressPage>
    {
        await this.shopNowButton.click();
        return new MattressPage(this.page);
    }
}