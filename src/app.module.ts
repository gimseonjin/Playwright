import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FlexModule } from './flex/flex.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal : true}),
    FlexModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
