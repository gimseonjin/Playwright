import { Module } from '@nestjs/common';
import { BookCrawlerFactory } from './book-crawler.factory';

@Module({
  providers: [BookCrawlerFactory]
})
export class BookCrawlerModule {}
