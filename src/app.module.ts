import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FlexModule } from './flex/flex.module';
import { BookCrawlerModule } from './book-crawler/book-crawler.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal : true}),
    FlexModule,
    BookCrawlerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
