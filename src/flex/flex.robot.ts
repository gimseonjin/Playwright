import { Page } from '@playwright/test';
import { BookReqeustDto } from './dto/book.reqest.dto';

export class FlexRobot {

    private bookRequestDto : BookReqeustDto    

    constructor(
        private readonly page: Page
    ){}

    static creatRobot(page: Page) : FlexRobot{
        const robot = new FlexRobot(page)
        return robot
    }

    setBookInfo(
        bookRequestDto : BookReqeustDto
    ){
        this.bookRequestDto = bookRequestDto
    }

    run = async () => {
        await this.goToFlex()
        await this.login()
        await this.enterPurchasePage()
        await this.typedBookInfo()
        await this.save()
    }

    goToFlex = async () => {
        await this.page.goto('https://flex.team/auth/login');
    }

    login = async () => {
        await this.page.getByPlaceholder('이메일 주소').click();
        await this.page.getByPlaceholder('이메일 주소').fill('seonjin.kim@business-canvas.com');
        await this.page.getByPlaceholder('이메일 주소').press('Enter');
        await this.page.getByPlaceholder('비밀번호').fill('emm05235@@');
        await this.page.getByPlaceholder('비밀번호').press('Enter');
    }

    enterPurchasePage = async () => {
        await this.page.getByRole('link', { name: '워크플로우' }).click();
        await this.page.getByRole('navigation').filter({ hasText: '내 문서함작성하기' }).getByRole('link', { name: '작성하기' }).click();
        await this.page.getByRole('button', { name: '🖥️, desktop_computer 구매 신청 비용 처리' }).click();
    }

    typedBookInfo = async () => {
        const bookInfo = this.bookRequestDto.getInfo()
        
        for(const info of bookInfo){
            await this.typeInfoWithLabel(info)
        }
        
        // 결제 방식 선택하기는 드롭다운 방식이라 아래와 같이 하드코딩
        await this.page.locator('.ant-select-selection-search').click();
        await this.page.getByText('운영팀에 요청').nth(1).click();
    }

    typeInfoWithLabel = async ([k, v]) =>{
        await this.page.getByLabel(k).click();
        await this.page.getByLabel(k).fill(v);
    }

    save = async () => {
        await this.page.getByRole('banner').getByRole('button', { name: '취소' }).click();
    }

}
