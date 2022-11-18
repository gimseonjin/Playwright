import { Test, TestingModule } from '@nestjs/testing';
import { BookCrawler } from './book-crawler';

describe('BookCrawler', () => {
  let provider: BookCrawler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookCrawler],
    }).compile();

    provider = module.get<BookCrawler>(BookCrawler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
