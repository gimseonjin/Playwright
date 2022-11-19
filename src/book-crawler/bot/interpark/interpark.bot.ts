import { AbstractBot } from '../abstract.bot';

export class InterparkBot extends AbstractBot{

    getTitle = async (): Promise<string> => {
        return await this.page.locator('.titleWrap').innerText();
    }

    getWriter = async (): Promise<string> => {
        return await this.page.locator('.bInfo_txt').innerText();
    }

    getImg = async (): Promise<string> => {
        return await this.page.locator('.bd').nth(0).getAttribute("src");
    }
    
}