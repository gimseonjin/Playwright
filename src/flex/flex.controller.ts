import { Controller, Get } from '@nestjs/common';
import { InjectPage } from 'nestjs-playwright';
import { Page } from '@playwright/test';
import { FlexRobot } from './flex.robot';
import { BookReqeustDto } from './dto/book.reqest.dto';

@Controller('flex')
export class FlexController {

    constructor(
        @InjectPage() private readonly page: Page
        ){}

    @Get()
    async getHello(): Promise<string> {

        const robot = FlexRobot.creatRobot(this.page)

        const bookRequestDto = new BookReqeustDto("name", "link", "1", "100원", "reason")

        robot.setBookInfo(bookRequestDto)

        await robot.run()
        
        return "done"
    }
}
