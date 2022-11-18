import { Injectable } from '@nestjs/common';
import { Page } from '@playwright/test';
import { BookReqeustDto } from 'src/common/book.reqest.dto';

@Injectable()
export class BookCrawler {
    constructor(
        private readonly page: Page,
        private readonly bookRequestDto : BookReqeustDto
    ){}

    run = async () => {
        await this.goToSite()
    }
}
