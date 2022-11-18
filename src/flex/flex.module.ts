import { Module } from '@nestjs/common';
import { PlaywrightModule } from 'nestjs-playwright';
import { FlexController } from './flex.controller';
import { FlexRobot } from './flex.robot';

@Module({
  imports: [
    PlaywrightModule.forRoot(
      {
        headless: true,
        channel: 'chrome',
        isGlobal: true, 
      }
    ),
  ],
  controllers: [FlexController],
  providers: [FlexRobot]
})
export class FlexModule {}
