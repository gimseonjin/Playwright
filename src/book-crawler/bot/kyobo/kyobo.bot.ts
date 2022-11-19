import { AbstractBot } from '../abstract.bot';

export class KyoboBot extends AbstractBot{

    getTitle = async (): Promise<string> => {
        return await this.page.locator('.prod_title_area').nth(0).innerText();
    }

    getWriter = async (): Promise<string> => {
        return await this.page.locator('.author').innerText();
    }

    getImg = async (): Promise<string> => {
        return await this.page.getByAltText("리팩터링 대표 이미지").nth(0).getAttribute("src");
    }
    
}