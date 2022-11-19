import { Browser, chromium, Page } from 'playwright';
import { AbstractBot } from '../abstract.bot';
import { InterparkBot } from './interpark.bot';

describe('InterparkBot Bot', () => {

    let browser : Browser
    let page : Page
    let robot : AbstractBot


    beforeAll(async () => {
        browser = await chromium.launch({ headless: true });
        page = await browser.newPage();
        robot = new InterparkBot("https://book.interpark.com/product/BookDisplay.do?_method=detail&sc.shopNo=0000400000&sc.prdNo=332147977&pis1=book&pis2=product",page)    

        await robot.goToSite()
      }, 30000);

    it('should be defined', () => {
        expect(robot).toBeDefined();
    });

    it('should get title', async () => {
        //Given
        //When
        const actualValue = await robot.getTitle()

        //Then
        expect(actualValue).toBeDefined();
    }, 30000);

    it('should get writer', async () => {
        //Given
        //When
        const actualValue = await robot.getWriter()

        //Then
        expect(actualValue).toBeDefined();
    }, 30000);
    
    it('should get image', async () => {
        //Given
        //When
        const actualValue = await robot.getImg()

        //Then
        expect(actualValue).toBeDefined();
    }, 30000);

});
