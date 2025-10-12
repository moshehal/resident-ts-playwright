import { Locator, Page } from "@playwright/test";
import MattressesPage from "./MattressesPage.js";

export default class MainPage{
    
    mattressesHeadline: Locator;

    constructor(protected page:Page)
    {
        this.mattressesHeadline = this.page.getByTestId('hover_link_Mattresses').getByRole('link', { name: 'Mattresses' });
    }

    public async HoverOverTheMattressesHeadline() : Promise<MattressesPage>
    {
       await this.mattressesHeadline.click();
       return await new MattressesPage(this.page);
    }

}