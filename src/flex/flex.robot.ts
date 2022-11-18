import { Page } from '@playwright/test';
import { BookReqeustDto } from '../common/book.reqest.dto';

export class FlexRobot {

    constructor(
        private readonly page: Page,
        private readonly bookRequestDto : BookReqeustDto
    ){}

    run = async () => {
        await this.goToFlex()
        await this.login()
        await this.enterPurchasePage()
        await this.typedBookInfo()
        await this.save()
    }

    goToFlex = async () => {
        await this.page.goto(process.env.FLEX_AUTH_URL);
    }

    login = async () => {
        const authInfo = [process.env.FLEX_AUTH_EMAIL, process.env.FLEX_AUTH_PASSWORD];

        //authInfo.forEach(async(info) => await this.typedInfo(info));
        for(const info of authInfo) await this.typedInfo(info);
    }

    typedInfo = async (info : string) => {
        const jsonInfo = JSON.parse(info);
        await this.typedInfoIntoPlaceholder(jsonInfo);
    }

    typedInfoIntoPlaceholder = async (info) => {
        await this.page.getByPlaceholder(info.key).fill(info.value);
        await this.page.getByPlaceholder(info.key).press('Enter');
    }

    enterPurchasePage = async () => {
        await this.page.getByRole('link', { name: '워크플로우' }).click();
        await this.page.getByRole('navigation').filter({ hasText: '내 문서함작성하기' }).getByRole('link', { name: '작성하기' }).click();
        await this.page.getByRole('button', { name: '🖥️, desktop_computer 구매 신청 비용 처리' }).click();
    }

    typedBookInfo = async () => {
        const bookInfo = this.bookRequestDto.getInfo();

        //bookInfo.forEach(async(value, key) => await this.typeInfoWithLabel(value, key));
        for(const info of bookInfo) await this.typeInfoWithLabel(info[1], info[0]);
        
        // 결제 방식 선택하기는 드롭다운 방식이라 아래와 같이 하드코딩
        await this.page.locator('.ant-select-selection-search').click();
        await this.page.getByText('운영팀에 요청').nth(1).click();
    }

    typeInfoWithLabel = async (v : string, k : string) =>{
        await this.page.getByLabel(k).click();
        await this.page.getByLabel(k).fill(v);
    }

    save = async () => {
        await this.page.getByRole('banner').getByRole('button', { name: '취소' }).click();
        //await this.page.getByRole('banner').getByRole('button', { name: '보내기' }).click();
    }

}
