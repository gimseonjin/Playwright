import { Module } from '@nestjs/common';
import { BookCrawlerFactory } from './book-crawler.fatory';

@Module({
  providers: [BookCrawlerFactory]
})
export class BookCrawlerModule {}
