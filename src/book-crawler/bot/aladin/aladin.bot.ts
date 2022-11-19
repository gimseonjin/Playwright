import { AbstractBot } from '../abstract.bot';

export class AladinBot extends AbstractBot{

    getTitle = async (): Promise<string> => {
        const mainTitle = await this.page.locator('.Ere_bo_title').innerText();
        const subTitle = await this.page.locator('.Ere_sub1_title').innerText();
        
        return mainTitle + subTitle;
    }

    getWriter = async (): Promise<string> => {
        return await this.page.locator('.Ere_sub2_title').nth(0).innerText();
    }

    getImg = async (): Promise<string> => {
        return await this.page.locator('#CoverMainImage').nth(0).getAttribute("src");
    }
    
}