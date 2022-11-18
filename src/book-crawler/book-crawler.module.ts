import { Module } from '@nestjs/common';
import { BookCrawler } from './book-crawler';

@Module({
  providers: [BookCrawler]
})
export class BookCrawlerModule {}
