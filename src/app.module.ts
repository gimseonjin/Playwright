import { Module } from '@nestjs/common';
import { PlaywrightModule } from 'nestjs-playwright';
import { FlexModule } from './flex/flex.module';

@Module({
  imports: [
    FlexModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
