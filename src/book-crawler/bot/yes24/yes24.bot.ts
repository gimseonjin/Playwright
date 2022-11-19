import { AbstractBot } from '../abstract.bot';

export class Yes24Bot extends AbstractBot{

    getTitle = async (): Promise<string> => {
        return await this.page.locator('.gd_titArea').innerText();
    }

    getWriter = async (): Promise<string> => {
        return await this.page.locator('.gd_auth').innerText();
    }

    getImg = async (): Promise<string> => {
        return await this.page.locator('.gImg').nth(0).getAttribute("src");
    }
    
}