import { Test, TestingModule } from '@nestjs/testing';
import { FlexRobot } from './flex.robot';

describe('Robot', () => {
  let provider: FlexRobot;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlexRobot],
    }).compile();

    provider = module.get<FlexRobot>(FlexRobot);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
