import { BookCrawlerFactory } from './book-crawler.factory';
import { AladinBot } from './bot/aladin/Aladin.bot';
import { InterparkBot } from './bot/interpark/interpark.bot';
import { KyoboBot } from './bot/kyobo/kyobo.bot';
import { Yes24Bot } from './bot/yes24/yes24.bot';

describe('BookCrawlerFactory', () => {

    it('should be return Aladin Bot', async () => {
        const site = "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=236186172"
        const boot =  await BookCrawlerFactory.createRobot(site)

        expect(boot instanceof AladinBot).toBeTruthy();
    });

    it('should be return Interpark Bot', async () => {
        const site = "https://book.interpark.com/product/BookDisplay.do?_method=detail&sc.shopNo=0000400000&sc.prdNo=332147977&pis1=book&pis2=product"
        const boot =  await BookCrawlerFactory.createRobot(site)

        expect(boot instanceof InterparkBot).toBeTruthy();
    });

    it('should be return Kyobo Bot', async () => {
        const site = "https://product.kyobobook.co.kr/detail/S000001810241"
        const boot =  await BookCrawlerFactory.createRobot(site)

        expect(boot instanceof KyoboBot).toBeTruthy();
    });

    it('should be return Yes24 Bot', async () => {
        const site = "http://www.yes24.com/Product/Goods/89649360"
        const boot =  await BookCrawlerFactory.createRobot(site)

        expect(boot instanceof Yes24Bot).toBeTruthy();
    });

    it('should be return Erroe', async () => {
        const site = "unexpected site url"

        const result = () => BookCrawlerFactory.createRobot(site)

        //Then
        await expect(result).rejects.toThrow(Error)
    });
});
