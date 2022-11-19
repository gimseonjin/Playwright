import exp from 'constants';
import { Browser, chromium, Page } from 'playwright';
import { AbstractBot } from '../abstract.bot';
import { AladinBot } from './Aladin.bot';

describe('Aladin Bot', () => {

    let browser : Browser
    let page : Page
    let robot : AbstractBot


    beforeAll(async () => {
        browser = await chromium.launch({ headless: true });
        page = await browser.newPage();
        robot = new AladinBot("https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=236186172",page)    

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
